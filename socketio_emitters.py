# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import socketio


def _json_int(value: object) -> int:
    return int(value or 0)


# 定义 `emit_online_changed` 函数，封装一段可复用的后端处理流程。
def emit_online_changed():
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from utils.sessions import list_active_sessions
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users = list_active_sessions()
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('online_users_changed', {
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'count': len(users),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'users': [{
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user_id': u.user_id,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'username': u.username,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user_type': u.user_type,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'ip_address': u.ip_address or '',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'geo_location': u.geo_location or '',
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'last_seen': u.last_seen.strftime('%H:%M:%S'),
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'login_time': u.login_time.strftime('%H:%M:%S'),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        } for u in users],
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room='admins')


# 定义 `emit_reservation_changed` 函数，封装一段可复用的后端处理流程。
def emit_reservation_changed(action: str = 'update'):
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from sqlalchemy import case, func
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from models import BorrowRecord
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import db
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    current_statuses = ['pending', 'picked_up']
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    history_statuses = ['returned', 'rejected', 'expired']
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    result = db.session.query(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.sum(case((BorrowRecord.status == 'pending', 1), else_=0)).label('pending_count'),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.sum(case((BorrowRecord.status.in_(current_statuses), 1), else_=0)).label('current_count'),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.sum(case((BorrowRecord.status.in_(history_statuses), 1), else_=0)).label('history_count'),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.max(BorrowRecord.id).label('latest_id'),
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    ).filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(current_statuses + history_statuses)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).one()
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('reservation_changed', {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pending_count': _json_int(result.pending_count),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'current_count': _json_int(result.current_count),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'history_count': _json_int(result.history_count),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'latest_id': _json_int(result.latest_id),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'action': action,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room='admins')


# 定义 `emit_borrow_status` 函数，封装一段可复用的后端处理流程。
def emit_borrow_status(user_id: int):
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from models import BorrowRecord
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from blueprints.user_helpers import serialize_borrow_record, build_borrow_stats
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    records = BorrowRecord.query.filter_by(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        user_id=user_id
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).order_by(BorrowRecord.borrow_date.desc()).limit(50).all()
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('borrow_status_changed', {
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'records': [serialize_borrow_record(r) for r in records],
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'stats': build_borrow_stats(records),
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room=f'user_{user_id}')


# 定义 `emit_stock_changed` 函数，封装一段可复用的后端处理流程。
def emit_stock_changed(book_id: int):
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from models import Book
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import db
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    book = db.session.get(Book, book_id, populate_existing=True)
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if book:
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        socketio.emit('book_stock_changed', {
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'book_id': book.id,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'title': book.title,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'stock': book.stock,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'total': book.total,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'borrow_count': book.borrow_count,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'available': book.available,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        }, room='books')


# 定义 `emit_book_catalog_changed` 函数，封装一段可复用的后端处理流程。
def emit_book_catalog_changed(action: str = 'update', book_id: int | None = None):
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('book_catalog_changed', {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'action': action,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'book_id': book_id,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room='books')


# 定义 `emit_new_log` 函数，封装一段可复用的后端处理流程。
def emit_new_log(log_entry: dict):
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    socketio.emit('new_log', {'log': log_entry}, room='admins')


# 定义 `emit_force_logout` 函数，封装一段可复用的后端处理流程。
def emit_force_logout(user_id: int, user_type: str = 'user',
                      reason: str = '您已被管理员强制下线'):
    # 房间名需与 socketio_events.handle_connect 一致（'{user_type}_{id}'），
    # 否则会因 users/admins 表 id 重叠而把 force_logout 误发给同 id 的其他类型账号。
    socketio.emit('force_logout', {'reason': reason}, room=f'{user_type}_{user_id}')
