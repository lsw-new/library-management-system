# static/css/index.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>/* 首页样式 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 3 | <code>@keyframes spin-rev { to { transform: rotate(-360deg); } }</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 4 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 5 | <code>/* 渐显动画 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 6 | <code>.reveal-hidden {</code> | 选择器 `.reveal-hidden` 的样式块开始，下面定义这类元素的视觉表现。 |
| 7 | <code>    opacity: 0;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 8 | <code>    transform: translateY(24px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 9 | <code>}</code> | 结束当前 CSS 规则块。 |
| 10 | <code>.reveal-visible {</code> | 选择器 `.reveal-visible` 的样式块开始，下面定义这类元素的视觉表现。 |
| 11 | <code>    opacity: 1;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 12 | <code>    transform: translateY(0);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 13 | <code>    transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 14 | <code>}</code> | 结束当前 CSS 规则块。 |
| 15 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 16 | <code>/* 书脊样式 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 17 | <code>.book-spine {</code> | 选择器 `.book-spine` 的样式块开始，下面定义这类元素的视觉表现。 |
| 18 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 19 | <code>    border-radius: 4px 4px 2px 2px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 20 | <code>    background: linear-gradient(to right, var(--c1) 0%, var(--c2) 50%, var(--c1) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 21 | <code>    box-shadow:</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 22 | <code>        inset -2px 0 4px rgba(0,0,0,0.18),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 23 | <code>        inset 2px 0 4px rgba(255,255,255,0.12),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 24 | <code>        0 12px 24px rgba(131,24,67,0.18);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 25 | <code>    transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 26 | <code>    transform-origin: bottom center;</code> | 设置 `transform-origin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 27 | <code>}</code> | 结束当前 CSS 规则块。 |
| 28 | <code>.book-spine::before {</code> | 选择器 `.book-spine::before` 的样式块开始，下面定义这类元素的视觉表现。 |
| 29 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 30 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 31 | <code>    inset: 8px 4px;</code> | 设置 `inset` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 32 | <code>    border: 1px solid rgba(255,255,255,0.2);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 33 | <code>    border-radius: 2px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 34 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 35 | <code>}</code> | 结束当前 CSS 规则块。 |
| 36 | <code>.book-spine::after {</code> | 选择器 `.book-spine::after` 的样式块开始，下面定义这类元素的视觉表现。 |
| 37 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 38 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 39 | <code>    left: 0; right: 0;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 40 | <code>    top: 22%; bottom: 22%;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 41 | <code>    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 42 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 43 | <code>}</code> | 结束当前 CSS 规则块。 |
| 44 | <code>.book-spine:hover {</code> | 选择器 `.book-spine:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 45 | <code>    transform: translateY(-12px) rotate(0deg) !important;</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 46 | <code>}</code> | 结束当前 CSS 规则块。 |
| 47 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 48 | <code>.book-title {</code> | 选择器 `.book-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 49 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 50 | <code>    left: 50%;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 51 | <code>    top: 50%;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 52 | <code>    transform: translate(-50%, -50%) rotate(-90deg);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 53 | <code>    white-space: nowrap;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 54 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 55 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 56 | <code>    font-size: 14px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 57 | <code>    color: rgba(255,255,255,0.92);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 58 | <code>    letter-spacing: 0.1em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 59 | <code>    text-shadow: 0 1px 2px rgba(0,0,0,0.25);</code> | 设置 `text-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 60 | <code>}</code> | 结束当前 CSS 规则块。 |
| 61 | <code>.book-title-dark {</code> | 选择器 `.book-title-dark` 的样式块开始，下面定义这类元素的视觉表现。 |
| 62 | <code>    color: rgba(131,24,67,0.85);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 63 | <code>    text-shadow: none;</code> | 设置 `text-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 64 | <code>}</code> | 结束当前 CSS 规则块。 |
| 65 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 66 | <code>/* 环绕动画 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 67 | <code>@keyframes orbit {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 68 | <code>    from { transform: rotate(0deg); }</code> | 设置 `from { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 69 | <code>    to   { transform: rotate(360deg); }</code> | 设置 `to   { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 70 | <code>}</code> | 结束当前 CSS 规则块。 |
| 71 | <code>@keyframes orbit-counter {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 72 | <code>    from { transform: rotate(0deg); }</code> | 设置 `from { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 73 | <code>    to   { transform: rotate(-360deg); }</code> | 设置 `to   { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 74 | <code>}</code> | 结束当前 CSS 规则块。 |
