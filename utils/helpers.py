# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import request
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `get_user_type` 函数，封装一段可复用的后端处理流程。
def get_user_type(user) -> str:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import Admin
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return 'admin' if isinstance(user, Admin) else 'user'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `get_client_ip` 函数，封装一段可复用的后端处理流程。
def get_client_ip() -> str:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    forwarded_for = request.headers.get('X-Forwarded-For', '')
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if forwarded_for:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return forwarded_for.split(',')[0].strip()
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return request.remote_addr or '未知'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `is_mobile_device` 函数，封装一段可复用的后端处理流程。
def is_mobile_device() -> bool:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_agent = request.headers.get('User-Agent', '').lower()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    mobile_keywords = [
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry',
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'windows phone', 'opera mini', 'iemobile', 'webos', 'palm'
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    ]
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return any(keyword in user_agent for keyword in mobile_keywords)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `allowed_file` 函数，封装一段可复用的后端处理流程。
def allowed_file(filename: str, allowed_extensions: set[str]) -> bool:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
ALLOWED_MIMES = {'image/png', 'image/jpeg', 'image/gif', 'image/webp'}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_IMAGE_SIGNATURES: dict[bytes, str] = {
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    b'\x89PNG':      'image/png',
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    b'\xff\xd8\xff': 'image/jpeg',
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    b'GIF87a':       'image/gif',
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    b'GIF89a':       'image/gif',
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    b'RIFF':         'image/webp',
# 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `validate_image_content` 函数，封装一段可复用的后端处理流程。
def validate_image_content(file_storage) -> bool:
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    """通过检查文件头的 magic bytes 验证文件是否为合法图片。

    读取前 16 字节后会自动将文件指针 seek 回起始位置，
    以便后续代码可以正常读取文件内容。
    """
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    header = file_storage.read(16)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    file_storage.seek(0)
    # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for sig in _IMAGE_SIGNATURES:
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if header.startswith(sig):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return True
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return False
