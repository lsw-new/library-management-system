# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import random
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import smtplib
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import string
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from hmac import compare_digest
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import timedelta
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from email.mime.multipart import MIMEMultipart
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from email.mime.text import MIMEText
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from email.utils import formataddr
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from email_templates import (
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_verification_email,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_borrow_notification_email,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_rejection_email,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_expiry_email,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_password_reset_email,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    _CODE_TTL_MINUTES,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    _html_text,
# 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
logger = logging.getLogger(__name__)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SMTP_SERVER = "smtp.qq.com"
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SMTP_PORT = 587
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SENDER_EMAIL = os.environ.get("SMTP_SENDER_EMAIL", "")
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SENDER_PASSWORD = os.environ.get("SMTP_SENDER_PASSWORD", "")
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SUBJECT_MAX_LENGTH = 120
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_sanitize_header` 函数，封装一段可复用的后端处理流程。
def _sanitize_header(value: object, max_length: int | None = None) -> str:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sanitized = ' '.join(str(value).split())
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return sanitized[:max_length] if max_length else sanitized
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_mask_email` 函数，封装一段可复用的后端处理流程。
def _mask_email(email: str) -> str:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    local, sep, domain = email.partition('@')
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not sep:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return '<invalid-email>'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    visible = local[:2] if len(local) > 2 else local[:1]
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f'{visible}***@{domain}'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `generate_code` 函数，封装一段可复用的后端处理流程。
def generate_code(length: int = 6) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return ''.join(random.choices(string.digits, k=length))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_send_email` 函数，封装一段可复用的后端处理流程。
def _send_email(to_email: str, subject: str, html_content: str) -> bool:
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not _SENDER_EMAIL or not _SENDER_PASSWORD:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("邮件发送失败：SMTP 未配置")
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_to_email = _sanitize_header(to_email)
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        msg = MIMEMultipart('alternative')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        msg['Subject'] = _sanitize_header(subject, _SUBJECT_MAX_LENGTH)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        msg['From'] = formataddr(('景艺大图书馆', _SENDER_EMAIL))
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        msg['To'] = safe_to_email
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        msg.attach(MIMEText(html_content, 'html', 'utf-8'))
        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with smtplib.SMTP(_SMTP_SERVER, _SMTP_PORT) as server:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            server.starttls()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            server.login(_SENDER_EMAIL, _SENDER_PASSWORD)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            server.send_message(msg)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except smtplib.SMTPException as exc:
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        logger.error(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "邮件发送失败 recipient=%s error=%s",
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            _mask_email(safe_to_email),
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            exc.__class__.__name__,
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("邮件发送失败 recipient=%s", _mask_email(safe_to_email), exc_info=True)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `send_verification_email` 函数，封装一段可复用的后端处理流程。
def send_verification_email(to_email: str, code: str) -> bool:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_verification_email(code)
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, '景艺大图书馆 — 邮箱验证码', html_content)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `store_verification_code` 函数，封装一段可复用的后端处理流程。
def store_verification_code(email: str, code: str) -> bool:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import VerificationCode
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import naive_cst_now
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    expires_at = now + timedelta(minutes=_CODE_TTL_MINUTES)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record = VerificationCode.query.filter_by(email=email).first()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if record:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            record.code = code
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            record.expires_at = expires_at
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            record.created_at = now
        # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.add(VerificationCode(email=email, code=code, expires_at=expires_at))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        VerificationCode.query.filter(VerificationCode.expires_at < now).delete()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("验证码存储失败 email=%s", _mask_email(email), exc_info=True)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `delete_verification_code` 函数，封装一段可复用的后端处理流程。
def delete_verification_code(email: str) -> None:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import VerificationCode
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        VerificationCode.query.filter_by(email=email).delete()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("验证码清理失败 email=%s", _mask_email(email), exc_info=True)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `verify_code` 函数，封装一段可复用的后端处理流程。
def verify_code(email: str, code: str) -> tuple[bool, str]:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import VerificationCode
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import naive_cst_now
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    record = VerificationCode.query.filter_by(email=email).first()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not record:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False, "验证码不存在或已过期"
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if now > record.expires_at:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.delete(record)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False, "验证码已过期"
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if compare_digest(record.code, code):
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.delete(record)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True, "验证成功"
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return False, "验证码错误"
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `send_code_to_email` 函数，封装一段可复用的后端处理流程。
def send_code_to_email(email: str) -> tuple[bool, str]:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    code = generate_code()
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 先存库再发邮件，确保验证码不会丢失
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not store_verification_code(email, code):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False, "验证码存储失败，请稍后重试"
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if send_verification_email(email, code):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True, "验证码已发送，请查收邮件"
    # 逐行注释：已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 发送失败，清理已存储的验证码
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    delete_verification_code(email)
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return False, "验证码发送失败，请稍后重试"
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `send_temp_password_email` 函数，封装一段可复用的后端处理流程。
def send_temp_password_email(to_email: str, username: str, new_password: str) -> tuple[bool, str]:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_password_reset_email(_html_text(username), _html_text(new_password))
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if _send_email(to_email, '景艺大图书馆 — 密码重置通知', html_content):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True, '邮件已发送'
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return False, '邮件发送失败'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `send_borrow_notification_email` 函数，封装一段可复用的后端处理流程。
def send_borrow_notification_email(to_email: str, username: str, book_title: str,
                                   # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                                   borrow_date: str, return_date: str | None) -> bool:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    return_display = return_date if return_date else '未设置'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_username = _html_text(username)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_book_title = _html_text(book_title)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_borrow_date = _html_text(borrow_date)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_return_display = _html_text(return_display)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_borrow_notification_email(
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        safe_username, safe_book_title, safe_borrow_date, safe_return_display
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, f'景艺大图书馆 — 图书预约成功《{subject_book_title}》', html_content)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `send_rejection_email` 函数，封装一段可复用的后端处理流程。
def send_rejection_email(to_email: str, username: str, book_title: str,
                         # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                         reject_date: str) -> bool:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_username = _html_text(username)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_book_title = _html_text(book_title)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_reject_date = _html_text(reject_date)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_rejection_email(safe_username, safe_book_title, safe_reject_date)
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, f'景艺大图书馆 — 预约被拒绝《{subject_book_title}》', html_content)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `send_expiry_email` 函数，封装一段可复用的后端处理流程。
def send_expiry_email(to_email: str, username: str, book_title: str,
                      # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                      borrow_date: str) -> bool:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_username = _html_text(username)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_book_title = _html_text(book_title)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_borrow_date = _html_text(borrow_date)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_expiry_email(safe_username, safe_book_title, safe_borrow_date)
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, f'景艺大图书馆 — 预约已过期《{subject_book_title}》', html_content)
