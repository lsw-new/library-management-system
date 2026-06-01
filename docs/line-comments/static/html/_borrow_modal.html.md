# static/html/_borrow_modal.html

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>&lt;!--</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 2 | <code>    借阅预约弹窗组件 (_borrow_modal.html)</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 3 | <code>    共享组件，可被其他页面引入使用</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 4 | <code>    提供图书预约功能，包含日期选择和表单验证</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 5 | <code>--&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 6 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 7 | <code>&lt;!-- 弹窗容器：全屏遮罩层，默认隐藏 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 8 | <code>&lt;div id=&quot;borrowModal&quot; class=&quot;hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;borrow-modal-title&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 9 | <code>    &lt;!-- 弹窗主体：白色卡片，圆角，阴影，动画效果 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 10 | <code>    &lt;div class=&quot;bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 11 | <code>        &lt;!-- ==================== 弹窗头部 ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 12 | <code>        &lt;div class=&quot;px-6 py-4 border-b border-gray-200&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 13 | <code>            &lt;div class=&quot;flex items-center justify-between&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 14 | <code>                &lt;!-- 标题 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 15 | <code>                &lt;h3 id=&quot;borrow-modal-title&quot; class=&quot;text-xl font-heading font-semibold text-brand-deep&quot;&gt;预约图书&lt;/h3&gt;</code> | HTML `h3` 元素，构成当前页面的结构、内容或交互区域。 |
| 16 | <code>                &lt;!-- 关闭按钮 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 17 | <code>                &lt;button onclick=&quot;closeBorrowModal()&quot; class=&quot;p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 cursor-pointer&quot; aria-label=&quot;关闭预约弹窗&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 18 | <code>                    &lt;!-- X 图标 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 19 | <code>                    &lt;svg class=&quot;w-5 h-5 text-gray-500&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 20 | <code>                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M6 18L18 6M6 6l12 12&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 21 | <code>                    &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 22 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 23 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 24 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 25 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 26 | <code>        &lt;!-- ==================== 弹窗内容 ==================== --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 27 | <code>        &lt;div class=&quot;p-6&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 28 | <code>            &lt;!-- 图书信息展示区 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 29 | <code>            &lt;div class=&quot;flex items-start gap-4 mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 30 | <code>                &lt;!-- 图书图标 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 31 | <code>                &lt;div class=&quot;flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-brand-primary&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 32 | <code>                    &lt;svg class=&quot;w-6 h-6&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 33 | <code>                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 34 | <code>                    &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 35 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 36 | <code>                &lt;!-- 图书详情：书名和库存 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 37 | <code>                &lt;div class=&quot;flex-1 min-w-0&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 38 | <code>                    &lt;!-- 书名：动态填充，文本溢出截断 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 39 | <code>                    &lt;p class=&quot;text-lg font-semibold text-gray-900 truncate&quot; id=&quot;modalBookTitle&quot;&gt;&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 40 | <code>                    &lt;!-- 库存信息 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 41 | <code>                    &lt;p class=&quot;text-sm text-gray-500 mt-1&quot;&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 42 | <code>                        剩余库存: &lt;span class=&quot;font-semibold text-green-600&quot; id=&quot;modalBookStock&quot;&gt;&lt;/span&gt; 本</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 43 | <code>                    &lt;/p&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 44 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 45 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 46 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 47 | <code>            &lt;!-- 借阅时间段选择 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 48 | <code>            &lt;div class=&quot;space-y-4 mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 49 | <code>                &lt;!-- 借阅开始时间（固定为当天） --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 50 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 51 | <code>                    &lt;label class=&quot;block text-sm font-medium text-gray-700 mb-2&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 52 | <code>                        &lt;svg class=&quot;w-4 h-4 inline-block mr-1 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 53 | <code>                            &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 54 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 55 | <code>                        借阅开始时间</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 56 | <code>                    &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 57 | <code>                    &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 58 | <code>                        &lt;input type=&quot;text&quot; id=&quot;borrowStartDateDisplay&quot; readonly</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 59 | <code>                               class=&quot;w-full px-4 py-2.5 border-2 border-purple-200 rounded-xl bg-gray-50 text-gray-600 text-sm cursor-default&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 60 | <code>                        &lt;input type=&quot;hidden&quot; id=&quot;borrowStartDate&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 61 | <code>                        &lt;div id=&quot;calendarStart&quot; class=&quot;hidden&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 62 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 63 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 64 | <code>                &lt;!-- 预计归还时间 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 65 | <code>                &lt;div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 66 | <code>                    &lt;label class=&quot;block text-sm font-medium text-gray-700 mb-2&quot;&gt;</code> | HTML `label` 元素，构成当前页面的结构、内容或交互区域。 |
| 67 | <code>                        &lt;svg class=&quot;w-4 h-4 inline-block mr-1 text-purple-400&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 68 | <code>                            &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 69 | <code>                        &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 70 | <code>                        预计归还时间 &lt;span class=&quot;text-red-500&quot;&gt;*&lt;/span&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 71 | <code>                    &lt;/label&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 72 | <code>                    &lt;div class=&quot;relative&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 73 | <code>                        &lt;input type=&quot;text&quot; id=&quot;borrowEndDateDisplay&quot; readonly placeholder=&quot;选择归还日期&quot;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 74 | <code>                               onclick=&quot;toggleCalendar(&#x27;end&#x27;)&quot;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 75 | <code>                               class=&quot;w-full px-4 py-2.5 border-2 border-purple-200 rounded-xl bg-white text-gray-800 focus:border-purple-400 focus:outline-none transition-colors duration-200 text-sm cursor-pointer&quot;&gt;</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 76 | <code>                        &lt;input type=&quot;hidden&quot; id=&quot;borrowEndDate&quot;&gt;</code> | 输入控件，接收用户填写或隐藏提交的数据。 |
| 77 | <code>                        &lt;div id=&quot;calendarEnd&quot; class=&quot;hidden absolute z-50 top-full mt-1 left-0 w-full&quot;&gt;&lt;/div&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 78 | <code>                    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 79 | <code>                    &lt;p id=&quot;borrowDuration&quot; class=&quot;text-xs text-gray-400 mt-1.5&quot;&gt;&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 80 | <code>                    &lt;p id=&quot;borrowDateError&quot; class=&quot;text-xs text-red-500 mt-1 hidden&quot;&gt;&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 81 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 82 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 83 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 84 | <code>            &lt;!-- 温馨提示框 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 85 | <code>            &lt;div class=&quot;bg-pink-50 border border-pink-200 rounded-xl p-3.5 mb-5&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 86 | <code>                &lt;div class=&quot;flex items-start gap-2&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 87 | <code>                    &lt;!-- 信息图标 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 88 | <code>                    &lt;svg class=&quot;w-4 h-4 text-brand-primary mt-0.5 flex-shrink-0&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;</code> | HTML `svg` 元素，构成当前页面的结构、内容或交互区域。 |
| 89 | <code>                        &lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot;/&gt;</code> | HTML `path` 元素，构成当前页面的结构、内容或交互区域。 |
| 90 | <code>                    &lt;/svg&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 91 | <code>                    &lt;!-- 提示文字 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 92 | <code>                    &lt;p class=&quot;text-xs text-pink-700 leading-relaxed&quot;&gt;预约成功后请等待管理员审核，审核通过后即可前往领取图书。请在预计归还时间前归还。&lt;/p&gt;</code> | HTML `p` 元素，构成当前页面的结构、内容或交互区域。 |
| 93 | <code>                &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 94 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 95 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 96 | <code>            &lt;!-- 操作按钮组 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 97 | <code>            &lt;div class=&quot;flex gap-3&quot;&gt;</code> | HTML `div` 元素，构成当前页面的结构、内容或交互区域。 |
| 98 | <code>                &lt;!-- 取消按钮：灰色，关闭弹窗 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 99 | <code>                &lt;button onclick=&quot;closeBorrowModal()&quot; class=&quot;flex-1 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200 cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 100 | <code>                    取消</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 101 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 102 | <code>                &lt;!-- 确认按钮：粉色，提交预约 --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 103 | <code>                &lt;button id=&quot;confirmBorrowBtn&quot; onclick=&quot;confirmBorrow()&quot; class=&quot;flex-1 px-4 py-3 text-sm font-medium text-white bg-brand-primary hover:bg-pink-600 rounded-xl shadow-sm transition-colors duration-200 cursor-pointer&quot;&gt;</code> | 按钮控件，触发提交、弹窗、切换或其他页面动作。 |
| 104 | <code>                    确认预约</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 105 | <code>                &lt;/button&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 106 | <code>            &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 107 | <code>        &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 108 | <code>    &lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 109 | <code>&lt;/div&gt;</code> | HTML 闭合标签，结束前面打开的页面结构。 |
| 110 | <code> </code> | 空行，用于分隔 HTML/Jinja 代码块，提升阅读层次。 |
| 111 | <code>&lt;!-- 引入弹窗专用 JavaScript --&gt;</code> | HTML 注释，标记页面结构分区或模板意图。 |
| 112 | <code>&lt;script&gt;</code> | 加载或开始脚本逻辑，为页面提供交互能力。 |
| 113 | <code>window.borrowModalConfig = Object.assign({}, window.borrowModalConfig || {}, {</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 114 | <code>    booksStockUrl: {{ url_for(&quot;user.books_stock&quot;)|tojson }},</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 115 | <code>    recordsUrl: {{ url_for(&quot;user.borrow_records&quot;)|tojson }},</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 116 | <code>    csrfToken: {{ borrow_action_csrf_token|tojson }}</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
| 117 | <code>});</code> | 页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。 |
| 118 | <code>&lt;/script&gt;</code> | 结束当前脚本块。 |
| 119 | <code>&lt;script src=&quot;{{ url_for(&#x27;static&#x27;, filename=&#x27;js/borrow-modal.js&#x27;) }}&quot;&gt;&lt;/script&gt;</code> | 输出 Jinja 表达式，把后端数据或路由结果渲染到页面。 |
