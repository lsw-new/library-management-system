import os
import re
import logging
from contextlib import contextmanager
from functools import wraps
from datetime import datetime, timedelta
from logging.handlers import RotatingFileHandler
from flask import request, current_app, session, jsonify, redirect, url_for, flash
from flask_login import current_user
from urllib.parse import urlparse
from werkzeug.utils import secure_filename
from extensions import db, cst_now

# ==================== 在线会话追踪 (数据库 OnlineSession 表) ====================
# 心跳节流：同一会话最少 N 秒写一次 last_seen
HEARTBEAT_THROTTLE_SECONDS = 30
# 失活超时：超过 N 分钟无心跳则视为离线，由清理任务删除
SESSION_EXPIRE_MINUTES = 5

# ==================== 基础工具 ====================
def get_client_ip():
    """获取客户端真实IP地址"""
    forwarded_for = request.headers.get('X-Forwarded-For', '')
    if forwarded_for:
        return forwarded_for.split(',')[0].strip()
    return request.remote_addr or '未知'

def is_mobile_device():
    """检测是否为移动端设备"""
    user_agent = request.headers.get('User-Agent', '').lower()
    mobile_keywords = [
        'mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry',
        'windows phone', 'opera mini', 'iemobile', 'webos', 'palm'
    ]
    return any(keyword in user_agent for keyword in mobile_keywords)

