import threading

from flask import Blueprint, jsonify
from flask_login import login_required

from email_utils import send_rejection_email
from models import db, BorrowRecord
from utils import log_action, cst_now, admin_required, db_transaction


def register_borrow_routes(bp: Blueprint) -> None:

    @bp.route('/admin/approve_reservation/<int:record_id>', methods=['POST'])
    @login_required
    @admin_required()
    def approve_reservation(record_id):
        record = db.session.get(BorrowRecord, record_id)
        if not record or record.status != 'pending':
            return jsonify({'success': False, 'message': '当前记录不可操作'}), 409
        username = record.user.username
        book_title = record.book.title
        pickup_date = cst_now()
        action_error = None
        with db_transaction() as tx:
            updated_rows = BorrowRecord.query.filter(
                BorrowRecord.id == record_id,
                BorrowRecord.status == 'pending',
            ).update({
                BorrowRecord.status: 'picked_up',
                BorrowRecord.pickup_date: pickup_date,
            }, synchronize_session=False)
            if not updated_rows:
                action_error = '当前记录不可操作'
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        if action_error:
            return jsonify({'success': False, 'message': action_error}), 409
        log_action('审核预约', f'同意用户 {username} 领取图书: {book_title}')
        return jsonify({'success': True, 'message': '已同意领取图书'})

    @bp.route('/admin/reject_reservation/<int:record_id>', methods=['POST'])
    @login_required
    @admin_required()
    def reject_reservation(record_id):
        record = db.session.get(BorrowRecord, record_id)
        if not record or record.status != 'pending':
            return jsonify({'success': False, 'message': '当前记录不可操作'}), 409
        user = record.user
        book = record.book
        reject_date = cst_now()
        action_error = None
        with db_transaction() as tx:
            updated_rows = BorrowRecord.query.filter(
                BorrowRecord.id == record_id,
                BorrowRecord.status == 'pending',
            ).update({
                BorrowRecord.status: 'rejected',
                BorrowRecord.reject_date: reject_date,
            }, synchronize_session=False)
            if updated_rows:
                book.restore_stock()
            else:
                action_error = '当前记录不可操作'
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        if action_error:
            return jsonify({'success': False, 'message': action_error}), 409
        log_action('拒绝预约', f'拒绝用户 {user.username} 领取图书: {book.title}')
        threading.Thread(
            target=send_rejection_email,
            args=(
                user.email,
                user.username,
                book.title,
                reject_date.strftime('%Y-%m-%d %H:%M'),
            ),
            daemon=True,
        ).start()
        return jsonify({'success': True, 'message': '已拒绝领取'})

    @bp.route('/admin/return_book/<int:record_id>', methods=['POST'])
    @login_required
    @admin_required()
    def admin_return_book(record_id):
        record = db.session.get(BorrowRecord, record_id)
        if not record or record.status != 'picked_up':
            return jsonify({'success': False, 'message': '当前记录不可操作'}), 409
        book = record.book
        return_date = cst_now()
        action_error = None
        with db_transaction(error_message='归还操作失败') as tx:
            updated_rows = BorrowRecord.query.filter(
                BorrowRecord.id == record_id,
                BorrowRecord.status == 'picked_up',
            ).update({
                BorrowRecord.status: 'returned',
                BorrowRecord.return_date: return_date,
            }, synchronize_session=False)
            if updated_rows:
                book.restore_stock()
                book.increment_borrow_count()
            else:
                action_error = '当前记录不可操作'
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        if action_error:
            return jsonify({'success': False, 'message': action_error}), 409
        log_action('管理员归还图书', f'书名: {book.title}, 记录ID: {record_id}')
        return jsonify({'success': True, 'message': '归还成功'})
