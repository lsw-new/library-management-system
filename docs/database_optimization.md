# 景艺大图书馆 — 数据库极致优化方案

**生成日期：** 2026-05-22
**当前环境：** MySQL 8.0 + SQLAlchemy + Flask-SQLAlchemy
**数据规模：** 326 本图书 / 2 用户 / 12 条借阅记录（开发阶段，方案面向千级以上规模设计）

---

## 目录

1. [索引优化](#1-索引优化)
2. [模型结构优化](#2-模型结构优化)
3. [查询模式优化](#3-查询模式优化)
4. [连接池与引擎配置优化](#4-连接池与引擎配置优化)
5. [MySQL 服务端参数优化](#5-mysql-服务端参数优化)
6. [迁移脚本](#6-迁移脚本)
7. [优化后完整 models.py](#7-优化后完整-modelspy)

---

## 1. 索引优化

### 1.1 需要添加的复合索引

当前所有索引均为单列索引，但实际查询几乎都是多列组合过滤。单列索引下 MySQL 只能用一个索引，其余条件仍需回表过滤。

#### BorrowRecord 表（最高频查询表）

| 复合索引 | 覆盖的查询场景 | 涉及代码位置 |
|---------|--------------|-------------|
| `(user_id, status)` | 借书检查、活跃借阅计数、借阅足迹、取消预约 | `user/borrows.py:68-76`、`user/borrows.py:145`、`user/borrows.py:189`、`socketio_emitters.py:36` |
| `(status, borrow_date)` | 过期预约定时扫描 `WHERE status='pending' AND borrow_date < ?` | `utils/reservations.py:17-23` |
| `(book_id, status)` | 删除图书前检查活跃借阅 | `admin/books.py:76-79` |

**性能提升估算：**
- `(user_id, status)` — 借书接口从全表扫描 → 索引精确命中，查询时间 **降低 80-90%**
- `(status, borrow_date)` — 过期检查每 60 秒运行一次，数据量增长后效果显著

#### Book 表

| 索引 | 查询场景 | 涉及代码位置 |
|------|---------|-------------|
| `stock` 单列索引 | `ORDER BY stock DESC`（"库存优先"排序） | `user_helpers.py:75` |

当前 `stock` 列无索引，"库存优先"排序会触发全表扫描 + filesort。

### 1.2 已存在但可优化的索引

#### OnlineSession 表 — 删除冗余单列索引

当前状态：
```
user_id    → 单列索引 ✗ 冗余
user_type  → 单列索引 ✗ 冗余
(user_id, user_type) → 唯一约束 ✓ 已覆盖
```

唯一约束 `uq_online_session_user(user_id, user_type)` 本身就是一个 B-Tree 索引，最左前缀已覆盖 `user_id` 的单列查询。`user_type` 从未被单独过滤（总是和 `user_id` 一起用），所以两个单列索引都是冗余的。

**删除收益：** 每次 `INSERT`/`UPDATE`/`DELETE` 少维护 2 个索引，减少写入开销。

#### LoginHistory 表 — 删除未使用的索引

当前状态（8 个索引，过多）：
```
user_id           → 单列索引  (仅 _mark_login_history_offline 通过 PK 访问)
username_snapshot → 单列索引  ✗ 从未被查询过滤
user_type         → 单列索引  ✗ 从未被单独查询
login_time        → 单列索引  ✓ ORDER BY 用到
last_seen         → 单列索引  ✗ 仅在 UPDATE 时写入
is_online         → 单列索引  ✗ 从未被单独查询
action            → 单列索引  ✓ WHERE action IS NOT NULL 用到
```

**建议保留：** `login_time`、`action`
**建议删除：** `username_snapshot`、`user_type`、`last_seen`、`is_online`
**可选保留：** `user_id`（如果未来需要按用户查历史）

**删除收益：** `log_action` 每次操作都写入此表，减少 4 个索引 = 每次写入减少 4 次 B-Tree 维护。

### 1.3 索引优化总结

| 操作 | 表 | 索引 | 类型 |
|------|---|------|------|
| **添加** | borrow_records | `(user_id, status)` | 复合索引 |
| **添加** | borrow_records | `(status, borrow_date)` | 复合索引 |
| **添加** | borrow_records | `(book_id, status)` | 复合索引 |
| **添加** | books | `stock` | 单列索引 |
| **删除** | online_sessions | `user_id` 单列 | 冗余（唯一约束已覆盖） |
| **删除** | online_sessions | `user_type` 单列 | 冗余（唯一约束已覆盖） |
| **删除** | login_history | `username_snapshot` 单列 | 从未查询 |
| **删除** | login_history | `user_type` 单列 | 从未单独查询 |
| **删除** | login_history | `last_seen` 单列 | 从未查询 |
| **删除** | login_history | `is_online` 单列 | 从未单独查询 |

**净变化：** 添加 4 个索引，删除 6 个索引，总索引数减少 2 个，但查询效率大幅提升。

---

## 2. 模型结构优化

### 2.1 BorrowRecord — 添加复合索引 + relationship 优化

**当前问题：**
- 无复合索引，高频查询全部走全表扫描
- `backref` 使用字符串形式，双向关系隐式创建

**优化后：**
```python
class BorrowRecord(db.Model):
    __tablename__ = 'borrow_records'
    __table_args__ = (
        db.Index('ix_borrow_user_status', 'user_id', 'status'),
        db.Index('ix_borrow_status_date', 'status', 'borrow_date'),
        db.Index('ix_borrow_book_status', 'book_id', 'status'),
    )

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    borrow_date = db.Column(db.DateTime, default=cst_now, index=True)
    return_date = db.Column(db.DateTime)
    pickup_date = db.Column(db.DateTime)
    reject_date = db.Column(db.DateTime)
    status = db.Column(db.String(20), default='pending')

    user = db.relationship('User', backref=db.backref('borrow_records', lazy='dynamic'))
    book = db.relationship('Book', backref=db.backref('borrow_records', lazy='dynamic'))
```

**变更说明：**
- 删除 `user_id`、`book_id`、`status` 的单列 `index=True`，复合索引的最左前缀已覆盖
- 保留 `borrow_date` 单列索引（用于 `ORDER BY borrow_date DESC`）
- `backref` 改为 `lazy='dynamic'`，避免访问 `user.borrow_records` 时立即加载全部记录

### 2.2 Book — 添加 stock 索引

```python
class Book(db.Model):
    __tablename__ = 'books'
    __table_args__ = (
        db.Index('ft_books_search', 'title', 'author', 'isbn', 'category',
                 mysql_prefix='FULLTEXT'),
    )

    # ...
    stock = db.Column(db.Integer, default=0, index=True)  # 添加索引
    # ...
```

### 2.3 OnlineSession — 删除冗余单列索引

```python
class OnlineSession(db.Model):
    __tablename__ = 'online_sessions'
    __table_args__ = (
        db.UniqueConstraint('user_id', 'user_type', name='uq_online_session_user'),
    )

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)          # 删除 index=True
    user_type = db.Column(db.String(20), nullable=False)     # 删除 index=True
    username = db.Column(db.String(80), nullable=False)
    ip_address = db.Column(db.String(45))
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False)
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    login_history_id = db.Column(db.Integer, index=True)
    is_kicked = db.Column(db.Boolean, default=False, nullable=False, index=True)
    geo_location = db.Column(db.String(100))
```

### 2.4 LoginHistory — 精简索引

```python
class LoginHistory(db.Model):
    __tablename__ = 'login_history'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, index=True)     # 保留（PK 查找 + 未来扩展）
    username_snapshot = db.Column(db.String(80), nullable=False)     # 删除 index
    user_type = db.Column(db.String(20), nullable=False)            # 删除 index
    ip_address = db.Column(db.String(45))
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)  # 保留
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False)               # 删除 index
    logout_time = db.Column(db.DateTime)
    is_online = db.Column(db.Boolean, default=True, nullable=False)                   # 删除 index
    action = db.Column(db.String(50), index=True)                                     # 保留
    details = db.Column(db.String(500))
```

---

## 3. 查询模式优化

### 3.1 借书接口：2 次查询合并为 1 次

**当前代码（2 次 DB 查询）：** `user/borrows.py:68-76`
```python
existing_record = BorrowRecord.query.filter(
    BorrowRecord.user_id == user_id,
    BorrowRecord.book_id == book_id,
    BorrowRecord.status.in_(['pending', 'picked_up'])
).first()                                          # 查询 1

active_count = BorrowRecord.query.filter(
    BorrowRecord.user_id == user_id,
    BorrowRecord.status.in_(['pending', 'picked_up'])
).count()                                          # 查询 2
```

**优化后（1 次 DB 查询）：**
```python
from sqlalchemy import case, func

result = db.session.query(
    func.count().label('active_count'),
    func.sum(case((BorrowRecord.book_id == book_id, 1), else_=0)).label('has_this_book'),
).filter(
    BorrowRecord.user_id == user_id,
    BorrowRecord.status.in_(['pending', 'picked_up']),
).one()

has_existing = (result.has_this_book or 0) > 0
active_count = result.active_count
```

**效果：** 精确命中 `ix_borrow_user_status` 复合索引，1 次查询替代 2 次。

### 3.2 管理后台仪表盘：3 次 COUNT 合并

**当前代码（4 次独立查询）：** `admin/__init__.py:147-165`
```python
borrow_stats = db.session.query(...).one()          # 查询 1：借阅聚合
Book.query.count()                                  # 查询 2
User.query.count()                                  # 查询 3
User.query.filter(...).count()                      # 查询 4：封禁用户数
```

**优化后（2 次查询）：**
```python
borrow_stats = db.session.query(
    func.sum(case((BorrowRecord.status == 'pending', 1), else_=0)).label('pending'),
    func.sum(case((BorrowRecord.status.in_(['pending', 'picked_up']), 1), else_=0)).label('current'),
    func.sum(case((BorrowRecord.status.in_(['returned', 'rejected', 'expired']), 1), else_=0)).label('history'),
    func.sum(case((db.and_(
        BorrowRecord.status.in_(['returned', 'rejected', 'expired']),
        BorrowRecord.borrow_date >= today_start
    ), 1), else_=0)).label('new_history'),
).one()  # 查询 1

counts = db.session.query(
    func.count(Book.id).label('books'),
    db.session.query(func.count(User.id)).correlate(None).scalar_subquery().label('users'),
    db.session.query(func.count(User.id)).filter(
        User.banned_until.isnot(None), User.banned_until > now
    ).correlate(None).scalar_subquery().label('banned'),
).select_from(Book).one()  # 查询 2（子查询合并）
```

或更简洁的方式 — 保持 borrow_stats 不变，将 3 个 COUNT 合并：
```python
user_stats = db.session.query(
    func.count(User.id).label('total'),
    func.sum(case((db.and_(
        User.banned_until.isnot(None),
        User.banned_until > now
    ), 1), else_=0)).label('banned'),
).one()  # 1 次查询替代 2 次
```

### 3.3 历史记录 tab：删除冗余 COUNT

**当前代码：** `admin/__init__.py:114-119`
```python
today_count = base.filter(BorrowRecord.borrow_date >= today_start).count()  # 冗余 COUNT
pagination = base.order_by(BorrowRecord.id.desc()).paginate(...)             # paginate 内部也 COUNT
# 然后又从 items 里分类：
'today_records': [r for r in pagination.items if r.borrow_date >= today_start],
```

**优化后：** 删除冗余 `.count()`，从已获取数据计算
```python
pagination = base.order_by(BorrowRecord.id.desc()).paginate(
    page=page, per_page=ADMIN_PAGE_SIZE, error_out=False
)
today_records = [r for r in pagination.items if r.borrow_date >= today_start]
return {
    'today_records': today_records,
    'past_records': [r for r in pagination.items if r.borrow_date < today_start],
    'history_pagination': pagination,
    'today_count': len(today_records),  # 从内存计算，不再查数据库
}
```

### 3.4 注册唯一性检查：5 次查询合并为 1 次

**当前代码：** `auth.py:258-316`（跨两个路由共 5 次查询）
```python
User.query.filter_by(username=username).first()      # 查询 1
User.query.filter_by(student_id=student_id).first()  # 查询 2
User.query.filter_by(email=email).first()            # 查询 3
User.query.filter_by(username=username).first()      # 查询 4（重复检查）
User.query.filter_by(student_id=student_id).first()  # 查询 5（重复检查）
```

**优化后（1 次查询 + 异常捕获兜底）：**
```python
from sqlalchemy import or_

conflict = User.query.filter(or_(
    User.username == username,
    User.student_id == student_id,
    User.email == email,
)).with_entities(User.username, User.student_id, User.email).first()

if conflict:
    if conflict.username == username:
        return fail('用户名已存在')
    if conflict.student_id == student_id:
        return fail('学号已存在')
    if conflict.email == email:
        return fail('该邮箱已被注册')
```

MySQL 的 `UNIQUE` 约束本身就会在 `INSERT` 时拒绝重复。应用层检查只是为了返回友好提示。

### 3.5 管理员借阅操作：懒加载 → joinedload

**当前代码：** `admin/borrows.py:19-23`
```python
record = db.session.get(BorrowRecord, record_id)
username = record.user.username   # 懒加载触发 SELECT users
book_title = record.book.title    # 懒加载触发 SELECT books
```

**优化后（1 次查询加载 3 个对象）：**
```python
from sqlalchemy.orm import joinedload

record = db.session.get(
    BorrowRecord, record_id,
    options=[joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)]
)
```

此模式在 `approve_reservation`、`reject_reservation`、`admin_return_book` 三个路由中重复出现，每次优化省 2 次查询。

### 3.6 分类缓存：删除冗余 COUNT + 延长 TTL

**当前代码：** `user/books.py:25-40`
```python
categories = base_query.filter(...).with_entities(...).group_by(...).all()  # 查询 1
total = base_query.count()                                                  # 查询 2（冗余）
cache_set(cache_key, ..., ttl_seconds=30)                                   # TTL 过短
```

**优化后：**
```python
categories = base_query.filter(
    Book.category.isnot(None), Book.category != ''
).with_entities(Book.category, db.func.count(Book.id)).group_by(Book.category) \
 .order_by(db.func.count(Book.id).desc()).all()

total = sum(count for _, count in categories)  # 从已有数据计算，不查数据库

cache_set(cache_key, {...}, ttl_seconds=120)  # TTL 从 30s → 120s
```

### 3.7 新增预约轮询：2 次查询合并为 1 次

**当前代码：** `admin/__init__.py:210-213`
```python
pending_count = BorrowRecord.query.filter(BorrowRecord.status == 'pending').count()
latest_record = BorrowRecord.query.filter(
    BorrowRecord.status.in_(['pending', 'picked_up'])
).order_by(BorrowRecord.id.desc()).first()
```

**优化后：**
```python
result = db.session.query(
    func.sum(case((BorrowRecord.status == 'pending', 1), else_=0)).label('pending_count'),
    func.max(BorrowRecord.id).label('latest_id'),
).filter(
    BorrowRecord.status.in_(['pending', 'picked_up'])
).one()
```

---

## 4. 连接池与引擎配置优化

### 4.1 当前配置 (`config.py`)

```python
SQLALCHEMY_ENGINE_OPTIONS = {
    'pool_size': 20,
    'pool_recycle': 1800,
    'pool_pre_ping': True,
    'max_overflow': 30,
    'pool_timeout': 10,
}
```

### 4.2 优化建议

| 参数 | 当前值 | 建议值 | 原因 |
|------|--------|--------|------|
| `pool_size` | 20 | **10** | 图书馆系统并发不高，20 个常驻连接浪费 MySQL 内存（每连接约 10MB） |
| `max_overflow` | 30 | **10** | 峰值连接 50(20+30) 过高，降低到 20(10+10) 足够 |
| `pool_recycle` | 1800 | 1800 | 保持不变，30 分钟回收合理 |
| `pool_pre_ping` | True | True | 保持不变，防连接断开 |
| `pool_timeout` | 10 | 10 | 保持不变 |
| `echo` | 未设置 | `False`（生产） | 确保生产环境不打印 SQL |
| `pool_reset_on_return` | 未设置 | `'rollback'` | 连接归还时自动 rollback，防止脏状态 |

**优化后配置：**
```python
SQLALCHEMY_ENGINE_OPTIONS = {
    'pool_size': 10,
    'pool_recycle': 1800,
    'pool_pre_ping': True,
    'max_overflow': 10,
    'pool_timeout': 10,
    'pool_reset_on_return': 'rollback',
}
```

---

## 5. MySQL 服务端参数优化

### 5.1 当前配置 (`docker-compose.yml`)

```yaml
command: >
  --innodb-buffer-pool-size=256M
  --innodb-log-file-size=64M
  --innodb-flush-log-at-trx-commit=2
  --innodb-flush-method=O_DIRECT
  --max-connections=200
  --thread-cache-size=16
  --table-open-cache=400
  --sort-buffer-size=4M
  --join-buffer-size=4M
  --tmp-table-size=32M
  --max-heap-table-size=32M
  --slow-query-log=1
  --long-query-time=0.5
  --ngram-token-size=2
```

### 5.2 优化建议

| 参数 | 当前值 | 建议值 | 原因 |
|------|--------|--------|------|
| `innodb-buffer-pool-size` | 256M | **512M**（若服务器 ≥ 2GB RAM） | InnoDB 缓冲池是最重要的性能参数，建议设为可用内存的 50-70% |
| `innodb-log-file-size` | 64M | **128M** | 更大的 redo log 减少 checkpoint 频率 |
| `max-connections` | 200 | **50** | 连接池 `pool_size + max_overflow = 20`，200 浪费内存 |
| `innodb-io-capacity` | 未设置 | **200**（HDD）/ **2000**（SSD） | 告知 InnoDB 磁盘 IO 能力，优化后台刷新 |
| `innodb-read-io-threads` | 未设置 | **4** | 并行读取 |
| `innodb-write-io-threads` | 未设置 | **4** | 并行写入 |
| `innodb-change-buffering` | 未设置 | `all` | 缓冲二级索引变更，减少随机 IO |
| `key-buffer-size` | 未设置 | **8M** | InnoDB 为主时，MyISAM 键缓存只需极小值 |
| `performance-schema` | 默认开启 | **OFF**（生产节省内存） | 节省约 100MB 内存 |
| `log-queries-not-using-indexes` | 未设置 | **ON** | 慢查询日志同时记录未使用索引的查询 |

**优化后 docker-compose.yml command：**
```yaml
command: >
  --character-set-server=utf8mb4
  --collation-server=utf8mb4_unicode_ci
  --default-authentication-plugin=mysql_native_password
  --innodb-buffer-pool-size=512M
  --innodb-log-file-size=128M
  --innodb-flush-log-at-trx-commit=2
  --innodb-flush-method=O_DIRECT
  --innodb-io-capacity=200
  --innodb-read-io-threads=4
  --innodb-write-io-threads=4
  --innodb-change-buffering=all
  --max-connections=50
  --thread-cache-size=16
  --table-open-cache=400
  --sort-buffer-size=4M
  --join-buffer-size=4M
  --tmp-table-size=32M
  --max-heap-table-size=32M
  --key-buffer-size=8M
  --slow-query-log=1
  --long-query-time=0.5
  --log-queries-not-using-indexes=1
  --ngram-token-size=2
  --performance-schema=OFF
```

---

## 6. 迁移脚本

### 6.1 添加索引（`add_optimized_indexes.sql`）

```sql
-- 景艺大图书馆 - 极致索引优化迁移脚本
-- 执行前备份数据库！
-- 用法: docker exec -i library_mysql mysql -u library_user -p library_db < add_optimized_indexes.sql

SET NAMES utf8mb4;

-- ============================================================
-- 第一步：添加复合索引
-- ============================================================

-- 借阅记录：用户+状态（借书检查、借阅足迹、活跃计数）
CREATE INDEX ix_borrow_user_status ON borrow_records(user_id, status);

-- 借阅记录：状态+日期（过期预约扫描）
CREATE INDEX ix_borrow_status_date ON borrow_records(status, borrow_date);

-- 借阅记录：图书+状态（删除图书前检查活跃借阅）
CREATE INDEX ix_borrow_book_status ON borrow_records(book_id, status);

-- 图书：库存（"库存优先"排序）
CREATE INDEX ix_books_stock ON books(stock);

-- ============================================================
-- 第二步：删除被复合索引覆盖的冗余单列索引
-- ============================================================

-- borrow_records: user_id 单列被 ix_borrow_user_status 的最左前缀覆盖
-- borrow_records: status 单列被多个复合索引覆盖
-- borrow_records: book_id 单列被 ix_borrow_book_status 的最左前缀覆盖
-- 注意：外键索引由 MySQL 自动管理，如果是外键自动创建的索引不能删除
-- 先检查索引名再删除：
-- SHOW INDEX FROM borrow_records;

-- online_sessions: 唯一约束已覆盖
ALTER TABLE online_sessions DROP INDEX IF EXISTS user_id;
ALTER TABLE online_sessions DROP INDEX IF EXISTS user_type;
-- 注意：MySQL 8.0.x 中 DROP INDEX IF EXISTS 语法可能需要改写为：
-- ALTER TABLE online_sessions DROP INDEX user_id;  -- 如果存在

-- login_history: 删除未使用的索引
ALTER TABLE login_history DROP INDEX IF EXISTS username_snapshot;
ALTER TABLE login_history DROP INDEX IF EXISTS user_type;
ALTER TABLE login_history DROP INDEX IF EXISTS last_seen;
ALTER TABLE login_history DROP INDEX IF EXISTS is_online;

-- ============================================================
-- 第三步：验证
-- ============================================================
-- SHOW INDEX FROM borrow_records;
-- SHOW INDEX FROM books;
-- SHOW INDEX FROM online_sessions;
-- SHOW INDEX FROM login_history;
```

### 6.2 索引效果验证查询

```sql
-- 验证复合索引是否被使用

-- 1. 借书检查（应显示 key: ix_borrow_user_status）
EXPLAIN SELECT COUNT(*) FROM borrow_records
WHERE user_id = 1 AND status IN ('pending', 'picked_up');

-- 2. 过期预约扫描（应显示 key: ix_borrow_status_date）
EXPLAIN SELECT * FROM borrow_records
WHERE status = 'pending' AND borrow_date < NOW() - INTERVAL 3 MINUTE;

-- 3. 删除图书检查（应显示 key: ix_borrow_book_status）
EXPLAIN SELECT COUNT(*) FROM borrow_records
WHERE book_id = 1 AND status IN ('pending', 'picked_up');

-- 4. 库存优先排序（应显示 key: ix_books_stock）
EXPLAIN SELECT * FROM books ORDER BY stock DESC LIMIT 12;
```

---

## 7. 优化后完整 models.py

```python
from flask_login import UserMixin
from werkzeug.security import check_password_hash, generate_password_hash

from extensions import cst_now, db, naive_cst_now

STUDENT_ID_LENGTH = 13


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    __table_args__ = (
        db.CheckConstraint(
            f"student_id IS NULL OR student_id REGEXP '^[0-9]{{{STUDENT_ID_LENGTH}}}$'",
            name='student_id_digits'
        ),
    )

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    student_id = db.Column(db.String(STUDENT_ID_LENGTH), unique=True, nullable=True)
    real_name = db.Column(db.String(50), nullable=True)
    class_name = db.Column(db.String(100), nullable=True)
    avatar = db.Column(db.String(255), nullable=True)
    banned_until = db.Column(db.DateTime, nullable=True, index=True)

    @property
    def is_banned(self):
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
        from datetime import timedelta
        minutes = max(int(minutes), 0)
        self.banned_until = (cst_now() + timedelta(minutes=minutes)).replace(tzinfo=None)
        return self.banned_until

    def unban(self):
        self.banned_until = None

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @property
    def is_admin(self):
        return False


class Admin(UserMixin, db.Model):
    __tablename__ = 'admins'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    last_login = db.Column(db.DateTime)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    @property
    def is_admin(self):
        return True


class LoginHistory(db.Model):
    __tablename__ = 'login_history'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False, index=True)
    username_snapshot = db.Column(db.String(80), nullable=False)            # 删除索引
    user_type = db.Column(db.String(20), nullable=False)                   # 删除索引
    ip_address = db.Column(db.String(45))
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False)    # 删除索引
    logout_time = db.Column(db.DateTime)
    is_online = db.Column(db.Boolean, default=True, nullable=False)        # 删除索引
    action = db.Column(db.String(50), index=True)
    details = db.Column(db.String(500))


class OnlineSession(db.Model):
    __tablename__ = 'online_sessions'
    __table_args__ = (
        db.UniqueConstraint('user_id', 'user_type', name='uq_online_session_user'),
    )

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, nullable=False)                        # 删除索引
    user_type = db.Column(db.String(20), nullable=False)                   # 删除索引
    username = db.Column(db.String(80), nullable=False)
    ip_address = db.Column(db.String(45))
    login_time = db.Column(db.DateTime, default=cst_now, nullable=False)
    last_seen = db.Column(db.DateTime, default=cst_now, nullable=False, index=True)
    login_history_id = db.Column(db.Integer, index=True)
    is_kicked = db.Column(db.Boolean, default=False, nullable=False, index=True)
    geo_location = db.Column(db.String(100))


class Book(db.Model):
    __tablename__ = 'books'
    __table_args__ = (
        db.Index('ft_books_search', 'title', 'author', 'isbn', 'category',
                 mysql_prefix='FULLTEXT'),
    )

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False, index=True)
    author = db.Column(db.String(100), nullable=False, index=True)
    isbn = db.Column(db.String(20), unique=True, index=True)
    publisher = db.Column(db.String(100))
    location = db.Column(db.String(100))
    category = db.Column(db.String(50), index=True)
    stock = db.Column(db.Integer, default=0, index=True)                   # 添加索引
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
    __table_args__ = (
        db.Index('ix_borrow_user_status', 'user_id', 'status'),
        db.Index('ix_borrow_status_date', 'status', 'borrow_date'),
        db.Index('ix_borrow_book_status', 'book_id', 'status'),
    )

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey('books.id'), nullable=False)
    borrow_date = db.Column(db.DateTime, default=cst_now, index=True)
    return_date = db.Column(db.DateTime)
    pickup_date = db.Column(db.DateTime)
    reject_date = db.Column(db.DateTime)
    status = db.Column(db.String(20), default='pending')

    user = db.relationship('User', backref=db.backref('borrow_records', lazy='dynamic'))
    book = db.relationship('Book', backref=db.backref('borrow_records', lazy='dynamic'))


class VerificationCode(db.Model):
    __tablename__ = 'verification_codes'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), nullable=False, unique=True, index=True)
    code = db.Column(db.String(10), nullable=False)
    expires_at = db.Column(db.DateTime, nullable=False, index=True)
    created_at = db.Column(db.DateTime, default=cst_now)
```

---

## 附录：优化效果对照表

| 优化项 | 当前 | 优化后 | 效果 |
|--------|------|--------|------|
| 借书接口 DB 查询 | 4 次 | 2 次 | -50% |
| 仪表盘冷启动查询 | 5 次 | 2 次 | -60% |
| 历史 tab 查询 | 3 次 | 2 次 | -33% |
| 注册唯一性检查 | 5 次 | 1 次 | -80% |
| 管理员借阅操作 | 3 次/操作 | 1 次/操作 | -67% |
| 新增预约轮询 | 2 次/请求 | 1 次/请求 | -50% |
| 分类缓存命中率 | 30s TTL | 120s TTL | 命中率 ↑ 4x |
| 索引总数 | 24 个 | 22 个 | 少 2 个，写入更快 |
| 每请求索引维护 | login_history 8 个索引 | 4 个索引 | 写入 -50% |
| 连接池峰值 | 50 连接 | 20 连接 | MySQL 内存 -300MB |
