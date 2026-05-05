"""
配置文件模块
定义Flask应用的所有配置参数，包括密钥、数据库连接、连接池等
"""
import os  # 导入os模块，用于读取环境变量

class Config:
    """Flask应用配置类"""

    # Flask密钥配置
    # 用于session加密、CSRF保护等安全功能
    # 优先从环境变量读取，如果没有则使用默认值（生产环境必须修改）
    SECRET_KEY = os.environ.get('SECRET_KEY', 'dev-fallback-key-change-in-production-7f3a9b2c')

    # 数据库连接URI配置
    # 格式：mysql+pymysql://用户名:密码@主机:端口/数据库名?字符集
    # 优先从环境变量DATABASE_URL读取，便于不同环境使用不同配置
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        'DATABASE_URL',
        'mysql+pymysql://library_user:dev_pass@mysql:3306/library_db?charset=utf8mb4'
    )

    # 禁用SQLAlchemy的修改追踪功能
    # 设为False可以节省内存，因为我们不需要追踪对象的修改信号
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # 数据库连接池配置
    # 连接池可以复用数据库连接，提高性能，避免频繁创建/销毁连接
    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_size': 10,           # 连接池大小：保持10个活跃连接
        'pool_recycle': 3600,      # 连接回收时间：1小时后回收连接（防止MySQL超时断开）
        'pool_pre_ping': True,     # 使用前测试连接：每次从池中取连接时先ping测试是否有效
        'max_overflow': 20,        # 最大溢出连接数：当pool_size用完后，最多再创建20个临时连接
        'pool_timeout': 30,        # 获取连接的超时时间：等待30秒后抛出异常
    }
