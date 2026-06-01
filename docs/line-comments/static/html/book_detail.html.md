# static/html/book_detail.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{# 图书详情页 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 2 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 3 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 4 | <code>{% block title %}{{ book.title }} - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 5 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 6 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/book-detail.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 7 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 8 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 9 | <code>{% set cover_url = url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + book.image) if book.image else url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 10 | <code>{% set stock_pct = (book.stock * 100 // book.total) if book.total else 0 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 11 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 12 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 13 | <code>&lt;div id=&quot;bookDetailPageState&quot;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 14 | <code>     data-book-id=&quot;{{ book.id }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 15 | <code>     data-book-title=&quot;{{ book.title }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 16 | <code>     data-book-stock=&quot;{{ book.stock }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 17 | <code>     data-book-total=&quot;{{ book.total }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 18 | <code>     data-can-borrow=&quot;{{ &#x27;true&#x27; if current_user.is_authenticated and not current_user.is_admin else &#x27;false&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 19 | <code>     class=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 20 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 21 | <code>    {# 顶部面包屑 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 22 | <code>    &lt;nav class=&quot;flex items-center gap-2 text-xs sm:text-sm text-brand-deep/60 mb-4 sm:mb-6&quot;&gt;</code> | HTML `nav` 元素，构成当前页面的结构、内容或交互区域。 |
| 23 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;hover:text-brand-primary transition-colors font-semibold&quot;&gt;馆藏资源&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 24 | <code>        {% if book.category %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 25 | <code>        &lt;svg class=&quot;w-3 h-3 opacity-50&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M9 5l7 7-7 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 26 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, category=book.category) }}&quot; class=&quot;hover:text-brand-primary transition-colors&quot;&gt;{{ book.category }}&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 27 | <code>        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 28 | <code>        &lt;svg class=&quot;w-3 h-3 opacity-50&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M9 5l7 7-7 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 29 | <code>        &lt;span class=&quot;text-brand-deep/40 truncate&quot;&gt;{{ book.title }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 30 | <code>    &lt;/nav&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 31 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 32 | <code>    {# Hero 区:封面 + 信息 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 33 | <code>    &lt;section class=&quot;detail-hero p-4 sm:p-6 lg:p-10&quot;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 34 | <code>             style=&quot;--detail-cover: url(&#x27;{{ cover_url }}&#x27;);&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 35 | <code>        &lt;div class=&quot;grid grid-cols-1 lg:grid-cols-[minmax(0,300px)_1fr] gap-6 lg:gap-10&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 36 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 37 | <code>            {# ========== 左侧:封面 + 操作 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 38 | <code>            &lt;div class=&quot;lg:sticky lg:top-24 lg:self-start space-y-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 39 | <code>                &lt;div class=&quot;detail-cover-shell&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 40 | <code>                    &lt;img src=&quot;{{ cover_url }}&quot; alt=&quot;{{ book.title }}&quot; loading=&quot;eager&quot; decoding=&quot;async&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 41 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 42 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 43 | <code>                {# 状态徽章保留 ID 以兼容轮询脚本 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 44 | <code>                &lt;div class=&quot;flex justify-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 45 | <code>                    {% if book.available %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 46 | <code>                    &lt;span id=&quot;bookDetailAvailabilityBadge&quot; class=&quot;flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 47 | <code>                        &lt;svg class=&quot;w-5 h-5 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 48 | <code>                            &lt;path id=&quot;bookDetailAvailabilityIconPath&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 49 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 50 | <code>                        &lt;span id=&quot;bookDetailAvailabilityText&quot;&gt;可借阅&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 51 | <code>                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 52 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 53 | <code>                    &lt;span id=&quot;bookDetailAvailabilityBadge&quot; class=&quot;flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 54 | <code>                        &lt;svg class=&quot;w-5 h-5 mr-2&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 55 | <code>                            &lt;path id=&quot;bookDetailAvailabilityIconPath&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 56 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 57 | <code>                        &lt;span id=&quot;bookDetailAvailabilityText&quot;&gt;已借出&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 58 | <code>                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 59 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 60 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 61 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 62 | <code>                {# 操作按钮 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 63 | <code>                &lt;div id=&quot;bookDetailActionGroup&quot; class=&quot;space-y-2.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 64 | <code>                    &lt;div id=&quot;bookDetailBorrowButtonSlot&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 65 | <code>                        {% if book.available and current_user.is_authenticated and not current_user.is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 66 | <code>                        &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 67 | <code>                                id=&quot;bookDetailBorrowButton&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 68 | <code>                                data-book-id=&quot;{{ book.id }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 69 | <code>                                data-book-title=&quot;{{ book.title }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 70 | <code>                                data-book-stock=&quot;{{ book.stock }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 71 | <code>                                onclick=&quot;showBorrowModalFromData(this)&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 72 | <code>                                class=&quot;detail-action-primary&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 73 | <code>                            预约借阅</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 74 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 75 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 76 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 77 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;detail-action-secondary block&quot;&gt;返回列表&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 78 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 79 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 80 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 81 | <code>            {# ========== 右侧:标题 + 元数据 + 库存 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 82 | <code>            &lt;div class=&quot;space-y-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 83 | <code>                {# 标题块 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 84 | <code>                &lt;header&gt;</code> | HTML `header` 元素，构成当前页面的结构、内容或交互区域。 |
| 85 | <code>                    {% if book.category %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 86 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, category=book.category) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 87 | <code>                       class=&quot;inline-flex items-center gap-1.5 px-3 py-1 mb-3 text-xs font-bold text-brand-primary bg-white/70 rounded-full hover:bg-white transition-colors&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 88 | <code>                        &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 89 | <code>                        {{ book.category }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 90 | <code>                    &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 91 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 92 | <code>                    &lt;h1 class=&quot;text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-brand-deep leading-tight&quot;&gt;{{ book.title }}&lt;/h1&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 93 | <code>                    &lt;p class=&quot;mt-3 text-base sm:text-lg text-brand-deep/70&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 94 | <code>                        &lt;span class=&quot;font-semibold&quot;&gt;{{ book.author }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 95 | <code>                        {% if book.publisher %}&lt;span class=&quot;mx-2 text-brand-deep/30&quot;&gt;·&lt;/span&gt;&lt;span&gt;{{ book.publisher }}&lt;/span&gt;{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 96 | <code>                    &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 97 | <code>                &lt;/header&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 98 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 99 | <code>                {# 关键统计 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 100 | <code>                &lt;div class=&quot;grid grid-cols-3 gap-3 sm:gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 101 | <code>                    &lt;div class=&quot;detail-stat&quot; data-stock-pct-card&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 102 | <code>                        &lt;p class=&quot;detail-stat-label&quot;&gt;库存&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 103 | <code>                        &lt;p class=&quot;detail-stat-value&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 104 | <code>                            &lt;span id=&quot;detailStockNow&quot;&gt;{{ book.stock }}&lt;/span&gt;&lt;span class=&quot;text-brand-deep/40 text-base font-sans&quot;&gt;/{{ book.total }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 105 | <code>                        &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 106 | <code>                        &lt;div class=&quot;detail-progress mt-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 107 | <code>                            &lt;div id=&quot;detailStockBar&quot; class=&quot;detail-progress-bar&quot; style=&quot;width: {{ stock_pct }}%&quot;&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 108 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 109 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 110 | <code>                    &lt;div class=&quot;detail-stat&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 111 | <code>                        &lt;p class=&quot;detail-stat-label&quot;&gt;借阅总次数&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 112 | <code>                        &lt;p class=&quot;detail-stat-value&quot; id=&quot;detailBorrowCount&quot;&gt;{{ borrow_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 113 | <code>                        &lt;p class=&quot;text-[11px] text-brand-deep/50 mt-1&quot;&gt;累计借出&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 114 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 115 | <code>                    &lt;div class=&quot;detail-stat&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 116 | <code>                        &lt;p class=&quot;detail-stat-label&quot;&gt;馆藏位置&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 117 | <code>                        &lt;p class=&quot;detail-stat-value text-xl sm:text-2xl truncate&quot; title=&quot;{{ book.location or &#x27;未设置&#x27; }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 118 | <code>                            {{ book.location or &#x27;未设置&#x27; }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 119 | <code>                        &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 120 | <code>                        &lt;p class=&quot;text-[11px] text-brand-deep/50 mt-1&quot;&gt;实体位置&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 121 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 122 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 123 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 124 | <code>                {# 元数据卡 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 125 | <code>                &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 126 | <code>                    &lt;div class=&quot;detail-meta-card&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 127 | <code>                        &lt;div class=&quot;detail-meta-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 128 | <code>                            &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 129 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 130 | <code>                        &lt;div class=&quot;min-w-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 131 | <code>                            &lt;p class=&quot;detail-meta-label&quot;&gt;作者&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 132 | <code>                            &lt;p class=&quot;detail-meta-value&quot;&gt;{{ book.author }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 133 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 134 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 135 | <code>                    &lt;div class=&quot;detail-meta-card&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 136 | <code>                        &lt;div class=&quot;detail-meta-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 137 | <code>                            &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 138 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 139 | <code>                        &lt;div class=&quot;min-w-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 140 | <code>                            &lt;p class=&quot;detail-meta-label&quot;&gt;ISBN&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 141 | <code>                            &lt;p class=&quot;detail-meta-value font-mono text-sm&quot;&gt;{{ book.isbn or &#x27;—&#x27; }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 142 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 143 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 144 | <code>                    &lt;div class=&quot;detail-meta-card&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 145 | <code>                        &lt;div class=&quot;detail-meta-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 146 | <code>                            &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 147 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 148 | <code>                        &lt;div class=&quot;min-w-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 149 | <code>                            &lt;p class=&quot;detail-meta-label&quot;&gt;出版社&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 150 | <code>                            &lt;p class=&quot;detail-meta-value&quot;&gt;{{ book.publisher or &#x27;未提供&#x27; }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 151 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 152 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 153 | <code>                    &lt;div class=&quot;detail-meta-card&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 154 | <code>                        &lt;div class=&quot;detail-meta-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 155 | <code>                            &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 156 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 157 | <code>                        &lt;div class=&quot;min-w-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 158 | <code>                            &lt;p class=&quot;detail-meta-label&quot;&gt;分类&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 159 | <code>                            &lt;p class=&quot;detail-meta-value&quot;&gt;{{ book.category or &#x27;未分类&#x27; }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 160 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 161 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 162 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 163 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 164 | <code>                {# 库存详情 (保留 ID 以兼容轮询脚本) #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 165 | <code>                &lt;div class=&quot;bg-white/70 rounded-2xl p-4 sm:p-5 border border-pink-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 166 | <code>                    &lt;p id=&quot;bookDetailInventoryText&quot; class=&quot;text-sm sm:text-base font-semibold text-brand-deep&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 167 | <code>                        {% if book.available %}可借阅 (剩余 {{ book.stock }}/{{ book.total }} 本){% else %}已借出{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 168 | <code>                    &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 169 | <code>                    &lt;p class=&quot;text-xs text-brand-deep/50 mt-1&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 170 | <code>                        库存数据每 3 秒同步一次,确保你看到的是最新状态</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 171 | <code>                    &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 172 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 173 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 174 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 175 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 176 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 177 | <code>    {# ========== 相关推荐 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 178 | <code>    {% if related_books %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 179 | <code>    &lt;section class=&quot;mt-10 sm:mt-12&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 180 | <code>        &lt;div class=&quot;flex items-end justify-between mb-4 sm:mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 181 | <code>            &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 182 | <code>                &lt;h2 class=&quot;text-xl sm:text-2xl font-heading font-bold text-brand-deep&quot;&gt;同类好书&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 183 | <code>                &lt;p class=&quot;text-xs sm:text-sm text-brand-deep/50 mt-1&quot;&gt;来自《{{ book.category }}》分类下的其他作品&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 184 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 185 | <code>            &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, category=book.category) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 186 | <code>               class=&quot;text-xs sm:text-sm font-semibold text-brand-primary hover:text-pink-600 transition-colors&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 187 | <code>                查看全部 →</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 188 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 189 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 190 | <code>        &lt;div class=&quot;grid grid-cols-2 md:grid-cols-4 gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 191 | <code>            {% for rel in related_books %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 192 | <code>            &lt;a href=&quot;{{ url_for(&#x27;user.book_detail&#x27;, book_id=rel.id) }}&quot; class=&quot;related-card group&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 193 | <code>                &lt;div class=&quot;related-card-cover&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 194 | <code>                    &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + rel.image) if rel.image else url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 195 | <code>                         alt=&quot;{{ rel.title }}&quot; loading=&quot;lazy&quot; decoding=&quot;async&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 196 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 197 | <code>                &lt;div class=&quot;p-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 198 | <code>                    &lt;h3 class=&quot;text-sm font-heading font-semibold text-brand-deep line-clamp-2 group-hover:text-brand-primary transition-colors&quot;&gt;{{ rel.title }}&lt;/h3&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 199 | <code>                    &lt;p class=&quot;text-xs text-brand-deep/50 mt-1 truncate&quot;&gt;{{ rel.author }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 200 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 201 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 202 | <code>            {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 203 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 204 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 205 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 206 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 207 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 208 | <code>{% include &#x27;_borrow_modal.html&#x27; %}</code> | 引入其他模板片段，复用公共页面结构。 |
| 209 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 210 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 211 | <code>{% block scripts %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 212 | <code>&lt;script src=&quot;{{ versioned_url(&#x27;js/book-detail.js&#x27;) }}&quot;&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 213 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
