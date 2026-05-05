from flask import Blueprint, render_template, request, abort, jsonify
from flask_login import login_required, current_user
from models import db, Book, BorrowRecord
from utils import log_action, cst_now, process_expired_reservations, db_transaction
from datetime import datetime
import re

user_bp = Blueprint('user', __name__)

SEARCH_MAX_LENGTH = 64
MAX_STOCK_QUERY_IDS = 50
BOOKS_PER_PAGE = 4
SORT_OPTIONS = {'newest', 'popular', 'available', 'title'}
DEFAULT_SORT = 'newest'


def normalize_book_search(raw_search):
    return re.sub(r'\s+', ' ', raw_search).strip()[:SEARCH_MAX_LENGTH]


def normalize_sort(value):
    return value if value in SORT_OPTIONS else DEFAULT_SORT


def apply_book_search_filters(query, search):
    if not search:
        return query

    return query.filter(
        (Book.title.contains(search)) |
        (Book.author.contains(search)) |
        (Book.category.contains(search)) |
        (Book.isbn.contains(search))
    )


def apply_book_sort(query, sort):
    if sort == 'popular':
        borrow_count = (
            db.session.query(BorrowRecord.book_id, db.func.count(BorrowRecord.id).label('cnt'))
            .group_by(BorrowRecord.book_id)
            .subquery()
        )
        return (
            query.outerjoin(borrow_count, Book.id == borrow_count.c.book_id)
            .order_by(db.func.coalesce(borrow_count.c.cnt, 0).desc(), Book.id.desc())
        )
    if sort == 'available':
        return query.order_by(Book.stock.desc(), Book.id.desc())
    if sort == 'title':
        return query.order_by(Book.title.asc())
    return query.order_by(Book.id.desc())

@user_bp.route('/')
def index():
    recent_books = Book.query.order_by(Book.id.desc()).limit(6).all()
    return render_template('index.html', recent_books=recent_books)

@user_bp.route('/books')
@login_required
def books():
    search = normalize_book_search(request.args.get('search', ''))
    category = request.args.get('category', '')
    sort = normalize_sort(request.args.get('sort', DEFAULT_SORT))
    only_available = request.args.get('only_available') == '1'
    page = request.args.get('page', 1, type=int)

    base_query = apply_book_search_filters(Book.query, search)
    query = base_query

    if category:
        query = query.filter(Book.category == category)
    if only_available:
        query = query.filter(Book.stock > 0)

    categories = base_query.filter(
        Book.category.isnot(None),
        Book.category != ''
    ).with_entities(
        Book.category,
        db.func.count(Book.id)
    ).group_by(
        Book.category
    ).order_by(
        db.func.count(Book.id).desc()
    ).all()
    categories_total = base_query.count()

    pagination = apply_book_sort(query, sort).paginate(
        page=page, per_page=BOOKS_PER_PAGE, error_out=False
    )
    return render_template(
        'books.html',
        books=pagination.items,
        pagination=pagination,
        search=search,
        category=category,
        sort=sort,
        only_available=only_available,
        categories=categories,
        categories_total=categories_total
    )

@user_bp.route('/guest/books')
def guest_books():
    search = normalize_book_search(request.args.get('search', ''))
    page = request.args.get('page', 1, type=int)
    per_page = 20
    query = apply_book_search_filters(Book.query, search)
    pagination = query.order_by(Book.id.desc()).paginate(page=page, per_page=per_page, error_out=False)
    return render_template('guest_books.html', books=pagination.items, pagination=pagination, search=search)

@user_bp.route('/book/<int:book_id>')
@login_required
def book_detail(book_id):
    book = db.session.get(Book, book_id)
    if not book:
        abort(404)

    borrow_count = (
        db.session.query(db.func.count(BorrowRecord.id))
        .filter(BorrowRecord.book_id == book.id)
        .scalar()
        or 0
    )

    related_books = []
    if book.category:
        related_books = (
            Book.query
            .filter(Book.category == book.category, Book.id != book.id)
            .order_by(Book.id.desc())
            .limit(4)
            .all()
        )

    return render_template(
        'book_detail.html',
        book=book,
        borrow_count=borrow_count,
        related_books=related_books,
    )

@user_bp.route('/books/stock')
@login_required
def books_stock():
    ids = request.args.get('ids', '')
    if not ids:
        return jsonify({})
    id_list = list(dict.fromkeys(int(i) for i in ids.split(',') if i.isdigit()))[:MAX_STOCK_QUERY_IDS]
    if not id_list:
        return jsonify({})
    process_expired_reservations(id_list)
    books = Book.query.filter(Book.id.in_(id_list)).all()
    return jsonify({b.id: {'stock': b.stock, 'total': b.total, 'available': b.available} for b in books})

