import logging
import re
import time

from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from flask.typing import ResponseReturnValue
from flask_login import login_user, logout_user, login_required, current_user
from models import db, User, Admin
from utils import (
    log_action,
    cst_now,
    mark_current_session_offline,
    create_login_session_record,
    is_mobile_device,
    rate_limit,
    get_csrf_token,
    validate_csrf_token,
)
from email_utils import send_code_to_email, verify_code

auth_bp = Blueprint('auth', __name__)
logger = logging.getLogger(__name__)

AUTH_ACTION_CSRF_SESSION_KEY = 'auth_action_csrf_token'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')
EMAIL_CODE_LIMIT = 10
EMAIL_CODE_WINDOW_SECONDS = 300
LOGIN_LIMIT = 8
LOGIN_WINDOW_SECONDS = 300
FORGOT_PASSWORD_IDENTITY_LIMIT = 5
FORGOT_PASSWORD_IDENTITY_WINDOW_SECONDS = 300
VERIFY_CODE_LIMIT = 8
VERIFY_CODE_WINDOW_SECONDS = 300
RESET_CODE_VERIFIED_WINDOW_SECONDS = 600


def get_auth_action_csrf_token() -> str:
    return get_csrf_token(AUTH_ACTION_CSRF_SESSION_KEY)


def validate_auth_action_csrf() -> bool:
    return validate_csrf_token(AUTH_ACTION_CSRF_SESSION_KEY)


def is_reset_code_verified_for(user_id: int) -> bool:
    verified_at = session.get('reset_verified_at')
    if not isinstance(verified_at, (int, float)):
        return False
    return bool(
        session.get('reset_code_verified')
        and session.get('reset_verified_user_id') == user_id
        and time.time() - verified_at <= RESET_CODE_VERIFIED_WINDOW_SECONDS
    )


def clear_reset_verification() -> None:
    session.pop('reset_code_verified', None)
    session.pop('reset_verified_user_id', None)
    session.pop('reset_verified_at', None)


@auth_bp.context_processor
def inject_auth_action_csrf_token() -> dict[str, str]:
    return {'auth_action_csrf_token': get_auth_action_csrf_token()}


@auth_bp.before_request
def require_auth_action_csrf() -> ResponseReturnValue | None:
    if request.method != 'POST' or validate_auth_action_csrf():
        return None
    if request.is_json:
        return jsonify({'success': False, 'message': '请求已过期，请刷新页面后重试'}), 403
    flash('请求已过期，请刷新页面后重试', 'danger')
    return redirect(request.url), 303


@auth_bp.route('/send-verification-code', methods=['POST'])
@rate_limit('send_verification_code', EMAIL_CODE_LIMIT, EMAIL_CODE_WINDOW_SECONDS, '验证码发送过于频繁，请稍后再试')
def send_verification_code():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'message': '无效的请求数据'}), 400

        email = data.get('email')
        if not email:
            return jsonify({'success': False, 'message': '请输入邮箱地址'}), 400

        check_unique = data.get('check_unique') or session.get('reg_identity')
        if check_unique and User.query.filter_by(email=email).first():
            return jsonify({'success': False, 'message': '该邮箱已被注册'}), 400

        success, message = send_code_to_email(email)
        return jsonify({'success': success, 'message': message})
    except Exception:
        logger.error("发送验证码失败", exc_info=True)
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500

@auth_bp.route('/forgot-password', methods=['GET', 'POST'])
@rate_limit('forgot_password_identity', FORGOT_PASSWORD_IDENTITY_LIMIT, FORGOT_PASSWORD_IDENTITY_WINDOW_SECONDS, '尝试过于频繁，请稍后再试')
def forgot_password():
    if request.method == 'POST':
        clear_reset_verification()
        session.pop('reset_user_id', None)
        student_id = request.form.get('student_id', '').strip()
        real_name = request.form.get('real_name', '').strip()

        kept = {'student_id': student_id, 'real_name': real_name}

        if not student_id or not real_name:
            flash('请填写学号和姓名', 'danger')
            return render_template('forgot_password.html', form_data=kept)

        if len(student_id) != 13 or not student_id.isdigit():
            flash('学号必须为 13 位纯数字', 'danger')
            return render_template('forgot_password.html', form_data=kept)

        user = User.query.filter_by(student_id=student_id).first()
        if not user or (user.real_name or '') != real_name:
            flash('学号与姓名不匹配', 'danger')
            return render_template('forgot_password.html', form_data=kept)

        session['reset_user_id'] = user.id
        return redirect(url_for('auth.forgot_password_reset'))

    return render_template('forgot_password.html', form_data={})


FORGOT_PASSWORD_RESET_LIMIT = 5
FORGOT_PASSWORD_RESET_WINDOW_SECONDS = 300


