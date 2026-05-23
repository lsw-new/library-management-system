from flask import Blueprint, render_template, request, jsonify
from flask.typing import ResponseReturnValue
from flask_login import login_required
from sqlalchemy import or_
from sqlalchemy.orm import joinedload

from models import db, Book, User, BorrowRecord, LoginHistory
from utils import (
    log_action, naive_cst_now,
    cleanup_expired_online_users, list_active_sessions, count_active_sessions,
    admin_required, get_csrf_token, validate_csrf_token,
)

from .books import register_book_routes
from .borrows import register_borrow_routes
from .users import register_user_routes

admin_bp = Blueprint('admin', __name__)

register_book_routes(admin_bp)
register_borrow_routes(admin_bp)
register_user_routes(admin_bp)

ADMIN_ACTION_CSRF_SESSION_KEY = 'admin_action_csrf_token'


def get_admin_action_csrf_token() -> str:
    return get_csrf_token(ADMIN_ACTION_CSRF_SESSION_KEY)


@admin_bp.before_request
def _validate_admin_csrf() -> ResponseReturnValue | None:
    if request.method != 'POST':
        return None
    if validate_csrf_token(ADMIN_ACTION_CSRF_SESSION_KEY):
        return None
    return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403


@admin_bp.route('/admin')
@login_required
@admin_required(json_response=False)
def admin_index():
    tab = request.args.get('tab', 'online')
    search = request.args.get('search', '').strip()

    from utils import process_expired_reservations
    process_expired_reservations()

    today_start = naive_cst_now().replace(hour=0, minute=0, second=0, microsecond=0)

    online_users_list = []
    login_history = []
    books = []
    current_records = []
    today_records = []
    past_records = []
    users_list = []

    if tab == 'users':
        user_query = User.query
        if search:
            s = f'%{search}%'
            user_query = user_query.filter(or_(
                User.username.like(s), User.email.like(s), User.student_id.like(s)
            ))
        users_list = user_query.order_by(User.id.desc()).all()

    elif tab == 'online':
        cleanup_expired_online_users()
        online_users_list = list_active_sessions(search=search)
        login_history = LoginHistory.query.order_by(LoginHistory.login_time.desc()).limit(50).all()

    elif tab == 'books':
        book_query = Book.query
        if search:
            book_query = book_query.filter(or_(
                Book.title.contains(search), Book.author.contains(search),
                Book.isbn.contains(search), Book.category.contains(search)
            ))
        books = book_query.order_by(Book.id.desc()).all()

    elif tab == 'current':
        current_query = BorrowRecord.query.options(
            joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
        ).filter(BorrowRecord.status.in_(['pending', 'picked_up']))
        if search:
            current_query = BorrowRecord.query.join(Book).join(User).options(
                joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
            ).filter(
                BorrowRecord.status.in_(['pending', 'picked_up']),
                or_(Book.title.contains(search), User.username.contains(search))
            )
        current_records = current_query.order_by(BorrowRecord.id.desc()).all()

    elif tab == 'history':
        history_query = BorrowRecord.query.options(
            joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
        ).filter(BorrowRecord.status.in_(['returned', 'rejected', 'expired']))
        if search:
            history_query = BorrowRecord.query.join(Book).join(User).options(
                joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
            ).filter(
                BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
                or_(Book.title.contains(search), User.username.contains(search))
            )
        all_history = history_query.order_by(BorrowRecord.id.desc()).all()
        today_records = [r for r in all_history if r.borrow_date >= today_start]
        past_records = [r for r in all_history if r.borrow_date < today_start]

    online_count = count_active_sessions()
    books_count = Book.query.count()
    users_count = User.query.count()
    banned_count = User.query.filter(
        User.banned_until.isnot(None),
        User.banned_until > naive_cst_now()
    ).count()
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    current_count = BorrowRecord.query.filter(
        BorrowRecord.status.in_(['pending', 'picked_up'])
    ).count()
    history_count = BorrowRecord.query.filter(
        BorrowRecord.status.in_(['returned', 'rejected', 'expired'])
    ).count()
    new_history_count = BorrowRecord.query.filter(
        BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
        BorrowRecord.borrow_date >= today_start
    ).count()

    return render_template(
        'admin.html',
        tab=tab, search=search, books=books, current_records=current_records,
        today_records=today_records if tab == 'history' else [],
        past_records=past_records if tab == 'history' else [],
        online_users=online_users_list,
        users_list=users_list,
        online_count=online_count, books_count=books_count,
        users_count=users_count, banned_count=banned_count,
        pending_count=pending_count, history_count=history_count,
        new_history_count=new_history_count, current_count=current_count,
        login_history=login_history,
        admin_action_csrf_token=get_admin_action_csrf_token(),
    )


@admin_bp.route('/admin/check_new_reservations', methods=['GET'])
@login_required
@admin_required()
def check_new_reservations():
    from utils import process_expired_reservations
    process_expired_reservations()
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    latest_record = BorrowRecord.query.filter(
        BorrowRecord.status.in_(['pending', 'picked_up'])
    ).order_by(BorrowRecord.id.desc()).first()
    return jsonify({
        'pending_count': pending_count,
        'latest_id': latest_record.id if latest_record else 0,
    })


@admin_bp.route('/admin/logs')
@login_required
@admin_required()
def get_logs():
    limit = min(request.args.get('limit', 50, type=int), 500)
    logs = LoginHistory.query.filter(
        LoginHistory.action.isnot(None)
    ).order_by(LoginHistory.login_time.desc()).limit(limit).all()
    return jsonify({
        'success': True,
        'logs': [{
            'id': log.id,
            'username': log.username_snapshot,
            'user_type': '管理员' if log.user_type == 'admin' else '用户' if log.user_type == 'user' else '系统',
            'ip': log.ip_address,
            'time': log.login_time.strftime('%Y-%m-%d %H:%M:%S'),
            'action': log.action or '登录',
            'details': log.details or '',
            'is_online': log.is_online,
        } for log in logs]
    })


@admin_bp.route('/api/online_users', methods=['GET'])
@login_required
@admin_required()
def get_online_users():
    cleanup_expired_online_users()
    users = list_active_sessions()
    return jsonify({
        'success': True,
        'count': len(users),
        'users': [{
            'user_id': u.user_id,
            'username': u.username,
            'user_type': u.user_type,
            'ip_address': u.ip_address or '',
            'last_seen': u.last_seen.strftime('%H:%M:%S'),
            'login_time': u.login_time.strftime('%H:%M:%S'),
        } for u in users]
    })
