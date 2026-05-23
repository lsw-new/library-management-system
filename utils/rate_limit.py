import time
from collections.abc import Callable
from functools import wraps

from flask import flash, jsonify, redirect, request


def _get_redis():
    try:
        from utils.cache import get_redis
        return get_redis()
    except Exception:
        return None


def _rate_limit_identity(identity: str | None = None) -> str:
    return identity or request.remote_addr or 'unknown'


def is_rate_limited(scope: str, limit: int, window_seconds: int,
                    identity: str | None = None) -> bool:
    ident = _rate_limit_identity(identity)
    key = f'rl:{scope}:{ident}'
    r = _get_redis()
    if not r:
        return False
    try:
        now = time.time()
        pipe = r.pipeline()
        pipe.zremrangebyscore(key, 0, now - window_seconds)
        pipe.zcard(key)
        pipe.zadd(key, {str(now): now})
        pipe.expire(key, window_seconds)
        results = pipe.execute()
        return results[1] >= limit
    except Exception:
        return False


def rate_limit(scope: str, limit: int, window_seconds: int,
               message: str) -> Callable[[Callable], Callable]:
    def decorator(view: Callable) -> Callable:
        @wraps(view)
        def wrapper(*args, **kwargs):
            if request.method == 'POST' and is_rate_limited(scope, limit, window_seconds):
                if request.is_json:
                    return jsonify({'success': False, 'message': message}), 429
                flash(message, 'danger')
                return redirect(request.url), 303
            return view(*args, **kwargs)
        return wrapper
    return decorator
