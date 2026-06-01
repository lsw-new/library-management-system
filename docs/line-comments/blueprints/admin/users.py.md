# blueprints/admin/users.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>from flask import Blueprint, jsonify, request</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 2 | <code>from flask_login import login_required</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 3 | <code>import re</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 4 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 5 | <code>from models import db, User</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 6 | <code>from utils import log_action, admin_required, db_transaction, kick_active_session</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 7 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 8 | <code>EMAIL_PATTERN = re.compile(r&#x27;^[^@\s]+@[^@\s]+\.[^@\s]+$&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 9 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 10 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 11 | <code>def register_user_routes(bp: Blueprint) -&gt; None:</code> | 定义 `register_user_routes` 函数，承载当前模块中的一段可复用处理流程。 |
| 12 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 13 | <code>    @bp.route(&#x27;/admin/kick_user/&lt;int:user_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 14 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 15 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 16 | <code>    def kick_user(user_id):</code> | 定义 `kick_user` 函数，承载当前模块中的一段可复用处理流程。 |
| 17 | <code>        username = kick_active_session(user_id, user_type=&#x27;user&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 18 | <code>        if not username:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 19 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;该用户当前不在线&#x27;}), 404</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 20 | <code>        log_action(&#x27;踢出用户&#x27;, f&#x27;强制下线用户: {username}, ID: {user_id}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 21 | <code>        return jsonify({&#x27;success&#x27;: True, &#x27;message&#x27;: f&#x27;已将 {username} 强制下线&#x27;})</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 22 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 23 | <code>    @bp.route(&#x27;/admin/ban_user/&lt;int:user_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 24 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 25 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 26 | <code>    def ban_user(user_id):</code> | 定义 `ban_user` 函数，承载当前模块中的一段可复用处理流程。 |
| 27 | <code>        user = db.session.get(User, user_id)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 28 | <code>        if not user:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 29 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;用户不存在&#x27;}), 404</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 30 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 31 | <code>        payload = request.get_json(silent=True) or {}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 32 | <code>        try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 33 | <code>            minutes = int(request.form.get(&#x27;minutes&#x27;) or payload.get(&#x27;minutes&#x27;, 0))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 34 | <code>        except (TypeError, ValueError):</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 35 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;封禁时长必须是整数（分钟）&#x27;}), 400</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 36 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 37 | <code>        if minutes &lt;= 0:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 38 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;封禁时长必须大于 0 分钟&#x27;}), 400</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 39 | <code>        if minutes &gt; 60 * 24 * 365:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 40 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;封禁时长过长，请勿超过一年&#x27;}), 400</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 41 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 42 | <code>        with db_transaction() as tx:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 43 | <code>            until = user.ban_for_minutes(minutes)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 44 | <code>        if tx.error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 45 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: tx.error}), 500</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 46 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 47 | <code>        kick_active_session(user_id, user_type=&#x27;user&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 48 | <code>        log_action(&#x27;封禁用户&#x27;, f&#x27;用户: {user.username}, 时长: {minutes} 分钟, 截止: {until.strftime(&quot;%Y-%m-%d %H:%M:%S&quot;)}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 49 | <code>        return jsonify({</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 50 | <code>            &#x27;success&#x27;: True,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 51 | <code>            &#x27;message&#x27;: f&#x27;已封禁 {user.username} {minutes} 分钟&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 52 | <code>            &#x27;banned_until&#x27;: until.strftime(&#x27;%Y-%m-%d %H:%M:%S&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 53 | <code>            &#x27;remaining_seconds&#x27;: user.ban_remaining_seconds,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 54 | <code>        })</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 55 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 56 | <code>    @bp.route(&#x27;/admin/unban_user/&lt;int:user_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 57 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 58 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 59 | <code>    def unban_user(user_id):</code> | 定义 `unban_user` 函数，承载当前模块中的一段可复用处理流程。 |
| 60 | <code>        user = db.session.get(User, user_id)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 61 | <code>        if not user:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 62 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;用户不存在&#x27;}), 404</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 63 | <code>        if not user.is_banned:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 64 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;该用户未被封禁&#x27;}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 65 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 66 | <code>        with db_transaction() as tx:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 67 | <code>            user.unban()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 68 | <code>        if tx.error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 69 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: tx.error}), 500</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 70 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 71 | <code>        log_action(&#x27;解除封禁&#x27;, f&#x27;用户: {user.username}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 72 | <code>        return jsonify({&#x27;success&#x27;: True, &#x27;message&#x27;: f&#x27;已解除 {user.username} 的封禁&#x27;})</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 73 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 74 | <code>    @bp.route(&#x27;/admin/reset_password/&lt;int:user_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 75 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 76 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 77 | <code>    def reset_password(user_id):</code> | 定义 `reset_password` 函数，承载当前模块中的一段可复用处理流程。 |
| 78 | <code>        user = db.session.get(User, user_id)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 79 | <code>        if not user:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 80 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;用户不存在&#x27;}), 404</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 81 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 82 | <code>        if not user.student_id:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 83 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;该用户未绑定学号，无法重置&#x27;}), 400</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 84 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 85 | <code>        new_password = user.student_id</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 86 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 87 | <code>        with db_transaction() as tx:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 88 | <code>            user.set_password(new_password)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 89 | <code>        if tx.error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 90 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: tx.error}), 500</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 91 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 92 | <code>        email_sent = False</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 93 | <code>        if user.email:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 94 | <code>            try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 95 | <code>                from email_utils import send_temp_password_email</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 96 | <code>                success, _ = send_temp_password_email(user.email, user.username, new_password)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 97 | <code>                email_sent = success</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 98 | <code>            except Exception:</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 99 | <code>                pass</code> | 显式结束当前分支或占位，保持语法结构完整。 |
| 100 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 101 | <code>        log_action(&#x27;重置密码&#x27;, f&#x27;用户: {user.username}, 密码已重置为学号, 邮件通知: {&quot;成功&quot; if email_sent else &quot;未发送&quot;}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 102 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 103 | <code>        result: dict[str, object] = {</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 104 | <code>            &#x27;success&#x27;: True,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 105 | <code>            &#x27;message&#x27;: f&#x27;已重置 {user.username} 的密码为学号&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 106 | <code>            &#x27;email_sent&#x27;: email_sent,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 107 | <code>        }</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 108 | <code>        if email_sent:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 109 | <code>            result[&#x27;message&#x27;] += &#x27;，已通过邮件通知用户&#x27;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 110 | <code>        else:</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 111 | <code>            result[&#x27;message&#x27;] += &#x27;，请手动通知用户&#x27;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 112 | <code>        return jsonify(result)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 113 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 114 | <code>    @bp.route(&#x27;/admin/change_email/&lt;int:user_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 115 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 116 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 117 | <code>    def change_email(user_id):</code> | 定义 `change_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 118 | <code>        user = db.session.get(User, user_id)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 119 | <code>        if not user:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 120 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;用户不存在&#x27;}), 404</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 121 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 122 | <code>        payload = request.get_json(silent=True) or {}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 123 | <code>        new_email = (request.form.get(&#x27;email&#x27;) or payload.get(&#x27;email&#x27;) or &#x27;&#x27;).strip().lower()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 124 | <code>        if not new_email:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 125 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;请输入新邮箱地址&#x27;}), 400</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 126 | <code>        if len(new_email) &gt; 120 or not EMAIL_PATTERN.fullmatch(new_email):</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 127 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;邮箱格式不正确&#x27;}), 400</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 128 | <code>        if new_email == (user.email or &#x27;&#x27;).lower():</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 129 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;新邮箱与当前邮箱相同&#x27;}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 130 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 131 | <code>        exists = db.session.query(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 132 | <code>            db.session.query(User).filter(User.email == new_email, User.id != user.id).exists()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 133 | <code>        ).scalar()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 134 | <code>        if exists:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 135 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;该邮箱已被其他用户绑定&#x27;}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 136 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 137 | <code>        old_email = user.email</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 138 | <code>        with db_transaction(error_message=&#x27;邮箱修改失败，请稍后重试&#x27;) as tx:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 139 | <code>            user.email = new_email</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 140 | <code>        if tx.error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 141 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: tx.error}), 500</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 142 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 143 | <code>        log_action(&#x27;修改用户邮箱&#x27;, f&#x27;用户: {user.username}, {old_email} -&gt; {new_email}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 144 | <code>        return jsonify({&#x27;success&#x27;: True, &#x27;message&#x27;: f&#x27;已将 {user.username} 的邮箱修改为 {new_email}&#x27;})</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
