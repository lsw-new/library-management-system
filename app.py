import logging
import os
from flask import Flask, session, redirect, url_for, flash, request, render_template
from flask_login import current_user
from sqlalchemy.exc import OperationalError, ProgrammingError, DatabaseError

logger = logging.getLogger(__name__)

from config import Config
from extensions import db, login_manager
from utils import cst_now, cleanup_expired_online_users, authenticate_active_session, get_client_ip

def create_app():
    app = Flask(__name__, template_folder='static/html')
    app.config.from_object(Config)

    # 文件上传与日志配置
    app.config['UPLOAD_FOLDER'] = 'static/images'
    app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg', 'gif'}
    app.config['LOG_FOLDER'] = 'static/logs'
    app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 31536000
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    os.makedirs(app.config['LOG_FOLDER'], exist_ok=True)

    # 初始化扩展
    db.init_app(app)
    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'

    # 注册蓝图
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

    # 用户加载器
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

    # 全局错误处理 - 区分"数据库未初始化"与"SQL 逻辑错误"
    _INIT_REQUIRED_PHRASES = (
        "can't connect", "connection refused", "connection reset",
        "table", "doesn't exist", "no such table",
        "unknown database", "access denied",
    )

    def _needs_init(e: Exception) -> bool:
        msg = str(e).lower()
        return any(phrase in msg for phrase in _INIT_REQUIRED_PHRASES)

    @app.errorhandler(OperationalError)
    def handle_operational_error(e):
        # 连接失败或数据库/表不存在 → 引导初始化
        if _needs_init(e):
            return redirect(url_for('setup.init_db_page'))
        logger.error("数据库 OperationalError: %s | 路径: %s", e, request.path, exc_info=True)
        return render_template('500.html'), 500

    @app.errorhandler(ProgrammingError)
    def handle_programming_error(e):
        # 表不存在的 ProgrammingError → 引导初始化，其余是代码 bug
        if _needs_init(e):
            return redirect(url_for('setup.init_db_page'))
        logger.error("数据库 ProgrammingError: %s | 路径: %s", e, request.path, exc_info=True)
        return render_template('500.html'), 500

    @app.errorhandler(DatabaseError)
    def handle_database_error(e):
        logger.error("数据库 DatabaseError: %s | 路径: %s", e, request.path, exc_info=True)
        return render_template('500.html'), 500

    # 在线用户追踪节流
    _last_cleanup_info = {'time': None}

    @app.before_request
    def track_online_users():
        if request.endpoint in ['setup.init_db_page', 'setup.test_connection', 'setup.create_tables', 'setup.create_admin_user']:
            return
        if not current_user.is_authenticated:
            return

        from flask import session as _sess, jsonify, redirect, url_for, flash
        from flask_login import logout_user

        user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
        sess_history_id = _sess.get('login_history_id')

        # 普通用户在请求中途被封禁 → 立即踢出
        if user_type == 'user' and getattr(current_user, 'is_banned', False):
            remaining = getattr(current_user, 'ban_remaining_seconds', 0)
            mins = (remaining + 59) // 60
            logout_user()
            _sess.pop('login_history_id', None)
            msg = f'账号已被封禁，剩余 {mins} 分钟后可重新登录'
            if request.is_json or request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return jsonify({'success': False, 'message': msg}), 401
            flash(msg, 'danger')
            return redirect(url_for('auth.login'))

        # 走 OnlineSession 表的统一鉴权
        result = authenticate_active_session(
            user_id=current_user.id,
            user_type=user_type,
            session_history_id=sess_history_id,
            ip=get_client_ip(),
        )

        if result == 'kicked':
            logout_user()
            _sess.pop('login_history_id', None)
            if request.is_json or request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return jsonify({'success': False, 'message': '您已被管理员强制下线'}), 401
            flash('您已被管理员强制下线', 'warning')
            return redirect(url_for('auth.login'))

        if result == 'superseded':
            logout_user()
            _sess.pop('login_history_id', None)
            if request.is_json or request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return jsonify({'success': False, 'message': '账号已在其他设备登录'}), 401
            flash('账号已在其他设备登录，本设备已退出', 'warning')
            return redirect(url_for('auth.login'))

        if result == 'missing':
            logout_user()
            _sess.pop('login_history_id', None)
            if request.is_json or request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return jsonify({'success': False, 'message': '会话已失效，请重新登录'}), 401
            flash('会话已失效，请重新登录', 'warning')
            return redirect(url_for('auth.login'))

        # 周期性清理过期会话
        now = cst_now()
        last_time = _last_cleanup_info['time']
        if last_time is None or (now - last_time).total_seconds() > 60:
            cleanup_expired_online_users()
            _last_cleanup_info['time'] = now

    @app.route('/api/session_ping')
    def session_ping():
        from flask import jsonify
        # before_request 已完成鉴权；走到这里即代表会话有效
        if not current_user.is_authenticated:
            return jsonify({'ok': False}), 401
        return jsonify({'ok': True})

    return app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
