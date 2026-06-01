# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import socketio
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `emit_online_changed` 函数，封装一段可复用的后端处理流程。
def emit_online_changed():
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from utils.sessions import list_active_sessions
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users = list_active_sessions()
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('online_users_changed', {
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'count': len(users),
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'users': [{
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user_id': u.user_id,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'username': u.username,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user_type': u.user_type,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'ip_address': u.ip_address or '',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'geo_location': u.geo_location or '',
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'last_seen': u.last_seen.strftime('%H:%M:%S'),
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'login_time': u.login_time.strftime('%H:%M:%S'),
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        } for u in users],
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room='admins')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `emit_reservation_changed` 函数，封装一段可复用的后端处理流程。
def emit_reservation_changed(action: str = 'update'):
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from sqlalchemy import case, func
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import BorrowRecord
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import db
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    current_statuses = ['pending', 'picked_up']
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    history_statuses = ['returned', 'rejected', 'expired']
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    result = db.session.query(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.sum(case((BorrowRecord.status == 'pending', 1), else_=0)).label('pending_count'),
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.sum(case((BorrowRecord.status.in_(current_statuses), 1), else_=0)).label('current_count'),
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.sum(case((BorrowRecord.status.in_(history_statuses), 1), else_=0)).label('history_count'),
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        func.max(BorrowRecord.id).label('latest_id'),
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    ).filter(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(current_statuses + history_statuses)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).one()
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('reservation_changed', {
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pending_count': result.pending_count or 0,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'current_count': result.current_count or 0,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'history_count': result.history_count or 0,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'latest_id': result.latest_id or 0,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'action': action,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room='admins')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `emit_borrow_status` 函数，封装一段可复用的后端处理流程。
def emit_borrow_status(user_id: int):
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import BorrowRecord
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from blueprints.user_helpers import serialize_borrow_record, build_borrow_stats
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    records = BorrowRecord.query.filter_by(
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        user_id=user_id
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).order_by(BorrowRecord.borrow_date.desc()).limit(50).all()
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('borrow_status_changed', {
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'records': [serialize_borrow_record(r) for r in records],
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'stats': build_borrow_stats(records),
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room=f'user_{user_id}')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `emit_stock_changed` 函数，封装一段可复用的后端处理流程。
def emit_stock_changed(book_id: int):
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import Book
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import db
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    book = db.session.get(Book, book_id, populate_existing=True)
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if book:
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        socketio.emit('book_stock_changed', {
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'book_id': book.id,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'title': book.title,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'stock': book.stock,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'total': book.total,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'borrow_count': book.borrow_count,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'available': book.available,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        }, room='books')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `emit_book_catalog_changed` 函数，封装一段可复用的后端处理流程。
def emit_book_catalog_changed(action: str = 'update', book_id: int | None = None):
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    socketio.emit('book_catalog_changed', {
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'action': action,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'book_id': book_id,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, room='books')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `emit_new_log` 函数，封装一段可复用的后端处理流程。
def emit_new_log(log_entry: dict):
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    socketio.emit('new_log', {'log': log_entry}, room='admins')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `emit_force_logout` 函数，封装一段可复用的后端处理流程。
def emit_force_logout(user_id: int, reason: str = '您已被管理员强制下线'):
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    socketio.emit('force_logout', {'reason': reason}, room=f'user_{user_id}')
