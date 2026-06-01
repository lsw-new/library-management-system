# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import datetime
# 从指定模块导入类、函数或变量，简化后续代码引用。
from logging.handlers import RotatingFileHandler

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import current_app
# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import current_user

# 从指定模块导入类、函数或变量，简化后续代码引用。
from .helpers import get_client_ip

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_logger = logging.getLogger(__name__)

# 已有 Python 注释，说明附近代码的目的、约束或注意事项。
# 安全的默认日志目录：项目根目录下的 logs/（避免使用 static/logs/ 被 Nginx 公开）
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_DEFAULT_LOG_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'logs')


# 定义 `get_user_logger` 函数，封装一段可复用的后端处理流程。
def get_user_logger(username: str | None = None) -> logging.Logger:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if username is None:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if current_user.is_authenticated:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            username = current_user.username
        # 条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            username = 'guest'

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    today = datetime.now().strftime('%Y-%m-%d')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    log_folder = current_app.config.get('LOG_FOLDER', _DEFAULT_LOG_DIR)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    os.makedirs(log_folder, exist_ok=True)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    log_filename = f"{username}_{today}.log"
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    log_path = os.path.join(log_folder, log_filename)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    logger = logging.getLogger(f'user_{username}_{today}')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not logger.handlers:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.setLevel(logging.INFO)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        handler = RotatingFileHandler(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            log_path,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            maxBytes=10 * 1024 * 1024,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            backupCount=5,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            encoding='utf-8'
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        formatter = logging.Formatter(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            '%(asctime)s [%(levelname)s] %(message)s',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            datefmt='%Y-%m-%d %H:%M:%S'
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        handler.setFormatter(formatter)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.addHandler(handler)
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return logger


# 定义 `log_action` 函数，封装一段可复用的后端处理流程。
def log_action(action: str, details: str = '', username: str | None = None) -> None:
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        logger = get_user_logger(username)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        ip = get_client_ip()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        log_message = f"[{ip}] {action}"
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if details:
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            log_message += f" - {details}"
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.info(log_message)

        # 从指定模块导入类、函数或变量，简化后续代码引用。
        from models import LoginHistory, db

        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if current_user and current_user.is_authenticated:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_id = current_user.id
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            username_snapshot = current_user.username
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        elif username:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_id = 0
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            username_snapshot = username
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_type = 'guest'
        # 条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_id = 0
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            username_snapshot = 'system'
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user_type = 'system'

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        log_record = LoginHistory(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_id=user_id,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            username_snapshot=username_snapshot,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_type=user_type,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ip_address=ip,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            action=action,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            details=details,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            is_online=False
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.add(log_record)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 从指定模块导入类、函数或变量，简化后续代码引用。
            from socketio_emitters import emit_new_log
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            emit_new_log({
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'id': log_record.id,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'username': username_snapshot,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'user_type': user_type,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'ip': ip,
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                'time': log_record.login_time.strftime('%Y-%m-%d %H:%M:%S'),
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'action': action,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'details': details,
                # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'is_online': False,
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            })
        # 异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 显式结束当前分支或作为占位语句，保持代码结构完整。
            pass
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        _logger.warning("log_action failed", exc_info=True)