@user_bp.route('/books/categories')
@login_required
def books_categories():
    search = normalize_book_search(request.args.get('search', ''))
    base_query = apply_book_search_filters(Book.query, search)
    categories = base_query.filter(
        Book.category.isnot(None),
        Book.category != ''
    ).with_entities(
        Book.category,
        db.func.count(Book.id)
    ).group_by(Book.category).all()
    total = base_query.count()
    return jsonify({
        'categories': {cat: count for cat, count in categories},
        'total': total
    })


@user_bp.route('/book/borrow/<int:book_id>', methods=['POST'])
@login_required
def borrow_book(book_id):
    book = db.session.get(Book, book_id)
    if not book:
        abort(404)
    if book.stock <= 0:
        return jsonify({'success': False, 'message': '库存不足'})

    existing_record = BorrowRecord.query.filter(
        BorrowRecord.user_id == current_user.id,
        BorrowRecord.book_id == book_id,
        BorrowRecord.status.in_(['pending', 'picked_up'])
    ).first()

    if existing_record:
        return jsonify({'success': False, 'message': '您已经预约了这本书，请完成当前流程后再预约'})

    active_count = BorrowRecord.query.filter(
        BorrowRecord.user_id == current_user.id,
        BorrowRecord.status.in_(['pending', 'picked_up'])
    ).count()
    if active_count >= 2:
        return jsonify({'success': False, 'message': '最多同时借阅2本书，请归还后再预约'})

    return_date = None
    data = request.get_json(silent=True)
    if data and data.get('return_date'):
        try:
            return_date = datetime.strptime(data['return_date'], '%Y-%m-%d')
        except (ValueError, TypeError):
            return jsonify({'success': False, 'message': '归还日期格式不正确'})
        if return_date.date() <= cst_now().date():
            return jsonify({'success': False, 'message': '归还日期必须晚于今天'})
        from datetime import timedelta
        start_date = cst_now().date()
        if data.get('start_date'):
            try:
                start_date = datetime.strptime(data['start_date'], '%Y-%m-%d').date()
            except (ValueError, TypeError):
                pass
        if return_date.date() > start_date + timedelta(days=12):
            return jsonify({'success': False, 'message': '借阅时长不能超过12天'})

    with db_transaction(error_message='预约失败，请稍后重试') as tx:
        record = BorrowRecord(
            user_id=current_user.id,
            book_id=book_id,
            return_date=return_date,
        )
        book.stock -= 1
        db.session.add(record)
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('预约图书', f'书名: {book.title}, 预计归还: {return_date.strftime("%Y-%m-%d") if return_date else "未设置"}')
    return jsonify({
        'success': True,
        'message': '预约成功',
        'stock': book.stock,
        'total': book.total,
        'available': book.available,
    })

@user_bp.route('/book/return/<int:record_id>', methods=['POST'])
@login_required
def return_book(record_id):
    record = db.session.get(BorrowRecord, record_id)
    if not record:
        abort(404)
    if record.user_id != current_user.id and not getattr(current_user, 'is_admin', False):
        return jsonify({'success': False, 'message': '权限不足'}), 403
    if record.status == 'returned':
        return jsonify({'success': False, 'message': '该记录已归还'})
    if record.status != 'picked_up':
        return jsonify({'success': False, 'message': '该图书尚未领取，无法归还'})

    book_title = record.book.title
    with db_transaction(error_message='归还操作失败') as tx:
        record.return_date = cst_now()
        record.status = 'returned'
        record.book.restore_stock()
        record.book.increment_borrow_count()
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('归还图书', f'书名: {book_title}, 记录ID: {record_id}')
    return jsonify({'success': True, 'message': '归还成功'})

@user_bp.route('/book/cancel/<int:record_id>', methods=['POST'])
@login_required
def cancel_reservation(record_id):
    record = db.session.get(BorrowRecord, record_id)
    if not record:
        abort(404)
    if record.user_id != current_user.id:
        return jsonify({'success': False, 'message': '权限不足'}), 403
    if record.status != 'pending':
        return jsonify({'success': False, 'message': '只能取消未领取的预约'})

    book_title = record.book.title
    with db_transaction(error_message='取消失败，请稍后重试') as tx:
        record.book.restore_stock()
        record.status = 'rejected'
        record.reject_date = cst_now()
    if tx.error:
        return jsonify({'success': False, 'message': tx.error})
    log_action('取消预约', f'书名: {book_title}, 记录ID: {record_id}')
    return jsonify({'success': True, 'message': '已取消预约'})

@user_bp.route('/borrow_records')
@login_required
def borrow_records():
    from sqlalchemy.orm import joinedload
    records = BorrowRecord.query.options(
        joinedload(BorrowRecord.book)
    ).filter_by(user_id=current_user.id).order_by(BorrowRecord.borrow_date.desc()).all()

    stats = {'total': len(records), 'pending': 0, 'picked_up': 0,
             'returned': 0, 'rejected': 0, 'expired': 0}
    for r in records:
        if r.status in stats:
            stats[r.status] += 1

    return render_template('borrow_records.html', records=records, stats=stats)
