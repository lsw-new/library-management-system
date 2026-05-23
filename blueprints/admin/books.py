from flask import Blueprint, abort, current_app, jsonify, request
from flask_login import login_required

from models import Book, BorrowRecord, db
from utils import admin_required, db_transaction, log_action, save_book_image, validate_book_form
from utils.cache import cache_delete_pattern


def register_book_routes(bp: Blueprint) -> None:

    @bp.route('/book/add', methods=['POST'])
    @login_required
    @admin_required()
    def add_book():
        cleaned, err = validate_book_form(request.form)
        if err:
            return jsonify({'success': False, 'message': err}), 400

        image_filename = save_book_image(
            request.files.get('image'),
            current_app.config['UPLOAD_FOLDER'],
            current_app.config['ALLOWED_EXTENSIONS'],
        )

        with db_transaction(error_message='添加失败，请检查数据是否重复') as tx:
            book = Book(image=image_filename, **cleaned)
            db.session.add(book)
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        log_action('添加图书', f"书名: {cleaned['title']}, 库存: {cleaned['stock']}")
        cache_delete_pattern('book_categories:*')
        return jsonify({'success': True, 'message': '图书添加成功'})

    @bp.route('/book/edit/<int:book_id>', methods=['POST'])
    @login_required
    @admin_required()
    def edit_book(book_id):
        book = db.session.get(Book, book_id)
        if not book:
            abort(404)

        cleaned, err = validate_book_form(
            request.form,
            defaults={'stock': book.stock, 'total': book.total or book.stock},
        )
        if err:
            return jsonify({'success': False, 'message': err}), 400

        new_image = save_book_image(
            request.files.get('image'),
            current_app.config['UPLOAD_FOLDER'],
            current_app.config['ALLOWED_EXTENSIONS'],
            old_filename=book.image,
        )

        for k, v in cleaned.items():
            setattr(book, k, v)
        if new_image:
            book.image = new_image

        with db_transaction(error_message='更新失败') as tx:
            pass
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        log_action('编辑图书', f"书名: {cleaned['title']}, 库存: {cleaned['stock']}")
        cache_delete_pattern('book_categories:*')
        return jsonify({'success': True, 'message': '图书更新成功'})

    @bp.route('/book/delete/<int:book_id>', methods=['POST'])
    @login_required
    @admin_required()
    def delete_book(book_id):
        book = db.session.get(Book, book_id)
        if not book:
            abort(404)
        if BorrowRecord.query.filter(
            BorrowRecord.book_id == book_id,
            BorrowRecord.status.in_(['pending', 'picked_up'])
        ).count() > 0:
            return jsonify({'success': False, 'message': '该图书还有未完成的预约记录，不能删除'}), 409

        title = book.title
        with db_transaction(error_message='删除失败') as tx:
            db.session.delete(book)
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500
        log_action('删除图书', f'书名: {title}, ID: {book_id}')
        cache_delete_pattern('book_categories:*')
        return jsonify({'success': True, 'message': '图书删除成功'})
