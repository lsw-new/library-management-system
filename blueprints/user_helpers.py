# 从指定模块导入类、函数或变量，简化后续代码引用。
from collections import Counter
# 从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import datetime
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import re
# 从指定模块导入类、函数或变量，简化后续代码引用。
from typing import Any

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import request

# 从指定模块导入类、函数或变量，简化后续代码引用。
from models import db, Book, BorrowRecord
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils import naive_cst_now, get_csrf_token, validate_csrf_token

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
SEARCH_MAX_LENGTH = 64
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
BOOK_SORT_OPTIONS = {'newest', 'popular', 'available', 'title'}
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DEFAULT_BOOK_SORT = 'newest'
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_FULLTEXT_OPERATOR_RE = re.compile(r'[+\-><()~*"@]')
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
BORROW_STATUS_KEYS = ('pending', 'picked_up', 'returned', 'rejected', 'expired')
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
BORROW_ACTION_CSRF_SESSION_KEY = 'borrow_action_csrf_token'
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
AVATAR_MAX_SIZE = 3 * 1024 * 1024
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
AVATAR_SUBFOLDER = 'avatars'


# 定义 `_sanitize_fulltext_query` 函数，封装一段可复用的后端处理流程。
def _sanitize_fulltext_query(q: str) -> str:
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """Remove MySQL FULLTEXT BOOLEAN MODE operators to prevent query injection."""
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _FULLTEXT_OPERATOR_RE.sub(' ', q).strip()


# 定义 `normalize_book_search` 函数，封装一段可复用的后端处理流程。
def normalize_book_search(raw_search: str) -> str:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sanitized = _sanitize_fulltext_query(raw_search)
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return re.sub(r'\s+', ' ', sanitized).strip()[:SEARCH_MAX_LENGTH]


# 定义 `normalize_sort` 函数，封装一段可复用的后端处理流程。
def normalize_sort(value: str | None) -> str:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return value if value in BOOK_SORT_OPTIONS else DEFAULT_BOOK_SORT


# 定义 `apply_book_search_filters` 函数，封装一段可复用的后端处理流程。
def apply_book_search_filters(query: Any, search: str) -> Any:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not search:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return query

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        (Book.title.contains(search)) |
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        (Book.author.contains(search)) |
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        (Book.category.contains(search)) |
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        (Book.isbn.contains(search))
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )


# 定义 `apply_book_sort` 函数，封装一段可复用的后端处理流程。
def apply_book_sort(query: Any, sort: str) -> Any:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if sort == 'popular':
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return query.order_by(Book.borrow_count.desc(), Book.id.desc())
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if sort == 'available':
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return query.order_by(Book.stock.desc(), Book.id.desc())
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if sort == 'title':
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return query.order_by(Book.title.asc())
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return query.order_by(Book.id.desc())


# 定义 `serialize_borrow_record` 函数，封装一段可复用的后端处理流程。
def serialize_borrow_record(record: BorrowRecord) -> dict[str, object]:
    # 定义 `fmt` 函数，封装一段可复用的后端处理流程。
    def fmt(value: datetime | None, pattern: str = '%Y-%m-%d %H:%M') -> str | None:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return value.strftime(pattern) if value else None

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'id': record.id,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'status': record.status,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'borrow_date': fmt(record.borrow_date),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'return_date': fmt(record.return_date, '%Y-%m-%d'),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'pickup_date': fmt(record.pickup_date),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'reject_date': fmt(record.reject_date),
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    }


# 定义 `build_borrow_stats` 函数，封装一段可复用的后端处理流程。
def build_borrow_stats(records: list[BorrowRecord]) -> dict[str, int]:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    stats = {'total': len(records), **{key: 0 for key in BORROW_STATUS_KEYS}}
    # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for record in records:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if record.status in stats:
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            stats[record.status] += 1
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return stats


# 定义 `build_borrow_insights` 函数，封装一段可复用的后端处理流程。
def build_borrow_insights(records: list[BorrowRecord], stats: dict[str, int]) -> dict[str, object]:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    total = stats['total']
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    completion_rate = round(stats['returned'] / total * 100) if total else 0
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    active_count = stats['pending'] + stats['picked_up']

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    cat_counter: Counter[str] = Counter()
    # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for record in records:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if record.book and record.book.category:
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            cat_counter[record.book.category] += 1
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    top_categories_raw = cat_counter.most_common(3)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    max_cat = top_categories_raw[0][1] if top_categories_raw else 0
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    top_categories = [
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        {
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'name': name,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'count': count,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'pct': round(count / max_cat * 100) if max_cat else 0,
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        }
        # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for name, count in top_categories_raw
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    ]

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    upcoming = []
    # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for record in records:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if record.status != 'picked_up' or not record.return_date:
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            continue
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        days_left = (record.return_date.date() - now.date()).days
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if days_left <= 7:
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            upcoming.append({
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'record': record,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'days_left': days_left,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'overdue': days_left < 0,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            })
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    upcoming.sort(key=lambda item: item['days_left'])
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    upcoming = upcoming[:4]

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if total == 0:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        level = {'name': '新读者', 'desc': '开启你的第一本书', 'tone': 'pink'}
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif stats['expired'] > 0:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        level = {'name': '需关注', 'desc': '请及时归还逾期图书', 'tone': 'orange'}
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif completion_rate >= 80:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        level = {'name': '阅读达人', 'desc': '完成率优秀，继续保持', 'tone': 'emerald'}
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    elif completion_rate >= 50:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        level = {'name': '稳定读者', 'desc': '阅读节奏良好', 'tone': 'blue'}
    # 条件判断的兜底分支，处理前面条件没有命中的场景。
    else:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        level = {'name': '初阶读者', 'desc': '坚持阅读，完成更多', 'tone': 'pink'}

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'now': now,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'completion_rate': completion_rate,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'active_count': active_count,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'top_categories': top_categories,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'upcoming_due': upcoming,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'level': level,
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    }


# 定义 `get_borrow_action_csrf_token` 函数，封装一段可复用的后端处理流程。
def get_borrow_action_csrf_token() -> str:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return get_csrf_token(BORROW_ACTION_CSRF_SESSION_KEY)


# 定义 `validate_borrow_action_csrf` 函数，封装一段可复用的后端处理流程。
def validate_borrow_action_csrf() -> bool:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return validate_csrf_token(BORROW_ACTION_CSRF_SESSION_KEY)
