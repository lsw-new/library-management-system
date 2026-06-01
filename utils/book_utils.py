# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os

# 从指定模块导入类、函数或变量，简化后续代码引用。
from werkzeug.utils import secure_filename

# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import cst_now
# 从指定模块导入类、函数或变量，简化后续代码引用。
from .helpers import allowed_file

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
BOOK_LOCATION_MAX_LENGTH = 100


# 定义 `save_book_image` 函数，封装一段可复用的后端处理流程。
def save_book_image(file_storage, upload_folder: str, allowed_extensions: set,
                    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                    old_filename: str | None = None) -> str | None:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not file_storage or not file_storage.filename:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not allowed_file(file_storage.filename, allowed_extensions):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    filename = secure_filename(file_storage.filename) or 'book.jpg'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    timestamp = cst_now().strftime('%Y%m%d%H%M%S')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    image_filename = f'{timestamp}_{filename}'
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    file_storage.save(os.path.join(upload_folder, image_filename))
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if old_filename:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        old_path = os.path.join(upload_folder, old_filename)
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if os.path.exists(old_path):
            # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
            try:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                os.remove(old_path)
            # 异常处理分支，用于回滚、记录日志或返回错误响应。
            except OSError:
                # 显式结束当前分支或作为占位语句，保持代码结构完整。
                pass
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return image_filename


# 定义 `validate_book_form` 函数，封装一段可复用的后端处理流程。
def validate_book_form(form, defaults=None) -> tuple[dict | None, str | None]:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    title = (form.get('title') or '').strip()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    author = (form.get('author') or '').strip()
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not title or not author:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '书名和作者为必填字段'

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    location = (form.get('location') or '').strip() or None
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if location and len(location) > BOOK_LOCATION_MAX_LENGTH:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, f'书籍位置不能超过{BOOK_LOCATION_MAX_LENGTH}个字符'

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    defaults = defaults or {}
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        stock = int(form.get('stock', defaults.get('stock', 0)))
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        total = int(form.get('total', defaults.get('total', stock)))
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except (TypeError, ValueError):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '库存必须是数字'

    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if stock < 0 or total < 0:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None, '库存不能为负数'
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if total < stock:
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if defaults:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return None, '总库存不能小于当前库存'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        total = stock

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'title': title,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'author': author,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'isbn': (form.get('isbn') or '').strip() or None,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'publisher': (form.get('publisher') or '').strip(),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'location': location,
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'category': (form.get('category') or '').strip(),
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'stock': stock,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'total': total,
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    }, None
