# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import request, session
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import current_user
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_socketio import disconnect, join_room

# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import socketio
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils.helpers import get_client_ip
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils.sessions import authenticate_active_session


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@socketio.on('connect')
# 定义 `handle_connect` 函数，封装一段可复用的后端处理流程。
def handle_connect():
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not current_user.is_authenticated:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    join_room(f'user_{current_user.id}')
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    join_room('books')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if getattr(current_user, 'is_admin', False):
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        join_room('admins')


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@socketio.on('disconnect')
# 定义 `handle_disconnect` 函数，封装一段可复用的后端处理流程。
def handle_disconnect():
    # 显式结束当前分支或作为占位语句，保持代码结构完整。
    pass


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@socketio.on('heartbeat')
# 定义 `handle_heartbeat` 函数，封装一段可复用的后端处理流程。
def handle_heartbeat(data=None):
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not current_user.is_authenticated:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        disconnect()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return {'ok': False}

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sess_history_id = session.get('login_history_id')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    ip = get_client_ip()

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    result = authenticate_active_session(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        user_id=current_user.id,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        user_type=user_type,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        session_history_id=sess_history_id,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        ip=ip,
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if result != 'ok':
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return {'ok': False, 'reason': result}
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {'ok': True}


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@socketio.on('join_books_room')
# 定义 `handle_join_books` 函数，封装一段可复用的后端处理流程。
def handle_join_books(data=None):
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if current_user.is_authenticated:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        join_room('books')


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@socketio.on('leave_books_room')
# 定义 `handle_leave_books` 函数，封装一段可复用的后端处理流程。
def handle_leave_books(data=None):
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from flask_socketio import leave_room
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if current_user.is_authenticated:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        leave_room('books')
