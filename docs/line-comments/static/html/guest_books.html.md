# static/html/guest_books.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>&lt;!--</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 2 | <code>    游客图书浏览页面 (guest_books.html)</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 3 | <code>    继承 base.html 基础模板</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 4 | <code>    无需登录即可浏览图书，但不能预约借阅</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 5 | <code>    功能与 books.html 类似，但隐藏了借阅按钮</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 6 | <code>--&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 7 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 8 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 9 | <code>&lt;!-- 页面标题 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 10 | <code>{% block title %}馆藏浏览 - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 11 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 12 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/books.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 13 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 14 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 15 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 16 | <code>&lt;!-- 主容器 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 17 | <code>&lt;div class=&quot;guest-books-page books-page-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 18 | <code>    &lt;!-- 白色卡片容器 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 19 | <code>    &lt;div class=&quot;guest-books-panel bg-white rounded-2xl shadow-lg overflow-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 20 | <code>        &lt;!-- ==================== 头部：标题和搜索栏 ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 21 | <code>        &lt;div class=&quot;guest-books-head px-4 sm:px-6 py-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 22 | <code>            &lt;!-- 标题区域 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 23 | <code>            &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 24 | <code>                &lt;h2 class=&quot;text-xl sm:text-2xl font-heading font-semibold text-brand-deep&quot;&gt;馆藏浏览&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 25 | <code>                &lt;!-- 游客模式提示 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 26 | <code>                &lt;p class=&quot;text-sm text-gray-400 mt-1&quot;&gt;游客模式 — 登录后即可预约借阅&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 27 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 28 | <code>            &lt;!-- 搜索表单：GET 请求，保留搜索关键词 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 29 | <code>            &lt;form method=&quot;GET&quot; class=&quot;relative group w-full sm:w-auto&quot;&gt;</code> | 表单结构开始，用于收集并提交用户输入。 |
| 30 | <code>                &lt;input type=&quot;text&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 31 | <code>                       name=&quot;search&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 32 | <code>                       class=&quot;w-full sm:w-80 pl-12 pr-6 py-4 sm:py-3 bg-pink-50/50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-2xl text-base sm:text-sm font-medium transition-all outline-none&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 33 | <code>                       placeholder=&quot;搜索书名、作者或分类&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 34 | <code>                       value=&quot;{{ request.args.get(&#x27;search&#x27;, &#x27;&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 35 | <code>                &lt;!-- 搜索图标：焦点时变色 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 36 | <code>                &lt;svg class=&quot;absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-deep/30 group-focus-within:text-brand-primary&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 37 | <code>            &lt;/form&gt;</code> | 表单结构结束。 |
| 38 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 39 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 40 | <code>        &lt;!-- ==================== 图书网格 ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 41 | <code>        &lt;div class=&quot;guest-books-results p-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 42 | <code>            {% if books %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 43 | <code>            &lt;!-- 响应式网格：移动端1列，平板2列，桌面4列 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 44 | <code>            &lt;div class=&quot;guest-book-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 45 | <code>                {% for book in books %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 46 | <code>                &lt;!-- 图书卡片 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 47 | <code>                &lt;div class=&quot;guest-book-card bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 48 | <code>                    &lt;!-- 图书封面：固定高度，对象适配 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 49 | <code>                    &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + book.image) if book.image else url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 50 | <code>                         class=&quot;w-full h-56 object-cover&quot; alt=&quot;{{ book.title }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 51 | <code>                    &lt;!-- 图书信息区域 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 52 | <code>                    &lt;div class=&quot;p-4 flex-1 flex flex-col&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 53 | <code>                        &lt;!-- 书名：最多显示2行，超出省略 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 54 | <code>                        &lt;h3 class=&quot;text-base font-heading font-semibold text-brand-deep mb-2 line-clamp-2&quot;&gt;{{ book.title }}&lt;/h3&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 55 | <code>                        &lt;!-- 作者 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 56 | <code>                        &lt;p class=&quot;text-sm text-gray-600 mb-1&quot;&gt;{{ book.author }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 57 | <code>                        &lt;!-- 出版社：可选字段 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 58 | <code>                        {% if book.publisher %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 59 | <code>                        &lt;p class=&quot;text-xs text-gray-400 mb-1&quot;&gt;{{ book.publisher }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 60 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 61 | <code>                        &lt;!-- 分类标签：可选字段 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 62 | <code>                        {% if book.category %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 63 | <code>                        &lt;span class=&quot;inline-block self-start px-2 py-0.5 bg-pink-50 text-pink-600 rounded text-xs font-medium mb-3&quot;&gt;{{ book.category }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 64 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 65 | <code>                        &lt;!-- 底部操作区：自动推到底部 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 66 | <code>                        &lt;div class=&quot;mt-auto&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 67 | <code>                            &lt;!-- 状态和库存信息 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 68 | <code>                            &lt;div class=&quot;flex items-center justify-between mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 69 | <code>                                &lt;!-- 可借阅状态徽章：绿色/红色 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 70 | <code>                                &lt;span class=&quot;inline-block px-3 py-1 text-xs font-medium rounded-full {% if book.available %}bg-green-100 text-green-800{% else %}bg-red-100 text-red-800{% endif %}&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 71 | <code>                                    {% if book.available %}可借阅{% else %}已借出{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 72 | <code>                                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 73 | <code>                                &lt;!-- 库存数量：当前/总数 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 74 | <code>                                &lt;span class=&quot;text-xs font-medium {% if book.stock &gt; 0 %}text-green-600{% else %}text-red-600{% endif %}&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 75 | <code>                                    {{ book.stock }}/{{ book.total }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 76 | <code>                                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 77 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 78 | <code>                            &lt;!-- 登录提示按钮：游客点击跳转到登录页 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 79 | <code>                            &lt;a href=&quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot; class=&quot;touch-target block w-full px-4 py-3 sm:py-2 text-sm font-medium text-center text-brand-primary border-2 border-brand-primary/20 hover:border-brand-primary hover:bg-pink-50 rounded-lg transition-colors duration-200 cursor-pointer&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 80 | <code>                                登录后借阅</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 81 | <code>                            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 82 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 83 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 84 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 85 | <code>                {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 86 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 87 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 88 | <code>            &lt;!-- ==================== 分页控件 ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 89 | <code>            {% if pagination.pages &gt; 1 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 90 | <code>            &lt;nav class=&quot;flex flex-wrap items-center justify-center gap-2 mt-8 pt-6 border-t border-gray-100&quot;&gt;</code> | HTML `nav` 元素，构成当前页面的结构、内容或交互区域。 |
| 91 | <code>                &lt;!-- 上一页按钮 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 92 | <code>                {% if pagination.has_prev %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 93 | <code>                &lt;a href=&quot;{{ url_for(&#x27;user.guest_books&#x27;, page=pagination.prev_num, search=search) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 94 | <code>                   class=&quot;px-4 py-2 text-sm font-medium text-brand-primary border-2 border-brand-primary/20 hover:bg-pink-50 rounded-xl transition-colors&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 95 | <code>                    上一页</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 96 | <code>                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 97 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 98 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 99 | <code>                &lt;!-- 页码列表：显示当前页前后2页 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 100 | <code>                {% for p in pagination.iter_pages(left_edge=1, right_edge=1, left_current=2, right_current=2) %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 101 | <code>                    {% if p %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 102 | <code>                        {% if p == pagination.page %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 103 | <code>                        &lt;!-- 当前页：高亮显示 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 104 | <code>                        &lt;span class=&quot;px-4 py-2 text-sm font-bold text-white bg-brand-primary rounded-xl shadow-sm&quot;&gt;{{ p }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 105 | <code>                        {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 106 | <code>                        &lt;!-- 其他页：可点击 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 107 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.guest_books&#x27;, page=p, search=search) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 108 | <code>                           class=&quot;px-4 py-2 text-sm font-medium text-brand-deep/60 hover:text-brand-primary hover:bg-pink-50 rounded-xl transition-colors&quot;&gt;{{ p }}&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 109 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 110 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 111 | <code>                        &lt;!-- 省略号：表示跳过的页码 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 112 | <code>                        &lt;span class=&quot;px-2 text-gray-400&quot;&gt;...&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 113 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 114 | <code>                {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 115 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 116 | <code>                &lt;!-- 下一页按钮 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 117 | <code>                {% if pagination.has_next %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 118 | <code>                &lt;a href=&quot;{{ url_for(&#x27;user.guest_books&#x27;, page=pagination.next_num, search=search) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 119 | <code>                   class=&quot;px-4 py-2 text-sm font-medium text-brand-primary border-2 border-brand-primary/20 hover:bg-pink-50 rounded-xl transition-colors&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 120 | <code>                    下一页</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 121 | <code>                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 122 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 123 | <code>            &lt;/nav&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 124 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 125 | <code>            {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 126 | <code>            &lt;!-- ==================== 空状态提示 ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 127 | <code>            &lt;div class=&quot;text-center py-16&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 128 | <code>                &lt;!-- 书本图标 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 129 | <code>                &lt;svg class=&quot;w-16 h-16 text-gray-400 mx-auto mb-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 130 | <code>                    &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 131 | <code>                &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 132 | <code>                &lt;p class=&quot;text-gray-500&quot;&gt;暂无图书&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 133 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 134 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 135 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 136 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 137 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 138 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
