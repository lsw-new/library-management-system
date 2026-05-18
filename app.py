import logging
import os
import time
from flask import Flask, session, redirect, url_for, flash, request, render_template, jsonify
from flask_login import current_user, logout_user
from sqlalchemy import text
from sqlalchemy.exc import OperationalError, ProgrammingError, DatabaseError

logger = logging.getLogger(__name__)

from config import Config
from extensions import db, login_manager
from utils import cst_now, cleanup_expired_online_users, authenticate_active_session, get_client_ip

def create_app():
    app = Flask(__name__, template_folder='static/html')
    app.config.from_object(Config)

    app.config['UPLOAD_FOLDER'] = 'static/images'
    app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}
    app.config['LOG_FOLDER'] = 'static/logs'
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    os.makedirs(app.config['LOG_FOLDER'], exist_ok=True)

    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'

    from blueprints.auth import auth_bp
    from blueprints.user import user_bp
    from blueprints.admin import admin_bp
    from blueprints.setup import setup_bp, ensure_runtime_schema
    from blueprints.health import health_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(user_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(setup_bp)
    app.register_blueprint(health_bp)

    with app.app_context():
        ensure_runtime_schema()

    @login_manager.user_loader
    def load_user(user_id):
        from models import User, Admin
        user_type = session.get('user_type', 'user')
        try:
            if user_type == 'admin':
                return db.session.get(Admin, int(user_id))
            return db.session.get(User, int(user_id))
        except Exception:
            return None

    # ── 统一 AJAX 检测 ──
    def _is_ajax() -> bool:
        return request.is_json or request.headers.get('X-Requested-With') == 'XMLHttpRequest'

    # ── 数据库连接检测（before_request）──
    _SKIP_DB_CHECK_PREFIXES = ('/static/', '/health', '/init_db', '/api/test_connection')
    _db_status = {'ok': True, 'last_check': 0.0}
    _DB_CHECK_INTERVAL = 5

    @app.before_request
    def check_db_connection():
        if request.endpoint is None:
            return
        if any(request.path.startswith(p) for p in _SKIP_DB_CHECK_PREFIXES):
            return
        if request.endpoint.startswith('setup.'):
            return

        now = time.monotonic()
        if now - _db_status['last_check'] < _DB_CHECK_INTERVAL and _db_status['ok']:
            return

        try:
            db.session.execute(text('SELECT 1'))
            _db_status['ok'] = True
            _db_status['last_check'] = now
        except Exception:
            db.session.rollback()
            _db_status['ok'] = False
            _db_status['last_check'] = now
            logger.error("数据库连接检测失败 | 路径: %s", request.path, exc_info=True)
            if _is_ajax():
                return jsonify({'success': False, 'message': '数据库连接失败，请稍后再试'}), 500
            return _render_error(500, '数据库连接失败',
                                 '系统无法连接到数据库服务，请检查数据库是否正常运行，或联系管理员处理。',
                                 'db', tips_title='连接诊断',
                                 tips=['检查数据库服务是否已启动', '确认网络连接与端口配置正确', '验证数据库用户名和密码有效'])

    # ── 统一错误渲染 ──
    def _render_error(code: int, title: str, desc: str, icon: str = 'warning',
                      tips_title: str | None = None, tips: list[str] | None = None):
        return render_template('error.html',
                               error_code=code, error_title=title,
                               error_desc=desc, error_icon=icon,
                               tips_title=tips_title, error_tips=tips), code

    # ── HTTP 错误处理 ──
    @app.errorhandler(400)
    def handle_bad_request(e):
        if _is_ajax():
            return jsonify({'success': False, 'message': '请求参数有误'}), 400
        return _render_error(400, '请求无效',
                             '服务器无法理解当前请求，请检查输入内容后重试。', 'ban')

    @app.errorhandler(403)
    def handle_forbidden(e):
        if _is_ajax():
            return jsonify({'success': False, 'message': '没有权限执行此操作'}), 403
        return _render_error(403, '访问被拒绝',
                             '你没有权限访问此页面，请确认已登录正确的账号，或联系管理员获取权限。', 'lock')

    @app.errorhandler(404)
    def handle_not_found(e):
        if _is_ajax():
            return jsonify({'success': False, 'message': '请求的页面不存在'}), 404
        return _render_error(404, '该页面不存在',
                             '你访问的页面可能已被移除、地址有误，或暂时不可用。不妨回到首页，重新开始你的阅读旅程。', 'book',)

    @app.errorhandler(405)
    def handle_method_not_allowed(e):
        if _is_ajax():
            return jsonify({'success': False, 'message': '不支持的请求方式'}), 405
        return _render_error(405, '请求方式不被允许',
                             '当前页面不支持该操作方式，请返回上一页重新操作。', 'ban')

    @app.errorhandler(413)
    def handle_payload_too_large(e):
        if _is_ajax():
            return jsonify({'success': False, 'message': '上传的文件过大，请压缩后重试'}), 413
        return _render_error(413, '文件体积过大',
                             '上传的文件超过了系统允许的最大体积（16 MB），请压缩或裁剪后重新上传。', 'upload')

    @app.errorhandler(429)
    def handle_too_many_requests(e):
        if _is_ajax():
            return jsonify({'success': False, 'message': '操作过于频繁，请稍后再试'}), 429
        return _render_error(429, '操作过于频繁',
                             '你的请求速度超出了系统限制，请稍等片刻后再试。', 'clock')

    @app.errorhandler(500)
    def handle_internal_error(e):
        logger.error("服务器内部错误: %s | 路径: %s", e, request.path, exc_info=True)
        if _is_ajax():
            return jsonify({'success': False, 'message': '服务器内部错误，请稍后再试'}), 500
        return _render_error(500, '服务器遇到了问题',
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    # ── 数据库异常处理 ──
    _TABLE_MISSING_PHRASES = (
        "doesn't exist",
        "no such table",
        "unknown database",
    )
    _CONN_FAIL_PHRASES = (
        "can't connect", "connection refused", "connection reset",
        "access denied", "lost connection", "gone away",
        "timed out", "timeout",
    )

    def _is_table_missing(e: Exception) -> bool:
        msg = str(e).lower()
        return any(phrase in msg for phrase in _TABLE_MISSING_PHRASES)

    def _is_conn_failure(e: Exception) -> bool:
        msg = str(e).lower()
        return any(phrase in msg for phrase in _CONN_FAIL_PHRASES)

    def _render_db_conn_error():
        return _render_error(500, '数据库连接失败',
                             '系统无法连接到数据库服务，请检查数据库是否正常运行，或联系管理员处理。',
                             'db', tips_title='连接诊断',
                             tips=['检查数据库服务是否已启动', '确认网络连接与端口配置正确', '验证数据库用户名和密码有效'])

    @app.errorhandler(OperationalError)
    def handle_operational_error(e):
        if _is_conn_failure(e):
            logger.error("数据库连接失败: %s | 路径: %s", e, request.path, exc_info=True)
            return _render_db_conn_error()
        if _is_table_missing(e):
            return redirect(url_for('setup.init_db_page'))
        logger.error("数据库 OperationalError: %s | 路径: %s", e, request.path, exc_info=True)
        return _render_error(500, '服务器遇到了问题',
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    @app.errorhandler(ProgrammingError)
    def handle_programming_error(e):
        if _is_table_missing(e):
            return redirect(url_for('setup.init_db_page'))
        logger.error("数据库 ProgrammingError: %s | 路径: %s", e, request.path, exc_info=True)
        return _render_error(500, '服务器遇到了问题',
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    @app.errorhandler(DatabaseError)
    def handle_database_error(e):
        if _is_conn_failure(e):
            logger.error("数据库连接失败: %s | 路径: %s", e, request.path, exc_info=True)
            return _render_db_conn_error()
        logger.error("数据库 DatabaseError: %s | 路径: %s", e, request.path, exc_info=True)
        return _render_error(500, '服务器遇到了问题',
                             '系统内部发生了一个错误，已记录日志。请稍后再试，或联系管理员处理。')

    # 在线用户追踪节流
    _last_cleanup_info = {'time': None}

    @app.before_request
    def track_online_users():
        if request.endpoint and request.endpoint.startswith('setup.'):
            return
        if not current_user.is_authenticated:
            return

        user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
        sess_history_id = session.get('login_history_id')

        def _force_logout(msg, flash_category='warning'):
            logout_user()
            session.pop('login_history_id', None)
            if _is_ajax():
                return jsonify({'success': False, 'message': msg}), 401
            flash(msg, flash_category)
            return redirect(url_for('auth.login'))

        if user_type == 'user' and getattr(current_user, 'is_banned', False):
            remaining = getattr(current_user, 'ban_remaining_seconds', 0)
            mins = (remaining + 59) // 60
            return _force_logout(f'账号已被封禁，剩余 {mins} 分钟后可重新登录', 'danger')

        result = authenticate_active_session(
            user_id=current_user.id,
            user_type=user_type,
            session_history_id=sess_history_id,
            ip=get_client_ip(),
        )

        if result == 'kicked':
            return _force_logout('您已被管理员强制下线')
        if result == 'superseded':
            return _force_logout('账号已在其他设备登录，本设备已退出')
        if result == 'missing':
            return _force_logout('会话已失效，请重新登录')

        # 周期性清理过期会话
        now = cst_now()
        last_time = _last_cleanup_info['time']
        if last_time is None or (now - last_time).total_seconds() > 60:
            cleanup_expired_online_users()
            _last_cleanup_info['time'] = now

    @app.route('/api/session_ping')
    def session_ping():
        if not current_user.is_authenticated:
            return jsonify({'ok': False}), 401
        return jsonify({'ok': True})

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
