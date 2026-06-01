# static/html/borrow_records.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{# 我的借阅记录页 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 2 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 3 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 4 | <code>{% block title %}借阅足迹 - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 5 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 6 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/borrow-records.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 7 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/borrow-sidebar.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 8 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 9 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 10 | <code>{% block header %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 11 | <code>{% block main_class %}flex-1 py-6 md:py-12 px-4 animate-in fade-in duration-700{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 12 | <code>{% block content_wrapper %}max-w-7xl mx-auto{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 13 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 14 | <code>{% set status_meta = {</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 15 | <code>    &#x27;pending&#x27;:   {&#x27;label&#x27;: &#x27;未领取&#x27;, &#x27;tone&#x27;: &#x27;pending&#x27;},</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 16 | <code>    &#x27;picked_up&#x27;: {&#x27;label&#x27;: &#x27;已领取&#x27;, &#x27;tone&#x27;: &#x27;picked&#x27;},</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 17 | <code>    &#x27;returned&#x27;:  {&#x27;label&#x27;: &#x27;已归还&#x27;, &#x27;tone&#x27;: &#x27;returned&#x27;},</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 18 | <code>    &#x27;rejected&#x27;:  {&#x27;label&#x27;: &#x27;已拒绝&#x27;, &#x27;tone&#x27;: &#x27;rejected&#x27;},</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 19 | <code>    &#x27;expired&#x27;:   {&#x27;label&#x27;: &#x27;已逾期&#x27;, &#x27;tone&#x27;: &#x27;expired&#x27;},</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 20 | <code>} %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 21 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 22 | <code>{% set tabs = [</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 23 | <code>    (&#x27;all&#x27;,       &#x27;全部&#x27;,   &#x27;all&#x27;,      stats.total),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 24 | <code>    (&#x27;pending&#x27;,   &#x27;未领取&#x27;, &#x27;pending&#x27;,  stats.pending),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 25 | <code>    (&#x27;picked_up&#x27;, &#x27;已领取&#x27;, &#x27;picked&#x27;,   stats.picked_up),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 26 | <code>    (&#x27;returned&#x27;,  &#x27;已归还&#x27;, &#x27;returned&#x27;, stats.returned),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 27 | <code>    (&#x27;rejected&#x27;,  &#x27;已拒绝&#x27;, &#x27;rejected&#x27;, stats.rejected),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 28 | <code>    (&#x27;expired&#x27;,   &#x27;已逾期&#x27;, &#x27;expired&#x27;,  stats.expired),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 29 | <code>] %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 30 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 31 | <code>{% set active_count = insights.active_count %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 32 | <code>{% set completed_count = stats.returned %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 33 | <code>{% set completion_rate = insights.completion_rate %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 34 | <code>{% set now = insights.now %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 35 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 36 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 37 | <code>&lt;div class=&quot;borrow-page px-4 sm:px-6 lg:px-8&quot; data-borrow-action-csrf=&quot;{{ borrow_action_csrf_token }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 38 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 39 | <code>    {# ========== Elysia 风格英雄区 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 40 | <code>    &lt;section class=&quot;borrow-hero&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 41 | <code>        &lt;div class=&quot;borrow-hero-gradient&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 42 | <code>        &lt;div class=&quot;borrow-hero-blob borrow-hero-blob-a&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 43 | <code>        &lt;div class=&quot;borrow-hero-blob borrow-hero-blob-b&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 44 | <code>        &lt;div class=&quot;borrow-hero-blob borrow-hero-blob-c&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 45 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 46 | <code>        &lt;div class=&quot;borrow-hero-petals&quot; aria-hidden=&quot;true&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 47 | <code>            &lt;span class=&quot;petal-dot&quot; style=&quot;top:18%;left:8%;animation-delay:0s&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 48 | <code>            &lt;span class=&quot;petal-dot&quot; style=&quot;top:32%;right:14%;animation-delay:1.1s&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 49 | <code>            &lt;span class=&quot;petal-dot&quot; style=&quot;top:68%;left:22%;animation-delay:0.5s&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 50 | <code>            &lt;span class=&quot;petal-dot&quot; style=&quot;bottom:24%;right:10%;animation-delay:1.6s&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 51 | <code>            &lt;svg class=&quot;petal-svg&quot; style=&quot;top:14%;right:7%&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 52 | <code>            &lt;svg class=&quot;petal-svg petal-svg-sm&quot; style=&quot;bottom:18%;left:14%&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 53 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 54 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 55 | <code>        &lt;div class=&quot;borrow-hero-inner&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 56 | <code>            &lt;div class=&quot;borrow-hero-header&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 57 | <code>                &lt;div class=&quot;borrow-hero-eyebrow&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 58 | <code>                    &lt;span class=&quot;dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 59 | <code>                    &lt;span class=&quot;text&quot;&gt;我的阅读之旅&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 60 | <code>                    &lt;span class=&quot;dot dot-purple&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 61 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 62 | <code>                &lt;h1 class=&quot;borrow-hero-title&quot;&gt;</code> | HTML `h1` 元素，构成当前页面的结构、内容或交互区域。 |
| 63 | <code>                    我的&lt;span class=&quot;accent&quot;&gt;借阅足迹&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 64 | <code>                &lt;/h1&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 65 | <code>                &lt;p id=&quot;records-total-text&quot; class=&quot;borrow-hero-sub&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 66 | <code>                    至今共 &lt;strong&gt;{{ stats.total }}&lt;/strong&gt; 段书页之约 ♡</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 67 | <code>                &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 68 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 69 | <code>            &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;borrow-hero-cta&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 70 | <code>                &lt;svg class=&quot;cta-icon&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 4v16m8-8H4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 71 | <code>                &lt;span&gt;继续预约&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 72 | <code>                &lt;svg class=&quot;cta-arrow&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M14 5l7 7m0 0l-7 7m7-7H3&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 73 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 74 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 75 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 76 | <code>        {# 数据卡片条：4 项 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 77 | <code>        &lt;div class=&quot;borrow-stat-grid&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 78 | <code>            &lt;div class=&quot;borrow-stat-card tone-pink&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 79 | <code>                &lt;div class=&quot;stat-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 80 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 81 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 82 | <code>                &lt;div class=&quot;stat-meta&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 83 | <code>                    &lt;p class=&quot;stat-label&quot;&gt;总借阅&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 84 | <code>                    &lt;p class=&quot;stat-value&quot; data-stat=&quot;total&quot;&gt;{{ stats.total }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 85 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 86 | <code>                &lt;span class=&quot;stat-deco&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 87 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 88 | <code>            &lt;div class=&quot;borrow-stat-card tone-amber&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 89 | <code>                &lt;div class=&quot;stat-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 90 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 91 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 92 | <code>                &lt;div class=&quot;stat-meta&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 93 | <code>                    &lt;p class=&quot;stat-label&quot;&gt;进行中&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 94 | <code>                    &lt;p class=&quot;stat-value&quot; data-stat=&quot;active&quot;&gt;{{ active_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 95 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 96 | <code>                &lt;span class=&quot;stat-deco&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 97 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 98 | <code>            &lt;div class=&quot;borrow-stat-card tone-emerald&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 99 | <code>                &lt;div class=&quot;stat-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 100 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 101 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 102 | <code>                &lt;div class=&quot;stat-meta&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 103 | <code>                    &lt;p class=&quot;stat-label&quot;&gt;已完成&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 104 | <code>                    &lt;p class=&quot;stat-value&quot; data-stat=&quot;completed&quot;&gt;{{ completed_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 105 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 106 | <code>                &lt;span class=&quot;stat-deco&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 107 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 108 | <code>            &lt;div class=&quot;borrow-stat-card tone-purple&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 109 | <code>                &lt;div class=&quot;stat-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 110 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 111 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 112 | <code>                &lt;div class=&quot;stat-meta&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 113 | <code>                    &lt;p class=&quot;stat-label&quot;&gt;完成率&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 114 | <code>                    &lt;p class=&quot;stat-value&quot; data-stat=&quot;rate&quot;&gt;{{ completion_rate }}&lt;span class=&quot;stat-unit&quot;&gt;%&lt;/span&gt;&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 115 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 116 | <code>                &lt;span class=&quot;stat-deco&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 117 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 118 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 119 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 120 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 121 | <code>    {% if not records %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 122 | <code>    {# ========== 全局空状态 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 123 | <code>    &lt;section class=&quot;borrow-empty borrow-empty-center&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 124 | <code>        &lt;div class=&quot;borrow-empty-blob&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 125 | <code>        &lt;div class=&quot;borrow-empty-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 126 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 127 | <code>                &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.5&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 128 | <code>            &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 129 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 130 | <code>        &lt;p class=&quot;borrow-empty-eyebrow&quot;&gt;空白篇章待你书写&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 131 | <code>        &lt;h3 class=&quot;borrow-empty-title&quot;&gt;还未翻开第一本书&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 132 | <code>        &lt;p class=&quot;borrow-empty-sub&quot;&gt;从馆藏中挑一本喜欢的书，开启你的阅读旅程吧 ♡&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 133 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;borrow-empty-cta&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 134 | <code>            &lt;svg fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 135 | <code>            &lt;span&gt;浏览馆藏&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 136 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M9 5l7 7-7 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 137 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 138 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 139 | <code>    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 140 | <code>    {# ========== 主体两栏布局 ========== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 141 | <code>    &lt;div class=&quot;borrow-layout&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 142 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 143 | <code>        {# ===== 左栏：筛选 + 记录列表 ===== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 144 | <code>        &lt;div class=&quot;borrow-main&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 145 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 146 | <code>            {# 筛选 + 搜索头 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 147 | <code>            &lt;section id=&quot;records-filters&quot; class=&quot;records-tabs-bar mb-4&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 148 | <code>                &lt;div class=&quot;records-tabs-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 149 | <code>                    &lt;div class=&quot;records-tabs-label&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 150 | <code>                        &lt;svg class=&quot;w-3 h-3&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 151 | <code>                        &lt;span&gt;状态筛选&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 152 | <code>                        &lt;span class=&quot;dash&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 153 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 154 | <code>                    &lt;div class=&quot;records-search&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 155 | <code>                        &lt;svg class=&quot;records-search-icon&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 156 | <code>                        &lt;input type=&quot;text&quot; id=&quot;records-search-input&quot; placeholder=&quot;按书名搜索…&quot; autocomplete=&quot;off&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 157 | <code>                        &lt;button type=&quot;button&quot; id=&quot;records-search-clear&quot; class=&quot;records-search-clear&quot; aria-label=&quot;清除搜索&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 158 | <code>                            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M6 18L18 6M6 6l12 12&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 159 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 160 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 161 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 162 | <code>                &lt;div class=&quot;records-tabs-scroll&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 163 | <code>                    {% for value, label, tone, count in tabs %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 164 | <code>                    &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 165 | <code>                            data-filter=&quot;{{ value }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 166 | <code>                            class=&quot;records-tab tone-{{ tone }}{% if loop.first %} is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 167 | <code>                        {{ label }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 168 | <code>                        &lt;span class=&quot;records-tab-count&quot;&gt;{{ count }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 169 | <code>                    &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 170 | <code>                    {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 171 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 172 | <code>            &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 173 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 174 | <code>            {# 记录列表 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 175 | <code>            {% if records %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 176 | <code>            &lt;section id=&quot;records-list&quot; class=&quot;space-y-3 sm:space-y-3.5&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 177 | <code>                {% for record in records %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 178 | <code>                {% set meta = status_meta.get(record.status, {&#x27;label&#x27;: record.status, &#x27;tone&#x27;: &#x27;pending&#x27;}) %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 179 | <code>                {% set borrow_days = ((now - record.borrow_date).days) if record.borrow_date else None %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 180 | <code>                {% set days_left = ((record.return_date.date() - now.date()).days) if record.return_date and record.status == &#x27;picked_up&#x27; else None %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 181 | <code>                &lt;article class=&quot;record-card&quot; data-record-id=&quot;{{ record.id }}&quot; data-status=&quot;{{ record.status }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 182 | <code>                         data-title=&quot;{{ record.book.title|lower }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 183 | <code>                         style=&quot;animation-delay: {{ loop.index0 * 40 }}ms&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 184 | <code>                    {# 封面 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 185 | <code>                    &lt;div class=&quot;record-cover&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 186 | <code>                        {% if record.book.image %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 187 | <code>                        &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + record.book.image) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 188 | <code>                             alt=&quot;{{ record.book.title }}&quot; loading=&quot;lazy&quot; decoding=&quot;async&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 189 | <code>                        {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 190 | <code>                        &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 191 | <code>                             alt=&quot;{{ record.book.title }}&quot; loading=&quot;lazy&quot; decoding=&quot;async&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 192 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 193 | <code>                        &lt;span class=&quot;record-cover-shine&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 194 | <code>                        {% if borrow_days is not none and record.status in (&#x27;pending&#x27;, &#x27;picked_up&#x27;) %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 195 | <code>                        &lt;span class=&quot;record-cover-day&quot;&gt;第 {{ borrow_days + 1 }} 天&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 196 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 197 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 198 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 199 | <code>                    {# 内容区 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 200 | <code>                    &lt;div class=&quot;record-body&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 201 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 202 | <code>                        &lt;div class=&quot;flex items-start justify-between gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 203 | <code>                            &lt;div class=&quot;min-w-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 204 | <code>                                &lt;a href=&quot;{{ url_for(&#x27;user.book_detail&#x27;, book_id=record.book.id) }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 205 | <code>                                   class=&quot;block text-sm sm:text-base font-heading font-semibold text-brand-deep hover:text-brand-primary transition-colors leading-snug line-clamp-2&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 206 | <code>                                    {{ record.book.title }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 207 | <code>                                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 208 | <code>                                &lt;p class=&quot;text-xs text-brand-deep/45 mt-0.5 truncate&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 209 | <code>                                    {{ record.book.author }}{% if record.book.category %} · &lt;span class=&quot;record-cat&quot;&gt;{{ record.book.category }}&lt;/span&gt;{% endif %}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 210 | <code>                                &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 211 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 212 | <code>                            &lt;span class=&quot;status-pill tone-{{ meta.tone }} flex-shrink-0 mt-0.5&quot;&gt;{{ meta.label }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 213 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 214 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 215 | <code>                        {# 进行中：归还倒计时进度条 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 216 | <code>                        {% if record.status == &#x27;picked_up&#x27; and days_left is not none %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 217 | <code>                        {% set raw_total_loan = ((record.return_date - record.pickup_date).days) if record.pickup_date and record.return_date else 30 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 218 | <code>                        {% set total_loan = raw_total_loan if raw_total_loan &gt; 0 else 30 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 219 | <code>                        {% set raw_used = total_loan - days_left %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 220 | <code>                        {% set used = raw_used if raw_used &gt; 0 else 0 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 221 | <code>                        {% set raw_pct = (used / total_loan * 100) | round | int %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 222 | <code>                        {% set progress_pct = raw_pct if raw_pct &lt; 100 else 100 %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 223 | <code>                        {% set tone_class = &#x27;is-overdue&#x27; if days_left &lt; 0 else (&#x27;is-soon&#x27; if days_left &lt;= 3 else &#x27;is-ok&#x27;) %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 224 | <code>                        &lt;div class=&quot;record-progress {{ tone_class }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 225 | <code>                            &lt;div class=&quot;record-progress-track&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 226 | <code>                                &lt;span class=&quot;record-progress-fill&quot; style=&quot;width: {{ progress_pct }}%&quot;&gt;&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 227 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 228 | <code>                            &lt;div class=&quot;record-progress-meta&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 229 | <code>                                {% if days_left &lt; 0 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 230 | <code>                                &lt;span class=&quot;record-progress-label&quot;&gt;已逾期 {{ -days_left }} 天&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 231 | <code>                                {% elif days_left == 0 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 232 | <code>                                &lt;span class=&quot;record-progress-label&quot;&gt;今日到期 ⚠&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 233 | <code>                                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 234 | <code>                                &lt;span class=&quot;record-progress-label&quot;&gt;还剩 {{ days_left }} 天归还&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 235 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 236 | <code>                                &lt;span class=&quot;record-progress-pct&quot;&gt;{{ progress_pct }}%&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 237 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 238 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 239 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 240 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 241 | <code>                        {# 时间线 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 242 | <code>                        &lt;div class=&quot;record-timeline&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 243 | <code>                            &lt;div class=&quot;timeline-step is-done&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 244 | <code>                                &lt;span class=&quot;timeline-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 245 | <code>                                &lt;span&gt;预约于 {{ record.borrow_date.strftime(&#x27;%Y-%m-%d %H:%M&#x27;) }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 246 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 247 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 248 | <code>                            {% if record.return_date %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 249 | <code>                            &lt;div class=&quot;timeline-step{% if record.status == &#x27;returned&#x27; %} is-done tone-green{% endif %}&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 250 | <code>                                &lt;span class=&quot;timeline-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 251 | <code>                                &lt;span&gt;预定归还 {{ record.return_date.strftime(&#x27;%Y-%m-%d&#x27;) }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 252 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 253 | <code>                            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 254 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 255 | <code>                            {% if record.status == &#x27;picked_up&#x27; and record.pickup_date %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 256 | <code>                            &lt;div class=&quot;timeline-step is-done tone-blue&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 257 | <code>                                &lt;span class=&quot;timeline-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 258 | <code>                                &lt;span&gt;已领取 · {{ record.pickup_date.strftime(&#x27;%Y-%m-%d %H:%M&#x27;) }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 259 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 260 | <code>                            {% elif record.status == &#x27;returned&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 261 | <code>                            &lt;div class=&quot;timeline-step is-done tone-green&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 262 | <code>                                &lt;span class=&quot;timeline-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 263 | <code>                                &lt;span&gt;已归还{% if record.pickup_date %} · 领取于 {{ record.pickup_date.strftime(&#x27;%m-%d %H:%M&#x27;) }}{% endif %}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 264 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 265 | <code>                            {% elif record.status == &#x27;rejected&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 266 | <code>                            &lt;div class=&quot;timeline-step is-done tone-red&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 267 | <code>                                &lt;span class=&quot;timeline-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 268 | <code>                                &lt;span&gt;已拒绝{% if record.reject_date %} · {{ record.reject_date.strftime(&#x27;%Y-%m-%d %H:%M&#x27;) }}{% endif %}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 269 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 270 | <code>                            {% elif record.status == &#x27;expired&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 271 | <code>                            &lt;div class=&quot;timeline-step is-done tone-orange&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 272 | <code>                                &lt;span class=&quot;timeline-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 273 | <code>                                &lt;span&gt;已逾期{% if record.reject_date %} · {{ record.reject_date.strftime(&#x27;%Y-%m-%d %H:%M&#x27;) }}{% endif %}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 274 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 275 | <code>                            {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 276 | <code>                            &lt;div class=&quot;timeline-step&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 277 | <code>                                &lt;span class=&quot;timeline-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 278 | <code>                                &lt;span&gt;等待管理员审核…&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 279 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 280 | <code>                            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 281 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 282 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 283 | <code>                        {% if record.status == &#x27;pending&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 284 | <code>                        &lt;div class=&quot;record-actions&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 285 | <code>                            &lt;button type=&quot;button&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 286 | <code>                                    class=&quot;record-action-btn tone-cancel&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 287 | <code>                                    data-action=&quot;cancel&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 288 | <code>                                    data-record-id=&quot;{{ record.id }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 289 | <code>                                    data-book-title=&quot;{{ record.book.title }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 290 | <code>                                &lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M6 18L18 6M6 6l12 12&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 291 | <code>                                取消预约</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 292 | <code>                            &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 293 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 294 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 295 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 296 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 297 | <code>                &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 298 | <code>                {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 299 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 300 | <code>                {# 空筛选占位 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 301 | <code>                &lt;div id=&quot;records-empty-filter&quot; class=&quot;hidden records-empty-filter&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 302 | <code>                    &lt;div class=&quot;records-empty-filter-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 303 | <code>                        &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.6&quot; d=&quot;M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 304 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 305 | <code>                    &lt;p class=&quot;records-empty-filter-title&quot;&gt;没有匹配的记录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 306 | <code>                    &lt;p class=&quot;records-empty-filter-desc&quot;&gt;换个筛选条件试试，或继续从馆藏中挑选 ♡&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 307 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 308 | <code>            &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 309 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 310 | <code>            &lt;div id=&quot;record-confirm&quot; class=&quot;record-confirm-overlay&quot; aria-hidden=&quot;true&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 311 | <code>                &lt;div class=&quot;record-confirm-card&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;record-confirm-title&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 312 | <code>                    &lt;div class=&quot;record-confirm-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 313 | <code>                        &lt;svg class=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 314 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 315 | <code>                    &lt;h3 id=&quot;record-confirm-title&quot; class=&quot;record-confirm-title&quot;&gt;确认操作&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 316 | <code>                    &lt;p id=&quot;record-confirm-msg&quot; class=&quot;record-confirm-msg&quot;&gt;确定要执行此操作吗？&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 317 | <code>                    &lt;div class=&quot;record-confirm-actions&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 318 | <code>                        &lt;button type=&quot;button&quot; class=&quot;record-confirm-btn is-cancel&quot; data-confirm-cancel&gt;取消&lt;/button&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 319 | <code>                        &lt;button type=&quot;button&quot; class=&quot;record-confirm-btn is-confirm&quot; data-confirm-ok&gt;确定&lt;/button&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 320 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 321 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 322 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 323 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 324 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 325 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 326 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 327 | <code>        {# ===== 右栏：洞察侧栏 ===== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 328 | <code>        &lt;aside class=&quot;borrow-aside&quot;&gt;</code> | HTML `aside` 元素，构成当前页面的结构、内容或交互区域。 |
| 329 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 330 | <code>            {# 阅读概览 - 完成率环 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 331 | <code>            &lt;section class=&quot;aside-card&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 332 | <code>                &lt;div class=&quot;aside-card-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 333 | <code>                    &lt;div class=&quot;aside-card-title&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 334 | <code>                        &lt;span class=&quot;aside-icon tone-pink&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 335 | <code>                            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 336 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 337 | <code>                        &lt;h3&gt;阅读概览&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 338 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 339 | <code>                    &lt;span class=&quot;aside-card-eye&quot;&gt;概览&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 340 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 341 | <code>                &lt;div class=&quot;overview-content&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 342 | <code>                    &lt;div class=&quot;overview-ring&quot; data-ring=&quot;{{ completion_rate }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 343 | <code>                        &lt;svg viewBox=&quot;0 0 120 120&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 344 | <code>                            &lt;defs&gt;</code> | HTML `defs` 元素，构成当前页面的结构、内容或交互区域。 |
| 345 | <code>                                &lt;linearGradient id=&quot;ringGrad&quot; x1=&quot;0%&quot; y1=&quot;0%&quot; x2=&quot;100%&quot; y2=&quot;100%&quot;&gt;</code> | HTML `lineargradient` 元素，构成当前页面的结构、内容或交互区域。 |
| 346 | <code>                                    &lt;stop offset=&quot;0%&quot; stop-color=&quot;#ec4899&quot;/&gt;</code> | HTML `stop` 元素，构成当前页面的结构、内容或交互区域。 |
| 347 | <code>                                    &lt;stop offset=&quot;100%&quot; stop-color=&quot;#a855f7&quot;/&gt;</code> | HTML `stop` 元素，构成当前页面的结构、内容或交互区域。 |
| 348 | <code>                                &lt;/linearGradient&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 349 | <code>                            &lt;/defs&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 350 | <code>                            &lt;circle class=&quot;ring-bg&quot; cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;48&quot; /&gt;</code> | HTML `circle` 元素，构成当前页面的结构、内容或交互区域。 |
| 351 | <code>                            &lt;circle class=&quot;ring-fg&quot; cx=&quot;60&quot; cy=&quot;60&quot; r=&quot;48&quot;</code> | HTML `circle` 元素，构成当前页面的结构、内容或交互区域。 |
| 352 | <code>                                    stroke=&quot;url(#ringGrad)&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 353 | <code>                                    stroke-dasharray=&quot;{{ (completion_rate / 100 * 301.59) | round(2) }} 301.59&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 354 | <code>                                    transform=&quot;rotate(-90 60 60)&quot;/&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 355 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 356 | <code>                        &lt;div class=&quot;ring-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 357 | <code>                            &lt;span class=&quot;ring-num&quot;&gt;{{ completion_rate }}&lt;small&gt;%&lt;/small&gt;&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 358 | <code>                            &lt;span class=&quot;ring-label&quot;&gt;完成率&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 359 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 360 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 361 | <code>                    &lt;ul class=&quot;overview-list&quot;&gt;</code> | HTML `ul` 元素，构成当前页面的结构、内容或交互区域。 |
| 362 | <code>                        &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 363 | <code>                            &lt;span class=&quot;dot bg-amber-400&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 364 | <code>                            &lt;span class=&quot;lbl&quot;&gt;未领取&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 365 | <code>                            &lt;strong&gt;{{ stats.pending }}&lt;/strong&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 366 | <code>                        &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 367 | <code>                        &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 368 | <code>                            &lt;span class=&quot;dot bg-blue-500&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 369 | <code>                            &lt;span class=&quot;lbl&quot;&gt;已领取&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 370 | <code>                            &lt;strong&gt;{{ stats.picked_up }}&lt;/strong&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 371 | <code>                        &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 372 | <code>                        &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 373 | <code>                            &lt;span class=&quot;dot bg-emerald-500&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 374 | <code>                            &lt;span class=&quot;lbl&quot;&gt;已归还&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 375 | <code>                            &lt;strong&gt;{{ stats.returned }}&lt;/strong&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 376 | <code>                        &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 377 | <code>                        &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 378 | <code>                            &lt;span class=&quot;dot bg-orange-500&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 379 | <code>                            &lt;span class=&quot;lbl&quot;&gt;已逾期&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 380 | <code>                            &lt;strong&gt;{{ stats.expired }}&lt;/strong&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 381 | <code>                        &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 382 | <code>                    &lt;/ul&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 383 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 384 | <code>                &lt;div class=&quot;overview-level tone-{{ insights.level.tone }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 385 | <code>                    &lt;span class=&quot;level-badge&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 386 | <code>                        &lt;svg fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 387 | <code>                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 388 | <code>                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 389 | <code>                        &lt;p class=&quot;level-name&quot;&gt;{{ insights.level.name }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 390 | <code>                        &lt;p class=&quot;level-desc&quot;&gt;{{ insights.level.desc }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 391 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 392 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 393 | <code>            &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 394 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 395 | <code>            {# 阅读偏好 - Top 3 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 396 | <code>            {% if insights.top_categories %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 397 | <code>            &lt;section class=&quot;aside-card&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 398 | <code>                &lt;div class=&quot;aside-card-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 399 | <code>                    &lt;div class=&quot;aside-card-title&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 400 | <code>                        &lt;span class=&quot;aside-icon tone-purple&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 401 | <code>                            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 402 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 403 | <code>                        &lt;h3&gt;阅读偏好&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 404 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 405 | <code>                    &lt;span class=&quot;aside-card-eye&quot;&gt;前三&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 406 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 407 | <code>                &lt;ul class=&quot;pref-list&quot;&gt;</code> | HTML `ul` 元素，构成当前页面的结构、内容或交互区域。 |
| 408 | <code>                    {% for cat in insights.top_categories %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 409 | <code>                    &lt;li class=&quot;pref-item rank-{{ loop.index }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 410 | <code>                        &lt;span class=&quot;pref-rank&quot;&gt;0{{ loop.index }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 411 | <code>                        &lt;div class=&quot;pref-meta&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 412 | <code>                            &lt;div class=&quot;pref-row&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 413 | <code>                                &lt;span class=&quot;pref-name&quot;&gt;{{ cat.name }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 414 | <code>                                &lt;span class=&quot;pref-count&quot;&gt;{{ cat.count }} 本&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 415 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 416 | <code>                            &lt;div class=&quot;pref-bar&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 417 | <code>                                &lt;span class=&quot;pref-fill&quot; style=&quot;width: {{ cat.pct }}%&quot;&gt;&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 418 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 419 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 420 | <code>                    &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 421 | <code>                    {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 422 | <code>                &lt;/ul&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 423 | <code>            &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 424 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 425 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 426 | <code>            {# 即将到期 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 427 | <code>            {% if insights.upcoming_due %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 428 | <code>            &lt;section class=&quot;aside-card&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 429 | <code>                &lt;div class=&quot;aside-card-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 430 | <code>                    &lt;div class=&quot;aside-card-title&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 431 | <code>                        &lt;span class=&quot;aside-icon tone-amber&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 432 | <code>                            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 433 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 434 | <code>                        &lt;h3&gt;即将到期&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 435 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 436 | <code>                    &lt;span class=&quot;aside-card-eye pulse&quot;&gt;{{ insights.upcoming_due | length }} 项&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 437 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 438 | <code>                &lt;ul class=&quot;due-list&quot;&gt;</code> | HTML `ul` 元素，构成当前页面的结构、内容或交互区域。 |
| 439 | <code>                    {% for item in insights.upcoming_due %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 440 | <code>                    {% set rec = item.record %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 441 | <code>                    &lt;li class=&quot;due-item {% if item.overdue %}is-overdue{% elif item.days_left &lt;= 3 %}is-soon{% endif %}&quot;&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 442 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.book_detail&#x27;, book_id=rec.book.id) }}&quot; class=&quot;due-link&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 443 | <code>                            &lt;div class=&quot;due-cover&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 444 | <code>                                {% if rec.book.image %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 445 | <code>                                &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/&#x27; + rec.book.image) }}&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 446 | <code>                                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 447 | <code>                                &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/default-book.jpg&#x27;) }}&quot; alt=&quot;&quot; loading=&quot;lazy&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 448 | <code>                                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 449 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 450 | <code>                            &lt;div class=&quot;due-meta&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 451 | <code>                                &lt;p class=&quot;due-title&quot;&gt;{{ rec.book.title }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 452 | <code>                                &lt;p class=&quot;due-info&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 453 | <code>                                    {% if item.overdue %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 454 | <code>                                    &lt;span class=&quot;due-pill is-overdue&quot;&gt;已逾期 {{ -item.days_left }} 天&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 455 | <code>                                    {% elif item.days_left == 0 %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 456 | <code>                                    &lt;span class=&quot;due-pill is-today&quot;&gt;今日到期&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 457 | <code>                                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 458 | <code>                                    &lt;span class=&quot;due-pill is-soon&quot;&gt;还剩 {{ item.days_left }} 天&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 459 | <code>                                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 460 | <code>                                &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 461 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 462 | <code>                        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 463 | <code>                    &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 464 | <code>                    {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 465 | <code>                &lt;/ul&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 466 | <code>            &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 467 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 468 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 469 | <code>            {# 借阅小贴士 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 470 | <code>            &lt;section class=&quot;aside-card tips-card&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 471 | <code>                &lt;div class=&quot;aside-card-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 472 | <code>                    &lt;div class=&quot;aside-card-title&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 473 | <code>                        &lt;span class=&quot;aside-icon tone-emerald&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 474 | <code>                            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 10V3L4 14h7v7l9-11h-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 475 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 476 | <code>                        &lt;h3&gt;借阅小贴士&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 477 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 478 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 479 | <code>                &lt;ul class=&quot;tips-list&quot;&gt;</code> | HTML `ul` 元素，构成当前页面的结构、内容或交互区域。 |
| 480 | <code>                    &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 481 | <code>                        &lt;span class=&quot;tip-num&quot;&gt;01&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 482 | <code>                        &lt;p&gt;预约后需等待管理员审核，超过 &lt;strong&gt;3 分钟&lt;/strong&gt; 未处理将自动取消。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 483 | <code>                    &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 484 | <code>                    &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 485 | <code>                        &lt;span class=&quot;tip-num&quot;&gt;02&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 486 | <code>                        &lt;p&gt;借阅时长最长 &lt;strong&gt;12 天&lt;/strong&gt;，请在预约时合理设置归还日期。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 487 | <code>                    &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 488 | <code>                    &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 489 | <code>                        &lt;span class=&quot;tip-num&quot;&gt;03&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 490 | <code>                        &lt;p&gt;同时最多借阅 &lt;strong&gt;2 本&lt;/strong&gt;，归还后即可继续预约新书。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 491 | <code>                    &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 492 | <code>                    &lt;li&gt;</code> | HTML `li` 元素，构成当前页面的结构、内容或交互区域。 |
| 493 | <code>                        &lt;span class=&quot;tip-num&quot;&gt;04&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 494 | <code>                        &lt;p&gt;请在预定日期前归还图书，逾期可能影响后续借阅权限 ♡&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 495 | <code>                    &lt;/li&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 496 | <code>                &lt;/ul&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 497 | <code>            &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 498 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 499 | <code>        &lt;/aside&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 500 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 501 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 502 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 503 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 504 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 505 | <code>{% block scripts %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 506 | <code>&lt;script src=&quot;{{ versioned_url(&#x27;js/borrow-records.js&#x27;) }}&quot;&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 507 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
