# static/css/book-detail.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>/* ==================== 图书详情页 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code>.detail-hero {</code> | 选择器 `.detail-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 3 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 4 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 5 | <code>    border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 6 | <code>    isolation: isolate;</code> | 设置 `isolation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 7 | <code>}</code> | 结束当前 CSS 规则块。 |
| 8 | <code>.detail-hero::before {</code> | 选择器 `.detail-hero::before` 的样式块开始，下面定义这类元素的视觉表现。 |
| 9 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 10 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 11 | <code>    inset: -10%;</code> | 设置 `inset` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 12 | <code>    background-image: var(--detail-cover, none);</code> | 设置 `background-image` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 13 | <code>    background-size: cover;</code> | 设置 `background-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 14 | <code>    background-position: center;</code> | 设置 `background-position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 15 | <code>    filter: blur(40px) saturate(1.4);</code> | 设置 `filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 16 | <code>    opacity: 0.55;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 17 | <code>    z-index: -2;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 18 | <code>    transform: scale(1.2);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 19 | <code>}</code> | 结束当前 CSS 规则块。 |
| 20 | <code>.detail-hero::after {</code> | 选择器 `.detail-hero::after` 的样式块开始，下面定义这类元素的视觉表现。 |
| 21 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 22 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 23 | <code>    inset: 0;</code> | 设置 `inset` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 24 | <code>    background: linear-gradient(135deg,</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 25 | <code>        rgba(255, 255, 255, 0.78) 0%,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 26 | <code>        rgba(253, 242, 248, 0.85) 55%,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 27 | <code>        rgba(243, 232, 255, 0.85) 100%);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 28 | <code>    backdrop-filter: blur(8px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 29 | <code>    -webkit-backdrop-filter: blur(8px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 30 | <code>    z-index: -1;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 31 | <code>}</code> | 结束当前 CSS 规则块。 |
| 32 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 33 | <code>.detail-cover-shell {</code> | 选择器 `.detail-cover-shell` 的样式块开始，下面定义这类元素的视觉表现。 |
| 34 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 35 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 36 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 37 | <code>    aspect-ratio: 3 / 4;</code> | 设置 `aspect-ratio` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 38 | <code>    box-shadow: 0 30px 60px -25px rgba(131, 24, 67, 0.35),</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 39 | <code>                0 12px 24px -10px rgba(139, 92, 246, 0.25);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 40 | <code>    transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 41 | <code>}</code> | 结束当前 CSS 规则块。 |
| 42 | <code>.detail-cover-shell:hover { transform: translateY(-4px) scale(1.01); }</code> | 设置 `.detail-cover-shell` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 43 | <code>.detail-cover-shell img {</code> | 选择器 `.detail-cover-shell img` 的样式块开始，下面定义这类元素的视觉表现。 |
| 44 | <code>    width: 100%; height: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 45 | <code>    object-fit: cover;</code> | 设置 `object-fit` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 46 | <code>    transition: transform 0.6s ease, opacity 0.4s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 47 | <code>}</code> | 结束当前 CSS 规则块。 |
| 48 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 49 | <code>.detail-meta-card {</code> | 选择器 `.detail-meta-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 50 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 51 | <code>    align-items: flex-start;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 52 | <code>    gap: 0.75rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 53 | <code>    padding: 0.875rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 54 | <code>    border-radius: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 55 | <code>    background: rgba(255, 255, 255, 0.7);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 56 | <code>    border: 1px solid rgba(236, 72, 153, 0.08);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 57 | <code>    transition: border-color 0.3s ease, background 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 58 | <code>}</code> | 结束当前 CSS 规则块。 |
| 59 | <code>.detail-meta-card:hover {</code> | 选择器 `.detail-meta-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 60 | <code>    border-color: rgba(236, 72, 153, 0.25);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 61 | <code>    background: rgba(255, 255, 255, 0.95);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 62 | <code>}</code> | 结束当前 CSS 规则块。 |
| 63 | <code>.detail-meta-icon {</code> | 选择器 `.detail-meta-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 64 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 65 | <code>    width: 2.25rem; height: 2.25rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 66 | <code>    border-radius: 0.625rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 67 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 68 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 69 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 70 | <code>    background: linear-gradient(135deg, #fbcfe8, #e9d5ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 71 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 72 | <code>}</code> | 结束当前 CSS 规则块。 |
| 73 | <code>.detail-meta-label {</code> | 选择器 `.detail-meta-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 74 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 75 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 76 | <code>    letter-spacing: 0.08em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 77 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 78 | <code>    color: rgba(131, 24, 67, 0.45);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 79 | <code>}</code> | 结束当前 CSS 规则块。 |
| 80 | <code>.detail-meta-value {</code> | 选择器 `.detail-meta-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 81 | <code>    font-size: 0.95rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 82 | <code>    font-weight: 600;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 83 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 84 | <code>    word-break: break-word;</code> | 设置 `word-break` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 85 | <code>}</code> | 结束当前 CSS 规则块。 |
| 86 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 87 | <code>.detail-stat {</code> | 选择器 `.detail-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 88 | <code>    padding: 1rem 1.125rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 89 | <code>    border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 90 | <code>    background: linear-gradient(135deg, #ffffff 0%, rgba(253, 242, 248, 0.7) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 91 | <code>    border: 1px solid rgba(236, 72, 153, 0.1);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 92 | <code>}</code> | 结束当前 CSS 规则块。 |
| 93 | <code>.detail-stat-label {</code> | 选择器 `.detail-stat-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 94 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 95 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 96 | <code>    letter-spacing: 0.08em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 97 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 98 | <code>    color: rgba(131, 24, 67, 0.5);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 99 | <code>}</code> | 结束当前 CSS 规则块。 |
| 100 | <code>.detail-stat-value {</code> | 选择器 `.detail-stat-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 101 | <code>    margin-top: 0.25rem;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 102 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 103 | <code>    font-size: 1.75rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 104 | <code>    line-height: 1.1;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 105 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 106 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 107 | <code>}</code> | 结束当前 CSS 规则块。 |
| 108 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 109 | <code>.detail-progress {</code> | 选择器 `.detail-progress` 的样式块开始，下面定义这类元素的视觉表现。 |
| 110 | <code>    height: 8px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 111 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 112 | <code>    background: rgba(236, 72, 153, 0.12);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 113 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 114 | <code>}</code> | 结束当前 CSS 规则块。 |
| 115 | <code>.detail-progress-bar {</code> | 选择器 `.detail-progress-bar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 116 | <code>    height: 100%;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 117 | <code>    border-radius: inherit;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 118 | <code>    background: linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 119 | <code>    transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 120 | <code>}</code> | 结束当前 CSS 规则块。 |
| 121 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 122 | <code>.detail-action-primary {</code> | 选择器 `.detail-action-primary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 123 | <code>    width: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 124 | <code>    padding: 0.875rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 125 | <code>    border-radius: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 126 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 127 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 128 | <code>    background: linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-accent) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 129 | <code>    box-shadow: 0 14px 24px -10px rgba(236, 72, 153, 0.6);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 130 | <code>    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 131 | <code>}</code> | 结束当前 CSS 规则块。 |
| 132 | <code>.detail-action-primary:hover {</code> | 选择器 `.detail-action-primary:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 133 | <code>    transform: translateY(-1px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 134 | <code>    box-shadow: 0 20px 32px -12px rgba(236, 72, 153, 0.7);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 135 | <code>}</code> | 结束当前 CSS 规则块。 |
| 136 | <code>.detail-action-primary:active { transform: translateY(0); }</code> | 设置 `.detail-action-primary` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 137 | <code>.detail-action-secondary {</code> | 选择器 `.detail-action-secondary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 138 | <code>    width: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 139 | <code>    padding: 0.75rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 140 | <code>    border-radius: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 141 | <code>    font-weight: 600;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 142 | <code>    text-align: center;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 143 | <code>    color: rgba(131, 24, 67, 0.7);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 144 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 145 | <code>    border: 1px solid rgba(236, 72, 153, 0.18);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 146 | <code>    transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 147 | <code>}</code> | 结束当前 CSS 规则块。 |
| 148 | <code>.detail-action-secondary:hover {</code> | 选择器 `.detail-action-secondary:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 149 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 150 | <code>    border-color: rgba(236, 72, 153, 0.5);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 151 | <code>    background: rgba(253, 242, 248, 0.6);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 152 | <code>}</code> | 结束当前 CSS 规则块。 |
| 153 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 154 | <code>/* 相关推荐 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 155 | <code>.related-card {</code> | 选择器 `.related-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 156 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 157 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 158 | <code>    flex-direction: column;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 159 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 160 | <code>    border-radius: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 161 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 162 | <code>    border: 1px solid rgba(236, 72, 153, 0.08);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 163 | <code>    transition: transform 0.3s ease, box-shadow 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 164 | <code>}</code> | 结束当前 CSS 规则块。 |
| 165 | <code>.related-card:hover {</code> | 选择器 `.related-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 166 | <code>    transform: translateY(-3px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 167 | <code>    box-shadow: 0 16px 32px -16px rgba(236, 72, 153, 0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 168 | <code>}</code> | 结束当前 CSS 规则块。 |
| 169 | <code>.related-card-cover {</code> | 选择器 `.related-card-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 170 | <code>    aspect-ratio: 3 / 4;</code> | 设置 `aspect-ratio` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 171 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 172 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 173 | <code>}</code> | 结束当前 CSS 规则块。 |
| 174 | <code>.related-card-cover img {</code> | 选择器 `.related-card-cover img` 的样式块开始，下面定义这类元素的视觉表现。 |
| 175 | <code>    width: 100%; height: 100%; object-fit: cover;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 176 | <code>    transition: transform 0.5s ease, opacity 0.4s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 177 | <code>}</code> | 结束当前 CSS 规则块。 |
| 178 | <code>.related-card:hover .related-card-cover img { transform: scale(1.05); }</code> | 设置 `.related-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 179 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 180 | <code>/* ==================== Phone/tablet detail page ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 181 | <code>@media (max-width: 639px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 182 | <code>    .detail-hero {</code> | 选择器 `.detail-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 183 | <code>        border-radius: 1.35rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 184 | <code>        margin-inline: -0.15rem;</code> | 设置 `margin-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 185 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 186 | <code>    .detail-cover-shell {</code> | 选择器 `.detail-cover-shell` 的样式块开始，下面定义这类元素的视觉表现。 |
| 187 | <code>        max-width: 178px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 188 | <code>        margin-inline: auto;</code> | 设置 `margin-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 189 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 190 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 191 | <code>    .detail-stat {</code> | 选择器 `.detail-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 192 | <code>        padding: 0.85rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 193 | <code>        border-radius: 0.9rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 194 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 195 | <code>    .detail-stat-label {</code> | 选择器 `.detail-stat-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 196 | <code>        font-size: 10px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 197 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 198 | <code>    .detail-stat-value {</code> | 选择器 `.detail-stat-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 199 | <code>        font-size: 1.35rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 200 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 201 | <code>    #bookDetailActionGroup {</code> | 选择器 `#bookDetailActionGroup` 的样式块开始，下面定义这类元素的视觉表现。 |
| 202 | <code>        position: sticky;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 203 | <code>        bottom: calc(5.75rem + env(safe-area-inset-bottom));</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 204 | <code>        z-index: 20;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 205 | <code>        padding: 0.55rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 206 | <code>        border-radius: 1.2rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 207 | <code>        background: rgba(255, 255, 255, 0.92);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 208 | <code>        border: 1px solid rgba(249, 168, 212, 0.45);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 209 | <code>        box-shadow: 0 18px 40px -26px rgba(var(--color-brand-primary-rgb), 0.58);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 210 | <code>        backdrop-filter: blur(16px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 211 | <code>        -webkit-backdrop-filter: blur(16px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 212 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 213 | <code>    .detail-action-primary,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 214 | <code>    .detail-action-secondary {</code> | 选择器 `.detail-action-secondary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 215 | <code>        min-height: 46px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 216 | <code>        border-radius: 0.95rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 217 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 218 | <code>    .related-card {</code> | 选择器 `.related-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 219 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 220 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 221 | <code>}</code> | 结束当前 CSS 规则块。 |
| 222 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 223 | <code>@media (min-width: 640px) and (max-width: 1023px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 224 | <code>    .detail-hero {</code> | 选择器 `.detail-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 225 | <code>        border-radius: 1.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 226 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 227 | <code>    .detail-cover-shell {</code> | 选择器 `.detail-cover-shell` 的样式块开始，下面定义这类元素的视觉表现。 |
| 228 | <code>        max-width: 260px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 229 | <code>        margin-inline: auto;</code> | 设置 `margin-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 230 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 231 | <code>    #bookDetailActionGroup {</code> | 选择器 `#bookDetailActionGroup` 的样式块开始，下面定义这类元素的视觉表现。 |
| 232 | <code>        max-width: 520px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 233 | <code>        margin-inline: auto;</code> | 设置 `margin-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 234 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 235 | <code>}</code> | 结束当前 CSS 规则块。 |
| 236 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 237 | <code>/* ==================== Desktop detail cohesion ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 238 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 239 | <code>    #bookDetailPageState {</code> | 选择器 `#bookDetailPageState` 的样式块开始，下面定义这类元素的视觉表现。 |
| 240 | <code>        max-width: 1180px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 241 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 242 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 243 | <code>    .detail-hero {</code> | 选择器 `.detail-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 244 | <code>        border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 245 | <code>        padding: 2rem !important;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 246 | <code>        border: 1px solid rgba(249, 168, 212, 0.3);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 247 | <code>        box-shadow: 0 24px 64px -44px rgba(var(--color-brand-primary-rgb), 0.42);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 248 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 249 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 250 | <code>    .detail-hero &gt; .grid {</code> | 选择器 `.detail-hero &gt; .grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 251 | <code>        grid-template-columns: minmax(0, 270px) minmax(0, 1fr) !important;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 252 | <code>        gap: 2rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 253 | <code>        align-items: start;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 254 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 255 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 256 | <code>    .detail-cover-shell {</code> | 选择器 `.detail-cover-shell` 的样式块开始，下面定义这类元素的视觉表现。 |
| 257 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 258 | <code>        box-shadow: 0 24px 46px -30px rgba(131, 24, 67, 0.42);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 259 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 260 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 261 | <code>    .detail-hero header {</code> | 选择器 `.detail-hero header` 的样式块开始，下面定义这类元素的视觉表现。 |
| 262 | <code>        padding-bottom: 0.2rem;</code> | 设置 `padding-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 263 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 264 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 265 | <code>    .detail-hero h1 {</code> | 选择器 `.detail-hero h1` 的样式块开始，下面定义这类元素的视觉表现。 |
| 266 | <code>        max-width: 12ch;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 267 | <code>        font-size: clamp(2.5rem, 3vw, 3.6rem);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 268 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 269 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 270 | <code>    .detail-stat,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 271 | <code>    .detail-meta-card,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 272 | <code>    .detail-hero .bg-white\/70 {</code> | 选择器 `.detail-hero .bg-white\/70` 的样式块开始，下面定义这类元素的视觉表现。 |
| 273 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 274 | <code>        background: rgba(255, 255, 255, 0.82);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 275 | <code>        border-color: rgba(249, 168, 212, 0.22);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 276 | <code>        box-shadow: 0 10px 28px -24px rgba(var(--color-brand-primary-rgb), 0.34);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 277 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 278 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 279 | <code>    .detail-stat {</code> | 选择器 `.detail-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 280 | <code>        min-height: 116px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 281 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 282 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 283 | <code>    .detail-action-primary,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 284 | <code>    .detail-action-secondary {</code> | 选择器 `.detail-action-secondary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 285 | <code>        border-radius: 0.9rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 286 | <code>        min-height: 46px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 287 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 288 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 289 | <code>    .related-card {</code> | 选择器 `.related-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 290 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 291 | <code>        border-color: rgba(249, 168, 212, 0.24);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 292 | <code>        box-shadow: 0 12px 30px -26px rgba(var(--color-brand-primary-rgb), 0.36);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 293 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 294 | <code>}</code> | 结束当前 CSS 规则块。 |
