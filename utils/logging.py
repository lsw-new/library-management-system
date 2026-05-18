import logging
import os
from datetime import datetime
from logging.handlers import RotatingFileHandler

from flask import current_app
from flask_login import current_user

from .helpers import get_client_ip


def get_user_logger(username: str | None = None) -> logging.Logger:
    if username is None:
        if current_user.is_authenticated:
            username = current_user.username
        else:
            username = 'guest'

    today = datetime.now().strftime('%Y-%m-%d')
    log_folder = current_app.config.get('LOG_FOLDER', 'static/logs')
    os.makedirs(log_folder, exist_ok=True)

    log_filename = f"{username}_{today}.log"
    log_path = os.path.join(log_folder, log_filename)

    logger = logging.getLogger(f'user_{username}_{today}')
    if not logger.handlers:
        logger.setLevel(logging.INFO)
        handler = RotatingFileHandler(
            log_path,
            maxBytes=10 * 1024 * 1024,
            backupCount=5,
            encoding='utf-8'
        )
        formatter = logging.Formatter(
            '%(asctime)s [%(levelname)s] %(message)s',
            datefmt='%Y-%m-%d %H:%M:%S'
        )
        handler.setFormatter(formatter)
        logger.addHandler(handler)
    return logger


def log_action(action: str, details: str = '', username: str | None = None) -> None:
    try:
        logger = get_user_logger(username)
        ip = get_client_ip()
        log_message = f"[{ip}] {action}"
        if details:
            log_message += f" - {details}"
        logger.info(log_message)

        from models import LoginHistory, db

        if current_user and current_user.is_authenticated:
            user_id = current_user.id
            username_snapshot = current_user.username
            user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
        elif username:
            user_id = 0
            username_snapshot = username
            user_type = 'guest'
        else:
            user_id = 0
            username_snapshot = 'system'
            user_type = 'system'

        log_record = LoginHistory(
            user_id=user_id,
            username_snapshot=username_snapshot,
            user_type=user_type,
            ip_address=ip,
            action=action,
            details=details,
            is_online=False
        )
        db.session.add(log_record)
        db.session.commit()
    except Exception:
        pass
