# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, abort, jsonify, render_template, request
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_required

# 从指定模块导入类、函数或变量，简化后续代码引用。
from blueprints.user_helpers import (
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    DEFAULT_BOOK_SORT,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    apply_book_search_filters,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    apply_book_sort,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    get_borrow_action_csrf_token,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    normalize_book_search,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    normalize_sort,
# 关闭前面打开的复合表达式、集合字面量或函数调用结构。
)
# 从指定模块导入类、函数或变量，简化后续代码引用。
from models import Book, BorrowRecord, db
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils.cache import cache_get, cache_set

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
MAX_STOCK_QUERY_IDS = 50
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
BOOKS_PER_PAGE = 8


# 定义 `_get_categories_cached` 函数，封装一段可复用的后端处理流程。
def _get_categories_cached(search: str):
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    cache_key = f'book_categories:{search or "ALL"}'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    cached = cache_get(cache_key)
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if cached:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return [(c, n) for c, n in cached['categories']], cached['total']

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    base_query = apply_book_search_filters(Book.query, search)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    categories = base_query.filter(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        Book.category.isnot(None),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        Book.category != ''
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    ).with_entities(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        Book.category,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.func.count(Book.id)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).group_by(Book.category).order_by(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.func.count(Book.id).desc()
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    ).all()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    total = sum(count for _, count in categories)

    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    cache_set(cache_key, {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'categories': [(c, n) for c, n in categories],
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'total': total,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, ttl_seconds=120)
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return categories, total


# 定义 `register_book_routes` 函数，封装一段可复用的后端处理流程。
def register_book_routes(bp: Blueprint) -> None:

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/')
    # 定义 `index` 函数，封装一段可复用的后端处理流程。
    def index():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        recent_books = Book.query.order_by(Book.id.desc()).limit(6).all()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template('index.html', recent_books=recent_books)

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/books')
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 定义 `books` 函数，封装一段可复用的后端处理流程。
    def books():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        search = normalize_book_search(request.args.get('search', ''))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        category = request.args.get('category', '')
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        sort = normalize_sort(request.args.get('sort', DEFAULT_BOOK_SORT))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        only_available = request.args.get('only_available') == '1'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        page = request.args.get('page', 1, type=int)

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        query = apply_book_search_filters(Book.query, search)

        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if category:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            query = query.filter(Book.category == category)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if only_available:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            query = query.filter(Book.stock > 0)

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        categories, categories_total = _get_categories_cached(search)

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        pagination = apply_book_sort(query, sort).paginate(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            page=page, per_page=BOOKS_PER_PAGE, error_out=False
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'books.html',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            books=pagination.items,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            pagination=pagination,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            search=search,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            category=category,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            sort=sort,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            only_available=only_available,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            categories=categories,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            categories_total=categories_total,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/guest/books')
    # 定义 `guest_books` 函数，封装一段可复用的后端处理流程。
    def guest_books():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        search = normalize_book_search(request.args.get('search', ''))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        page = request.args.get('page', 1, type=int)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        per_page = 20
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        query = apply_book_search_filters(Book.query, search)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        pagination = query.order_by(Book.id.desc()).paginate(page=page, per_page=per_page, error_out=False)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template('guest_books.html', books=pagination.items, pagination=pagination, search=search)

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/book/<int:book_id>')
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 定义 `book_detail` 函数，封装一段可复用的后端处理流程。
    def book_detail(book_id):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book = db.session.get(Book, book_id)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not book:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            abort(404)

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        borrow_count = (
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.query(db.func.count(BorrowRecord.id))
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            .filter(BorrowRecord.book_id == book.id)
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            .scalar()
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            or 0
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        related_books = []
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if book.category:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            related_books = (
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                Book.query
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                .filter(Book.category == book.category, Book.id != book.id)
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                .order_by(Book.id.desc())
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                .limit(4)
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                .all()
            # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )

        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'book_detail.html',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            book=book,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            borrow_count=borrow_count,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            related_books=related_books,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/books/stock')
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 定义 `books_stock` 函数，封装一段可复用的后端处理流程。
    def books_stock():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        ids = request.args.get('ids', '')
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not ids:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            response = jsonify({})
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            response.headers['Cache-Control'] = 'no-store, max-age=0'
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return response
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        id_list = list(dict.fromkeys(int(i) for i in ids.split(',') if i.isdigit()))[:MAX_STOCK_QUERY_IDS]
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not id_list:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            response = jsonify({})
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            response.headers['Cache-Control'] = 'no-store, max-age=0'
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return response
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        books_result = Book.query.filter(Book.id.in_(id_list)).all()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        response = jsonify({b.id: {'stock': b.stock, 'total': b.total, 'available': b.available} for b in books_result})
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        response.headers['Cache-Control'] = 'no-store, max-age=0'
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return response

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/books/categories')
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 定义 `books_categories` 函数，封装一段可复用的后端处理流程。
    def books_categories():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        search = normalize_book_search(request.args.get('search', ''))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        categories, total = _get_categories_cached(search)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'categories': {cat: count for cat, count in categories},
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'total': total
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        })

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/ranking')
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 定义 `ranking` 函数，封装一段可复用的后端处理流程。
    def ranking():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        books_result = Book.query.filter(Book.borrow_count > 0).order_by(Book.borrow_count.desc()).limit(50).all()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        categories = sorted(set(b.category for b in books_result if b.category))
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template('ranking.html', books=books_result, categories=categories)
