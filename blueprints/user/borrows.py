# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import threading
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import datetime, timedelta
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, Response, abort, jsonify, render_template, request
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import current_user, login_required
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy import case, func
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy.orm import joinedload
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from blueprints.user_helpers import (
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_borrow_insights,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_borrow_stats,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    get_borrow_action_csrf_token,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    serialize_borrow_record,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    validate_borrow_action_csrf,
# 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
)
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from email_utils import send_borrow_notification_email
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from models import Book, BorrowRecord, db
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from socketio_emitters import emit_borrow_status, emit_reservation_changed, emit_stock_changed
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from utils import cst_now, db_transaction, log_action
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from utils.cache import cache_delete_pattern
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
MAX_BORROW_DAYS = 12
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
MAX_ACTIVE_BORROWS = 2
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_parse_return_date` 函数，封装一段可复用的后端处理流程。
def _parse_return_date(data: dict | None) -> tuple[datetime | None, str | None]:
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not data or not data.get('return_date'):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, None
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        return_date = datetime.strptime(data['return_date'], '%Y-%m-%d')
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except (ValueError, TypeError):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '归还日期格式不正确'
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if return_date.date() <= cst_now().date():
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '归还日期必须晚于今天'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    start_date = cst_now().date()
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if data.get('start_date'):
        # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            start_date = datetime.strptime(data['start_date'], '%Y-%m-%d').date()
        # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
        except (ValueError, TypeError):
            # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
            pass
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if return_date.date() > start_date + timedelta(days=MAX_BORROW_DAYS):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, f'借阅时长不能超过{MAX_BORROW_DAYS}天'
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return return_date, None
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `register_borrow_routes` 函数，封装一段可复用的后端处理流程。
def register_borrow_routes(bp: Blueprint) -> None:
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/book/borrow/<int:book_id>', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `borrow_book` 函数，封装一段可复用的后端处理流程。
    def borrow_book(book_id):
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not validate_borrow_action_csrf():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        data = request.get_json(silent=True)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        return_date, date_error = _parse_return_date(data)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if date_error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': date_error}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_id = current_user.id
        # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
        # 清理可能残留的脏 session 状态，确保 with_for_update 在干净的事务中运行
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book = None
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        reservation_error = None
        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='预约失败，请稍后重试') as tx:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book = db.session.get(Book, book_id)
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if not book:
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                reservation_error = 'not_found'
            # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
            else:
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                result = db.session.query(
                    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                    func.count().label('active_count'),
                    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                    func.sum(case((BorrowRecord.book_id == book_id, 1), else_=0)).label('has_this_book'),
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                ).filter(
                    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    BorrowRecord.user_id == user_id,
                    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                    BorrowRecord.status.in_(['pending', 'picked_up']),
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                ).one()
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                has_existing = (result.has_this_book or 0) > 0
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                active_count = result.active_count
                # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                if has_existing:
                    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    reservation_error = '您已经预约了这本书，请完成当前流程后再预约'
                # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                elif active_count >= MAX_ACTIVE_BORROWS:
                    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    reservation_error = f'最多同时借阅{MAX_ACTIVE_BORROWS}本书，请归还后再预约'
                # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
                else:
                    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    updated_rows = Book.query.filter(
                        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        Book.id == book_id,
                        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        Book.stock > 0,
                    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                    ).update({Book.stock: Book.stock - 1}, synchronize_session=False)
                    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                    if not updated_rows:
                        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                        reservation_error = '库存不足'
                # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                if not reservation_error:
                    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    db.session.add(BorrowRecord(
                        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        user_id=user_id,
                        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        book_id=book_id,
                        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                        return_date=return_date,
                    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                    ))
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if reservation_error == 'not_found':
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            abort(404)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if reservation_error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': reservation_error}), 409
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.refresh(book)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('预约图书', f'书名: {book.title}, 预计归还: {return_date.strftime("%Y-%m-%d") if return_date else "未设置"}')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('dashboard_stats:*')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_reservation_changed('borrow')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_borrow_status(user_id)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_stock_changed(book_id)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        threading.Thread(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            target=send_borrow_notification_email,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            args=(
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                current_user.email,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                current_user.username,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                book.title,
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                cst_now().strftime('%Y-%m-%d %H:%M'),
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                return_date.strftime('%Y-%m-%d') if return_date else None,
            # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
            ),
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            daemon=True,
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).start()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'success': True,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'message': '预约成功',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'book_id': book.id,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'stock': book.stock,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'total': book.total,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'available': book.available,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        })
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/book/cancel/<int:record_id>', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `cancel_reservation` 函数，封装一段可复用的后端处理流程。
    def cancel_reservation(record_id):
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not validate_borrow_action_csrf():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record = db.session.get(BorrowRecord, record_id)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not record:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            abort(404)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if record.user_id != current_user.id:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '权限不足'}), 403
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if record.status != 'pending':
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '只能取消未领取的预约'}), 409
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book = record.book
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        book_title = book.title
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        reject_date = cst_now()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cancel_error = None
        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='取消失败，请稍后重试') as tx:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            updated_rows = BorrowRecord.query.filter(
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.id == record_id,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.user_id == current_user.id,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status == 'pending',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).update({
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status: 'rejected',
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.reject_date: reject_date,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            }, synchronize_session=False)
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if updated_rows:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                book.restore_stock()
            # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
            else:
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                cancel_error = '只能取消未领取的预约'
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if cancel_error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': cancel_error}), 409
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('取消预约', f'书名: {book_title}, 记录ID: {record_id}')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        cache_delete_pattern('dashboard_stats:*')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_reservation_changed('cancel')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_borrow_status(current_user.id)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_stock_changed(book.id)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '已取消预约'})
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/borrow_records')
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `borrow_records` 函数，封装一段可复用的后端处理流程。
    def borrow_records():
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        records = BorrowRecord.query.options(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            joinedload(BorrowRecord.book)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).filter_by(user_id=current_user.id).order_by(BorrowRecord.borrow_date.desc()).all()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        stats = build_borrow_stats(records)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        insights = build_borrow_insights(records, stats)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'borrow_records.html',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            records=records,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            stats=stats,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            insights=insights,
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/borrow_records/status')
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `borrow_records_status` 函数，封装一段可复用的后端处理流程。
    def borrow_records_status() -> Response:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        records: list[BorrowRecord] = BorrowRecord.query.filter_by(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_id=current_user.id
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).order_by(BorrowRecord.borrow_date.desc()).limit(50).all()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'success': True,
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'records': [serialize_borrow_record(record) for record in records],
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'stats': build_borrow_stats(records),
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        })
