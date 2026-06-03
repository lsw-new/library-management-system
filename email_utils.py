# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import random
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import smtplib
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import string
# 从指定模块导入类、函数或变量，简化后续代码引用。
from hmac import compare_digest
# 从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import timedelta
# 从指定模块导入类、函数或变量，简化后续代码引用。
from email.message import EmailMessage
# 从指定模块导入类、函数或变量，简化后续代码引用。
from email.utils import formataddr
# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db

# 从指定模块导入类、函数或变量，简化后续代码引用。
from email_templates import (
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_verification_email,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_borrow_notification_email,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_rejection_email,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_expiry_email,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_password_reset_email,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    _CODE_TTL_MINUTES,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    _html_text,
# 关闭前面打开的复合表达式、集合字面量或函数调用结构。
)

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
logger = logging.getLogger(__name__)

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SMTP_SERVER = "smtp.qq.com"
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SMTP_PORT = 587
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SENDER_EMAIL = os.environ.get("SMTP_SENDER_EMAIL", "")
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SENDER_PASSWORD = os.environ.get("SMTP_SENDER_PASSWORD", "")
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_SUBJECT_MAX_LENGTH = 120


# 定义 `_sanitize_header` 函数，封装一段可复用的后端处理流程。
def _sanitize_header(value: object, max_length: int | None = None) -> str:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sanitized = ' '.join(str(value).split())
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return sanitized[:max_length] if max_length else sanitized


def _smtp_error_detail(exc: smtplib.SMTPException) -> str:
    code = getattr(exc, 'smtp_code', None)
    raw_error = getattr(exc, 'smtp_error', '')
    if isinstance(raw_error, bytes):
        raw_error = raw_error.decode('utf-8', errors='replace')
    detail = _sanitize_header(raw_error, 300)
    if code and detail:
        return f'{code} {detail}'
    if code:
        return str(code)
    return detail or exc.__class__.__name__


def _build_message(to_email: str, subject: str, plain_content: str,
                   html_content: str | None = None) -> EmailMessage:
    msg = EmailMessage()
    msg['Subject'] = _sanitize_header(subject, _SUBJECT_MAX_LENGTH)
    msg['From'] = formataddr(('景艺大图书馆', _SENDER_EMAIL))
    msg['To'] = to_email
    msg.set_content(plain_content, subtype='plain', charset='utf-8')
    if html_content:
        msg.add_alternative(html_content, subtype='html')
    return msg


def _send_message(msg: EmailMessage, to_email: str) -> None:
    with smtplib.SMTP(_SMTP_SERVER, _SMTP_PORT, timeout=15) as server:
        server.starttls()
        server.login(_SENDER_EMAIL, _SENDER_PASSWORD)
        server.send_message(msg, from_addr=_SENDER_EMAIL, to_addrs=[to_email])


# 定义 `_mask_email` 函数，封装一段可复用的后端处理流程。
def _mask_email(email: str) -> str:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    local, sep, domain = email.partition('@')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not sep:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return '<invalid-email>'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    visible = local[:2] if len(local) > 2 else local[:1]
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f'{visible}***@{domain}'


# 定义 `generate_code` 函数，封装一段可复用的后端处理流程。
def generate_code(length: int = 6) -> str:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return ''.join(random.choices(string.digits, k=length))


# 定义 `_send_email` 函数，封装一段可复用的后端处理流程。
def _send_email(to_email: str, subject: str, html_content: str,
                plain_content: str | None = None) -> bool:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not _SENDER_EMAIL or not _SENDER_PASSWORD:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("邮件发送失败：SMTP 未配置")
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_to_email = _sanitize_header(to_email)
    has_plain_fallback = plain_content is not None
    plain_content = plain_content or '这是一封系统通知邮件，请使用支持 HTML 的邮件客户端查看完整内容。'
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        msg = _build_message(safe_to_email, subject, plain_content, html_content)
        _send_message(msg, safe_to_email)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True
    except smtplib.SMTPDataError as exc:
        logger.error(
            "邮件内容被 SMTP 拒收 recipient=%s detail=%s",
            _mask_email(safe_to_email),
            _smtp_error_detail(exc),
        )
        if not has_plain_fallback:
            return False
        try:
            msg = _build_message(safe_to_email, subject, plain_content)
            _send_message(msg, safe_to_email)
            logger.warning("HTML 邮件被拒收，已改用纯文本验证码邮件 recipient=%s", _mask_email(safe_to_email))
            return True
        except smtplib.SMTPException as retry_exc:
            logger.error(
                "纯文本邮件发送失败 recipient=%s detail=%s",
                _mask_email(safe_to_email),
                _smtp_error_detail(retry_exc),
            )
        except Exception:
            logger.error("纯文本邮件发送失败 recipient=%s", _mask_email(safe_to_email), exc_info=True)
        return False
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except smtplib.SMTPException as exc:
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        logger.error(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            "邮件发送失败 recipient=%s detail=%s",
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            _mask_email(safe_to_email),
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            _smtp_error_detail(exc),
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("邮件发送失败 recipient=%s", _mask_email(safe_to_email), exc_info=True)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False


# 定义 `send_verification_email` 函数，封装一段可复用的后端处理流程。
def send_verification_email(to_email: str, code: str) -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_verification_email(code)
    plain_content = (
        f"景艺大图书馆邮箱验证码\n\n"
        f"你的验证码是：{code}\n"
        f"有效期 {_CODE_TTL_MINUTES} 分钟，仅限本次使用。\n"
        f"请勿将此验证码分享给任何人；如非本人操作，请忽略此邮件。"
    )
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, '景艺大图书馆 — 邮箱验证码', html_content, plain_content)


