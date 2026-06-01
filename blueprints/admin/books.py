# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, abort, current_app, jsonify, request
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_required

# 从指定模块导入类、函数或变量，简化后续代码引用。
from models import Book, BorrowRecord, db
# 从指定模块导入类、函数或变量，简化后续代码引用。
from socketio_emitters import emit_book_catalog_changed, emit_stock_changed
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils import admin_required, db_transaction, log_action, save_book_image, validate_book_form
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils.cache import cache_delete_pattern


# 定义 `register_book_routes` 函数，封装一段可复用的后端处理流程。
def register_book_routes(bp: Blueprint) -> None:

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/book/add', methods=['POST'])
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 定义 `add_book` 函数，封装一段可复用的后端处理流程。
    def add_book():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cleaned, err = validate_book_form(request.form)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if err:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': err}), 400

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        image_filename = save_book_image(
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            request.files.get('image'),
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            current_app.config['UPLOAD_FOLDER'],
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            current_app.config['ALLOWED_EXTENSIONS'],
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )

        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='添加失败，请检查数据是否重复') as tx:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book = Book(image=image_filename, **cleaned)
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.add(book)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('添加图书', f"书名: {cleaned['title']}, 库存: {cleaned['stock']}")
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('book_categories:*')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_book_catalog_changed('add', book.id)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '图书添加成功'})

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/book/edit/<int:book_id>', methods=['POST'])
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 定义 `edit_book` 函数，封装一段可复用的后端处理流程。
    def edit_book(book_id):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book = db.session.get(Book, book_id)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not book:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            abort(404)

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cleaned, err = validate_book_form(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            request.form,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            defaults={'stock': book.stock, 'total': book.total or book.stock},
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if err:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': err}), 400

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_image = save_book_image(
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            request.files.get('image'),
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            current_app.config['UPLOAD_FOLDER'],
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            current_app.config['ALLOWED_EXTENSIONS'],
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            old_filename=book.image,
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )

        # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for k, v in cleaned.items():
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            setattr(book, k, v)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if new_image:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book.image = new_image

        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='更新失败') as tx:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            pass
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('编辑图书', f"书名: {cleaned['title']}, 库存: {cleaned['stock']}")
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('book_categories:*')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_stock_changed(book.id)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_book_catalog_changed('edit', book.id)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '图书更新成功'})

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/book/delete/<int:book_id>', methods=['POST'])
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 定义 `delete_book` 函数，封装一段可复用的后端处理流程。
    def delete_book(book_id):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book = db.session.get(Book, book_id)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not book:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            abort(404)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if BorrowRecord.query.filter(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            BorrowRecord.book_id == book_id,
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            BorrowRecord.status.in_(['pending', 'picked_up'])
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).count() > 0:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '该图书还有未完成的预约记录，不能删除'}), 409

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        title = book.title
        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='删除失败') as tx:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.delete(book)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('删除图书', f'书名: {title}, ID: {book_id}')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('book_categories:*')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_book_catalog_changed('delete', book_id)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '图书删除成功'})
