import os
import secrets
from pathlib import Path


def load_env_file() -> None:
    env_path = Path(__file__).with_name('.env')
    if not env_path.exists():
        return
    for line in env_path.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, value = line.split('=', 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"\''))


load_env_file()

DEV_SECRET_KEY = 'dev-only-secret-key-change-before-deploy'
DEV_DATABASE_URI = 'mysql+pymysql://library_user:dev_pass@mysql:3306/library_db?charset=utf8mb4'
DB_POOL_SIZE = 10
DB_POOL_RECYCLE_SECONDS = 3600
DB_POOL_MAX_OVERFLOW = 20
DB_POOL_TIMEOUT_SECONDS = 30


def is_production() -> bool:
    app_env = os.environ.get('APP_ENV', '').lower()
    flask_env = os.environ.get('FLASK_ENV', '').lower()
    return app_env == 'production' or flask_env == 'production'


def get_secret_key() -> str:
    secret_key = os.environ.get('SECRET_KEY')
    if secret_key and not (is_production() and secret_key == DEV_SECRET_KEY):
        return secret_key
    if is_production():
        raise RuntimeError('生产环境必须设置安全的 SECRET_KEY 环境变量')
    return os.environ.setdefault('SECRET_KEY', secrets.token_urlsafe(32))


def get_database_uri() -> str:
    database_url = os.environ.get('DATABASE_URL')
    if database_url and not (is_production() and database_url == DEV_DATABASE_URI):
        return database_url
    if is_production():
        raise RuntimeError('生产环境必须设置安全的 DATABASE_URL 环境变量')
    return DEV_DATABASE_URI


class Config:
    SECRET_KEY = get_secret_key()

    SQLALCHEMY_DATABASE_URI = get_database_uri()

    SQLALCHEMY_TRACK_MODIFICATIONS = False

    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_size': DB_POOL_SIZE,
        'pool_recycle': DB_POOL_RECYCLE_SECONDS,
        'pool_pre_ping': True,
        'max_overflow': DB_POOL_MAX_OVERFLOW,
        'pool_timeout': DB_POOL_TIMEOUT_SECONDS,
    }

    # ── Session Cookie 安全配置 ──
    SESSION_COOKIE_SECURE = is_production()
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = 'Lax'
    PERMANENT_SESSION_LIFETIME = 43200  # 12小时
