# static/html/index.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>{% extends &quot;base.html&quot; %}</code> | Jinja 模板继承声明，复用基础页面骨架。 |
| 2 | <code>{% block title %}首页 - 景艺大图书馆{% endblock %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 3 | <code>{% block head_extra %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 4 | <code>&lt;link rel=&quot;stylesheet&quot; href=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;css/index.css&#x27;) }}&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 5 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 6 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 7 | <code>{% block content %}</code> | Jinja block 开始，向基础模板填充指定区域内容。 |
| 8 | <code>&lt;!-- ============ 加载占位 ============ --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 9 | <code>&lt;div id=&quot;page-loader&quot; class=&quot;fixed inset-0 z-[9999] flex items-center justify-center bg-brand-bg&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 10 | <code>    &lt;div class=&quot;text-center space-y-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 11 | <code>        &lt;div class=&quot;relative w-16 h-16 mx-auto&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 12 | <code>            &lt;div class=&quot;absolute inset-0 rounded-full border-2 border-brand-primary/15&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 13 | <code>            &lt;div class=&quot;absolute inset-0 rounded-full border-2 border-transparent border-t-brand-primary animate-spin&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 14 | <code>            &lt;div class=&quot;absolute inset-2 rounded-full border-2 border-transparent border-b-brand-accent&quot; style=&quot;animation:spin-rev 1.5s linear infinite;&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 15 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 16 | <code>        &lt;p class=&quot;font-heading font-bold text-brand-deep&quot;&gt;景艺大图书馆&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 17 | <code>        &lt;p class=&quot;text-xs text-brand-deep/40&quot;&gt;正在为您打开知识之门...&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 18 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 19 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 20 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 21 | <code>&lt;div id=&quot;main-content&quot; class=&quot;opacity-0 space-y-16 md:space-y-24&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 22 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 23 | <code>    &lt;!-- ==================== Hero ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 24 | <code>    &lt;section class=&quot;relative&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 25 | <code>        &lt;!-- 背景柔光 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 26 | <code>        &lt;div class=&quot;pointer-events-none absolute -top-20 right-0 h-[520px] w-[520px] rounded-full bg-brand-primary/10 blur-3xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 27 | <code>        &lt;div class=&quot;pointer-events-none absolute -bottom-24 -left-20 h-[420px] w-[420px] rounded-full bg-brand-accent/10 blur-3xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 28 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 29 | <code>        &lt;div class=&quot;relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 30 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 31 | <code>            &lt;!-- 左侧文字 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 32 | <code>            &lt;div class=&quot;space-y-7&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 33 | <code>                &lt;h1 data-reveal=&quot;hero&quot; data-delay=&quot;0&quot; class=&quot;font-heading font-bold leading-[1.05] text-brand-deep reveal-hidden&quot; style=&quot;font-size:clamp(2.75rem,6.2vw,5.25rem);&quot;&gt;</code> | HTML `h1` 元素，构成当前页面的结构、内容或交互区域。 |
| 34 | <code>                    在书页之间&lt;br&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 35 | <code>                    &lt;span class=&quot;italic relative inline-block&quot;&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 36 | <code>                        &lt;span class=&quot;bg-gradient-to-r from-brand-primary via-rose-500 to-brand-accent bg-clip-text text-transparent&quot;&gt;遇见自己&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 37 | <code>                        &lt;svg class=&quot;absolute -bottom-2 left-0 w-full&quot; height=&quot;14&quot; viewBox=&quot;0 0 320 14&quot; fill=&quot;none&quot; preserveAspectRatio=&quot;none&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 38 | <code>                            &lt;path d=&quot;M2 9C70 3 160 3 318 8&quot; stroke=&quot;url(#under)&quot; stroke-width=&quot;3&quot; stroke-linecap=&quot;round&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 39 | <code>                            &lt;defs&gt;</code> | HTML `defs` 元素，构成当前页面的结构、内容或交互区域。 |
| 40 | <code>                                &lt;linearGradient id=&quot;under&quot; x1=&quot;0&quot; y1=&quot;0&quot; x2=&quot;320&quot; y2=&quot;0&quot;&gt;</code> | HTML `lineargradient` 元素，构成当前页面的结构、内容或交互区域。 |
| 41 | <code>                                    &lt;stop offset=&quot;0&quot; stop-color=&quot;#EC4899&quot;/&gt;</code> | HTML `stop` 元素，构成当前页面的结构、内容或交互区域。 |
| 42 | <code>                                    &lt;stop offset=&quot;1&quot; stop-color=&quot;#8B5CF6&quot;/&gt;</code> | HTML `stop` 元素，构成当前页面的结构、内容或交互区域。 |
| 43 | <code>                                &lt;/linearGradient&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 44 | <code>                            &lt;/defs&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 45 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 46 | <code>                    &lt;/span&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 47 | <code>                &lt;/h1&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 48 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 49 | <code>                &lt;p data-reveal=&quot;hero&quot; data-delay=&quot;1&quot; class=&quot;max-w-xl text-base leading-[1.85] text-brand-deep/65 reveal-hidden&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 50 | <code>                    景艺大图书馆为全校师生提供便捷的图书检索、在线预约与借阅管理服务。&lt;br class=&quot;hidden md:block&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 51 | <code>                    借一本好书，开一扇窗 — 从这里开始你的阅读旅程。</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 52 | <code>                &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 53 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 54 | <code>                &lt;!-- CTA --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 55 | <code>                &lt;div data-reveal=&quot;hero&quot; data-delay=&quot;2&quot; class=&quot;flex flex-wrap gap-3 pt-1 reveal-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 56 | <code>                    {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 57 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;btn-primary group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-pink-lg&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 58 | <code>                        进入馆藏书库</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 59 | <code>                        &lt;svg class=&quot;h-4 w-4 transition-transform group-hover:translate-x-1&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M13 7l5 5-5 5M6 7l5 5-5 5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 60 | <code>                    &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 61 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.borrow_records&#x27;) }}&quot; class=&quot;inline-flex items-center gap-2 rounded-2xl border-2 border-pink-100 bg-white/70 px-6 py-4 text-sm font-bold text-brand-deep/75 transition-all hover:border-brand-primary/40 hover:text-brand-primary backdrop-blur-sm&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 62 | <code>                        &lt;svg class=&quot;h-4 w-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 63 | <code>                        借阅足迹</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 64 | <code>                    &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 65 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 66 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot; class=&quot;btn-primary group inline-flex items-center gap-3 rounded-2xl px-7 py-4 text-sm font-bold text-white shadow-pink-lg&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 67 | <code>                        读者登录</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 68 | <code>                        &lt;svg class=&quot;h-4 w-4 transition-transform group-hover:translate-x-1&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M13 7l5 5-5 5M6 7l5 5-5 5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 69 | <code>                    &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 70 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;auth.register&#x27;) }}&quot; class=&quot;inline-flex items-center rounded-2xl border-2 border-brand-primary/25 bg-white/60 px-7 py-4 text-sm font-bold text-brand-primary transition-all hover:bg-brand-primary/5 hover:border-brand-primary/40 backdrop-blur-sm&quot;&gt;注册账号&lt;/a&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 71 | <code>                    &lt;a href=&quot;{{ url_for(&#x27;user.guest_books&#x27;) }}&quot; class=&quot;inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold text-brand-deep/55 transition-all hover:text-brand-primary&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 72 | <code>                        &lt;svg class=&quot;h-4 w-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 12a3 3 0 11-6 0 3 3 0 016 0z&quot;/&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 73 | <code>                        游客浏览</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 74 | <code>                    &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 75 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 76 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 77 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 78 | <code>                &lt;!-- 数据条 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 79 | <code>                &lt;div data-reveal=&quot;hero&quot; data-delay=&quot;3&quot; class=&quot;grid grid-cols-3 gap-4 border-t border-pink-100 pt-7 max-w-md reveal-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 80 | <code>                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 81 | <code>                        &lt;p class=&quot;font-heading text-3xl md:text-4xl font-bold text-brand-deep leading-none&quot;&gt;10K&lt;span class=&quot;text-brand-primary&quot;&gt;+&lt;/span&gt;&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 82 | <code>                        &lt;p class=&quot;mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep/40&quot;&gt;馆藏图书&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 83 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 84 | <code>                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 85 | <code>                        &lt;p class=&quot;font-heading text-3xl md:text-4xl font-bold text-brand-deep leading-none&quot;&gt;50&lt;span class=&quot;text-brand-accent&quot;&gt;+&lt;/span&gt;&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 86 | <code>                        &lt;p class=&quot;mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep/40&quot;&gt;学科分类&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 87 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 88 | <code>                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 89 | <code>                        &lt;p class=&quot;font-heading text-3xl md:text-4xl font-bold text-brand-deep leading-none&quot;&gt;24/7&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 90 | <code>                        &lt;p class=&quot;mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-deep/40&quot;&gt;在线服务&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 91 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 92 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 93 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 94 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 95 | <code>            &lt;!-- 右侧：CSS 书脊堆插画 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 96 | <code>            &lt;div data-reveal=&quot;bookspine&quot; class=&quot;relative hidden lg:flex items-center justify-center reveal-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 97 | <code>                &lt;div class=&quot;relative w-full max-w-[460px] aspect-square&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 98 | <code>                    &lt;!-- 装饰圆 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 99 | <code>                    &lt;div class=&quot;absolute inset-0 rounded-full bg-gradient-to-br from-pink-50 via-white to-purple-50 shadow-glass&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 100 | <code>                    &lt;div class=&quot;absolute inset-6 rounded-full border border-dashed border-brand-primary/20&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 101 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 102 | <code>                    &lt;!-- 书脊堆叠 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 103 | <code>                    &lt;div class=&quot;absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 104 | <code>                        &lt;div class=&quot;book-spine&quot; style=&quot;--c1:#EC4899;--c2:#DB2777;height:240px;width:46px;transform:rotate(-3deg);&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 105 | <code>                            &lt;span class=&quot;book-title&quot;&gt;阅读之书&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 106 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 107 | <code>                        &lt;div class=&quot;book-spine&quot; style=&quot;--c1:#831843;--c2:#9F1239;height:280px;width:54px;&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 108 | <code>                            &lt;span class=&quot;book-title&quot;&gt;鸬鹚集&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 109 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 110 | <code>                        &lt;div class=&quot;book-spine&quot; style=&quot;--c1:#F59E0B;--c2:#D97706;height:200px;width:40px;transform:rotate(2deg);&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 111 | <code>                            &lt;span class=&quot;book-title&quot;&gt;古典&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 112 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 113 | <code>                        &lt;div class=&quot;book-spine&quot; style=&quot;--c1:#8B5CF6;--c2:#6D28D9;height:260px;width:50px;transform:rotate(-1deg);&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 114 | <code>                            &lt;span class=&quot;book-title&quot;&gt;图书馆&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 115 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 116 | <code>                        &lt;div class=&quot;book-spine&quot; style=&quot;--c1:#FBCFE8;--c2:#F9A8D4;height:220px;width:44px;transform:rotate(4deg);&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 117 | <code>                            &lt;span class=&quot;book-title book-title-dark&quot;&gt;花期&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 118 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 119 | <code>                        &lt;div class=&quot;book-spine&quot; style=&quot;--c1:#0F172A;--c2:#1E293B;height:250px;width:48px;transform:rotate(-2deg);&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 120 | <code>                            &lt;span class=&quot;book-title&quot;&gt;经典&lt;/span&gt;</code> | HTML `span` 元素，构成当前页面的结构、内容或交互区域。 |
| 121 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 122 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 123 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 124 | <code>                    &lt;!-- 环绕标签 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 125 | <code>                    &lt;div class=&quot;absolute inset-0 orbit-ring&quot; style=&quot;animation:orbit 30s linear infinite;&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 126 | <code>                        &lt;div class=&quot;absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 orbit-tag&quot; style=&quot;animation:orbit-counter 30s linear infinite;&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 127 | <code>                            &lt;div class=&quot;rounded-2xl bg-white/95 backdrop-blur p-3 shadow-lg shadow-pink-200/40 ring-1 ring-pink-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 128 | <code>                                &lt;div class=&quot;flex items-center gap-2.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 129 | <code>                                    &lt;div class=&quot;flex h-8 w-8 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 130 | <code>                                        &lt;svg class=&quot;h-4 w-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 131 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 132 | <code>                                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 133 | <code>                                        &lt;p class=&quot;text-[11px] font-bold text-brand-deep leading-none&quot;&gt;智能检索&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 134 | <code>                                        &lt;p class=&quot;text-[10px] text-brand-deep/50 mt-1 leading-none&quot;&gt;秒速定位&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 135 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 136 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 137 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 138 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 139 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 140 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 141 | <code>                    &lt;div class=&quot;absolute inset-0 orbit-ring&quot; style=&quot;animation:orbit 30s linear infinite;animation-delay:-15s;&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 142 | <code>                        &lt;div class=&quot;absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 orbit-tag&quot; style=&quot;animation:orbit-counter 30s linear infinite;animation-delay:-15s;&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 143 | <code>                            &lt;div class=&quot;rounded-2xl bg-white/95 backdrop-blur p-3 shadow-lg shadow-purple-200/40 ring-1 ring-purple-100&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 144 | <code>                                &lt;div class=&quot;flex items-center gap-2.5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 145 | <code>                                    &lt;div class=&quot;flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 146 | <code>                                        &lt;svg class=&quot;h-4 w-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 147 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 148 | <code>                                    &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 149 | <code>                                        &lt;p class=&quot;text-[11px] font-bold text-brand-deep leading-none&quot;&gt;在线预约&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 150 | <code>                                        &lt;p class=&quot;text-[10px] text-brand-deep/50 mt-1 leading-none&quot;&gt;手机一点即借&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 151 | <code>                                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 152 | <code>                                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 153 | <code>                            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 154 | <code>                        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 155 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 156 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 157 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 158 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 159 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 160 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 161 | <code>    &lt;!-- ==================== 服务亮点 ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 162 | <code>    &lt;section&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 163 | <code>        &lt;div data-reveal=&quot;services&quot; data-delay=&quot;0&quot; class=&quot;flex items-end justify-between flex-wrap gap-4 mb-8 md:mb-10 reveal-hidden&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 164 | <code>            &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 165 | <code>                &lt;p class=&quot;text-[11px] font-bold uppercase tracking-[0.22em] text-brand-primary/70&quot;&gt;图书馆服务&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 166 | <code>                &lt;h2 class=&quot;mt-2 font-heading text-3xl md:text-4xl font-bold text-brand-deep&quot;&gt;为每一位读者而设&lt;/h2&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 167 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 168 | <code>            &lt;p class=&quot;max-w-md text-sm leading-7 text-brand-deep/55&quot;&gt;从书目检索到借阅归还，每一步都为你打磨得简单流畅。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 169 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 170 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 171 | <code>        &lt;div class=&quot;grid gap-4 sm:grid-cols-2 lg:grid-cols-4&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 172 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 173 | <code>            &lt;article data-reveal=&quot;services&quot; data-delay=&quot;0&quot; class=&quot;group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-glass ring-1 ring-pink-100 transition-all hover:-translate-y-1 hover:shadow-pink-lg backdrop-blur-sm reveal-hidden&quot;&gt;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 174 | <code>                &lt;div class=&quot;absolute -top-8 -right-8 h-28 w-28 rounded-full bg-brand-primary/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-50&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 175 | <code>                &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 176 | <code>                    &lt;div class=&quot;flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 177 | <code>                        &lt;svg class=&quot;h-6 w-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.8&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 178 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 179 | <code>                    &lt;h3 class=&quot;mt-5 font-heading text-xl font-bold text-brand-deep&quot;&gt;丰富馆藏&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 180 | <code>                    &lt;p class=&quot;mt-2 text-sm leading-6 text-brand-deep/55&quot;&gt;逾万册纸质与电子图书，覆盖艺术、设计、人文等学科。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 181 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 182 | <code>            &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 183 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 184 | <code>            &lt;article data-reveal=&quot;services&quot; data-delay=&quot;0&quot; class=&quot;group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-glass ring-1 ring-purple-100 transition-all hover:-translate-y-1 hover:shadow-pink-lg backdrop-blur-sm reveal-hidden&quot;&gt;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 185 | <code>                &lt;div class=&quot;absolute -top-8 -right-8 h-28 w-28 rounded-full bg-brand-accent/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-50&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 186 | <code>                &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 187 | <code>                    &lt;div class=&quot;flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent transition-all group-hover:bg-brand-accent group-hover:text-white&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 188 | <code>                        &lt;svg class=&quot;h-6 w-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.8&quot; d=&quot;M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 189 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 190 | <code>                    &lt;h3 class=&quot;mt-5 font-heading text-xl font-bold text-brand-deep&quot;&gt;智能检索&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 191 | <code>                    &lt;p class=&quot;mt-2 text-sm leading-6 text-brand-deep/55&quot;&gt;按书名、作者、分类多维查询，结果即时返回。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 192 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 193 | <code>            &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 194 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 195 | <code>            &lt;article data-reveal=&quot;services&quot; data-delay=&quot;0&quot; class=&quot;group relative overflow-hidden rounded-3xl bg-white/80 p-6 shadow-glass ring-1 ring-amber-100 transition-all hover:-translate-y-1 hover:shadow-pink-lg backdrop-blur-sm reveal-hidden&quot;&gt;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 196 | <code>                &lt;div class=&quot;absolute -top-8 -right-8 h-28 w-28 rounded-full bg-amber-400/10 blur-2xl transition-opacity group-hover:opacity-100 opacity-50&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 197 | <code>                &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 198 | <code>                    &lt;div class=&quot;flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-600 transition-all group-hover:bg-amber-500 group-hover:text-white&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 199 | <code>                        &lt;svg class=&quot;h-6 w-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.8&quot; d=&quot;M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 200 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 201 | <code>                    &lt;h3 class=&quot;mt-5 font-heading text-xl font-bold text-brand-deep&quot;&gt;在线借阅&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 202 | <code>                    &lt;p class=&quot;mt-2 text-sm leading-6 text-brand-deep/55&quot;&gt;线上预约、续借、归还提醒一站完成，无需排队。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 203 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 204 | <code>            &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 205 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 206 | <code>            &lt;article data-reveal=&quot;services&quot; data-delay=&quot;0&quot; class=&quot;group relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-primary to-brand-accent p-6 shadow-pink-lg transition-all hover:-translate-y-1 hover:shadow-2xl text-white reveal-hidden&quot;&gt;</code> | HTML `article` 元素，构成当前页面的结构、内容或交互区域。 |
| 207 | <code>                &lt;div class=&quot;absolute -top-12 -right-12 h-32 w-32 rounded-full bg-white/15 blur-2xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 208 | <code>                &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 209 | <code>                    &lt;div class=&quot;flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 210 | <code>                        &lt;svg class=&quot;h-6 w-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;1.8&quot; d=&quot;M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 211 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 212 | <code>                    &lt;h3 class=&quot;mt-5 font-heading text-xl font-bold&quot;&gt;读者社区&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 213 | <code>                    &lt;p class=&quot;mt-2 text-sm leading-6 text-white/80&quot;&gt;书评分享、推荐书单、读者动态，让阅读更有共鸣。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 214 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 215 | <code>            &lt;/article&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 216 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 217 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 218 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 219 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 220 | <code>    &lt;!-- ==================== 收尾 CTA ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 221 | <code>    &lt;section data-reveal=&quot;services&quot; data-delay=&quot;0&quot; class=&quot;relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-brand-deep via-rose-900 to-brand-accent/90 p-8 md:p-14 text-white shadow-pink-lg reveal-hidden&quot;&gt;</code> | HTML `section` 元素，构成当前页面的结构、内容或交互区域。 |
| 222 | <code>        &lt;div class=&quot;pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-primary/30 blur-3xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 223 | <code>        &lt;div class=&quot;pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-brand-accent/30 blur-3xl&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 224 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 225 | <code>        &lt;div class=&quot;relative grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 226 | <code>            &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 227 | <code>                &lt;p class=&quot;text-[11px] font-bold uppercase tracking-[0.22em] text-pink-200/80&quot;&gt;开始阅读&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 228 | <code>                &lt;h2 class=&quot;mt-3 font-heading text-3xl md:text-5xl font-bold leading-tight&quot;&gt;</code> | HTML `h2` 元素，构成当前页面的结构、内容或交互区域。 |
| 229 | <code>                    准备好&lt;span class=&quot;italic text-pink-200&quot;&gt;翻开&lt;/span&gt;下一本书了吗？</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 230 | <code>                &lt;/h2&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 231 | <code>                &lt;p class=&quot;mt-4 max-w-xl text-sm leading-7 text-pink-100/80&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 232 | <code>                    {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 233 | <code>                    馆藏检索、借阅记录与到期提醒随时可用，让每一次阅读都不被遗忘。</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 234 | <code>                    {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 235 | <code>                    注册即可解锁完整馆藏检索、个人借阅记录与到期提醒，让每一次阅读都不被遗忘。</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 236 | <code>                    {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 237 | <code>                &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 238 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 239 | <code>            &lt;div class=&quot;flex flex-col gap-3 md:items-end&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 240 | <code>                {% if current_user.is_authenticated %}</code> | Jinja 条件判断，根据后端传入数据决定渲染内容。 |
| 241 | <code>                &lt;a href=&quot;{{ url_for(&#x27;user.books&#x27;) }}&quot; class=&quot;inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-brand-deep shadow-xl transition-all hover:bg-pink-50 hover:scale-[1.02]&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 242 | <code>                    进入馆藏书库</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 243 | <code>                    &lt;svg class=&quot;h-4 w-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M13 7l5 5-5 5M6 7l5 5-5 5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 244 | <code>                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 245 | <code>                &lt;a href=&quot;{{ url_for(&#x27;user.borrow_records&#x27;) }}&quot; class=&quot;inline-flex w-full md:w-auto items-center justify-center rounded-2xl border-2 border-white/30 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 246 | <code>                    查看借阅记录</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 247 | <code>                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 248 | <code>                {% else %}</code> | Jinja 条件的兜底分支，渲染未命中条件时的内容。 |
| 249 | <code>                &lt;a href=&quot;{{ url_for(&#x27;auth.register&#x27;) }}&quot; class=&quot;inline-flex w-full md:w-auto items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-sm font-bold text-brand-deep shadow-xl transition-all hover:bg-pink-50 hover:scale-[1.02]&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 250 | <code>                    立即注册账号</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 251 | <code>                    &lt;svg class=&quot;h-4 w-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M13 7l5 5-5 5M6 7l5 5-5 5&quot;/&gt;&lt;/svg&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 252 | <code>                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 253 | <code>                &lt;a href=&quot;{{ url_for(&#x27;auth.login&#x27;) }}&quot; class=&quot;inline-flex w-full md:w-auto items-center justify-center rounded-2xl border-2 border-white/30 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10&quot;&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 254 | <code>                    我已有账号 · 登录</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 255 | <code>                &lt;/a&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 256 | <code>                {% endif %}</code> | 结束当前 Jinja 条件块。 |
| 257 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 258 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 259 | <code>    &lt;/section&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 260 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 261 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 262 | <code>&lt;script src=&quot;{{ versioned_url(&#x27;js/index.js&#x27;) }}&quot;&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 263 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 264 | <code>{% endblock %}</code> | Jinja block 结束，关闭当前模板填充区域。 |
| 265 | <code>&lt;/content&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 266 | <code>&lt;/invoke&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
