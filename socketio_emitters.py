from extensions import socketio


def emit_online_changed():
    from utils.sessions import list_active_sessions
    users = list_active_sessions()
    socketio.emit('online_users_changed', {
        'count': len(users),
        'users': [{
            'user_id': u.user_id,
            'username': u.username,
            'user_type': u.user_type,
            'ip_address': u.ip_address or '',
            'last_seen': u.last_seen.strftime('%H:%M:%S'),
            'login_time': u.login_time.strftime('%H:%M:%S'),
        } for u in users],
    }, room='admins')


def emit_reservation_changed(action: str = 'update'):
    from sqlalchemy import case, func
    from models import BorrowRecord
    from extensions import db
    result = db.session.query(
        func.sum(case((BorrowRecord.status == 'pending', 1), else_=0)).label('pending_count'),
        func.max(BorrowRecord.id).label('latest_id'),
    ).filter(
        BorrowRecord.status.in_(['pending', 'picked_up'])
    ).one()
    socketio.emit('reservation_changed', {
        'pending_count': result.pending_count or 0,
        'latest_id': result.latest_id or 0,
        'action': action,
    }, room='admins')


def emit_borrow_status(user_id: int):
    from models import BorrowRecord
    from blueprints.user_helpers import serialize_borrow_record, build_borrow_stats
    records = BorrowRecord.query.filter_by(
        user_id=user_id
    ).order_by(BorrowRecord.borrow_date.desc()).limit(50).all()
    socketio.emit('borrow_status_changed', {
        'records': [serialize_borrow_record(r) for r in records],
        'stats': build_borrow_stats(records),
    }, room=f'user_{user_id}')


def emit_stock_changed(book_id: int):
    from models import Book
    book = Book.query.get(book_id)
    if book:
        socketio.emit('book_stock_changed', {
            'book_id': book.id,
            'stock': book.stock,
            'total': book.total,
            'available': book.available,
        }, room='books')


def emit_new_log(log_entry: dict):
    socketio.emit('new_log', {'log': log_entry}, room='admins')


def emit_force_logout(user_id: int, reason: str = '您已被管理员强制下线'):
    socketio.emit('force_logout', {'reason': reason}, room=f'user_{user_id}')
