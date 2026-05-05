from flask import Blueprint, render_template, request, jsonify, abort, current_app
from flask_login import login_required
from sqlalchemy import or_
from sqlalchemy.orm import joinedload
from models import db, Book, User, BorrowRecord, LoginHistory
from utils import (
    log_action, cst_now,
    cleanup_expired_online_users, list_active_sessions, count_active_sessions,
    kick_active_session, _get_db_config,
    admin_required, db_transaction, save_book_image, validate_book_form,
)
import pymysql

admin_bp = Blueprint('admin', __name__)


@admin_bp.route('/admin')
@login_required
@admin_required(json_response=False)
def admin_index():
    tab = request.args.get('tab', 'online')
    search = request.args.get('search', '').strip()

    # 自动处理逾期
    from utils import process_expired_reservations
    process_expired_reservations()

    # 计算今日开始时间（用于分离今日和过往记录）
    # 移除时区信息以匹配数据库中的 naive datetime
    today_start = cst_now().replace(hour=0, minute=0, second=0, microsecond=0, tzinfo=None)

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
    if tab == 'online':
        cleanup_expired_online_users()
        online_users_list = list_active_sessions(search=search)
        login_history = LoginHistory.query.order_by(LoginHistory.login_time.desc()).limit(50).all()

    elif tab == 'books':
        book_query = Book.query
        if search:
            book_query = book_query.filter(or_(
                Book.title.contains(search), Book.author.contains(search), Book.isbn.contains(search), Book.category.contains(search)
            ))
        books = book_query.order_by(Book.id.desc()).all()

    elif tab == 'current':
        current_query = BorrowRecord.query.options(joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)).filter(BorrowRecord.status.in_(['pending', 'picked_up']))
        if search:
            current_query = BorrowRecord.query.join(Book).join(User).filter(
                BorrowRecord.status.in_(['pending', 'picked_up']),
                or_(Book.title.contains(search), User.username.contains(search))
            )
        current_records = current_query.order_by(BorrowRecord.id.desc()).all()

    elif tab == 'history':
        history_query = BorrowRecord.query.options(joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)).filter(BorrowRecord.status.in_(['returned', 'rejected', 'expired']))
        if search:
            history_query = BorrowRecord.query.join(Book).join(User).filter(
                BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
                or_(Book.title.contains(search), User.username.contains(search))
            )
        all_history = history_query.order_by(BorrowRecord.id.desc()).all()

        # 分离今日预约记录和过往借阅记录
        today_records = [r for r in all_history if r.borrow_date >= today_start]
        past_records = [r for r in all_history if r.borrow_date < today_start]

    online_count = count_active_sessions()
    books_count = Book.query.count()
    users_count = User.query.count()
    banned_count = User.query.filter(User.banned_until.isnot(None), User.banned_until > cst_now().replace(tzinfo=None)).count()
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    current_count = BorrowRecord.query.filter(BorrowRecord.status.in_(['pending', 'picked_up'])).count()
    history_count = BorrowRecord.query.filter(BorrowRecord.status.in_(['returned', 'rejected', 'expired'])).count()

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
        login_history=login_history
    )

@admin_bp.route('/book/add', methods=['POST'])
@login_required
@admin_required()
def add_book():
    cleaned, err = validate_book_form(request.form)
    if err:
        return jsonify({'success': False, 'message': err})

    image_filename = save_book_image(
        request.files.get('image'),
        current_app.config['UPLOAD_FOLDER'],
        current_app.config['ALLOWED_EXTENSIONS'],
    )

    with db_transaction(error_message='添加失败，请检查数据是否重复') as tx:
        book = Book(image=image_filename, **cleaned)
        db.session.add(book)
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('添加图书', f"书名: {cleaned['title']}, 库存: {cleaned['stock']}")
    return jsonify({'success': True, 'message': '图书添加成功'})

@admin_bp.route('/book/edit/<int:book_id>', methods=['POST'])
@login_required
@admin_required()
def edit_book(book_id):
    book = db.session.get(Book, book_id)
    if not book: abort(404)

    cleaned, err = validate_book_form(
        request.form,
        defaults={'stock': book.stock, 'total': book.total or book.stock},
    )
    if err:
        return jsonify({'success': False, 'message': err})

    new_image = save_book_image(
        request.files.get('image'),
        current_app.config['UPLOAD_FOLDER'],
        current_app.config['ALLOWED_EXTENSIONS'],
        old_filename=book.image,
    )

    for k, v in cleaned.items():
        setattr(book, k, v)
    if new_image:
        book.image = new_image

    with db_transaction(error_message='更新失败') as tx:
        pass
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('编辑图书', f"书名: {cleaned['title']}, 库存: {cleaned['stock']}")
    return jsonify({'success': True, 'message': '图书更新成功'})

@admin_bp.route('/book/delete/<int:book_id>', methods=['POST'])
@login_required
@admin_required()
def delete_book(book_id):
    book = db.session.get(Book, book_id)
    if not book: abort(404)
    if BorrowRecord.query.filter(BorrowRecord.book_id == book_id, BorrowRecord.status.in_(['pending', 'picked_up'])).count() > 0:
        return jsonify({'success': False, 'message': '该图书还有未完成的预约记录，不能删除'})

    title = book.title
    with db_transaction(error_message='删除失败') as tx:
        db.session.delete(book)
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('删除图书', f'书名: {title}, ID: {book_id}')
    return jsonify({'success': True, 'message': '图书删除成功'})

