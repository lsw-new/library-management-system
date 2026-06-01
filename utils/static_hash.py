# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import hashlib
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_hash_cache: dict[str, str] = {}


# 定义 `get_file_hash` 函数，封装一段可复用的后端处理流程。
def get_file_hash(filepath: str, length: int = 8) -> str:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if filepath in _hash_cache:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _hash_cache[filepath]

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    full_path = os.path.join('static', filepath)
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not os.path.exists(full_path):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return ''

    # 上下文管理语句，自动管理资源生命周期或事务边界。
    with open(full_path, 'rb') as f:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        file_hash = hashlib.md5(f.read()).hexdigest()[:length]

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _hash_cache[filepath] = file_hash
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return file_hash


# 定义 `versioned_url` 函数，封装一段可复用的后端处理流程。
def versioned_url(filename: str) -> str:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    file_hash = get_file_hash(filename)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    base_url = f'/static/{filename}'
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f'{base_url}?v={file_hash}' if file_hash else base_url
