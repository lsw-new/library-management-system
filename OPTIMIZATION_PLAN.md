# 景艺大图书馆管理系统 — 全方位极致优化方案

> **评审日期**: 2026-05-22
> **当前综合评分**: 73.4/100
> **目标综合评分**: 90+/100
> **评审团队**: 5 个专业代理并行评审（Python 质量 / 安全 / 架构 / 前端 / 错误处理）

---

## 目录

- [一、评分总览](#一评分总览)
- [二、P0 — 紧急修复（上线前必须）](#二p0--紧急修复上线前必须)
- [三、P1 — 高优先级修复（一周内）](#三p1--高优先级修复一周内)
- [四、P2 — 中优先级改进（两周内）](#四p2--中优先级改进两周内)
- [五、P3 — 架构级优化（长期）](#五p3--架构级优化长期)
- [六、前端优化方案](#六前端优化方案)
- [七、部署与运维优化](#七部署与运维优化)
- [八、测试体系建设](#八测试体系建设)
- [九、预期收益](#九预期收益)

---

## 一、评分总览

| 维度 | 当前评分 | 目标评分 | 差距 |
|------|----------|----------|------|
| Python 代码质量 | 78 | 90 | +12 |
| 安全性 | 74 | 92 | +18 |
| 架构设计 | 73 | 88 | +15 |
| 前端代码质量 | 79 | 88 | +9 |
| 错误处理可靠性 | 62 | 85 | +23 |
| **加权总分** | **73.4** | **90** | **+16.6** |

### 问题统计

| 严重级别 | 数量 | 修复目标 |
|----------|------|----------|
| CRITICAL | 4 | 全部修复 |
| HIGH | 22 | 全部修复 |
| MEDIUM | 16 | 修复 80%+ |
| LOW | 8 | 按需修复 |

---

## 二、P0 — 紧急修复（上线前必须）

### P0-1. Session Cookie 安全配置

**问题**: 未设置 `SESSION_COOKIE_SECURE`/`HTTPONLY`/`SAMESITE`，会话可被中间人截获或 XSS 窃取
**严重级别**: CRITICAL
**影响**: 会话劫持 → 用户身份冒充
**位置**: `config.py`

**修复方案**:

```python
# config.py — Config 类中添加
class Config:
    # ... 现有配置 ...

    # ── Session 安全 ──
    SESSION_COOKIE_SECURE = is_production()        # 生产环境仅 HTTPS 发送
    SESSION_COOKIE_HTTPONLY = True                  # 防止 JS 读取 cookie
    SESSION_COOKIE_SAMESITE = 'Lax'                # 防 CSRF
    PERMANENT_SESSION_LIFETIME = 43200             # 12 小时过期（秒）
```

---

### P0-2. HTTPS + HSTS 配置

**问题**: Nginx 仅监听 80 端口，全站明文传输，无 HSTS
**严重级别**: CRITICAL
**影响**: 密码、Session Cookie 均明文传输，可被窃听
**位置**: `docker/nginx/nginx.conf`

**修复方案**:

```nginx
# docker/nginx/nginx.conf — 添加 HTTPS server block

# HTTP -> HTTPS 重定向
server {
    listen 80;
    server_name _;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name _;

    ssl_certificate     /etc/nginx/ssl/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

    # ... 其余 location 配置不变 ...
}
```

**docker-compose.yml 变更**: 挂载证书 volume，端口映射加 443。

---

### P0-3. `load_user` 异常不应静默返回 None

**问题**: 数据库异常时 `load_user` 返回 None，导致合法用户被当作未登录
**严重级别**: CRITICAL
**影响**: 数据库瞬时故障 → 全员退出登录，无任何日志
**位置**: `app.py:77-85`

**修复方案**:

```python
# app.py — load_user 函数
@login_manager.user_loader
def load_user(user_id):
    from flask import g
    from models import User, Admin
    from sqlalchemy.exc import SQLAlchemyError

    user_type = session.get('user_type', 'user')
    cache_key = f'_user_cache_{user_type}_{user_id}'
    cached = getattr(g, cache_key, None)
    if cached is not None:
        return cached
    try:
        if user_type == 'admin':
            user = db.session.get(Admin, int(user_id))
        else:
            user = db.session.get(User, int(user_id))
        setattr(g, cache_key, user)
        return user
    except SQLAlchemyError:
        logger.error("load_user 数据库异常 (user_id=%s, type=%s)",
                     user_id, user_type, exc_info=True)
        return None
    except (ValueError, TypeError):
        return None
```

---

### P0-4. 日志目录移出 static/ — 防止 HTTP 公开访问

**问题**: 审计日志写入 `static/logs/`，Nginx 会将其作为静态文件提供下载
**严重级别**: CRITICAL
**影响**: 任何人可通过 `/static/logs/actions.log` 下载完整审计日志（含 IP、用户名）
**位置**: `utils/logging.py:17`, `app.py:32`

**修复方案**:

```python
# app.py — 将日志目录移出 static/
app.config['LOG_FOLDER'] = 'logs'  # 改为项目根目录下的 logs/
os.makedirs(app.config['LOG_FOLDER'], exist_ok=True)
```

```python
# utils/logging.py — 同步更新路径
LOG_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'logs')
```

**Nginx 备选**: 若不想改路径，在 nginx.conf 中添加：
```nginx
location /static/logs/ {
    deny all;
    return 404;
}
```

---

### P0-5. Content-Security-Policy 头

**问题**: 无 CSP 头，内联脚本无限制，XSS 攻击面增大
**严重级别**: HIGH
**位置**: `app.py:267-275`

**修复方案**:

```python
# app.py — set_security_headers 函数中添加
@app.after_request
def set_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['Referrer-Policy'] = 'strict-origin-when-cross-origin'
    response.headers['Permissions-Policy'] = 'camera=(), microphone=(), geolocation=(self)'

    # 新增 CSP（逐步收紧，初期允许 unsafe-inline 以兼容现有内联脚本）
    response.headers['Content-Security-Policy'] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' https://webapi.amap.com; "
        "style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: blob:; "
        "connect-src 'self' wss: https://restapi.amap.com; "
        "font-src 'self'; "
        "frame-src 'none'; "
        "object-src 'none'; "
        "base-uri 'self';"
    )

    if not response.headers.get('Cache-Control'):
        response.headers['Cache-Control'] = 'no-store'
    return response
```

> **后续**: 将 base.html 中的内联脚本迁移到独立 JS 文件后，可移除 `'unsafe-inline'`，改用 nonce。

---

### P0-6. `debug=True` 改为环境变量控制

**问题**: `__main__` 入口硬编码 `debug=True`，误用 `python app.py` 启动将暴露 Werkzeug 调试终端
**严重级别**: HIGH
**位置**: `app.py:312-314`

**修复方案**:

```python
# app.py — 文件末尾
if __name__ == '__main__':
    debug_mode = os.environ.get('FLASK_DEBUG', 'false').lower() == 'true'
    socketio.run(app, debug=debug_mode, host='0.0.0.0', port=5000,
                 use_reloader=False, allow_unsafe_werkzeug=debug_mode)
```

---

## 三、P1 — 高优先级修复（一周内）

### P1-1. Redis 故障时限流降级

**问题**: Redis 不可用时 `is_rate_limited` 返回 False，所有限流失效
**影响**: 暴力破解登录无阻挡
**位置**: `utils/rate_limit.py:24-37`

**修复方案**:

```python
# utils/rate_limit.py — 添加进程内回退限流
import logging
import threading
from collections import defaultdict

_logger = logging.getLogger(__name__)

# 进程内回退限流器（Redis 不可用时启用）
_fallback_lock = threading.Lock()
_fallback_buckets: dict[str, list[float]] = defaultdict(list)


def _fallback_is_limited(key: str, limit: int, window: float) -> bool:
    now = time.time()
    with _fallback_lock:
        bucket = _fallback_buckets[key]
        _fallback_buckets[key] = [t for t in bucket if t > now - window]
        if len(_fallback_buckets[key]) >= limit:
            return True
        _fallback_buckets[key].append(now)
        return False


def is_rate_limited(scope: str, limit: int, window_seconds: int,
                    identity: str | None = None) -> bool:
    ident = _rate_limit_identity(identity)
    key = f'rl:{scope}:{ident}'
    r = _get_redis()
    if not r:
        _logger.warning("Redis 不可用，使用进程内限流回退")
        return _fallback_is_limited(key, limit, window_seconds)
    try:
        now = time.time()
        pipe = r.pipeline()
        pipe.zremrangebyscore(key, 0, now - window_seconds)
        pipe.zcard(key)
        pipe.zadd(key, {str(now): now})
        pipe.expire(key, window_seconds)
        results = pipe.execute()
        return results[1] >= limit
    except Exception:
        _logger.warning("Redis 限流异常，使用进程内回退", exc_info=True)
        return _fallback_is_limited(key, limit, window_seconds)
```

---

### P1-2. `db_transaction` 异常必须记录日志

**问题**: 异常被吞掉，`tx.error` 只是固定文案，日志记录本身的失败也被吞掉
**影响**: 生产故障完全无法溯源
**位置**: `utils/decorators.py:30-44`

**修复方案**:

```python
# utils/decorators.py
import logging

_logger = logging.getLogger(__name__)


@contextmanager
def db_transaction(error_message: str = '操作失败'):
    class _Tx:
        error = None
        exception = None
    tx = _Tx()
    try:
        yield tx
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        tx.error = error_message
        tx.exception = e
        _logger.exception("db_transaction 失败 [%s]: %s", error_message, e)
```

---

### P1-3. 删除 `_teardown_request` 自动提交钩子

**问题**: 隐式提交所有脏 session 数据，commit 失败时静默回滚，客户端不知情
**影响**: 数据丢失但用户收到成功响应
**位置**: `app.py:259-265`

**修复方案**:

```python
# app.py — 直接删除以下代码块
# @app.teardown_request
# def _commit_pending_changes(exc):
#     if exc is None and db.session.dirty:
#         try:
#             db.session.commit()
#         except Exception:
#             db.session.rollback()
```

同时确保 `update_location` 等路由使用 `db_transaction` 显式提交：

```python
# app.py — update_location 修复
@app.route('/api/update_location', methods=['POST'])
def update_location():
    if not current_user.is_authenticated:
        return jsonify({'ok': False}), 401
    location = (request.get_json() or {}).get('location', '').strip()
    if not location or len(location) > 100:
        return jsonify({'ok': False}), 400

    import re
    if not re.match(r'^[一-鿿\w\s·\-,，。、]+$', location):
        return jsonify({'ok': False}), 400

    from models import OnlineSession
    user_type = get_user_type(current_user)
    with db_transaction('位置更新失败') as tx:
        sess = OnlineSession.query.filter_by(
            user_id=current_user.id, user_type=user_type
        ).first()
        if sess:
            sess.geo_location = location
    return jsonify({'ok': not tx.error})
```

---

### P1-4. 文件上传增加 Magic Bytes 验证

**问题**: 仅检查扩展名，攻击者可上传恶意内容伪装为图片
**位置**: `utils/book_utils.py:15-16`

**修复方案**:

```python
# utils/book_utils.py — 增加 MIME 验证

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}
ALLOWED_MIMES = {'image/png', 'image/jpeg', 'image/gif', 'image/webp'}

# 文件头 magic bytes
_IMAGE_SIGNATURES = {
    b'\x89PNG':     'image/png',
    b'\xff\xd8\xff': 'image/jpeg',
    b'GIF87a':     'image/gif',
    b'GIF89a':     'image/gif',
    b'RIFF':       'image/webp',
}


def allowed_file(filename: str) -> bool:
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


def validate_image_content(file_storage) -> bool:
    """读取文件头字节验证实际是否为图片"""
    header = file_storage.read(16)
    file_storage.seek(0)
    for sig in _IMAGE_SIGNATURES:
        if header.startswith(sig):
            return True
    return False
```

调用处增加双重验证：
```python
if not allowed_file(file.filename) or not validate_image_content(file):
    return jsonify({'success': False, 'message': '不支持的文件格式'}), 400
```

---

### P1-5. 管理员重置密码改为随机临时密码

**问题**: 重置后密码 = 学号（13 位纯数字），学号半公开可预测
**位置**: `blueprints/admin/users.py:115-121`

**修复方案**:

```python
# blueprints/admin/users.py — reset_password 路由
import secrets
import string

def _generate_temp_password(length: int = 12) -> str:
    alphabet = string.ascii_letters + string.digits
    return ''.join(secrets.choice(alphabet) for _ in range(length))


# 在 reset_password 视图中：
temp_password = _generate_temp_password()
target_user.set_password(temp_password)

# 通过邮件下发临时密码
from email_utils import send_password_reset_notification
send_password_reset_notification(target_user.email, temp_password)
```

---

### P1-6. 密码重置路由添加速率限制

**问题**: `forgot_password_reset` POST 无限流，可暴力尝试
**位置**: `blueprints/auth.py:132-183`

**修复方案**:

```python
# blueprints/auth.py
@auth_bp.route('/forgot_password_reset', methods=['GET', 'POST'])
@rate_limit('password_reset', 5, 300, '重置密码操作过于频繁，请 5 分钟后再试')
def forgot_password_reset():
    # ... 现有逻辑不变 ...
```

---

### P1-7. SocketIO CORS 限制为自身域名

**问题**: `cors_allowed_origins='*'` 允许任意域发起 WebSocket 连接
**位置**: `app.py:40`

**修复方案**:

```python
# app.py
cors_origins = os.environ.get('CORS_ORIGINS', 'http://localhost:5000').split(',')
socketio.init_app(app, async_mode='eventlet', cors_allowed_origins=cors_origins)
```

```env
# .env
CORS_ORIGINS=https://yourdomain.com,https://www.yourdomain.com
```

---

### P1-8. `/api/update_location` 添加 CSRF 验证

**问题**: POST 端点无 CSRF token 验证
**位置**: `app.py:241`

**修复方案**: 将此路由移入 `user_bp` Blueprint，自动继承其 CSRF `before_request` 钩子，或在路由内显式校验。

---

### P1-9. 后台任务异常日志级别提升

**问题**: 后台过期检查的异常用 `logger.debug` 记录，生产环境不可见
**位置**: `app.py:303-304`

**修复方案**:

```python
except Exception:
    logger.error("过期预约检查异常", exc_info=True)
```

---

### P1-10. 审计日志 `log_action` 失败级别提升 + 解耦事务

**问题**: 日志失败用 `DEBUG` 级别记录；`log_action` 内含 `db.session.commit()` 与业务事务隐式耦合
**位置**: `utils/logging.py:81-83`

**修复方案**:

```python
# utils/logging.py — 修改异常处理
except Exception:
    import logging as _log
    _log.getLogger(__name__).warning("log_action failed", exc_info=True)
```

长期方案：`log_action` 改为使用独立的 `db.session` 或异步队列写入。

---

## 四、P2 — 中优先级改进（两周内）

### P2-1. `BorrowRecord.status` 改用 Enum

**问题**: 状态值散布在 8+ 个文件中作为字符串字面量，拼写错误无法在编译期发现
**位置**: `models.py:189`

**修复方案**:

```python
# models.py
import enum

class BorrowStatus(enum.Enum):
    PENDING = 'pending'
    PICKED_UP = 'picked_up'
    RETURNED = 'returned'
    REJECTED = 'rejected'
    EXPIRED = 'expired'


class BorrowRecord(db.Model):
    # ...
    status = db.Column(db.String(20), default=BorrowStatus.PENDING.value)
```

全项目替换 `'pending'` → `BorrowStatus.PENDING.value`。

---

### P2-2. 提取 PasswordMixin 消除 User/Admin 重复代码

**位置**: `models.py:1-84`

**修复方案**:

```python
# models.py
class PasswordMixin:
    password_hash = db.Column(db.String(255), nullable=False)

    def set_password(self, password: str) -> None:
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        return check_password_hash(self.password_hash, password)


class User(PasswordMixin, UserMixin, db.Model):
    # ... 移除 password_hash、set_password、check_password ...

class Admin(PasswordMixin, UserMixin, db.Model):
    # ... 移除 password_hash、set_password、check_password ...
```

---

### P2-3. 线程安全 — `ip_location.py` 加锁

**问题**: `_location_cache` 和 `_pending_lookups` 在后台线程和主线程之间无锁读写
**位置**: `utils/ip_location.py:15-16`

**修复方案**:

```python
# utils/ip_location.py
import threading

_cache_lock = threading.Lock()
_location_cache: dict[str, str] = {}
_pending_lookups: set[str] = set()


def get_ip_location_cached(ip: str) -> str | None:
    with _cache_lock:
        return _location_cache.get(ip)


def schedule_ip_lookup(ip: str) -> None:
    with _cache_lock:
        if ip in _location_cache or ip in _pending_lookups:
            return
        _pending_lookups.add(ip)
    # ... 启动后台线程查询 ...
```

---

### P2-4. 邮箱格式验证

**问题**: 注册时不验证邮箱格式，任意字符串可注册
**位置**: `blueprints/auth.py:283-299`

**修复方案**:

```python
# blueprints/auth.py — register 视图中
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')

if not EMAIL_REGEX.match(email):
    return jsonify({'success': False, 'message': '邮箱格式不正确'}), 400
```

---

### P2-5. 验证码：先存库再发邮件

**问题**: 先发邮件后存库，邮件发出但存库失败时用户无法验证
**位置**: `email_utils.py:124-129`

**修复方案**:

```python
def send_code_to_email(email: str) -> tuple[bool, str]:
    code = generate_code()
    if not store_verification_code(email, code):
        return False, '验证码存储失败，请稍后重试'
    if send_verification_email(email, code):
        return True, '验证码已发送，请查收邮件'
    # 发送失败时清理已存的验证码
    delete_verification_code(email)
    return False, '验证码发送失败，请稍后重试'
```

---

### P2-6. 头像上传事务回滚时清理文件

**问题**: 数据库回滚后新上传的文件残留在磁盘
**位置**: `blueprints/user/profile.py:160-166`

**修复方案**:

```python
file.save(os.path.join(avatar_dir, new_filename))

with db_transaction('头像更新失败') as tx:
    current_user.avatar = new_filename
if tx.error:
    # 清理孤立文件
    try:
        os.remove(os.path.join(avatar_dir, new_filename))
    except OSError:
        pass
    return jsonify({'success': False, 'message': tx.error})
```

---

### P2-7. GET 端点添加 Nginx 层限流

**问题**: rate_limit 装饰器仅对 POST 生效，GET 端点可被无限轮询
**位置**: `utils/rate_limit.py:45`

**修复方案 A** — 修改装饰器支持 GET：
```python
def rate_limit(scope, limit, window_seconds, message, methods=None):
    # methods=None 表示所有方法, methods=['POST'] 表示仅 POST
    def decorator(view):
        @wraps(view)
        def wrapper(*args, **kwargs):
            check_methods = methods or [request.method]
            if request.method in check_methods and is_rate_limited(scope, limit, window_seconds):
                # ...
```

**修复方案 B** — Nginx 层限流（推荐）：
```nginx
# nginx.conf — http 块中
limit_req_zone $binary_remote_addr zone=general:10m rate=30r/s;
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;

# server 块中
location / {
    limit_req zone=general burst=50 nodelay;
    # ...
}
location /api/ {
    limit_req zone=api burst=20 nodelay;
    # ...
}
```

---

### P2-8. `get_logs` 接口 limit 参数加上界

**位置**: `blueprints/admin/__init__.py:231`

**修复方案**:

```python
limit = min(request.args.get('limit', 50, type=int), 500)
```

---

### P2-9. 废弃 API 替换 — `Query.get()` → `db.session.get()`

**位置**: `socketio_emitters.py:51`

```python
# 替换前
book = Book.query.get(book_id)
# 替换后
book = db.session.get(Book, book_id)
```

全项目搜索 `.query.get(` 统一替换。

---

### P2-10. FULLTEXT 搜索过滤 Boolean 操作符

**位置**: `blueprints/user_helpers.py:53-55`

**修复方案**:

```python
import re

def _sanitize_fulltext_query(q: str) -> str:
    """移除 MySQL FULLTEXT BOOLEAN MODE 操作符"""
    return re.sub(r'[+\-><()~*"@]', ' ', q).strip()
```

---

### P2-11. 后台任务 emit/缓存失败添加日志

**位置**: `utils/reservations.py:55-60, 79-87`

**修复方案**: 将所有 `except Exception: pass` 替换为：

```python
except Exception:
    logger.warning("SocketIO emit 失败", exc_info=True)
```

---

## 五、P3 — 架构级优化（长期）

### P3-1. 引入 Service 层

**问题**: Fat Controller — 业务逻辑直接嵌入视图函数
**预期收益**: 可测试性、可复用性、职责分离

```
services/
├── borrow_service.py    # 借阅、归还、预约业务逻辑
├── book_service.py      # 图书 CRUD、搜索、库存管理
├── user_service.py      # 用户注册、认证、封禁
├── email_service.py     # 邮件发送（异步队列）
└── notification_service.py  # SocketIO 事件推送
```

**视图函数职责简化为**:
```python
@user_bp.route('/book/borrow/<int:book_id>', methods=['POST'])
@login_required
def borrow_book(book_id):
    result = borrow_service.create_borrow(current_user.id, book_id, request.json)
    return jsonify(result.to_dict()), result.status_code
```

---

### P3-2. 模板目录迁移

**问题**: `template_folder='static/html'` 违反 Flask 约定，Nginx 可能暴露模板
**修复**: 将 `static/html/` 迁移为 `templates/`

---

### P3-3. 根目录文件归入包结构

```
# 迁移方案
email_utils.py          → services/email/sender.py
email_templates.py      → services/email/templates.py
socketio_emitters.py    → realtime/emitters.py
socketio_events.py      → realtime/events.py
```

---

### P3-4. 配置类分环境

```python
# config.py
class BaseConfig:
    # 公共配置

class DevelopmentConfig(BaseConfig):
    DEBUG = True
    SESSION_COOKIE_SECURE = False

class ProductionConfig(BaseConfig):
    DEBUG = False
    SESSION_COOKIE_SECURE = True

class TestingConfig(BaseConfig):
    TESTING = True
    SQLALCHEMY_DATABASE_URI = 'sqlite:///:memory:'
```

---

### P3-5. 数据库迁移工具

**问题**: `ensure_runtime_schema` 使用裸 SQL DDL 管理迁移
**修复**: 引入 Flask-Migrate (Alembic)

```bash
pip install flask-migrate
flask db init
flask db migrate -m "initial"
flask db upgrade
```

---

### P3-6. 邮件发送异步化

**问题**: `threading.Thread` 在 eventlet 环境下可能有微妙问题
**修复**: 使用 eventlet.spawn 或引入 Celery + Redis

```python
# 短期修复
eventlet.spawn(send_verification_email, email, code)

# 长期方案
celery_app.send_task('email.send_verification', args=[email, code])
```

---

### P3-7. 业务常量集中管理

```python
# constants.py — 集中所有业务配置
MAX_BORROW_DAYS = 12
MAX_ACTIVE_BORROWS = 2
SESSION_EXPIRE_MINUTES = 5
HEARTBEAT_THROTTLE_SECONDS = 30
EMAIL_CODE_LIMIT = 10
EMAIL_CODE_EXPIRE_MINUTES = 5
RESERVATION_EXPIRE_HOURS = 48
MIN_PASSWORD_LENGTH = 8
```

---

## 六、前端优化方案

### FE-1. 内联脚本迁移（P1）

**问题**: `base.html` 中 ~190 行内联 `<script>`，阻碍 CSP nonce 模式
**修复**: 迁移到 `static/js/base-init.js`

### FE-2. admin.html 拆分（P1）

**问题**: 单文件 117KB，超出可维护性上限
**修复**: 拆分为 Jinja2 partials：
```
static/html/admin/
├── _online_users.html
├── _book_management.html
├── _borrow_records.html
└── _user_management.html
```

### FE-3. borrow-modal.js 状态封装（P1）

**修复**: 将全局 `let` 状态封装进 IIFE

```javascript
const BorrowModal = (() => {
    let currentBookId = null;
    let currentCalendarType = null;
    // ... 私有状态 ...

    return { open, close, selectDate };
})();
```

### FE-4. 消除代码重复（P2）

| 位置 | 问题 | 修复 |
|------|------|------|
| `books.js` | `handleStockPush` 与 `pollStock` 重复 | 提取 `applyStockInfo(card, info)` |
| `admin-users.js` | `openBanModal` 与 `openChangeEmailModal` 雷同 | 提取 `createAdminModal(config)` |
| `profile.js` | 重复实现倒计时 | 复用 `base.js` 的 `startCountdown` |
| `borrow-modal.js` | 手写 fetch 代替 `postJson` | 统一使用 `postJson` |

### FE-5. 无障碍改进（P2）

- `_borrow_modal.html` 添加 `role="dialog"` `aria-modal="true"` `aria-labelledby`
- admin Tab 切换添加 `aria-live="polite"` 区域
- 图标按钮添加 `aria-label`

### FE-6. CSS 变量统一（P2）

将硬编码品牌色 `#EC4899` 替换为 `var(--color-brand-primary)`

### FE-7. `var` 统一为 ES6+（P3）

`admin-online.js`、`books.js:handleStockPush` 中的 `var` 统一为 `const`/`let`

---

## 七、部署与运维优化

### D-1. 依赖锁定（P1）

```bash
pip install pip-tools
pip-compile requirements.in --output-file requirements.txt --generate-hashes
```

### D-2. SMTP 配置外部化（P2）

```python
# email_utils.py
_SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.qq.com')
_SMTP_PORT = int(os.environ.get('SMTP_PORT', 587))
```

### D-3. 集中日志收集（P3）

推荐 Loki + Promtail 或 ELK Stack，容器日志统一采集。

### D-4. 健康检查增强（P3）

```python
# blueprints/health.py — 增加 Redis 健康检查
@health_bp.route('/health')
def health():
    checks = {'db': False, 'redis': False}
    try:
        db.session.execute(text('SELECT 1'))
        checks['db'] = True
    except Exception:
        pass
    try:
        from utils.cache import get_redis
        r = get_redis()
        if r and r.ping():
            checks['redis'] = True
    except Exception:
        pass
    ok = all(checks.values())
    return jsonify({'status': 'ok' if ok else 'degraded', 'checks': checks}), 200 if ok else 503
```

---

## 八、测试体系建设

**当前覆盖率**: 0%
**目标覆盖率**: 80%

### 阶段一：核心业务单元测试（2 周）

```
tests/
├── conftest.py              # Flask 测试 fixtures
├── test_auth.py             # 登录、注册、密码重置
├── test_borrow_service.py   # 借阅、归还、预约过期
├── test_book_service.py     # 图书 CRUD、搜索
├── test_rate_limit.py       # 限流（含 Redis 降级）
├── test_csrf.py             # CSRF 保护
└── test_sessions.py         # 会话管理、踢出、超时
```

### 阶段二：集成测试（1 周）

```
tests/
├── test_api_auth.py         # 认证 API 端到端
├── test_api_admin.py        # 管理员操作
├── test_api_borrow.py       # 借阅流程完整链路
└── test_socketio.py         # SocketIO 事件推送
```

### 阶段三：自动化（持续）

```yaml
# .github/workflows/test.yml
- run: pytest --cov=. --cov-report=term-missing --cov-fail-under=80
```

---

## 九、预期收益

### 完成 P0 后（1-2 天）

| 维度 | 当前 → 预期 |
|------|-------------|
| 安全性 | 74 → 84 |
| 错误处理 | 62 → 70 |
| **总分** | **73.4 → 79** |

### 完成 P0 + P1 后（1 周）

| 维度 | 当前 → 预期 |
|------|-------------|
| Python 质量 | 78 → 85 |
| 安全性 | 74 → 90 |
| 错误处理 | 62 → 80 |
| **总分** | **73.4 → 85** |

### 完成全部 P0-P2 后（2-3 周）

| 维度 | 当前 → 预期 |
|------|-------------|
| Python 质量 | 78 → 90 |
| 安全性 | 74 → 92 |
| 架构设计 | 73 → 82 |
| 前端质量 | 79 → 88 |
| 错误处理 | 62 → 85 |
| **总分** | **73.4 → 88** |

### 完成 P3 架构级优化后（1-2 月）

| 维度 | 预期 |
|------|------|
| **总分** | **90+** |

---

## 附录：修改文件清单

| 优先级 | 文件 | 变更类型 |
|--------|------|----------|
| P0 | `config.py` | 添加 Session Cookie 安全配置 |
| P0 | `docker/nginx/nginx.conf` | HTTPS + HSTS |
| P0 | `app.py:77-85` | load_user 异常处理 |
| P0 | `app.py:32, utils/logging.py:17` | 日志目录迁移 |
| P0 | `app.py:267-275` | CSP 头 |
| P0 | `app.py:312-314` | debug 环境变量 |
| P1 | `utils/rate_limit.py` | Redis 降级回退 |
| P1 | `utils/decorators.py:30-44` | db_transaction 日志 |
| P1 | `app.py:259-265` | 删除 teardown 钩子 |
| P1 | `utils/book_utils.py` | Magic Bytes 验证 |
| P1 | `blueprints/admin/users.py:115` | 随机临时密码 |
| P1 | `blueprints/auth.py:132` | 密码重置限流 |
| P1 | `app.py:40` | SocketIO CORS |
| P1 | `app.py:241` | update_location CSRF |
| P1 | `app.py:303-304` | 后台任务日志级别 |
| P1 | `utils/logging.py:81-83` | log_action 日志级别 |
| P2 | `models.py:189` | BorrowStatus Enum |
| P2 | `models.py:1-84` | PasswordMixin |
| P2 | `utils/ip_location.py` | 线程锁 |
| P2 | `blueprints/auth.py:283` | 邮箱格式验证 |
| P2 | `email_utils.py:124` | 先存库再发邮件 |
| P2 | `blueprints/user/profile.py:160` | 头像回滚清理 |
| P2 | `socketio_emitters.py:51` | 废弃 API 替换 |
| P2 | `blueprints/user_helpers.py:53` | FULLTEXT 过滤 |
| P2 | `utils/reservations.py:55-87` | emit 失败日志 |
| P2 | `blueprints/admin/__init__.py:231` | limit 上界 |

---

> **文档生成**: 2026-05-22 | **代理团队**: Python-Reviewer + Security-Reviewer + Architect + Code-Reviewer + Silent-Failure-Hunter
