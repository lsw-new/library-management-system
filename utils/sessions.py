# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from datetime import timedelta
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask import session
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from flask_login import current_user
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db, naive_cst_now
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from .helpers import get_user_type
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
HEARTBEAT_THROTTLE_SECONDS = 30
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
SESSION_EXPIRE_MINUTES = 5
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_mark_login_history_offline` 函数，封装一段可复用的后端处理流程。
def _mark_login_history_offline(login_history_id, when):
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not login_history_id:
        # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
        return
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import LoginHistory
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    record = db.session.get(LoginHistory, login_history_id)
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if record and record.is_online:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record.is_online = False
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record.last_seen = when
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        record.logout_time = when
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `create_login_session_record` 函数，封装一段可复用的后端处理流程。
def create_login_session_record(user, user_type: str) -> None:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import LoginHistory, OnlineSession
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from .helpers import get_client_ip
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from .ip_location import get_ip_location
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    ip_address = get_client_ip()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    geo_location = get_ip_location(ip_address) or None
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    existing = OnlineSession.query.filter_by(user_id=user.id, user_type=user_type).first()
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if existing:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        _mark_login_history_offline(existing.login_history_id, now)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_record = LoginHistory(
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        user_id=user.id,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        username_snapshot=user.username,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        user_type=user_type,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        ip_address=ip_address,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        login_time=now,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        last_seen=now,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        is_online=True,
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    db.session.add(login_record)
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    db.session.flush()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if existing:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        existing.username = user.username
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        existing.ip_address = ip_address
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        existing.login_time = now
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        existing.last_seen = now
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        existing.login_history_id = login_record.id
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        existing.is_kicked = False
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        existing.geo_location = geo_location
    # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
    else:
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        db.session.add(OnlineSession(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_id=user.id,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_type=user_type,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            username=user.username,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ip_address=ip_address,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            login_time=now,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            last_seen=now,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            login_history_id=login_record.id,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            is_kicked=False,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            geo_location=geo_location,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        ))
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    session['login_history_id'] = login_record.id
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `mark_current_session_offline` 函数，封装一段可复用的后端处理流程。
def mark_current_session_offline() -> None:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import OnlineSession
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    login_history_id = session.get('login_history_id')
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    _mark_login_history_offline(login_history_id, now)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if current_user.is_authenticated:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        user_type = get_user_type(current_user)
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        OnlineSession.query.filter_by(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            user_id=current_user.id, user_type=user_type
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        ).delete(synchronize_session=False)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    session.pop('login_history_id', None)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `cleanup_expired_online_users` 函数，封装一段可复用的后端处理流程。
def cleanup_expired_online_users() -> None:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import LoginHistory, OnlineSession
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    cutoff = naive_cst_now() - timedelta(minutes=SESSION_EXPIRE_MINUTES)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    expired = OnlineSession.query.filter(OnlineSession.last_seen < cutoff).all()
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not expired:
        # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
        return
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    history_updates = []
    # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
    for sess in expired:
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if sess.login_history_id:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            history_updates.append((sess.login_history_id, sess.last_seen))
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if history_updates:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        history_ids = [h_id for h_id, _ in history_updates]
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        LoginHistory.query.filter(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            LoginHistory.id.in_(history_ids),
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            LoginHistory.is_online == True,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        ).update({
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            LoginHistory.is_online: False,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            LoginHistory.last_seen: cutoff,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            LoginHistory.logout_time: cutoff,
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        }, synchronize_session=False)
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    expired_ids = [sess.id for sess in expired]
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    OnlineSession.query.filter(OnlineSession.id.in_(expired_ids)).delete(synchronize_session=False)
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from socketio_emitters import emit_online_changed
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_online_changed()
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `list_active_sessions` 函数，封装一段可复用的后端处理流程。
def list_active_sessions(search: str | None = None):
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import OnlineSession
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    q = OnlineSession.query.filter(OnlineSession.is_kicked == False)
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if search:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        s = f'%{search.lower()}%'
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        q = q.filter(
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.func.lower(OnlineSession.username).like(s)
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            | db.func.lower(OnlineSession.user_type).like(s)
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return q.order_by(OnlineSession.login_time.desc()).all()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `count_active_sessions` 函数，封装一段可复用的后端处理流程。
def count_active_sessions() -> int:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import OnlineSession
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return OnlineSession.query.filter(OnlineSession.is_kicked == False).count()
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `kick_active_session` 函数，封装一段可复用的后端处理流程。
def kick_active_session(user_id: int, user_type: str = 'user') -> str | None:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import OnlineSession
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sess = OnlineSession.query.filter_by(user_id=user_id, user_type=user_type).first()
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not sess:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    username = sess.username
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sess.is_kicked = True
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sess.last_seen = now
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    _mark_login_history_offline(sess.login_history_id, now)
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.commit()
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.rollback()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return None
    # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from socketio_emitters import emit_force_logout, emit_online_changed
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_force_logout(user_id)
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        emit_online_changed()
    # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception:
        # 逐行注释：显式结束当前分支或作为占位语句，保持代码结构完整。
        pass
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return username
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `authenticate_active_session` 函数，封装一段可复用的后端处理流程。
def authenticate_active_session(user_id: int, user_type: str,
                                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                                session_history_id: int | None, ip: str) -> str:
    # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
    from models import OnlineSession
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    sess = OnlineSession.query.filter_by(user_id=user_id, user_type=user_type).first()
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not sess:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return 'missing'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if sess.is_kicked:
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        _mark_login_history_offline(sess.login_history_id, naive_cst_now())
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.delete(sess)
        # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.commit()
        # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
        except Exception:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            db.session.rollback()
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return 'kicked'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if session_history_id and sess.login_history_id != session_history_id:
        # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return 'superseded'
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    now = naive_cst_now()
    # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if (now - sess.last_seen).total_seconds() >= HEARTBEAT_THROTTLE_SECONDS:
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        sess.last_seen = now
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        sess.ip_address = ip
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not sess.geo_location:
            # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
            from .ip_location import get_ip_location_cached, schedule_ip_lookup
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            cached = get_ip_location_cached(ip)
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if cached:
                # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
                sess.geo_location = cached
            # 逐行注释：条件判断的兜底分支，处理前面条件没有命中的场景。
            else:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                schedule_ip_lookup(ip)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return 'ok'
