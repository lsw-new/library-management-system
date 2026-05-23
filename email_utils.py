import logging
import os
import random
import smtplib
import string
from hmac import compare_digest
from datetime import timedelta
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import formataddr
from extensions import db

from email_templates import (
    build_verification_email,
    build_borrow_notification_email,
    build_rejection_email,
    build_expiry_email,
    _CODE_TTL_MINUTES,
    _html_text,
)

logger = logging.getLogger(__name__)

_SMTP_SERVER = "smtp.qq.com"
_SMTP_PORT = 587
_SENDER_EMAIL = os.environ.get("SMTP_SENDER_EMAIL", "")
_SENDER_PASSWORD = os.environ.get("SMTP_SENDER_PASSWORD", "")
_SUBJECT_MAX_LENGTH = 120


def _sanitize_header(value: object, max_length: int | None = None) -> str:
    sanitized = ' '.join(str(value).split())
    return sanitized[:max_length] if max_length else sanitized


def _mask_email(email: str) -> str:
    local, sep, domain = email.partition('@')
    if not sep:
        return '<invalid-email>'
    visible = local[:2] if len(local) > 2 else local[:1]
    return f'{visible}***@{domain}'


def generate_code(length: int = 6) -> str:
    return ''.join(random.choices(string.digits, k=length))


def _send_email(to_email: str, subject: str, html_content: str) -> bool:
    if not _SENDER_EMAIL or not _SENDER_PASSWORD:
        logger.error("邮件发送失败：SMTP 未配置")
        return False
    safe_to_email = _sanitize_header(to_email)
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = _sanitize_header(subject, _SUBJECT_MAX_LENGTH)
        msg['From'] = formataddr(('景艺大图书馆', _SENDER_EMAIL))
        msg['To'] = safe_to_email
        msg.attach(MIMEText(html_content, 'html', 'utf-8'))
        with smtplib.SMTP(_SMTP_SERVER, _SMTP_PORT) as server:
            server.starttls()
            server.login(_SENDER_EMAIL, _SENDER_PASSWORD)
            server.send_message(msg)
        return True
    except smtplib.SMTPException as exc:
        logger.error(
            "邮件发送失败 recipient=%s error=%s",
            _mask_email(safe_to_email),
            exc.__class__.__name__,
        )
        return False
    except Exception:
        logger.error("邮件发送失败 recipient=%s", _mask_email(safe_to_email), exc_info=True)
        return False


def send_verification_email(to_email: str, code: str) -> bool:
    html_content = build_verification_email(code)
    return _send_email(to_email, '景艺大图书馆 — 邮箱验证码', html_content)


def store_verification_code(email: str, code: str) -> bool:
    from models import VerificationCode
    from extensions import naive_cst_now
    now = naive_cst_now()
    expires_at = now + timedelta(minutes=_CODE_TTL_MINUTES)

    try:
        record = VerificationCode.query.filter_by(email=email).first()
        if record:
            record.code = code
            record.expires_at = expires_at
            record.created_at = now
        else:
            db.session.add(VerificationCode(email=email, code=code, expires_at=expires_at))

        VerificationCode.query.filter(VerificationCode.expires_at < now).delete()
        db.session.commit()
        return True
    except Exception:
        db.session.rollback()
        logger.error("验证码存储失败 email=%s", _mask_email(email), exc_info=True)
        return False


def delete_verification_code(email: str) -> None:
    from models import VerificationCode
    try:
        VerificationCode.query.filter_by(email=email).delete()
        db.session.commit()
    except Exception:
        db.session.rollback()
        logger.error("验证码清理失败 email=%s", _mask_email(email), exc_info=True)


def verify_code(email: str, code: str) -> tuple[bool, str]:
    from models import VerificationCode
    from extensions import naive_cst_now
    now = naive_cst_now()
    record = VerificationCode.query.filter_by(email=email).first()

    if not record:
        return False, "验证码不存在或已过期"

    if now > record.expires_at:
        db.session.delete(record)
        db.session.commit()
        return False, "验证码已过期"

    if compare_digest(record.code, code):
        db.session.delete(record)
        db.session.commit()
        return True, "验证成功"

    return False, "验证码错误"


def send_code_to_email(email: str) -> tuple[bool, str]:
    code = generate_code()
    # 先存库再发邮件，确保验证码不会丢失
    if not store_verification_code(email, code):
        return False, "验证码存储失败，请稍后重试"
    if send_verification_email(email, code):
        return True, "验证码已发送，请查收邮件"
    # 发送失败，清理已存储的验证码
    delete_verification_code(email)
    return False, "验证码发送失败，请稍后重试"


def send_borrow_notification_email(to_email: str, username: str, book_title: str,
                                   borrow_date: str, return_date: str | None) -> bool:
    return_display = return_date if return_date else '未设置'
    safe_username = _html_text(username)
    safe_book_title = _html_text(book_title)
    safe_borrow_date = _html_text(borrow_date)
    safe_return_display = _html_text(return_display)
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)

    html_content = build_borrow_notification_email(
        safe_username, safe_book_title, safe_borrow_date, safe_return_display
    )
    return _send_email(to_email, f'景艺大图书馆 — 图书预约成功《{subject_book_title}》', html_content)


def send_rejection_email(to_email: str, username: str, book_title: str,
                         reject_date: str) -> bool:
    safe_username = _html_text(username)
    safe_book_title = _html_text(book_title)
    safe_reject_date = _html_text(reject_date)
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)

    html_content = build_rejection_email(safe_username, safe_book_title, safe_reject_date)
    return _send_email(to_email, f'景艺大图书馆 — 预约被拒绝《{subject_book_title}》', html_content)


def send_expiry_email(to_email: str, username: str, book_title: str,
                      borrow_date: str) -> bool:
    safe_username = _html_text(username)
    safe_book_title = _html_text(book_title)
    safe_borrow_date = _html_text(borrow_date)
    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)

    html_content = build_expiry_email(safe_username, safe_book_title, safe_borrow_date)
    return _send_email(to_email, f'景艺大图书馆 — 预约已过期《{subject_book_title}》', html_content)