@admin_bp.route('/admin/approve_reservation/<int:record_id>', methods=['POST'])
@login_required
@admin_required()
def approve_reservation(record_id):
    record = db.session.get(BorrowRecord, record_id)
    if not record or record.status != 'pending':
        return jsonify({'success': False, 'message': '当前记录不可操作'})
    with db_transaction() as tx:
        record.status = 'picked_up'
        record.pickup_date = cst_now()
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('审核预约', f'同意用户 {record.user.username} 领取图书: {record.book.title}')
    return jsonify({'success': True, 'message': '已同意领取图书'})

@admin_bp.route('/admin/reject_reservation/<int:record_id>', methods=['POST'])
@login_required
@admin_required()
def reject_reservation(record_id):
    record = db.session.get(BorrowRecord, record_id)
    if not record or record.status != 'pending':
        return jsonify({'success': False, 'message': '当前记录不可操作'})
    with db_transaction() as tx:
        record.book.restore_stock()
        record.status = 'rejected'
        record.reject_date = cst_now()
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('拒绝预约', f'拒绝用户 {record.user.username} 领取图书: {record.book.title}')
    return jsonify({'success': True, 'message': '已拒绝领取'})

@admin_bp.route('/admin/return_book/<int:record_id>', methods=['POST'])
@login_required
@admin_required()
def admin_return_book(record_id):
    record = db.session.get(BorrowRecord, record_id)
    if not record or record.status != 'picked_up':
        return jsonify({'success': False, 'message': '当前记录不可操作'})
    with db_transaction(error_message='归还操作失败') as tx:
        record.status = 'returned'
        record.return_date = cst_now()
        record.book.restore_stock()
        record.book.increment_borrow_count()
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('管理员归还图书', f'书名: {record.book.title}, 记录ID: {record_id}')
    return jsonify({'success': True, 'message': '归还成功'})

@admin_bp.route('/admin/check_new_reservations', methods=['GET'])
@login_required
@admin_required()
def check_new_reservations():
    from utils import process_expired_reservations
    process_expired_reservations()
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    latest_record = BorrowRecord.query.filter(BorrowRecord.status.in_(['pending', 'picked_up'])).order_by(BorrowRecord.id.desc()).first()
    return jsonify({'pending_count': pending_count, 'latest_id': latest_record.id if latest_record else 0})

@admin_bp.route('/admin/logs')
@login_required
@admin_required()
def get_logs():
    limit = request.args.get('limit', 50, type=int)
    logs = LoginHistory.query.filter(LoginHistory.action.isnot(None)).order_by(LoginHistory.login_time.desc()).limit(limit).all()
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
            'is_online': log.is_online
        } for log in logs]
    })

@admin_bp.route('/admin/kick_user/<int:user_id>', methods=['POST'])
@login_required
@admin_required()
def kick_user(user_id):
    username = kick_active_session(user_id, user_type='user')
    if not username:
        return jsonify({'success': False, 'message': '该用户当前不在线'})
    log_action('踢出用户', f'强制下线用户: {username}, ID: {user_id}')
    return jsonify({'success': True, 'message': f'已将 {username} 强制下线'})

@admin_bp.route('/admin/ban_user/<int:user_id>', methods=['POST'])
@login_required
@admin_required()
def ban_user(user_id):
    user = db.session.get(User, user_id)
    if not user:
        return jsonify({'success': False, 'message': '用户不存在'}), 404

    try:
        minutes = int(request.form.get('minutes') or (request.json or {}).get('minutes', 0))
    except (TypeError, ValueError):
        return jsonify({'success': False, 'message': '封禁时长必须是整数（分钟）'}), 400

    if minutes <= 0:
        return jsonify({'success': False, 'message': '封禁时长必须大于 0 分钟'}), 400
    if minutes > 60 * 24 * 365:
        return jsonify({'success': False, 'message': '封禁时长过长，请勿超过一年'}), 400

    with db_transaction() as tx:
        until = user.ban_for_minutes(minutes)
    if tx.error:
        return jsonify({'success': False, 'message': tx.error}), 500

    kick_active_session(user_id, user_type='user')
    log_action('封禁用户', f'用户: {user.username}, 时长: {minutes} 分钟, 截止: {until.strftime("%Y-%m-%d %H:%M:%S")}')
    return jsonify({
        'success': True,
        'message': f'已封禁 {user.username} {minutes} 分钟',
        'banned_until': until.strftime('%Y-%m-%d %H:%M:%S'),
        'remaining_seconds': user.ban_remaining_seconds,
    })

@admin_bp.route('/admin/unban_user/<int:user_id>', methods=['POST'])
@login_required
@admin_required()
def unban_user(user_id):
    user = db.session.get(User, user_id)
    if not user:
        return jsonify({'success': False, 'message': '用户不存在'}), 404
    if not user.is_banned:
        return jsonify({'success': False, 'message': '该用户未被封禁'})

    with db_transaction() as tx:
        user.unban()
    if tx.error:
        return jsonify({'success': False, 'message': tx.error}), 500

    log_action('解除封禁', f'用户: {user.username}')
    return jsonify({'success': True, 'message': f'已解除 {user.username} 的封禁'})

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

@admin_bp.route('/api/add_image_column', methods=['POST'])
@login_required
@admin_required()
def add_image_column():
    connection = None
    try:
        cfg = _get_db_config()
        connection = pymysql.connect(**cfg)
        cursor = connection.cursor()
        cursor.execute("SHOW COLUMNS FROM books LIKE 'image'")
        if cursor.fetchone():
            cursor.close()
            return jsonify({'success': True, 'message': 'image字段已存在'})
        cursor.execute("ALTER TABLE books ADD COLUMN image VARCHAR(255)")
        connection.commit()
        cursor.close()
        return jsonify({'success': True, 'message': 'image字段添加成功'})
    except Exception as e:
        return jsonify({'success': False, 'message': f'添加失败：{str(e)}'})
    finally:
        if connection: connection.close()
