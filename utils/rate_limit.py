import threading
import time
from collections import defaultdict, deque
from collections.abc import Callable
from functools import wraps

from flask import flash, jsonify, redirect, request

_RATE_LIMIT_BUCKETS: dict[str, deque[float]] = defaultdict(deque)
_RATE_LIMIT_LOCK = threading.Lock()


def _rate_limit_identity(identity: str | None = None) -> str:
    return identity or request.remote_addr or 'unknown'


def _rate_limit_key(scope: str, identity: str | None = None) -> str:
    return f'{scope}:{_rate_limit_identity(identity)}'


def is_rate_limited(scope: str, limit: int, window_seconds: int, identity: str | None = None) -> bool:
    now = time.monotonic()
    key = _rate_limit_key(scope, identity)
    with _RATE_LIMIT_LOCK:
        bucket = _RATE_LIMIT_BUCKETS[key]
        while bucket and now - bucket[0] >= window_seconds:
            bucket.popleft()
        if len(bucket) >= limit:
            return True
        bucket.append(now)
    return False


def rate_limit(scope: str, limit: int, window_seconds: int, message: str) -> Callable[[Callable], Callable]:
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
