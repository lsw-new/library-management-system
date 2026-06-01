# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, jsonify, request
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_required
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import re
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from models import db, User
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from utils import log_action, admin_required, db_transaction, kick_active_session
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
EMAIL_PATTERN = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `register_user_routes` 函数，封装一段可复用的后端处理流程。
def register_user_routes(bp: Blueprint) -> None:
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/kick_user/<int:user_id>', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 逐行注释：定义 `kick_user` 函数，封装一段可复用的后端处理流程。
    def kick_user(user_id):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        username = kick_active_session(user_id, user_type='user')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not username:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '该用户当前不在线'}), 404
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('踢出用户', f'强制下线用户: {username}, ID: {user_id}')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': f'已将 {username} 强制下线'})
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/ban_user/<int:user_id>', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 逐行注释：定义 `ban_user` 函数，封装一段可复用的后端处理流程。
    def ban_user(user_id):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = db.session.get(User, user_id)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户不存在'}), 404
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        payload = request.get_json(silent=True) or {}
        # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            minutes = int(request.form.get('minutes') or payload.get('minutes', 0))
        # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
        except (TypeError, ValueError):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '封禁时长必须是整数（分钟）'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if minutes <= 0:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '封禁时长必须大于 0 分钟'}), 400
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if minutes > 60 * 24 * 365:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '封禁时长过长，请勿超过一年'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction() as tx:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            until = user.ban_for_minutes(minutes)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        kick_active_session(user_id, user_type='user')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('封禁用户', f'用户: {user.username}, 时长: {minutes} 分钟, 截止: {until.strftime("%Y-%m-%d %H:%M:%S")}')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'success': True,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'message': f'已封禁 {user.username} {minutes} 分钟',
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'banned_until': until.strftime('%Y-%m-%d %H:%M:%S'),
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'remaining_seconds': user.ban_remaining_seconds,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        })
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/unban_user/<int:user_id>', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 逐行注释：定义 `unban_user` 函数，封装一段可复用的后端处理流程。
    def unban_user(user_id):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = db.session.get(User, user_id)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户不存在'}), 404
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user.is_banned:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '该用户未被封禁'}), 409
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction() as tx:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            user.unban()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('解除封禁', f'用户: {user.username}')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': f'已解除 {user.username} 的封禁'})
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/reset_password/<int:user_id>', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 逐行注释：定义 `reset_password` 函数，封装一段可复用的后端处理流程。
    def reset_password(user_id):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = db.session.get(User, user_id)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户不存在'}), 404
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user.student_id:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '该用户未绑定学号，无法重置'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_password = user.student_id
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction() as tx:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            user.set_password(new_password)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        email_sent = False
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if user.email:
            # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
            try:
                # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
                from email_utils import send_temp_password_email
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                success, _ = send_temp_password_email(user.email, user.username, new_password)
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                email_sent = success
            # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
            except Exception:
                # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
                pass
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('重置密码', f'用户: {user.username}, 密码已重置为学号, 邮件通知: {"成功" if email_sent else "未发送"}')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        result: dict[str, object] = {
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'success': True,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'message': f'已重置 {user.username} 的密码为学号',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'email_sent': email_sent,
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        }
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if email_sent:
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            result['message'] += '，已通过邮件通知用户'
        # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            result['message'] += '，请手动通知用户'
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify(result)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/admin/change_email/<int:user_id>', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @admin_required()
    # 逐行注释：定义 `change_email` 函数，封装一段可复用的后端处理流程。
    def change_email(user_id):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = db.session.get(User, user_id)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户不存在'}), 404
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        payload = request.get_json(silent=True) or {}
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_email = (request.form.get('email') or payload.get('email') or '').strip().lower()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not new_email:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请输入新邮箱地址'}), 400
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(new_email) > 120 or not EMAIL_PATTERN.fullmatch(new_email):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '邮箱格式不正确'}), 400
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if new_email == (user.email or '').lower():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '新邮箱与当前邮箱相同'}), 409
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        exists = db.session.query(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.query(User).filter(User.email == new_email, User.id != user.id).exists()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).scalar()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if exists:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '该邮箱已被其他用户绑定'}), 409
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        old_email = user.email
        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='邮箱修改失败，请稍后重试') as tx:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user.email = new_email
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('修改用户邮箱', f'用户: {user.username}, {old_email} -> {new_email}')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': f'已将 {user.username} 的邮箱修改为 {new_email}'})
