# blueprints/admin/borrows.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>import threading</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 2 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 3 | <code>from flask import Blueprint, jsonify</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 4 | <code>from flask_login import login_required</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 5 | <code>from sqlalchemy.orm import joinedload</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 6 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 7 | <code>from email_utils import send_rejection_email</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 8 | <code>from models import BorrowRecord, db</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 9 | <code>from socketio_emitters import emit_book_catalog_changed, emit_borrow_status, emit_reservation_changed, emit_stock_changed</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 10 | <code>from utils import admin_required, cst_now, db_transaction, log_action</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 11 | <code>from utils.cache import cache_delete_pattern</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 12 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 13 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 14 | <code>def register_borrow_routes(bp: Blueprint) -&gt; None:</code> | 定义 `register_borrow_routes` 函数，承载当前模块中的一段可复用处理流程。 |
| 15 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 16 | <code>    @bp.route(&#x27;/admin/approve_reservation/&lt;int:record_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 17 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 18 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 19 | <code>    def approve_reservation(record_id):</code> | 定义 `approve_reservation` 函数，承载当前模块中的一段可复用处理流程。 |
| 20 | <code>        record = db.session.get(BorrowRecord, record_id, options=[joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)])</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 21 | <code>        if not record or record.status != &#x27;pending&#x27;:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 22 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;当前记录不可操作&#x27;}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 23 | <code>        username = record.user.username</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 24 | <code>        book_title = record.book.title</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 25 | <code>        pickup_date = cst_now()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 26 | <code>        action_error = None</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 27 | <code>        with db_transaction() as tx:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 28 | <code>            updated_rows = BorrowRecord.query.filter(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 29 | <code>                BorrowRecord.id == record_id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 30 | <code>                BorrowRecord.status == &#x27;pending&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 31 | <code>            ).update({</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 32 | <code>                BorrowRecord.status: &#x27;picked_up&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 33 | <code>                BorrowRecord.pickup_date: pickup_date,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 34 | <code>            }, synchronize_session=False)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 35 | <code>            if not updated_rows:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 36 | <code>                action_error = &#x27;当前记录不可操作&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 37 | <code>        if tx.error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 38 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: tx.error}), 500</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 39 | <code>        if action_error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 40 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: action_error}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 41 | <code>        log_action(&#x27;审核预约&#x27;, f&#x27;同意用户 {username} 领取图书: {book_title}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 42 | <code>        cache_delete_pattern(&#x27;dashboard_stats:*&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 43 | <code>        emit_reservation_changed(&#x27;approve&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 44 | <code>        emit_borrow_status(record.user_id)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 45 | <code>        return jsonify({&#x27;success&#x27;: True, &#x27;message&#x27;: &#x27;已同意领取图书&#x27;})</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 46 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 47 | <code>    @bp.route(&#x27;/admin/reject_reservation/&lt;int:record_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 48 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 49 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 50 | <code>    def reject_reservation(record_id):</code> | 定义 `reject_reservation` 函数，承载当前模块中的一段可复用处理流程。 |
| 51 | <code>        record = db.session.get(BorrowRecord, record_id, options=[joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)])</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 52 | <code>        if not record or record.status != &#x27;pending&#x27;:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 53 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;当前记录不可操作&#x27;}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 54 | <code>        user = record.user</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 55 | <code>        book = record.book</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 56 | <code>        reject_date = cst_now()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 57 | <code>        action_error = None</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 58 | <code>        with db_transaction() as tx:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 59 | <code>            updated_rows = BorrowRecord.query.filter(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 60 | <code>                BorrowRecord.id == record_id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 61 | <code>                BorrowRecord.status == &#x27;pending&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 62 | <code>            ).update({</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 63 | <code>                BorrowRecord.status: &#x27;rejected&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 64 | <code>                BorrowRecord.reject_date: reject_date,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 65 | <code>            }, synchronize_session=False)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 66 | <code>            if updated_rows:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 67 | <code>                book.restore_stock()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 68 | <code>            else:</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 69 | <code>                action_error = &#x27;当前记录不可操作&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 70 | <code>        if tx.error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 71 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: tx.error}), 500</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 72 | <code>        if action_error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 73 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: action_error}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 74 | <code>        log_action(&#x27;拒绝预约&#x27;, f&#x27;拒绝用户 {user.username} 领取图书: {book.title}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 75 | <code>        cache_delete_pattern(&#x27;dashboard_stats:*&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 76 | <code>        emit_reservation_changed(&#x27;reject&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 77 | <code>        emit_borrow_status(user.id)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 78 | <code>        emit_stock_changed(book.id)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 79 | <code>        threading.Thread(</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 80 | <code>            target=send_rejection_email,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 81 | <code>            args=(</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 82 | <code>                user.email,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 83 | <code>                user.username,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 84 | <code>                book.title,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 85 | <code>                reject_date.strftime(&#x27;%Y-%m-%d %H:%M&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 86 | <code>            ),</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 87 | <code>            daemon=True,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 88 | <code>        ).start()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 89 | <code>        return jsonify({&#x27;success&#x27;: True, &#x27;message&#x27;: &#x27;已拒绝领取&#x27;})</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 90 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 91 | <code>    @bp.route(&#x27;/admin/return_book/&lt;int:record_id&gt;&#x27;, methods=[&#x27;POST&#x27;])</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 92 | <code>    @login_required</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 93 | <code>    @admin_required()</code> | 装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。 |
| 94 | <code>    def admin_return_book(record_id):</code> | 定义 `admin_return_book` 函数，承载当前模块中的一段可复用处理流程。 |
| 95 | <code>        record = db.session.get(BorrowRecord, record_id, options=[joinedload(BorrowRecord.user), joinedload(BorrowRecord.book)])</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 96 | <code>        if not record or record.status != &#x27;picked_up&#x27;:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 97 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: &#x27;当前记录不可操作&#x27;}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 98 | <code>        book = record.book</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 99 | <code>        return_date = cst_now()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 100 | <code>        action_error = None</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 101 | <code>        with db_transaction(error_message=&#x27;归还操作失败&#x27;) as tx:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 102 | <code>            updated_rows = BorrowRecord.query.filter(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 103 | <code>                BorrowRecord.id == record_id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 104 | <code>                BorrowRecord.status == &#x27;picked_up&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 105 | <code>            ).update({</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 106 | <code>                BorrowRecord.status: &#x27;returned&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 107 | <code>                BorrowRecord.return_date: return_date,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 108 | <code>            }, synchronize_session=False)</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 109 | <code>            if updated_rows:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 110 | <code>                book.restore_stock()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 111 | <code>                book.increment_borrow_count()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 112 | <code>            else:</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 113 | <code>                action_error = &#x27;当前记录不可操作&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 114 | <code>        if tx.error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 115 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: tx.error}), 500</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 116 | <code>        if action_error:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 117 | <code>            return jsonify({&#x27;success&#x27;: False, &#x27;message&#x27;: action_error}), 409</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 118 | <code>        log_action(&#x27;管理员归还图书&#x27;, f&#x27;书名: {book.title}, 记录ID: {record_id}&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 119 | <code>        cache_delete_pattern(&#x27;dashboard_stats:*&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 120 | <code>        emit_reservation_changed(&#x27;return&#x27;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 121 | <code>        emit_borrow_status(record.user_id)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 122 | <code>        emit_stock_changed(book.id)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 123 | <code>        emit_book_catalog_changed(&#x27;return&#x27;, book.id)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 124 | <code>        return jsonify({&#x27;success&#x27;: True, &#x27;message&#x27;: &#x27;归还成功&#x27;})</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
