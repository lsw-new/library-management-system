# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import secrets
# 从指定模块导入类、函数或变量，简化后续代码引用。
from pathlib import Path


# 定义 `load_env_file` 函数，封装一段可复用的后端处理流程。
def load_env_file() -> None:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    env_path = Path(__file__).with_name('.env')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not env_path.exists():
        # 显式结束当前分支或作为占位语句，保持代码结构完整。
        return
    # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for line in env_path.read_text(encoding='utf-8').splitlines():
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        line = line.strip()
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not line or line.startswith('#') or '=' not in line:
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            continue
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        key, value = line.split('=', 1)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        os.environ.setdefault(key.strip(), value.strip().strip('"\''))


# 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
load_env_file()

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DEV_SECRET_KEY = 'dev-only-secret-key-change-before-deploy'
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DEV_DATABASE_URI = 'mysql+pymysql://library_user:dev_pass@mysql:3306/library_db?charset=utf8mb4'
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DB_POOL_SIZE = 10
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DB_POOL_RECYCLE_SECONDS = 3600
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DB_POOL_MAX_OVERFLOW = 20
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
DB_POOL_TIMEOUT_SECONDS = 30


# 定义 `is_production` 函数，封装一段可复用的后端处理流程。
def is_production() -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app_env = os.environ.get('APP_ENV', '').lower()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    flask_env = os.environ.get('FLASK_ENV', '').lower()
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return app_env == 'production' or flask_env == 'production'


# 定义 `get_secret_key` 函数，封装一段可复用的后端处理流程。
def get_secret_key() -> str:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    secret_key = os.environ.get('SECRET_KEY')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if secret_key and not (is_production() and secret_key == DEV_SECRET_KEY):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return secret_key
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if is_production():
        # 主动抛出异常，把错误交给上层调用者或框架处理。
        raise RuntimeError('生产环境必须设置安全的 SECRET_KEY 环境变量')
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return os.environ.setdefault('SECRET_KEY', secrets.token_urlsafe(32))


# 定义 `get_database_uri` 函数，封装一段可复用的后端处理流程。
def get_database_uri() -> str:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    database_url = os.environ.get('DATABASE_URL')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if database_url and not (is_production() and database_url == DEV_DATABASE_URI):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return database_url
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if is_production():
        # 主动抛出异常，把错误交给上层调用者或框架处理。
        raise RuntimeError('生产环境必须设置安全的 DATABASE_URL 环境变量')
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return DEV_DATABASE_URI


# 定义 `get_engine_options` 函数，封装一段可复用的后端处理流程。
def get_engine_options(database_uri: str) -> dict:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if database_uri.startswith('sqlite:'):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return {}
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pool_size': DB_POOL_SIZE,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pool_recycle': DB_POOL_RECYCLE_SECONDS,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pool_pre_ping': True,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'max_overflow': DB_POOL_MAX_OVERFLOW,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'pool_timeout': DB_POOL_TIMEOUT_SECONDS,
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    }


# 声明 `Config` 类，用于封装相关数据结构、模型能力或业务行为。
class Config:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    SECRET_KEY = get_secret_key()

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    SQLALCHEMY_DATABASE_URI = get_database_uri()

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    SQLALCHEMY_ENGINE_OPTIONS = get_engine_options(SQLALCHEMY_DATABASE_URI)

    # 已有 Python 注释，说明附近代码的目的、约束或注意事项。
    # ── Session Cookie 安全配置 ──
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    SESSION_COOKIE_SECURE = is_production()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    SESSION_COOKIE_HTTPONLY = True
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    SESSION_COOKIE_SAMESITE = 'Lax'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    PERMANENT_SESSION_LIFETIME = 43200  # 12小时
