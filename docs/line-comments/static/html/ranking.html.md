# static/html/ranking.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 2 | <code>{% block title %}借阅排行榜 - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 3 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 4 | <code>{% block header %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 5 | <code>{% block main_class %}flex-1 animate-in fade-in duration-500{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 6 | <code>{% block content_wrapper %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 7 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 8 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;css/ranking.css&#x27;, v=&#x27;20260515-v11&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 9 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 10 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 11 | <code>{% set total_borrows = books|sum(attribute=&#x27;borrow_count&#x27;) if books else 0 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 12 | <code>{% set max_borrow = books[0].borrow_count if (books and books[0].borrow_count &gt; 0) else 1 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 13 | <code>{% set top_share = (books[0].borrow_count / total_borrows * 100)|round|int if total_borrows else 0 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 14 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 15 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 16 | <code>&lt;svg style=&quot;position:absolute;width:0;height:0&quot; aria-hidden=&quot;true&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 17 | <code>    &lt;defs&gt;</code> | HTML `defs` 元素，构成当前页面的结构、内容或交互区域。 |
| 18 | <code>        &lt;linearGradient id=&quot;rkGrad&quot; x1=&quot;0%&quot; y1=&quot;0%&quot; x2=&quot;100%&quot; y2=&quot;100%&quot;&gt;</code> | HTML `lineargradient` 元素，构成当前页面的结构、内容或交互区域。 |
| 19 | <code>            &lt;stop offset=&quot;0%&quot; stop-color=&quot;#ec4899&quot;/&gt;</code> | HTML `stop` 元素，构成当前页面的结构、内容或交互区域。 |
| 20 | <code>            &lt;stop offset=&quot;100%&quot; stop-color=&quot;#a855f7&quot;/&gt;</code> | HTML `stop` 元素，构成当前页面的结构、内容或交互区域。 |
| 21 | <code>        &lt;/linearGradient&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 22 | <code>    &lt;/defs&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 23 | <code>&lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 24 | <code>&lt;div class=&quot;rk&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 25 | <code>    &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;rk-back&quot; aria-label=&quot;返回馆藏&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 26 | <code>        &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M10 19l-7-7m0 0l7-7m-7 7h18&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 27 | <code>        &lt;span&gt;返回馆藏&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 28 | <code>    &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 29 | <code>    &lt;header class=&quot;rk-hero&quot;&gt;</code> | HTML `header` 元素，构成当前页面的结构、内容或交互区域。 |
| 30 | <code>        &lt;div class=&quot;rk-hero-bg&quot; aria-hidden=&quot;true&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 31 | <code>        &lt;span class=&quot;rk-eyebrow&quot;&gt;图书馆热门榜单&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 32 | <code>        &lt;h1 class=&quot;rk-title&quot;&gt;借阅&lt;span&gt;排行榜&lt;/span&gt;&lt;/h1&gt;</code> | HTML `h1` 元素，构成当前页面的结构、内容或交互区域。 |
| 33 | <code>        &lt;p class=&quot;rk-sub&quot;&gt;用真实借阅热度发现下一本值得翻开的书&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 34 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 35 | <code>        {% if books %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 36 | <code>        &lt;div class=&quot;rk-stats&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 37 | <code>            &lt;div class=&quot;rk-stat&quot;&gt;&lt;strong&gt;{{ books|length }}&lt;/strong&gt;&lt;span&gt;上榜图书&lt;/span&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 38 | <code>            &lt;div class=&quot;rk-stat&quot;&gt;&lt;strong&gt;{{ books[0].borrow_count }}&lt;/strong&gt;&lt;span&gt;最高借阅&lt;/span&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 39 | <code>            &lt;div class=&quot;rk-stat&quot;&gt;&lt;strong&gt;{{ total_borrows }}&lt;/strong&gt;&lt;span&gt;总借阅量&lt;/span&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 40 | <code>            &lt;div class=&quot;rk-stat&quot;&gt;&lt;strong&gt;{{ (total_borrows / books|length)|round|int }}&lt;/strong&gt;&lt;span&gt;平均热度&lt;/span&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 41 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 42 | <code>        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 43 | <code>    &lt;/header&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 44 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 45 | <code>    {% if books %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 46 | <code>    &lt;div class=&quot;rk-content&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 47 | <code>        {% if books|length &gt;= 3 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 48 | <code>        &lt;section class=&quot;rk-podium&quot; aria-label=&quot;热门前三&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 49 | <code>            {% for idx in [1, 0, 2] %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 50 | <code>            {% set book = books[idx] %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 51 | <code>            {% set rank = idx + 1 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 52 | <code>            {% set medal = [&#x27;gold&#x27;, &#x27;silver&#x27;, &#x27;bronze&#x27;][idx] %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 53 | <code>            {% set pct = (book.borrow_count / max_borrow * 100)|round|int %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 54 | <code>            &lt;article class=&quot;rk-pod rk-pod--{{ medal }}&quot; data-cat=&quot;{{ book.category or &#x27;&#x27; }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 55 | <code>                &lt;span class=&quot;rk-pod-badge&quot;&gt;{{ rank }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 56 | <code>                &lt;div class=&quot;rk-pod-cover&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 57 | <code>                    &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + book.image) if book.image else url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) }}&quot; alt=&quot;{{ book.title }}&quot; loading=&quot;{% if rank == 1 %}eager{% else %}lazy{% endif %}&quot; decoding=&quot;async&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 58 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 59 | <code>                &lt;a href=&quot;{{ url_for(&#x27;user.book_detail&#x27;, book_id=book.id) }}&quot; class=&quot;rk-pod-name&quot;&gt;{{ book.title }}&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 60 | <code>                &lt;p class=&quot;rk-pod-author&quot;&gt;{{ book.author }}{% if book.category %} · {{ book.category }}{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 61 | <code>                &lt;div class=&quot;rk-bar&quot;&gt;&lt;span style=&quot;width:{{ pct }}%&quot;&gt;&lt;/span&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 62 | <code>                &lt;span class=&quot;rk-pod-count&quot;&gt;{{ book.borrow_count }} 次借阅&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 63 | <code>            &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 64 | <code>            {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 65 | <code>        &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 66 | <code>        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 67 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 68 | <code>        &lt;div class=&quot;rk-toolbar&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 69 | <code>            &lt;div class=&quot;rk-search-wrap&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 70 | <code>                &lt;svg aria-hidden=&quot;true&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 71 | <code>                &lt;input type=&quot;search&quot; id=&quot;rkSearch&quot; placeholder=&quot;搜索书名或作者...&quot; autocomplete=&quot;off&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 72 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 73 | <code>            {% if categories %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 74 | <code>            &lt;div class=&quot;rk-cats&quot; role=&quot;tablist&quot; aria-label=&quot;分类筛选&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 75 | <code>                &lt;button class=&quot;rk-cat is-active&quot; data-cat=&quot;all&quot; role=&quot;tab&quot; aria-selected=&quot;true&quot;&gt;全部&lt;/button&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 76 | <code>                {% for c in categories %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 77 | <code>                &lt;button class=&quot;rk-cat&quot; data-cat=&quot;{{ c }}&quot; role=&quot;tab&quot; aria-selected=&quot;false&quot;&gt;{{ c }}&lt;/button&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 78 | <code>                {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 79 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 80 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 81 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 82 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 83 | <code>        &lt;div class=&quot;rk-body&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 84 | <code>            &lt;main class=&quot;rk-main&quot;&gt;</code> | HTML `main` 元素，构成当前页面的结构、内容或交互区域。 |
| 85 | <code>                &lt;ol class=&quot;rk-list&quot; id=&quot;rkList&quot;&gt;</code> | HTML `ol` 元素，构成当前页面的结构、内容或交互区域。 |
| 86 | <code>                    {% for book in books %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 87 | <code>                    {% set pct = (book.borrow_count / max_borrow * 100)|round|int %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 88 | <code>                    &lt;li class=&quot;rk-row&quot; data-t=&quot;{{ book.title|lower }}&quot; data-a=&quot;{{ book.author|lower }}&quot; data-cat=&quot;{{ book.category or &#x27;&#x27; }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 89 | <code>                        &lt;span class=&quot;rk-row-rank {% if loop.index &lt;= 3 %}top{% endif %}&quot;&gt;{{ loop.index }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 90 | <code>                        &lt;div class=&quot;rk-row-cover&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 91 | <code>                            &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + book.image) if book.image else url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) }}&quot; alt=&quot;&quot; loading=&quot;lazy&quot; decoding=&quot;async&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 92 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 93 | <code>                        &lt;div class=&quot;rk-row-info&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 94 | <code>                            &lt;a href=&quot;{{ url_for(&#x27;user.book_detail&#x27;, book_id=book.id) }}&quot; class=&quot;rk-row-title&quot;&gt;{{ book.title }}&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 95 | <code>                            &lt;p&gt;{{ book.author }}{% if book.category %} · {{ book.category }}{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 96 | <code>                            &lt;div class=&quot;rk-bar sm&quot;&gt;&lt;span style=&quot;width:{{ pct }}%&quot;&gt;&lt;/span&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 97 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 98 | <code>                        &lt;div class=&quot;rk-row-num&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 99 | <code>                            &lt;strong&gt;{{ book.borrow_count }}&lt;/strong&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 100 | <code>                            &lt;span&gt;次借阅&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 101 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 102 | <code>                    &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 103 | <code>                    {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 104 | <code>                &lt;/ol&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 105 | <code>                &lt;p class=&quot;rk-no-match&quot; id=&quot;rkNoMatch&quot; hidden&gt;没有找到匹配的图书&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 106 | <code>            &lt;/main&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 107 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 108 | <code>            &lt;aside class=&quot;rk-side&quot;&gt;</code> | HTML `aside` 元素，构成当前页面的结构、内容或交互区域。 |
| 109 | <code>                &lt;div class=&quot;rk-card&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 110 | <code>                    &lt;h3&gt;榜单概览&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 111 | <code>                    &lt;div class=&quot;rk-overview&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 112 | <code>                        &lt;div class=&quot;rk-ring&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 113 | <code>                            &lt;svg viewBox=&quot;0 0 120 120&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 114 | <code>                                &lt;circle cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;48&quot; class=&quot;rk-ring-bg&quot;/&gt;</code> | HTML `circle` 元素，构成当前页面的结构、内容或交互区域。 |
| 115 | <code>                                &lt;circle cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;48&quot; class=&quot;rk-ring-fg&quot; stroke-dasharray=&quot;{{ (top_share / 100 * 301.59)|round(2) }} 301.59&quot; transform=&quot;rotate(-90 60 60)&quot;/&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 116 | <code>                            &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 117 | <code>                            &lt;div class=&quot;rk-ring-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 118 | <code>                                &lt;b&gt;{{ top_share }}%&lt;/b&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 119 | <code>                                &lt;span&gt;榜首占比&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 120 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 121 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 122 | <code>                        &lt;ul class=&quot;rk-ov-list&quot;&gt;</code> | HTML `ul` 元素，构成当前页面的结构、内容或交互区域。 |
| 123 | <code>                            &lt;li&gt;&lt;i class=&quot;dot-pk&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;上榜图书&lt;b&gt;{{ books|length }}&lt;/b&gt;&lt;/li&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 124 | <code>                            &lt;li&gt;&lt;i class=&quot;dot-am&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;最高借阅&lt;b&gt;{{ books[0].borrow_count }}&lt;/b&gt;&lt;/li&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 125 | <code>                            &lt;li&gt;&lt;i class=&quot;dot-em&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;总借阅量&lt;b&gt;{{ total_borrows }}&lt;/b&gt;&lt;/li&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 126 | <code>                            &lt;li&gt;&lt;i class=&quot;dot-pu&quot; aria-hidden=&quot;true&quot;&gt;&lt;/i&gt;平均热度&lt;b&gt;{{ (total_borrows / books|length)|round|int }}&lt;/b&gt;&lt;/li&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 127 | <code>                        &lt;/ul&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 128 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 129 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 130 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 131 | <code>                &lt;div class=&quot;rk-card&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 132 | <code>                    &lt;h3&gt;热门前三&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 133 | <code>                    &lt;ul class=&quot;rk-mini3&quot;&gt;</code> | HTML `ul` 元素，构成当前页面的结构、内容或交互区域。 |
| 134 | <code>                        {% for book in books[:3] %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 135 | <code>                        {% set pct = (book.borrow_count / max_borrow * 100)|round|int %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 136 | <code>                        &lt;li class=&quot;r{{ loop.index }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 137 | <code>                            &lt;span class=&quot;rk-mini3-rank&quot;&gt;0{{ loop.index }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 138 | <code>                            &lt;div class=&quot;rk-mini3-body&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 139 | <code>                                &lt;div class=&quot;rk-mini3-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 140 | <code>                                    &lt;span&gt;{{ book.title }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 141 | <code>                                    &lt;b&gt;{{ book.borrow_count }}次&lt;/b&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 142 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 143 | <code>                                &lt;div class=&quot;rk-bar xs&quot;&gt;&lt;span style=&quot;width:{{ pct }}%&quot;&gt;&lt;/span&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 144 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 145 | <code>                        &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 146 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 147 | <code>                    &lt;/ul&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 148 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 149 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 150 | <code>                &lt;div class=&quot;rk-card&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 151 | <code>                    &lt;h3&gt;阅读发现&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 152 | <code>                    &lt;ul class=&quot;rk-tips&quot;&gt;</code> | HTML `ul` 元素，构成当前页面的结构、内容或交互区域。 |
| 153 | <code>                        &lt;li&gt;&lt;b&gt;01&lt;/b&gt;&lt;p&gt;榜首与热门前三反映近期最受欢迎的图书。&lt;/p&gt;&lt;/li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 154 | <code>                        &lt;li&gt;&lt;b&gt;02&lt;/b&gt;&lt;p&gt;热度条越长，说明与榜首的借阅差距越小。&lt;/p&gt;&lt;/li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 155 | <code>                        &lt;li&gt;&lt;b&gt;03&lt;/b&gt;&lt;p&gt;点击书名可以直接进入详情页预约借阅。&lt;/p&gt;&lt;/li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 156 | <code>                    &lt;/ul&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 157 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 158 | <code>            &lt;/aside&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 159 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 160 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 161 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 162 | <code>    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 163 | <code>    &lt;section class=&quot;rk-empty&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 164 | <code>        &lt;svg aria-hidden=&quot;true&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 165 | <code>        &lt;h3&gt;榜单还在等待第一本热门图书&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 166 | <code>        &lt;p&gt;从馆藏中借阅一本喜欢的书，让它成为第一本上榜作品吧&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 167 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;rk-empty-btn&quot;&gt;浏览馆藏&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 168 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 169 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 170 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 171 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 172 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 173 | <code>{% block scripts %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 174 | <code>&lt;script src=&quot;{{ versioned_url(&#x27;js/ranking.js&#x27;) }}&quot;&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 175 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
