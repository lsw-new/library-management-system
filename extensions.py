# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import datetime, timedelta, timezone
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import LoginManager
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_socketio import SocketIO
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_sqlalchemy import SQLAlchemy
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
db = SQLAlchemy()
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
login_manager = LoginManager()
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
socketio = SocketIO()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
CST = timezone(timedelta(hours=8))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `cst_now` 函数，封装一段可复用的后端处理流程。
def cst_now():
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """获取当前北京时间（带时区信息）"""
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return datetime.now(CST)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `naive_cst_now` 函数，封装一段可复用的后端处理流程。
def naive_cst_now():
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """获取当前北京时间（无时区信息，用于与数据库 naive datetime 列比较）"""
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return datetime.now(CST).replace(tzinfo=None)
