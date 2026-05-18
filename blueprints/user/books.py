from flask import Blueprint, render_template, request, abort, jsonify

from flask_login import login_required

from models import db, Book, BorrowRecord
from utils import process_expired_reservations
from blueprints.user_helpers import (
    DEFAULT_BOOK_SORT,
    apply_book_search_filters,
    apply_book_sort,
    get_borrow_action_csrf_token,
    normalize_book_search,
    normalize_sort,
)

MAX_STOCK_QUERY_IDS = 50
BOOKS_PER_PAGE = 4


def register_book_routes(bp: Blueprint) -> None:

    @bp.route('/')
    def index():
        recent_books = Book.query.order_by(Book.id.desc()).limit(6).all()
        return render_template('index.html', recent_books=recent_books)

    @bp.route('/books')
    @login_required
    def books():
        search = normalize_book_search(request.args.get('search', ''))
        category = request.args.get('category', '')
        sort = normalize_sort(request.args.get('sort', DEFAULT_BOOK_SORT))
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
            categories_total=categories_total,
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
        )

    @bp.route('/guest/books')
    def guest_books():
        search = normalize_book_search(request.args.get('search', ''))
        page = request.args.get('page', 1, type=int)
        per_page = 20
        query = apply_book_search_filters(Book.query, search)
        pagination = query.order_by(Book.id.desc()).paginate(page=page, per_page=per_page, error_out=False)
        return render_template('guest_books.html', books=pagination.items, pagination=pagination, search=search)

    @bp.route('/book/<int:book_id>')
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
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
        )

    @bp.route('/books/stock')
    @login_required
    def books_stock():
        ids = request.args.get('ids', '')
        if not ids:
            return jsonify({})
        id_list = list(dict.fromkeys(int(i) for i in ids.split(',') if i.isdigit()))[:MAX_STOCK_QUERY_IDS]
        if not id_list:
            return jsonify({})
        process_expired_reservations(id_list)
        books_result = Book.query.filter(Book.id.in_(id_list)).all()
        return jsonify({b.id: {'stock': b.stock, 'total': b.total, 'available': b.available} for b in books_result})

    @bp.route('/books/categories')
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

    @bp.route('/ranking')
    @login_required
    def ranking():
        books_result = Book.query.filter(Book.borrow_count > 0).order_by(Book.borrow_count.desc()).limit(50).all()
        categories = sorted(set(b.category for b in books_result if b.category))
        return render_template('ranking.html', books=books_result, categories=categories)
