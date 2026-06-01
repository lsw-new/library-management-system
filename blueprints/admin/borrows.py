# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import threading

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, jsonify
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_required
# 从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy.orm import joinedload

# 从指定模块导入类、函数或变量，简化后续代码引用。
from email_utils import send_rejection_email
# 从指定模块导入类、函数或变量，简化后续代码引用。
from models import BorrowRecord, db
# 从指定模块导入类、函数或变量，简化后续代码引用。
from socketio_emitters import emit_book_catalog_changed, emit_borrow_status, emit_reservation_changed, emit_stock_changed
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils import admin_required, cst_now, db_transaction, log_action
# 从指定模块导入类、函数或变量，简化后续代码引用。
from utils.cache import cache_delete_pattern


# 定义 `register_borrow_routes` 函数，封装一段可复用的后端处理流程。
def register_borrow_routes(bp: Blueprint) -> None:

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/approve_reservation/<int:record_id>', methods=['POST'])
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 定义 `approve_reservation` 函数，封装一段可复用的后端处理流程。
    def approve_reservation(record_id):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record = db.session.get(BorrowRecord, record_id, options=[joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)])
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not record or record.status != 'pending':
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '当前记录不可操作'}), 409
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        username = record.user.username
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book_title = record.book.title
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        pickup_date = cst_now()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        action_error = None
        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction() as tx:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            updated_rows = BorrowRecord.query.filter(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.id == record_id,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status == 'pending',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).update({
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status: 'picked_up',
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.pickup_date: pickup_date,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            }, synchronize_session=False)
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if not updated_rows:
                # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                action_error = '当前记录不可操作'
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if action_error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': action_error}), 409
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('审核预约', f'同意用户 {username} 领取图书: {book_title}')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('dashboard_stats:*')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_reservation_changed('approve')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_borrow_status(record.user_id)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '已同意领取图书'})

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/reject_reservation/<int:record_id>', methods=['POST'])
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 定义 `reject_reservation` 函数，封装一段可复用的后端处理流程。
    def reject_reservation(record_id):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record = db.session.get(BorrowRecord, record_id, options=[joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)])
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not record or record.status != 'pending':
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '当前记录不可操作'}), 409
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = record.user
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book = record.book
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        reject_date = cst_now()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        action_error = None
        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction() as tx:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            updated_rows = BorrowRecord.query.filter(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.id == record_id,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status == 'pending',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).update({
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status: 'rejected',
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.reject_date: reject_date,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            }, synchronize_session=False)
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if updated_rows:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                book.restore_stock()
            # 条件判断的兜底分支，处理前面条件没有命中的场景。
            else:
                # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                action_error = '当前记录不可操作'
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if action_error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': action_error}), 409
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('拒绝预约', f'拒绝用户 {user.username} 领取图书: {book.title}')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('dashboard_stats:*')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_reservation_changed('reject')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_borrow_status(user.id)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_stock_changed(book.id)
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        threading.Thread(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            target=send_rejection_email,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            args=(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                user.email,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                user.username,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                book.title,
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                reject_date.strftime('%Y-%m-%d %H:%M'),
            # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
            ),
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            daemon=True,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).start()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '已拒绝领取'})

    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/return_book/<int:record_id>', methods=['POST'])
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 定义 `admin_return_book` 函数，封装一段可复用的后端处理流程。
    def admin_return_book(record_id):
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record = db.session.get(BorrowRecord, record_id, options=[joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)])
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not record or record.status != 'picked_up':
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '当前记录不可操作'}), 409
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book = record.book
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        return_date = cst_now()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        action_error = None
        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='归还操作失败') as tx:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            updated_rows = BorrowRecord.query.filter(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.id == record_id,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status == 'picked_up',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).update({
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status: 'returned',
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.return_date: return_date,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            }, synchronize_session=False)
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if updated_rows:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                book.restore_stock()
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                book.increment_borrow_count()
            # 条件判断的兜底分支，处理前面条件没有命中的场景。
            else:
                # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                action_error = '当前记录不可操作'
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if action_error:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': action_error}), 409
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('管理员归还图书', f'书名: {book.title}, 记录ID: {record_id}')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('dashboard_stats:*')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_reservation_changed('return')
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_borrow_status(record.user_id)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_stock_changed(book.id)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_book_catalog_changed('return', book.id)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '归还成功'})
