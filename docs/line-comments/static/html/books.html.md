# static/html/books.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{# 图书列表页 - 含搜索、分类、排序、筛选、预约 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 2 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 3 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 4 | <code>{% block title %}馆藏资源 - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 5 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 6 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/books.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 7 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 8 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 9 | <code>{% set sort_options = [</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 10 | <code>    (&#x27;newest&#x27;,    &#x27;最新入库&#x27;),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 11 | <code>    (&#x27;popular&#x27;,   &#x27;热门借阅&#x27;),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 12 | <code>    (&#x27;available&#x27;, &#x27;库存优先&#x27;),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 13 | <code>    (&#x27;title&#x27;,     &#x27;书名 A-Z&#x27;),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 14 | <code>] %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 15 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 16 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 17 | <code>&lt;div class=&quot;books-page-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 18 | <code>    &lt;div class=&quot;books-layout grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:items-start&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 19 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 20 | <code>        {# ========== 侧边栏 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 21 | <code>        &lt;aside class=&quot;lg:sticky lg:top-4 lg:self-start lg:max-h-[calc(100vh-2rem)] lg:flex lg:flex-col&quot;&gt;</code> | HTML `aside` 元素，构成当前页面的结构、内容或交互区域。 |
| 22 | <code>            &lt;div id=&quot;books-sidebar-content&quot; class=&quot;lg:flex lg:min-h-0 lg:flex-col&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 23 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 24 | <code>                {# 移动端横向标签 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 25 | <code>                &lt;div class=&quot;lg:hidden mb-4 lg:flex-shrink-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 26 | <code>                    &lt;div id=&quot;books-mobile-categories&quot; class=&quot;flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 27 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, search=search) if search else url_for(&#x27;user.books&#x27;) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 28 | <code>                           data-category-value=&quot;&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 29 | <code>                           class=&quot;flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 {% if not category %}bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-transparent{% else %}bg-white text-brand-deep/70 border-gray-200{% endif %}&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 30 | <code>                            &lt;span class=&quot;text-sm font-bold whitespace-nowrap&quot;&gt;全部图书&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 31 | <code>                            &lt;span class=&quot;px-1.5 py-0.5 {% if not category %}bg-white/30{% else %}bg-gray-100{% endif %} text-xs font-bold rounded-full&quot; data-category=&quot;all&quot;&gt;{{ categories_total }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 32 | <code>                        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 33 | <code>                        {% for cat, count in categories %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 34 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, category=cat, search=search) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 35 | <code>                           data-category-value=&quot;{{ cat }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 36 | <code>                           class=&quot;flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 {% if category == cat %}bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-transparent{% else %}bg-white text-brand-deep/70 border-gray-200{% endif %}&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 37 | <code>                            &lt;span class=&quot;text-sm font-bold whitespace-nowrap&quot;&gt;{{ cat }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 38 | <code>                            &lt;span class=&quot;px-1.5 py-0.5 {% if category == cat %}bg-white/30{% else %}bg-gray-100{% endif %} text-xs font-bold rounded-full&quot; data-category=&quot;{{ cat }}&quot;&gt;{{ count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 39 | <code>                        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 40 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 41 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 42 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 43 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 44 | <code>                {# 桌面端垂直侧边栏 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 45 | <code>                &lt;div class=&quot;books-desktop-sidebar hidden lg:flex lg:min-h-0 lg:flex-col bg-white rounded-2xl shadow-lg overflow-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 46 | <code>                    &lt;div class=&quot;px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-pink-100 flex-shrink-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 47 | <code>                        &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 48 | <code>                            &lt;div class=&quot;w-8 h-8 bg-gradient-to-br from-purple-400 to-fuchsia-400 rounded-xl flex items-center justify-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 49 | <code>                                &lt;svg class=&quot;w-4 h-4 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 50 | <code>                                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 51 | <code>                                &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 52 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 53 | <code>                            &lt;h3 class=&quot;text-base font-bold text-brand-deep&quot;&gt;图书分类&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 54 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 55 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 56 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 57 | <code>                    &lt;div class=&quot;px-4 pt-4 pb-2 flex-shrink-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 58 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, search=search) if search else url_for(&#x27;user.books&#x27;) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 59 | <code>                           data-category-value=&quot;&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 60 | <code>                           class=&quot;flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out {% if not category %}bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary{% else %}hover:bg-pink-50/50 text-brand-deep/70 border-transparent{% endif %}&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 61 | <code>                            &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 62 | <code>                                &lt;svg class=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 63 | <code>                                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M4 6h16M4 12h16M4 18h16&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 64 | <code>                                &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 65 | <code>                                &lt;span class=&quot;text-sm font-bold&quot;&gt;全部图书&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 66 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 67 | <code>                            &lt;span class=&quot;px-2 py-0.5 bg-white/50 text-xs font-bold rounded-full&quot; data-category=&quot;all&quot;&gt;{{ categories_total }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 68 | <code>                        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 69 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 70 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 71 | <code>                    &lt;div id=&quot;books-desktop-categories&quot; class=&quot;px-4 pb-4 overflow-y-auto flex-1 min-h-0 scrollbar-thin&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 72 | <code>                        {% for cat, count in categories %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 73 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, category=cat, search=search) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 74 | <code>                           data-category-value=&quot;{{ cat }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 75 | <code>                           class=&quot;flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 {% if category == cat %}bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary{% else %}hover:bg-pink-50/50 text-brand-deep/70 border-transparent{% endif %}&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 76 | <code>                            &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 77 | <code>                                &lt;svg class=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 78 | <code>                                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 79 | <code>                                &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 80 | <code>                                &lt;span class=&quot;text-sm font-bold&quot;&gt;{{ cat }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 81 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 82 | <code>                            &lt;span class=&quot;px-2 py-0.5 {% if category == cat %}bg-white/50{% else %}bg-gray-100{% endif %} text-xs font-bold rounded-full&quot; data-category=&quot;{{ cat }}&quot;&gt;{{ count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 83 | <code>                        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 84 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 85 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 86 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 87 | <code>                    &lt;div class=&quot;h-8 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none flex-shrink-0&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 88 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 89 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 90 | <code>        &lt;/aside&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 91 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 92 | <code>        {# ========== 主内容区 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 93 | <code>        &lt;div id=&quot;books-main-content&quot; class=&quot;books-content-panel bg-white rounded-2xl shadow-lg overflow-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 94 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 95 | <code>            {# 头部:标题 + 搜索 + 工具条 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 96 | <code>            &lt;div class=&quot;books-panel-head px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-100 flex flex-col gap-3 sm:gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 97 | <code>                &lt;div id=&quot;books-summary&quot; class=&quot;flex items-end justify-between gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 98 | <code>                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 99 | <code>                        &lt;h2 class=&quot;text-lg sm:text-xl lg:text-2xl font-heading font-semibold text-brand-deep&quot;&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 100 | <code>                            {% if category %}{{ category }}{% else %}馆藏资源{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 101 | <code>                        &lt;/h2&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 102 | <code>                        &lt;p class=&quot;text-xs sm:text-sm text-brand-deep/60 mt-1&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 103 | <code>                            共 {{ pagination.total }} 本{% if search %} · 关键字 &quot;{{ search }}&quot;{% endif %}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 104 | <code>                        &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 105 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 106 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 107 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 108 | <code>                &lt;form method=&quot;GET&quot; id=&quot;books-search-form&quot; class=&quot;relative group w-full&quot;&gt;</code> | 表单结构开始，用于收集并提交用户输入。 |
| 109 | <code>                    {% if category %}&lt;input type=&quot;hidden&quot; name=&quot;category&quot; value=&quot;{{ category }}&quot;&gt;{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 110 | <code>                    {% if sort and sort != &#x27;newest&#x27; %}&lt;input type=&quot;hidden&quot; name=&quot;sort&quot; value=&quot;{{ sort }}&quot;&gt;{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 111 | <code>                    {% if only_available %}&lt;input type=&quot;hidden&quot; name=&quot;only_available&quot; value=&quot;1&quot;&gt;{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 112 | <code>                    &lt;input type=&quot;text&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 113 | <code>                           id=&quot;books-search-input&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 114 | <code>                           name=&quot;search&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 115 | <code>                           aria-label=&quot;搜索图书&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 116 | <code>                           maxlength=&quot;64&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 117 | <code>                           class=&quot;w-full pl-11 sm:pl-12 pr-16 py-3 bg-pink-50/50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl sm:rounded-2xl text-sm font-medium transition-all outline-none&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 118 | <code>                           placeholder=&quot;搜索书名、作者、ISBN(按 / 快速聚焦)&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 119 | <code>                           value=&quot;{{ search }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 120 | <code>                    &lt;svg class=&quot;absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-deep/30 group-focus-within:text-brand-primary&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 121 | <code>                    &lt;kbd class=&quot;hidden sm:inline-flex absolute right-4 top-1/2 -translate-y-1/2 items-center px-1.5 py-0.5 text-[10px] font-mono font-semibold text-brand-deep/40 bg-white border border-gray-200 rounded&quot;&gt;/&lt;/kbd&gt;</code> | HTML `kbd` 元素，构成当前页面的结构、内容或交互区域。 |
| 122 | <code>                &lt;/form&gt;</code> | 表单结构结束。 |
| 123 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 124 | <code>                {# 工具条:排序 + 仅可借 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 125 | <code>                &lt;div id=&quot;books-toolbar&quot; class=&quot;flex flex-wrap items-center gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 126 | <code>                    &lt;span class=&quot;text-xs font-semibold text-brand-deep/50 mr-1&quot;&gt;排序&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 127 | <code>                    {% for value, label in sort_options %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 128 | <code>                    &lt;button type=&quot;button&quot; data-sort=&quot;{{ value }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 129 | <code>                            class=&quot;chip{% if sort == value %} is-active{% endif %}&quot;&gt;{{ label }}&lt;/button&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 130 | <code>                    {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 131 | <code>                    &lt;span class=&quot;mx-1 h-4 w-px bg-gray-200&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 132 | <code>                    &lt;button type=&quot;button&quot; data-toggle=&quot;only-available&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 133 | <code>                            class=&quot;chip{% if only_available %} is-active{% endif %}&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 134 | <code>                        &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 135 | <code>                        仅显示可借</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 136 | <code>                    &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 137 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 138 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 139 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 140 | <code>            {# 网格区 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 141 | <code>            &lt;div id=&quot;books-results-content&quot; class=&quot;books-results-content p-4 sm:p-6 animate-fade-in&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 142 | <code>                {% if books %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 143 | <code>                &lt;div class=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 144 | <code>                    {% for book in books %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 145 | <code>                    &lt;article class=&quot;book-card&quot; data-book-id=&quot;{{ book.id }}&quot; data-book-title=&quot;{{ book.title|e }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 146 | <code>                        &lt;div class=&quot;book-card-cover&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 147 | <code>                            &lt;span class=&quot;book-card-status {% if book.available %}is-available{% else %}is-unavailable{% endif %}&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 148 | <code>                                {% if book.available %}可借阅{% else %}已借出{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 149 | <code>                            &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 150 | <code>                            &lt;img alt=&quot;{{ book.title }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 151 | <code>                                 src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + book.image) if book.image else url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 152 | <code>                            &lt;span class=&quot;book-card-shine&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 153 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 154 | <code>                        &lt;div class=&quot;p-3 sm:p-4 flex-1 flex flex-col&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 155 | <code>                            &lt;h3 class=&quot;text-sm sm:text-base font-heading font-semibold text-brand-deep mb-1 line-clamp-2&quot;&gt;{{ book.title }}&lt;/h3&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 156 | <code>                            &lt;p class=&quot;text-xs text-brand-deep/60 mb-1 truncate&quot;&gt;{{ book.author }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 157 | <code>                            &lt;p class=&quot;text-[11px] text-gray-400 mb-3 truncate&quot;&gt;ISBN {{ book.isbn }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 158 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 159 | <code>                            &lt;div class=&quot;mt-auto flex items-center justify-between mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 160 | <code>                                &lt;span class=&quot;text-[11px] uppercase tracking-wider text-brand-deep/40 font-bold&quot;&gt;库存&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 161 | <code>                                &lt;span class=&quot;text-xs font-semibold {% if book.stock &gt; 0 %}text-emerald-600{% else %}text-rose-600{% endif %}&quot; data-stock-text&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 162 | <code>                                    {{ book.stock }}/{{ book.total }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 163 | <code>                                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 164 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 165 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 166 | <code>                            &lt;div data-actions class=&quot;space-y-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 167 | <code>                                &lt;a href=&quot;{{ url_for(&#x27;user.book_detail&#x27;, book_id=book.id) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 168 | <code>                                   class=&quot;block w-full px-4 py-2.5 text-sm font-semibold text-center text-brand-primary border-2 border-brand-primary/20 hover:border-brand-primary hover:bg-pink-50 rounded-lg transition-all duration-200 active:scale-95&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 169 | <code>                                    查看详情</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 170 | <code>                                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 171 | <code>                                {% if book.available and current_user.is_authenticated and not current_user.is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 172 | <code>                                &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 173 | <code>                                        data-book-id=&quot;{{ book.id }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 174 | <code>                                        data-book-title=&quot;{{ book.title }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 175 | <code>                                        data-book-stock=&quot;{{ book.stock }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 176 | <code>                                        onclick=&quot;showBorrowModalFromData(this)&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 177 | <code>                                        class=&quot;w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 rounded-lg transition-all duration-200 active:scale-95&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 178 | <code>                                    预约图书</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 179 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 180 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 181 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 182 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 183 | <code>                    &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 184 | <code>                    {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 185 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 186 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 187 | <code>                {# 分页 — 始终渲染7个槽位，宽度固定 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 188 | <code>                {% if pagination.pages &gt; 1 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 189 | <code>                {% set tp = pagination.pages %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 190 | <code>                {% set cp = pagination.page %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 191 | <code>                {% if tp &lt;= 7 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 192 | <code>                    {% set pnums = range(1, tp + 1) | list %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 193 | <code>                {% elif cp &lt;= 4 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 194 | <code>                    {% set pnums = [1, 2, 3, 4, 5, 0, tp] %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 195 | <code>                {% elif cp &gt;= tp - 3 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 196 | <code>                    {% set pnums = [1, 0, tp - 4, tp - 3, tp - 2, tp - 1, tp] %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 197 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 198 | <code>                    {% set pnums = [1, 0, cp - 1, cp, cp + 1, 0, tp] %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 199 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 200 | <code>                &lt;nav class=&quot;flex items-center justify-center gap-1.5 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100&quot;&gt;</code> | HTML `nav` 元素，构成当前页面的结构、内容或交互区域。 |
| 201 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, page=pagination.prev_num, search=search, category=category, sort=sort if sort != &#x27;newest&#x27; else None, only_available=&#x27;1&#x27; if only_available else None) if pagination.has_prev else &#x27;#&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 202 | <code>                       class=&quot;shrink-0 w-16 py-2 text-sm font-medium text-center rounded-xl transition-colors active:scale-95 {% if pagination.has_prev %}text-brand-primary border-2 border-brand-primary/20 hover:bg-pink-50{% else %}text-gray-300 border-2 border-gray-100 pointer-events-none{% endif %}&quot;&gt;上一页&lt;/a&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 203 | <code>                    {% for p in pnums %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 204 | <code>                        {% if p == 0 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 205 | <code>                            &lt;span class=&quot;w-10 py-2 text-sm text-center text-gray-400&quot;&gt;...&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 206 | <code>                        {% elif p == cp %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 207 | <code>                            &lt;span class=&quot;w-10 py-2 text-sm font-bold text-center text-white bg-brand-primary rounded-xl shadow-sm&quot;&gt;{{ p }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 208 | <code>                        {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 209 | <code>                            &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, page=p, search=search, category=category, sort=sort if sort != &#x27;newest&#x27; else None, only_available=&#x27;1&#x27; if only_available else None) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 210 | <code>                               class=&quot;w-10 py-2 text-sm font-medium text-center text-brand-deep/60 hover:text-brand-primary hover:bg-pink-50 rounded-xl transition-colors active:scale-95&quot;&gt;{{ p }}&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 211 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 212 | <code>                    {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 213 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;, page=pagination.next_num, search=search, category=category, sort=sort if sort != &#x27;newest&#x27; else None, only_available=&#x27;1&#x27; if only_available else None) if pagination.has_next else &#x27;#&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 214 | <code>                       class=&quot;shrink-0 w-16 py-2 text-sm font-medium text-center rounded-xl transition-colors active:scale-95 {% if pagination.has_next %}text-brand-primary border-2 border-brand-primary/20 hover:bg-pink-50{% else %}text-gray-300 border-2 border-gray-100 pointer-events-none{% endif %}&quot;&gt;下一页&lt;/a&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 215 | <code>                &lt;/nav&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 216 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 217 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 218 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 219 | <code>                {# 空状态 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 220 | <code>                &lt;div class=&quot;text-center py-20&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 221 | <code>                    &lt;div class=&quot;inline-flex w-20 h-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-100 to-purple-100 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 222 | <code>                        &lt;svg class=&quot;w-10 h-10 text-brand-primary/60&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 223 | <code>                            &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 224 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 225 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 226 | <code>                    &lt;p class=&quot;text-brand-deep font-semibold mb-1&quot;&gt;没有找到匹配的图书&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 227 | <code>                    &lt;p class=&quot;text-sm text-brand-deep/50&quot;&gt;试试调整搜索关键字或切换分类&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 228 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 229 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 230 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 231 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 232 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 233 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 234 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 235 | <code>{% include &#x27;_borrow_modal.html&#x27; %}</code> | 引入其他模板片段，复用公共页面结构。 |
| 236 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 237 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 238 | <code>{% block scripts %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 239 | <code>&lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 240 | <code>window.__BOOKS_CONFIG__ = {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 241 | <code>    booksUrl: {{ url_for(&#x27;user.books&#x27;)|tojson }},</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 242 | <code>    stockUrl: {{ url_for(&#x27;user.books_stock&#x27;)|tojson }},</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 243 | <code>    categoriesUrl: {{ url_for(&#x27;user.books_categories&#x27;)|tojson }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 244 | <code>};</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 245 | <code>&lt;/script&gt;</code> | 结束当前脚本块。 |
| 246 | <code>&lt;script src=&quot;{{ versioned_url(&#x27;js/books.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 247 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
