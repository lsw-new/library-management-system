# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from urllib.parse import urlparse
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import current_app
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_get_db_config` 函数，封装一段可复用的后端处理流程。
def _get_db_config() -> dict:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    uri = current_app.config['SQLALCHEMY_DATABASE_URI']
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    parsed = urlparse(uri)
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'host': parsed.hostname or '127.0.0.1',
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'port': parsed.port or 3306,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'user': parsed.username or 'root',
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'password': parsed.password or '',
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'database': parsed.path.lstrip('/').split('?')[0] if parsed.path else 'library_db',
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'charset': 'utf8mb4',
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    }
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `refresh_sqlalchemy_engines` 函数，封装一段可复用的后端处理流程。
def refresh_sqlalchemy_engines() -> None:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    extension = current_app.extensions.get('sqlalchemy')
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not extension:
        # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
        return
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app_obj = current_app._get_current_object()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    basic_uri = current_app.config.get('SQLALCHEMY_DATABASE_URI')
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engine_options = extension._engine_options.copy()
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engine_options.update(current_app.config.get('SQLALCHEMY_ENGINE_OPTIONS', {}))
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engine_options['url'] = basic_uri
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engines = extension._app_engines.setdefault(app_obj, {})
    # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for engine in engines.values():
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        engine.dispose()
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engines.clear()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    echo = current_app.config.get('SQLALCHEMY_ECHO', False)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engine_options.setdefault('echo', echo)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engine_options.setdefault('echo_pool', echo)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    extension._apply_driver_defaults(engine_options, app_obj)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    extension._make_metadata(None)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engines[None] = extension._make_engine(None, engine_options, app_obj)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `update_config_file` 函数，封装一段可复用的后端处理流程。
def update_config_file(new_uri: str) -> bool:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    env_path = os.path.join(current_app.root_path, '.env')
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        lines = []
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        found = False
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if os.path.exists(env_path):
            # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
            with open(env_path, 'r', encoding='utf-8') as f:
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                lines = f.read().splitlines()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        updated_lines = []
        # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for line in lines:
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if line.strip().startswith('DATABASE_URL='):
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                updated_lines.append(f'DATABASE_URL={new_uri}')
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                found = True
            # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
            else:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                updated_lines.append(line)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not found:
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if updated_lines and updated_lines[-1].strip():
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                updated_lines.append('')
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            updated_lines.append(f'DATABASE_URL={new_uri}')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with open(env_path, 'w', encoding='utf-8') as f:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            f.write('\n'.join(updated_lines) + '\n')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        os.environ['DATABASE_URL'] = new_uri
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        current_app.config['SQLALCHEMY_DATABASE_URI'] = new_uri
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.remove()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        refresh_sqlalchemy_engines()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.exception('更新数据库配置失败')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
