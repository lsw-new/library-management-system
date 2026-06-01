# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .books import register_book_routes
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .profile import register_profile_routes
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .borrows import register_borrow_routes
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
user_bp = Blueprint('user', __name__)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_book_routes(user_bp)
# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_profile_routes(user_bp)
# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_borrow_routes(user_bp)
