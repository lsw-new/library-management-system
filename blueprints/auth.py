# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import re
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import time
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask.typing import ResponseReturnValue
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_user, logout_user, login_required, current_user
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from models import db, User, Admin
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from utils import (
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    log_action,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    cst_now,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    mark_current_session_offline,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    create_login_session_record,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    rate_limit,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    get_csrf_token,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    validate_csrf_token,
# 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
)
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from email_utils import send_code_to_email, verify_code
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
auth_bp = Blueprint('auth', __name__)
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
logger = logging.getLogger(__name__)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
AUTH_ACTION_CSRF_SESSION_KEY = 'auth_action_csrf_token'
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
EMAIL_CODE_LIMIT = 10
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
EMAIL_CODE_WINDOW_SECONDS = 300
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
LOGIN_LIMIT = 8
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
LOGIN_WINDOW_SECONDS = 300
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
FORGOT_PASSWORD_IDENTITY_LIMIT = 5
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
FORGOT_PASSWORD_IDENTITY_WINDOW_SECONDS = 300
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
VERIFY_CODE_LIMIT = 8
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
VERIFY_CODE_WINDOW_SECONDS = 300
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
RESET_CODE_VERIFIED_WINDOW_SECONDS = 600
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_emit_online_changed_safe` 函数，封装一段可复用的后端处理流程。
def _emit_online_changed_safe() -> None:
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from socketio_emitters import emit_online_changed
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_online_changed()
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
        pass
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `get_auth_action_csrf_token` 函数，封装一段可复用的后端处理流程。
def get_auth_action_csrf_token() -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return get_csrf_token(AUTH_ACTION_CSRF_SESSION_KEY)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `validate_auth_action_csrf` 函数，封装一段可复用的后端处理流程。
def validate_auth_action_csrf() -> bool:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return validate_csrf_token(AUTH_ACTION_CSRF_SESSION_KEY)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `is_reset_code_verified_for` 函数，封装一段可复用的后端处理流程。
def is_reset_code_verified_for(user_id: int) -> bool:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    verified_at = session.get('reset_verified_at')
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not isinstance(verified_at, (int, float)):
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return False
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return bool(
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        session.get('reset_code_verified')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        and session.get('reset_verified_user_id') == user_id
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        and time.time() - verified_at <= RESET_CODE_VERIFIED_WINDOW_SECONDS
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `clear_reset_verification` 函数，封装一段可复用的后端处理流程。
def clear_reset_verification() -> None:
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    session.pop('reset_code_verified', None)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    session.pop('reset_verified_user_id', None)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    session.pop('reset_verified_at', None)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.context_processor
# 逐行注释：定义 `inject_auth_action_csrf_token` 函数，封装一段可复用的后端处理流程。
def inject_auth_action_csrf_token() -> dict[str, str]:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {'auth_action_csrf_token': get_auth_action_csrf_token()}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.before_request
# 逐行注释：定义 `require_auth_action_csrf` 函数，封装一段可复用的后端处理流程。
def require_auth_action_csrf() -> ResponseReturnValue | None:
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method != 'POST' or validate_auth_action_csrf():
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.is_json:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    flash('请求已过期，请刷新页面后重试', 'danger')
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return redirect(request.url), 303
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/send-verification-code', methods=['POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('send_verification_code', EMAIL_CODE_LIMIT, EMAIL_CODE_WINDOW_SECONDS, '验证码发送过于频繁，请稍后再试')
# 逐行注释：定义 `send_verification_code` 函数，封装一段可复用的后端处理流程。
def send_verification_code():
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        data = request.get_json()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not data:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '无效的请求数据'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        email = data.get('email')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not email:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请输入邮箱地址'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        check_unique = data.get('check_unique') or session.get('reg_identity')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if check_unique and User.query.filter_by(email=email).first():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '该邮箱已被注册'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        success, message = send_code_to_email(email)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': success, 'message': message})
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("发送验证码失败", exc_info=True)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/forgot-password', methods=['GET', 'POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('forgot_password_identity', FORGOT_PASSWORD_IDENTITY_LIMIT, FORGOT_PASSWORD_IDENTITY_WINDOW_SECONDS, '尝试过于频繁，请稍后再试')
# 逐行注释：定义 `forgot_password` 函数，封装一段可复用的后端处理流程。
def forgot_password():
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method == 'POST':
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        clear_reset_verification()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        session.pop('reset_user_id', None)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        student_id = request.form.get('student_id', '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        real_name = request.form.get('real_name', '').strip()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        kept = {'student_id': student_id, 'real_name': real_name}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not student_id or not real_name:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('请填写学号和姓名', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('forgot_password.html', form_data=kept)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(student_id) != 13 or not student_id.isdigit():
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('学号必须为 13 位纯数字', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('forgot_password.html', form_data=kept)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = User.query.filter_by(student_id=student_id).first()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user or (user.real_name or '') != real_name:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('学号与姓名不匹配', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('forgot_password.html', form_data=kept)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        session['reset_user_id'] = user.id
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return redirect(url_for('auth.forgot_password_reset'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template('forgot_password.html', form_data={})
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
FORGOT_PASSWORD_RESET_LIMIT = 5
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
FORGOT_PASSWORD_RESET_WINDOW_SECONDS = 300
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/forgot-password/reset', methods=['GET', 'POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('password_reset', FORGOT_PASSWORD_RESET_LIMIT, FORGOT_PASSWORD_RESET_WINDOW_SECONDS, '重置密码操作过于频繁，请 5 分钟后再试')
# 逐行注释：定义 `forgot_password_reset` 函数，封装一段可复用的后端处理流程。
def forgot_password_reset():
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user_id = session.get('reset_user_id')
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not user_id:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        flash('请先验证身份', 'warning')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return redirect(url_for('auth.forgot_password'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    user = db.session.get(User, user_id)
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not user:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        session.pop('reset_user_id', None)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        clear_reset_verification()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        flash('用户不存在', 'danger')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return redirect(url_for('auth.forgot_password'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    masked_email = _mask_email(user.email) if user.email else ''
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method == 'POST':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_password = request.form.get('new_password', '')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        confirm_password = request.form.get('confirm_password', '')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：定义 `fail` 函数，封装一段可复用的后端处理流程。
        def fail(msg):
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash(msg, 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('forgot_password_reset.html', masked_email=masked_email,
                                   # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                                   code_verified=is_reset_code_verified_for(user.id))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not is_reset_code_verified_for(user.id):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('请先完成邮箱验证')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not new_password or not confirm_password:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('请填写所有必填字段')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(new_password) < 6:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('密码长度至少 6 位字符')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if new_password != confirm_password:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('两次输入的密码不一致')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            user.set_password(new_password)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.commit()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            session.pop('reset_user_id', None)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            clear_reset_verification()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            log_action('密码重置', f'用户 {user.username} 通过邮箱验证重置密码', user.username)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('密码重置成功，请使用新密码登录', 'success')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('auth.login'))
        # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.rollback()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logger.error("重置密码失败", exc_info=True)
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('密码重置失败，请稍后重试')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template('forgot_password_reset.html', masked_email=masked_email,
                           # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                           code_verified=is_reset_code_verified_for(user.id))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/forgot-password/send-code', methods=['POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('forgot_password_send_code', EMAIL_CODE_LIMIT, EMAIL_CODE_WINDOW_SECONDS, '验证码发送过于频繁，请稍后再试')
# 逐行注释：定义 `forgot_password_send_code` 函数，封装一段可复用的后端处理流程。
def forgot_password_send_code():
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_id = session.get('reset_user_id')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user_id:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请先验证身份'}), 403
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = db.session.get(User, user_id)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user or not user.email:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户不存在'}), 404
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        success, message = send_code_to_email(user.email)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': success, 'message': message})
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("忘记密码发送验证码失败", exc_info=True)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/forgot-password/verify-code', methods=['POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('forgot_password_verify_code', VERIFY_CODE_LIMIT, VERIFY_CODE_WINDOW_SECONDS, '验证码尝试过于频繁，请稍后再试')
# 逐行注释：定义 `forgot_password_verify_code` 函数，封装一段可复用的后端处理流程。
def forgot_password_verify_code():
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_id = session.get('reset_user_id')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user_id:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请先验证身份'}), 403
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = db.session.get(User, user_id)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user or not user.email:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户不存在'}), 404
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        data = request.get_json() or {}
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        code = (data.get('code') or '').strip()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not code:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请输入验证码'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        is_valid, message = verify_code(user.email, code)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not is_valid:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': message}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        session['reset_code_verified'] = True
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        session['reset_verified_user_id'] = user.id
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        session['reset_verified_at'] = time.time()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '验证成功'})
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("忘记密码验证码校验失败", exc_info=True)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_mask_email` 函数，封装一段可复用的后端处理流程。
def _mask_email(email: str) -> str:
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not email or '@' not in email:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return email or ''
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    local, domain = email.split('@', 1)
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if len(local) <= 2:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        masked_local = local[0] + '***'
    # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
    else:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        masked_local = local[0] + '***' + local[-1]
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f'{masked_local}@{domain}'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/register', methods=['GET', 'POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('register', LOGIN_LIMIT, LOGIN_WINDOW_SECONDS, '注册尝试过于频繁，请稍后再试')
# 逐行注释：定义 `register` 函数，封装一段可复用的后端处理流程。
def register():
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method == 'POST':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        username = request.form.get('username', '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        real_name = request.form.get('real_name', '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        class_name = request.form.get('class_name', '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        student_id = request.form.get('student_id', '').strip()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        kept = {'username': username, 'student_id': student_id,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                'real_name': real_name, 'class_name': class_name}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：定义 `fail` 函数，封装一段可复用的后端处理流程。
        def fail(msg):
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash(msg, 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('register.html', form_data=kept)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not username or not real_name or not student_id:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('请填写所有必填字段')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(username) < 3 or len(username) > 20:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('用户名长度必须在 3-20 个字符之间')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(student_id) != 13 or not student_id.isdigit():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('学号必须为 13 位纯数字')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if User.query.filter_by(username=username).first():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('用户名已存在')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if User.query.filter_by(student_id=student_id).first():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('学号已存在')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        session['reg_identity'] = kept
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return redirect(url_for('auth.register_complete'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template('register.html', form_data={})
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/register/complete', methods=['GET', 'POST'])
# 逐行注释：定义 `register_complete` 函数，封装一段可复用的后端处理流程。
def register_complete():
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    identity = session.get('reg_identity')
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not identity:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        flash('请先完成身份信息填写', 'warning')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return redirect(url_for('auth.register'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method == 'POST':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        email = request.form.get('email', '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        password = request.form.get('password', '')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        confirm_password = request.form.get('confirm_password', '')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        verification_code = request.form.get('verification_code', '').strip()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        kept = {'email': email}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：定义 `fail` 函数，封装一段可复用的后端处理流程。
        def fail(msg):
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash(msg, 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('register_complete.html', form_data=kept, identity=identity)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        agree_terms = request.form.get('agree_terms')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not agree_terms:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('请先阅读并同意服务协议与用户规则')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not email or not password or not verification_code:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('请填写所有必填字段')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not EMAIL_REGEX.match(email):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('邮箱格式不正确')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(password) < 6:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('密码长度至少 6 位字符')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if password != confirm_password:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('两次输入的密码不一致')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if User.query.filter_by(email=email).first():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('该邮箱已被注册')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        username = identity['username']
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        student_id = identity['student_id']
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if User.query.filter_by(username=username).first():
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            session.pop('reg_identity', None)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('用户名已存在，请重新填写', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('auth.register'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if User.query.filter_by(student_id=student_id).first():
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            session.pop('reg_identity', None)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('学号已存在，请重新填写', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('auth.register'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        is_valid, message = verify_code(email, verification_code)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not is_valid:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail(f'验证码错误：{message}')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user = User(
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                username=username,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                student_id=student_id,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                email=email,
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                real_name=identity.get('real_name') or None,
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                class_name=identity.get('class_name') or None,
            # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            user.set_password(password)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.add(user)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.commit()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            session.pop('reg_identity', None)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            log_action('用户注册', f'新用户: {username}, 学号: {student_id}, 邮箱: {email}', username)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('注册成功，请登录', 'success')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('auth.login'))
        # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.rollback()
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return fail('注册失败，请稍后重试')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template('register_complete.html', form_data={}, identity=identity)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/login', methods=['GET', 'POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('login', LOGIN_LIMIT, LOGIN_WINDOW_SECONDS, '登录尝试过于频繁，请稍后再试')
# 逐行注释：定义 `login` 函数，封装一段可复用的后端处理流程。
def login():
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method == 'POST':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        identity = request.form.get('identity', '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        password = request.form.get('password')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if EMAIL_REGEX.match(identity):
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user = User.query.filter_by(email=identity).first()
        # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            user = User.query.filter_by(username=identity).first()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if user and user.check_password(password):
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if user.is_banned:
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                remaining = user.ban_remaining_seconds
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                mins = (remaining + 59) // 60
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                log_action('封禁拦截', f'用户 {user.username} 在封禁期内尝试登录', user.username)
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                flash(f'账号已被封禁，剩余 {mins} 分钟后可重新登录', 'danger')
                # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return redirect(url_for('auth.login'))
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            mark_current_session_offline()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logout_user()
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            session['user_type'] = 'user'
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            login_user(user)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            create_login_session_record(user, 'user')
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.commit()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            _emit_online_changed_safe()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            log_action('用户登录', f'用户 {user.username} 登录成功', user.username)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('登录成功，欢迎回来！', 'success')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('user.books'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('登录失败', f'登录标识: {identity}', 'guest')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        flash('用户名/邮箱或密码错误', 'danger')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template('login.html')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/login/email', methods=['GET', 'POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('login_email', LOGIN_LIMIT, LOGIN_WINDOW_SECONDS, '登录尝试过于频繁，请稍后再试')
# 逐行注释：定义 `login_email` 函数，封装一段可复用的后端处理流程。
def login_email():
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method == 'POST':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        email = request.form.get('email', '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        code = request.form.get('code', '').strip()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not email or not code:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('请填写邮箱和验证码', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('login_email.html', form_email=email)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not EMAIL_REGEX.match(email):
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('邮箱格式不正确', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('login_email.html', form_email=email)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = User.query.filter_by(email=email).first()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('该邮箱未注册', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('login_email.html', form_email=email)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        is_valid, message = verify_code(email, code)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not is_valid:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash(f'验证码错误：{message}', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return render_template('login_email.html', form_email=email)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if user.is_banned:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            remaining = user.ban_remaining_seconds
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            mins = (remaining + 59) // 60
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            log_action('封禁拦截', f'用户 {user.username} 在封禁期内尝试登录(邮箱)', user.username)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash(f'账号已被封禁，剩余 {mins} 分钟后可重新登录', 'danger')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('auth.login_email'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        mark_current_session_offline()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logout_user()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        session['user_type'] = 'user'
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        login_user(user)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        create_login_session_record(user, 'user')
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        _emit_online_changed_safe()
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('用户登录', f'用户 {user.username} 通过邮箱验证码登录成功', user.username)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        flash('登录成功，欢迎回来！', 'success')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return redirect(url_for('user.books'))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template('login_email.html', form_email='')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/login/email/send-code', methods=['POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('login_email_send_code', EMAIL_CODE_LIMIT, EMAIL_CODE_WINDOW_SECONDS, '验证码发送过于频繁，请稍后再试')
# 逐行注释：定义 `login_email_send_code` 函数，封装一段可复用的后端处理流程。
def login_email_send_code():
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        data = request.get_json()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not data:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '无效的请求数据'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        email = (data.get('email') or '').strip()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not email:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请输入邮箱地址'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not EMAIL_REGEX.match(email):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '邮箱格式不正确'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user = User.query.filter_by(email=email).first()
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not user:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '该邮箱未注册'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        success, message = send_code_to_email(email)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': success, 'message': message})
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("邮箱登录发送验证码失败", exc_info=True)
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/admin/login', methods=['GET', 'POST'])
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@rate_limit('admin_login', LOGIN_LIMIT, LOGIN_WINDOW_SECONDS, '登录尝试过于频繁，请稍后再试')
# 逐行注释：定义 `admin_login` 函数，封装一段可复用的后端处理流程。
def admin_login():
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if request.method == 'POST':
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        username = request.form.get('username')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        password = request.form.get('password')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        admin = Admin.query.filter_by(username=username).first()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if admin and admin.check_password(password):
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            mark_current_session_offline()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            logout_user()
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            session['user_type'] = 'admin'
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            admin.last_login = cst_now()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            login_user(admin)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            create_login_session_record(admin, 'admin')
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.commit()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            _emit_online_changed_safe()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            log_action('管理员登录', f'管理员 {username} 登录成功', username)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('管理员登录成功，欢迎回来！', 'success')
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return redirect(url_for('admin.admin_index'))
        # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
        else:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            log_action('管理员登录失败', f'用户名: {username}', 'guest')
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            flash('用户名或密码错误', 'danger')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return render_template('admin_login.html')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@auth_bp.route('/logout')
# 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@login_required
# 逐行注释：定义 `logout` 函数，封装一段可复用的后端处理流程。
def logout():
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    username = current_user.username
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    log_action('用户登出', f'用户 {username} 退出登录', username)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    mark_current_session_offline()
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    session.pop('user_type', None)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    logout_user()
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    db.session.commit()
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    _emit_online_changed_safe()
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return redirect(url_for('user.index'))
