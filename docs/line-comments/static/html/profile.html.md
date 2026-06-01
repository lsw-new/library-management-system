# static/html/profile.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{# 个人中心 #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 2 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 3 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 4 | <code>{% block title %}个人中心 - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 5 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 6 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/profile.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 7 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 8 | <code>{% block header %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 9 | <code>{% block main_class %}flex-1 py-6 md:py-12 px-4 animate-in fade-in duration-700{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 10 | <code>{% block content_wrapper %}max-w-6xl mx-auto{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 11 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 12 | <code>{% set active_count = insights.active_count %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 13 | <code>{% set completion_rate = insights.completion_rate %}</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 14 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 15 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 16 | <code>&lt;div class=&quot;pf-page&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 17 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 18 | <code>    {# ====== 顶部导航 ====== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 19 | <code>    &lt;nav class=&quot;pf-topbar&quot;&gt;</code> | HTML `nav` 元素，构成当前页面的结构、内容或交互区域。 |
| 20 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;pf-back&quot; title=&quot;返回首页&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 21 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M10 19l-7-7m0 0l7-7m-7 7h18&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 22 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 23 | <code>        &lt;span class=&quot;pf-topbar-title&quot;&gt;个人中心&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 24 | <code>        &lt;a href=&quot;{{ url_for(&#x27;auth.logout&#x27;) }}&quot; class=&quot;pf-logout&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 25 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot; class=&quot;w-3.5 h-3.5&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 26 | <code>            退出</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 27 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 28 | <code>    &lt;/nav&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 29 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 30 | <code>    {# ====== 英雄区 ====== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 31 | <code>    &lt;section class=&quot;pf-hero&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 32 | <code>        &lt;div class=&quot;pf-hero-bg&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 33 | <code>        &lt;div class=&quot;pf-hero-blob pf-hero-blob-a&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 34 | <code>        &lt;div class=&quot;pf-hero-blob pf-hero-blob-b&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 35 | <code>        &lt;div class=&quot;pf-hero-blob pf-hero-blob-c&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 36 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 37 | <code>        &lt;div class=&quot;pf-hero-content&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 38 | <code>            &lt;div class=&quot;pf-avatar&quot; id=&quot;avatar-wrapper&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 39 | <code>                {% if current_user.avatar %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 40 | <code>                &lt;img class=&quot;pf-avatar-img&quot; id=&quot;avatar-img&quot;</code> | 图片元素，展示封面、头像或页面视觉素材。 |
| 41 | <code>                     src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/avatars/&#x27; + current_user.avatar) }}&quot; alt=&quot;头像&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 42 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 43 | <code>                &lt;span class=&quot;pf-avatar-letter&quot; id=&quot;avatar-letter&quot;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 44 | <code>                      data-bind=&quot;avatar-letter&quot;&gt;{{ current_user.username[0]|upper }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 45 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 46 | <code>                &lt;label class=&quot;pf-avatar-overlay&quot; for=&quot;avatar-input&quot; title=&quot;更换头像&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 47 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z&quot;/&gt;&lt;circle cx=&quot;12&quot; cy=&quot;13&quot; r=&quot;3&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 48 | <code>                &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 49 | <code>                &lt;input type=&quot;file&quot; id=&quot;avatar-input&quot; accept=&quot;image/png,image/jpeg,image/gif&quot; class=&quot;sr-only&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 50 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 51 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 52 | <code>            &lt;div class=&quot;pf-identity&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 53 | <code>                &lt;div class=&quot;pf-hero-eyebrow&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 54 | <code>                    &lt;span class=&quot;pf-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 55 | <code>                    &lt;span class=&quot;pf-hero-eyebrow-text&quot;&gt;个人中心&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 56 | <code>                    &lt;span class=&quot;pf-dot pf-dot-alt&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 57 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 58 | <code>                &lt;h1 class=&quot;pf-hero-name&quot; data-bind=&quot;username&quot;&gt;{{ current_user.username }}&lt;/h1&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 59 | <code>                &lt;p class=&quot;pf-hero-sub&quot; data-bind=&quot;user-sub&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 60 | <code>                    {% if current_user.real_name %}&lt;span data-bind=&quot;real-name&quot;&gt;{{ current_user.real_name }}&lt;/span&gt;{% endif %}{% if current_user.class_name %}&lt;span class=&quot;pf-hero-sub-sep&quot;&gt; · &lt;/span&gt;&lt;span data-bind=&quot;class-name&quot;&gt;{{ current_user.class_name }}&lt;/span&gt;{% endif %}{% if current_user.student_id %}&lt;span class=&quot;pf-hero-sub-sep&quot;&gt; · &lt;/span&gt;学号 {{ current_user.student_id }}{% endif %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 61 | <code>                &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 62 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 63 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 64 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 65 | <code>        &lt;div class=&quot;pf-stats&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 66 | <code>            &lt;div class=&quot;pf-stat tone-pink&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 67 | <code>                &lt;div class=&quot;pf-stat-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 68 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 69 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 70 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 71 | <code>                    &lt;p class=&quot;pf-stat-label&quot;&gt;总借阅&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 72 | <code>                    &lt;p class=&quot;pf-stat-value&quot;&gt;{{ stats.total }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 73 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 74 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 75 | <code>            &lt;div class=&quot;pf-stat tone-amber&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 76 | <code>                &lt;div class=&quot;pf-stat-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 77 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 78 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 79 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 80 | <code>                    &lt;p class=&quot;pf-stat-label&quot;&gt;进行中&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 81 | <code>                    &lt;p class=&quot;pf-stat-value&quot;&gt;{{ active_count }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 82 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 83 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 84 | <code>            &lt;div class=&quot;pf-stat tone-emerald&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 85 | <code>                &lt;div class=&quot;pf-stat-icon&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 86 | <code>                    &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 87 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 88 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 89 | <code>                    &lt;p class=&quot;pf-stat-label&quot;&gt;完成率&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 90 | <code>                    &lt;p class=&quot;pf-stat-value&quot;&gt;{{ completion_rate }}&lt;span class=&quot;pf-stat-unit&quot;&gt;%&lt;/span&gt;&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 91 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 92 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 93 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 94 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 95 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 96 | <code>    {# ====== 标签页切换 ====== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 97 | <code>    &lt;div class=&quot;pf-tabs&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 98 | <code>        &lt;button class=&quot;pf-tab is-active&quot; data-tab=&quot;profile&quot; type=&quot;button&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 99 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 100 | <code>            个人资料</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 101 | <code>        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 102 | <code>        &lt;button class=&quot;pf-tab&quot; data-tab=&quot;security&quot; type=&quot;button&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 103 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 104 | <code>            安全设置</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 105 | <code>        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 106 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 107 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 108 | <code>    {# ====== 个人资料面板 ====== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 109 | <code>    &lt;div class=&quot;pf-panel&quot; id=&quot;panel-profile&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 110 | <code>        &lt;div class=&quot;pf-panel-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 111 | <code>            &lt;span class=&quot;pf-panel-icon tone-pink&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 112 | <code>                &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 113 | <code>            &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 114 | <code>            &lt;h2 class=&quot;pf-panel-title&quot;&gt;个人资料&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 115 | <code>            &lt;span class=&quot;pf-panel-badge&quot;&gt;基本信息&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 116 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 117 | <code>        &lt;form id=&quot;profile-form&quot; class=&quot;pf-form&quot;&gt;</code> | 表单结构开始，用于收集并提交用户输入。 |
| 118 | <code>            &lt;div class=&quot;pf-form-grid&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 119 | <code>                &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 120 | <code>                    &lt;label class=&quot;pf-label&quot; for=&quot;profile-username&quot;&gt;用户名&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 121 | <code>                    &lt;input type=&quot;text&quot; id=&quot;profile-username&quot; name=&quot;username&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 122 | <code>                           value=&quot;{{ current_user.username }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 123 | <code>                           class=&quot;pf-input&quot; minlength=&quot;3&quot; maxlength=&quot;20&quot; required</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 124 | <code>                           autocomplete=&quot;username&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 125 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 126 | <code>                &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 127 | <code>                    &lt;label class=&quot;pf-label&quot; for=&quot;profile-realname&quot;&gt;姓名&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 128 | <code>                    &lt;input type=&quot;text&quot; id=&quot;profile-realname&quot; name=&quot;real_name&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 129 | <code>                           value=&quot;{{ current_user.real_name or &#x27;&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 130 | <code>                           class=&quot;pf-input&quot; maxlength=&quot;50&quot; required</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 131 | <code>                           placeholder=&quot;请输入真实姓名&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 132 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 133 | <code>                &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 134 | <code>                    &lt;label class=&quot;pf-label&quot; for=&quot;profile-classname&quot;&gt;班级 &lt;span class=&quot;pf-label-hint&quot;&gt;(选填)&lt;/span&gt;&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 135 | <code>                    &lt;input type=&quot;text&quot; id=&quot;profile-classname&quot; name=&quot;class_name&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 136 | <code>                           value=&quot;{{ current_user.class_name or &#x27;&#x27; }}&quot;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 137 | <code>                           class=&quot;pf-input&quot; maxlength=&quot;100&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 138 | <code>                           placeholder=&quot;例如：2024级计算机1班&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 139 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 140 | <code>                &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 141 | <code>                    &lt;label class=&quot;pf-label&quot;&gt;学号&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 142 | <code>                    &lt;div class=&quot;pf-static&quot;&gt;{{ current_user.student_id or &#x27;未设置&#x27; }}&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 143 | <code>                    &lt;p class=&quot;pf-hint&quot;&gt;学号注册后不可修改&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 144 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 145 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 146 | <code>            &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 147 | <code>                &lt;label class=&quot;pf-label&quot;&gt;邮箱&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 148 | <code>                &lt;div class=&quot;pf-static&quot;&gt;{{ current_user.email }}&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 149 | <code>                &lt;p class=&quot;pf-hint&quot;&gt;邮箱注册后不可修改&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 150 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 151 | <code>            &lt;button type=&quot;submit&quot; id=&quot;profile-save-btn&quot; class=&quot;pf-btn-primary&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 152 | <code>                &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 153 | <code>                保存修改</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 154 | <code>            &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 155 | <code>        &lt;/form&gt;</code> | 表单结构结束。 |
| 156 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 157 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 158 | <code>    {# ====== 安全设置面板 ====== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 159 | <code>    &lt;div class=&quot;pf-panel&quot; id=&quot;panel-security&quot; style=&quot;display:none&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 160 | <code>        &lt;div class=&quot;pf-panel-head&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 161 | <code>            &lt;span class=&quot;pf-panel-icon tone-purple&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 162 | <code>                &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 163 | <code>            &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 164 | <code>            &lt;h2 class=&quot;pf-panel-title&quot;&gt;修改密码&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 165 | <code>            &lt;span class=&quot;pf-panel-badge&quot;&gt;安全设置&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 166 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 167 | <code>        &lt;form id=&quot;password-form&quot; class=&quot;pf-form&quot;&gt;</code> | 表单结构开始，用于收集并提交用户输入。 |
| 168 | <code>            &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 169 | <code>                &lt;label class=&quot;pf-label&quot; for=&quot;old-password&quot;&gt;当前密码&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 170 | <code>                &lt;div class=&quot;pf-input-wrap&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 171 | <code>                    &lt;input type=&quot;password&quot; id=&quot;old-password&quot; name=&quot;old_password&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 172 | <code>                           class=&quot;pf-input&quot; required placeholder=&quot;请输入当前密码&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 173 | <code>                           autocomplete=&quot;current-password&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 174 | <code>                    &lt;button type=&quot;button&quot; class=&quot;pf-toggle-pw&quot; data-target=&quot;old-password&quot; aria-label=&quot;切换密码可见&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 175 | <code>                        &lt;svg class=&quot;eye-open w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot;/&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 176 | <code>                        &lt;svg class=&quot;eye-closed w-4 h-4 hidden&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 177 | <code>                    &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 178 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 179 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 180 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 181 | <code>            &lt;div class=&quot;pf-form-grid&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 182 | <code>                &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 183 | <code>                    &lt;label class=&quot;pf-label&quot; for=&quot;new-password&quot;&gt;新密码&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 184 | <code>                    &lt;div class=&quot;pf-input-wrap&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 185 | <code>                        &lt;input type=&quot;password&quot; id=&quot;new-password&quot; name=&quot;new_password&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 186 | <code>                               class=&quot;pf-input&quot; minlength=&quot;6&quot; required placeholder=&quot;至少 6 位字符&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 187 | <code>                               autocomplete=&quot;new-password&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 188 | <code>                        &lt;button type=&quot;button&quot; class=&quot;pf-toggle-pw&quot; data-target=&quot;new-password&quot; aria-label=&quot;切换密码可见&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 189 | <code>                            &lt;svg class=&quot;eye-open w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot;/&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 190 | <code>                            &lt;svg class=&quot;eye-closed w-4 h-4 hidden&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 191 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 192 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 193 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 194 | <code>                &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 195 | <code>                    &lt;label class=&quot;pf-label&quot; for=&quot;confirm-password&quot;&gt;确认新密码&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 196 | <code>                    &lt;div class=&quot;pf-input-wrap&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 197 | <code>                        &lt;input type=&quot;password&quot; id=&quot;confirm-password&quot; name=&quot;confirm_password&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 198 | <code>                               class=&quot;pf-input&quot; minlength=&quot;6&quot; required placeholder=&quot;再次输入新密码&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 199 | <code>                               autocomplete=&quot;new-password&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 200 | <code>                        &lt;button type=&quot;button&quot; class=&quot;pf-toggle-pw&quot; data-target=&quot;confirm-password&quot; aria-label=&quot;切换密码可见&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 201 | <code>                            &lt;svg class=&quot;eye-open w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot;/&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 202 | <code>                            &lt;svg class=&quot;eye-closed w-4 h-4 hidden&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 203 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 204 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 205 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 206 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 207 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 208 | <code>            &lt;div class=&quot;pf-field&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 209 | <code>                &lt;label class=&quot;pf-label&quot; for=&quot;verification-code&quot;&gt;邮箱验证码&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 210 | <code>                &lt;div class=&quot;pf-input-wrap has-code-btn&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 211 | <code>                    &lt;input type=&quot;text&quot; id=&quot;verification-code&quot; name=&quot;verification_code&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 212 | <code>                           class=&quot;pf-input&quot; required placeholder=&quot;请输入验证码&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 213 | <code>                           maxlength=&quot;6&quot; inputmode=&quot;numeric&quot; autocomplete=&quot;one-time-code&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 214 | <code>                    &lt;button type=&quot;button&quot; id=&quot;send-code-btn&quot; class=&quot;pf-send-code&quot;&gt;获取验证码&lt;/button&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 215 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 216 | <code>                &lt;p class=&quot;pf-hint&quot;&gt;验证码将发送到 {{ current_user.email }}&lt;/p&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 217 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 218 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 219 | <code>            &lt;button type=&quot;submit&quot; id=&quot;password-save-btn&quot; class=&quot;pf-btn-accent&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 220 | <code>                &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 221 | <code>                更新密码</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 222 | <code>            &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 223 | <code>        &lt;/form&gt;</code> | 表单结构结束。 |
| 224 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 225 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 226 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 227 | <code>    {# ====== 头像裁剪弹窗 ====== #}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 228 | <code>    &lt;div id=&quot;crop-modal&quot; class=&quot;crop-modal&quot; aria-hidden=&quot;true&quot; role=&quot;dialog&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 229 | <code>        &lt;div class=&quot;crop-dialog&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 230 | <code>            &lt;div class=&quot;crop-header&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 231 | <code>                &lt;h3&gt;调整头像&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 232 | <code>                &lt;p&gt;拖动选框定位 · 滑块或滚轮调整大小&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 233 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 234 | <code>            &lt;div id=&quot;crop-viewport&quot; class=&quot;crop-viewport&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 235 | <code>                &lt;canvas id=&quot;crop-canvas&quot;&gt;&lt;/canvas&gt;</code> | HTML `canvas` 元素，构成当前页面的结构、内容或交互区域。 |
| 236 | <code>                &lt;div class=&quot;crop-ring&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 237 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 238 | <code>            &lt;div class=&quot;crop-zoom&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 239 | <code>                &lt;svg class=&quot;crop-zoom-icon&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 240 | <code>                &lt;input id=&quot;crop-zoom&quot; type=&quot;range&quot; min=&quot;100&quot; max=&quot;300&quot; value=&quot;200&quot; class=&quot;crop-slider&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 241 | <code>                &lt;svg class=&quot;crop-zoom-icon&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 242 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 243 | <code>            &lt;div class=&quot;crop-actions&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 244 | <code>                &lt;button type=&quot;button&quot; id=&quot;crop-cancel&quot; class=&quot;crop-btn-cancel&quot;&gt;取消&lt;/button&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 245 | <code>                &lt;button type=&quot;button&quot; id=&quot;crop-confirm&quot; class=&quot;crop-btn-confirm&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 246 | <code>                    &lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 247 | <code>                    确认裁剪</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 248 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 249 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 250 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 251 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 252 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 253 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 254 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 255 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 256 | <code>{% block scripts %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 257 | <code>&lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 258 | <code>window.borrowModalConfig = Object.assign({}, window.borrowModalConfig || {}, {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 259 | <code>    csrfToken: {{ borrow_action_csrf_token|tojson }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 260 | <code>});</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 261 | <code>window.__PROFILE_CONFIG__ = {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 262 | <code>    authCsrfToken: {{ auth_action_csrf_token|tojson }},</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 263 | <code>    userEmail: {{ current_user.email|tojson }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 264 | <code>};</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 265 | <code>&lt;/script&gt;</code> | 结束当前脚本块。 |
| 266 | <code>&lt;script src=&quot;{{ versioned_url(&#x27;js/profile.js&#x27;) }}&quot;&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 267 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
