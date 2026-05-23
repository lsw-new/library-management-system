from datetime import timedelta

from flask import session
from flask_login import current_user

from extensions import db, naive_cst_now
from .helpers import get_user_type

HEARTBEAT_THROTTLE_SECONDS = 30
SESSION_EXPIRE_MINUTES = 5


def _mark_login_history_offline(login_history_id, when):
    if not login_history_id:
        return
    from models import LoginHistory
    record = db.session.get(LoginHistory, login_history_id)
    if record and record.is_online:
        record.is_online = False
        record.last_seen = when
        record.logout_time = when


def create_login_session_record(user, user_type: str) -> None:
    from models import LoginHistory, OnlineSession
    from .helpers import get_client_ip
    from .ip_location import get_ip_location

    now = naive_cst_now()
    ip_address = get_client_ip()

    location = get_ip_location(ip_address)
    geo_location = location if location not in ('未知', '本机') else None

    existing = OnlineSession.query.filter_by(user_id=user.id, user_type=user_type).first()
    if existing:
        _mark_login_history_offline(existing.login_history_id, now)

    login_record = LoginHistory(
        user_id=user.id,
        username_snapshot=user.username,
        user_type=user_type,
        ip_address=ip_address,
        login_time=now,
        last_seen=now,
        is_online=True,
    )
    db.session.add(login_record)
    db.session.flush()

    if existing:
        existing.username = user.username
        existing.ip_address = ip_address
        existing.login_time = now
        existing.last_seen = now
        existing.login_history_id = login_record.id
        existing.is_kicked = False
        existing.geo_location = geo_location
    else:
        db.session.add(OnlineSession(
            user_id=user.id,
            user_type=user_type,
            username=user.username,
            ip_address=ip_address,
            login_time=now,
            last_seen=now,
            login_history_id=login_record.id,
            is_kicked=False,
            geo_location=geo_location,
        ))

    session['login_history_id'] = login_record.id


def mark_current_session_offline() -> None:
    from models import OnlineSession
    login_history_id = session.get('login_history_id')
    now = naive_cst_now()

    _mark_login_history_offline(login_history_id, now)

    if current_user.is_authenticated:
        user_type = get_user_type(current_user)
        OnlineSession.query.filter_by(
            user_id=current_user.id, user_type=user_type
        ).delete(synchronize_session=False)

    session.pop('login_history_id', None)


def cleanup_expired_online_users() -> None:
    from models import LoginHistory, OnlineSession
    cutoff = naive_cst_now() - timedelta(minutes=SESSION_EXPIRE_MINUTES)
    expired = OnlineSession.query.filter(OnlineSession.last_seen < cutoff).all()
    if not expired:
        return
    history_updates = []
    for sess in expired:
        if sess.login_history_id:
            history_updates.append((sess.login_history_id, sess.last_seen))
    if history_updates:
        history_ids = [h_id for h_id, _ in history_updates]
        LoginHistory.query.filter(
            LoginHistory.id.in_(history_ids),
            LoginHistory.is_online == True,
        ).update({
            LoginHistory.is_online: False,
            LoginHistory.last_seen: cutoff,
            LoginHistory.logout_time: cutoff,
        }, synchronize_session=False)
    expired_ids = [sess.id for sess in expired]
    OnlineSession.query.filter(OnlineSession.id.in_(expired_ids)).delete(synchronize_session=False)
    try:
        db.session.commit()
        from socketio_emitters import emit_online_changed
        emit_online_changed()
    except Exception:
        db.session.rollback()


def list_active_sessions(search: str | None = None):
    from models import OnlineSession
    q = OnlineSession.query.filter(OnlineSession.is_kicked == False)
    if search:
        s = f'%{search.lower()}%'
        q = q.filter(
            db.func.lower(OnlineSession.username).like(s)
            | db.func.lower(OnlineSession.user_type).like(s)
        )
    return q.order_by(OnlineSession.login_time.desc()).all()


def count_active_sessions() -> int:
    from models import OnlineSession
    return OnlineSession.query.filter(OnlineSession.is_kicked == False).count()


def kick_active_session(user_id: int, user_type: str = 'user') -> str | None:
    from models import OnlineSession
    sess = OnlineSession.query.filter_by(user_id=user_id, user_type=user_type).first()
    if not sess:
        return None
    username = sess.username
    now = naive_cst_now()
    sess.is_kicked = True
    sess.last_seen = now
    _mark_login_history_offline(sess.login_history_id, now)
    try:
        db.session.commit()
    except Exception:
        db.session.rollback()
        return None
    return username


def authenticate_active_session(user_id: int, user_type: str,
                                session_history_id: int | None, ip: str) -> str:
    from models import OnlineSession
    sess = OnlineSession.query.filter_by(user_id=user_id, user_type=user_type).first()
    if not sess:
        return 'missing'

    if sess.is_kicked:
        _mark_login_history_offline(sess.login_history_id, naive_cst_now())
        db.session.delete(sess)
        try:
            db.session.commit()
        except Exception:
            db.session.rollback()
        return 'kicked'

    if session_history_id and sess.login_history_id != session_history_id:
        return 'superseded'

    now = naive_cst_now()
    if (now - sess.last_seen).total_seconds() >= HEARTBEAT_THROTTLE_SECONDS:
        sess.last_seen = now
        sess.ip_address = ip
        if not sess.geo_location:
            from .ip_location import get_ip_location_cached, schedule_ip_lookup
            cached = get_ip_location_cached(ip)
            if cached and cached not in ('未知', '本机'):
                sess.geo_location = cached
            else:
                schedule_ip_lookup(ip)

    return 'ok'
