"""
数据模型模块
定义所有数据库表的ORM模型，包括用户、管理员、图书、借阅记录、登录历史
"""
from datetime import datetime

from extensions import db, cst_now
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash  # 密码哈希和验证

STUDENT_ID_LENGTH = 13

# ==================== 普通用户模型 ====================
class User(UserMixin, db.Model):
    """
    普通用户模型
    继承UserMixin提供Flask-Login所需的方法（is_authenticated, is_active等）
    """
    __tablename__ = 'users'  # 指定数据库表名
    __table_args__ = (
        db.CheckConstraint(
            f"student_id IS NULL OR student_id REGEXP '^[0-9]{{{STUDENT_ID_LENGTH}}}$'",
            name='student_id_digits'
        ),
    )

    # 主键：用户ID，自增
    id = db.Column(db.Integer, primary_key=True)

    # 用户名：最长80字符，唯一，不能为空
    username = db.Column(db.String(80), unique=True, nullable=False)

    # 密码哈希值：最长255字符，不能为空（不存储明文密码）
    password_hash = db.Column(db.String(255), nullable=False)

    # 邮箱：最长120字符，唯一，不能为空
    email = db.Column(db.String(120), unique=True, nullable=False)

    # 学号：13位数字，唯一，可为空（兼容旧数据）
    student_id = db.Column(db.String(STUDENT_ID_LENGTH), unique=True, nullable=True)

    # 封禁截止时间：为 NULL 或早于当前时间表示未被封禁
    # 管理员封禁时按"分钟"为单位计算 banned_until = cst_now + timedelta(minutes=N)
    banned_until = db.Column(db.DateTime, nullable=True, index=True)

    @property
    def is_banned(self):
        """当前是否处于封禁中（与数据库中的 naive datetime 对齐比较）"""
        if not self.banned_until:
            return False
        return self.banned_until > cst_now().replace(tzinfo=None)

    @property
    def ban_remaining_seconds(self):
        """剩余封禁秒数（未封禁返回 0）"""
        if not self.is_banned:
            return 0
        delta = self.banned_until - cst_now().replace(tzinfo=None)
        return max(int(delta.total_seconds()), 0)

    def ban_for_minutes(self, minutes):
        """封禁指定分钟数，返回新的截止时间（naive，与库内一致）"""
        from datetime import timedelta
        minutes = max(int(minutes), 0)
        self.banned_until = (cst_now() + timedelta(minutes=minutes)).replace(tzinfo=None)
        return self.banned_until

    def unban(self):
        """立即解除封禁"""
        self.banned_until = None

    def set_password(self, password):
        """
        设置用户密码（加密存储）
        Args:
            password: 明文密码
        """
        # 使用werkzeug的generate_password_hash生成密码哈希
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """
        验证用户密码
        Args:
            password: 待验证的明文密码
        Returns:
            bool: 密码是否正确
        """
        # 使用werkzeug的check_password_hash验证密码
        return check_password_hash(self.password_hash, password)

    @property
    def is_admin(self):
        """
        判断是否为管理员
        Returns:
            bool: 普通用户始终返回False
        """
        return False

# ==================== 管理员模型（独立表） ====================
class Admin(UserMixin, db.Model):
    """
    管理员模型
    与普通用户分离存储，便于权限管理和安全控制
    """
    __tablename__ = 'admins'  # 指定数据库表名

    # 主键：管理员ID，自增
    id = db.Column(db.Integer, primary_key=True)

    # 用户名：最长80字符，唯一，不能为空
    username = db.Column(db.String(80), unique=True, nullable=False)

    # 密码哈希值：最长255字符，不能为空
    password_hash = db.Column(db.String(255), nullable=False)

    # 邮箱：最长120字符，唯一，不能为空
    email = db.Column(db.String(120), unique=True, nullable=False)

    # 最后登录时间：可为空，用于追踪管理员活动
    last_login = db.Column(db.DateTime)

    def set_password(self, password):
        """
        设置管理员密码（加密存储）
        Args:
            password: 明文密码
        """
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """
        验证管理员密码
        Args:
            password: 待验证的明文密码
        Returns:
            bool: 密码是否正确
        """
        return check_password_hash(self.password_hash, password)

    @property
    def is_admin(self):
        """
        判断是否为管理员
        Returns:
            bool: 管理员始终返回True
        """
        return True

