# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import re
# 从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import timedelta
# 从指定模块导入类、函数或变量，简化后续代码引用。
from functools import wraps
# 从指定模块导入类、函数或变量，简化后续代码引用。
from ipaddress import ip_address
# 从指定模块导入类、函数或变量，简化后续代码引用。
from urllib.parse import quote

# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import pymysql
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, current_app, jsonify, render_template, request
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import current_user

# 从指定模块导入类、函数或变量，简化后续代码引用。
from config import is_production
# 从指定模块导入类、函数或变量，简化后续代码引用。
from data.test_books import TEST_BOOKS, TEST_USER_STUDENT_ID, build_demo_borrow_count, is_demo_book_match
# 从指定模块导入类、函数或变量，简化后续代码引用。
from models import Admin, Book, BorrowRecord, User, db
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils import _get_db_config, cst_now, get_csrf_token, update_config_file, validate_csrf_token

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
setup_bp = Blueprint('setup', __name__)

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DB_NAME_PATTERN = re.compile(r'^[A-Za-z0-9_]{1,64}$')
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
SETUP_ACTION_CSRF_SESSION_KEY = 'setup_action_csrf_token'


# 定义 `is_valid_db_name` 函数，封装一段可复用的后端处理流程。
def is_valid_db_name(db_name: str | None) -> bool:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return bool(db_name and DB_NAME_PATTERN.fullmatch(db_name))


# 定义 `get_setup_action_csrf_token` 函数，封装一段可复用的后端处理流程。
def get_setup_action_csrf_token() -> str:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return get_csrf_token(SETUP_ACTION_CSRF_SESSION_KEY)


# 定义 `validate_setup_action_csrf` 函数，封装一段可复用的后端处理流程。
def validate_setup_action_csrf() -> bool:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return validate_csrf_token(SETUP_ACTION_CSRF_SESSION_KEY)


# 定义 `setup_api_required` 函数，封装一段可复用的后端处理流程。
def setup_api_required(view):
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @wraps(view)
    # 定义 `wrapper` 函数，封装一段可复用的后端处理流程。
    def wrapper(*args, **kwargs):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if request.method == 'POST' and not validate_setup_action_csrf():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if getattr(current_user, 'is_authenticated', False) and getattr(current_user, 'is_admin', False):
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return view(*args, **kwargs)
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            is_local = ip_address(request.remote_addr or '').is_loopback
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except ValueError:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            is_local = False
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not is_production() and is_local:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return view(*args, **kwargs)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '仅管理员或本机初始化流程可执行该操作'}), 403
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return wrapper


# 定义 `ensure_runtime_schema` 函数，封装一段可复用的后端处理流程。
def ensure_runtime_schema():
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.create_all()
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception as e:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.warning(f'运行时同步数据库结构失败: {e}')

    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 从指定模块导入类、函数或变量，简化后续代码引用。
        from sqlalchemy import inspect, text
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        inspector = inspect(db.engine)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if inspector.has_table('users'):
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_cols = {c['name'] for c in inspector.get_columns('users')}
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if 'banned_until' not in user_cols:
                # 上下文管理语句，自动管理资源生命周期或事务边界。
                with db.engine.begin() as conn:
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    conn.execute(text(
                        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        'ALTER TABLE users ADD COLUMN banned_until DATETIME NULL'
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    ))
                    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
                    try:
                        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        conn.execute(text(
                            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                            'CREATE INDEX ix_users_banned_until ON users (banned_until)'
                        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        ))
                    # 异常处理分支，用于回滚、记录日志或返回错误响应。
                    except Exception:
                        # 显式结束当前分支或作为占位语句，保持代码结构完整。
                        pass
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if inspector.has_table('books'):
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book_cols = {c['name'] for c in inspector.get_columns('books')}
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if 'borrow_count' not in book_cols:
                # 上下文管理语句，自动管理资源生命周期或事务边界。
                with db.engine.begin() as conn:
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    conn.execute(text(
                        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        'ALTER TABLE books ADD COLUMN borrow_count INTEGER NOT NULL DEFAULT 0'
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    ))
                    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
                    try:
                        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        conn.execute(text(
                            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                            'CREATE INDEX ix_books_borrow_count ON books (borrow_count)'
                        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        ))
                    # 异常处理分支，用于回滚、记录日志或返回错误响应。
                    except Exception:
                        # 显式结束当前分支或作为占位语句，保持代码结构完整。
                        pass
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if inspector.has_table('online_sessions'):
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            os_cols = {c['name'] for c in inspector.get_columns('online_sessions')}
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if 'geo_location' not in os_cols:
                # 上下文管理语句，自动管理资源生命周期或事务边界。
                with db.engine.begin() as conn:
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    conn.execute(text(
                        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                        'ALTER TABLE online_sessions ADD COLUMN geo_location VARCHAR(100) NULL'
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    ))
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception as e:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.warning(f'补齐运行时字段失败: {e}')


