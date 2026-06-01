# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import enum
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db, cst_now, naive_cst_now
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import UserMixin
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from werkzeug.security import generate_password_hash, check_password_hash
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
STUDENT_ID_LENGTH = 13
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `BorrowStatus` 类，用于封装相关数据结构、模型能力或业务行为。
class BorrowStatus(enum.Enum):
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    PENDING = 'pending'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    PICKED_UP = 'picked_up'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    RETURNED = 'returned'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    REJECTED = 'rejected'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    EXPIRED = 'expired'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `PasswordMixin` 类，用于封装相关数据结构、模型能力或业务行为。
class PasswordMixin:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    password_hash = db.Column(db.String(255), nullable=False)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `set_password` 函数，封装一段可复用的后端处理流程。
    def set_password(self, password: str) -> None:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        self.password_hash = generate_password_hash(password)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `check_password` 函数，封装一段可复用的后端处理流程。
    def check_password(self, password: str) -> bool:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return check_password_hash(self.password_hash, password)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `User` 类，用于封装相关数据结构、模型能力或业务行为。
class User(PasswordMixin, UserMixin, db.Model):
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __tablename__ = 'users'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __table_args__ = (
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        db.CheckConstraint(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            f"student_id IS NULL OR student_id REGEXP '^[0-9]{{{STUDENT_ID_LENGTH}}}$'",
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            name='student_id_digits'
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        ),
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    id = db.Column(db.Integer, primary_key=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    username = db.Column(db.String(80), unique=True, nullable=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    email = db.Column(db.String(120), unique=True, nullable=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    student_id = db.Column(db.String(STUDENT_ID_LENGTH), unique=True, nullable=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    real_name = db.Column(db.String(50), nullable=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    class_name = db.Column(db.String(100), nullable=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    avatar = db.Column(db.String(255), nullable=True)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 封禁截止时间：为 NULL 或早于当前时间表示未被封禁
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 管理员封禁时按"分钟"为单位计算 banned_until = cst_now + timedelta(minutes=N)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    banned_until = db.Column(db.DateTime, nullable=True, index=True)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @property
    # 逐行注释：定义 `is_banned` 函数，封装一段可复用的后端处理流程。
    def is_banned(self):
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        """当前是否处于封禁中（与数据库中的 naive datetime 对齐比较）"""
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not self.banned_until:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return False
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return self.banned_until > naive_cst_now()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @property
    # 逐行注释：定义 `ban_remaining_seconds` 函数，封装一段可复用的后端处理流程。
    def ban_remaining_seconds(self):
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not self.is_banned:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return 0
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        delta = self.banned_until - naive_cst_now()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return max(int(delta.total_seconds()), 0)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `ban_for_minutes` 函数，封装一段可复用的后端处理流程。
    def ban_for_minutes(self, minutes):
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        """封禁指定分钟数，返回新的截止时间（naive，与库内一致）"""
        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from datetime import timedelta
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        minutes = max(int(minutes), 0)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        self.banned_until = (cst_now() + timedelta(minutes=minutes)).replace(tzinfo=None)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return self.banned_until
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `unban` 函数，封装一段可复用的后端处理流程。
    def unban(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        self.banned_until = None
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @property
    # 逐行注释：定义 `is_admin` 函数，封装一段可复用的后端处理流程。
    def is_admin(self):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `Admin` 类，用于封装相关数据结构、模型能力或业务行为。
class Admin(PasswordMixin, UserMixin, db.Model):
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __tablename__ = 'admins'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    id = db.Column(db.Integer, primary_key=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    username = db.Column(db.String(80), unique=True, nullable=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    email = db.Column(db.String(120), unique=True, nullable=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    last_login = db.Column(db.DateTime)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @property
    # 逐行注释：定义 `is_admin` 函数，封装一段可复用的后端处理流程。
    def is_admin(self):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `LoginHistory` 类，用于封装相关数据结构、模型能力或业务行为。
class LoginHistory(db.Model):
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __tablename__ = 'login_history'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    id = db.Column(db.Integer, primary_key=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_id = db.Column(db.Integer, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    username_snapshot = db.Column(db.String(80), nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_type = db.Column(db.String(20), nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    ip_address = db.Column(db.String(45))
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    logout_time = db.Column(db.DateTime)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    is_online = db.Column(db.Boolean, default=True, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    action = db.Column(db.String(50), index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    details = db.Column(db.String(500))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `OnlineSession` 类，用于封装相关数据结构、模型能力或业务行为。
class OnlineSession(db.Model):
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """
    实时在线会话模型
    每个账号至多一行（user_id + user_type 唯一），用于：
    - 列出当前活跃用户
    - 单点登录（新登录覆盖旧登录的 login_history_id）
    - 管理员强制踢出（is_kicked 标记）
    """
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __tablename__ = 'online_sessions'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __table_args__ = (
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.UniqueConstraint('user_id', 'user_type', name='uq_online_session_user'),
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    id = db.Column(db.Integer, primary_key=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_id = db.Column(db.Integer, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_type = db.Column(db.String(20), nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    username = db.Column(db.String(80), nullable=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    ip_address = db.Column(db.String(45))
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 当前活跃 LoginHistory 的 id（旧设备 session 中的 login_history_id 与之比对）
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_history_id = db.Column(db.Integer, index=True)
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 管理员踢出标记：被踢用户下次请求时由 before_request 强制登出
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    is_kicked = db.Column(db.Boolean, default=False, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    geo_location = db.Column(db.String(100))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `Book` 类，用于封装相关数据结构、模型能力或业务行为。
class Book(db.Model):
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __tablename__ = 'books'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    id = db.Column(db.Integer, primary_key=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    title = db.Column(db.String(200), nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    author = db.Column(db.String(100), nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    isbn = db.Column(db.String(20), unique=True, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    publisher = db.Column(db.String(100))
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    location = db.Column(db.String(100))
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    category = db.Column(db.String(50), index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    stock = db.Column(db.Integer, default=0)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    total = db.Column(db.Integer, default=0)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    borrow_count = db.Column(db.Integer, default=0, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    image = db.Column(db.String(255))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @property
    # 逐行注释：定义 `available` 函数，封装一段可复用的后端处理流程。
    def available(self):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return self.stock > 0
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `restore_stock` 函数，封装一段可复用的后端处理流程。
    def restore_stock(self, amount=1):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        increment = max(int(amount), 0)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_stock = db.case(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            (Book.stock + increment > Book.total, Book.total),
            # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
            else_=Book.stock + increment,
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return Book.query.filter(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            Book.id == self.id,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            Book.stock < Book.total,
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).update({Book.stock: new_stock}, synchronize_session=False)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `increment_borrow_count` 函数，封装一段可复用的后端处理流程。
    def increment_borrow_count(self, amount=1):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return Book.query.filter(Book.id == self.id).update(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            {Book.borrow_count: Book.borrow_count + max(int(amount), 0)},
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            synchronize_session=False,
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `BorrowRecord` 类，用于封装相关数据结构、模型能力或业务行为。
class BorrowRecord(db.Model):
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __tablename__ = 'borrow_records'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    id = db.Column(db.Integer, primary_key=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    borrow_date = db.Column(db.DateTime, default=cst_now, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    return_date = db.Column(db.DateTime)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    pickup_date = db.Column(db.DateTime)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    reject_date = db.Column(db.DateTime)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # pending = 待领取（用户已预约，等待管理员同意）
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # picked_up = 已领取（管理员已同意，用户已拿到书）
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # returned = 已归还（用户已还书，流程结束）
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # rejected = 已拒绝（管理员手动拒绝）
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # expired = 已逾期（超时自动拒绝）
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    status = db.Column(db.String(20), default=BorrowStatus.PENDING.value, index=True)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user = db.relationship('User', backref='borrow_records')
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    book = db.relationship('Book', backref='borrow_records')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `VerificationCode` 类，用于封装相关数据结构、模型能力或业务行为。
class VerificationCode(db.Model):
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """邮箱验证码，替代内存字典，支持多进程部署"""
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    __tablename__ = 'verification_codes'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    id = db.Column(db.Integer, primary_key=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    email = db.Column(db.String(120), nullable=False, unique=True, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    code = db.Column(db.String(10), nullable=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    expires_at = db.Column(db.DateTime, nullable=False, index=True)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    created_at = db.Column(db.DateTime, default=cst_now)
