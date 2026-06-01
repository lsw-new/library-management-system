# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import threading
# 从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import timedelta

# 从指定模块导入类、函数或变量，简化后续代码引用。
from sqlalchemy.orm import joinedload

# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db, naive_cst_now

# 从指定模块导入类、函数或变量，简化后续代码引用。
from .logging import log_action

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
logger = logging.getLogger(__name__)


# 定义 `process_expired_reservations` 函数，封装一段可复用的后端处理流程。
def process_expired_reservations(book_ids=None) -> int:
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from models import BorrowRecord
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    three_minutes_ago = naive_cst_now() - timedelta(minutes=3)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    query = BorrowRecord.query.options(
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        joinedload(BorrowRecord.book),
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        joinedload(BorrowRecord.user),
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    ).filter(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        BorrowRecord.status == 'pending',
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        BorrowRecord.borrow_date < three_minutes_ago
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if book_ids:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        query = query.filter(BorrowRecord.book_id.in_(book_ids))
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    expired_records = query.all()

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not expired_records:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return 0

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    count = 0
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    email_tasks = []
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    changed_book_ids = set()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    changed_user_ids = set()
    # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for record in expired_records:
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            nested = db.session.begin_nested()
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            book = record.book
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user = record.user
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            borrow_date = record.borrow_date
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            reject_date = naive_cst_now()
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            updated_rows = BorrowRecord.query.filter(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.id == record.id,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status == 'pending',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ).update({
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.status: 'expired',
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                BorrowRecord.reject_date: reject_date,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            }, synchronize_session=False)
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if not updated_rows:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                nested.rollback()
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                continue
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            book.restore_stock()
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            nested.commit()
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            count += 1
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            log_action('自动拒绝逾期预约', f'用户 {user.username} 预约图书 {book.title} 超过3分钟未处理，已自动标记为逾期')
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            email_tasks.append((user.email, user.username, book.title, borrow_date.strftime('%Y-%m-%d %H:%M')))
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            changed_user_ids.add(user.id)
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            changed_book_ids.add(book.id)
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            logger.exception(
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                "处理逾期预约失败 record_id=%s book_id=%s user_id=%s",
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                getattr(record, 'id', None),
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                getattr(record, 'book_id', None),
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                getattr(record, 'user_id', None),
            # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            nested.rollback()
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            continue

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if count > 0:
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.commit()
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.rollback()
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logger.exception("批量提交逾期预约更新失败")
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return 0
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 从指定模块导入类、函数或变量，简化后续代码引用。
            from utils.cache import cache_delete_pattern
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            cache_delete_pattern('dashboard_stats:*')
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            pass
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 从指定模块导入类、函数或变量，简化后续代码引用。
            from socketio_emitters import emit_borrow_status, emit_reservation_changed, emit_stock_changed
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            emit_reservation_changed('expired')
            # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
            for user_id in changed_user_ids:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                emit_borrow_status(user_id)
            # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
            for book_id in changed_book_ids:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                emit_stock_changed(book_id)
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            pass
        # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for email_args in email_tasks:
            # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
            try:
                # 从指定模块导入类、函数或变量，简化后续代码引用。
                from email_utils import send_expiry_email
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                threading.Thread(target=send_expiry_email, args=email_args, daemon=True).start()
            # 异常处理分支，用于回滚、记录日志或返回错误响应。
            except Exception:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                logger.warning("逾期预约邮件任务启动失败", exc_info=True)

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return count
