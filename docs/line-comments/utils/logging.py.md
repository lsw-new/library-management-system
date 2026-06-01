# utils/logging.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>import logging</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 2 | <code>import os</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 3 | <code>from datetime import datetime</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 4 | <code>from logging.handlers import RotatingFileHandler</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 5 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 6 | <code>from flask import current_app</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 7 | <code>from flask_login import current_user</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 8 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 9 | <code>from .helpers import get_client_ip</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 10 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 11 | <code>_logger = logging.getLogger(__name__)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 12 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 13 | <code># 安全的默认日志目录：项目根目录下的 logs/（避免使用 static/logs/ 被 Nginx 公开）</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 14 | <code>_DEFAULT_LOG_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), &#x27;logs&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 15 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 16 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 17 | <code>def get_user_logger(username: str | None = None) -&gt; logging.Logger:</code> | 定义 `get_user_logger` 函数，承载当前模块中的一段可复用处理流程。 |
| 18 | <code>    if username is None:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 19 | <code>        if current_user.is_authenticated:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 20 | <code>            username = current_user.username</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 21 | <code>        else:</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 22 | <code>            username = &#x27;guest&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 23 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 24 | <code>    today = datetime.now().strftime(&#x27;%Y-%m-%d&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 25 | <code>    log_folder = current_app.config.get(&#x27;LOG_FOLDER&#x27;, _DEFAULT_LOG_DIR)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 26 | <code>    os.makedirs(log_folder, exist_ok=True)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 27 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 28 | <code>    log_filename = f&quot;{username}_{today}.log&quot;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 29 | <code>    log_path = os.path.join(log_folder, log_filename)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 30 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 31 | <code>    logger = logging.getLogger(f&#x27;user_{username}_{today}&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 32 | <code>    if not logger.handlers:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 33 | <code>        logger.setLevel(logging.INFO)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 34 | <code>        handler = RotatingFileHandler(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 35 | <code>            log_path,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 36 | <code>            maxBytes=10 * 1024 * 1024,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 37 | <code>            backupCount=5,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 38 | <code>            encoding=&#x27;utf-8&#x27;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 39 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 40 | <code>        formatter = logging.Formatter(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 41 | <code>            &#x27;%(asctime)s [%(levelname)s] %(message)s&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 42 | <code>            datefmt=&#x27;%Y-%m-%d %H:%M:%S&#x27;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 43 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 44 | <code>        handler.setFormatter(formatter)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 45 | <code>        logger.addHandler(handler)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 46 | <code>    return logger</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 47 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 48 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 49 | <code>def log_action(action: str, details: str = &#x27;&#x27;, username: str | None = None) -&gt; None:</code> | 定义 `log_action` 函数，承载当前模块中的一段可复用处理流程。 |
| 50 | <code>    try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 51 | <code>        logger = get_user_logger(username)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 52 | <code>        ip = get_client_ip()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 53 | <code>        log_message = f&quot;[{ip}] {action}&quot;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 54 | <code>        if details:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 55 | <code>            log_message += f&quot; - {details}&quot;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 56 | <code>        logger.info(log_message)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 57 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 58 | <code>        from models import LoginHistory, db</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 59 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 60 | <code>        if current_user and current_user.is_authenticated:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 61 | <code>            user_id = current_user.id</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 62 | <code>            username_snapshot = current_user.username</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 63 | <code>            user_type = &#x27;admin&#x27; if getattr(current_user, &#x27;is_admin&#x27;, False) else &#x27;user&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 64 | <code>        elif username:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 65 | <code>            user_id = 0</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 66 | <code>            username_snapshot = username</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 67 | <code>            user_type = &#x27;guest&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 68 | <code>        else:</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 69 | <code>            user_id = 0</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 70 | <code>            username_snapshot = &#x27;system&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 71 | <code>            user_type = &#x27;system&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 72 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 73 | <code>        log_record = LoginHistory(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 74 | <code>            user_id=user_id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 75 | <code>            username_snapshot=username_snapshot,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 76 | <code>            user_type=user_type,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 77 | <code>            ip_address=ip,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 78 | <code>            action=action,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 79 | <code>            details=details,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 80 | <code>            is_online=False</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 81 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 82 | <code>        db.session.add(log_record)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 83 | <code>        db.session.commit()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 84 | <code>        try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 85 | <code>            from socketio_emitters import emit_new_log</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 86 | <code>            emit_new_log({</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 87 | <code>                &#x27;id&#x27;: log_record.id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 88 | <code>                &#x27;username&#x27;: username_snapshot,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 89 | <code>                &#x27;user_type&#x27;: user_type,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 90 | <code>                &#x27;ip&#x27;: ip,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 91 | <code>                &#x27;time&#x27;: log_record.login_time.strftime(&#x27;%Y-%m-%d %H:%M:%S&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 92 | <code>                &#x27;action&#x27;: action,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 93 | <code>                &#x27;details&#x27;: details,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 94 | <code>                &#x27;is_online&#x27;: False,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 95 | <code>            })</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 96 | <code>        except Exception:</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 97 | <code>            pass</code> | 显式结束当前分支或占位，保持语法结构完整。 |
| 98 | <code>    except Exception:</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 99 | <code>        _logger.warning(&quot;log_action failed&quot;, exc_info=True)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
