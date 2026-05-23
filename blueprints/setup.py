import re
from datetime import timedelta
from functools import wraps
from ipaddress import ip_address
from urllib.parse import quote

import pymysql
from flask import Blueprint, current_app, jsonify, render_template, request
from flask_login import current_user

from config import is_production
from data.test_books import TEST_BOOKS, TEST_USER_STUDENT_ID, build_demo_borrow_count, is_demo_book_match
from models import Admin, Book, BorrowRecord, User, db
from utils import _get_db_config, cst_now, get_csrf_token, update_config_file, validate_csrf_token

setup_bp = Blueprint('setup', __name__)

DB_NAME_PATTERN = re.compile(r'^[A-Za-z0-9_]{1,64}$')
SETUP_ACTION_CSRF_SESSION_KEY = 'setup_action_csrf_token'


def is_valid_db_name(db_name: str | None) -> bool:
    return bool(db_name and DB_NAME_PATTERN.fullmatch(db_name))


def get_setup_action_csrf_token() -> str:
    return get_csrf_token(SETUP_ACTION_CSRF_SESSION_KEY)


def validate_setup_action_csrf() -> bool:
    return validate_csrf_token(SETUP_ACTION_CSRF_SESSION_KEY)


def setup_api_required(view):
    @wraps(view)
    def wrapper(*args, **kwargs):
        if request.method == 'POST' and not validate_setup_action_csrf():
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        if getattr(current_user, 'is_authenticated', False) and getattr(current_user, 'is_admin', False):
            return view(*args, **kwargs)
        try:
            is_local = ip_address(request.remote_addr or '').is_loopback
        except ValueError:
            is_local = False
        if not is_production() and is_local:
            return view(*args, **kwargs)
        return jsonify({'success': False, 'message': '仅管理员或本机初始化流程可执行该操作'}), 403
    return wrapper


def ensure_runtime_schema():
    try:
        db.create_all()
    except Exception as e:
        current_app.logger.warning(f'运行时同步数据库结构失败: {e}')

    try:
        from sqlalchemy import inspect, text
        inspector = inspect(db.engine)
        if inspector.has_table('users'):
            user_cols = {c['name'] for c in inspector.get_columns('users')}
            if 'banned_until' not in user_cols:
                with db.engine.begin() as conn:
                    conn.execute(text(
                        'ALTER TABLE users ADD COLUMN banned_until DATETIME NULL'
                    ))
                    try:
                        conn.execute(text(
                            'CREATE INDEX ix_users_banned_until ON users (banned_until)'
                        ))
                    except Exception:
                        pass
        if inspector.has_table('books'):
            book_cols = {c['name'] for c in inspector.get_columns('books')}
            if 'borrow_count' not in book_cols:
                with db.engine.begin() as conn:
                    conn.execute(text(
                        'ALTER TABLE books ADD COLUMN borrow_count INTEGER NOT NULL DEFAULT 0'
                    ))
                    try:
                        conn.execute(text(
                            'CREATE INDEX ix_books_borrow_count ON books (borrow_count)'
                        ))
                    except Exception:
                        pass
        if inspector.has_table('online_sessions'):
            os_cols = {c['name'] for c in inspector.get_columns('online_sessions')}
            if 'geo_location' not in os_cols:
                with db.engine.begin() as conn:
                    conn.execute(text(
                        'ALTER TABLE online_sessions ADD COLUMN geo_location VARCHAR(100) NULL'
                    ))
    except Exception as e:
        current_app.logger.warning(f'补齐运行时字段失败: {e}')


def _inspect_database(cursor, db_name: str) -> dict:
    cursor.execute("SHOW DATABASES")
    if db_name not in [d[0] for d in cursor.fetchall()]:
        return {'db_exists': False, 'tables': [], 'demo_data_ready': False}

    cursor.execute(f"USE `{db_name}`")
    cursor.execute("SHOW TABLES")
    tables = [t[0] for t in cursor.fetchall()]

    demo_data_ready = False
    if {'admins', 'users', 'books'}.issubset(tables):
        cursor.execute("SELECT COUNT(*) FROM admins WHERE username = %s", ('admin',))
        has_admin = cursor.fetchone()[0] > 0
        cursor.execute("SELECT COUNT(*) FROM users WHERE username = %s", ('user1',))
        has_demo_user = cursor.fetchone()[0] > 0
        cursor.execute("SELECT COUNT(*) FROM books")
        has_books = cursor.fetchone()[0] > 0
        demo_data_ready = has_admin and has_demo_user and has_books

    return {'db_exists': True, 'tables': tables, 'demo_data_ready': demo_data_ready}


@setup_bp.route('/init_db')
def init_db_page():
    db_defaults = _get_db_config()
    return render_template(
        'init_db.html',
        db_defaults=db_defaults,
        setup_action_csrf_token=get_setup_action_csrf_token(),
    )


@setup_bp.route('/init_db/actions')
def init_db_actions_page():
    db_defaults = _get_db_config()
    return render_template(
        'init_db_actions.html',
        db_defaults=db_defaults,
        setup_action_csrf_token=get_setup_action_csrf_token(),
    )


