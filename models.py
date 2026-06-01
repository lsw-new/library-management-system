import enum

from extensions import db, cst_now, naive_cst_now
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

STUDENT_ID_LENGTH = 13


class BorrowStatus(enum.Enum):
    PENDING = 'pending'
    PICKED_UP = 'picked_up'
    RETURNED = 'returned'
    REJECTED = 'rejected'
    EXPIRED = 'expired'


class PasswordMixin:
    password_hash = db.Column(db.String(255), nullable=False)

    def set_password(self, password: str) -> None:
        self.password_hash = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        return check_password_hash(self.password_hash, password)


class User(PasswordMixin, UserMixin, db.Model):
    __tablename__ = 'users'
    __table_args__ = (
        db.CheckConstraint(
            f"student_id IS NULL OR student_id REGEXP '^[0-9]{{{STUDENT_ID_LENGTH}}}$'",
            name='student_id_digits'
        ),
    )

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    student_id = db.Column(db.String(STUDENT_ID_LENGTH), unique=True, nullable=True)
    real_name = db.Column(db.String(50), nullable=True)
    class_name = db.Column(db.String(100), nullable=True)
    avatar = db.Column(db.String(255), nullable=True)

    # 封禁截止时间：为 NULL 或早于当前时间表示未被封禁
    # 管理员封禁时按"分钟"为单位计算 banned_until = cst_now + timedelta(minutes=N)
    banned_until = db.Column(db.DateTime, nullable=True, index=True)

    @property
    def is_banned(self):
        """当前是否处于封禁中（与数据库中的 naive datetime 对齐比较）"""
        if not self.banned_until:
            return False
        return self.banned_until > naive_cst_now()

    @property
    def ban_remaining_seconds(self):
        if not self.is_banned:
            return 0
        delta = self.banned_until - naive_cst_now()
        return max(int(delta.total_seconds()), 0)

    def ban_for_minutes(self, minutes):
        """封禁指定分钟数，返回新的截止时间（naive，与库内一致）"""
        from datetime import timedelta
        minutes = max(int(minutes), 0)
        self.banned_until = (cst_now() + timedelta(minutes=minutes)).replace(tzinfo=None)
        return self.banned_until

    def unban(self):
        self.banned_until = None

    @property
    def is_admin(self):
        return False


class Admin(PasswordMixin, UserMixin, db.Model):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    last_login = db.Column(db.DateTime)

    @property
    def is_admin(self):
        return True


class LoginHistory(db.Model):
    __tablename__ = 'login_history'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, index=True)
    username_snapshot = db.Column(db.String(80), nullable=False, index=True)
    user_type = db.Column(db.String(20), nullable=False, index=True)
    ip_address = db.Column(db.String(45))
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    logout_time = db.Column(db.DateTime)
    is_online = db.Column(db.Boolean, default=True, nullable=False, index=True)
    action = db.Column(db.String(50), index=True)
    details = db.Column(db.String(500))


class OnlineSession(db.Model):
    """
    实时在线会话模型
    每个账号至多一行（user_id + user_type 唯一），用于：
    - 列出当前活跃用户
    - 单点登录（新登录覆盖旧登录的 login_history_id）
    - 管理员强制踢出（is_kicked 标记）
    """
    __tablename__ = 'online_sessions'
    __table_args__ = (
        db.UniqueConstraint('user_id', 'user_type', name='uq_online_session_user'),
    )

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, index=True)
    user_type = db.Column(db.String(20), nullable=False, index=True)
    username = db.Column(db.String(80), nullable=False)
    ip_address = db.Column(db.String(45))
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False)
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    # 当前活跃 LoginHistory 的 id（旧设备 session 中的 login_history_id 与之比对）
    login_history_id = db.Column(db.Integer, index=True)
    # 管理员踢出标记：被踢用户下次请求时由 before_request 强制登出
    is_kicked = db.Column(db.Boolean, default=False, nullable=False, index=True)
    geo_location = db.Column(db.String(100))


class Book(db.Model):
    __tablename__ = 'books'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False, index=True)
    author = db.Column(db.String(100), nullable=False, index=True)
    isbn = db.Column(db.String(20), unique=True, index=True)
    publisher = db.Column(db.String(100))
    location = db.Column(db.String(100))
    category = db.Column(db.String(50), index=True)
    stock = db.Column(db.Integer, default=0)
    total = db.Column(db.Integer, default=0)
    borrow_count = db.Column(db.Integer, default=0, nullable=False, index=True)
    image = db.Column(db.String(255))

    @property
    def available(self):
        return self.stock > 0

    def restore_stock(self, amount=1):
        increment = max(int(amount), 0)
        new_stock = db.case(
            (Book.stock + increment > Book.total, Book.total),
            else_=Book.stock + increment,
        )
        return Book.query.filter(
            Book.id == self.id,
            Book.stock < Book.total,
        ).update({Book.stock: new_stock}, synchronize_session=False)

    def increment_borrow_count(self, amount=1):
        return Book.query.filter(Book.id == self.id).update(
            {Book.borrow_count: Book.borrow_count + max(int(amount), 0)},
            synchronize_session=False,
        )


class BorrowRecord(db.Model):
    __tablename__ = 'borrow_records'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False, index=True)
    borrow_date = db.Column(db.DateTime, default=cst_now, index=True)
    return_date = db.Column(db.DateTime)
    pickup_date = db.Column(db.DateTime)
    reject_date = db.Column(db.DateTime)

    # pending = 待领取（用户已预约，等待管理员同意）
    # picked_up = 已领取（管理员已同意，用户已拿到书）
    # returned = 已归还（用户已还书，流程结束）
    # rejected = 已拒绝（管理员手动拒绝）
    # expired = 已逾期（超时自动拒绝）
    status = db.Column(db.String(20), default=BorrowStatus.PENDING.value, index=True)

    user = db.relationship('User', backref='borrow_records')
    book = db.relationship('Book', backref='borrow_records')


class VerificationCode(db.Model):
    """邮箱验证码，替代内存字典，支持多进程部署"""
    __tablename__ = 'verification_codes'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False, unique=True, index=True)
    code = db.Column(db.String(10), nullable=False)
    expires_at = db.Column(db.DateTime, nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=cst_now)
