from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from datetime import datetime, timezone, timedelta

db = SQLAlchemy()
login_manager = LoginManager()

# ==================== 时区配置 ====================
CST = timezone(timedelta(hours=8))

def cst_now():
    """获取当前北京时间（带时区信息）"""
    return datetime.now(CST)


def naive_cst_now():
    """获取当前北京时间（无时区信息，用于与数据库 naive datetime 列比较）"""
    return datetime.now(CST).replace(tzinfo=None)