# 定义 `_inspect_database` 函数，封装一段可复用的后端处理流程。
def _inspect_database(cursor, db_name: str) -> dict:
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    cursor.execute("SHOW DATABASES")
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if db_name not in [d[0] for d in cursor.fetchall()]:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return {'db_exists': False, 'tables': [], 'demo_data_ready': False}

    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    cursor.execute(f"USE `{db_name}`")
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    cursor.execute("SHOW TABLES")
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    tables = [t[0] for t in cursor.fetchall()]

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    demo_data_ready = False
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if {'admins', 'users', 'books'}.issubset(tables):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cursor.execute("SELECT COUNT(*) FROM admins WHERE username = %s", ('admin',))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        has_admin = cursor.fetchone()[0] > 0
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cursor.execute("SELECT COUNT(*) FROM users WHERE username = %s", ('user1',))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        has_demo_user = cursor.fetchone()[0] > 0
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cursor.execute("SELECT COUNT(*) FROM books")
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        has_books = cursor.fetchone()[0] > 0
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        demo_data_ready = has_admin and has_demo_user and has_books

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {'db_exists': True, 'tables': tables, 'demo_data_ready': demo_data_ready}


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_bp.route('/init_db')
# 定义 `init_db_page` 函数，封装一段可复用的后端处理流程。
def init_db_page():
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    db_defaults = _get_db_config()
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'init_db.html',
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        db_defaults=db_defaults,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        setup_action_csrf_token=get_setup_action_csrf_token(),
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_bp.route('/init_db/actions')
# 定义 `init_db_actions_page` 函数，封装一段可复用的后端处理流程。
def init_db_actions_page():
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    db_defaults = _get_db_config()
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'init_db_actions.html',
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        db_defaults=db_defaults,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        setup_action_csrf_token=get_setup_action_csrf_token(),
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_bp.route('/api/test_connection', methods=['POST'])
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_api_required
# 定义 `test_connection` 函数，封装一段可复用的后端处理流程。
def test_connection():
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """
    测试数据库连接
    验证配置是否正确，检查数据库和表是否存在
    """
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    cfg_data = request.get_json(silent=True) or {}
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    host = cfg_data.get('host')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    db_name = cfg_data.get('database')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    current_cfg = _get_db_config()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    connection = None

    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if host:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user = cfg_data.get('user') or ''
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            port = int(cfg_data.get('port') or 3306)
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            password = cfg_data.get('password') or ''
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            encoded_user = quote(user, safe='')
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            encoded_password = quote(password, safe='')
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            encoded_db_name = quote(db_name or '', safe='')
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            temp_uri = f"mysql+pymysql://{encoded_user}:{encoded_password}@{host}:{port}/{encoded_db_name}?charset=utf8mb4"
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            cfg = {
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'host': host,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'port': port,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'user': user,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'password': password,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'charset': 'utf8mb4',
            # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
            }
        # 条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            cfg = current_cfg.copy()
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            db_name = db_name or cfg.get('database')
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            cfg.pop('database', None)

        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if db_name and not is_valid_db_name(db_name):
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '数据库名只能包含字母、数字和下划线，长度不超过 64 个字符。'}), 400

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        connection = pymysql.connect(**cfg)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cursor = connection.cursor()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        db_info = _inspect_database(cursor, db_name) if db_name else {
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'db_exists': False, 'tables': [], 'demo_data_ready': False,
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        }
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cursor.close()

        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if host and not update_config_file(temp_uri):
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '数据库连接验证成功，但配置保存失败，请检查 .env 文件权限。'}), 500

        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'success': True,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'message': '数据库连接验证成功！',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'db_name': db_name,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            **db_info,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        })
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.exception('测试数据库连接失败')
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '连接失败，请检查主机、端口、用户名和密码。'}), 500
    # 异常处理收尾分支，无论是否发生异常都会执行。
    finally:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if connection:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            connection.close()


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_bp.route('/api/create_tables', methods=['POST'])
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_api_required
# 定义 `create_tables` 函数，封装一段可复用的后端处理流程。
def create_tables():
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """
    创建数据库表
    1. 创建数据库（如果不存在）
    2. 使用 SQLAlchemy 创建所有表
    """
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    connection = None
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cfg = _get_db_config()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        db_name = cfg.pop('database', 'library_db')
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not is_valid_db_name(db_name):
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '数据库名只能包含字母、数字和下划线，长度不超过 64 个字符。'}), 400

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        connection = pymysql.connect(**cfg)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cursor = connection.cursor()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{db_name}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cursor.close()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        connection.close()

        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.create_all()

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cfg['database'] = db_name
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        connection = pymysql.connect(**cfg)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cursor = connection.cursor()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cursor.execute("SHOW TABLES")
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        tables = [t[0] for t in cursor.fetchall()]

        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        connection.commit()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cursor.close()

        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'success': True,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'message': f'数据库表创建成功！已创建表: {", ".join(tables)}'
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        })
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.exception('创建数据库表失败')
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '创建失败，请检查数据库连接和权限配置。'}), 500
    # 异常处理收尾分支，无论是否发生异常都会执行。
    finally:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if connection:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            connection.close()


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_bp.route('/api/insert_test_data', methods=['POST'])
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_api_required
# 定义 `insert_test_data` 函数，封装一段可复用的后端处理流程。
def insert_test_data():
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """
    插入测试数据
    包括管理员、用户、图书和借阅记录
    """
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
        # 创建管理员账户
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not Admin.query.filter_by(username='admin').first():
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            admin = Admin(username='admin', email='admin@library.com')
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            admin.set_password('admin123')
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.add(admin)

        # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
        # 创建测试用户
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not User.query.filter_by(username='user1').first():
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user = User(username='user1', email='user1@library.com', student_id=TEST_USER_STUDENT_ID,
                       # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                       real_name='张三', class_name='2024级计算机科学与技术1班')
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            user.set_password('user123')
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.add(user)

        # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
        # 插入测试图书
        # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for index, test_book in enumerate(TEST_BOOKS, start=1):
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            title, author, isbn, publisher, location, category, stock, total = test_book
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            borrow_count = build_demo_borrow_count(index)
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            existing_book = Book.query.filter_by(isbn=isbn).first()
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if existing_book:
                # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                if not existing_book.location:
                    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    existing_book.location = location
                # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                if existing_book.borrow_count is None or (
                    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                    existing_book.borrow_count == 0 and is_demo_book_match(existing_book, test_book)
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                ):
                    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    existing_book.borrow_count = borrow_count
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                continue

            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            db.session.add(Book(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                title=title,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                author=author,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                isbn=isbn,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                publisher=publisher,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                location=location,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                category=category,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                stock=stock,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                total=total,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                borrow_count=borrow_count
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ))

        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()

        # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
        # 创建测试借阅记录
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user1 = User.query.filter_by(username='user1').first()
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if user1:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book1 = Book.query.filter_by(isbn='9787115428028').first()
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if book1 and not BorrowRecord.query.filter_by(user_id=user1.id, book_id=book1.id).first():
                # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                record1 = BorrowRecord(
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    user_id=user1.id,
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    book_id=book1.id,
                    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                    borrow_date=cst_now() - timedelta(hours=2),
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    status='pending'
                # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
                )
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                db.session.add(record1)
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                Book.query.filter(
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    Book.id == book1.id,
                    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    Book.stock > 0,
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                ).update({Book.stock: Book.stock - 1}, synchronize_session=False)

        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '测试数据插入成功！'})
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.exception('插入测试数据失败')
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '插入失败，请检查表结构和数据库写入权限。'}), 500


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_bp.route('/api/reset_database', methods=['POST'])
# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@setup_api_required
# 定义 `reset_database` 函数，封装一段可复用的后端处理流程。
def reset_database():
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """
    重置数据库
    删除所有表并重新创建
    """
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.drop_all()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.create_all()

        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '数据库重置成功！'})
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.exception('重置数据库失败')
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '重置失败，请检查数据库连接和权限配置。'}), 500
