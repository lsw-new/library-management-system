from flask import Blueprint, jsonify, request
from flask_login import login_required

from models import db, User
from utils import log_action, admin_required, db_transaction, kick_active_session


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

        try:
            minutes = int(request.form.get('minutes') or (request.json or {}).get('minutes', 0))
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
            return jsonify({'success': False, 'message': '该用户没有学号，无法初始化密码'}), 400

        with db_transaction() as tx:
            user.set_password(user.student_id)
        if tx.error:
            return jsonify({'success': False, 'message': tx.error}), 500

        log_action('初始化密码', f'用户: {user.username}, 密码已重置为学号')
        return jsonify({'success': True, 'message': f'已将 {user.username} 的密码初始化为学号'})
