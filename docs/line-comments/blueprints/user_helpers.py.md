# blueprints/user_helpers.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>from collections import Counter</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 2 | <code>from datetime import datetime</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 3 | <code>import re</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 4 | <code>from typing import Any</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 5 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 6 | <code>from flask import request</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 7 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 8 | <code>from models import db, Book, BorrowRecord</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 9 | <code>from utils import naive_cst_now, get_csrf_token, validate_csrf_token</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 10 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 11 | <code>SEARCH_MAX_LENGTH = 64</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 12 | <code>BOOK_SORT_OPTIONS = {&#x27;newest&#x27;, &#x27;popular&#x27;, &#x27;available&#x27;, &#x27;title&#x27;}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 13 | <code>DEFAULT_BOOK_SORT = &#x27;newest&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 14 | <code>_FULLTEXT_OPERATOR_RE = re.compile(r&#x27;[+\-&gt;&lt;()~*&quot;@]&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 15 | <code>BORROW_STATUS_KEYS = (&#x27;pending&#x27;, &#x27;picked_up&#x27;, &#x27;returned&#x27;, &#x27;rejected&#x27;, &#x27;expired&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 16 | <code>BORROW_ACTION_CSRF_SESSION_KEY = &#x27;borrow_action_csrf_token&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 17 | <code>AVATAR_MAX_SIZE = 3 * 1024 * 1024</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 18 | <code>AVATAR_SUBFOLDER = &#x27;avatars&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 19 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 20 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 21 | <code>def _sanitize_fulltext_query(q: str) -&gt; str:</code> | 定义 `_sanitize_fulltext_query` 函数，承载当前模块中的一段可复用处理流程。 |
| 22 | <code>    &quot;&quot;&quot;Remove MySQL FULLTEXT BOOLEAN MODE operators to prevent query injection.&quot;&quot;&quot;</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 23 | <code>    return _FULLTEXT_OPERATOR_RE.sub(&#x27; &#x27;, q).strip()</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 24 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 25 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 26 | <code>def normalize_book_search(raw_search: str) -&gt; str:</code> | 定义 `normalize_book_search` 函数，承载当前模块中的一段可复用处理流程。 |
| 27 | <code>    sanitized = _sanitize_fulltext_query(raw_search)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 28 | <code>    return re.sub(r&#x27;\s+&#x27;, &#x27; &#x27;, sanitized).strip()[:SEARCH_MAX_LENGTH]</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 29 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 30 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 31 | <code>def normalize_sort(value: str | None) -&gt; str:</code> | 定义 `normalize_sort` 函数，承载当前模块中的一段可复用处理流程。 |
| 32 | <code>    return value if value in BOOK_SORT_OPTIONS else DEFAULT_BOOK_SORT</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 33 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 34 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 35 | <code>def apply_book_search_filters(query: Any, search: str) -&gt; Any:</code> | 定义 `apply_book_search_filters` 函数，承载当前模块中的一段可复用处理流程。 |
| 36 | <code>    if not search:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 37 | <code>        return query</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 38 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 39 | <code>    return query.filter(</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 40 | <code>        (Book.title.contains(search)) |</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 41 | <code>        (Book.author.contains(search)) |</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 42 | <code>        (Book.category.contains(search)) |</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 43 | <code>        (Book.isbn.contains(search))</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 44 | <code>    )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 45 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 46 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 47 | <code>def apply_book_sort(query: Any, sort: str) -&gt; Any:</code> | 定义 `apply_book_sort` 函数，承载当前模块中的一段可复用处理流程。 |
| 48 | <code>    if sort == &#x27;popular&#x27;:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 49 | <code>        return query.order_by(Book.borrow_count.desc(), Book.id.desc())</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 50 | <code>    if sort == &#x27;available&#x27;:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 51 | <code>        return query.order_by(Book.stock.desc(), Book.id.desc())</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 52 | <code>    if sort == &#x27;title&#x27;:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 53 | <code>        return query.order_by(Book.title.asc())</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 54 | <code>    return query.order_by(Book.id.desc())</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 55 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 56 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 57 | <code>def serialize_borrow_record(record: BorrowRecord) -&gt; dict[str, object]:</code> | 定义 `serialize_borrow_record` 函数，承载当前模块中的一段可复用处理流程。 |
| 58 | <code>    def fmt(value: datetime | None, pattern: str = &#x27;%Y-%m-%d %H:%M&#x27;) -&gt; str | None:</code> | 定义 `fmt` 函数，承载当前模块中的一段可复用处理流程。 |
| 59 | <code>        return value.strftime(pattern) if value else None</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 60 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 61 | <code>    return {</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 62 | <code>        &#x27;id&#x27;: record.id,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 63 | <code>        &#x27;status&#x27;: record.status,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 64 | <code>        &#x27;borrow_date&#x27;: fmt(record.borrow_date),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 65 | <code>        &#x27;return_date&#x27;: fmt(record.return_date, &#x27;%Y-%m-%d&#x27;),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 66 | <code>        &#x27;pickup_date&#x27;: fmt(record.pickup_date),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 67 | <code>        &#x27;reject_date&#x27;: fmt(record.reject_date),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 68 | <code>    }</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 69 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 70 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 71 | <code>def build_borrow_stats(records: list[BorrowRecord]) -&gt; dict[str, int]:</code> | 定义 `build_borrow_stats` 函数，承载当前模块中的一段可复用处理流程。 |
| 72 | <code>    stats = {&#x27;total&#x27;: len(records), **{key: 0 for key in BORROW_STATUS_KEYS}}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 73 | <code>    for record in records:</code> | 循环控制语句，用于遍历集合或重复执行某段逻辑。 |
| 74 | <code>        if record.status in stats:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 75 | <code>            stats[record.status] += 1</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 76 | <code>    return stats</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 77 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 78 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 79 | <code>def build_borrow_insights(records: list[BorrowRecord], stats: dict[str, int]) -&gt; dict[str, object]:</code> | 定义 `build_borrow_insights` 函数，承载当前模块中的一段可复用处理流程。 |
| 80 | <code>    now = naive_cst_now()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 81 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 82 | <code>    total = stats[&#x27;total&#x27;]</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 83 | <code>    completion_rate = round(stats[&#x27;returned&#x27;] / total * 100) if total else 0</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 84 | <code>    active_count = stats[&#x27;pending&#x27;] + stats[&#x27;picked_up&#x27;]</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 85 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 86 | <code>    cat_counter: Counter[str] = Counter()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 87 | <code>    for record in records:</code> | 循环控制语句，用于遍历集合或重复执行某段逻辑。 |
| 88 | <code>        if record.book and record.book.category:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 89 | <code>            cat_counter[record.book.category] += 1</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 90 | <code>    top_categories_raw = cat_counter.most_common(3)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 91 | <code>    max_cat = top_categories_raw[0][1] if top_categories_raw else 0</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 92 | <code>    top_categories = [</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 93 | <code>        {</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 94 | <code>            &#x27;name&#x27;: name,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 95 | <code>            &#x27;count&#x27;: count,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 96 | <code>            &#x27;pct&#x27;: round(count / max_cat * 100) if max_cat else 0,</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 97 | <code>        }</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 98 | <code>        for name, count in top_categories_raw</code> | 循环控制语句，用于遍历集合或重复执行某段逻辑。 |
| 99 | <code>    ]</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 100 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 101 | <code>    upcoming = []</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 102 | <code>    for record in records:</code> | 循环控制语句，用于遍历集合或重复执行某段逻辑。 |
| 103 | <code>        if record.status != &#x27;picked_up&#x27; or not record.return_date:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 104 | <code>            continue</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 105 | <code>        days_left = (record.return_date.date() - now.date()).days</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 106 | <code>        if days_left &lt;= 7:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 107 | <code>            upcoming.append({</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 108 | <code>                &#x27;record&#x27;: record,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 109 | <code>                &#x27;days_left&#x27;: days_left,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 110 | <code>                &#x27;overdue&#x27;: days_left &lt; 0,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 111 | <code>            })</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 112 | <code>    upcoming.sort(key=lambda item: item[&#x27;days_left&#x27;])</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 113 | <code>    upcoming = upcoming[:4]</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 114 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 115 | <code>    if total == 0:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 116 | <code>        level = {&#x27;name&#x27;: &#x27;新读者&#x27;, &#x27;desc&#x27;: &#x27;开启你的第一本书&#x27;, &#x27;tone&#x27;: &#x27;pink&#x27;}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 117 | <code>    elif stats[&#x27;expired&#x27;] &gt; 0:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 118 | <code>        level = {&#x27;name&#x27;: &#x27;需关注&#x27;, &#x27;desc&#x27;: &#x27;请及时归还逾期图书&#x27;, &#x27;tone&#x27;: &#x27;orange&#x27;}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 119 | <code>    elif completion_rate &gt;= 80:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 120 | <code>        level = {&#x27;name&#x27;: &#x27;阅读达人&#x27;, &#x27;desc&#x27;: &#x27;完成率优秀，继续保持&#x27;, &#x27;tone&#x27;: &#x27;emerald&#x27;}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 121 | <code>    elif completion_rate &gt;= 50:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 122 | <code>        level = {&#x27;name&#x27;: &#x27;稳定读者&#x27;, &#x27;desc&#x27;: &#x27;阅读节奏良好&#x27;, &#x27;tone&#x27;: &#x27;blue&#x27;}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 123 | <code>    else:</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 124 | <code>        level = {&#x27;name&#x27;: &#x27;初阶读者&#x27;, &#x27;desc&#x27;: &#x27;坚持阅读，完成更多&#x27;, &#x27;tone&#x27;: &#x27;pink&#x27;}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 125 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 126 | <code>    return {</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 127 | <code>        &#x27;now&#x27;: now,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 128 | <code>        &#x27;completion_rate&#x27;: completion_rate,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 129 | <code>        &#x27;active_count&#x27;: active_count,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 130 | <code>        &#x27;top_categories&#x27;: top_categories,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 131 | <code>        &#x27;upcoming_due&#x27;: upcoming,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 132 | <code>        &#x27;level&#x27;: level,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 133 | <code>    }</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 134 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 135 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 136 | <code>def get_borrow_action_csrf_token() -&gt; str:</code> | 定义 `get_borrow_action_csrf_token` 函数，承载当前模块中的一段可复用处理流程。 |
| 137 | <code>    return get_csrf_token(BORROW_ACTION_CSRF_SESSION_KEY)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 138 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 139 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 140 | <code>def validate_borrow_action_csrf() -&gt; bool:</code> | 定义 `validate_borrow_action_csrf` 函数，承载当前模块中的一段可复用处理流程。 |
| 141 | <code>    return validate_csrf_token(BORROW_ACTION_CSRF_SESSION_KEY)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
