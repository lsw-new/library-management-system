# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from werkzeug.utils import secure_filename
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import cst_now
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .helpers import allowed_file
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
BOOK_LOCATION_MAX_LENGTH = 100
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `save_book_image` 函数，封装一段可复用的后端处理流程。
def save_book_image(file_storage, upload_folder: str, allowed_extensions: set,
                    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    old_filename: str | None = None) -> str | None:
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not file_storage or not file_storage.filename:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not allowed_file(file_storage.filename, allowed_extensions):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    filename = secure_filename(file_storage.filename) or 'book.jpg'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    timestamp = cst_now().strftime('%Y%m%d%H%M%S')
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    image_filename = f'{timestamp}_{filename}'
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    file_storage.save(os.path.join(upload_folder, image_filename))
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if old_filename:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        old_path = os.path.join(upload_folder, old_filename)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if os.path.exists(old_path):
            # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
            try:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                os.remove(old_path)
            # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
            except OSError:
                # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
                pass
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return image_filename
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `validate_book_form` 函数，封装一段可复用的后端处理流程。
def validate_book_form(form, defaults=None) -> tuple[dict | None, str | None]:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    title = (form.get('title') or '').strip()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    author = (form.get('author') or '').strip()
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not title or not author:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '书名和作者为必填字段'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    location = (form.get('location') or '').strip() or None
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if location and len(location) > BOOK_LOCATION_MAX_LENGTH:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, f'书籍位置不能超过{BOOK_LOCATION_MAX_LENGTH}个字符'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    defaults = defaults or {}
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        stock = int(form.get('stock', defaults.get('stock', 0)))
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        total = int(form.get('total', defaults.get('total', stock)))
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except (TypeError, ValueError):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '库存必须是数字'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if stock < 0 or total < 0:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '库存不能为负数'
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if total < stock:
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if defaults:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return None, '总库存不能小于当前库存'
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        total = stock
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'title': title,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'author': author,
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'isbn': (form.get('isbn') or '').strip() or None,
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'publisher': (form.get('publisher') or '').strip(),
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'location': location,
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'category': (form.get('category') or '').strip(),
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'stock': stock,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'total': total,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, None