@auth_bp.route('/forgot-password/reset', methods=['GET', 'POST'])
@rate_limit('password_reset', FORGOT_PASSWORD_RESET_LIMIT, FORGOT_PASSWORD_RESET_WINDOW_SECONDS, '重置密码操作过于频繁，请 5 分钟后再试')
def forgot_password_reset():
    user_id = session.get('reset_user_id')
    if not user_id:
        flash('请先验证身份', 'warning')
        return redirect(url_for('auth.forgot_password'))

    user = db.session.get(User, user_id)
    if not user:
        session.pop('reset_user_id', None)
        clear_reset_verification()
        flash('用户不存在', 'danger')
        return redirect(url_for('auth.forgot_password'))

    masked_email = _mask_email(user.email) if user.email else ''

    if request.method == 'POST':
        new_password = request.form.get('new_password', '')
        confirm_password = request.form.get('confirm_password', '')

        def fail(msg):
            flash(msg, 'danger')
            return render_template('forgot_password_reset.html', masked_email=masked_email,
                                   code_verified=is_reset_code_verified_for(user.id))

        if not is_reset_code_verified_for(user.id):
            return fail('请先完成邮箱验证')

        if not new_password or not confirm_password:
            return fail('请填写所有必填字段')

        if len(new_password) < 6:
            return fail('密码长度至少 6 位字符')

        if new_password != confirm_password:
            return fail('两次输入的密码不一致')

        try:
            user.set_password(new_password)
            db.session.commit()
            session.pop('reset_user_id', None)
            clear_reset_verification()
            log_action('密码重置', f'用户 {user.username} 通过邮箱验证重置密码', user.username)
            flash('密码重置成功，请使用新密码登录', 'success')
            return redirect(url_for('auth.login'))
        except Exception:
            db.session.rollback()
            logger.error("重置密码失败", exc_info=True)
            return fail('密码重置失败，请稍后重试')

    return render_template('forgot_password_reset.html', masked_email=masked_email,
                           code_verified=is_reset_code_verified_for(user.id))


@auth_bp.route('/forgot-password/send-code', methods=['POST'])
@rate_limit('forgot_password_send_code', EMAIL_CODE_LIMIT, EMAIL_CODE_WINDOW_SECONDS, '验证码发送过于频繁，请稍后再试')
def forgot_password_send_code():
    try:
        user_id = session.get('reset_user_id')
        if not user_id:
            return jsonify({'success': False, 'message': '请先验证身份'}), 403

        user = db.session.get(User, user_id)
        if not user or not user.email:
            return jsonify({'success': False, 'message': '用户不存在'}), 404

        success, message = send_code_to_email(user.email)
        return jsonify({'success': success, 'message': message})
    except Exception:
        logger.error("忘记密码发送验证码失败", exc_info=True)
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500


@auth_bp.route('/forgot-password/verify-code', methods=['POST'])
@rate_limit('forgot_password_verify_code', VERIFY_CODE_LIMIT, VERIFY_CODE_WINDOW_SECONDS, '验证码尝试过于频繁，请稍后再试')
def forgot_password_verify_code():
    try:
        user_id = session.get('reset_user_id')
        if not user_id:
            return jsonify({'success': False, 'message': '请先验证身份'}), 403

        user = db.session.get(User, user_id)
        if not user or not user.email:
            return jsonify({'success': False, 'message': '用户不存在'}), 404

        data = request.get_json() or {}
        code = (data.get('code') or '').strip()
        if not code:
            return jsonify({'success': False, 'message': '请输入验证码'}), 400

        is_valid, message = verify_code(user.email, code)
        if not is_valid:
            return jsonify({'success': False, 'message': message}), 400

        session['reset_code_verified'] = True
        session['reset_verified_user_id'] = user.id
        session['reset_verified_at'] = time.time()
        return jsonify({'success': True, 'message': '验证成功'})
    except Exception:
        logger.error("忘记密码验证码校验失败", exc_info=True)
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500


def _mask_email(email: str) -> str:
    if not email or '@' not in email:
        return email or ''
    local, domain = email.split('@', 1)
    if len(local) <= 2:
        masked_local = local[0] + '***'
    else:
        masked_local = local[0] + '***' + local[-1]
    return f'{masked_local}@{domain}'


@auth_bp.route('/register', methods=['GET', 'POST'])
@rate_limit('register', LOGIN_LIMIT, LOGIN_WINDOW_SECONDS, '注册尝试过于频繁，请稍后再试')
def register():
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        real_name = request.form.get('real_name', '').strip()
        class_name = request.form.get('class_name', '').strip()
        student_id = request.form.get('student_id', '').strip()

        kept = {'username': username, 'student_id': student_id,
                'real_name': real_name, 'class_name': class_name}

        def fail(msg):
            flash(msg, 'danger')
            return render_template('register.html', form_data=kept)

        if not username or not real_name or not student_id:
            return fail('请填写所有必填字段')

        if len(username) < 3 or len(username) > 20:
            return fail('用户名长度必须在 3-20 个字符之间')

        if len(student_id) != 13 or not student_id.isdigit():
            return fail('学号必须为 13 位纯数字')

        if User.query.filter_by(username=username).first():
            return fail('用户名已存在')

        if User.query.filter_by(student_id=student_id).first():
            return fail('学号已存在')

        session['reg_identity'] = kept
        return redirect(url_for('auth.register_complete'))

    return render_template('register.html', form_data={})


