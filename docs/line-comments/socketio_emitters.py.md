# socketio_emitters.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>from extensions import socketio</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 2 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 3 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 4 | <code>def emit_online_changed():</code> | 定义 `emit_online_changed` 函数，承载当前模块中的一段可复用处理流程。 |
| 5 | <code>    from utils.sessions import list_active_sessions</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 6 | <code>    users = list_active_sessions()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 7 | <code>    socketio.emit(&#x27;online_users_changed&#x27;, {</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 8 | <code>        &#x27;count&#x27;: len(users),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 9 | <code>        &#x27;users&#x27;: [{</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 10 | <code>            &#x27;user_id&#x27;: u.user_id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 11 | <code>            &#x27;username&#x27;: u.username,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 12 | <code>            &#x27;user_type&#x27;: u.user_type,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 13 | <code>            &#x27;ip_address&#x27;: u.ip_address or &#x27;&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 14 | <code>            &#x27;geo_location&#x27;: u.geo_location or &#x27;&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 15 | <code>            &#x27;last_seen&#x27;: u.last_seen.strftime(&#x27;%H:%M:%S&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 16 | <code>            &#x27;login_time&#x27;: u.login_time.strftime(&#x27;%H:%M:%S&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 17 | <code>        } for u in users],</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 18 | <code>    }, room=&#x27;admins&#x27;)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 19 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 20 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 21 | <code>def emit_reservation_changed(action: str = &#x27;update&#x27;):</code> | 定义 `emit_reservation_changed` 函数，承载当前模块中的一段可复用处理流程。 |
| 22 | <code>    from sqlalchemy import case, func</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 23 | <code>    from models import BorrowRecord</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 24 | <code>    from extensions import db</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 25 | <code>    current_statuses = [&#x27;pending&#x27;, &#x27;picked_up&#x27;]</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 26 | <code>    history_statuses = [&#x27;returned&#x27;, &#x27;rejected&#x27;, &#x27;expired&#x27;]</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 27 | <code>    result = db.session.query(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 28 | <code>        func.sum(case((BorrowRecord.status == &#x27;pending&#x27;, 1), else_=0)).label(&#x27;pending_count&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 29 | <code>        func.sum(case((BorrowRecord.status.in_(current_statuses), 1), else_=0)).label(&#x27;current_count&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 30 | <code>        func.sum(case((BorrowRecord.status.in_(history_statuses), 1), else_=0)).label(&#x27;history_count&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 31 | <code>        func.max(BorrowRecord.id).label(&#x27;latest_id&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 32 | <code>    ).filter(</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 33 | <code>        BorrowRecord.status.in_(current_statuses + history_statuses)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 34 | <code>    ).one()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 35 | <code>    socketio.emit(&#x27;reservation_changed&#x27;, {</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 36 | <code>        &#x27;pending_count&#x27;: result.pending_count or 0,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 37 | <code>        &#x27;current_count&#x27;: result.current_count or 0,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 38 | <code>        &#x27;history_count&#x27;: result.history_count or 0,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 39 | <code>        &#x27;latest_id&#x27;: result.latest_id or 0,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 40 | <code>        &#x27;action&#x27;: action,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 41 | <code>    }, room=&#x27;admins&#x27;)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 42 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 43 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 44 | <code>def emit_borrow_status(user_id: int):</code> | 定义 `emit_borrow_status` 函数，承载当前模块中的一段可复用处理流程。 |
| 45 | <code>    from models import BorrowRecord</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 46 | <code>    from blueprints.user_helpers import serialize_borrow_record, build_borrow_stats</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 47 | <code>    records = BorrowRecord.query.filter_by(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 48 | <code>        user_id=user_id</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 49 | <code>    ).order_by(BorrowRecord.borrow_date.desc()).limit(50).all()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 50 | <code>    socketio.emit(&#x27;borrow_status_changed&#x27;, {</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 51 | <code>        &#x27;records&#x27;: [serialize_borrow_record(r) for r in records],</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 52 | <code>        &#x27;stats&#x27;: build_borrow_stats(records),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 53 | <code>    }, room=f&#x27;user_{user_id}&#x27;)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 54 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 55 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 56 | <code>def emit_stock_changed(book_id: int):</code> | 定义 `emit_stock_changed` 函数，承载当前模块中的一段可复用处理流程。 |
| 57 | <code>    from models import Book</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 58 | <code>    from extensions import db</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 59 | <code>    book = db.session.get(Book, book_id, populate_existing=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 60 | <code>    if book:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 61 | <code>        socketio.emit(&#x27;book_stock_changed&#x27;, {</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 62 | <code>            &#x27;book_id&#x27;: book.id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 63 | <code>            &#x27;title&#x27;: book.title,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 64 | <code>            &#x27;stock&#x27;: book.stock,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 65 | <code>            &#x27;total&#x27;: book.total,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 66 | <code>            &#x27;borrow_count&#x27;: book.borrow_count,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 67 | <code>            &#x27;available&#x27;: book.available,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 68 | <code>        }, room=&#x27;books&#x27;)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 69 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 70 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 71 | <code>def emit_book_catalog_changed(action: str = &#x27;update&#x27;, book_id: int | None = None):</code> | 定义 `emit_book_catalog_changed` 函数，承载当前模块中的一段可复用处理流程。 |
| 72 | <code>    socketio.emit(&#x27;book_catalog_changed&#x27;, {</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 73 | <code>        &#x27;action&#x27;: action,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 74 | <code>        &#x27;book_id&#x27;: book_id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 75 | <code>    }, room=&#x27;books&#x27;)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 76 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 77 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 78 | <code>def emit_new_log(log_entry: dict):</code> | 定义 `emit_new_log` 函数，承载当前模块中的一段可复用处理流程。 |
| 79 | <code>    socketio.emit(&#x27;new_log&#x27;, {&#x27;log&#x27;: log_entry}, room=&#x27;admins&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 80 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 81 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 82 | <code>def emit_force_logout(user_id: int, reason: str = &#x27;您已被管理员强制下线&#x27;):</code> | 定义 `emit_force_logout` 函数，承载当前模块中的一段可复用处理流程。 |
| 83 | <code>    socketio.emit(&#x27;force_logout&#x27;, {&#x27;reason&#x27;: reason}, room=f&#x27;user_{user_id}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
