# static/html/base.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 2 | <code>&lt;!DOCTYPE html&gt;</code> | HTML `!doctype` 元素，构成当前页面的结构、内容或交互区域。 |
| 3 | <code>&lt;html lang=&quot;zh-CN&quot;&gt;</code> | HTML `html` 元素，构成当前页面的结构、内容或交互区域。 |
| 4 | <code>&lt;head&gt;</code> | HTML `head` 元素，构成当前页面的结构、内容或交互区域。 |
| 5 | <code>    &lt;meta charset=&quot;UTF-8&quot;&gt;</code> | HTML `meta` 元素，构成当前页面的结构、内容或交互区域。 |
| 6 | <code>    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</code> | HTML `meta` 元素，构成当前页面的结构、内容或交互区域。 |
| 7 | <code>    &lt;title&gt;{% block title %}图书管理系统{% endblock %}&lt;/title&gt;</code> | HTML `title` 元素，构成当前页面的结构、内容或交互区域。 |
| 8 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 9 | <code>    &lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/tailwind.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 10 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 11 | <code>    &lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/fonts.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 12 | <code>    &lt;link rel=&quot;preload&quot; href=&quot;/static/fonts/montserrat-latin.woff2&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossorigin&gt;</code> | 加载外部样式资源，影响当前页面的视觉表现。 |
| 13 | <code>    &lt;link rel=&quot;preload&quot; href=&quot;/static/fonts/cormorant-latin.woff2&quot; as=&quot;font&quot; type=&quot;font/woff2&quot; crossorigin&gt;</code> | 加载外部样式资源，影响当前页面的视觉表现。 |
| 14 | <code>    &lt;link rel=&quot;stylesheet&quot; href=&quot;{{ versioned_url(&#x27;css/base.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 15 | <code>    {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 16 | <code>    &lt;script src=&quot;https://cdn.socket.io/4.7.5/socket.io.min.js&quot; defer&gt;&lt;/script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 17 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 18 | <code>    {% block head_extra %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 19 | <code>&lt;/head&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 20 | <code>&lt;body class=&quot;bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-pink-100 via-brand-bg to-white min-h-screen flex flex-col overflow-x-hidden&quot;&gt;</code> | HTML `body` 元素，构成当前页面的结构、内容或交互区域。 |
| 21 | <code>    {% block header %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 22 | <code>    &lt;header class=&quot;site-header fixed top-0 left-0 right-0 mx-auto w-full max-w-[1405px] px-2 md:px-4 z-[100] pt-2 md:pt-6&quot;&gt;</code> | HTML `header` 元素，构成当前页面的结构、内容或交互区域。 |
| 23 | <code>        &lt;nav id=&quot;site-nav&quot; class=&quot;nav-glass shadow-glass rounded-2xl md:rounded-[2.5rem] px-4 md:px-8 py-3 md:py-4 flex justify-between items-center relative&quot;&gt;</code> | HTML `nav` 元素，构成当前页面的结构、内容或交互区域。 |
| 24 | <code>            &lt;a href=&quot;/&quot; class=&quot;flex items-center space-x-3 group cursor-pointer&quot;&gt;</code> | 链接元素，提供页面跳转或功能入口。 |
| 25 | <code>                &lt;div class=&quot;p-2.5 bg-brand-primary/10 rounded-2xl group-hover:bg-brand-primary group-hover:rotate-12 transition-all duration-500&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 26 | <code>                    &lt;svg class=&quot;w-7 h-7 text-brand-primary group-hover:text-white transition-colors&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 27 | <code>                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 28 | <code>                    &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 29 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 30 | <code>                &lt;span class=&quot;text-2xl font-heading font-bold text-brand-deep tracking-tight&quot;&gt;景艺大图书馆&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 31 | <code>            &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 32 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 33 | <code>            &lt;div class=&quot;hidden md:flex items-center space-x-8&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 34 | <code>                {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 35 | <code>                    {% if current_user.is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 36 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;) }}&quot; class=&quot;nav-link text-sm font-semibold text-brand-deep/80 hover:text-brand-primary transition-colors&quot;&gt;管理工作台&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 37 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 38 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;nav-link text-sm font-semibold text-brand-deep/80 hover:text-brand-primary transition-colors&quot;&gt;馆藏资源&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 39 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.borrow_records&#x27;) }}&quot; class=&quot;nav-link text-sm font-semibold text-brand-deep/80 hover:text-brand-primary transition-colors&quot;&gt;借阅足迹&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 40 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.ranking&#x27;) }}&quot; class=&quot;nav-link text-sm font-semibold text-brand-deep/80 hover:text-brand-primary transition-colors&quot;&gt;借阅排行&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 41 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 42 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 43 | <code>                    &lt;div class=&quot;flex items-center space-x-3 pl-4 border-l border-pink-200&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 44 | <code>                        {% if not current_user.is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 45 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;user.profile&#x27;) }}&quot; class=&quot;nav-avatar group&quot; title=&quot;{{ current_user.username }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 46 | <code>                            {% if current_user.avatar %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 47 | <code>                            &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/avatars/&#x27; + current_user.avatar) }}&quot; alt=&quot;头像&quot; class=&quot;nav-avatar-img&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 48 | <code>                            {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 49 | <code>                            &lt;span class=&quot;nav-avatar-letter&quot;&gt;{{ current_user.username[0]|upper }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 50 | <code>                            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 51 | <code>                        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 52 | <code>                        {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 53 | <code>                        &lt;div class=&quot;nav-avatar&quot; title=&quot;{{ current_user.username }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 54 | <code>                            {% if current_user.avatar %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 55 | <code>                            &lt;img src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;images/avatars/&#x27; + current_user.avatar) }}&quot; alt=&quot;头像&quot; class=&quot;nav-avatar-img&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 56 | <code>                            {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 57 | <code>                            &lt;span class=&quot;nav-avatar-letter&quot;&gt;{{ current_user.username[0]|upper }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 58 | <code>                            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 59 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 60 | <code>                        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 61 | <code>                        &lt;a href=&quot;{{ url_for(&#x27;auth.logout&#x27;) }}&quot; class=&quot;btn-primary px-6 py-2.5 text-xs font-bold text-white rounded-2xl cursor-pointer&quot;&gt;退出&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 62 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 63 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 64 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot; class=&quot;px-6 py-2.5 text-sm font-bold text-white rounded-2xl cursor-pointer bg-gradient-to-r from-brand-primary to-brand-accent hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg&quot;&gt;登录&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 65 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;auth.register&#x27;) }}&quot; class=&quot;px-8 py-3 text-sm font-bold text-white rounded-2xl cursor-pointer bg-gradient-to-r from-brand-primary to-brand-accent hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg&quot;&gt;注册账号&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 66 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 67 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 68 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 69 | <code>            &lt;button id=&quot;mobile-menu-btn&quot; type=&quot;button&quot; class=&quot;mobile-menu-btn md:hidden&quot; aria-label=&quot;打开移动端菜单&quot; aria-expanded=&quot;false&quot; aria-controls=&quot;mobile-menu&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 70 | <code>                &lt;span&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 71 | <code>                &lt;span&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 72 | <code>                &lt;span&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 73 | <code>            &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 74 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 75 | <code>            &lt;div id=&quot;mobile-menu&quot; class=&quot;mobile-menu-panel hidden md:hidden&quot; aria-label=&quot;移动端导航&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 76 | <code>                {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 77 | <code>                    {% if current_user.is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 78 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;) }}&quot;&gt;管理工作台&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 79 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 80 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot;&gt;馆藏资源&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 81 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.borrow_records&#x27;) }}&quot;&gt;借阅足迹&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 82 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.ranking&#x27;) }}&quot;&gt;借阅排行&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 83 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.profile&#x27;) }}&quot;&gt;个人中心&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 84 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 85 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;auth.logout&#x27;) }}&quot; class=&quot;is-danger&quot;&gt;退出登录&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 86 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 87 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.index&#x27;) }}&quot;&gt;首页&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 88 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.guest_books&#x27;) }}&quot;&gt;馆藏浏览&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 89 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot;&gt;登录&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 90 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;auth.register&#x27;) }}&quot;&gt;注册账号&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 91 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 92 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 93 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 94 | <code>        &lt;/nav&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 95 | <code>    &lt;/header&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 96 | <code>    {% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 97 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 98 | <code>    &lt;div id=&quot;toast-container&quot; class=&quot;fixed top-20 md:top-24 right-2 left-2 md:left-auto md:right-6 z-[1000] flex flex-col gap-4 pointer-events-none&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 99 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 100 | <code>    {% set mobile_nav_hidden = request.endpoint in [</code> | 设置 Jinja 模板变量，供后续渲染条件或内容使用。 |
| 101 | <code>        &#x27;auth.login&#x27;, &#x27;auth.login_email&#x27;, &#x27;auth.register&#x27;, &#x27;auth.register_complete&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 102 | <code>        &#x27;auth.forgot_password&#x27;, &#x27;auth.forgot_password_reset&#x27;, &#x27;auth.admin_login&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 103 | <code>        &#x27;setup.init_db_page&#x27;, &#x27;setup.init_db_actions&#x27;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 104 | <code>    ] %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 105 | <code>    {% block mobile_navigation %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 106 | <code>    {% if not mobile_nav_hidden %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 107 | <code>    &lt;nav class=&quot;mobile-bottom-nav md:hidden&quot; aria-label=&quot;手机端快捷导航&quot;&gt;</code> | HTML `nav` 元素，构成当前页面的结构、内容或交互区域。 |
| 108 | <code>        {% if current_user.is_authenticated and current_user.is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 109 | <code>        &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;) }}&quot; class=&quot;{% if request.endpoint == &#x27;admin.admin_index&#x27; and request.args.get(&#x27;tab&#x27;, &#x27;online&#x27;) == &#x27;online&#x27; %}is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 110 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 7h18M5 7v12a2 2 0 002 2h10a2 2 0 002-2V7M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 111 | <code>            &lt;span&gt;后台&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 112 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 113 | <code>        &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;, tab=&#x27;books&#x27;) }}&quot; class=&quot;{% if request.endpoint == &#x27;admin.admin_index&#x27; and request.args.get(&#x27;tab&#x27;) == &#x27;books&#x27; %}is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 114 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 115 | <code>            &lt;span&gt;图书&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 116 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 117 | <code>        &lt;a href=&quot;{{ url_for(&#x27;admin.admin_index&#x27;, tab=&#x27;current&#x27;) }}&quot; class=&quot;{% if request.endpoint == &#x27;admin.admin_index&#x27; and request.args.get(&#x27;tab&#x27;) == &#x27;current&#x27; %}is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 118 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 119 | <code>            &lt;span&gt;借阅&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 120 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 121 | <code>        &lt;a href=&quot;{{ url_for(&#x27;auth.logout&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 122 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 123 | <code>            &lt;span&gt;退出&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 124 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 125 | <code>        {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 126 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.index&#x27;) }}&quot; class=&quot;{% if request.endpoint == &#x27;user.index&#x27; %}is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 127 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 128 | <code>            &lt;span&gt;首页&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 129 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 130 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) if current_user.is_authenticated and not current_user.is_admin else url_for(&#x27;user.guest_books&#x27;) }}&quot; class=&quot;{% if request.endpoint in [&#x27;user.books&#x27;, &#x27;user.guest_books&#x27;, &#x27;user.book_detail&#x27;] %}is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 131 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 132 | <code>            &lt;span&gt;馆藏&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 133 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 134 | <code>        {% if current_user.is_authenticated and not current_user.is_admin %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 135 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.borrow_records&#x27;) }}&quot; class=&quot;{% if request.endpoint == &#x27;user.borrow_records&#x27; %}is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 136 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 012-2h2a2 2 0 012 2&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 137 | <code>            &lt;span&gt;记录&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 138 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 139 | <code>        &lt;a href=&quot;{{ url_for(&#x27;user.profile&#x27;) }}&quot; class=&quot;{% if request.endpoint == &#x27;user.profile&#x27; %}is-active{% endif %}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 140 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 141 | <code>            &lt;span&gt;我的&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 142 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 143 | <code>        {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 144 | <code>        &lt;a href=&quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 145 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 16l-4-4m0 0l4-4m-4 4h14&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 146 | <code>            &lt;span&gt;登录&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 147 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 148 | <code>        &lt;a href=&quot;{{ url_for(&#x27;auth.register&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 149 | <code>            &lt;svg fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M18 9v3m0 0v3m0-3h3m-3 0h-3M13 7a4 4 0 11-8 0 4 4 0 018 0zM3 21a7 7 0 0114 0&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 150 | <code>            &lt;span&gt;注册&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 151 | <code>        &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 152 | <code>        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 153 | <code>        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 154 | <code>    &lt;/nav&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 155 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 156 | <code>    {% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 157 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 158 | <code>    &lt;main id=&quot;page-content&quot; class=&quot;{% block main_class %}flex-1 py-6 md:py-12 px-4 animate-in fade-in duration-700 mt-20 md:mt-28{% endblock %}&quot;&gt;</code> | HTML `main` 元素，构成当前页面的结构、内容或交互区域。 |
| 159 | <code>        &lt;div class=&quot;{% block content_wrapper %}max-w-7xl mx-auto{% endblock %}&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 160 | <code>            {% block content %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 161 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 162 | <code>    &lt;/main&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 163 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 164 | <code>    {% block footer %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 165 | <code>    &lt;footer class=&quot;mt-10 md:mt-20 border-t border-pink-100 py-8 md:py-12&quot;&gt;</code> | HTML `footer` 元素，构成当前页面的结构、内容或交互区域。 |
| 166 | <code>        &lt;div class=&quot;max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 167 | <code>            &lt;div class=&quot;flex items-center space-x-3 opacity-60&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 168 | <code>                &lt;svg class=&quot;w-5 h-5 text-brand-primary&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 169 | <code>                &lt;span class=&quot;text-xs font-semibold text-brand-deep tracking-wider&quot;&gt;© 2026 景德镇艺术职业大学 版权所有&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 170 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 171 | <code>            &lt;div class=&quot;flex flex-wrap items-center justify-center gap-1 sm:gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 172 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 173 | <code>                &lt;span class=&quot;footer-link group&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 174 | <code>                    &lt;svg class=&quot;footer-link-icon&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 175 | <code>                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.8&quot; d=&quot;M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 176 | <code>                    &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 177 | <code>                    &lt;span&gt;隐私政策&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 178 | <code>                    &lt;div class=&quot;footer-tooltip&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 179 | <code>                        &lt;p class=&quot;text-xs font-bold text-brand-deep&quot;&gt;隐私政策&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 180 | <code>                        &lt;p class=&quot;mt-1 text-[11px] leading-5 text-brand-deep/65&quot;&gt;我们承诺通过加密传输与访问控制，保护您的个人信息安全。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 181 | <code>                        &lt;span class=&quot;footer-tooltip-arrow&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 182 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 183 | <code>                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 184 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 185 | <code>                &lt;span class=&quot;footer-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 186 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 187 | <code>                &lt;span class=&quot;footer-link group&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 188 | <code>                    &lt;svg class=&quot;footer-link-icon&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 189 | <code>                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.8&quot; d=&quot;M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 190 | <code>                    &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 191 | <code>                    &lt;span&gt;使用条款&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 192 | <code>                    &lt;div class=&quot;footer-tooltip&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 193 | <code>                        &lt;p class=&quot;text-xs font-bold text-brand-deep&quot;&gt;使用条款&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 194 | <code>                        &lt;p class=&quot;mt-1 text-[11px] leading-5 text-brand-deep/65&quot;&gt;使用本系统即表示您已阅读并遵守图书馆借阅、归还及行为规范。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 195 | <code>                        &lt;span class=&quot;footer-tooltip-arrow&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 196 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 197 | <code>                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 198 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 199 | <code>                &lt;span class=&quot;footer-dot&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 200 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 201 | <code>                &lt;span class=&quot;footer-link group&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 202 | <code>                    &lt;svg class=&quot;footer-link-icon&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 203 | <code>                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.8&quot; d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 204 | <code>                    &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 205 | <code>                    &lt;span&gt;联系我们&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 206 | <code>                    &lt;div class=&quot;footer-tooltip&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 207 | <code>                        &lt;p class=&quot;text-xs font-bold text-brand-deep&quot;&gt;联系我们&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 208 | <code>                        &lt;div class=&quot;mt-2 space-y-1.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 209 | <code>                            &lt;div class=&quot;flex items-center gap-2 text-[11px] text-brand-deep/70&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 210 | <code>                                &lt;svg class=&quot;h-3 w-3 text-brand-primary&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 211 | <code>                                &lt;span class=&quot;font-mono&quot;&gt;15079378671&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 212 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 213 | <code>                            &lt;div class=&quot;flex items-center gap-2 text-[11px] text-brand-deep/70&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 214 | <code>                                &lt;svg class=&quot;h-3 w-3 text-brand-primary&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 215 | <code>                                &lt;span class=&quot;font-mono&quot;&gt;3435255848@qq.com&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 216 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 217 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 218 | <code>                        &lt;span class=&quot;footer-tooltip-arrow&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 219 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 220 | <code>                &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 221 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 222 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 223 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 224 | <code>    &lt;/footer&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 225 | <code>    {% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 226 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 227 | <code>    &lt;script src=&quot;{{ versioned_url(&#x27;js/base.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 228 | <code>    {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 229 | <code>    &lt;script src=&quot;{{ versioned_url(&#x27;js/socket-client.js&#x27;) }}&quot; defer&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 230 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 231 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 232 | <code>    {% with messages = get_flashed_messages(with_categories=true) %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 233 | <code>        {% if messages %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 234 | <code>            &lt;div id=&quot;flash-messages-data&quot; style=&quot;display:none&quot; data-messages=&#x27;{{ messages|tojson }}&#x27;&gt;&lt;/div&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 235 | <code>        {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 236 | <code>    {% endwith %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 237 | <code>    {% if current_user.is_authenticated and amap_js_key %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 238 | <code>    &lt;script&gt;window._AMapSecurityConfig = { securityJsCode: &#x27;{{ amap_security_key }}&#x27; };&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 239 | <code>    &lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 240 | <code>    (function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 241 | <code>        var geoLevel = parseInt(localStorage.getItem(&#x27;_geo_level&#x27;) || &#x27;0&#x27;, 10);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 242 | <code>        if (geoLevel &gt;= 2) return;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 243 | <code>        setTimeout(function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 244 | <code>            var currentLevel = 0;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 245 | <code>            function sendLoc(loc, level) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 246 | <code>                if (!loc || level &lt;= currentLevel) return;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 247 | <code>                currentLevel = level;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 248 | <code>                fetch(&quot;{{ url_for(&#x27;update_location&#x27;) }}&quot;, {</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 249 | <code>                    method: &#x27;POST&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 250 | <code>                    headers: { &#x27;Content-Type&#x27;: &#x27;application/json&#x27;, &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27; },</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 251 | <code>                    body: JSON.stringify({ location: loc }),</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 252 | <code>                    credentials: &#x27;same-origin&#x27;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 253 | <code>                }).then(function() { localStorage.setItem(&#x27;_geo_level&#x27;, String(level)); });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 254 | <code>            }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 255 | <code>            var script = document.createElement(&#x27;script&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 256 | <code>            script.src = &#x27;https://webapi.amap.com/maps?v=2.0&amp;key={{ amap_js_key }}&amp;plugin=AMap.Geolocation,AMap.Geocoder&#x27;;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 257 | <code>            script.onload = function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 258 | <code>                var geo = new AMap.Geolocation({ timeout: 10000, noIpLocate: 0, noGeoLocation: 0, useNative: true, needAddress: true });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 259 | <code>                geo.getCityInfo(function(status, result) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 260 | <code>                    if (status === &#x27;complete&#x27; &amp;&amp; result.province) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 261 | <code>                        var loc = (result.province || &#x27;&#x27;) + (result.city &amp;&amp; result.city !== result.province ? result.city : &#x27;&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 262 | <code>                        sendLoc(loc, 1);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 263 | <code>                    }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 264 | <code>                });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 265 | <code>                geo.getCurrentPosition(function(status, result) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 266 | <code>                    if (status !== &#x27;complete&#x27; || !result.position) return;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 267 | <code>                    new AMap.Geocoder().getAddress(result.position, function(s, r) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 268 | <code>                        if (s !== &#x27;complete&#x27; || !r.regeocode) return;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 269 | <code>                        var a = r.regeocode.addressComponent;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 270 | <code>                        sendLoc((a.province || &#x27;&#x27;) + (a.city &amp;&amp; a.city !== a.province ? a.city : &#x27;&#x27;) + (a.district || &#x27;&#x27;), 2);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 271 | <code>                    });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 272 | <code>                });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 273 | <code>            };</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 274 | <code>            script.onerror = function() {};</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 275 | <code>            document.head.appendChild(script);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 276 | <code>        }, 3000);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 277 | <code>    })();</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 278 | <code>    &lt;/script&gt;</code> | 结束当前脚本块。 |
| 279 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 280 | <code>    {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 281 | <code>    &lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 282 | <code>    (function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 283 | <code>        var loginUrl = &quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot;;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 284 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 285 | <code>        window.showKickoutModal = function showKickoutModal(message) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 286 | <code>            if (document.querySelector(&#x27;.kickout-overlay&#x27;)) return;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 287 | <code>            var seconds = 3;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 288 | <code>            var overlay = document.createElement(&#x27;div&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 289 | <code>            overlay.className = &#x27;kickout-overlay&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 290 | <code>            overlay.innerHTML =</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 291 | <code>                &#x27;&lt;div class=&quot;kickout-card&quot; role=&quot;alertdialog&quot; aria-modal=&quot;true&quot;&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 292 | <code>                  &#x27;&lt;div class=&quot;kickout-icon-wrap&quot;&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 293 | <code>                    &#x27;&lt;svg fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 294 | <code>                      &#x27;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L5.636 5.636&quot;/&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 295 | <code>                    &#x27;&lt;/svg&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 296 | <code>                  &#x27;&lt;/div&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 297 | <code>                  &#x27;&lt;div class=&quot;kickout-title&quot;&gt;登录已失效&lt;/div&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 298 | <code>                  &#x27;&lt;div class=&quot;kickout-msg&quot;&gt;&#x27; + (message || &#x27;您已被管理员强制下线&#x27;) + &#x27;&lt;/div&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 299 | <code>                  &#x27;&lt;div class=&quot;kickout-countdown&quot;&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 300 | <code>                    &#x27;&lt;svg width=&quot;50&quot; height=&quot;50&quot;&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 301 | <code>                      &#x27;&lt;circle cx=&quot;25&quot; cy=&quot;25&quot; r=&quot;22&quot; stroke=&quot;#fee2e2&quot; stroke-width=&quot;4&quot; fill=&quot;none&quot;/&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 302 | <code>                      &#x27;&lt;circle cx=&quot;25&quot; cy=&quot;25&quot; r=&quot;22&quot; stroke=&quot;#e11d48&quot; stroke-width=&quot;4&quot; fill=&quot;none&quot;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 303 | <code>                      &#x27; stroke-dasharray=&quot;138.23&quot; stroke-dashoffset=&quot;0&quot; stroke-linecap=&quot;round&quot;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 304 | <code>                      &#x27; style=&quot;animation: kickoutCountdown &#x27; + seconds + &#x27;s linear forwards;&quot;/&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 305 | <code>                    &#x27;&lt;/svg&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 306 | <code>                    &#x27;&lt;div class=&quot;kickout-countdown-num&quot; id=&quot;kickoutNum&quot;&gt;&#x27; + seconds + &#x27;&lt;/div&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 307 | <code>                  &#x27;&lt;/div&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 308 | <code>                  &#x27;&lt;button type=&quot;button&quot; class=&quot;kickout-btn&quot; id=&quot;kickoutBtn&quot;&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 309 | <code>                    &#x27;&lt;svg width=&quot;18&quot; height=&quot;18&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot;&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 310 | <code>                      &#x27;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1&quot;/&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 311 | <code>                    &#x27;&lt;/svg&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 312 | <code>                    &#x27;立即重新登录&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 313 | <code>                  &#x27;&lt;/button&gt;&#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 314 | <code>                &#x27;&lt;/div&gt;&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 315 | <code>            document.body.appendChild(overlay);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 316 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 317 | <code>            var numEl = overlay.querySelector(&#x27;#kickoutNum&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 318 | <code>            var timer = setInterval(function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 319 | <code>                seconds -= 1;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 320 | <code>                if (numEl) numEl.textContent = Math.max(seconds, 0);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 321 | <code>                if (seconds &lt;= 0) { clearInterval(timer); window.location.href = loginUrl; }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 322 | <code>            }, 1000);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 323 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 324 | <code>            overlay.querySelector(&#x27;#kickoutBtn&#x27;).addEventListener(&#x27;click&#x27;, function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 325 | <code>                clearInterval(timer);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 326 | <code>                window.location.href = loginUrl;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 327 | <code>            });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 328 | <code>        }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 329 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 330 | <code>    })();</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 331 | <code>    &lt;/script&gt;</code> | 结束当前脚本块。 |
| 332 | <code>    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 333 | <code>    {% block scripts %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 334 | <code>&lt;/body&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 335 | <code>&lt;/html&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
