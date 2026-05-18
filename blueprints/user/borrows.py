import threading
from datetime import datetime, timedelta

from flask import Blueprint, Response, jsonify, request, abort, render_template
from flask_login import login_required, current_user

from email_utils import send_borrow_notification_email
from models import db, User, Book, BorrowRecord
from utils import log_action, cst_now, db_transaction
from blueprints.user_helpers import (
    build_borrow_insights,
    build_borrow_stats,
    get_borrow_action_csrf_token,
    serialize_borrow_record,
    validate_borrow_action_csrf,
)

MAX_BORROW_DAYS = 12
MAX_ACTIVE_BORROWS = 2


def register_borrow_routes(bp: Blueprint) -> None:

    @bp.route('/book/borrow/<int:book_id>', methods=['POST'])
    @login_required
    def borrow_book(book_id):
        if not validate_borrow_action_csrf():
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        return_date = None
        data = request.get_json(silent=True)
        if data and data.get('return_date'):
            try:
                return_date = datetime.strptime(data['return_date'], '%Y-%m-%d')
            except (ValueError, TypeError):
                return jsonify({'success': False, 'message': '归还日期格式不正确'}), 400
            if return_date.date() <= cst_now().date():
                return jsonify({'success': False, 'message': '归还日期必须晚于今天'}), 400
            start_date = cst_now().date()
            if data.get('start_date'):
                try:
                    start_date = datetime.strptime(data['start_date'], '%Y-%m-%d').date()
                except (ValueError, TypeError):
                    pass
            if return_date.date() > start_date + timedelta(days=MAX_BORROW_DAYS):
                return jsonify({'success': False, 'message': f'借阅时长不能超过{MAX_BORROW_DAYS}天'}), 400

        user_id = current_user.id
        # 清理可能残留的脏 session 状态，确保 with_for_update 在干净的事务中运行
        db.session.rollback()

        book = None
        reservation_error = None
        with db_transaction(error_message='预约失败，请稍后重试') as tx:
            locked_user = User.query.filter(User.id == user_id).with_for_update().first()
            if not locked_user:
                reservation_error = '用户不存在'
            else:
                book = db.session.get(Book, book_id)
                if not book:
                    reservation_error = 'not_found'
                else:
                    existing_record = BorrowRecord.query.filter(
                        BorrowRecord.user_id == user_id,
                        BorrowRecord.book_id == book_id,
                        BorrowRecord.status.in_(['pending', 'picked_up'])
                    ).first()
                    active_count = BorrowRecord.query.filter(
                        BorrowRecord.user_id == user_id,
                        BorrowRecord.status.in_(['pending', 'picked_up'])
                    ).count()
                    updated_rows = 0
                    if existing_record:
                        reservation_error = '您已经预约了这本书，请完成当前流程后再预约'
                    elif active_count >= MAX_ACTIVE_BORROWS:
                        reservation_error = f'最多同时借阅{MAX_ACTIVE_BORROWS}本书，请归还后再预约'
                    else:
                        updated_rows = Book.query.filter(
                            Book.id == book_id,
                            Book.stock > 0,
                        ).update({Book.stock: Book.stock - 1}, synchronize_session=False)
                        if not updated_rows:
                            reservation_error = '库存不足'
                    if not reservation_error:
                        db.session.add(BorrowRecord(
                            user_id=user_id,
                            book_id=book_id,
                            return_date=return_date,
                        ))
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        if reservation_error == 'not_found':
            abort(404)
        if reservation_error:
            return jsonify({'success': False, 'message': reservation_error}), 409
        db.session.refresh(book)
        log_action('预约图书', f'书名: {book.title}, 预计归还: {return_date.strftime("%Y-%m-%d") if return_date else "未设置"}')

        threading.Thread(
            target=send_borrow_notification_email,
            args=(
                current_user.email,
                current_user.username,
                book.title,
                cst_now().strftime('%Y-%m-%d %H:%M'),
                return_date.strftime('%Y-%m-%d') if return_date else None,
            ),
            daemon=True,
        ).start()

        return jsonify({
            'success': True,
            'message': '预约成功',
            'stock': book.stock,
            'total': book.total,
            'available': book.available,
        })

    @bp.route('/book/cancel/<int:record_id>', methods=['POST'])
    @login_required
    def cancel_reservation(record_id):
        if not validate_borrow_action_csrf():
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        record = db.session.get(BorrowRecord, record_id)
        if not record:
            abort(404)
        if record.user_id != current_user.id:
            return jsonify({'success': False, 'message': '权限不足'}), 403
        if record.status != 'pending':
            return jsonify({'success': False, 'message': '只能取消未领取的预约'}), 409

        book = record.book
        book_title = book.title
        reject_date = cst_now()
        cancel_error = None
        with db_transaction(error_message='取消失败，请稍后重试') as tx:
            updated_rows = BorrowRecord.query.filter(
                BorrowRecord.id == record_id,
                BorrowRecord.user_id == current_user.id,
                BorrowRecord.status == 'pending',
            ).update({
                BorrowRecord.status: 'rejected',
                BorrowRecord.reject_date: reject_date,
            }, synchronize_session=False)
            if updated_rows:
                book.restore_stock()
            else:
                cancel_error = '只能取消未领取的预约'
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        if cancel_error:
            return jsonify({'success': False, 'message': cancel_error}), 409
        log_action('取消预约', f'书名: {book_title}, 记录ID: {record_id}')
        return jsonify({'success': True, 'message': '已取消预约'})

    @bp.route('/borrow_records')
    @login_required
    def borrow_records():
        from sqlalchemy.orm import joinedload
        records = BorrowRecord.query.options(
            joinedload(BorrowRecord.book)
        ).filter_by(user_id=current_user.id).order_by(BorrowRecord.borrow_date.desc()).all()

        stats = build_borrow_stats(records)
        insights = build_borrow_insights(records, stats)

        return render_template(
            'borrow_records.html',
            records=records,
            stats=stats,
            insights=insights,
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
        )

    @bp.route('/borrow_records/status')
    @login_required
    def borrow_records_status() -> Response:
        records: list[BorrowRecord] = BorrowRecord.query.filter_by(
            user_id=current_user.id
        ).order_by(BorrowRecord.borrow_date.desc()).all()
        return jsonify({
            'success': True,
            'records': [serialize_borrow_record(record) for record in records],
            'stats': build_borrow_stats(records),
        })
