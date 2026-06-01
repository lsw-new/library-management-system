from collections import Counter
from datetime import datetime
import re
from typing import Any

from flask import request

from models import db, Book, BorrowRecord
from utils import naive_cst_now, get_csrf_token, validate_csrf_token

SEARCH_MAX_LENGTH = 64
BOOK_SORT_OPTIONS = {'newest', 'popular', 'available', 'title'}
DEFAULT_BOOK_SORT = 'newest'
_FULLTEXT_OPERATOR_RE = re.compile(r'[+\-><()~*"@]')
BORROW_STATUS_KEYS = ('pending', 'picked_up', 'returned', 'rejected', 'expired')
BORROW_ACTION_CSRF_SESSION_KEY = 'borrow_action_csrf_token'
AVATAR_MAX_SIZE = 3 * 1024 * 1024
AVATAR_SUBFOLDER = 'avatars'


def _sanitize_fulltext_query(q: str) -> str:
    """Remove MySQL FULLTEXT BOOLEAN MODE operators to prevent query injection."""
    return _FULLTEXT_OPERATOR_RE.sub(' ', q).strip()


def normalize_book_search(raw_search: str) -> str:
    sanitized = _sanitize_fulltext_query(raw_search)
    return re.sub(r'\s+', ' ', sanitized).strip()[:SEARCH_MAX_LENGTH]


def normalize_sort(value: str | None) -> str:
    return value if value in BOOK_SORT_OPTIONS else DEFAULT_BOOK_SORT


def apply_book_search_filters(query: Any, search: str) -> Any:
    if not search:
        return query

    return query.filter(
        (Book.title.contains(search)) |
        (Book.author.contains(search)) |
        (Book.category.contains(search)) |
        (Book.isbn.contains(search))
    )


def apply_book_sort(query: Any, sort: str) -> Any:
    if sort == 'popular':
        return query.order_by(Book.borrow_count.desc(), Book.id.desc())
    if sort == 'available':
        return query.order_by(Book.stock.desc(), Book.id.desc())
    if sort == 'title':
        return query.order_by(Book.title.asc())
    return query.order_by(Book.id.desc())


def serialize_borrow_record(record: BorrowRecord) -> dict[str, object]:
    def fmt(value: datetime | None, pattern: str = '%Y-%m-%d %H:%M') -> str | None:
        return value.strftime(pattern) if value else None

    return {
        'id': record.id,
        'status': record.status,
        'borrow_date': fmt(record.borrow_date),
        'return_date': fmt(record.return_date, '%Y-%m-%d'),
        'pickup_date': fmt(record.pickup_date),
        'reject_date': fmt(record.reject_date),
    }


def build_borrow_stats(records: list[BorrowRecord]) -> dict[str, int]:
    stats = {'total': len(records), **{key: 0 for key in BORROW_STATUS_KEYS}}
    for record in records:
        if record.status in stats:
            stats[record.status] += 1
    return stats


def build_borrow_insights(records: list[BorrowRecord], stats: dict[str, int]) -> dict[str, object]:
    now = naive_cst_now()

    total = stats['total']
    completion_rate = round(stats['returned'] / total * 100) if total else 0
    active_count = stats['pending'] + stats['picked_up']

    cat_counter: Counter[str] = Counter()
    for record in records:
        if record.book and record.book.category:
            cat_counter[record.book.category] += 1
    top_categories_raw = cat_counter.most_common(3)
    max_cat = top_categories_raw[0][1] if top_categories_raw else 0
    top_categories = [
        {
            'name': name,
            'count': count,
            'pct': round(count / max_cat * 100) if max_cat else 0,
        }
        for name, count in top_categories_raw
    ]

    upcoming = []
    for record in records:
        if record.status != 'picked_up' or not record.return_date:
            continue
        days_left = (record.return_date.date() - now.date()).days
        if days_left <= 7:
            upcoming.append({
                'record': record,
                'days_left': days_left,
                'overdue': days_left < 0,
            })
    upcoming.sort(key=lambda item: item['days_left'])
    upcoming = upcoming[:4]

    if total == 0:
        level = {'name': '新读者', 'desc': '开启你的第一本书', 'tone': 'pink'}
    elif stats['expired'] > 0:
        level = {'name': '需关注', 'desc': '请及时归还逾期图书', 'tone': 'orange'}
    elif completion_rate >= 80:
        level = {'name': '阅读达人', 'desc': '完成率优秀，继续保持', 'tone': 'emerald'}
    elif completion_rate >= 50:
        level = {'name': '稳定读者', 'desc': '阅读节奏良好', 'tone': 'blue'}
    else:
        level = {'name': '初阶读者', 'desc': '坚持阅读，完成更多', 'tone': 'pink'}

    return {
        'now': now,
        'completion_rate': completion_rate,
        'active_count': active_count,
        'top_categories': top_categories,
        'upcoming_due': upcoming,
        'level': level,
    }


def get_borrow_action_csrf_token() -> str:
    return get_csrf_token(BORROW_ACTION_CSRF_SESSION_KEY)


def validate_borrow_action_csrf() -> bool:
    return validate_csrf_token(BORROW_ACTION_CSRF_SESSION_KEY)