@auth_bp.route('/register/complete', methods=['GET', 'POST'])
def register_complete():
    identity = session.get('reg_identity')
    if not identity:
        flash('请先完成身份信息填写', 'warning')
        return redirect(url_for('auth.register'))

    if request.method == 'POST':
        email = request.form.get('email', '').strip()
        password = request.form.get('password', '')
        confirm_password = request.form.get('confirm_password', '')
        verification_code = request.form.get('verification_code', '').strip()

        kept = {'email': email}

        def fail(msg):
            flash(msg, 'danger')
            return render_template('register_complete.html', form_data=kept, identity=identity)

        agree_terms = request.form.get('agree_terms')
        if not agree_terms:
            return fail('请先阅读并同意服务协议与用户规则')

        if not email or not password or not verification_code:
            return fail('请填写所有必填字段')

        if not EMAIL_REGEX.match(email):
            return fail('邮箱格式不正确')

        if len(password) < 6:
            return fail('密码长度至少 6 位字符')

        if password != confirm_password:
            return fail('两次输入的密码不一致')

        if User.query.filter_by(email=email).first():
            return fail('该邮箱已被注册')

        username = identity['username']
        student_id = identity['student_id']

        if User.query.filter_by(username=username).first():
            session.pop('reg_identity', None)
            flash('用户名已存在，请重新填写', 'danger')
            return redirect(url_for('auth.register'))

        if User.query.filter_by(student_id=student_id).first():
            session.pop('reg_identity', None)
            flash('学号已存在，请重新填写', 'danger')
            return redirect(url_for('auth.register'))

        is_valid, message = verify_code(email, verification_code)
        if not is_valid:
            return fail(f'验证码错误：{message}')

        try:
            user = User(
                username=username,
                student_id=student_id,
                email=email,
                real_name=identity.get('real_name') or None,
                class_name=identity.get('class_name') or None,
            )
            user.set_password(password)
            db.session.add(user)
            db.session.commit()
            session.pop('reg_identity', None)
            log_action('用户注册', f'新用户: {username}, 学号: {student_id}, 邮箱: {email}', username)
            flash('注册成功，请登录', 'success')
            return redirect(url_for('auth.login'))
        except Exception:
            db.session.rollback()
            return fail('注册失败，请稍后重试')

    return render_template('register_complete.html', form_data={}, identity=identity)

@auth_bp.route('/login', methods=['GET', 'POST'])
@rate_limit('login', LOGIN_LIMIT, LOGIN_WINDOW_SECONDS, '登录尝试过于频繁，请稍后再试')
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        user = User.query.filter_by(username=username).first()

        if user and user.check_password(password):
            if user.is_banned:
                remaining = user.ban_remaining_seconds
                mins = (remaining + 59) // 60
                log_action('封禁拦截', f'用户 {username} 在封禁期内尝试登录', username)
                flash(f'账号已被封禁，剩余 {mins} 分钟后可重新登录', 'danger')
                return redirect(url_for('auth.login'))
            mark_current_session_offline()
            logout_user()
            session['user_type'] = 'user'
            login_user(user)
            create_login_session_record(user, 'user')
            db.session.commit()
            log_action('用户登录', f'用户 {username} 登录成功', username)
            flash('登录成功，欢迎回来！', 'success')
            return redirect(url_for('user.books'))

        log_action('登录失败', f'用户名: {username}', 'guest')
        flash('用户名或密码错误', 'danger')

    return render_template('login.html')

@auth_bp.route('/admin/login', methods=['GET', 'POST'])
@rate_limit('admin_login', LOGIN_LIMIT, LOGIN_WINDOW_SECONDS, '登录尝试过于频繁，请稍后再试')
def admin_login():
    if is_mobile_device():
        if request.method == 'POST':
            return {"success": False, "message": "手机端不能进入管理员页面，请切换PC端"}, 403
        else:
            flash('手机端不能进入管理员页面，请切换PC端', 'warning')
            return redirect(url_for('auth.login'))

    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')

        admin = Admin.query.filter_by(username=username).first()

        if admin and admin.check_password(password):
            mark_current_session_offline()
            logout_user()
            session['user_type'] = 'admin'
            admin.last_login = cst_now()
            login_user(admin)
            create_login_session_record(admin, 'admin')
            db.session.commit()
            log_action('管理员登录', f'管理员 {username} 登录成功', username)
            flash('管理员登录成功，欢迎回来！', 'success')
            return redirect(url_for('admin.admin_index'))
        else:
            log_action('管理员登录失败', f'用户名: {username}', 'guest')
            flash('用户名或密码错误', 'danger')

    return render_template('admin_login.html')

@auth_bp.route('/logout')
@login_required
def logout():
    username = current_user.username
    log_action('用户登出', f'用户 {username} 退出登录', username)
    mark_current_session_offline()
    session.pop('user_type', None)
    logout_user()
    db.session.commit()
    return redirect(url_for('user.index'))
