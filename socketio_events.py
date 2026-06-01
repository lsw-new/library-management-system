from flask import request, session
from flask_login import current_user
from flask_socketio import disconnect, join_room

from extensions import socketio
from utils.helpers import get_client_ip
from utils.sessions import authenticate_active_session


@socketio.on('connect')
def handle_connect():
    if not current_user.is_authenticated:
        return False
    join_room(f'user_{current_user.id}')
    join_room('books')
    if getattr(current_user, 'is_admin', False):
        join_room('admins')


@socketio.on('disconnect')
def handle_disconnect():
    pass


@socketio.on('heartbeat')
def handle_heartbeat(data=None):
    if not current_user.is_authenticated:
        disconnect()
        return {'ok': False}

    user_type = 'admin' if getattr(current_user, 'is_admin', False) else 'user'
    sess_history_id = session.get('login_history_id')
    ip = get_client_ip()

    result = authenticate_active_session(
        user_id=current_user.id,
        user_type=user_type,
        session_history_id=sess_history_id,
        ip=ip,
    )
    if result != 'ok':
        return {'ok': False, 'reason': result}
    return {'ok': True}


@socketio.on('join_books_room')
def handle_join_books(data=None):
    if current_user.is_authenticated:
        join_room('books')


@socketio.on('leave_books_room')
def handle_leave_books(data=None):
    from flask_socketio import leave_room
    if current_user.is_authenticated:
        leave_room('books')
