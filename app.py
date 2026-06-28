# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import time
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Flask, session, redirect, url_for, flash, request, render_template, jsonify
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import current_user, login_required, logout_user
# 从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy import text
# 从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy.exc import OperationalError, ProgrammingError, DatabaseError, SQLAlchemyError

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
logger = logging.getLogger(__name__)

# 从指定模块导入类、函数或变量，简化后续代码引用。
from config import Config
# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db, login_manager, socketio
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils import cst_now, cleanup_expired_online_users, authenticate_active_session, get_client_ip
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils.cache import init_cache
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils.static_hash import versioned_url

# 定义 `create_app` 函数，封装一段可复用的后端处理流程。
def create_app():
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app = Flask(__name__, template_folder='static/html')
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    app.config.from_object(Config)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app.config['UPLOAD_FOLDER'] = 'static/images'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app.config['LOG_FOLDER'] = 'logs'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    os.makedirs(app.config['LOG_FOLDER'], exist_ok=True)

    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    db.init_app(app)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    login_manager.init_app(app)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_manager.login_view = 'auth.login'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_manager.login_message = '请先登录后再访问该页面'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_manager.login_message_category = 'warning'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    redis_url = os.environ.get('REDIS_URL')
    # 组装 socketio.init_app 的参数：多副本/多进程部署时，必须用 Redis 作为
    # 消息队列，否则各进程房间互不相通，跨进程的 socketio.emit（如强制下线
    # force_logout）无法送达目标用户，本地单进程正常、服务器多 Pod 失效。
    socketio_kwargs = {}
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    socketio_async_mode = os.environ.get('SOCKETIO_ASYNC_MODE')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if socketio_async_mode:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        socketio_kwargs['async_mode'] = socketio_async_mode
    # 条件判断：存在 Redis 时启用消息队列，允许专门的 SOCKETIO_MESSAGE_QUEUE 覆盖。
    message_queue = os.environ.get('SOCKETIO_MESSAGE_QUEUE') or redis_url
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if message_queue:
        # 执行变量赋值，把 Redis 作为 SocketIO 跨进程消息队列。
        socketio_kwargs['message_queue'] = message_queue
    # 反向代理（nginx/istio）下浏览器 Origin 为对外域名，与容器内 host 不一致，
    # flask-socketio 默认仅同源会拒绝握手（日志：xxx is not an accepted origin），
    # 导致服务器上 SocketIO 完全连不上。通过 SOCKETIO_CORS_ORIGINS 显式放行：
    # '*' 放行全部；或逗号分隔的精确来源列表。未设置时保持默认（同源）。
    cors_origins = os.environ.get('SOCKETIO_CORS_ORIGINS')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if cors_origins:
        # 执行变量赋值，解析允许的来源配置。
        cors_origins = cors_origins.strip()
        # 条件判断：'*' 放行全部，否则按逗号拆分为精确来源列表。
        if cors_origins == '*':
            # 执行变量赋值，放行全部来源。
            socketio_kwargs['cors_allowed_origins'] = '*'
        # 条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 执行变量赋值，放行指定的精确来源列表。
            socketio_kwargs['cors_allowed_origins'] = [
                o.strip() for o in cors_origins.split(',') if o.strip()
            ]
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    socketio.init_app(app, **socketio_kwargs)

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if redis_url:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        init_cache(redis_url)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app.jinja_env.globals['versioned_url'] = versioned_url

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.context_processor
    # 定义 `inject_map_config` 函数，封装一段可复用的后端处理流程。
    def inject_map_config():
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return {
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'amap_js_key': os.environ.get('AMAP_JS_KEY', ''),
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'amap_security_key': os.environ.get('AMAP_SECURITY_KEY', ''),
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        }

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.context_processor
    # 向所有模板注入 is_mobile 标记：用于在手机/平板上隐藏管理员入口并启用移动端布局。
    def inject_device_flags():
        # 局部导入，避免与扩展初始化的导入顺序产生耦合。
        from utils.helpers import is_mobile_device
        # 返回当前请求是否来自手机/平板设备（基于 User-Agent 判断）。
        return {'is_mobile': is_mobile_device()}

    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from blueprints.auth import auth_bp
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from blueprints.user import user_bp
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from blueprints.admin import admin_bp
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from blueprints.setup import setup_bp, ensure_runtime_schema
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from blueprints.health import health_bp

    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    app.register_blueprint(auth_bp)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    app.register_blueprint(user_bp)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    app.register_blueprint(admin_bp)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    app.register_blueprint(setup_bp)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    app.register_blueprint(health_bp)

    # 上下文管理语句，自动管理资源生命周期或事务边界。
    with app.app_context():
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ensure_runtime_schema()

    # 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
    import socketio_events  # noqa: F401 — registers @socketio.on handlers

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_manager.user_loader
    # 定义 `load_user` 函数，封装一段可复用的后端处理流程。
    def load_user(user_id):
        # 从指定模块导入类、函数或变量，简化后续代码引用。
        from models import User, Admin
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_type = session.get('user_type', 'user')
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if user_type == 'admin':
                # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return db.session.get(Admin, int(user_id))
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return db.session.get(User, int(user_id))
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except (ValueError, TypeError):
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return None
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except SQLAlchemyError:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logger.error("load_user 数据库异常 | user_id=%s", user_id, exc_info=True)
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return None

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # ── 统一 AJAX 检测 ──
    # 定义 `_is_ajax` 函数，封装一段可复用的后端处理流程。
    def _is_ajax() -> bool:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return request.is_json or request.headers.get('X-Requested-With') == 'XMLHttpRequest'

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # ── 数据库连接检测（before_request）──
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _SKIP_DB_CHECK_PREFIXES = ('/static/', '/health', '/init_db', '/api/test_connection')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _db_status = {'ok': True, 'last_check': 0.0}
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _DB_CHECK_INTERVAL = 5

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.before_request
    # 定义 `check_db_connection` 函数，封装一段可复用的后端处理流程。
    def check_db_connection():
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if request.endpoint is None:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            return
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if any(request.path.startswith(p) for p in _SKIP_DB_CHECK_PREFIXES):
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            return
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if request.endpoint.startswith('setup.'):
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            return

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        now = time.monotonic()
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if now - _db_status['last_check'] < _DB_CHECK_INTERVAL and _db_status['ok']:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            return

        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.execute(text('SELECT 1'))
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            _db_status['ok'] = True
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            _db_status['last_check'] = now
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.rollback()
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            _db_status['ok'] = False
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            _db_status['last_check'] = now
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logger.error("数据库连接检测失败 | 路径: %s", request.path, exc_info=True)
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if _is_ajax():
                # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return jsonify({'success': False, 'message': '数据库连接失败，请稍后再试'}), 500
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return _render_error(500, '数据库连接失败',
                                 # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                                 '系统无法连接到数据库服务，请检查数据库是否正常运行，或联系管理员处理。',
                                 # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                                 'db', tips_title='连接诊断',
                                 # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                                 tips=['检查数据库服务是否已启动', '确认网络连接与端口配置正确', '验证数据库用户名和密码有效'])

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # ── 统一错误渲染 ──
    # 定义 `_render_error` 函数，封装一段可复用的后端处理流程。
    def _render_error(code: int, title: str, desc: str, icon: str = 'warning',
                      # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                      tips_title: str | None = None, tips: list[str] | None = None):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template('error.html',
                               # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                               error_code=code, error_title=title,
                               # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                               error_desc=desc, error_icon=icon,
                               # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                               tips_title=tips_title, error_tips=tips), code

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # ── HTTP 错误处理 ──
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(400)
    # 定义 `handle_bad_request` 函数，封装一段可复用的后端处理流程。
    def handle_bad_request(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_ajax():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求参数有误'}), 400
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(400, '请求无效',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '服务器无法理解当前请求，请检查输入内容后重试。', 'ban')

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(403)
    # 定义 `handle_forbidden` 函数，封装一段可复用的后端处理流程。
    def handle_forbidden(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_ajax():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '没有权限执行此操作'}), 403
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(403, '访问被拒绝',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '你没有权限访问此页面，请确认已登录正确的账号，或联系管理员获取权限。', 'lock')

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(404)
    # 定义 `handle_not_found` 函数，封装一段可复用的后端处理流程。
    def handle_not_found(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_ajax():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求的页面不存在'}), 404
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(404, '该页面不存在',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '你访问的页面可能已被移除、地址有误，或暂时不可用。不妨回到首页，重新开始你的阅读旅程。', 'book',)

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(405)
    # 定义 `handle_method_not_allowed` 函数，封装一段可复用的后端处理流程。
    def handle_method_not_allowed(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_ajax():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '不支持的请求方式'}), 405
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(405, '请求方式不被允许',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '当前页面不支持该操作方式，请返回上一页重新操作。', 'ban')

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(413)
    # 定义 `handle_payload_too_large` 函数，封装一段可复用的后端处理流程。
    def handle_payload_too_large(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_ajax():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '上传的文件过大，请压缩后重试'}), 413
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(413, '文件体积过大',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '上传的文件超过了系统允许的最大体积（16 MB），请压缩或裁剪后重新上传。', 'upload')

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(429)
    # 定义 `handle_too_many_requests` 函数，封装一段可复用的后端处理流程。
    def handle_too_many_requests(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_ajax():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '操作过于频繁，请稍后再试'}), 429
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(429, '操作过于频繁',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '你的请求速度超出了系统限制，请稍等片刻后再试。', 'clock')

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(500)
    # 定义 `handle_internal_error` 函数，封装一段可复用的后端处理流程。
    def handle_internal_error(e):
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("服务器内部错误: %s | 路径: %s", e, request.path, exc_info=True)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_ajax():
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '服务器内部错误，请稍后再试'}), 500
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(500, '服务器遇到了问题',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # ── 数据库异常处理 ──
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _TABLE_MISSING_PHRASES = (
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        "doesn't exist",
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        "no such table",
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        "unknown database",
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _CONN_FAIL_PHRASES = (
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        "can't connect", "connection refused", "connection reset",
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        "access denied", "lost connection", "gone away",
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        "timed out", "timeout",
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )

    # 定义 `_is_table_missing` 函数，封装一段可复用的后端处理流程。
    def _is_table_missing(e: Exception) -> bool:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        msg = str(e).lower()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return any(phrase in msg for phrase in _TABLE_MISSING_PHRASES)

    # 定义 `_is_conn_failure` 函数，封装一段可复用的后端处理流程。
    def _is_conn_failure(e: Exception) -> bool:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        msg = str(e).lower()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return any(phrase in msg for phrase in _CONN_FAIL_PHRASES)

    # 定义 `_render_db_conn_error` 函数，封装一段可复用的后端处理流程。
    def _render_db_conn_error():
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(500, '数据库连接失败',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '系统无法连接到数据库服务，请检查数据库是否正常运行，或联系管理员处理。',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             'db', tips_title='连接诊断',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             tips=['检查数据库服务是否已启动', '确认网络连接与端口配置正确', '验证数据库用户名和密码有效'])

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(OperationalError)
    # 定义 `handle_operational_error` 函数，封装一段可复用的后端处理流程。
    def handle_operational_error(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_conn_failure(e):
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logger.error("数据库连接失败: %s | 路径: %s", e, request.path, exc_info=True)
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return _render_db_conn_error()
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_table_missing(e):
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('setup.init_db_page'))
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("数据库 OperationalError: %s | 路径: %s", e, request.path, exc_info=True)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(500, '服务器遇到了问题',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(ProgrammingError)
    # 定义 `handle_programming_error` 函数，封装一段可复用的后端处理流程。
    def handle_programming_error(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_table_missing(e):
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('setup.init_db_page'))
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("数据库 ProgrammingError: %s | 路径: %s", e, request.path, exc_info=True)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(500, '服务器遇到了问题',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.errorhandler(DatabaseError)
    # 定义 `handle_database_error` 函数，封装一段可复用的后端处理流程。
    def handle_database_error(e):
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if _is_conn_failure(e):
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logger.error("数据库连接失败: %s | 路径: %s", e, request.path, exc_info=True)
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return _render_db_conn_error()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("数据库 DatabaseError: %s | 路径: %s", e, request.path, exc_info=True)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _render_error(500, '服务器遇到了问题',
                             # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 在线用户追踪节流
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _last_cleanup_info = {'time': None}

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.before_request
    # 定义 `track_online_users` 函数，封装一段可复用的后端处理流程。
    def track_online_users():
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if request.endpoint and request.endpoint.startswith('setup.'):
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            return
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not current_user.is_authenticated:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            return

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        sess_history_id = session.get('login_history_id')

        # 定义 `_force_logout` 函数，封装一段可复用的后端处理流程。
        def _force_logout(msg, flash_category='warning'):
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logout_user()
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            session.pop('login_history_id', None)
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if _is_ajax():
                # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return jsonify({'success': False, 'message': msg}), 401
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash(msg, flash_category)
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('auth.login'))

        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if user_type == 'user' and getattr(current_user, 'is_banned', False):
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            remaining = getattr(current_user, 'ban_remaining_seconds', 0)
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            mins = (remaining + 59) // 60
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return _force_logout(f'账号已被封禁，剩余 {mins} 分钟后可重新登录', 'danger')

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        result = authenticate_active_session(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_id=current_user.id,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_type=user_type,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            session_history_id=sess_history_id,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            ip=get_client_ip(),
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )

        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if result == 'kicked':
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return _force_logout('您已被管理员强制下线')
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if result == 'superseded':
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return _force_logout('账号已在其他设备登录，本设备已退出')
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if result == 'missing':
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return _force_logout('会话已失效，请重新登录')

        # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
        # 周期性清理过期会话
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        now = cst_now()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        last_time = _last_cleanup_info['time']
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if last_time is None or (now - last_time).total_seconds() > 60:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            cleanup_expired_online_users()
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            _last_cleanup_info['time'] = now

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.route('/api/session_ping')
    # 定义 `session_ping` 函数，封装一段可复用的后端处理流程。
    def session_ping():
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not current_user.is_authenticated:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'ok': False}), 401
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'ok': True})

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.route('/api/update_location', methods=['POST'])
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 定义 `update_location` 函数，封装一段可复用的后端处理流程。
    def update_location():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        data = request.get_json(silent=True) or {}
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        location = str(data.get('location') or '').strip()
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not location:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '位置为空'}), 400
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        location = location[:100]
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'

        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 从指定模块导入类、函数或变量，简化后续代码引用。
            from models import OnlineSession
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            OnlineSession.query.filter_by(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                user_id=current_user.id,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                user_type=user_type,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            ).update({OnlineSession.geo_location: location}, synchronize_session=False)
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.commit()
            # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
            try:
                # 从指定模块导入类、函数或变量，简化后续代码引用。
                from socketio_emitters import emit_online_changed
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                emit_online_changed()
            # 异常处理分支，用于回滚、记录日志或返回错误响应。
            except Exception:
                # 显式结束当前分支或作为占位语句，保持代码结构完整。
                pass
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': True})
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.rollback()
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logger.warning("更新用户定位失败 | user_id=%s", current_user.id, exc_info=True)
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '位置更新失败'}), 500

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # ── 安全响应头 ──
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @app.after_request
    # 定义 `set_security_headers` 函数，封装一段可复用的后端处理流程。
    def set_security_headers(response):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        response.headers['X-Content-Type-Options'] = 'nosniff'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        response.headers['X-Frame-Options'] = 'DENY'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=(self)'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        response.headers['Content-Security-Policy'] = (
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "default-src 'self'; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "script-src 'self' 'unsafe-inline' https://webapi.amap.com https://cdn.socket.io; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "style-src 'self' 'unsafe-inline'; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "img-src 'self' data: blob:; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "connect-src 'self' ws: wss: https://restapi.amap.com; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "font-src 'self'; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "frame-src 'none'; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "object-src 'none'; "
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "base-uri 'self';"
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return response

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return app

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
app = create_app()

# 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
if __name__ == '__main__':
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    debug_mode = os.environ.get('FLASK_DEBUG', 'false').lower() == 'true'
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    socketio.run(app, debug=debug_mode, host='0.0.0.0', port=5000, use_reloader=False)
