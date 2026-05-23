import secrets
from hmac import compare_digest

from flask import request, session


def get_csrf_token(session_key: str) -> str:
    token = session.get(session_key)
    if not token:
        token = secrets.token_urlsafe(32)
        session[session_key] = token
    return token


def validate_csrf_token(session_key: str) -> bool:
    token = session.get(session_key)
    submitted = request.headers.get('X-CSRF-Token') or request.form.get('csrf_token')
    return bool(token and submitted and compare_digest(submitted, token))
