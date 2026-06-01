# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 从指定模块导入类、函数或变量，简化后续代码引用。
from contextlib import contextmanager
# 从指定模块导入类、函数或变量，简化后续代码引用。
from functools import wraps

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import jsonify, redirect, url_for, flash, current_app
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import current_user

# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db
# 从指定模块导入类、函数或变量，简化后续代码引用。
from .helpers import is_mobile_device

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_logger = logging.getLogger(__name__)


# 定义 `admin_required` 函数，封装一段可复用的后端处理流程。
def admin_required(json_response: bool = True):
    # 定义 `decorator` 函数，封装一段可复用的后端处理流程。
    def decorator(view):
        # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
        @wraps(view)
        # 定义 `wrapper` 函数，封装一段可复用的后端处理流程。
        def wrapper(*args, **kwargs):
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if is_mobile_device():
                # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                if json_response:
                    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                    return jsonify({'success': False, 'message': '手机端不能进入管理员页面，请切换PC端'}), 403
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                flash('手机端不能进入管理员页面，请切换PC端', 'warning')
                # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return redirect(url_for('auth.login'))
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if not getattr(current_user, 'is_admin', False):
                # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                if json_response:
                    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                    return jsonify({'success': False, 'message': '权限不足'}), 403
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                flash('权限不足', 'danger')
                # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return redirect(url_for('user.index'))
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return view(*args, **kwargs)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return wrapper
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return decorator


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@contextmanager
# 定义 `db_transaction` 函数，封装一段可复用的后端处理流程。
def db_transaction(error_message: str = '操作失败'):
    # 声明 `_Tx` 类，用于封装相关数据结构、模型能力或业务行为。
    class _Tx:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        error = None
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        exception = None
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    tx = _Tx()
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        yield tx
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception as e:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        tx.error = error_message
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        tx.exception = e
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        _logger.exception("db_transaction 失败 [%s]: %s", error_message, e)
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            current_app.logger.exception(e)
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            pass
