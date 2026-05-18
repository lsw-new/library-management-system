import os

from flask import Blueprint, jsonify, request, render_template, current_app
from flask_login import login_required, current_user

from models import db, BorrowRecord
from utils import log_action, cst_now, db_transaction, allowed_file
from blueprints.user_helpers import (
    AVATAR_MAX_SIZE,
    AVATAR_SUBFOLDER,
    build_borrow_insights,
    build_borrow_stats,
    get_borrow_action_csrf_token,
    validate_borrow_action_csrf,
)


def register_profile_routes(bp: Blueprint) -> None:

    @bp.route('/profile')
    @login_required
    def profile():
        from sqlalchemy.orm import joinedload
        from blueprints.auth import get_auth_action_csrf_token
        records = BorrowRecord.query.options(
            joinedload(BorrowRecord.book)
        ).filter_by(user_id=current_user.id).order_by(BorrowRecord.borrow_date.desc()).all()

        stats = build_borrow_stats(records)
        insights = build_borrow_insights(records, stats)

        return render_template(
            'profile.html',
            stats=stats,
            insights=insights,
            borrow_action_csrf_token=get_borrow_action_csrf_token(),
            auth_action_csrf_token=get_auth_action_csrf_token(),
        )

    @bp.route('/profile/update', methods=['POST'])
    @login_required
    def profile_update():
        if not validate_borrow_action_csrf():
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        data = request.get_json(silent=True)
        if not data:
            return jsonify({'success': False, 'message': '无效的请求'}), 400

        new_username = (data.get('username') or '').strip()
        new_real_name = (data.get('real_name') or '').strip()
        new_class_name = (data.get('class_name') or '').strip()

        if not new_username:
            return jsonify({'success': False, 'message': '用户名不能为空'}), 400

        if len(new_username) < 3 or len(new_username) > 20:
            return jsonify({'success': False, 'message': '用户名长度必须在 3-20 个字符之间'}), 400

        if not new_real_name:
            return jsonify({'success': False, 'message': '姓名不能为空'}), 400

        if len(new_real_name) > 50:
            return jsonify({'success': False, 'message': '姓名长度不能超过 50 个字符'}), 400

        if len(new_class_name) > 100:
            return jsonify({'success': False, 'message': '班级长度不能超过 100 个字符'}), 400

        from models import User
        if new_username != current_user.username:
            existing = db.session.query(
                db.session.query(User).filter_by(username=new_username).exists()
            ).scalar()
            if existing:
                return jsonify({'success': False, 'message': '用户名已被占用'}), 409

        with db_transaction(error_message='更新失败，请稍后重试') as tx:
            current_user.username = new_username
            current_user.real_name = new_real_name or None
            current_user.class_name = new_class_name or None
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        log_action('修改资料', f'用户名: {new_username}, 姓名: {new_real_name}')
        return jsonify({
            'success': True,
            'message': '资料更新成功',
            'username': new_username,
            'real_name': new_real_name,
            'class_name': new_class_name,
        })

    @bp.route('/profile/password', methods=['POST'])
    @login_required
    def profile_password():
        if not validate_borrow_action_csrf():
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        data = request.get_json(silent=True)
        if not data:
            return jsonify({'success': False, 'message': '无效的请求'}), 400

        old_password = data.get('old_password', '')
        new_password = data.get('new_password', '')
        confirm_password = data.get('confirm_password', '')
        verification_code = data.get('verification_code', '')

        if not verification_code:
            return jsonify({'success': False, 'message': '请输入邮箱验证码'}), 400

        if not old_password or not new_password or not confirm_password:
            return jsonify({'success': False, 'message': '请填写所有密码字段'}), 400

        if not current_user.check_password(old_password):
            return jsonify({'success': False, 'message': '当前密码不正确'}), 400

        if len(new_password) < 6:
            return jsonify({'success': False, 'message': '新密码长度至少 6 位字符'}), 400

        if new_password != confirm_password:
            return jsonify({'success': False, 'message': '两次输入的新密码不一致'}), 400

        from email_utils import verify_code
        is_valid, msg = verify_code(current_user.email, verification_code)
        if not is_valid:
            return jsonify({'success': False, 'message': msg}), 400

        with db_transaction(error_message='密码修改失败，请稍后重试') as tx:
            current_user.set_password(new_password)
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        log_action('修改密码', f'用户 {current_user.username} 修改了密码')
        return jsonify({'success': True, 'message': '密码修改成功'})

    @bp.route('/profile/avatar', methods=['POST'])
    @login_required
    def profile_avatar():
        if not validate_borrow_action_csrf():
            return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
        file = request.files.get('avatar')
        if not file or not file.filename:
            return jsonify({'success': False, 'message': '请选择头像图片'}), 400

        if not allowed_file(file.filename, current_app.config['ALLOWED_EXTENSIONS']):
            return jsonify({'success': False, 'message': '仅支持 PNG、JPG、GIF 格式'}), 400

        file.seek(0, 2)
        if file.tell() > AVATAR_MAX_SIZE:
            return jsonify({'success': False, 'message': '图片大小不能超过 2MB'}), 400
        file.seek(0)

        from werkzeug.utils import secure_filename
        avatar_dir = os.path.join(current_app.config['UPLOAD_FOLDER'], AVATAR_SUBFOLDER)
        os.makedirs(avatar_dir, exist_ok=True)

        raw_name = secure_filename(file.filename) or 'avatar.jpg'
        timestamp = cst_now().strftime('%Y%m%d%H%M%S')
        new_filename = f'{current_user.id}_{timestamp}_{raw_name}'
        file.save(os.path.join(avatar_dir, new_filename))

        old_avatar = current_user.avatar
        with db_transaction(error_message='头像保存失败，请稍后重试') as tx:
            current_user.avatar = new_filename
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        if old_avatar:
            old_path = os.path.join(avatar_dir, old_avatar)
            if os.path.exists(old_path):
                try:
                    os.remove(old_path)
                except OSError:
                    pass

        log_action('更换头像', f'用户 {current_user.username} 更换了头像')
        avatar_url = f'/static/images/{AVATAR_SUBFOLDER}/{new_filename}'
        return jsonify({'success': True, 'message': '头像更新成功', 'avatar_url': avatar_url})