# 定义 `store_verification_code` 函数，封装一段可复用的后端处理流程。
def store_verification_code(email: str, code: str) -> bool:
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from models import VerificationCode
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import naive_cst_now
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    expires_at = now + timedelta(minutes=_CODE_TTL_MINUTES)

    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record = VerificationCode.query.filter_by(email=email).first()
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if record:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            record.code = code
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            record.expires_at = expires_at
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            record.created_at = now
        # 条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.add(VerificationCode(email=email, code=code, expires_at=expires_at))

        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        VerificationCode.query.filter(VerificationCode.expires_at < now).delete()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("验证码存储失败 email=%s", _mask_email(email), exc_info=True)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False


# 定义 `delete_verification_code` 函数，封装一段可复用的后端处理流程。
def delete_verification_code(email: str) -> None:
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from models import VerificationCode
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        VerificationCode.query.filter_by(email=email).delete()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("验证码清理失败 email=%s", _mask_email(email), exc_info=True)


# 定义 `verify_code` 函数，封装一段可复用的后端处理流程。
def verify_code(email: str, code: str) -> tuple[bool, str]:
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from models import VerificationCode
    # 从指定模块导入类、函数或变量，简化后续代码引用。
    from extensions import naive_cst_now
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    record = VerificationCode.query.filter_by(email=email).first()

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not record:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False, "验证码不存在或已过期"

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if now > record.expires_at:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.delete(record)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False, "验证码已过期"

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if compare_digest(record.code, code):
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.delete(record)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True, "验证成功"

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return False, "验证码错误"


# 定义 `send_code_to_email` 函数，封装一段可复用的后端处理流程。
def send_code_to_email(email: str) -> tuple[bool, str]:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    code = generate_code()
    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 先存库再发邮件，确保验证码不会丢失
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not store_verification_code(email, code):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False, "验证码存储失败，请稍后重试"
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if send_verification_email(email, code):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True, "验证码已发送，请查收邮件"
    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # 发送失败，清理已存储的验证码
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    delete_verification_code(email)
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return False, "验证码发送失败，请稍后重试"


# 定义 `send_temp_password_email` 函数，封装一段可复用的后端处理流程。
def send_temp_password_email(to_email: str, username: str, new_password: str) -> tuple[bool, str]:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_password_reset_email(_html_text(username), _html_text(new_password))
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if _send_email(to_email, '景艺大图书馆 — 密码重置通知', html_content):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True, '邮件已发送'
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return False, '邮件发送失败'


# 定义 `send_borrow_notification_email` 函数，封装一段可复用的后端处理流程。
def send_borrow_notification_email(to_email: str, username: str, book_title: str,
                                   # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                                   borrow_date: str, return_date: str | None) -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    return_display = return_date if return_date else '未设置'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_username = _html_text(username)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_book_title = _html_text(book_title)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_borrow_date = _html_text(borrow_date)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_return_display = _html_text(return_display)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_borrow_notification_email(
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        safe_username, safe_book_title, safe_borrow_date, safe_return_display
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, f'景艺大图书馆 — 图书预约成功《{subject_book_title}》', html_content)


# 定义 `send_rejection_email` 函数，封装一段可复用的后端处理流程。
def send_rejection_email(to_email: str, username: str, book_title: str,
                         # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                         reject_date: str) -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_username = _html_text(username)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_book_title = _html_text(book_title)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_reject_date = _html_text(reject_date)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_rejection_email(safe_username, safe_book_title, safe_reject_date)
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, f'景艺大图书馆 — 预约被拒绝《{subject_book_title}》', html_content)


# 定义 `send_expiry_email` 函数，封装一段可复用的后端处理流程。
def send_expiry_email(to_email: str, username: str, book_title: str,
                      # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                      borrow_date: str) -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_username = _html_text(username)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_book_title = _html_text(book_title)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    safe_borrow_date = _html_text(borrow_date)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    html_content = build_expiry_email(safe_username, safe_book_title, safe_borrow_date)
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _send_email(to_email, f'景艺大图书馆 — 预约已过期《{subject_book_title}》', html_content)
