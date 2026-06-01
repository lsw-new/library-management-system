# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint

# 从指定模块导入类、函数或变量，简化后续代码引用。
from .books import register_book_routes
# 从指定模块导入类、函数或变量，简化后续代码引用。
from .profile import register_profile_routes
# 从指定模块导入类、函数或变量，简化后续代码引用。
from .borrows import register_borrow_routes

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
user_bp = Blueprint('user', __name__)

# 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_book_routes(user_bp)
# 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_profile_routes(user_bp)
# 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
register_borrow_routes(user_bp)