# ==================== 登录历史模型 ====================
class LoginHistory(db.Model):
    """
    登录历史记录模型
    记录用户/管理员的登录、在线状态、登出信息，用于审计和在线用户追踪
    """
    __tablename__ = 'login_history'  # 指定数据库表名

    # 主键：记录ID，自增
    id = db.Column(db.Integer, primary_key=True)

    # 用户ID：关联users或admins表的id，添加索引加速查询
    user_id = db.Column(db.Integer, nullable=False, index=True)

    # 用户名快照：记录登录时的用户名（即使用户名后续修改，历史记录不变）
    username_snapshot = db.Column(db.String(80), nullable=False, index=True)

    # 用户类型：'user'或'admin'，用于区分普通用户和管理员
    user_type = db.Column(db.String(20), nullable=False, index=True)

    # IP地址：最长45字符（支持IPv6），记录登录来源
    ip_address = db.Column(db.String(45))

    # 登录时间：默认为当前北京时间，添加索引便于按时间查询
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)

    # 最后活跃时间：记录用户最后一次请求的时间，用于判断在线状态
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)

    # 登出时间：可为空，用户主动登出或超时时设置
    logout_time = db.Column(db.DateTime)

    # 是否在线：布尔值，默认True，添加索引便于查询在线用户
    is_online = db.Column(db.Boolean, default=True, nullable=False, index=True)

    # 操作类型：记录具体操作（登录、登出、预约图书、归还图书等）
    action = db.Column(db.String(50), index=True)

    # 操作详情：记录操作的详细信息
    details = db.Column(db.String(500))

# ==================== 在线会话模型 ====================
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

# ==================== 图书模型 ====================
class Book(db.Model):
    """
    图书模型
    存储图书的基本信息和库存状态
    """
    __tablename__ = 'books'  # 指定数据库表名

    # 主键：图书ID，自增
    id = db.Column(db.Integer, primary_key=True)

    # 书名：最长200字符，不能为空，添加索引支持搜索
    title = db.Column(db.String(200), nullable=False, index=True)

    # 作者：最长100字符，不能为空，添加索引支持搜索
    author = db.Column(db.String(100), nullable=False, index=True)

    # ISBN号：最长20字符，唯一，添加索引（国际标准书号）
    isbn = db.Column(db.String(20), unique=True, index=True)

    # 出版社：最长100字符，可为空
    publisher = db.Column(db.String(100))

    # 书籍位置：最长100字符，可为空
    location = db.Column(db.String(100))

    # 分类：最长50字符，添加索引支持按分类筛选
    category = db.Column(db.String(50), index=True)

    # 当前库存：默认0，表示可借阅的数量
    stock = db.Column(db.Integer, default=0)

    # 总库存：默认0，表示图书的总数量（包括已借出的）
    total = db.Column(db.Integer, default=0)

    # 借阅总次数：默认0，累计该图书被借出的总次数（每次成功领取 +1）
    borrow_count = db.Column(db.Integer, default=0, nullable=False, index=True)

    # 图书封面图片路径：最长255字符，存储相对路径
    image = db.Column(db.String(255))

    @property
    def available(self):
        """
        判断图书是否可借阅
        Returns:
            bool: 库存大于0时返回True
        """
        return self.stock > 0

    def restore_stock(self, amount=1):
        """归还/拒绝时回补库存，自动夹紧到 total 上限。"""
        new_stock = (self.stock or 0) + amount
        if self.total is not None and new_stock > self.total:
            new_stock = self.total
        self.stock = max(new_stock, 0)

    def increment_borrow_count(self, amount=1):
        """累加借阅总次数。"""
        self.borrow_count = (self.borrow_count or 0) + amount

# ==================== 借阅记录模型 ====================
class BorrowRecord(db.Model):
    """
    借阅记录模型
    记录用户的借阅流程：预约 → 领取 → 归还
    """
    __tablename__ = 'borrow_records'  # 指定数据库表名

    # 主键：记录ID，自增
    id = db.Column(db.Integer, primary_key=True)

    # 用户ID：外键关联users表，不能为空，添加索引
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)

    # 图书ID：外键关联books表，不能为空，添加索引
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False, index=True)

    # 预约日期：默认为当前北京时间，记录用户发起预约的时间
    borrow_date = db.Column(db.DateTime, default=cst_now, index=True)

    # 预定归还日期：可为空，用户预约时可以设置计划归还的日期
    return_date = db.Column(db.DateTime)

    # 领取图书时间：可为空，管理员同意后设置（状态变为picked_up时）
    pickup_date = db.Column(db.DateTime)

    # 拒绝领取时间：可为空，管理员拒绝或自动拒绝时设置
    reject_date = db.Column(db.DateTime)

    # 借阅状态：默认'pending'，添加索引便于按状态查询
    # pending = 待领取（用户已预约，等待管理员同意）
    # picked_up = 已领取（管理员已同意，用户已拿到书）
    # returned = 已归还（用户已还书，流程结束）
    # rejected = 已拒绝（管理员手动拒绝）
    # expired = 已逾期（超时自动拒绝）
    status = db.Column(db.String(20), default='pending', index=True)

    # 关系映射：通过user_id关联User模型，backref在User模型中创建borrow_records属性
    user = db.relationship('User', backref='borrow_records')

    # 关系映射：通过book_id关联Book模型，backref在Book模型中创建borrow_records属性
    book = db.relationship('Book', backref='borrow_records')


class VerificationCode(db.Model):
    """邮箱验证码，替代内存字典，支持多进程部署"""
    __tablename__ = 'verification_codes'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False, unique=True, index=True)
    code = db.Column(db.String(10), nullable=False)
    expires_at = db.Column(db.DateTime, nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=datetime.now)
