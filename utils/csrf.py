# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import secrets
# 从指定模块导入类、函数或变量，简化后续代码引用。
from hmac import compare_digest

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import request, session


# 定义 `get_csrf_token` 函数，封装一段可复用的后端处理流程。
def get_csrf_token(session_key: str) -> str:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    token = session.get(session_key)
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not token:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        token = secrets.token_urlsafe(32)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        session[session_key] = token
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return token


# 定义 `validate_csrf_token` 函数，封装一段可复用的后端处理流程。
def validate_csrf_token(session_key: str) -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    token = session.get(session_key)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    submitted = request.headers.get('X-CSRF-Token') or request.form.get('csrf_token')
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return bool(token and submitted and compare_digest(submitted, token))
