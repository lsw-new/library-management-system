import logging

from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from flask_login import login_user, logout_user, login_required, current_user
from models import db, User, Admin
from utils import log_action, mark_current_session_offline, create_login_session_record, is_mobile_device
from email_utils import send_code_to_email, verify_code

auth_bp = Blueprint('auth', __name__)
logger = logging.getLogger(__name__)

@auth_bp.route('/send-verification-code', methods=['POST'])
def send_verification_code():
    try:
        data = request.get_json()
        if not data:
            return jsonify({'success': False, 'message': '无效的请求数据'}), 400

        email = data.get('email')
        if not email:
            return jsonify({'success': False, 'message': '请输入邮箱地址'}), 400

        success, message = send_code_to_email(email)
        return jsonify({'success': success, 'message': message})
    except Exception:
        logger.error("发送验证码失败", exc_info=True)
        return jsonify({'success': False, 'message': '服务器错误，请稍后重试'}), 500

@auth_bp.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form.get('username', '').strip()
        student_id = request.form.get('student_id', '').strip()
        email = request.form.get('email', '').strip()
        password = request.form.get('password', '')
        verification_code = request.form.get('verification_code', '').strip()

        # 用失败时回传的表单数据，保留用户已填内容（密码不回传）
        kept = {'username': username, 'student_id': student_id, 'email': email}

        def fail(msg):
            flash(msg, 'danger')
            return render_template('register.html', form_data=kept)

        agree_terms = request.form.get('agree_terms')
        if not agree_terms:
            return fail('请先阅读并同意服务协议与用户规则')

        if not username or not student_id or not email or not password or not verification_code:
            return fail('请填写所有必填字段')

        if len(username) < 3 or len(username) > 20:
            return fail('用户名长度必须在 3-20 个字符之间')

        if len(password) < 6:
            return fail('密码长度至少 6 位字符')

        if len(student_id) != 13 or not student_id.isdigit():
            return fail('学号必须为 13 位纯数字')

        # 先检查唯一性，再消耗验证码（避免验证码被白白消耗）
        if User.query.filter_by(username=username).first():
            return fail('用户名已存在')

        if User.query.filter_by(student_id=student_id).first():
            return fail('学号已存在')

        if User.query.filter_by(email=email).first():
            return fail('该邮箱已被注册')

        is_valid, message = verify_code(email, verification_code)
        if not is_valid:
            return fail(f'验证码错误：{message}')

        try:
            user = User(username=username, student_id=student_id, email=email)
            user.set_password(password)
            db.session.add(user)
            db.session.commit()
            log_action('用户注册', f'新用户: {username}, 学号: {student_id}, 邮箱: {email}', username)
            flash('注册成功，请登录', 'success')
            return redirect(url_for('auth.login'))
        except Exception:
            db.session.rollback()
            return fail('注册失败，请稍后重试')

    return render_template('register.html', form_data={})

@auth_bp.route('/login', methods=['GET', 'POST'])
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
            from utils import cst_now
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
