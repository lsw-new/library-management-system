# models.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>import enum</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 2 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 3 | <code>from extensions import db, cst_now, naive_cst_now</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 4 | <code>from flask_login import UserMixin</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 5 | <code>from werkzeug.security import generate_password_hash, check_password_hash</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 6 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 7 | <code>STUDENT_ID_LENGTH = 13</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 8 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 9 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 10 | <code>class BorrowStatus(enum.Enum):</code> | 声明 `BorrowStatus` 类，用于封装一组相关的数据结构或业务行为。 |
| 11 | <code>    PENDING = &#x27;pending&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 12 | <code>    PICKED_UP = &#x27;picked_up&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 13 | <code>    RETURNED = &#x27;returned&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 14 | <code>    REJECTED = &#x27;rejected&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 15 | <code>    EXPIRED = &#x27;expired&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 16 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 17 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 18 | <code>class PasswordMixin:</code> | 声明 `PasswordMixin` 类，用于封装一组相关的数据结构或业务行为。 |
| 19 | <code>    password_hash = db.Column(db.String(255), nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 20 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 21 | <code>    def set_password(self, password: str) -&gt; None:</code> | 定义 `set_password` 函数，承载当前模块中的一段可复用处理流程。 |
| 22 | <code>        self.password_hash = generate_password_hash(password)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 23 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 24 | <code>    def check_password(self, password: str) -&gt; bool:</code> | 定义 `check_password` 函数，承载当前模块中的一段可复用处理流程。 |
| 25 | <code>        return check_password_hash(self.password_hash, password)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 26 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 27 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 28 | <code>class User(PasswordMixin, UserMixin, db.Model):</code> | 声明 `User` 类，用于封装一组相关的数据结构或业务行为。 |
| 29 | <code>    __tablename__ = &#x27;users&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 30 | <code>    __table_args__ = (</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 31 | <code>        db.CheckConstraint(</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 32 | <code>            f&quot;student_id IS NULL OR student_id REGEXP &#x27;^[0-9]{{{STUDENT_ID_LENGTH}}}$&#x27;&quot;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 33 | <code>            name=&#x27;student_id_digits&#x27;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 34 | <code>        ),</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 35 | <code>    )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 36 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 37 | <code>    id = db.Column(db.Integer, primary_key=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 38 | <code>    username = db.Column(db.String(80), unique=True, nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 39 | <code>    email = db.Column(db.String(120), unique=True, nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 40 | <code>    student_id = db.Column(db.String(STUDENT_ID_LENGTH), unique=True, nullable=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 41 | <code>    real_name = db.Column(db.String(50), nullable=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 42 | <code>    class_name = db.Column(db.String(100), nullable=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 43 | <code>    avatar = db.Column(db.String(255), nullable=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 44 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 45 | <code>    # 封禁截止时间：为 NULL 或早于当前时间表示未被封禁</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 46 | <code>    # 管理员封禁时按&quot;分钟&quot;为单位计算 banned_until = cst_now + timedelta(minutes=N)</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 47 | <code>    banned_until = db.Column(db.DateTime, nullable=True, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 48 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 49 | <code>    @property</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 50 | <code>    def is_banned(self):</code> | 定义 `is_banned` 函数，承载当前模块中的一段可复用处理流程。 |
| 51 | <code>        &quot;&quot;&quot;当前是否处于封禁中（与数据库中的 naive datetime 对齐比较）&quot;&quot;&quot;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 52 | <code>        if not self.banned_until:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 53 | <code>            return False</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 54 | <code>        return self.banned_until &gt; naive_cst_now()</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 55 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 56 | <code>    @property</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 57 | <code>    def ban_remaining_seconds(self):</code> | 定义 `ban_remaining_seconds` 函数，承载当前模块中的一段可复用处理流程。 |
| 58 | <code>        if not self.is_banned:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 59 | <code>            return 0</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 60 | <code>        delta = self.banned_until - naive_cst_now()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 61 | <code>        return max(int(delta.total_seconds()), 0)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 62 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 63 | <code>    def ban_for_minutes(self, minutes):</code> | 定义 `ban_for_minutes` 函数，承载当前模块中的一段可复用处理流程。 |
| 64 | <code>        &quot;&quot;&quot;封禁指定分钟数，返回新的截止时间（naive，与库内一致）&quot;&quot;&quot;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 65 | <code>        from datetime import timedelta</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 66 | <code>        minutes = max(int(minutes), 0)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 67 | <code>        self.banned_until = (cst_now() + timedelta(minutes=minutes)).replace(tzinfo=None)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 68 | <code>        return self.banned_until</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 69 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 70 | <code>    def unban(self):</code> | 定义 `unban` 函数，承载当前模块中的一段可复用处理流程。 |
| 71 | <code>        self.banned_until = None</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 72 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 73 | <code>    @property</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 74 | <code>    def is_admin(self):</code> | 定义 `is_admin` 函数，承载当前模块中的一段可复用处理流程。 |
| 75 | <code>        return False</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 76 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 77 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 78 | <code>class Admin(PasswordMixin, UserMixin, db.Model):</code> | 声明 `Admin` 类，用于封装一组相关的数据结构或业务行为。 |
| 79 | <code>    __tablename__ = &#x27;admins&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 80 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 81 | <code>    id = db.Column(db.Integer, primary_key=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 82 | <code>    username = db.Column(db.String(80), unique=True, nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 83 | <code>    email = db.Column(db.String(120), unique=True, nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 84 | <code>    last_login = db.Column(db.DateTime)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 85 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 86 | <code>    @property</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 87 | <code>    def is_admin(self):</code> | 定义 `is_admin` 函数，承载当前模块中的一段可复用处理流程。 |
| 88 | <code>        return True</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 89 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 90 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 91 | <code>class LoginHistory(db.Model):</code> | 声明 `LoginHistory` 类，用于封装一组相关的数据结构或业务行为。 |
| 92 | <code>    __tablename__ = &#x27;login_history&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 93 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 94 | <code>    id = db.Column(db.Integer, primary_key=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 95 | <code>    user_id = db.Column(db.Integer, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 96 | <code>    username_snapshot = db.Column(db.String(80), nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 97 | <code>    user_type = db.Column(db.String(20), nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 98 | <code>    ip_address = db.Column(db.String(45))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 99 | <code>    login_time = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 100 | <code>    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 101 | <code>    logout_time = db.Column(db.DateTime)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 102 | <code>    is_online = db.Column(db.Boolean, default=True, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 103 | <code>    action = db.Column(db.String(50), index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 104 | <code>    details = db.Column(db.String(500))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 105 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 106 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 107 | <code>class OnlineSession(db.Model):</code> | 声明 `OnlineSession` 类，用于封装一组相关的数据结构或业务行为。 |
| 108 | <code>    &quot;&quot;&quot;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 109 | <code>    实时在线会话模型</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 110 | <code>    每个账号至多一行（user_id + user_type 唯一），用于：</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 111 | <code>    - 列出当前活跃用户</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 112 | <code>    - 单点登录（新登录覆盖旧登录的 login_history_id）</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 113 | <code>    - 管理员强制踢出（is_kicked 标记）</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 114 | <code>    &quot;&quot;&quot;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 115 | <code>    __tablename__ = &#x27;online_sessions&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 116 | <code>    __table_args__ = (</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 117 | <code>        db.UniqueConstraint(&#x27;user_id&#x27;, &#x27;user_type&#x27;, name=&#x27;uq_online_session_user&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 118 | <code>    )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 119 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 120 | <code>    id = db.Column(db.Integer, primary_key=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 121 | <code>    user_id = db.Column(db.Integer, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 122 | <code>    user_type = db.Column(db.String(20), nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 123 | <code>    username = db.Column(db.String(80), nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 124 | <code>    ip_address = db.Column(db.String(45))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 125 | <code>    login_time = db.Column(db.DateTime, default=cst_now, nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 126 | <code>    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 127 | <code>    # 当前活跃 LoginHistory 的 id（旧设备 session 中的 login_history_id 与之比对）</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 128 | <code>    login_history_id = db.Column(db.Integer, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 129 | <code>    # 管理员踢出标记：被踢用户下次请求时由 before_request 强制登出</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 130 | <code>    is_kicked = db.Column(db.Boolean, default=False, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 131 | <code>    geo_location = db.Column(db.String(100))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 132 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 133 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 134 | <code>class Book(db.Model):</code> | 声明 `Book` 类，用于封装一组相关的数据结构或业务行为。 |
| 135 | <code>    __tablename__ = &#x27;books&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 136 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 137 | <code>    id = db.Column(db.Integer, primary_key=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 138 | <code>    title = db.Column(db.String(200), nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 139 | <code>    author = db.Column(db.String(100), nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 140 | <code>    isbn = db.Column(db.String(20), unique=True, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 141 | <code>    publisher = db.Column(db.String(100))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 142 | <code>    location = db.Column(db.String(100))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 143 | <code>    category = db.Column(db.String(50), index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 144 | <code>    stock = db.Column(db.Integer, default=0)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 145 | <code>    total = db.Column(db.Integer, default=0)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 146 | <code>    borrow_count = db.Column(db.Integer, default=0, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 147 | <code>    image = db.Column(db.String(255))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 148 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 149 | <code>    @property</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 150 | <code>    def available(self):</code> | 定义 `available` 函数，承载当前模块中的一段可复用处理流程。 |
| 151 | <code>        return self.stock &gt; 0</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 152 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 153 | <code>    def restore_stock(self, amount=1):</code> | 定义 `restore_stock` 函数，承载当前模块中的一段可复用处理流程。 |
| 154 | <code>        increment = max(int(amount), 0)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 155 | <code>        new_stock = db.case(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 156 | <code>            (Book.stock + increment &gt; Book.total, Book.total),</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 157 | <code>            else_=Book.stock + increment,</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 158 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 159 | <code>        return Book.query.filter(</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 160 | <code>            Book.id == self.id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 161 | <code>            Book.stock &lt; Book.total,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 162 | <code>        ).update({Book.stock: new_stock}, synchronize_session=False)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 163 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 164 | <code>    def increment_borrow_count(self, amount=1):</code> | 定义 `increment_borrow_count` 函数，承载当前模块中的一段可复用处理流程。 |
| 165 | <code>        return Book.query.filter(Book.id == self.id).update(</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 166 | <code>            {Book.borrow_count: Book.borrow_count + max(int(amount), 0)},</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 167 | <code>            synchronize_session=False,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 168 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 169 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 170 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 171 | <code>class BorrowRecord(db.Model):</code> | 声明 `BorrowRecord` 类，用于封装一组相关的数据结构或业务行为。 |
| 172 | <code>    __tablename__ = &#x27;borrow_records&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 173 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 174 | <code>    id = db.Column(db.Integer, primary_key=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 175 | <code>    user_id = db.Column(db.Integer, db.ForeignKey(&#x27;users.id&#x27;), nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 176 | <code>    book_id = db.Column(db.Integer, db.ForeignKey(&#x27;books.id&#x27;), nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 177 | <code>    borrow_date = db.Column(db.DateTime, default=cst_now, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 178 | <code>    return_date = db.Column(db.DateTime)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 179 | <code>    pickup_date = db.Column(db.DateTime)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 180 | <code>    reject_date = db.Column(db.DateTime)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 181 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 182 | <code>    # pending = 待领取（用户已预约，等待管理员同意）</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 183 | <code>    # picked_up = 已领取（管理员已同意，用户已拿到书）</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 184 | <code>    # returned = 已归还（用户已还书，流程结束）</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 185 | <code>    # rejected = 已拒绝（管理员手动拒绝）</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 186 | <code>    # expired = 已逾期（超时自动拒绝）</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 187 | <code>    status = db.Column(db.String(20), default=BorrowStatus.PENDING.value, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 188 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 189 | <code>    user = db.relationship(&#x27;User&#x27;, backref=&#x27;borrow_records&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 190 | <code>    book = db.relationship(&#x27;Book&#x27;, backref=&#x27;borrow_records&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 191 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 192 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 193 | <code>class VerificationCode(db.Model):</code> | 声明 `VerificationCode` 类，用于封装一组相关的数据结构或业务行为。 |
| 194 | <code>    &quot;&quot;&quot;邮箱验证码，替代内存字典，支持多进程部署&quot;&quot;&quot;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 195 | <code>    __tablename__ = &#x27;verification_codes&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 196 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 197 | <code>    id = db.Column(db.Integer, primary_key=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 198 | <code>    email = db.Column(db.String(120), nullable=False, unique=True, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 199 | <code>    code = db.Column(db.String(10), nullable=False)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 200 | <code>    expires_at = db.Column(db.DateTime, nullable=False, index=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 201 | <code>    created_at = db.Column(db.DateTime, default=cst_now)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
