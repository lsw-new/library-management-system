# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, jsonify, request, render_template, current_app
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import login_required, current_user
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from models import db, BorrowRecord
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from utils import log_action, cst_now, db_transaction, allowed_file
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from blueprints.user_helpers import (
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    AVATAR_MAX_SIZE,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    AVATAR_SUBFOLDER,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_borrow_insights,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    build_borrow_stats,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    get_borrow_action_csrf_token,
    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    validate_borrow_action_csrf,
# 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `register_profile_routes` 函数，封装一段可复用的后端处理流程。
def register_profile_routes(bp: Blueprint) -> None:
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/profile')
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `profile` 函数，封装一段可复用的后端处理流程。
    def profile():
        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from sqlalchemy.orm import joinedload
        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from blueprints.auth import get_auth_action_csrf_token
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        records = BorrowRecord.query.options(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            joinedload(BorrowRecord.book)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).filter_by(user_id=current_user.id).order_by(BorrowRecord.borrow_date.desc()).all()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        stats = build_borrow_stats(records)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        insights = build_borrow_insights(records, stats)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return render_template(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'profile.html',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            stats=stats,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            insights=insights,
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            auth_action_csrf_token=get_auth_action_csrf_token(),
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/profile/update', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `profile_update` 函数，封装一段可复用的后端处理流程。
    def profile_update():
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not validate_borrow_action_csrf():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        data = request.get_json(silent=True)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not data:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '无效的请求'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_username = (data.get('username') or '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_real_name = (data.get('real_name') or '').strip()
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_class_name = (data.get('class_name') or '').strip()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not new_username:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户名不能为空'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(new_username) < 3 or len(new_username) > 20:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '用户名长度必须在 3-20 个字符之间'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not new_real_name:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '姓名不能为空'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(new_real_name) > 50:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '姓名长度不能超过 50 个字符'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(new_class_name) > 100:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '班级长度不能超过 100 个字符'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from models import User
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if new_username != current_user.username:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            existing = db.session.query(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                db.session.query(User).filter_by(username=new_username).exists()
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            ).scalar()
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if existing:
                # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return jsonify({'success': False, 'message': '用户名已被占用'}), 409
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='更新失败，请稍后重试') as tx:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            current_user.username = new_username
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            current_user.real_name = new_real_name or None
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            current_user.class_name = new_class_name or None
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('修改资料', f'用户名: {new_username}, 姓名: {new_real_name}')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'success': True,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'message': '资料更新成功',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'username': new_username,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'real_name': new_real_name,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'class_name': new_class_name,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        })
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/profile/password', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `profile_password` 函数，封装一段可复用的后端处理流程。
    def profile_password():
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not validate_borrow_action_csrf():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        data = request.get_json(silent=True)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not data:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '无效的请求'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        old_password = data.get('old_password', '')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_password = data.get('new_password', '')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        confirm_password = data.get('confirm_password', '')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        verification_code = data.get('verification_code', '')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not verification_code:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请输入邮箱验证码'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not old_password or not new_password or not confirm_password:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请填写所有密码字段'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not current_user.check_password(old_password):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '当前密码不正确'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(new_password) < 6:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '新密码长度至少 6 位字符'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if new_password != confirm_password:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '两次输入的新密码不一致'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from email_utils import verify_code
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        is_valid, msg = verify_code(current_user.email, verification_code)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not is_valid:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': msg}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='密码修改失败，请稍后重试') as tx:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            current_user.set_password(new_password)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('修改密码', f'用户 {current_user.username} 修改了密码')
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '密码修改成功'})
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @bp.route('/profile/avatar', methods=['POST'])
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @login_required
    # 逐行注释：定义 `profile_avatar` 函数，封装一段可复用的后端处理流程。
    def profile_avatar():
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not validate_borrow_action_csrf():
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        file = request.files.get('avatar')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not file or not file.filename:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '请选择头像图片'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not allowed_file(file.filename, current_app.config['ALLOWED_EXTENSIONS']):
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '仅支持 PNG、JPG、GIF 格式'}), 400
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        file.seek(0, 2)
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if file.tell() > AVATAR_MAX_SIZE:
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': '图片大小不能超过 3MB'}), 400
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        file.seek(0)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from werkzeug.utils import secure_filename
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        avatar_dir = os.path.join(current_app.config['UPLOAD_FOLDER'], AVATAR_SUBFOLDER)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        os.makedirs(avatar_dir, exist_ok=True)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        raw_name = secure_filename(file.filename) or 'avatar.jpg'
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        timestamp = cst_now().strftime('%Y%m%d%H%M%S')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        new_filename = f'{current_user.id}_{timestamp}_{raw_name}'
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        saved_path = os.path.join(avatar_dir, new_filename)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        file.save(saved_path)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        old_avatar = current_user.avatar
        # 逐行注释：上下文管理语句，自动管理资源生命周期或事务边界。
        with db_transaction(error_message='头像保存失败，请稍后重试') as tx:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            current_user.avatar = new_filename
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if tx.error:
            # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
            try:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                os.remove(saved_path)
            # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
            except OSError:
                # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
                pass
            # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return jsonify({'success': False, 'message': tx.error}), 500
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if old_avatar:
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            old_path = os.path.join(avatar_dir, old_avatar)
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
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        log_action('更换头像', f'用户 {current_user.username} 更换了头像')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        avatar_url = f'/static/images/{AVATAR_SUBFOLDER}/{new_filename}'
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'success': True, 'message': '头像更新成功', 'avatar_url': avatar_url})