def allowed_file(filename, allowed_extensions):
    """检查文件名是否符合允许的扩展名"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions

# ==================== 日志工具 ====================
def get_user_logger(username=None):
    if username is None:
        if current_user.is_authenticated:
            username = current_user.username
        else:
            username = 'guest'

    today = datetime.now().strftime('%Y-%m-%d')
    log_folder = current_app.config.get('LOG_FOLDER', 'static/logs')
    os.makedirs(log_folder, exist_ok=True)

    log_filename = f"{username}_{today}.log"
    log_path = os.path.join(log_folder, log_filename)

    logger = logging.getLogger(f'user_{username}_{today}')
    if not logger.handlers:
        logger.setLevel(logging.INFO)
        handler = RotatingFileHandler(
            log_path,
            maxBytes=10*1024*1024,
            backupCount=5,
            encoding='utf-8'
        )
        formatter = logging.Formatter(
            '%(asctime)s [%(levelname)s] %(message)s',
            datefmt='%Y-%m-%d %H:%M:%S'
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    return logger

def log_action(action, details='', username=None):
    try:
        logger = get_user_logger(username)
        ip = get_client_ip()
        log_message = f"[{ip}] {action}"
        if details:
            log_message += f" - {details}"
        logger.info(log_message)

        # 同时写入数据库
        from flask_login import current_user
        from models import LoginHistory, db

        if current_user and current_user.is_authenticated:
            user_id = current_user.id
            username_snapshot = current_user.username
            user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
        elif username:
            # 如果提供了用户名但未登录（如登录失败场景）
            user_id = 0
            username_snapshot = username
            user_type = 'guest'
        else:
            user_id = 0
            username_snapshot = 'system'
            user_type = 'system'

        log_record = LoginHistory(
            user_id=user_id,
            username_snapshot=username_snapshot,
            user_type=user_type,
            ip_address=ip,
            action=action,
            details=details,
            is_online=False  # 操作日志不影响在线状态
        )
        db.session.add(log_record)
        db.session.commit()
    except Exception:
        pass

# ==================== 数据库配置工具 ====================
def _get_db_config():
    uri = current_app.config['SQLALCHEMY_DATABASE_URI']
    parsed = urlparse(uri)
    return {
        'host': parsed.hostname or '127.0.0.1',
        'port': parsed.port or 3306,
        'user': parsed.username or 'root',
        'password': parsed.password or '',
        'database': parsed.path.lstrip('/').split('?')[0] if parsed.path else 'library_db',
        'charset': 'utf8mb4',
    }

def update_config_file(new_uri):
    config_path = os.path.join(current_app.root_path, 'config.py')
    if not os.path.exists(config_path):
        return False
    try:
        with open(config_path, 'r', encoding='utf-8') as f:
            content = f.read()
        pattern = r"('DATABASE_URL',\s*')(.*?)(')"
        new_content = re.sub(pattern, rf"\1{new_uri}\3", content)
        with open(config_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        current_app.config['SQLALCHEMY_DATABASE_URI'] = new_uri
        return True
    except Exception:
        return False

# ==================== 在线状态与业务辅助逻辑 ====================
def _naive_now():
    """与数据库 naive DATETIME 一致的当前时间"""
    return cst_now().replace(tzinfo=None)


def _mark_login_history_offline(login_history_id, when):
    """工具函数：将指定 LoginHistory 行标记为下线（不 commit）"""
    if not login_history_id:
        return
    from models import LoginHistory
    record = db.session.get(LoginHistory, login_history_id)
    if record and record.is_online:
        record.is_online = False
        record.last_seen = when
        record.logout_time = when


def create_login_session_record(user, user_type):
    """新登录：写 LoginHistory + upsert OnlineSession（单点登录顶替旧会话）"""
    from models import LoginHistory, OnlineSession
    now = _naive_now()
    ip_address = get_client_ip()

    # 旧会话：先把 LoginHistory 标记下线
    existing = OnlineSession.query.filter_by(user_id=user.id, user_type=user_type).first()
    if existing:
        _mark_login_history_offline(existing.login_history_id, now)

    # 新 LoginHistory
    login_record = LoginHistory(
        user_id=user.id,
        username_snapshot=user.username,
        user_type=user_type,
        ip_address=ip_address,
        login_time=now,
        last_seen=now,
        is_online=True,
    )
    db.session.add(login_record)
    db.session.flush()

    # Upsert OnlineSession
    if existing:
        existing.username = user.username
        existing.ip_address = ip_address
        existing.login_time = now
        existing.last_seen = now
        existing.login_history_id = login_record.id
        existing.is_kicked = False
    else:
        db.session.add(OnlineSession(
            user_id=user.id,
            user_type=user_type,
            username=user.username,
            ip_address=ip_address,
            login_time=now,
            last_seen=now,
            login_history_id=login_record.id,
            is_kicked=False,
        ))

    session['login_history_id'] = login_record.id


def mark_current_session_offline():
    """主动登出：删除 OnlineSession 行 + LoginHistory 标记下线"""
    from models import OnlineSession
    login_history_id = session.get('login_history_id')
    now = _naive_now()

    _mark_login_history_offline(login_history_id, now)

    if current_user.is_authenticated:
        user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
        OnlineSession.query.filter_by(
            user_id=current_user.id, user_type=user_type
        ).delete(synchronize_session=False)

    session.pop('login_history_id', None)


def cleanup_expired_online_users():
    """清理超时未活跃的会话（last_seen 超过阈值则视为离线）"""
    from models import OnlineSession
    cutoff = _naive_now() - timedelta(minutes=SESSION_EXPIRE_MINUTES)
    expired = OnlineSession.query.filter(OnlineSession.last_seen < cutoff).all()
    if not expired:
        return
    for sess in expired:
        _mark_login_history_offline(sess.login_history_id, sess.last_seen)
        db.session.delete(sess)
    try:
        db.session.commit()
    except Exception:
        db.session.rollback()


def list_active_sessions(search=None):
    """列出所有活跃会话，按最近登录时间倒序（排除已被踢出但尚未清理的行）"""
    from models import OnlineSession
    q = OnlineSession.query.filter(OnlineSession.is_kicked == False)
    if search:
        s = f'%{search.lower()}%'
        q = q.filter(
            db.func.lower(OnlineSession.username).like(s)
            | db.func.lower(OnlineSession.user_type).like(s)
        )
    return q.order_by(OnlineSession.login_time.desc()).all()


def count_active_sessions():
    from models import OnlineSession
    return OnlineSession.query.filter(OnlineSession.is_kicked == False).count()


def kick_active_session(user_id, user_type='user'):
    """管理员踢出指定账号；返回被踢用户名或 None"""
    from models import OnlineSession
    sess = OnlineSession.query.filter_by(user_id=user_id, user_type=user_type).first()
    if not sess:
        return None
    username = sess.username
    now = _naive_now()
    sess.is_kicked = True
    sess.last_seen = now
    _mark_login_history_offline(sess.login_history_id, now)
    try:
        db.session.commit()
    except Exception:
        db.session.rollback()
        return None
    return username


def authenticate_active_session(user_id, user_type, session_history_id, ip):
    """
    每次请求调用：检查 OnlineSession 状态，更新心跳
    返回: 'ok' / 'kicked' / 'superseded' / 'missing'
    """
    from models import OnlineSession
    sess = OnlineSession.query.filter_by(user_id=user_id, user_type=user_type).first()
    if not sess:
        return 'missing'

    # 被管理员踢出
    if sess.is_kicked:
        _mark_login_history_offline(sess.login_history_id, _naive_now())
        db.session.delete(sess)
        try:
            db.session.commit()
        except Exception:
            db.session.rollback()
        return 'kicked'

    # 被新登录顶替
    if session_history_id and sess.login_history_id != session_history_id:
        return 'superseded'

    # 心跳节流写入
    now = _naive_now()
    if (now - sess.last_seen).total_seconds() >= HEARTBEAT_THROTTLE_SECONDS:
        sess.last_seen = now
        sess.ip_address = ip
        try:
            db.session.commit()
        except Exception:
            db.session.rollback()

    return 'ok'

def process_expired_reservations(book_ids=None):
    from models import BorrowRecord
    three_minutes_ago = cst_now() - timedelta(minutes=3)
    query = BorrowRecord.query.filter(
        BorrowRecord.status == 'pending',
        BorrowRecord.borrow_date < three_minutes_ago
    )
    if book_ids:
        query = query.filter(BorrowRecord.book_id.in_(book_ids))
    expired_records = query.all()

    if not expired_records:
        return 0

    count = 0
    for record in expired_records:
        try:
            book = record.book
            if book.stock < book.total:
                book.stock += 1
            record.status = 'expired'
            record.reject_date = cst_now()
            log_action('自动拒绝逾期预约', f'用户 {record.user.username} 预约图书 {book.title} 超过3分钟未处理，已自动标记为逾期')
            count += 1
        except Exception:
            continue

    if count > 0:
        db.session.commit()
    return count


# ==================== 共享装饰器与上下文管理器 ====================
def admin_required(json_response=True):
    """
    管理员权限校验装饰器。
    json_response=True 时以 JSON+403 返回，适用于 API；
    json_response=False 时 flash + redirect，适用于页面路由。
    同时阻止移动端访问管理端。
    """
    def decorator(view):
        @wraps(view)
        def wrapper(*args, **kwargs):
            if is_mobile_device():
                if json_response:
                    return jsonify({'success': False, 'message': '手机端不能进入管理员页面，请切换PC端'}), 403
                flash('手机端不能进入管理员页面，请切换PC端', 'warning')
                return redirect(url_for('auth.login'))
            if not getattr(current_user, 'is_admin', False):
                if json_response:
                    return jsonify({'success': False, 'message': '权限不足'}), 403
                flash('权限不足', 'danger')
                return redirect(url_for('user.index'))
            return view(*args, **kwargs)
        return wrapper
    return decorator


@contextmanager
def db_transaction(error_message='操作失败'):
    """
    统一的数据库事务上下文：自动 commit / 出错 rollback。
    使用：
        with db_transaction() as tx:
            ...
        if tx.error: return jsonify({'success': False, 'message': tx.error}), 500
    """
    class _Tx:
        error = None
    tx = _Tx()
    try:
        yield tx
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        tx.error = error_message
        try:
            current_app.logger.exception(e)
        except Exception:
            pass
    return


# ==================== 图书表单/上传共用 ====================
BOOK_LOCATION_MAX_LENGTH = 100


def save_book_image(file_storage, upload_folder, allowed_extensions, old_filename=None):
    """
    保存上传的图书封面，返回新文件名（保存失败/未上传返回 None）。
    若提供 old_filename，会尝试删除旧文件。
    """
    if not file_storage or not file_storage.filename:
        return None
    if not allowed_file(file_storage.filename, allowed_extensions):
        return None
    filename = secure_filename(file_storage.filename) or 'book.jpg'
    timestamp = cst_now().strftime('%Y%m%d%H%M%S')
    image_filename = f'{timestamp}_{filename}'
    file_storage.save(os.path.join(upload_folder, image_filename))
    if old_filename:
        old_path = os.path.join(upload_folder, old_filename)
        if os.path.exists(old_path):
            try:
                os.remove(old_path)
            except OSError:
                pass
    return image_filename


def validate_book_form(form, defaults=None):
    """
    校验图书新增/编辑表单。defaults 用于 edit 场景填充默认 stock/total。
    返回 (cleaned_dict, error_message)，error_message 为 None 表示校验通过。
    """
    title = (form.get('title') or '').strip()
    author = (form.get('author') or '').strip()
    if not title or not author:
        return None, '书名和作者为必填字段'

    location = (form.get('location') or '').strip() or None
    if location and len(location) > BOOK_LOCATION_MAX_LENGTH:
        return None, f'书籍位置不能超过{BOOK_LOCATION_MAX_LENGTH}个字符'

    defaults = defaults or {}
    try:
        stock = int(form.get('stock', defaults.get('stock', 0)))
        total = int(form.get('total', defaults.get('total', stock)))
    except (TypeError, ValueError):
        return None, '库存必须是数字'

    if stock < 0 or total < 0:
        return None, '库存不能为负数'
    if total < stock:
        if defaults:
            return None, '总库存不能小于当前库存'
        total = stock

    return {
        'title': title,
        'author': author,
        'isbn': (form.get('isbn') or '').strip() or None,
        'publisher': (form.get('publisher') or '').strip(),
        'location': location,
        'category': (form.get('category') or '').strip(),
        'stock': stock,
        'total': total,
    }, None
