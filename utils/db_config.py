# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 从指定模块导入类、函数或变量，简化后续代码引用。
from urllib.parse import urlparse

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import current_app

# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db


# 定义 `_get_db_config` 函数，封装一段可复用的后端处理流程。
def _get_db_config() -> dict:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    uri = current_app.config['SQLALCHEMY_DATABASE_URI']
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    parsed = urlparse(uri)
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'host': parsed.hostname or '127.0.0.1',
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'port': parsed.port or 3306,
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'user': parsed.username or 'root',
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'password': parsed.password or '',
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        'database': parsed.path.lstrip('/').split('?')[0] if parsed.path else 'library_db',
        # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        'charset': 'utf8mb4',
    # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
    }


# 定义 `refresh_sqlalchemy_engines` 函数，封装一段可复用的后端处理流程。
def refresh_sqlalchemy_engines() -> None:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    extension = current_app.extensions.get('sqlalchemy')
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not extension:
        # 显式结束当前分支或作为占位语句，保持代码结构完整。
        return

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    app_obj = current_app._get_current_object()
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    basic_uri = current_app.config.get('SQLALCHEMY_DATABASE_URI')
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engine_options = extension._engine_options.copy()
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engine_options.update(current_app.config.get('SQLALCHEMY_ENGINE_OPTIONS', {}))
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engine_options['url'] = basic_uri

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engines = extension._app_engines.setdefault(app_obj, {})
    # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for engine in engines.values():
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        engine.dispose()
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engines.clear()

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    echo = current_app.config.get('SQLALCHEMY_ECHO', False)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engine_options.setdefault('echo', echo)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    engine_options.setdefault('echo_pool', echo)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    extension._apply_driver_defaults(engine_options, app_obj)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    extension._make_metadata(None)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    engines[None] = extension._make_engine(None, engine_options, app_obj)


# 定义 `update_config_file` 函数，封装一段可复用的后端处理流程。
def update_config_file(new_uri: str) -> bool:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    env_path = os.path.join(current_app.root_path, '.env')
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        lines = []
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        found = False
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if os.path.exists(env_path):
            # 上下文管理语句，自动管理资源生命周期或事务边界。
            with open(env_path, 'r', encoding='utf-8') as f:
                # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                lines = f.read().splitlines()

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        updated_lines = []
        # 循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for line in lines:
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if line.strip().startswith('DATABASE_URL='):
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                updated_lines.append(f'DATABASE_URL={new_uri}')
                # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                found = True
            # 条件判断的兜底分支，处理前面条件没有命中的场景。
            else:
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                updated_lines.append(line)

        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not found:
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if updated_lines and updated_lines[-1].strip():
                # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                updated_lines.append('')
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            updated_lines.append(f'DATABASE_URL={new_uri}')

        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with open(env_path, 'w', encoding='utf-8') as f:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            f.write('\n'.join(updated_lines) + '\n')

        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        os.environ['DATABASE_URL'] = new_uri
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        current_app.config['SQLALCHEMY_DATABASE_URI'] = new_uri
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.remove()
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        refresh_sqlalchemy_engines()
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return True
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        current_app.logger.exception('更新数据库配置失败')
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
