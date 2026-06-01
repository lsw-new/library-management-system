# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, render_template, request, jsonify
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask.typing import ResponseReturnValue
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_required
# 从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy import or_
# 从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy.orm import joinedload

# 从指定模块导入类、函数或变量，简化后续代码引用。
from models import db, Book, User, BorrowRecord, LoginHistory
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils import (
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    log_action, naive_cst_now,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    cleanup_expired_online_users, list_active_sessions, count_active_sessions,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    admin_required, get_csrf_token, validate_csrf_token,
# 关闭前面打开的复合表达式、集合字面量或函数调用结构。
)

# 从指定模块导入类、函数或变量，简化后续代码引用。
from .books import register_book_routes
# 从指定模块导入类、函数或变量，简化后续代码引用。
from .borrows import register_borrow_routes
# 从指定模块导入类、函数或变量，简化后续代码引用。
from .users import register_user_routes

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
admin_bp = Blueprint('admin', __name__)

# 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_book_routes(admin_bp)
# 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_borrow_routes(admin_bp)
# 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_user_routes(admin_bp)

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
ADMIN_ACTION_CSRF_SESSION_KEY = 'admin_action_csrf_token'


# 定义 `get_admin_action_csrf_token` 函数，封装一段可复用的后端处理流程。
def get_admin_action_csrf_token() -> str:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return get_csrf_token(ADMIN_ACTION_CSRF_SESSION_KEY)


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.before_request
# 定义 `_validate_admin_csrf` 函数，封装一段可复用的后端处理流程。
def _validate_admin_csrf() -> ResponseReturnValue | None:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method != 'POST':
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if validate_csrf_token(ADMIN_ACTION_CSRF_SESSION_KEY):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/admin')
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required(json_response=False)
# 定义 `admin_index` 函数，封装一段可复用的后端处理流程。
def admin_index():
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    tab = request.args.get('tab', 'online')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    search = request.args.get('search', '').strip()

    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from utils import process_expired_reservations
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    process_expired_reservations()

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    today_start = naive_cst_now().replace(hour=0, minute=0, second=0, microsecond=0)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    online_users_list = []
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_history = []
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    books = []
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    current_records = []
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    today_records = []
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    past_records = []
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users_list = []

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if tab == 'users':
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_query = User.query
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            s = f'%{search}%'
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_query = user_query.filter(or_(
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                User.username.like(s), User.email.like(s), User.student_id.like(s)
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        users_list = user_query.order_by(User.id.desc()).all()

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'online':
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cleanup_expired_online_users()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        online_users_list = list_active_sessions(search=search)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        login_history = LoginHistory.query.order_by(LoginHistory.login_time.desc()).limit(50).all()

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'books':
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book_query = Book.query
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book_query = book_query.filter(or_(
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                Book.title.contains(search), Book.author.contains(search),
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                Book.isbn.contains(search), Book.category.contains(search)
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        books = book_query.order_by(Book.id.desc()).all()

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'current':
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        current_query = BorrowRecord.query.options(
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).filter(BorrowRecord.status.in_(['pending', 'picked_up']))
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            current_query = BorrowRecord.query.join(Book).join(User).options(
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).filter(
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                BorrowRecord.status.in_(['pending', 'picked_up']),
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                or_(Book.title.contains(search), User.username.contains(search))
            # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        current_records = current_query.order_by(BorrowRecord.id.desc()).all()

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'history':
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        history_query = BorrowRecord.query.options(
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).filter(BorrowRecord.status.in_(['returned', 'rejected', 'expired']))
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            history_query = BorrowRecord.query.join(Book).join(User).options(
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).filter(
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                or_(Book.title.contains(search), User.username.contains(search))
            # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        all_history = history_query.order_by(BorrowRecord.id.desc()).all()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        today_records = [r for r in all_history if r.borrow_date >= today_start]
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        past_records = [r for r in all_history if r.borrow_date < today_start]

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    online_count = count_active_sessions()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    books_count = Book.query.count()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users_count = User.query.count()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    banned_count = User.query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        User.banned_until.isnot(None),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        User.banned_until > naive_cst_now()
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    current_count = BorrowRecord.query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['pending', 'picked_up'])
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    history_count = BorrowRecord.query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['returned', 'rejected', 'expired'])
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    new_history_count = BorrowRecord.query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        BorrowRecord.borrow_date >= today_start
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'admin.html',
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        tab=tab, search=search, books=books, current_records=current_records,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        today_records=today_records if tab == 'history' else [],
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        past_records=past_records if tab == 'history' else [],
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        online_users=online_users_list,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        users_list=users_list,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        online_count=online_count, books_count=books_count,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        users_count=users_count, banned_count=banned_count,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        pending_count=pending_count, history_count=history_count,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        new_history_count=new_history_count, current_count=current_count,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        login_history=login_history,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        admin_action_csrf_token=get_admin_action_csrf_token(),
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/admin/check_new_reservations', methods=['GET'])
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required()
# 定义 `check_new_reservations` 函数，封装一段可复用的后端处理流程。
def check_new_reservations():
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from utils import process_expired_reservations
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    process_expired_reservations()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    latest_record = BorrowRecord.query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['pending', 'picked_up'])
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).order_by(BorrowRecord.id.desc()).first()
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pending_count': pending_count,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'latest_id': latest_record.id if latest_record else 0,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    })


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/admin/logs')
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required()
# 定义 `get_logs` 函数，封装一段可复用的后端处理流程。
def get_logs():
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    limit = min(request.args.get('limit', 50, type=int), 500)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    logs = LoginHistory.query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        LoginHistory.action.isnot(None)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).order_by(LoginHistory.login_time.desc()).limit(limit).all()
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'success': True,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'logs': [{
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'id': log.id,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'username': log.username_snapshot,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user_type': '管理员' if log.user_type == 'admin' else '用户' if log.user_type == 'user' else '系统',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'ip': log.ip_address,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'time': log.login_time.strftime('%Y-%m-%d %H:%M:%S'),
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'action': log.action or '登录',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'details': log.details or '',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'is_online': log.is_online,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        } for log in logs]
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    })


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/api/online_users', methods=['GET'])
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required()
# 定义 `get_online_users` 函数，封装一段可复用的后端处理流程。
def get_online_users():
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    cleanup_expired_online_users()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users = list_active_sessions()
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'success': True,
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
        } for u in users]
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    })
