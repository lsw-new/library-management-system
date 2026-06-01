# static/html/login_email.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 2 | <code>{% block title %}邮箱登录 - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 3 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 4 | <code>{% block header %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 5 | <code>{% block footer %}{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 6 | <code>{% block main_class %}flex-1 flex flex-col{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 7 | <code>{% block content_wrapper %}flex-1 flex{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 8 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 9 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 10 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 11 | <code>&lt;div class=&quot;elysia-scene relative flex-1 flex items-center justify-center px-4 py-10 overflow-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 12 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 13 | <code>    &lt;div class=&quot;absolute inset-0 bg-[linear-gradient(135deg,_#FFE4F1_0%,_#FFF0F5_30%,_#F3E5F5_65%,_#FCE4EC_100%)]&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 14 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 15 | <code>    &lt;div class=&quot;pointer-events-none absolute -top-24 -right-16 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_#FFB6D9_0%,_transparent_70%)] opacity-50 blur-2xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 16 | <code>    &lt;div class=&quot;pointer-events-none absolute -bottom-32 -left-20 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,_#E8D5F2_0%,_transparent_70%)] opacity-60 blur-2xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 17 | <code>    &lt;div class=&quot;pointer-events-none absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle,_#FFD9E8_0%,_transparent_70%)] opacity-40 blur-3xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 18 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 19 | <code>    &lt;div class=&quot;pointer-events-none absolute inset-0 overflow-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 20 | <code>        &lt;span class=&quot;absolute top-[10%] left-[12%] h-1.5 w-1.5 rounded-full bg-pink-300/70 animate-pulse&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 21 | <code>        &lt;span class=&quot;absolute top-[25%] right-[10%] h-1 w-1 rounded-full bg-purple-300/60 animate-pulse&quot; style=&quot;animation-delay:0.7s&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 22 | <code>        &lt;span class=&quot;absolute bottom-[18%] left-[6%] h-2 w-2 rounded-full bg-pink-200/60 animate-pulse&quot; style=&quot;animation-delay:1.2s&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 23 | <code>        &lt;span class=&quot;absolute top-[60%] right-[8%] h-1 w-1 rounded-full bg-rose-300/70 animate-pulse&quot; style=&quot;animation-delay:0.4s&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 24 | <code>        &lt;svg class=&quot;absolute top-[14%] right-[14%] h-7 w-7 text-pink-300/40 rotate-12&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 25 | <code>        &lt;svg class=&quot;absolute bottom-[22%] right-[18%] h-6 w-6 text-purple-300/40 -rotate-45&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 26 | <code>        &lt;svg class=&quot;absolute top-[55%] left-[5%] h-5 w-5 text-pink-200/50 rotate-45&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 27 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 28 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 29 | <code>    &lt;a href=&quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot; class=&quot;absolute top-6 right-6 z-20 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/50 backdrop-blur-md px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-pink-700/70 transition-all hover:bg-white/80 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(236,72,153,0.25)]&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 30 | <code>        &lt;svg class=&quot;h-3.5 w-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M10 19l-7-7m0 0l7-7m-7 7h18&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 31 | <code>        密码登录</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 32 | <code>    &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 33 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 34 | <code>    &lt;div class=&quot;relative z-10 w-full max-w-[440px]&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 35 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 36 | <code>        &lt;div class=&quot;absolute -inset-1 rounded-[32px] bg-gradient-to-br from-pink-300/40 via-fuchsia-200/30 to-purple-300/40 blur-xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 37 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 38 | <code>        &lt;div class=&quot;relative rounded-[28px] border border-white/70 bg-white/75 backdrop-blur-2xl shadow-[0_30px_80px_-20px_rgba(236,72,153,0.25),0_0_0_1px_rgba(255,255,255,0.6)_inset] p-8 lg:p-10&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 39 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 40 | <code>            &lt;div class=&quot;absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 41 | <code>                &lt;span class=&quot;h-1 w-8 rounded-full bg-gradient-to-r from-transparent to-pink-300&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 42 | <code>                &lt;svg class=&quot;h-5 w-5 text-pink-400 drop-shadow-[0_2px_4px_rgba(236,72,153,0.4)]&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 43 | <code>                &lt;span class=&quot;h-1 w-8 rounded-full bg-gradient-to-l from-transparent to-pink-300&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 44 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 45 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 46 | <code>            &lt;div class=&quot;flex flex-col items-center mb-7&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 47 | <code>                &lt;div class=&quot;relative mb-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 48 | <code>                    &lt;div class=&quot;absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-300 to-purple-300 blur-md opacity-60&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 49 | <code>                    &lt;div class=&quot;relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 via-rose-400 to-purple-400 shadow-[0_10px_30px_-8px_rgba(236,72,153,0.5)]&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 50 | <code>                        &lt;svg class=&quot;h-6 w-6 text-white&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 51 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 52 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 53 | <code>                &lt;p class=&quot;font-heading text-lg font-bold text-pink-900/90 tracking-wide&quot;&gt;景艺大图书馆&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 54 | <code>                &lt;p class=&quot;mt-1 text-[10px] uppercase tracking-[0.32em] text-pink-400/70&quot;&gt;邮箱验证码登录&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 55 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 56 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 57 | <code>            &lt;div class=&quot;text-center mb-7&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 58 | <code>                &lt;h1 class=&quot;font-heading text-[28px] font-bold leading-tight text-pink-900&quot;&gt;</code> | HTML `h1` 元素，构成当前页面的结构、内容或交互区域。 |
| 59 | <code>                    免密登录&lt;span class=&quot;italic font-normal bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent&quot;&gt; ♡&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 60 | <code>                &lt;/h1&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 61 | <code>                &lt;p class=&quot;mt-2 text-[13px] leading-6 text-pink-800/55&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 62 | <code>                    输入邮箱，接收验证码即可快速登录</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 63 | <code>                &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 64 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 65 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 66 | <code>            {% with messages = get_flashed_messages(with_categories=true) %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 67 | <code>            {% if messages %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 68 | <code>            &lt;div class=&quot;mb-6 space-y-2.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 69 | <code>                {% for category, message in messages %}</code> | Jinja 循环开始，遍历后端传入的数据列表生成重复结构。 |
| 70 | <code>                &lt;div class=&quot;flex items-center gap-2.5 rounded-xl border px-4 py-3 text-[12px] font-semibold {% if category in [&#x27;danger&#x27;, &#x27;error&#x27;] %}border-rose-200 bg-rose-50/80 text-rose-700{% elif category == &#x27;success&#x27; %}border-emerald-200 bg-emerald-50/80 text-emerald-700{% else %}border-amber-200 bg-amber-50/80 text-amber-700{% endif %}&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 71 | <code>                    {% if category in [&#x27;danger&#x27;, &#x27;error&#x27;] %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 72 | <code>                    &lt;svg class=&quot;h-4 w-4 shrink-0&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4a2 2 0 00-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 73 | <code>                    {% elif category == &#x27;success&#x27; %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 74 | <code>                    &lt;svg class=&quot;h-4 w-4 shrink-0&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 75 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 76 | <code>                    &lt;svg class=&quot;h-4 w-4 shrink-0&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 77 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 78 | <code>                    &lt;span&gt;{{ message }}&lt;/span&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 79 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 80 | <code>                {% endfor %}</code> | 结束当前 Jinja 循环块。 |
| 81 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 82 | <code>            {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 83 | <code>            {% endwith %}</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 84 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 85 | <code>            &lt;form id=&quot;emailLoginForm&quot; method=&quot;POST&quot; action=&quot;{{ url_for(&#x27;auth.login_email&#x27;) }}&quot; class=&quot;space-y-5&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 86 | <code>                &lt;input type=&quot;hidden&quot; name=&quot;csrf_token&quot; value=&quot;{{ auth_action_csrf_token }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 87 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 88 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 89 | <code>                    &lt;label for=&quot;email&quot; class=&quot;mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-pink-700/65&quot;&gt;邮箱地址&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 90 | <code>                    &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 91 | <code>                        &lt;span class=&quot;pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-600&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 92 | <code>                            &lt;svg class=&quot;h-5 w-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 93 | <code>                        &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 94 | <code>                        &lt;input name=&quot;email&quot; id=&quot;email&quot; type=&quot;email&quot; autocomplete=&quot;email&quot; required</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 95 | <code>                               class=&quot;w-full rounded-xl border border-pink-200/60 bg-white/60 backdrop-blur-sm pl-11 pr-4 py-3 text-sm font-medium text-pink-900 outline-none transition-all placeholder:text-pink-300/70 hover:bg-white/80 hover:border-pink-300 focus:bg-white focus:border-pink-400 focus:shadow-[0_0_0_4px_rgba(236,72,153,0.12)]&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 96 | <code>                               placeholder=&quot;请输入注册时的邮箱&quot; value=&quot;{{ form_email or &#x27;&#x27; }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 97 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 98 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 99 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 100 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 101 | <code>                    &lt;label for=&quot;code&quot; class=&quot;mb-1.5 block text-[11px] font-bold uppercase tracking-[0.16em] text-pink-700/65&quot;&gt;验证码&lt;/label&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 102 | <code>                    &lt;div class=&quot;flex gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 103 | <code>                        &lt;div class=&quot;relative flex-1&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 104 | <code>                            &lt;span class=&quot;pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-pink-600&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 105 | <code>                                &lt;svg class=&quot;h-5 w-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2.5&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; d=&quot;M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 106 | <code>                            &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 107 | <code>                            &lt;input name=&quot;code&quot; id=&quot;code&quot; type=&quot;text&quot; inputmode=&quot;numeric&quot; maxlength=&quot;6&quot; autocomplete=&quot;one-time-code&quot; required</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 108 | <code>                                   class=&quot;w-full rounded-xl border border-pink-200/60 bg-white/60 backdrop-blur-sm pl-11 pr-4 py-3 text-sm font-medium text-pink-900 outline-none transition-all placeholder:text-pink-300/70 hover:bg-white/80 hover:border-pink-300 focus:bg-white focus:border-pink-400 focus:shadow-[0_0_0_4px_rgba(236,72,153,0.12)] tracking-[0.3em]&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 109 | <code>                                   placeholder=&quot;6位验证码&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 110 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 111 | <code>                        &lt;button type=&quot;button&quot; id=&quot;sendCodeBtn&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 112 | <code>                                class=&quot;shrink-0 rounded-xl border border-pink-300/60 bg-white/60 backdrop-blur-sm px-4 py-3 text-[12px] font-bold text-pink-600 transition-all hover:bg-white/80 hover:border-pink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 disabled:opacity-50 disabled:cursor-not-allowed&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 113 | <code>                            发送验证码</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 114 | <code>                        &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 115 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 116 | <code>                    &lt;p id=&quot;codeMsg&quot; class=&quot;mt-1.5 text-[11px] font-medium hidden&quot;&gt;&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 117 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 118 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 119 | <code>                &lt;button type=&quot;submit&quot;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 120 | <code>                        class=&quot;group relative inline-flex w-full min-h-[50px] items-center justify-center gap-2.5 overflow-hidden rounded-2xl px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-300/50&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 121 | <code>                    &lt;span class=&quot;absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 122 | <code>                    &lt;span class=&quot;absolute inset-0 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 123 | <code>                    &lt;span class=&quot;absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/80 to-transparent&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 124 | <code>                    &lt;svg class=&quot;relative z-10 h-4 w-4 drop-shadow&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 2c1.5 3 4 4.5 7 5-3 .5-5.5 2-7 5-1.5-3-4-4.5-7-5 3-.5 5.5-2 7-5z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 125 | <code>                    &lt;span class=&quot;relative z-10 tracking-widest drop-shadow&quot;&gt;登 录&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 126 | <code>                    &lt;svg class=&quot;relative z-10 h-4 w-4 drop-shadow group-hover:translate-x-1 transition-transform&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M14 5l7 7m0 0l-7 7m7-7H3&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 127 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 128 | <code>            &lt;/form&gt;</code> | 表单结构结束。 |
| 129 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 130 | <code>            &lt;div class=&quot;mt-7 flex items-center gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 131 | <code>                &lt;span class=&quot;h-px flex-1 bg-gradient-to-r from-transparent to-pink-200&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 132 | <code>                &lt;span class=&quot;text-[10px] font-bold uppercase tracking-[0.22em] text-pink-400/60&quot;&gt;或&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 133 | <code>                &lt;span class=&quot;h-px flex-1 bg-gradient-to-l from-transparent to-pink-200&quot;&gt;&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 134 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 135 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 136 | <code>            &lt;p class=&quot;mt-5 text-center text-[13px] text-pink-800/55&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 137 | <code>                还没有账号？</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 138 | <code>                &lt;a href=&quot;{{ url_for(&#x27;auth.register&#x27;) }}&quot; class=&quot;font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent hover:from-pink-600 hover:to-purple-600 transition-all&quot;&gt;立即注册&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 139 | <code>            &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 140 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 141 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 142 | <code>        &lt;p class=&quot;mt-5 text-center text-[10px] uppercase tracking-[0.32em] text-pink-400/55 font-mono&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 143 | <code>            ─── ♡ 欢迎来到我们的图书馆 ♡ ───</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 144 | <code>        &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 145 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 146 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 147 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 148 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 149 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 150 | <code>{% block scripts %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 151 | <code>&lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 152 | <code>(function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 153 | <code>    var sendBtn = document.getElementById(&#x27;sendCodeBtn&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 154 | <code>    var emailInput = document.getElementById(&#x27;email&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 155 | <code>    var codeMsg = document.getElementById(&#x27;codeMsg&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 156 | <code>    var csrfToken = {{ auth_action_csrf_token|tojson }};</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 157 | <code>    var countdown = 0;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 158 | <code>    var timer = null;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 159 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 160 | <code>    function showMsg(text, type) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 161 | <code>        codeMsg.textContent = text;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 162 | <code>        codeMsg.className = &#x27;mt-1.5 text-[11px] font-medium &#x27; +</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 163 | <code>            (type === &#x27;error&#x27; ? &#x27;text-rose-600&#x27; : &#x27;text-emerald-600&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 164 | <code>        codeMsg.classList.remove(&#x27;hidden&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 165 | <code>    }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 166 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 167 | <code>    function startCountdown(sec) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 168 | <code>        countdown = sec;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 169 | <code>        sendBtn.disabled = true;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 170 | <code>        sendBtn.textContent = countdown + &#x27;s&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 171 | <code>        timer = setInterval(function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 172 | <code>            countdown--;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 173 | <code>            if (countdown &lt;= 0) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 174 | <code>                clearInterval(timer);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 175 | <code>                sendBtn.disabled = false;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 176 | <code>                sendBtn.textContent = &#x27;发送验证码&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 177 | <code>            } else {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 178 | <code>                sendBtn.textContent = countdown + &#x27;s&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 179 | <code>            }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 180 | <code>        }, 1000);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 181 | <code>    }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 182 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 183 | <code>    sendBtn.addEventListener(&#x27;click&#x27;, function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 184 | <code>        var email = emailInput.value.trim();</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 185 | <code>        if (!email) { showMsg(&#x27;请先输入邮箱地址&#x27;, &#x27;error&#x27;); return; }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 186 | <code>        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showMsg(&#x27;邮箱格式不正确&#x27;, &#x27;error&#x27;); return; }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 187 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 188 | <code>        sendBtn.disabled = true;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 189 | <code>        sendBtn.textContent = &#x27;发送中...&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 190 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 191 | <code>        fetch(&#x27;{{ url_for(&quot;auth.login_email_send_code&quot;) }}&#x27;, {</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 192 | <code>            method: &#x27;POST&#x27;,</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 193 | <code>            headers: { &#x27;Content-Type&#x27;: &#x27;application/json&#x27;, &#x27;X-CSRF-Token&#x27;: csrfToken },</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 194 | <code>            body: JSON.stringify({ email: email })</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 195 | <code>        })</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 196 | <code>        .then(function(r) { return r.json(); })</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 197 | <code>        .then(function(data) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 198 | <code>            if (data.success) {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 199 | <code>                showMsg(data.message || &#x27;验证码已发送&#x27;, &#x27;success&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 200 | <code>                startCountdown(60);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 201 | <code>            } else {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 202 | <code>                showMsg(data.message || &#x27;发送失败&#x27;, &#x27;error&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 203 | <code>                sendBtn.disabled = false;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 204 | <code>                sendBtn.textContent = &#x27;发送验证码&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 205 | <code>            }</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 206 | <code>        })</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 207 | <code>        .catch(function() {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 208 | <code>            showMsg(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 209 | <code>            sendBtn.disabled = false;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 210 | <code>            sendBtn.textContent = &#x27;发送验证码&#x27;;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 211 | <code>        });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 212 | <code>    });</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 213 | <code>})();</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 214 | <code>&lt;/script&gt;</code> | 结束当前脚本块。 |
| 215 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
