from flask import Blueprint, jsonify, request
from flask_login import login_required
import re

from models import db, User
from utils import log_action, admin_required, db_transaction, kick_active_session

EMAIL_PATTERN = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')


def register_user_routes(bp: Blueprint) -> None:

    @bp.route('/admin/kick_user/<int:user_id>', methods=['POST'])
    @login_required
    @admin_required()
    def kick_user(user_id):
        username = kick_active_session(user_id, user_type='user')
        if not username:
            return jsonify({'success': False, 'message': '该用户当前不在线'}), 404
        log_action('踢出用户', f'强制下线用户: {username}, ID: {user_id}')
        return jsonify({'success': True, 'message': f'已将 {username} 强制下线'})

    @bp.route('/admin/ban_user/<int:user_id>', methods=['POST'])
    @login_required
    @admin_required()
    def ban_user(user_id):
        user = db.session.get(User, user_id)
        if not user:
            return jsonify({'success': False, 'message': '用户不存在'}), 404

        payload = request.get_json(silent=True) or {}
        try:
            minutes = int(request.form.get('minutes') or payload.get('minutes', 0))
        except (TypeError, ValueError):
            return jsonify({'success': False, 'message': '封禁时长必须是整数（分钟）'}), 400

        if minutes <= 0:
            return jsonify({'success': False, 'message': '封禁时长必须大于 0 分钟'}), 400
        if minutes > 60 * 24 * 365:
            return jsonify({'success': False, 'message': '封禁时长过长，请勿超过一年'}), 400

        with db_transaction() as tx:
            until = user.ban_for_minutes(minutes)
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        kick_active_session(user_id, user_type='user')
        log_action('封禁用户', f'用户: {user.username}, 时长: {minutes} 分钟, 截止: {until.strftime("%Y-%m-%d %H:%M:%S")}')
        return jsonify({
            'success': True,
            'message': f'已封禁 {user.username} {minutes} 分钟',
            'banned_until': until.strftime('%Y-%m-%d %H:%M:%S'),
            'remaining_seconds': user.ban_remaining_seconds,
        })

    @bp.route('/admin/unban_user/<int:user_id>', methods=['POST'])
    @login_required
    @admin_required()
    def unban_user(user_id):
        user = db.session.get(User, user_id)
        if not user:
            return jsonify({'success': False, 'message': '用户不存在'}), 404
        if not user.is_banned:
            return jsonify({'success': False, 'message': '该用户未被封禁'}), 409

        with db_transaction() as tx:
            user.unban()
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        log_action('解除封禁', f'用户: {user.username}')
        return jsonify({'success': True, 'message': f'已解除 {user.username} 的封禁'})

    @bp.route('/admin/reset_password/<int:user_id>', methods=['POST'])
    @login_required
    @admin_required()
    def reset_password(user_id):
        user = db.session.get(User, user_id)
        if not user:
            return jsonify({'success': False, 'message': '用户不存在'}), 404

        if not user.student_id:
            return jsonify({'success': False, 'message': '该用户未绑定学号，无法重置'}), 400

        new_password = user.student_id

        with db_transaction() as tx:
            user.set_password(new_password)
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        email_sent = False
        if user.email:
            try:
                from email_utils import send_temp_password_email
                success, _ = send_temp_password_email(user.email, user.username, new_password)
                email_sent = success
            except Exception:
                pass

        log_action('重置密码', f'用户: {user.username}, 密码已重置为学号, 邮件通知: {"成功" if email_sent else "未发送"}')

        result: dict[str, object] = {
            'success': True,
            'message': f'已重置 {user.username} 的密码为学号',
            'email_sent': email_sent,
        }
        if email_sent:
            result['message'] += '，已通过邮件通知用户'
        else:
            result['message'] += '，请手动通知用户'
        return jsonify(result)

    @bp.route('/admin/change_email/<int:user_id>', methods=['POST'])
    @login_required
    @admin_required()
    def change_email(user_id):
        user = db.session.get(User, user_id)
        if not user:
            return jsonify({'success': False, 'message': '用户不存在'}), 404

        payload = request.get_json(silent=True) or {}
        new_email = (request.form.get('email') or payload.get('email') or '').strip().lower()
        if not new_email:
            return jsonify({'success': False, 'message': '请输入新邮箱地址'}), 400
        if len(new_email) > 120 or not EMAIL_PATTERN.fullmatch(new_email):
            return jsonify({'success': False, 'message': '邮箱格式不正确'}), 400
        if new_email == (user.email or '').lower():
            return jsonify({'success': False, 'message': '新邮箱与当前邮箱相同'}), 409

        exists = db.session.query(
            db.session.query(User).filter(User.email == new_email, User.id != user.id).exists()
        ).scalar()
        if exists:
            return jsonify({'success': False, 'message': '该邮箱已被其他用户绑定'}), 409

        old_email = user.email
        with db_transaction(error_message='邮箱修改失败，请稍后重试') as tx:
            user.email = new_email
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        log_action('修改用户邮箱', f'用户: {user.username}, {old_email} -> {new_email}')
        return jsonify({'success': True, 'message': f'已将 {user.username} 的邮箱修改为 {new_email}'})
