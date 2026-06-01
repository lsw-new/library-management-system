# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import time
# 从指定模块导入类、函数或变量，简化后续代码引用。
from collections.abc import Callable
# 从指定模块导入类、函数或变量，简化后续代码引用。
from functools import wraps

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import flash, jsonify, redirect, request


# 定义 `_get_redis` 函数，封装一段可复用的后端处理流程。
def _get_redis():
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 从指定模块导入类、函数或变量，简化后续代码引用。
        from utils.cache import get_redis
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return get_redis()
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None


# 定义 `_rate_limit_identity` 函数，封装一段可复用的后端处理流程。
def _rate_limit_identity(identity: str | None = None) -> str:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return identity or request.remote_addr or 'unknown'


# 定义 `is_rate_limited` 函数，封装一段可复用的后端处理流程。
def is_rate_limited(scope: str, limit: int, window_seconds: int,
                    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    identity: str | None = None) -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    ident = _rate_limit_identity(identity)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    key = f'rl:{scope}:{ident}'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    r = _get_redis()
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not r:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        now = time.time()
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        pipe = r.pipeline()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        pipe.zremrangebyscore(key, 0, now - window_seconds)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        pipe.zcard(key)
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        pipe.zadd(key, {str(now): now})
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        pipe.expire(key, window_seconds)
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        results = pipe.execute()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return results[1] >= limit
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False


# 定义 `rate_limit` 函数，封装一段可复用的后端处理流程。
def rate_limit(scope: str, limit: int, window_seconds: int,
               # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
               message: str) -> Callable[[Callable], Callable]:
    # 定义 `decorator` 函数，封装一段可复用的后端处理流程。
    def decorator(view: Callable) -> Callable:
        # 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
        @wraps(view)
        # 定义 `wrapper` 函数，封装一段可复用的后端处理流程。
        def wrapper(*args, **kwargs):
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if request.method == 'POST' and is_rate_limited(scope, limit, window_seconds):
                # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
                if request.is_json:
                    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                    return jsonify({'success': False, 'message': message}), 429
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                flash(message, 'danger')
                # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return redirect(request.url), 303
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return view(*args, **kwargs)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return wrapper
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return decorator
