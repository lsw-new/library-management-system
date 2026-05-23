import json
import logging

logger = logging.getLogger(__name__)

_redis_client = None


def init_cache(redis_url: str) -> None:
    global _redis_client
    try:
        import redis
        _redis_client = redis.from_url(redis_url, decode_responses=True, socket_timeout=1)
        _redis_client.ping()
        logger.info("Redis 缓存已连接: %s", redis_url)
    except Exception:
        _redis_client = None
        logger.warning("Redis 不可用，缓存功能已禁用")


def get_redis():
    return _redis_client


def cache_get(key: str):
    if not _redis_client:
        return None
    try:
        data = _redis_client.get(key)
        return json.loads(data) if data else None
    except Exception:
        logger.debug("Redis cache get failed for key=%s", key, exc_info=True)
        return None


def cache_set(key: str, value, ttl_seconds: int = 30) -> None:
    if not _redis_client:
        return
    try:
        _redis_client.setex(key, ttl_seconds, json.dumps(value, ensure_ascii=False))
    except Exception:
        logger.debug("Redis cache operation failed", exc_info=True)


def cache_delete(key: str) -> None:
    if not _redis_client:
        return
    try:
        _redis_client.delete(key)
    except Exception:
        logger.debug("Redis cache operation failed", exc_info=True)


def cache_delete_pattern(pattern: str) -> None:
    if not _redis_client:
        return
    try:
        cursor = 0
        while True:
            cursor, keys = _redis_client.scan(cursor, match=pattern, count=100)
            if keys:
                _redis_client.delete(*keys)
            if cursor == 0:
                break
    except Exception:
        logger.debug("Redis cache operation failed", exc_info=True)
