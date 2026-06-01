# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, render_template, request, jsonify
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask.typing import ResponseReturnValue
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_required
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy import or_
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy.orm import joinedload
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from models import db, Book, User, BorrowRecord, LoginHistory
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from utils import (
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    log_action, naive_cst_now,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    cleanup_expired_online_users, list_active_sessions, count_active_sessions,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    admin_required, get_csrf_token, validate_csrf_token,
# 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .books import register_book_routes
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .borrows import register_borrow_routes
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .users import register_user_routes
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
admin_bp = Blueprint('admin', __name__)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_book_routes(admin_bp)
# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_borrow_routes(admin_bp)
# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_user_routes(admin_bp)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
ADMIN_ACTION_CSRF_SESSION_KEY = 'admin_action_csrf_token'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `get_admin_action_csrf_token` 函数，封装一段可复用的后端处理流程。
def get_admin_action_csrf_token() -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return get_csrf_token(ADMIN_ACTION_CSRF_SESSION_KEY)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.before_request
# 逐行注释：定义 `_validate_admin_csrf` 函数，封装一段可复用的后端处理流程。
def _validate_admin_csrf() -> ResponseReturnValue | None:
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method != 'POST':
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if validate_csrf_token(ADMIN_ACTION_CSRF_SESSION_KEY):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/admin')
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required(json_response=False)
# 逐行注释：定义 `admin_index` 函数，封装一段可复用的后端处理流程。
def admin_index():
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    tab = request.args.get('tab', 'online')
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    search = request.args.get('search', '').strip()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from utils import process_expired_reservations
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    process_expired_reservations()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    today_start = naive_cst_now().replace(hour=0, minute=0, second=0, microsecond=0)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    online_users_list = []
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_history = []
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    books = []
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    current_records = []
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    today_records = []
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    past_records = []
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users_list = []
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if tab == 'users':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_query = User.query
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            s = f'%{search}%'
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_query = user_query.filter(or_(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                User.username.like(s), User.email.like(s), User.student_id.like(s)
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ))
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        users_list = user_query.order_by(User.id.desc()).all()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'online':
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cleanup_expired_online_users()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        online_users_list = list_active_sessions(search=search)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        login_history = LoginHistory.query.order_by(LoginHistory.login_time.desc()).limit(50).all()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'books':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book_query = Book.query
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book_query = book_query.filter(or_(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                Book.title.contains(search), Book.author.contains(search),
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                Book.isbn.contains(search), Book.category.contains(search)
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ))
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        books = book_query.order_by(Book.id.desc()).all()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'current':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        current_query = BorrowRecord.query.options(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).filter(BorrowRecord.status.in_(['pending', 'picked_up']))
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            current_query = BorrowRecord.query.join(Book).join(User).options(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).filter(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                BorrowRecord.status.in_(['pending', 'picked_up']),
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                or_(Book.title.contains(search), User.username.contains(search))
            # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        current_records = current_query.order_by(BorrowRecord.id.desc()).all()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif tab == 'history':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        history_query = BorrowRecord.query.options(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).filter(BorrowRecord.status.in_(['returned', 'rejected', 'expired']))
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if search:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            history_query = BorrowRecord.query.join(Book).join(User).options(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).filter(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                or_(Book.title.contains(search), User.username.contains(search))
            # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        all_history = history_query.order_by(BorrowRecord.id.desc()).all()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        today_records = [r for r in all_history if r.borrow_date >= today_start]
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        past_records = [r for r in all_history if r.borrow_date < today_start]
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    online_count = count_active_sessions()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    books_count = Book.query.count()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users_count = User.query.count()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    banned_count = User.query.filter(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        User.banned_until.isnot(None),
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        User.banned_until > naive_cst_now()
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    current_count = BorrowRecord.query.filter(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['pending', 'picked_up'])
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    history_count = BorrowRecord.query.filter(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['returned', 'rejected', 'expired'])
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    new_history_count = BorrowRecord.query.filter(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        BorrowRecord.borrow_date >= today_start
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).count()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template(
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'admin.html',
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        tab=tab, search=search, books=books, current_records=current_records,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        today_records=today_records if tab == 'history' else [],
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        past_records=past_records if tab == 'history' else [],
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        online_users=online_users_list,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        users_list=users_list,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        online_count=online_count, books_count=books_count,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        users_count=users_count, banned_count=banned_count,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        pending_count=pending_count, history_count=history_count,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        new_history_count=new_history_count, current_count=current_count,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        login_history=login_history,
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        admin_action_csrf_token=get_admin_action_csrf_token(),
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/admin/check_new_reservations', methods=['GET'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required()
# 逐行注释：定义 `check_new_reservations` 函数，封装一段可复用的后端处理流程。
def check_new_reservations():
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from utils import process_expired_reservations
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    process_expired_reservations()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    latest_record = BorrowRecord.query.filter(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        BorrowRecord.status.in_(['pending', 'picked_up'])
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).order_by(BorrowRecord.id.desc()).first()
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pending_count': pending_count,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'latest_id': latest_record.id if latest_record else 0,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    })
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/admin/logs')
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required()
# 逐行注释：定义 `get_logs` 函数，封装一段可复用的后端处理流程。
def get_logs():
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    limit = min(request.args.get('limit', 50, type=int), 500)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    logs = LoginHistory.query.filter(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        LoginHistory.action.isnot(None)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).order_by(LoginHistory.login_time.desc()).limit(limit).all()
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'success': True,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'logs': [{
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'id': log.id,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'username': log.username_snapshot,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user_type': '管理员' if log.user_type == 'admin' else '用户' if log.user_type == 'user' else '系统',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'ip': log.ip_address,
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'time': log.login_time.strftime('%Y-%m-%d %H:%M:%S'),
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'action': log.action or '登录',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'details': log.details or '',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'is_online': log.is_online,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        } for log in logs]
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    })
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_bp.route('/api/online_users', methods=['GET'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@admin_required()
# 逐行注释：定义 `get_online_users` 函数，封装一段可复用的后端处理流程。
def get_online_users():
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    cleanup_expired_online_users()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    users = list_active_sessions()
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'success': True,
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
        } for u in users]
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    })
