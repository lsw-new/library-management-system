# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import hashlib
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_hash_cache: dict[str, str] = {}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `get_file_hash` 函数，封装一段可复用的后端处理流程。
def get_file_hash(filepath: str, length: int = 8) -> str:
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if filepath in _hash_cache:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return _hash_cache[filepath]
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    full_path = os.path.join('static', filepath)
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not os.path.exists(full_path):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return ''
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
    with open(full_path, 'rb') as f:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        file_hash = hashlib.md5(f.read()).hexdigest()[:length]
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _hash_cache[filepath] = file_hash
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return file_hash
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `versioned_url` 函数，封装一段可复用的后端处理流程。
def versioned_url(filename: str) -> str:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    file_hash = get_file_hash(filename)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    base_url = f'/static/{filename}'
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f'{base_url}?v={file_hash}' if file_hash else base_url
