from datetime import datetime, timedelta, timezone

from flask_login import LoginManager
from flask_socketio import SocketIO
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
login_manager = LoginManager()
socketio = SocketIO()

CST = timezone(timedelta(hours=8))


def cst_now():
    """获取当前北京时间（带时区信息）"""
    return datetime.now(CST)


def naive_cst_now():
    """获取当前北京时间（无时区信息，用于与数据库 naive datetime 列比较）"""
    return datetime.now(CST).replace(tzinfo=None)
