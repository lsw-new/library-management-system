# static/html/admin.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 2 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 3 | <code>{% block title %}后台管理 - 图书管理系统{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 4 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 5 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/admin.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 6 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 7 | <code>{% block main_class %}flex-1 px-4 sm:px-6 pb-10 pt-4 md:pt-6 animate-in fade-in duration-700 mt-20 md:mt-24{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 8 | <code>{% block content_wrapper %}admin-workspace-wrapper mx-auto{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 9 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 10 | <code>{% macro search_form(tab_value, placeholder, value=&#x27;&#x27;) -%}</code> | 定义 Jinja 宏，用于复用一段可参数化的模板结构。 |
| 11 | <code>&lt;form method=&quot;GET&quot; class=&quot;relative group flex-1 max-w-sm w-full&quot;&gt;</code> | 表单结构开始，用于收集并提交用户输入。 |
| 12 | <code>    &lt;input type=&quot;hidden&quot; name=&quot;tab&quot; value=&quot;{{ tab_value }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 13 | <code>    {% if tab_value == &#x27;current&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 14 | <code>    {% set form_status = request.args.get(&#x27;status&#x27;) %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 15 | <code>    &lt;input type=&quot;hidden&quot; name=&quot;status&quot; value=&quot;{{ form_status if form_status in (&#x27;pending&#x27;, &#x27;picked_up&#x27;) else current_default_status|default(&#x27;pending&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 16 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 17 | <code>    &lt;input type=&quot;text&quot; name=&quot;search&quot; value=&quot;{{ value or &#x27;&#x27; }}&quot; placeholder=&quot;{{ placeholder }}&quot; aria-label=&quot;{{ placeholder }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 18 | <code>           class=&quot;w-full pl-10 pr-4 py-3 md:py-2.5 bg-white border border-pink-100 hover:border-brand-primary/40 focus:border-brand-primary rounded-xl text-sm font-medium transition-all outline-none shadow-sm focus:shadow-[0_0_0_3px_rgba(236,72,153,0.1)]&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 19 | <code>    &lt;svg class=&quot;absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-deep/25 group-focus-within:text-brand-primary transition-colors&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 20 | <code>&lt;/form&gt;</code> | 表单结构结束。 |
| 21 | <code>{%- endmacro %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 22 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 23 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 24 | <code>{% set page_titles = {</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 25 | <code>    &#x27;online&#x27;: &#x27;在线用户&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 26 | <code>    &#x27;books&#x27;: &#x27;图书管理&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 27 | <code>    &#x27;current&#x27;: &#x27;当前预约&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 28 | <code>    &#x27;history&#x27;: &#x27;过往预约记录&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 29 | <code>    &#x27;users&#x27;: &#x27;用户管理&#x27;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 30 | <code>} %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 31 | <code>{% set page_descriptions = {</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 32 | <code>    &#x27;online&#x27;: &#x27;监控系统实时会话，追踪活跃轨迹。&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 33 | <code>    &#x27;books&#x27;: &#x27;维护全球馆藏资料，管理库存与封面。&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 34 | <code>    &#x27;current&#x27;: &#x27;处理借阅请求，监督归还进度。&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 35 | <code>    &#x27;history&#x27;: &#x27;回溯历史数据，分析借阅趋势。&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 36 | <code>    &#x27;users&#x27;: &#x27;查看所有账号，按需封禁或解除封禁。&#x27;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 37 | <code>} %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 38 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 39 | <code>&lt;div class=&quot;admin-layout-shell grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-4 md:gap-8 lg:items-stretch&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 40 | <code>    &lt;!-- 侧边导航栏 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 41 | <code>    &lt;aside class=&quot;admin-sidebar admin-sidebar-panel glass-panel p-5 md:p-6 rounded-2xl md:rounded-[2.5rem] shadow-xl border-l-4 border-brand-primary lg:sticky lg:top-4 lg:flex lg:flex-col lg:max-h-[calc(100vh-2rem)] lg:overflow-hidden&quot;&gt;</code> | HTML `aside` 元素，构成当前页面的结构、内容或交互区域。 |
| 42 | <code>        &lt;!-- 头部标识 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 43 | <code>        &lt;div class=&quot;hidden lg:flex lg:flex-col lg:justify-center mb-6 pb-6 border-b border-pink-100/60&quot; style=&quot;min-height: calc(73px + 30px);&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 44 | <code>            &lt;div class=&quot;flex items-center gap-3 mb-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 45 | <code>                &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 46 | <code>                    &lt;div class=&quot;w-12 h-12 bg-gradient-to-br from-brand-primary to-pink-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-pink-200/50&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 47 | <code>                        &lt;svg class=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a4 4 0 018 0m-12 0a6 6 0 1112 0&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 48 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 49 | <code>                    &lt;span class=&quot;absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white shadow-sm&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 50 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 51 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 52 | <code>                    &lt;h2 class=&quot;text-lg font-heading font-bold text-brand-deep leading-tight&quot;&gt;管理工作台&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 53 | <code>                    &lt;p class=&quot;text-[8px] font-bold text-brand-primary/50 uppercase tracking-widest mt-0.5&quot;&gt;管理控制台&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 54 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 55 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 56 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 57 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 58 | <code>        &lt;!-- 导航菜单 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 59 | <code>        &lt;nav class=&quot;grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2 overflow-visible pb-2 lg:pb-0 lg:flex-1&quot;&gt;</code> | HTML `nav` 元素，构成当前页面的结构、内容或交互区域。 |
| 60 | <code>            {% for key, title in page_titles.items() %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 61 | <code>            {% if tab == key %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 62 | <code>            &lt;button type=&quot;button&quot; data-tab=&quot;{{ key }}&quot; class=&quot;sidebar-nav-item is-active group&quot; onclick=&quot;switchAdminTab(this, &#x27;{{ key }}&#x27;)&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 63 | <code>                &lt;span class=&quot;text-sm font-bold&quot;&gt;{{ title }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 64 | <code>                {% if key == &#x27;online&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 65 | <code>                    &lt;span class=&quot;sidebar-nav-badge&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ online_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 66 | <code>                {% elif key == &#x27;books&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 67 | <code>                    &lt;span class=&quot;sidebar-nav-badge&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ books_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 68 | <code>                {% elif key == &#x27;current&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 69 | <code>                    &lt;span class=&quot;sidebar-nav-badge&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ pending_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 70 | <code>                {% elif key == &#x27;history&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 71 | <code>                    &lt;span class=&quot;sidebar-nav-badge&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ new_history_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 72 | <code>                {% elif key == &#x27;users&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 73 | <code>                    &lt;span class=&quot;sidebar-nav-badge&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ users_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 74 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 75 | <code>            &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 76 | <code>            {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 77 | <code>            &lt;button type=&quot;button&quot; data-tab=&quot;{{ key }}&quot; class=&quot;sidebar-nav-item group&quot; onclick=&quot;switchAdminTab(this, &#x27;{{ key }}&#x27;)&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 78 | <code>                &lt;span class=&quot;text-sm font-bold&quot;&gt;{{ title }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 79 | <code>                {% if key == &#x27;online&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 80 | <code>                    &lt;span class=&quot;sidebar-nav-badge-inactive&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ online_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 81 | <code>                {% elif key == &#x27;books&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 82 | <code>                    &lt;span class=&quot;sidebar-nav-badge-inactive&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ books_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 83 | <code>                {% elif key == &#x27;current&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 84 | <code>                    &lt;span class=&quot;sidebar-nav-badge-inactive&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ pending_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 85 | <code>                {% elif key == &#x27;history&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 86 | <code>                    &lt;span class=&quot;sidebar-nav-badge-inactive&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ new_history_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 87 | <code>                {% elif key == &#x27;users&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 88 | <code>                    &lt;span class=&quot;sidebar-nav-badge-inactive&quot; id=&quot;badge-{{ key }}&quot;&gt;{{ users_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 89 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 90 | <code>            &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 91 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 92 | <code>            {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 93 | <code>        &lt;/nav&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 94 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 95 | <code>        &lt;!-- 实时日志 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 96 | <code>        &lt;div class=&quot;hidden lg:flex lg:flex-col mt-4 flex-1 min-h-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 97 | <code>            &lt;div class=&quot;sidebar-info-card flex flex-col flex-1 min-h-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 98 | <code>                &lt;div class=&quot;sidebar-card-header&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 99 | <code>                    &lt;div class=&quot;sidebar-card-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 100 | <code>                        &lt;svg class=&quot;w-3.5 h-3.5 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 101 | <code>                            &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 102 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 103 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 104 | <code>                    &lt;span class=&quot;text-[10px] font-bold text-purple-700 uppercase tracking-wider&quot;&gt;实时日志&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 105 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 106 | <code>                &lt;div id=&quot;sidebarLogs&quot; class=&quot;space-y-1.5 flex-1 overflow-y-auto text-[9px] font-mono scrollbar-thin scrollbar-thumb-purple-200 scrollbar-track-transparent&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 107 | <code>                    &lt;div class=&quot;text-center text-purple-300 py-4 text-[10px]&quot;&gt;加载中...&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 108 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 109 | <code>                &lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 110 | <code>                    (function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 111 | <code>                        const actionIcons = {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 112 | <code>                            &#x27;用户登录&#x27;: &#x27;🔓&#x27;, &#x27;管理员登录&#x27;: &#x27;🔐&#x27;, &#x27;用户登出&#x27;: &#x27;👋&#x27;, &#x27;管理员登出&#x27;: &#x27;👋&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 113 | <code>                            &#x27;预约图书&#x27;: &#x27;📖&#x27;, &#x27;归还图书&#x27;: &#x27;✅&#x27;, &#x27;审核预约&#x27;: &#x27;✔️&#x27;, &#x27;拒绝预约&#x27;: &#x27;❌&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 114 | <code>                            &#x27;添加图书&#x27;: &#x27;➕&#x27;, &#x27;编辑图书&#x27;: &#x27;✏️&#x27;, &#x27;删除图书&#x27;: &#x27;🗑️&#x27;, &#x27;用户注册&#x27;: &#x27;👤&#x27;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 115 | <code>                        };</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 116 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 117 | <code>                        function readCachedLogs() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 118 | <code>                            try {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 119 | <code>                                const cached = sessionStorage.getItem(&#x27;adminLogs&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 120 | <code>                                if (!cached) return null;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 121 | <code>                                const parsed = JSON.parse(cached);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 122 | <code>                                if (!parsed || !Array.isArray(parsed.logs)) return null;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 123 | <code>                                return parsed;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 124 | <code>                            } catch (_) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 125 | <code>                                return null;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 126 | <code>                            }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 127 | <code>                        }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 128 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 129 | <code>                        function writeCachedLogs(logs) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 130 | <code>                            try {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 131 | <code>                                sessionStorage.setItem(&#x27;adminLogs&#x27;, JSON.stringify({</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 132 | <code>                                    logs,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 133 | <code>                                    timestamp: Date.now()</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 134 | <code>                                }));</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 135 | <code>                                sessionStorage.removeItem(&#x27;adminLogsHtml&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 136 | <code>                            } catch (_) {}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 137 | <code>                        }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 138 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 139 | <code>                        function clearCachedLogs() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 140 | <code>                            try {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 141 | <code>                                sessionStorage.removeItem(&#x27;adminLogs&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 142 | <code>                                sessionStorage.removeItem(&#x27;adminLogsHtml&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 143 | <code>                            } catch (_) {}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 144 | <code>                        }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 145 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 146 | <code>                        function renderLogs(logs, container) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 147 | <code>                            if (!container) return;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 148 | <code>                            container.innerHTML = &#x27;&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 149 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 150 | <code>                            logs.forEach(function(log) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 151 | <code>                                const wrapper = document.createElement(&#x27;div&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 152 | <code>                                wrapper.className = &#x27;flex flex-col gap-0.5 px-2 py-1.5 bg-white/60 rounded-lg hover:bg-white transition-colors&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 153 | <code>                                wrapper.title = log.details || log.action || &#x27;&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 154 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 155 | <code>                                const header = document.createElement(&#x27;div&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 156 | <code>                                header.className = &#x27;flex items-center gap-1.5&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 157 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 158 | <code>                                const icon = document.createElement(&#x27;span&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 159 | <code>                                icon.className = &#x27;text-[10px]&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 160 | <code>                                icon.textContent = actionIcons[log.action] || &#x27;•&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 161 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 162 | <code>                                const username = document.createElement(&#x27;span&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 163 | <code>                                username.className = `${log.user_type === &#x27;管理员&#x27; ? &#x27;text-purple-600&#x27; : log.user_type === &#x27;用户&#x27; ? &#x27;text-blue-600&#x27; : &#x27;text-gray-500&#x27;} font-bold text-[9px] truncate max-w-[70px]`;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 164 | <code>                                username.textContent = log.username || &#x27;&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 165 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 166 | <code>                                const action = document.createElement(&#x27;span&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 167 | <code>                                action.className = &#x27;text-gray-500 text-[8px] truncate flex-1&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 168 | <code>                                action.textContent = log.action || &#x27;&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 169 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 170 | <code>                                header.append(icon, username, action);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 171 | <code>                                wrapper.appendChild(header);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 172 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 173 | <code>                                if (log.details) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 174 | <code>                                    const shortDetails = document.createElement(&#x27;span&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 175 | <code>                                    shortDetails.className = &#x27;text-gray-400 text-[7px] pl-4 truncate&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 176 | <code>                                    shortDetails.textContent = log.details.substring(0, 30) + (log.details.length &gt; 30 ? &#x27;...&#x27; : &#x27;&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 177 | <code>                                    wrapper.appendChild(shortDetails);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 178 | <code>                                }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 179 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 180 | <code>                                const time = document.createElement(&#x27;span&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 181 | <code>                                time.className = &#x27;text-gray-300 text-[7px] pl-4&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 182 | <code>                                time.textContent = typeof log.time === &#x27;string&#x27; ? (log.time.split(&#x27; &#x27;)[1] || log.time) : &#x27;&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 183 | <code>                                wrapper.appendChild(time);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 184 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 185 | <code>                                container.appendChild(wrapper);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 186 | <code>                            });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 187 | <code>                        }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 188 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 189 | <code>                        window.readAdminSidebarLogsCache = readCachedLogs;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 190 | <code>                        window.writeAdminSidebarLogsCache = writeCachedLogs;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 191 | <code>                        window.clearAdminSidebarLogsCache = clearCachedLogs;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 192 | <code>                        window.renderAdminSidebarLogs = renderLogs;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 193 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 194 | <code>                        const logsContainer = document.getElementById(&#x27;sidebarLogs&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 195 | <code>                        const cachedLogs = readCachedLogs();</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 196 | <code>                        if (logsContainer &amp;&amp; cachedLogs &amp;&amp; cachedLogs.logs.length &gt; 0) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 197 | <code>                            renderLogs(cachedLogs.logs, logsContainer);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 198 | <code>                        }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 199 | <code>                    })();</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 200 | <code>                &lt;/script&gt;</code> | 结束当前脚本块。 |
| 201 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 202 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 203 | <code>    &lt;/aside&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 204 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 205 | <code>    &lt;!-- 主展示区 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 206 | <code>    &lt;section class=&quot;admin-main-panel space-y-5 md:space-y-6 animate-in fade-in slide-in-from-right-4 duration-700 lg:flex lg:flex-col lg:min-h-screen&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 207 | <code>        &lt;!-- 头部概览 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 208 | <code>        &lt;div class=&quot;admin-hero-panel glass-panel p-5 md:p-7 rounded-2xl md:rounded-3xl shadow-sm relative overflow-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 209 | <code>            &lt;div class=&quot;relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 210 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 211 | <code>                    &lt;p class=&quot;text-[10px] font-bold text-brand-primary/70 uppercase tracking-widest mb-1.5&quot;&gt;管理控制台&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 212 | <code>                    &lt;h1 class=&quot;text-2xl md:text-3xl font-heading font-bold text-brand-deep tracking-tight&quot;&gt;{{ page_titles.get(tab) }}&lt;/h1&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 213 | <code>                    &lt;p class=&quot;mt-1.5 text-sm text-brand-deep/50 font-medium&quot;&gt;{{ page_descriptions.get(tab) }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 214 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 215 | <code>                {% if tab == &#x27;books&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 216 | <code>                &lt;button type=&quot;button&quot; onclick=&quot;openAddBookModal()&quot; class=&quot;btn-primary group px-6 py-3 text-sm font-bold text-white rounded-2xl shadow-pink-lg flex items-center gap-2 self-start md:self-auto&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 217 | <code>                    &lt;svg class=&quot;w-4 h-4 group-hover:rotate-90 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 4v16m8-8H4&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 218 | <code>                    添加新馆藏</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 219 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 220 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 221 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 222 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 223 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 224 | <code>        &lt;!-- KPI 概览条 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 225 | <code>        &lt;div class=&quot;admin-kpi-grid grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3 md:gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 226 | <code>            &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;, tab=&#x27;online&#x27;) }}&quot; class=&quot;admin-kpi tone-online block&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 227 | <code>                &lt;div class=&quot;admin-kpi-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 228 | <code>                    &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 229 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 230 | <code>                &lt;p class=&quot;admin-kpi-label&quot;&gt;在线用户&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 231 | <code>                &lt;p class=&quot;admin-kpi-value&quot;&gt;{{ online_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 232 | <code>                &lt;p class=&quot;admin-kpi-trend is-up&quot;&gt;&lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-emerald-500&quot;&gt;&lt;/span&gt;实时&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 233 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 234 | <code>            &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;, tab=&#x27;books&#x27;) }}&quot; class=&quot;admin-kpi tone-books block&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 235 | <code>                &lt;div class=&quot;admin-kpi-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 236 | <code>                    &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 237 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 238 | <code>                &lt;p class=&quot;admin-kpi-label&quot;&gt;馆藏总量&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 239 | <code>                &lt;p class=&quot;admin-kpi-value&quot;&gt;{{ books_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 240 | <code>                &lt;p class=&quot;admin-kpi-trend&quot;&gt;册&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 241 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 242 | <code>            &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;, tab=&#x27;current&#x27;) }}&quot; class=&quot;admin-kpi tone-pending block&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 243 | <code>                &lt;div class=&quot;admin-kpi-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 244 | <code>                    &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 245 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 246 | <code>                &lt;p class=&quot;admin-kpi-label&quot;&gt;待审核&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 247 | <code>                &lt;p class=&quot;admin-kpi-value&quot;&gt;{{ pending_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 248 | <code>                {% if pending_count &gt; 0 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 249 | <code>                &lt;p class=&quot;admin-kpi-trend is-warn&quot;&gt;&lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse&quot;&gt;&lt;/span&gt;需处理&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 250 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 251 | <code>                &lt;p class=&quot;admin-kpi-trend&quot;&gt;已清空&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 252 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 253 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 254 | <code>            &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;, tab=&#x27;history&#x27;) }}&quot; class=&quot;admin-kpi tone-history block&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 255 | <code>                &lt;div class=&quot;admin-kpi-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 256 | <code>                    &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 257 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 258 | <code>                &lt;p class=&quot;admin-kpi-label&quot;&gt;今日记录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 259 | <code>                &lt;p class=&quot;admin-kpi-value&quot;&gt;{{ new_history_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 260 | <code>                &lt;p class=&quot;admin-kpi-trend&quot;&gt;累计 {{ history_count }} 条&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 261 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 262 | <code>            &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;, tab=&#x27;users&#x27;) }}&quot; class=&quot;admin-kpi tone-users block&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 263 | <code>                &lt;div class=&quot;admin-kpi-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 264 | <code>                    &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 265 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 266 | <code>                &lt;p class=&quot;admin-kpi-label&quot;&gt;用户管理&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 267 | <code>                &lt;p class=&quot;admin-kpi-value&quot;&gt;{{ users_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 268 | <code>                {% if banned_count &gt; 0 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 269 | <code>                &lt;p class=&quot;admin-kpi-trend is-warn&quot;&gt;&lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse&quot;&gt;&lt;/span&gt;已封禁 {{ banned_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 270 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 271 | <code>                &lt;p class=&quot;admin-kpi-trend&quot;&gt;全部正常&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 272 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 273 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 274 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 275 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 276 | <code>        &lt;!-- 动态 Tab 内容 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 277 | <code>        &lt;div class=&quot;glass-panel admin-tab-content admin-tab-panel rounded-2xl md:rounded-[3rem] shadow-sm overflow-hidden border border-white/50 lg:flex-1 lg:flex lg:flex-col&quot; aria-live=&quot;polite&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 278 | <code>            {% if tab == &#x27;online&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 279 | <code>                &lt;!-- 实时活跃会话 - 头部 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 280 | <code>                &lt;div class=&quot;admin-section-toolbar px-5 md:px-8 py-4 border-b border-pink-100/80 bg-gradient-to-r from-pink-50/60 via-white/80 to-white flex flex-col md:flex-row justify-between items-center gap-3 lg:sticky lg:top-0 lg:z-10&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 281 | <code>                    &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 282 | <code>                        &lt;h3 class=&quot;text-base font-bold text-brand-deep&quot;&gt;实时活跃会话&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 283 | <code>                        &lt;span class=&quot;inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black rounded-full border border-emerald-100&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 284 | <code>                            &lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse&quot;&gt;&lt;/span&gt;实时监控</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 285 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 286 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 287 | <code>                    {{ search_form(&#x27;online&#x27;, &#x27;搜索用户名、类型或 IP...&#x27;, search) }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 288 | <code>                    &lt;div class=&quot;flex items-center gap-2.5 shrink-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 289 | <code>                        &lt;span class=&quot;text-[10px] font-bold text-brand-deep/35 uppercase tracking-widest&quot;&gt;在线人数&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 290 | <code>                        &lt;span id=&quot;online-count-badge&quot; class=&quot;inline-flex items-center px-3 py-1 bg-emerald-500 text-white text-[11px] font-black rounded-full shadow-sm shadow-emerald-200/60&quot;&gt;{{ online_users|length }} 人&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 291 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 292 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 293 | <code>                &lt;!-- 用户卡片网格 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 294 | <code>                &lt;div class=&quot;p-4 md:p-6 overflow-visible lg:overflow-auto admin-content-fixed&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 295 | <code>                    {% if online_users %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 296 | <code>                    {% if search %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 297 | <code>                    &lt;p class=&quot;text-xs text-brand-deep/50 mb-3&quot;&gt;搜索到 &lt;span class=&quot;font-bold text-brand-primary&quot;&gt;{{ online_users|length }}&lt;/span&gt; 个用户&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 298 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 299 | <code>                    &lt;div id=&quot;online-users-grid&quot; class=&quot;admin-online-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 300 | <code>                        {% for user in online_users %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 301 | <code>                        {% set is_admin = user.user_type == &#x27;admin&#x27; %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 302 | <code>                        &lt;article class=&quot;online-user-card&quot; data-uid=&quot;{{ user.user_id }}&quot; data-utype=&quot;{{ user.user_type }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 303 | <code>                            &lt;div class=&quot;flex items-center gap-3 mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 304 | <code>                                &lt;div class=&quot;relative flex-shrink-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 305 | <code>                                    &lt;div class=&quot;w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shadow-sm {% if is_admin %}bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white{% else %}bg-gradient-to-br from-brand-deep to-brand-deep/80 text-white{% endif %}&quot;&gt;{{ user.username[:1]|upper }}&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 306 | <code>                                    &lt;span class=&quot;absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 307 | <code>                                        &lt;span class=&quot;absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 308 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 309 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 310 | <code>                                &lt;div class=&quot;min-w-0 flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 311 | <code>                                    &lt;p class=&quot;text-sm font-bold text-brand-deep truncate&quot;&gt;{{ user.username }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 312 | <code>                                    &lt;p class=&quot;text-[10px] font-bold uppercase tracking-wider mt-0.5 {% if is_admin %}text-purple-600{% else %}text-brand-deep/40{% endif %}&quot;&gt;{{ &#x27;管理员&#x27; if is_admin else &#x27;普通用户&#x27; }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 313 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 314 | <code>                                &lt;span class=&quot;inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 315 | <code>                                    &lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-emerald-500&quot;&gt;&lt;/span&gt;活跃</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 316 | <code>                                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 317 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 318 | <code>                            &lt;div class=&quot;flex items-center justify-between text-[11px] pt-3 border-t border-pink-50&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 319 | <code>                                &lt;div class=&quot;flex items-center gap-1.5 min-w-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 320 | <code>                                    &lt;span class=&quot;font-mono text-brand-deep/50 shrink-0&quot;&gt;{{ user.ip_address }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 321 | <code>                                    {% if user.geo_location %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 322 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-md border border-blue-100 truncate online-geo&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 323 | <code>                                        &lt;svg class=&quot;w-2.5 h-2.5 shrink-0&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z&quot;/&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M15 11a3 3 0 11-6 0 3 3 0 016 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 324 | <code>                                        {{ user.geo_location }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 325 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 326 | <code>                                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 327 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 328 | <code>                                &lt;span class=&quot;font-mono font-semibold text-brand-deep/70 online-last-seen shrink-0&quot;&gt;{{ user.last_seen.strftime(&#x27;%H:%M:%S&#x27;) }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 329 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 330 | <code>                            {% if not is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 331 | <code>                            &lt;div class=&quot;mt-2.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 332 | <code>                                &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 333 | <code>                                        class=&quot;kick-btn w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-bold text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-colors&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 334 | <code>                                        data-user-id=&quot;{{ user.user_id }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 335 | <code>                                        data-username=&quot;{{ user.username }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 336 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 337 | <code>                                    踢出下线</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 338 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 339 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 340 | <code>                            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 341 | <code>                        &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 342 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 343 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 344 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 345 | <code>                    &lt;div class=&quot;flex flex-col items-center justify-center py-20 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 346 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 347 | <code>                            &lt;svg class=&quot;w-7 h-7 text-emerald-300&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 348 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 349 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;{% if search %}没有匹配 &quot;{{ search }}&quot; 的活跃会话{% else %}当前没有用户在线{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 350 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 351 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 352 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 353 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 354 | <code>            {% elif tab == &#x27;books&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 355 | <code>                &lt;!-- 搜索 + 统计 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 356 | <code>                &lt;div class=&quot;admin-section-toolbar px-5 md:px-8 py-4 border-b border-pink-100/80 bg-gradient-to-r from-pink-50/60 via-white/80 to-white flex flex-col md:flex-row justify-between items-center gap-3 lg:sticky lg:top-0 lg:z-10&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 357 | <code>                    {{ search_form(&#x27;books&#x27;, &#x27;搜索书名、作者、ISBN...&#x27;, search) }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 358 | <code>                    &lt;div class=&quot;flex items-center gap-2.5 shrink-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 359 | <code>                        &lt;span class=&quot;text-[10px] font-bold text-brand-deep/35 uppercase tracking-widest&quot;&gt;检索结果&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 360 | <code>                        &lt;span class=&quot;inline-flex items-center px-3 py-1 bg-brand-primary text-white text-[11px] font-black rounded-full shadow-sm shadow-pink-200/60&quot;&gt;{{ books|length }} 册&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 361 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 362 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 363 | <code>                &lt;!-- 卡片网格 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 364 | <code>                &lt;div class=&quot;p-4 md:p-6 overflow-visible lg:overflow-auto admin-content-fixed&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 365 | <code>                    {% if books %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 366 | <code>                    &lt;div class=&quot;admin-books-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 367 | <code>                        {% for book in books %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 368 | <code>                        {% set stock_percentage = (book.stock / book.total * 100) if book.total &gt; 0 else 0 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 369 | <code>                        &lt;article class=&quot;admin-book-card group&quot;&gt;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 370 | <code>                            &lt;div class=&quot;admin-book-card-cover&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 371 | <code>                                &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + (book.image if book.image else &#x27;default-book.jpg&#x27;)) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 372 | <code>                                     alt=&quot;{{ book.title }}&quot; loading=&quot;lazy&quot; decoding=&quot;async&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 373 | <code>                                {% if book.isbn %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 374 | <code>                                &lt;span class=&quot;admin-book-card-isbn&quot;&gt;ISBN {{ book.isbn }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 375 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 376 | <code>                                &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 377 | <code>                                        data-book-id=&quot;{{ book.id }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 378 | <code>                                        data-book-title=&quot;{{ book.title }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 379 | <code>                                        data-book-author=&quot;{{ book.author }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 380 | <code>                                        data-book-isbn=&quot;{{ book.isbn or &#x27;&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 381 | <code>                                        data-book-publisher=&quot;{{ book.publisher or &#x27;&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 382 | <code>                                        data-book-location=&quot;{{ book.location or &#x27;&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 383 | <code>                                        data-book-category=&quot;{{ book.category or &#x27;&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 384 | <code>                                        data-book-stock=&quot;{{ book.stock }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 385 | <code>                                        data-book-total=&quot;{{ book.total }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 386 | <code>                                        data-book-image=&quot;{{ book.image or &#x27;&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 387 | <code>                                        onclick=&quot;openEditBookModalFromData(this)&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 388 | <code>                                        class=&quot;admin-book-card-edit&quot;&gt;编辑&lt;/button&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 389 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 390 | <code>                            &lt;div class=&quot;p-3 flex flex-col gap-1.5 flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 391 | <code>                                &lt;h4 class=&quot;text-sm font-heading font-semibold text-brand-deep line-clamp-2 leading-snug&quot;&gt;{{ book.title }}&lt;/h4&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 392 | <code>                                &lt;p class=&quot;text-[11px] text-brand-deep/55 truncate&quot;&gt;{{ book.author }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 393 | <code>                                {% if book.category %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 394 | <code>                                &lt;span class=&quot;inline-flex w-fit px-1.5 py-0.5 text-[10px] font-bold text-brand-primary bg-pink-50 border border-pink-100 rounded&quot;&gt;{{ book.category }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 395 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 396 | <code>                                &lt;div class=&quot;mt-auto pt-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 397 | <code>                                    &lt;div class=&quot;flex items-center justify-between mb-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 398 | <code>                                        &lt;span class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-wider&quot;&gt;库存&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 399 | <code>                                        &lt;span class=&quot;text-[11px] font-bold {% if book.stock &gt; 0 %}text-emerald-600{% else %}text-rose-500{% endif %}&quot;&gt;{{ book.stock }}&lt;span class=&quot;text-brand-deep/30 font-normal&quot;&gt;/{{ book.total }}&lt;/span&gt;&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 400 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 401 | <code>                                    &lt;div class=&quot;admin-stock-bar&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 402 | <code>                                        &lt;div data-width=&quot;{{ stock_percentage }}&quot;&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 403 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 404 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 405 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 406 | <code>                        &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 407 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 408 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 409 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 410 | <code>                    &lt;div class=&quot;flex flex-col items-center justify-center py-20 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 411 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center border border-pink-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 412 | <code>                            &lt;svg class=&quot;w-7 h-7 text-brand-deep/20&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 413 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 414 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;{% if search %}没有匹配 &quot;{{ search }}&quot; 的图书{% else %}馆藏暂无数据{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 415 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 416 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 417 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 418 | <code>            {% elif tab == &#x27;current&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 419 | <code>                {% set current_pending_count = current_records|selectattr(&#x27;status&#x27;, &#x27;equalto&#x27;, &#x27;pending&#x27;)|list|length %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 420 | <code>                {% set current_picked_up_count = current_records|selectattr(&#x27;status&#x27;, &#x27;equalto&#x27;, &#x27;picked_up&#x27;)|list|length %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 421 | <code>                {% set requested_current_status = request.args.get(&#x27;status&#x27;) %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 422 | <code>                {% set current_default_status = requested_current_status if requested_current_status in (&#x27;pending&#x27;, &#x27;picked_up&#x27;) else (&#x27;pending&#x27; if current_pending_count &gt; 0 or current_picked_up_count == 0 else &#x27;picked_up&#x27;) %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 423 | <code>                &lt;!-- 当前借阅处理 - 头部 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 424 | <code>                &lt;div class=&quot;admin-section-toolbar px-5 md:px-8 pt-4 pb-0 border-b border-pink-100/80 bg-gradient-to-r from-pink-50/60 via-white/80 to-white lg:sticky lg:top-0 lg:z-10&quot; data-current-default-status=&quot;{{ current_default_status }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 425 | <code>                    &lt;div class=&quot;flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 426 | <code>                        &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 427 | <code>                            &lt;h3 class=&quot;text-base font-bold text-brand-deep&quot;&gt;当前借阅处理&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 428 | <code>                            &lt;span class=&quot;inline-flex items-center px-3 py-1 bg-brand-primary text-white text-[11px] font-black rounded-full shadow-sm shadow-pink-200/60&quot;&gt;{{ current_records|length }} 条&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 429 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 430 | <code>                        {{ search_form(&#x27;current&#x27;, &#x27;搜索书名或用户...&#x27;, search) }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 431 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 432 | <code>                    &lt;div class=&quot;grid grid-cols-2 gap-1&quot; role=&quot;group&quot; aria-label=&quot;当前预约状态筛选&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 433 | <code>                        &lt;button type=&quot;button&quot; data-current-status-tab=&quot;pending&quot; class=&quot;history-tab-btn current-status-tab w-full px-3 sm:px-5 py-3 sm:py-2.5 text-sm font-bold rounded-t-lg transition-all {% if current_default_status == &#x27;pending&#x27; %}border-b-2 border-brand-primary text-brand-primary bg-pink-50/50{% else %}border-b-2 border-transparent hover:bg-pink-50/60 text-brand-deep/50{% endif %}&quot; aria-pressed=&quot;{{ &#x27;true&#x27; if current_default_status == &#x27;pending&#x27; else &#x27;false&#x27; }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 434 | <code>                            &lt;div class=&quot;flex items-center justify-center gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 435 | <code>                                &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 436 | <code>                                &lt;span&gt;待审核&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 437 | <code>                                &lt;span class=&quot;px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full&quot;&gt;{{ current_pending_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 438 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 439 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 440 | <code>                        &lt;button type=&quot;button&quot; data-current-status-tab=&quot;picked_up&quot; class=&quot;history-tab-btn current-status-tab w-full px-3 sm:px-5 py-3 sm:py-2.5 text-sm font-bold rounded-t-lg transition-all {% if current_default_status == &#x27;picked_up&#x27; %}border-b-2 border-brand-primary text-brand-primary bg-pink-50/50{% else %}border-b-2 border-transparent hover:bg-pink-50/60 text-brand-deep/50{% endif %}&quot; aria-pressed=&quot;{{ &#x27;true&#x27; if current_default_status == &#x27;picked_up&#x27; else &#x27;false&#x27; }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 441 | <code>                            &lt;div class=&quot;flex items-center justify-center gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 442 | <code>                                &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 443 | <code>                                &lt;span&gt;已取待归还&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 444 | <code>                                &lt;span class=&quot;px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full&quot;&gt;{{ current_picked_up_count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 445 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 446 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 447 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 448 | <code>                    &lt;p id=&quot;current-status-announcement&quot; class=&quot;sr-only&quot; aria-live=&quot;polite&quot;&gt;&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 449 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 450 | <code>                &lt;!-- 卡片网格 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 451 | <code>                &lt;div class=&quot;history-records-fixed overflow-visible lg:overflow-auto p-4 md:p-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 452 | <code>                    {% if current_records %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 453 | <code>                    &lt;div class=&quot;admin-records-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 454 | <code>                        {% for record in current_records %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 455 | <code>                        &lt;article class=&quot;admin-history-card&quot; data-current-record-status=&quot;{{ record.status }}&quot;{% if record.status != current_default_status %} hidden{% endif %}&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 456 | <code>                            &lt;div class=&quot;flex items-center gap-3 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 457 | <code>                                &lt;div class=&quot;w-10 h-10 rounded-xl {% if record.status == &#x27;pending&#x27; %}bg-gradient-to-br from-amber-400 to-orange-500{% else %}bg-gradient-to-br from-blue-500 to-indigo-500{% endif %} text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm&quot;&gt;{{ record.user.username[:1]|upper }}&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 458 | <code>                                &lt;div class=&quot;min-w-0 flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 459 | <code>                                    &lt;p class=&quot;font-bold text-sm text-brand-deep truncate&quot;&gt;{{ record.user.username }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 460 | <code>                                    &lt;p class=&quot;text-[10px] text-brand-deep/40 mt-0.5&quot;&gt;{% if record.status == &#x27;pending&#x27; %}待审核预约{% else %}已取待归还{% endif %}&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 461 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 462 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 463 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 464 | <code>                            &lt;div class=&quot;py-3 border-t border-b border-pink-50 space-y-2 mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 465 | <code>                                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 466 | <code>                                    &lt;p class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest mb-1&quot;&gt;书名&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 467 | <code>                                    &lt;p class=&quot;text-sm font-semibold text-brand-deep line-clamp-2&quot;&gt;{{ record.book.title }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 468 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 469 | <code>                                &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 470 | <code>                                    &lt;div class=&quot;text-center p-2 {% if record.status == &#x27;pending&#x27; %}bg-amber-50{% else %}bg-blue-50{% endif %} rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 471 | <code>                                        &lt;p class=&quot;font-bold {% if record.status == &#x27;pending&#x27; %}text-amber-700{% else %}text-blue-700{% endif %} uppercase tracking-wider text-[10px]&quot;&gt;预约&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 472 | <code>                                        &lt;p class=&quot;font-mono {% if record.status == &#x27;pending&#x27; %}text-amber-600{% else %}text-blue-600{% endif %} mt-0.5&quot;&gt;{{ record.borrow_date.strftime(&#x27;%m-%d&#x27;) }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 473 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 474 | <code>                                    &lt;div class=&quot;text-center p-2 {% if record.status == &#x27;pending&#x27; %}bg-amber-50{% else %}bg-blue-50{% endif %} rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 475 | <code>                                        &lt;p class=&quot;font-bold {% if record.status == &#x27;pending&#x27; %}text-amber-700{% else %}text-blue-700{% endif %} uppercase tracking-wider text-[10px]&quot;&gt;领取&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 476 | <code>                                        &lt;p class=&quot;font-mono {% if record.status == &#x27;pending&#x27; %}text-amber-600{% else %}text-blue-600{% endif %} mt-0.5&quot;&gt;{% if record.pickup_date %}{{ record.pickup_date.strftime(&#x27;%m-%d&#x27;) }}{% else %}—{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 477 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 478 | <code>                                    &lt;div class=&quot;text-center p-2 {% if record.status == &#x27;pending&#x27; %}bg-amber-50{% else %}bg-blue-50{% endif %} rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 479 | <code>                                        &lt;p class=&quot;font-bold {% if record.status == &#x27;pending&#x27; %}text-amber-700{% else %}text-blue-700{% endif %} uppercase tracking-wider text-[10px]&quot;&gt;归还&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 480 | <code>                                        &lt;p class=&quot;font-mono {% if record.status == &#x27;pending&#x27; %}text-amber-600{% else %}text-blue-600{% endif %} mt-0.5&quot;&gt;{% if record.return_date %}{{ record.return_date.strftime(&#x27;%m-%d&#x27;) }}{% else %}—{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 481 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 482 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 483 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 484 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 485 | <code>                            &lt;div class=&quot;flex gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 486 | <code>                                {% if record.status == &#x27;pending&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 487 | <code>                                &lt;button type=&quot;button&quot; data-record-id=&quot;{{ record.id }}&quot; onclick=&quot;approveReservation(this.dataset.recordId)&quot; class=&quot;admin-action-btn is-approve flex-1 text-xs py-2.5&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 488 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;3&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 489 | <code>                                    批准</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 490 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 491 | <code>                                &lt;button type=&quot;button&quot; data-record-id=&quot;{{ record.id }}&quot; onclick=&quot;rejectReservation(this.dataset.recordId)&quot; class=&quot;admin-action-btn is-reject flex-1 text-xs py-2.5&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 492 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;3&quot; d=&quot;M6 18L18 6M6 6l12 12&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 493 | <code>                                    拒绝</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 494 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 495 | <code>                                {% elif record.status == &#x27;picked_up&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 496 | <code>                                &lt;button type=&quot;button&quot; data-record-id=&quot;{{ record.id }}&quot; onclick=&quot;adminReturnBook(this.dataset.recordId)&quot; class=&quot;admin-action-btn is-return w-full text-xs py-2.5&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 497 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 498 | <code>                                    确认归还</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 499 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 500 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 501 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 502 | <code>                        &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 503 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 504 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 505 | <code>                    &lt;div data-current-empty-state=&quot;pending&quot; class=&quot;hidden flex flex-col items-center justify-center py-20 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 506 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 507 | <code>                            &lt;svg class=&quot;w-7 h-7 text-amber-400/50&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 508 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 509 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;暂无待审核预约&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 510 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 511 | <code>                    &lt;div data-current-empty-state=&quot;picked_up&quot; class=&quot;hidden flex flex-col items-center justify-center py-20 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 512 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 513 | <code>                            &lt;svg class=&quot;w-7 h-7 text-blue-400/50&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 514 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 515 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;暂无已取待归还记录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 516 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 517 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 518 | <code>                    &lt;div class=&quot;flex flex-col items-center justify-center py-20 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 519 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center border border-pink-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 520 | <code>                            &lt;svg class=&quot;w-7 h-7 text-brand-deep/20&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 521 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 522 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;暂无待处理的预约记录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 523 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 524 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 525 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 526 | <code>            {% elif tab == &#x27;history&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 527 | <code>                &lt;!-- 历史借阅记录 - 头部 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 528 | <code>                &lt;div class=&quot;admin-section-toolbar px-5 md:px-8 pt-4 pb-0 border-b border-pink-100/80 bg-gradient-to-r from-pink-50/60 via-white/80 to-white lg:sticky lg:top-0 lg:z-10&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 529 | <code>                    &lt;div class=&quot;flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 530 | <code>                        &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 531 | <code>                            &lt;h3 class=&quot;text-base font-bold text-brand-deep&quot;&gt;历史借阅记录&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 532 | <code>                            &lt;span class=&quot;inline-flex items-center px-3 py-1 bg-brand-primary text-white text-[11px] font-black rounded-full shadow-sm shadow-pink-200/60&quot;&gt;{{ (today_records|length) + (past_records|length) }} 条&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 533 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 534 | <code>                        {{ search_form(&#x27;history&#x27;, &#x27;搜索书名或用户...&#x27;, search) }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 535 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 536 | <code>                    &lt;!-- 子标签页 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 537 | <code>                    &lt;div class=&quot;grid grid-cols-2 gap-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 538 | <code>                        &lt;button onclick=&quot;switchHistoryTab(&#x27;today&#x27;)&quot; id=&quot;todayTabBtn&quot; class=&quot;history-tab-btn w-full px-3 sm:px-5 py-3 sm:py-2.5 text-sm font-bold rounded-t-lg transition-all border-b-2 border-transparent hover:bg-pink-50/60 text-brand-deep/50&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 539 | <code>                            &lt;div class=&quot;flex items-center justify-center gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 540 | <code>                                &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 541 | <code>                                &lt;span&gt;今日预约&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 542 | <code>                                &lt;span class=&quot;px-2 py-0.5 bg-purple-100 text-purple-700 text-[10px] font-bold rounded-full&quot;&gt;{{ today_records|length }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 543 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 544 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 545 | <code>                        &lt;button onclick=&quot;switchHistoryTab(&#x27;past&#x27;)&quot; id=&quot;pastTabBtn&quot; class=&quot;history-tab-btn w-full px-3 sm:px-5 py-3 sm:py-2.5 text-sm font-bold rounded-t-lg transition-all border-b-2 border-transparent hover:bg-pink-50/60 text-brand-deep/50&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 546 | <code>                            &lt;div class=&quot;flex items-center justify-center gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 547 | <code>                                &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 548 | <code>                                &lt;span&gt;过往记录&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 549 | <code>                                &lt;span class=&quot;px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] font-bold rounded-full&quot;&gt;{{ past_records|length }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 550 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 551 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 552 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 553 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 554 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 555 | <code>                &lt;!-- 今日预约记录 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 556 | <code>                &lt;div id=&quot;todayRecordsTab&quot; class=&quot;history-tab-content history-records-fixed overflow-visible lg:overflow-auto p-4 md:p-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 557 | <code>                    {% if today_records %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 558 | <code>                    &lt;div class=&quot;admin-records-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 559 | <code>                        {% for record in today_records %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 560 | <code>                        &lt;article class=&quot;admin-history-card&quot;&gt;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 561 | <code>                            &lt;div class=&quot;flex items-center gap-3 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 562 | <code>                                &lt;div class=&quot;w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm&quot;&gt;{{ record.user.username[:1]|upper }}&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 563 | <code>                                &lt;div class=&quot;min-w-0 flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 564 | <code>                                    &lt;p class=&quot;font-bold text-sm text-brand-deep truncate&quot;&gt;{{ record.user.username }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 565 | <code>                                    &lt;p class=&quot;text-[10px] text-brand-deep/40 mt-0.5&quot;&gt;今日预约&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 566 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 567 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 568 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 569 | <code>                            &lt;div class=&quot;py-3 border-t border-b border-pink-50 space-y-2 mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 570 | <code>                                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 571 | <code>                                    &lt;p class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest mb-1&quot;&gt;书名&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 572 | <code>                                    &lt;p class=&quot;text-sm font-semibold text-brand-deep line-clamp-2&quot;&gt;{{ record.book.title }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 573 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 574 | <code>                                &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 575 | <code>                                    &lt;div class=&quot;text-center p-2 bg-purple-50 rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 576 | <code>                                        &lt;p class=&quot;font-bold text-purple-700 uppercase tracking-wider text-[10px]&quot;&gt;预约&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 577 | <code>                                        &lt;p class=&quot;font-mono text-purple-600 mt-0.5&quot;&gt;{{ record.borrow_date.strftime(&#x27;%m-%d&#x27;) }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 578 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 579 | <code>                                    &lt;div class=&quot;text-center p-2 bg-blue-50 rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 580 | <code>                                        &lt;p class=&quot;font-bold text-blue-700 uppercase tracking-wider text-[10px]&quot;&gt;领取&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 581 | <code>                                        &lt;p class=&quot;font-mono text-blue-600 mt-0.5&quot;&gt;{% if record.pickup_date %}{{ record.pickup_date.strftime(&#x27;%m-%d&#x27;) }}{% else %}—{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 582 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 583 | <code>                                    &lt;div class=&quot;text-center p-2 bg-green-50 rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 584 | <code>                                        &lt;p class=&quot;font-bold text-green-700 uppercase tracking-wider text-[10px]&quot;&gt;归还&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 585 | <code>                                        &lt;p class=&quot;font-mono text-green-600 mt-0.5&quot;&gt;{% if record.return_date %}{{ record.return_date.strftime(&#x27;%m-%d&#x27;) }}{% else %}—{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 586 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 587 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 588 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 589 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 590 | <code>                            &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 591 | <code>                                {% if record.status == &#x27;returned&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 592 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-green-50 text-green-700 rounded-full border border-green-100 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 593 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-green-500&quot;&gt;&lt;/span&gt;已归还</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 594 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 595 | <code>                                {% elif record.status == &#x27;rejected&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 596 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-red-50 text-red-600 rounded-full border border-red-100 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 597 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-red-500&quot;&gt;&lt;/span&gt;已拒绝</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 598 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 599 | <code>                                {% elif record.status == &#x27;expired&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 600 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-orange-50 text-orange-700 rounded-full border border-orange-100 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 601 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-orange-500&quot;&gt;&lt;/span&gt;已逾期</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 602 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 603 | <code>                                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 604 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-amber-50 text-amber-700 rounded-full border border-amber-100 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 605 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-amber-400 animate-pulse&quot;&gt;&lt;/span&gt;处理中</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 606 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 607 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 608 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 609 | <code>                        &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 610 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 611 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 612 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 613 | <code>                    &lt;div class=&quot;flex flex-col items-center justify-center py-16 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 614 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 615 | <code>                            &lt;svg class=&quot;w-7 h-7 text-purple-300&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 616 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 617 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;今日暂无预约记录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 618 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 619 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 620 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 621 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 622 | <code>                &lt;!-- 过往借阅记录 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 623 | <code>                &lt;div id=&quot;pastRecordsTab&quot; class=&quot;history-tab-content history-records-fixed overflow-visible lg:overflow-auto p-4 md:p-6 hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 624 | <code>                    {% if past_records %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 625 | <code>                    &lt;div class=&quot;admin-records-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 626 | <code>                        {% for record in past_records %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 627 | <code>                        &lt;article class=&quot;admin-history-card&quot;&gt;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 628 | <code>                            &lt;div class=&quot;flex items-center gap-3 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 629 | <code>                                &lt;div class=&quot;w-10 h-10 rounded-xl bg-gradient-to-br from-gray-400 to-gray-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-sm&quot;&gt;{{ record.user.username[:1]|upper }}&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 630 | <code>                                &lt;div class=&quot;min-w-0 flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 631 | <code>                                    &lt;p class=&quot;font-bold text-sm text-brand-deep truncate&quot;&gt;{{ record.user.username }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 632 | <code>                                    &lt;p class=&quot;text-[10px] text-brand-deep/40 mt-0.5&quot;&gt;过往记录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 633 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 634 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 635 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 636 | <code>                            &lt;div class=&quot;py-3 border-t border-b border-pink-50 space-y-2 mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 637 | <code>                                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 638 | <code>                                    &lt;p class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest mb-1&quot;&gt;书名&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 639 | <code>                                    &lt;p class=&quot;text-sm font-semibold text-brand-deep line-clamp-2&quot;&gt;{{ record.book.title }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 640 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 641 | <code>                                &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs pt-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 642 | <code>                                    &lt;div class=&quot;text-center p-2 bg-slate-50 rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 643 | <code>                                        &lt;p class=&quot;font-bold text-slate-700 uppercase tracking-wider text-[10px]&quot;&gt;预约&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 644 | <code>                                        &lt;p class=&quot;font-mono text-slate-600 mt-0.5&quot;&gt;{{ record.borrow_date.strftime(&#x27;%m-%d&#x27;) }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 645 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 646 | <code>                                    &lt;div class=&quot;text-center p-2 bg-slate-50 rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 647 | <code>                                        &lt;p class=&quot;font-bold text-slate-700 uppercase tracking-wider text-[10px]&quot;&gt;领取&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 648 | <code>                                        &lt;p class=&quot;font-mono text-slate-600 mt-0.5&quot;&gt;{% if record.pickup_date %}{{ record.pickup_date.strftime(&#x27;%m-%d&#x27;) }}{% else %}—{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 649 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 650 | <code>                                    &lt;div class=&quot;text-center p-2 bg-slate-50 rounded-lg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 651 | <code>                                        &lt;p class=&quot;font-bold text-slate-700 uppercase tracking-wider text-[10px]&quot;&gt;归还&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 652 | <code>                                        &lt;p class=&quot;font-mono text-slate-600 mt-0.5&quot;&gt;{% if record.return_date %}{{ record.return_date.strftime(&#x27;%m-%d&#x27;) }}{% else %}—{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 653 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 654 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 655 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 656 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 657 | <code>                            &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 658 | <code>                                {% if record.status == &#x27;returned&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 659 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-green-50 text-green-700 rounded-full border border-green-100 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 660 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-green-500&quot;&gt;&lt;/span&gt;已归还</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 661 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 662 | <code>                                {% elif record.status == &#x27;rejected&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 663 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-red-50 text-red-600 rounded-full border border-red-100 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 664 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-red-500&quot;&gt;&lt;/span&gt;已拒绝</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 665 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 666 | <code>                                {% elif record.status == &#x27;expired&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 667 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-orange-50 text-orange-700 rounded-full border border-orange-100 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 668 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-orange-500&quot;&gt;&lt;/span&gt;已逾期</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 669 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 670 | <code>                                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 671 | <code>                                    &lt;span class=&quot;inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold bg-slate-100 text-slate-600 rounded-full border border-slate-200 w-full justify-center&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 672 | <code>                                        &lt;span class=&quot;w-2 h-2 rounded-full bg-slate-400&quot;&gt;&lt;/span&gt;进行中</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 673 | <code>                                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 674 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 675 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 676 | <code>                        &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 677 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 678 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 679 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 680 | <code>                    &lt;div class=&quot;flex flex-col items-center justify-center py-16 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 681 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center border border-pink-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 682 | <code>                            &lt;svg class=&quot;w-7 h-7 text-brand-deep/20&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 683 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 684 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;暂无过往借阅记录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 685 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 686 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 687 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 688 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 689 | <code>            {% elif tab == &#x27;users&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 690 | <code>                &lt;!-- 用户管理 - 头部 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 691 | <code>                &lt;div class=&quot;admin-section-toolbar px-5 md:px-8 py-4 border-b border-pink-100/80 bg-gradient-to-r from-pink-50/60 via-white/80 to-white flex flex-col md:flex-row justify-between items-center gap-3 lg:sticky lg:top-0 lg:z-10&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 692 | <code>                    &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 693 | <code>                        &lt;h3 class=&quot;text-base font-bold text-brand-deep&quot;&gt;账号一览&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 694 | <code>                        &lt;span class=&quot;inline-flex items-center gap-1.5 px-2.5 py-1 bg-purple-50 text-purple-700 text-[10px] font-black rounded-full border border-purple-100&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 695 | <code>                            共 {{ users_list|length }} 个账号</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 696 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 697 | <code>                        {% if banned_count &gt; 0 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 698 | <code>                        &lt;span class=&quot;inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 text-rose-700 text-[10px] font-black rounded-full border border-rose-100&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 699 | <code>                            &lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse&quot;&gt;&lt;/span&gt;已封禁 {{ banned_count }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 700 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 701 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 702 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 703 | <code>                    {{ search_form(&#x27;users&#x27;, &#x27;搜索用户名、邮箱或学号...&#x27;, search) }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 704 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 705 | <code>                &lt;!-- 用户卡片网格 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 706 | <code>                &lt;div class=&quot;p-4 md:p-6 overflow-visible lg:overflow-auto admin-content-fixed&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 707 | <code>                    {% if users_list %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 708 | <code>                    &lt;div id=&quot;users-grid&quot; class=&quot;admin-users-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 709 | <code>                        {% for u in users_list %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 710 | <code>                        {% set banned = u.is_banned %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 711 | <code>                        &lt;article class=&quot;user-card relative bg-white/90 rounded-2xl border {% if banned %}border-rose-200{% else %}border-pink-100/70{% endif %} p-4 shadow-sm hover:shadow-md transition-shadow&quot;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 712 | <code>                                 data-user-id=&quot;{{ u.id }}&quot; data-username=&quot;{{ u.username }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 713 | <code>                            &lt;div class=&quot;flex items-center gap-3 mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 714 | <code>                                &lt;div class=&quot;w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shadow-sm {% if banned %}bg-gradient-to-br from-rose-500 to-rose-700 text-white{% else %}bg-gradient-to-br from-brand-deep to-brand-deep/80 text-white{% endif %}&quot;&gt;{{ u.username[:1]|upper }}&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 715 | <code>                                &lt;div class=&quot;min-w-0 flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 716 | <code>                                    &lt;p class=&quot;text-sm font-bold text-brand-deep truncate&quot;&gt;{{ u.username }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 717 | <code>                                    &lt;p class=&quot;text-[11px] text-brand-deep/45 truncate&quot;&gt;{{ u.email }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 718 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 719 | <code>                                {% if banned %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 720 | <code>                                &lt;span class=&quot;inline-flex items-center gap-1 px-2 py-0.5 bg-rose-50 text-rose-700 text-[10px] font-bold rounded-full border border-rose-100&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 721 | <code>                                    &lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-rose-500&quot;&gt;&lt;/span&gt;已封禁</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 722 | <code>                                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 723 | <code>                                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 724 | <code>                                &lt;span class=&quot;inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 725 | <code>                                    &lt;span class=&quot;w-1.5 h-1.5 rounded-full bg-emerald-500&quot;&gt;&lt;/span&gt;正常</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 726 | <code>                                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 727 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 728 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 729 | <code>                            &lt;div class=&quot;grid grid-cols-2 gap-2 text-[11px] pt-3 border-t border-pink-50 mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 730 | <code>                                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 731 | <code>                                    &lt;p class=&quot;text-brand-deep/35 uppercase tracking-wider font-bold text-[9px] mb-0.5&quot;&gt;学号&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 732 | <code>                                    &lt;p class=&quot;font-mono text-brand-deep/70 truncate&quot;&gt;{{ u.student_id or &#x27;—&#x27; }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 733 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 734 | <code>                                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 735 | <code>                                    &lt;p class=&quot;text-brand-deep/35 uppercase tracking-wider font-bold text-[9px] mb-0.5&quot;&gt;封禁至&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 736 | <code>                                    &lt;p class=&quot;font-mono {% if banned %}text-rose-600 font-bold{% else %}text-brand-deep/30{% endif %} truncate ban-until&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 737 | <code>                                        {% if banned %}{{ u.banned_until.strftime(&#x27;%m-%d %H:%M&#x27;) }}{% else %}—{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 738 | <code>                                    &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 739 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 740 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 741 | <code>                            &lt;div class=&quot;grid grid-cols-3 gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 742 | <code>                                &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 743 | <code>                                        class=&quot;change-email-btn flex items-center justify-center gap-1 py-1.5 text-[11px] font-bold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-colors&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 744 | <code>                                        data-user-id=&quot;{{ u.id }}&quot; data-username=&quot;{{ u.username }}&quot; data-email=&quot;{{ u.email }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 745 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 746 | <code>                                    改邮箱</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 747 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 748 | <code>                                &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 749 | <code>                                        class=&quot;reset-pwd-btn flex items-center justify-center gap-1 py-1.5 text-[11px] font-bold text-amber-600 border border-amber-200 rounded-lg hover:bg-amber-50 hover:border-amber-400 transition-colors&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 750 | <code>                                        data-user-id=&quot;{{ u.id }}&quot; data-username=&quot;{{ u.username }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 751 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 752 | <code>                                    重置密码</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 753 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 754 | <code>                                {% if banned %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 755 | <code>                                &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 756 | <code>                                        class=&quot;unban-btn flex items-center justify-center gap-1 py-1.5 text-[11px] font-bold text-emerald-700 border border-emerald-200 rounded-lg hover:bg-emerald-50 hover:border-emerald-400 transition-colors&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 757 | <code>                                        data-user-id=&quot;{{ u.id }}&quot; data-username=&quot;{{ u.username }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 758 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 759 | <code>                                    解封</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 760 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 761 | <code>                                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 762 | <code>                                &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 763 | <code>                                        class=&quot;ban-btn flex items-center justify-center gap-1 py-1.5 text-[11px] font-bold text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-colors&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 764 | <code>                                        data-user-id=&quot;{{ u.id }}&quot; data-username=&quot;{{ u.username }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 765 | <code>                                    &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 766 | <code>                                    封禁</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 767 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 768 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 769 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 770 | <code>                        &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 771 | <code>                        {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 772 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 773 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 774 | <code>                    &lt;div class=&quot;flex flex-col items-center justify-center py-20 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 775 | <code>                        &lt;div class=&quot;w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center border border-purple-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 776 | <code>                            &lt;svg class=&quot;w-7 h-7 text-purple-300&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-5.13a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 777 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 778 | <code>                        &lt;p class=&quot;text-sm font-semibold text-brand-deep/40&quot;&gt;{% if search %}没有匹配 &quot;{{ search }}&quot; 的账号{% else %}暂无注册用户{% endif %}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 779 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 780 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 781 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 782 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 783 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 784 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 785 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 786 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 787 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 788 | <code>&lt;!-- 添加图书模态框 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 789 | <code>&lt;div id=&quot;addBookModal&quot; class=&quot;hidden fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-4 backdrop-blur-sm&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;addBookModalTitle&quot; style=&quot;background: linear-gradient(135deg, rgba(139,92,246,0.22), rgba(236,72,153,0.15))&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 790 | <code>    &lt;div class=&quot;bg-white w-full max-w-3xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden scale-in-center max-h-[92vh] flex flex-col&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 791 | <code>        &lt;!-- 模态框顶部渐变标题栏 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 792 | <code>        &lt;div class=&quot;relative flex-shrink-0&quot; style=&quot;background: linear-gradient(135deg, #f9a8d4 0%, #c084fc 50%, #818cf8 100%)&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 793 | <code>            &lt;div class=&quot;px-6 py-5 flex justify-between items-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 794 | <code>                &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 795 | <code>                    &lt;div class=&quot;w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 796 | <code>                        &lt;svg class=&quot;w-5 h-5 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 797 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 798 | <code>                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 799 | <code>                        &lt;h2 id=&quot;addBookModalTitle&quot; class=&quot;text-lg font-bold text-white leading-tight&quot;&gt;添加新馆藏&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 800 | <code>                        &lt;p class=&quot;text-xs text-white/70&quot;&gt;填写图书信息并上传封面&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 801 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 802 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 803 | <code>                &lt;button type=&quot;button&quot; onclick=&quot;closeAddBookModal()&quot; class=&quot;w-11 h-11 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-xl text-white transition-colors cursor-pointer&quot; aria-label=&quot;关闭添加馆藏弹窗&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 804 | <code>                    &lt;svg class=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M6 18L18 6M6 6l12 12&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 805 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 806 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 807 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 808 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 809 | <code>        &lt;!-- 表单内容区（可滚动） --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 810 | <code>        &lt;div class=&quot;overflow-y-auto flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 811 | <code>            &lt;form id=&quot;addBookForm&quot; enctype=&quot;multipart/form-data&quot; class=&quot;p-5 md:p-7&quot;&gt;</code> | 表单结构开始，用于收集并提交用户输入。 |
| 812 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 813 | <code>                &lt;!-- 两栏主布局：左侧封面，右侧基本信息 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 814 | <code>                &lt;div class=&quot;flex flex-col md:flex-row gap-5 md:gap-6 mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 815 | <code>                    &lt;!-- 封面上传区 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 816 | <code>                    &lt;div class=&quot;md:w-44 flex-shrink-0 space-y-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 817 | <code>                        &lt;label for=&quot;addBookImage&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;封面图片&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 818 | <code>                        &lt;input type=&quot;file&quot; name=&quot;image&quot; accept=&quot;image/png,image/jpeg,image/gif&quot; id=&quot;addBookImage&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 819 | <code>                               class=&quot;hidden&quot; onchange=&quot;previewImage(this, &#x27;addImagePreview&#x27;)&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 820 | <code>                        &lt;label for=&quot;addBookImage&quot; id=&quot;addImagePreview&quot;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 821 | <code>                                class=&quot;w-full md:w-44 h-56 md:h-64 bg-gradient-to-br from-pink-50 to-purple-50 border-2 border-dashed border-pink-200 hover:border-brand-primary rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all group overflow-hidden&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 822 | <code>                                aria-label=&quot;上传图书封面&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 823 | <code>                            &lt;span class=&quot;text-center px-3 preview-placeholder&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 824 | <code>                                &lt;svg class=&quot;w-12 h-12 text-pink-200 group-hover:text-brand-primary transition-colors mx-auto mb-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 825 | <code>                                &lt;span class=&quot;block text-xs font-semibold text-brand-deep/30 group-hover:text-brand-primary transition-colors leading-relaxed&quot;&gt;点击上传封面&lt;br&gt;&lt;span class=&quot;text-[10px] opacity-70&quot;&gt;PNG / JPG / GIF&lt;/span&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 826 | <code>                            &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 827 | <code>                        &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 828 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 829 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 830 | <code>                    &lt;!-- 右侧基本信息 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 831 | <code>                    &lt;div class=&quot;flex-1 space-y-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 832 | <code>                        &lt;!-- 书名 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 833 | <code>                        &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 834 | <code>                            &lt;label for=&quot;addTitle&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 835 | <code>                                书名 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 836 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 837 | <code>                            &lt;input type=&quot;text&quot; name=&quot;title&quot; id=&quot;addTitle&quot; required placeholder=&quot;请输入书名&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 838 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 839 | <code>                        &lt;!-- 作者 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 840 | <code>                        &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 841 | <code>                            &lt;label for=&quot;addAuthor&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 842 | <code>                                作者 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 843 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 844 | <code>                            &lt;input type=&quot;text&quot; name=&quot;author&quot; id=&quot;addAuthor&quot; required placeholder=&quot;请输入作者姓名&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 845 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 846 | <code>                        &lt;!-- ISBN + 出版社 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 847 | <code>                        &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 848 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 849 | <code>                                &lt;label for=&quot;addIsbn&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;ISBN&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 850 | <code>                                &lt;input type=&quot;text&quot; name=&quot;isbn&quot; id=&quot;addIsbn&quot; placeholder=&quot;978-...&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 851 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 852 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 853 | <code>                                &lt;label for=&quot;addPublisher&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;出版社&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 854 | <code>                                &lt;input type=&quot;text&quot; name=&quot;publisher&quot; id=&quot;addPublisher&quot; placeholder=&quot;出版社名称&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 855 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 856 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 857 | <code>                        &lt;!-- 分类 + 位置 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 858 | <code>                        &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 859 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 860 | <code>                                &lt;label for=&quot;addCategory&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;分类&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 861 | <code>                                &lt;input type=&quot;text&quot; name=&quot;category&quot; id=&quot;addCategory&quot; placeholder=&quot;如：文学、科技&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 862 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 863 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 864 | <code>                                &lt;label for=&quot;addLocation&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;书籍位置&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 865 | <code>                                &lt;input type=&quot;text&quot; name=&quot;location&quot; id=&quot;addLocation&quot; maxlength=&quot;100&quot; placeholder=&quot;二次元区-012&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 866 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 867 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 868 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 869 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 870 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 871 | <code>                &lt;!-- 库存管理区 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 872 | <code>                &lt;div class=&quot;bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 md:p-5 mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 873 | <code>                    &lt;div class=&quot;flex items-center gap-2 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 874 | <code>                        &lt;div class=&quot;w-6 h-6 rounded-lg bg-brand-primary/10 flex items-center justify-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 875 | <code>                            &lt;svg class=&quot;w-3.5 h-3.5 text-brand-primary&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M7 20l4-16m2 16l4-16M6 9h14M4 15h14&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 876 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 877 | <code>                        &lt;span class=&quot;text-xs font-bold text-brand-deep/60 uppercase tracking-widest&quot;&gt;库存管理&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 878 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 879 | <code>                    &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-2 gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 880 | <code>                        &lt;!-- 当前库存 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 881 | <code>                        &lt;div class=&quot;space-y-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 882 | <code>                            &lt;label for=&quot;addStock&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 883 | <code>                                当前库存 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 884 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 885 | <code>                            &lt;div class=&quot;flex items-center bg-white border-2 border-transparent focus-within:border-brand-primary rounded-xl overflow-hidden transition-all&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 886 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;addStock&#x27;, -1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-brand-primary hover:bg-pink-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 887 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M20 12H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 888 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 889 | <code>                                &lt;input type=&quot;number&quot; name=&quot;stock&quot; id=&quot;addStock&quot; value=&quot;1&quot; min=&quot;0&quot; required class=&quot;flex-1 text-center py-2.5 outline-none font-bold text-brand-deep text-base bg-transparent&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 890 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;addStock&#x27;, 1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-brand-primary hover:bg-pink-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 891 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M12 4v16m8-8H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 892 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 893 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 894 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 895 | <code>                        &lt;!-- 总容量 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 896 | <code>                        &lt;div class=&quot;space-y-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 897 | <code>                            &lt;label for=&quot;addTotal&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 898 | <code>                                总容量 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 899 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 900 | <code>                            &lt;div class=&quot;flex items-center bg-white border-2 border-transparent focus-within:border-brand-primary rounded-xl overflow-hidden transition-all&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 901 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;addTotal&#x27;, -1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-brand-primary hover:bg-pink-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 902 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M20 12H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 903 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 904 | <code>                                &lt;input type=&quot;number&quot; name=&quot;total&quot; id=&quot;addTotal&quot; value=&quot;1&quot; min=&quot;0&quot; required class=&quot;flex-1 text-center py-2.5 outline-none font-bold text-brand-deep text-base bg-transparent&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 905 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;addTotal&#x27;, 1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-brand-primary hover:bg-pink-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 906 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M12 4v16m8-8H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 907 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 908 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 909 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 910 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 911 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 912 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 913 | <code>                &lt;!-- 提交按钮 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 914 | <code>                &lt;button type=&quot;submit&quot; class=&quot;w-full btn-primary py-4 text-white font-bold rounded-2xl shadow-pink-lg cursor-pointer flex items-center justify-center gap-2 text-base&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 915 | <code>                    &lt;svg class=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 916 | <code>                    确认入库馆藏</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 917 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 918 | <code>            &lt;/form&gt;</code> | 表单结构结束。 |
| 919 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 920 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 921 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 922 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 923 | <code>&lt;!-- 编辑图书模态框 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 924 | <code>&lt;div id=&quot;editBookModal&quot; class=&quot;hidden fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-4 backdrop-blur-sm&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;editBookModalTitle&quot; style=&quot;background: linear-gradient(135deg, rgba(139,92,246,0.22), rgba(236,72,153,0.15))&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 925 | <code>    &lt;div class=&quot;bg-white w-full max-w-3xl rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden scale-in-center max-h-[92vh] flex flex-col&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 926 | <code>        &lt;!-- 模态框顶部渐变标题栏 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 927 | <code>        &lt;div class=&quot;relative flex-shrink-0&quot; style=&quot;background: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f9a8d4 100%)&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 928 | <code>            &lt;div class=&quot;px-6 py-5 flex justify-between items-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 929 | <code>                &lt;div class=&quot;flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 930 | <code>                    &lt;div class=&quot;w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 931 | <code>                        &lt;svg class=&quot;w-5 h-5 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 932 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 933 | <code>                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 934 | <code>                        &lt;h2 id=&quot;editBookModalTitle&quot; class=&quot;text-lg font-bold text-white leading-tight&quot;&gt;编辑馆藏信息&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 935 | <code>                        &lt;p class=&quot;text-xs text-white/70&quot;&gt;修改图书信息或更换封面&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 936 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 937 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 938 | <code>                &lt;button type=&quot;button&quot; onclick=&quot;closeEditBookModal()&quot; class=&quot;w-11 h-11 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-xl text-white transition-colors cursor-pointer&quot; aria-label=&quot;关闭编辑馆藏弹窗&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 939 | <code>                    &lt;svg class=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M6 18L18 6M6 6l12 12&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 940 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 941 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 942 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 943 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 944 | <code>        &lt;!-- 表单内容区（可滚动） --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 945 | <code>        &lt;div class=&quot;overflow-y-auto flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 946 | <code>            &lt;form id=&quot;editBookForm&quot; enctype=&quot;multipart/form-data&quot; class=&quot;p-5 md:p-7&quot;&gt;</code> | 表单结构开始，用于收集并提交用户输入。 |
| 947 | <code>                &lt;input type=&quot;hidden&quot; name=&quot;book_id&quot; id=&quot;editBookId&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 948 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 949 | <code>                &lt;!-- 两栏主布局：左侧封面，右侧基本信息 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 950 | <code>                &lt;div class=&quot;flex flex-col md:flex-row gap-5 md:gap-6 mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 951 | <code>                    &lt;!-- 封面上传区 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 952 | <code>                    &lt;div class=&quot;md:w-44 flex-shrink-0 space-y-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 953 | <code>                        &lt;label for=&quot;editBookImage&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;封面图片&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 954 | <code>                        &lt;input type=&quot;file&quot; name=&quot;image&quot; accept=&quot;image/png,image/jpeg,image/gif&quot; id=&quot;editBookImage&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 955 | <code>                               class=&quot;hidden&quot; onchange=&quot;previewImage(this, &#x27;editImagePreview&#x27;)&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 956 | <code>                        &lt;label for=&quot;editBookImage&quot; id=&quot;editImagePreview&quot;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 957 | <code>                                class=&quot;w-full md:w-44 h-56 md:h-64 bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-dashed border-purple-200 hover:border-brand-primary rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all group overflow-hidden&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 958 | <code>                                aria-label=&quot;更换图书封面&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 959 | <code>                            &lt;span class=&quot;text-center px-3 preview-placeholder&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 960 | <code>                                &lt;svg class=&quot;w-12 h-12 text-purple-200 group-hover:text-brand-primary transition-colors mx-auto mb-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 961 | <code>                                &lt;span class=&quot;block text-xs font-semibold text-brand-deep/30 group-hover:text-brand-primary transition-colors leading-relaxed&quot;&gt;点击更换封面&lt;br&gt;&lt;span class=&quot;text-[10px] opacity-70&quot;&gt;PNG / JPG / GIF&lt;/span&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 962 | <code>                            &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 963 | <code>                        &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 964 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 965 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 966 | <code>                    &lt;!-- 右侧基本信息 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 967 | <code>                    &lt;div class=&quot;flex-1 space-y-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 968 | <code>                        &lt;!-- 书名 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 969 | <code>                        &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 970 | <code>                            &lt;label for=&quot;editTitle&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 971 | <code>                                书名 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 972 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 973 | <code>                            &lt;input type=&quot;text&quot; name=&quot;title&quot; id=&quot;editTitle&quot; required placeholder=&quot;请输入书名&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 974 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 975 | <code>                        &lt;!-- 作者 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 976 | <code>                        &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 977 | <code>                            &lt;label for=&quot;editAuthor&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 978 | <code>                                作者 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 979 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 980 | <code>                            &lt;input type=&quot;text&quot; name=&quot;author&quot; id=&quot;editAuthor&quot; required placeholder=&quot;请输入作者姓名&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 981 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 982 | <code>                        &lt;!-- ISBN + 出版社 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 983 | <code>                        &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 984 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 985 | <code>                                &lt;label for=&quot;editIsbn&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;ISBN&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 986 | <code>                                &lt;input type=&quot;text&quot; name=&quot;isbn&quot; id=&quot;editIsbn&quot; placeholder=&quot;978-...&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 987 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 988 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 989 | <code>                                &lt;label for=&quot;editPublisher&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;出版社&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 990 | <code>                                &lt;input type=&quot;text&quot; name=&quot;publisher&quot; id=&quot;editPublisher&quot; placeholder=&quot;出版社名称&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 991 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 992 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 993 | <code>                        &lt;!-- 分类 + 位置 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 994 | <code>                        &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 995 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 996 | <code>                                &lt;label for=&quot;editCategory&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;分类&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 997 | <code>                                &lt;input type=&quot;text&quot; name=&quot;category&quot; id=&quot;editCategory&quot; placeholder=&quot;如：文学、科技&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 998 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 999 | <code>                            &lt;div class=&quot;space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1000 | <code>                                &lt;label for=&quot;editLocation&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1&quot;&gt;书籍位置&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 1001 | <code>                                &lt;input type=&quot;text&quot; name=&quot;location&quot; id=&quot;editLocation&quot; maxlength=&quot;100&quot; placeholder=&quot;二次元区-012&quot; class=&quot;w-full px-4 py-3 bg-slate-50 border-2 border-transparent focus:border-brand-primary focus:bg-white rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-300&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 1002 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1003 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1004 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1005 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1006 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 1007 | <code>                &lt;!-- 库存管理区 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 1008 | <code>                &lt;div class=&quot;bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 md:p-5 mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1009 | <code>                    &lt;div class=&quot;flex items-center gap-2 mb-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1010 | <code>                        &lt;div class=&quot;w-6 h-6 rounded-lg bg-purple-400/10 flex items-center justify-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1011 | <code>                            &lt;svg class=&quot;w-3.5 h-3.5 text-purple-500&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M7 20l4-16m2 16l4-16M6 9h14M4 15h14&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 1012 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1013 | <code>                        &lt;span class=&quot;text-xs font-bold text-brand-deep/60 uppercase tracking-widest&quot;&gt;库存管理&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 1014 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1015 | <code>                    &lt;div class=&quot;grid grid-cols-1 sm:grid-cols-2 gap-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1016 | <code>                        &lt;!-- 当前库存 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 1017 | <code>                        &lt;div class=&quot;space-y-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1018 | <code>                            &lt;label for=&quot;editStock&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 1019 | <code>                                当前库存 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 1020 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1021 | <code>                            &lt;div class=&quot;flex items-center bg-white border-2 border-transparent focus-within:border-purple-400 rounded-xl overflow-hidden transition-all&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1022 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;editStock&#x27;, -1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-purple-500 hover:bg-purple-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 1023 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M20 12H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 1024 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1025 | <code>                                &lt;input type=&quot;number&quot; name=&quot;stock&quot; id=&quot;editStock&quot; min=&quot;0&quot; required class=&quot;flex-1 text-center py-2.5 outline-none font-bold text-brand-deep text-base bg-transparent&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 1026 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;editStock&#x27;, 1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-purple-500 hover:bg-purple-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 1027 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M12 4v16m8-8H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 1028 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1029 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1030 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1031 | <code>                        &lt;!-- 总容量 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 1032 | <code>                        &lt;div class=&quot;space-y-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1033 | <code>                            &lt;label for=&quot;editTotal&quot; class=&quot;text-[10px] font-bold text-brand-deep/40 uppercase tracking-widest pl-1 flex items-center gap-1&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 1034 | <code>                                总容量 &lt;span class=&quot;text-rose-400 text-xs normal-case tracking-normal font-bold&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 1035 | <code>                            &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1036 | <code>                            &lt;div class=&quot;flex items-center bg-white border-2 border-transparent focus-within:border-purple-400 rounded-xl overflow-hidden transition-all&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1037 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;editTotal&#x27;, -1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-purple-500 hover:bg-purple-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 1038 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M20 12H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 1039 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1040 | <code>                                &lt;input type=&quot;number&quot; name=&quot;total&quot; id=&quot;editTotal&quot; min=&quot;0&quot; required class=&quot;flex-1 text-center py-2.5 outline-none font-bold text-brand-deep text-base bg-transparent&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 1041 | <code>                                &lt;button type=&quot;button&quot; onclick=&quot;adjustNumber(&#x27;editTotal&#x27;, 1)&quot; class=&quot;w-11 h-11 flex-shrink-0 flex items-center justify-center text-brand-deep/40 hover:text-purple-500 hover:bg-purple-50 transition-colors cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 1042 | <code>                                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M12 4v16m8-8H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 1043 | <code>                                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1044 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1045 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1046 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1047 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1048 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 1049 | <code>                &lt;!-- 操作按钮组 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 1050 | <code>                &lt;div class=&quot;flex gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 1051 | <code>                    &lt;button type=&quot;submit&quot; class=&quot;flex-1 btn-primary py-4 text-white font-bold rounded-2xl shadow-pink-lg cursor-pointer flex items-center justify-center gap-2 text-base&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 1052 | <code>                        &lt;svg class=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 1053 | <code>                        保存修改</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 1054 | <code>                    &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1055 | <code>                    &lt;button type=&quot;button&quot; onclick=&quot;deleteCurrentBook()&quot; class=&quot;px-6 py-4 text-rose-500 font-bold bg-rose-50 hover:bg-rose-100 rounded-2xl transition-colors cursor-pointer flex items-center gap-2 text-sm&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 1056 | <code>                        &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 1057 | <code>                        删除</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 1058 | <code>                    &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1059 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1060 | <code>            &lt;/form&gt;</code> | 表单结构结束。 |
| 1061 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1062 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1063 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 1064 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 1065 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 1066 | <code>{% block scripts %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 1067 | <code>&lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 1068 | <code>window.adminConfig = Object.assign({}, window.adminConfig || {}, {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 1069 | <code>    csrfToken: {{ admin_action_csrf_token|tojson }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1070 | <code>});</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 1071 | <code>&lt;/script&gt;</code> | 结束当前脚本块。 |
| 1072 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/admin-utils.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1073 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/admin-tabs.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1074 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/admin-books.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1075 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/admin-users.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1076 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/admin-online.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1077 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/admin-logs.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1078 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/admin-reservations.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 1079 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 1080 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
