from contextlib import contextmanager
from functools import wraps

from flask import jsonify, redirect, url_for, flash, current_app
from flask_login import current_user

from extensions import db
from .helpers import is_mobile_device


def admin_required(json_response: bool = True):
    def decorator(view):
        @wraps(view)
        def wrapper(*args, **kwargs):
            if is_mobile_device():
                if json_response:
                    return jsonify({'success': False, 'message': '手机端不能进入管理员页面，请切换PC端'}), 403
                flash('手机端不能进入管理员页面，请切换PC端', 'warning')
                return redirect(url_for('auth.login'))
            if not getattr(current_user, 'is_admin', False):
                if json_response:
                    return jsonify({'success': False, 'message': '权限不足'}), 403
                flash('权限不足', 'danger')
                return redirect(url_for('user.index'))
            return view(*args, **kwargs)
        return wrapper
    return decorator


@contextmanager
def db_transaction(error_message: str = '操作失败'):
    class _Tx:
        error = None
    tx = _Tx()
    try:
        yield tx
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        tx.error = error_message
        try:
            current_app.logger.exception(e)
        except Exception:
            pass