@setup_bp.route('/api/test_connection', methods=['POST'])
@setup_api_required
def test_connection():
    """
    测试数据库连接
    验证配置是否正确，检查数据库和表是否存在
    """
    cfg_data = request.get_json(silent=True) or {}
    host = cfg_data.get('host')
    db_name = cfg_data.get('database')
    current_cfg = _get_db_config()
    connection = None

    try:
        if host:
            user = cfg_data.get('user') or ''
            port = int(cfg_data.get('port') or 3306)
            password = cfg_data.get('password') or ''
            encoded_user = quote(user, safe='')
            encoded_password = quote(password, safe='')
            encoded_db_name = quote(db_name or '', safe='')
            temp_uri = f"mysql+pymysql://{encoded_user}:{encoded_password}@{host}:{port}/{encoded_db_name}?charset=utf8mb4"
            cfg = {
                'host': host,
                'port': port,
                'user': user,
                'password': password,
                'charset': 'utf8mb4',
            }
        else:
            cfg = current_cfg.copy()
            db_name = db_name or cfg.get('database')
            cfg.pop('database', None)

        if db_name and not is_valid_db_name(db_name):
            return jsonify({'success': False, 'message': '数据库名只能包含字母、数字和下划线，长度不超过 64 个字符。'}), 400

        connection = pymysql.connect(**cfg)
        cursor = connection.cursor()
        db_info = _inspect_database(cursor, db_name) if db_name else {
            'db_exists': False, 'tables': [], 'demo_data_ready': False,
        }
        cursor.close()

        if host and not update_config_file(temp_uri):
            return jsonify({'success': False, 'message': '数据库连接验证成功，但配置保存失败，请检查 .env 文件权限。'}), 500

        return jsonify({
            'success': True,
            'message': '数据库连接验证成功！',
            'db_name': db_name,
            **db_info,
        })
    except Exception:
        current_app.logger.exception('测试数据库连接失败')
        return jsonify({'success': False, 'message': '连接失败，请检查主机、端口、用户名和密码。'}), 500
    finally:
        if connection:
            connection.close()


@setup_bp.route('/api/create_tables', methods=['POST'])
@setup_api_required
def create_tables():
    """
    创建数据库表
    1. 创建数据库（如果不存在）
    2. 使用 SQLAlchemy 创建所有表
    """
    connection = None
    try:
        cfg = _get_db_config()
        db_name = cfg.pop('database', 'library_db')
        if not is_valid_db_name(db_name):
            return jsonify({'success': False, 'message': '数据库名只能包含字母、数字和下划线，长度不超过 64 个字符。'}), 400

        connection = pymysql.connect(**cfg)
        cursor = connection.cursor()
        cursor.execute(f"CREATE DATABASE IF NOT EXISTS `{db_name}` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci")
        cursor.close()
        connection.close()

        db.create_all()

        cfg['database'] = db_name
        connection = pymysql.connect(**cfg)
        cursor = connection.cursor()
        cursor.execute("SHOW TABLES")
        tables = [t[0] for t in cursor.fetchall()]

        connection.commit()
        cursor.close()

        return jsonify({
            'success': True,
            'message': f'数据库表创建成功！已创建表: {", ".join(tables)}'
        })
    except Exception:
        current_app.logger.exception('创建数据库表失败')
        return jsonify({'success': False, 'message': '创建失败，请检查数据库连接和权限配置。'}), 500
    finally:
        if connection:
            connection.close()


@setup_bp.route('/api/insert_test_data', methods=['POST'])
@setup_api_required
def insert_test_data():
    """
    插入测试数据
    包括管理员、用户、图书和借阅记录
    """
    try:
        # 创建管理员账户
        if not Admin.query.filter_by(username='admin').first():
            admin = Admin(username='admin', email='admin@library.com')
            admin.set_password('admin123')
            db.session.add(admin)

        # 创建测试用户
        if not User.query.filter_by(username='user1').first():
            user = User(username='user1', email='user1@library.com', student_id=TEST_USER_STUDENT_ID,
                       real_name='张三', class_name='2024级计算机科学与技术1班')
            user.set_password('user123')
            db.session.add(user)

        # 插入测试图书
        for index, test_book in enumerate(TEST_BOOKS, start=1):
            title, author, isbn, publisher, location, category, stock, total = test_book
            borrow_count = build_demo_borrow_count(index)
            existing_book = Book.query.filter_by(isbn=isbn).first()
            if existing_book:
                if not existing_book.location:
                    existing_book.location = location
                if existing_book.borrow_count is None or (
                    existing_book.borrow_count == 0 and is_demo_book_match(existing_book, test_book)
                ):
                    existing_book.borrow_count = borrow_count
                continue

            db.session.add(Book(
                title=title,
                author=author,
                isbn=isbn,
                publisher=publisher,
                location=location,
                category=category,
                stock=stock,
                total=total,
                borrow_count=borrow_count
            ))

        db.session.commit()

        # 创建测试借阅记录
        user1 = User.query.filter_by(username='user1').first()
        if user1:
            book1 = Book.query.filter_by(isbn='9787115428028').first()
            if book1 and not BorrowRecord.query.filter_by(user_id=user1.id, book_id=book1.id).first():
                record1 = BorrowRecord(
                    user_id=user1.id,
                    book_id=book1.id,
                    borrow_date=cst_now() - timedelta(hours=2),
                    status='pending'
                )
                db.session.add(record1)
                Book.query.filter(
                    Book.id == book1.id,
                    Book.stock > 0,
                ).update({Book.stock: Book.stock - 1}, synchronize_session=False)

        db.session.commit()
        return jsonify({'success': True, 'message': '测试数据插入成功！'})
    except Exception:
        db.session.rollback()
        current_app.logger.exception('插入测试数据失败')
        return jsonify({'success': False, 'message': '插入失败，请检查表结构和数据库写入权限。'}), 500


@setup_bp.route('/api/reset_database', methods=['POST'])
@setup_api_required
def reset_database():
    """
    重置数据库
    删除所有表并重新创建
    """
    try:
        db.drop_all()
        db.create_all()

        return jsonify({'success': True, 'message': '数据库重置成功！'})
    except Exception:
        current_app.logger.exception('重置数据库失败')
        return jsonify({'success': False, 'message': '重置失败，请检查数据库连接和权限配置。'}), 500
