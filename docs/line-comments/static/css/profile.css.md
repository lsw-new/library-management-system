# static/css/profile.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>/* ================================================================</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code>   Profile Page — 景艺大图书馆 个人中心</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 3 | <code>   ================================================================ */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 4 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 5 | <code>/* ====== Top Bar ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 6 | <code>.pf-topbar {</code> | 选择器 `.pf-topbar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 7 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 8 | <code>    display: flex; align-items: center; justify-content: space-between;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 9 | <code>    margin-bottom: 1.25rem; padding: 0.25rem 0;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 10 | <code>}</code> | 结束当前 CSS 规则块。 |
| 11 | <code>.pf-back {</code> | 选择器 `.pf-back` 的样式块开始，下面定义这类元素的视觉表现。 |
| 12 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 13 | <code>    width: 44px; height: 44px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 14 | <code>    border-radius: 1.125rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 15 | <code>    background: rgba(255,255,255,0.75); backdrop-filter: blur(8px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 16 | <code>    border: 1px solid rgba(249,168,212,0.25);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 17 | <code>    color: var(--color-brand-deep); text-decoration: none;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 18 | <code>    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 19 | <code>}</code> | 结束当前 CSS 规则块。 |
| 20 | <code>.pf-back:hover {</code> | 选择器 `.pf-back:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 21 | <code>    background: rgba(var(--color-brand-primary-rgb),0.08); border-color: rgba(var(--color-brand-primary-rgb),0.3);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 22 | <code>    transform: translateX(-3px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 23 | <code>    box-shadow: 0 4px 12px -4px rgba(var(--color-brand-primary-rgb),0.15);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 24 | <code>}</code> | 结束当前 CSS 规则块。 |
| 25 | <code>.pf-back svg { width: 20px; height: 20px; }</code> | 设置 `.pf-back svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 26 | <code>.pf-topbar-title {</code> | 选择器 `.pf-topbar-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 27 | <code>    position: absolute; left: 50%; transform: translateX(-50%);</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 28 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 29 | <code>    font-size: 1rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 30 | <code>    color: rgba(var(--color-brand-deep-rgb),0.4); letter-spacing: 0.05em;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 31 | <code>}</code> | 结束当前 CSS 规则块。 |
| 32 | <code>.pf-logout {</code> | 选择器 `.pf-logout` 的样式块开始，下面定义这类元素的视觉表现。 |
| 33 | <code>    display: inline-flex; align-items: center; gap: 0.375rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 34 | <code>    padding: 0.5rem 1rem; border-radius: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 35 | <code>    font-size: 0.7rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 36 | <code>    color: rgba(var(--color-brand-deep-rgb),0.4);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 37 | <code>    background: rgba(255,255,255,0.55); backdrop-filter: blur(8px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 38 | <code>    border: 1px solid rgba(249,168,212,0.2);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 39 | <code>    text-decoration: none; transition: all 0.25s; letter-spacing: 0.03em;</code> | 设置 `text-decoration` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 40 | <code>}</code> | 结束当前 CSS 规则块。 |
| 41 | <code>.pf-logout:hover {</code> | 选择器 `.pf-logout:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 42 | <code>    color: #e11d48; background: rgba(254,226,226,0.45);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 43 | <code>    border-color: rgba(254,226,226,0.6);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 44 | <code>}</code> | 结束当前 CSS 规则块。 |
| 45 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 46 | <code>/* ====== Hero ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 47 | <code>.pf-hero {</code> | 选择器 `.pf-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 48 | <code>    position: relative; border-radius: 2.5rem; overflow: hidden;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 49 | <code>    padding: 3rem 2.5rem 2rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 50 | <code>    background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 30%, #f5d0fe 70%, #fae8ff 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 51 | <code>    margin-bottom: 1.5rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 52 | <code>}</code> | 结束当前 CSS 规则块。 |
| 53 | <code>.pf-hero-bg {</code> | 选择器 `.pf-hero-bg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 54 | <code>    position: absolute; inset: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 55 | <code>    background: linear-gradient(160deg, rgba(var(--color-brand-primary-rgb),0.06), rgba(168,85,247,0.08), rgba(var(--color-brand-primary-rgb),0.04));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 56 | <code>}</code> | 结束当前 CSS 规则块。 |
| 57 | <code>.pf-hero-blob {</code> | 选择器 `.pf-hero-blob` 的样式块开始，下面定义这类元素的视觉表现。 |
| 58 | <code>    position: absolute; border-radius: 50%;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 59 | <code>    filter: blur(70px); opacity: 0.22; pointer-events: none;</code> | 设置 `filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 60 | <code>    animation: pfBlobFloat 8s ease-in-out infinite alternate;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 61 | <code>}</code> | 结束当前 CSS 规则块。 |
| 62 | <code>.pf-hero-blob-a { width: 260px; height: 260px; top: -70px; right: -50px; background: radial-gradient(circle,var(--color-brand-primary),#f472b6); }</code> | 设置 `.pf-hero-blob-a { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 63 | <code>.pf-hero-blob-b { width: 200px; height: 200px; bottom: -50px; left: -40px; background: radial-gradient(circle,var(--color-brand-accent),#c084fc); animation-delay: -3s; }</code> | 设置 `.pf-hero-blob-b { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 64 | <code>.pf-hero-blob-c { width: 140px; height: 140px; top: 35%; left: 55%; background: radial-gradient(circle,#f9a8d4,#fbcfe8); animation-delay: -5s; }</code> | 设置 `.pf-hero-blob-c { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 65 | <code>@keyframes pfBlobFloat {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 66 | <code>    0%   { transform: translate(0, 0) scale(1); }</code> | 设置 `0%   { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 67 | <code>    100% { transform: translate(12px, -18px) scale(1.06); }</code> | 设置 `100% { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 68 | <code>}</code> | 结束当前 CSS 规则块。 |
| 69 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 70 | <code>.pf-hero-content {</code> | 选择器 `.pf-hero-content` 的样式块开始，下面定义这类元素的视觉表现。 |
| 71 | <code>    position: relative; z-index: 1;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 72 | <code>    display: flex; flex-direction: column; align-items: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 73 | <code>    text-align: center; margin-bottom: 2rem;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 74 | <code>}</code> | 结束当前 CSS 规则块。 |
| 75 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 76 | <code>/* ====== Avatar ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 77 | <code>.pf-avatar {</code> | 选择器 `.pf-avatar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 78 | <code>    position: relative; width: 120px; height: 120px; flex-shrink: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 79 | <code>    border-radius: 2.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 80 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 81 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 82 | <code>    box-shadow:</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 83 | <code>        0 0 0 4px rgba(255,255,255,0.9),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 84 | <code>        0 0 0 8px rgba(var(--color-brand-primary-rgb),0.18),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 85 | <code>        0 20px 44px -12px rgba(var(--color-brand-primary-rgb),0.3);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 86 | <code>    overflow: hidden; margin-bottom: 1.25rem;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 87 | <code>}</code> | 结束当前 CSS 规则块。 |
| 88 | <code>.pf-avatar-img { width: 100%; height: 100%; object-fit: cover; }</code> | 设置 `.pf-avatar-img { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 89 | <code>.pf-avatar-letter {</code> | 选择器 `.pf-avatar-letter` 的样式块开始，下面定义这类元素的视觉表现。 |
| 90 | <code>    font-size: 2.75rem; font-weight: 700; color: #fff;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 91 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 92 | <code>    text-shadow: 0 2px 8px rgba(0,0,0,0.15);</code> | 设置 `text-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 93 | <code>}</code> | 结束当前 CSS 规则块。 |
| 94 | <code>.pf-avatar-overlay {</code> | 选择器 `.pf-avatar-overlay` 的样式块开始，下面定义这类元素的视觉表现。 |
| 95 | <code>    position: absolute; inset: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 96 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 97 | <code>    background: rgba(0,0,0,0.45); opacity: 0; cursor: pointer;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 98 | <code>    transition: opacity 0.25s; border-radius: 2.5rem;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 99 | <code>}</code> | 结束当前 CSS 规则块。 |
| 100 | <code>.pf-avatar-overlay svg { width: 30px; height: 30px; color: #fff; }</code> | 设置 `.pf-avatar-overlay svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 101 | <code>.pf-avatar:hover .pf-avatar-overlay { opacity: 1; }</code> | 设置 `.pf-avatar` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 102 | <code>.pf-avatar.is-uploading .pf-avatar-overlay { opacity: 1; background: rgba(0,0,0,0.55); }</code> | 设置 `.pf-avatar.is-uploading .pf-avatar-overlay { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 103 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 104 | <code>/* ====== Hero Meta ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 105 | <code>.pf-hero-eyebrow {</code> | 选择器 `.pf-hero-eyebrow` 的样式块开始，下面定义这类元素的视觉表现。 |
| 106 | <code>    display: flex; align-items: center; gap: 6px; margin-bottom: 0.5rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 107 | <code>}</code> | 结束当前 CSS 规则块。 |
| 108 | <code>.pf-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--color-brand-primary); }</code> | 设置 `.pf-dot { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 109 | <code>.pf-dot-alt { background: var(--color-brand-accent); }</code> | 设置 `.pf-dot-alt { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 110 | <code>.pf-hero-eyebrow-text {</code> | 选择器 `.pf-hero-eyebrow-text` 的样式块开始，下面定义这类元素的视觉表现。 |
| 111 | <code>    font-size: 0.6rem; font-weight: 700; text-transform: uppercase;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 112 | <code>    letter-spacing: 0.18em; color: rgba(var(--color-brand-deep-rgb),0.4);</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 113 | <code>}</code> | 结束当前 CSS 规则块。 |
| 114 | <code>.pf-hero-name {</code> | 选择器 `.pf-hero-name` 的样式块开始，下面定义这类元素的视觉表现。 |
| 115 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 116 | <code>    font-size: clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 117 | <code>    font-weight: 700; color: var(--color-brand-deep); line-height: 1.15;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 118 | <code>    margin-bottom: 0.375rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 119 | <code>}</code> | 结束当前 CSS 规则块。 |
| 120 | <code>.pf-hero-sub { font-size: 0.85rem; color: rgba(var(--color-brand-deep-rgb),0.5); font-weight: 500; }</code> | 设置 `.pf-hero-sub { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 121 | <code>.pf-hero-sub-sep { margin: 0 0.25rem; opacity: 0.4; }</code> | 设置 `.pf-hero-sub-sep { margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 122 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 123 | <code>/* ====== Stats ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 124 | <code>.pf-stats {</code> | 选择器 `.pf-stats` 的样式块开始，下面定义这类元素的视觉表现。 |
| 125 | <code>    position: relative; z-index: 1;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 126 | <code>    display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.875rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 127 | <code>}</code> | 结束当前 CSS 规则块。 |
| 128 | <code>.pf-stat {</code> | 选择器 `.pf-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 129 | <code>    display: flex; align-items: center; gap: 0.875rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 130 | <code>    padding: 1rem 1.25rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 131 | <code>    background: rgba(255,255,255,0.8); backdrop-filter: blur(12px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 132 | <code>    border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 133 | <code>    border: 1px solid rgba(249,168,212,0.15);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 134 | <code>    transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 135 | <code>}</code> | 结束当前 CSS 规则块。 |
| 136 | <code>.pf-stat:hover {</code> | 选择器 `.pf-stat:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 137 | <code>    transform: translateY(-3px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 138 | <code>    box-shadow: 0 10px 28px -10px rgba(var(--color-brand-primary-rgb),0.2);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 139 | <code>}</code> | 结束当前 CSS 规则块。 |
| 140 | <code>.pf-stat-icon {</code> | 选择器 `.pf-stat-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 141 | <code>    width: 42px; height: 42px; flex-shrink: 0; border-radius: 0.875rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 142 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 143 | <code>}</code> | 结束当前 CSS 规则块。 |
| 144 | <code>.pf-stat-icon svg { width: 20px; height: 20px; }</code> | 设置 `.pf-stat-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 145 | <code>.pf-stat.tone-pink .pf-stat-icon   { background: rgba(var(--color-brand-primary-rgb),0.1); color: var(--color-brand-primary); }</code> | 设置 `.pf-stat.tone-pink .pf-stat-icon   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 146 | <code>.pf-stat.tone-amber .pf-stat-icon  { background: rgba(245,158,11,0.1); color: #f59e0b; }</code> | 设置 `.pf-stat.tone-amber .pf-stat-icon  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 147 | <code>.pf-stat.tone-emerald .pf-stat-icon{ background: rgba(16,185,129,0.1); color: #10b981; }</code> | 设置 `.pf-stat.tone-emerald .pf-stat-icon{ background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 148 | <code>.pf-stat-label {</code> | 选择器 `.pf-stat-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 149 | <code>    font-size: 0.65rem; font-weight: 700; text-transform: uppercase;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 150 | <code>    letter-spacing: 0.08em; color: rgba(var(--color-brand-deep-rgb),0.35);</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 151 | <code>}</code> | 结束当前 CSS 规则块。 |
| 152 | <code>.pf-stat-value {</code> | 选择器 `.pf-stat-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 153 | <code>    font-size: 1.375rem; font-weight: 700; color: var(--color-brand-deep);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 154 | <code>    font-family: &#x27;Cormorant&#x27;, serif; line-height: 1;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 155 | <code>}</code> | 结束当前 CSS 规则块。 |
| 156 | <code>.pf-stat-unit { font-size: 0.8rem; }</code> | 设置 `.pf-stat-unit { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 157 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 158 | <code>/* ====== Tabs ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 159 | <code>.pf-tabs {</code> | 选择器 `.pf-tabs` 的样式块开始，下面定义这类元素的视觉表现。 |
| 160 | <code>    display: flex; gap: 0.5rem; margin-bottom: 1.5rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 161 | <code>    padding: 0.375rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 162 | <code>    background: rgba(255,255,255,0.5); backdrop-filter: blur(12px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 163 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 164 | <code>    border: 1px solid rgba(249,168,212,0.2);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 165 | <code>}</code> | 结束当前 CSS 规则块。 |
| 166 | <code>.pf-tab {</code> | 选择器 `.pf-tab` 的样式块开始，下面定义这类元素的视觉表现。 |
| 167 | <code>    flex: 1;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 168 | <code>    display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 169 | <code>    padding: 0.875rem 1.25rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 170 | <code>    border-radius: 1rem; border: none;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 171 | <code>    font-size: 0.85rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 172 | <code>    color: rgba(var(--color-brand-deep-rgb),0.4);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 173 | <code>    background: transparent; cursor: pointer;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 174 | <code>    transition: all 0.3s cubic-bezier(0.22,1,0.36,1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 175 | <code>}</code> | 结束当前 CSS 规则块。 |
| 176 | <code>.pf-tab svg { width: 16px; height: 16px; }</code> | 设置 `.pf-tab svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 177 | <code>.pf-tab:hover { color: rgba(var(--color-brand-deep-rgb),0.7); background: rgba(255,255,255,0.5); }</code> | 设置 `.pf-tab` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 178 | <code>.pf-tab.is-active {</code> | 选择器 `.pf-tab.is-active` 的样式块开始，下面定义这类元素的视觉表现。 |
| 179 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 180 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-hover));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 181 | <code>    box-shadow: 0 6px 20px -6px rgba(var(--color-brand-primary-rgb),0.35);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 182 | <code>}</code> | 结束当前 CSS 规则块。 |
| 183 | <code>.pf-tab.is-active.tone-purple {</code> | 选择器 `.pf-tab.is-active.tone-purple` 的样式块开始，下面定义这类元素的视觉表现。 |
| 184 | <code>    background: linear-gradient(135deg, #8b5cf6, #7c3aed);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 185 | <code>    box-shadow: 0 6px 20px -6px rgba(139,92,246,0.35);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 186 | <code>}</code> | 结束当前 CSS 规则块。 |
| 187 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 188 | <code>/* ====== Panel ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 189 | <code>.pf-panel {</code> | 选择器 `.pf-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 190 | <code>    background: rgba(255,255,255,0.7); backdrop-filter: blur(16px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 191 | <code>    border: 1px solid rgba(249,168,212,0.25);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 192 | <code>    border-radius: 2rem; padding: 2.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 193 | <code>    margin-bottom: 1.5rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 194 | <code>}</code> | 结束当前 CSS 规则块。 |
| 195 | <code>.pf-panel-head {</code> | 选择器 `.pf-panel-head` 的样式块开始，下面定义这类元素的视觉表现。 |
| 196 | <code>    display: flex; align-items: center; gap: 0.75rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 197 | <code>    margin-bottom: 1.75rem; padding-bottom: 1rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 198 | <code>    border-bottom: 1px solid rgba(249,168,212,0.15);</code> | 设置 `border-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 199 | <code>}</code> | 结束当前 CSS 规则块。 |
| 200 | <code>.pf-panel-icon {</code> | 选择器 `.pf-panel-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 201 | <code>    width: 38px; height: 38px; border-radius: 0.875rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 202 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 203 | <code>}</code> | 结束当前 CSS 规则块。 |
| 204 | <code>.pf-panel-icon svg { width: 18px; height: 18px; }</code> | 设置 `.pf-panel-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 205 | <code>.pf-panel-icon.tone-pink   { background: rgba(var(--color-brand-primary-rgb),0.1); color: var(--color-brand-primary); }</code> | 设置 `.pf-panel-icon.tone-pink   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 206 | <code>.pf-panel-icon.tone-purple { background: rgba(139,92,246,0.1); color: #8b5cf6; }</code> | 设置 `.pf-panel-icon.tone-purple { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 207 | <code>.pf-panel-title {</code> | 选择器 `.pf-panel-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 208 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 209 | <code>    font-size: 1.25rem; font-weight: 700; color: var(--color-brand-deep);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 210 | <code>}</code> | 结束当前 CSS 规则块。 |
| 211 | <code>.pf-panel-badge {</code> | 选择器 `.pf-panel-badge` 的样式块开始，下面定义这类元素的视觉表现。 |
| 212 | <code>    margin-left: auto;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 213 | <code>    font-size: 0.6rem; font-weight: 700; text-transform: uppercase;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 214 | <code>    letter-spacing: 0.15em; color: rgba(var(--color-brand-deep-rgb),0.2);</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 215 | <code>}</code> | 结束当前 CSS 规则块。 |
| 216 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 217 | <code>/* ====== Form ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 218 | <code>.pf-form { display: flex; flex-direction: column; gap: 1.5rem; }</code> | 设置 `.pf-form { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 219 | <code>.pf-form-grid {</code> | 选择器 `.pf-form-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 220 | <code>    display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 221 | <code>}</code> | 结束当前 CSS 规则块。 |
| 222 | <code>.pf-field { display: flex; flex-direction: column; gap: 0.375rem; }</code> | 设置 `.pf-field { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 223 | <code>.pf-label {</code> | 选择器 `.pf-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 224 | <code>    font-size: 0.75rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 225 | <code>    color: rgba(var(--color-brand-deep-rgb),0.55); letter-spacing: 0.03em;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 226 | <code>}</code> | 结束当前 CSS 规则块。 |
| 227 | <code>.pf-label-hint { font-weight: 500; color: rgba(var(--color-brand-deep-rgb),0.28); }</code> | 设置 `.pf-label-hint { font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 228 | <code>.pf-input {</code> | 选择器 `.pf-input` 的样式块开始，下面定义这类元素的视觉表现。 |
| 229 | <code>    width: 100%; padding: 0.8rem 1rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 230 | <code>    border: 1.5px solid rgba(249,168,212,0.25);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 231 | <code>    border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 232 | <code>    font-size: 0.875rem; font-weight: 500; color: var(--color-brand-deep);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 233 | <code>    background: rgba(255,255,255,0.6);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 234 | <code>    transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 235 | <code>    outline: none;</code> | 设置 `outline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 236 | <code>}</code> | 结束当前 CSS 规则块。 |
| 237 | <code>.pf-input:hover { border-color: rgba(var(--color-brand-primary-rgb),0.35); }</code> | 设置 `.pf-input` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 238 | <code>.pf-input:focus {</code> | 选择器 `.pf-input:focus` 的样式块开始，下面定义这类元素的视觉表现。 |
| 239 | <code>    border-color: var(--color-brand-primary);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 240 | <code>    box-shadow: 0 0 0 3px rgba(var(--color-brand-primary-rgb),0.1);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 241 | <code>    background: rgba(255,255,255,0.85);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 242 | <code>}</code> | 结束当前 CSS 规则块。 |
| 243 | <code>.pf-static {</code> | 选择器 `.pf-static` 的样式块开始，下面定义这类元素的视觉表现。 |
| 244 | <code>    padding: 0.8rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 245 | <code>    border: 1.5px dashed rgba(249,168,212,0.25);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 246 | <code>    border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 247 | <code>    font-size: 0.875rem; font-weight: 500; color: rgba(var(--color-brand-deep-rgb),0.45);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 248 | <code>    background: rgba(249,168,212,0.04);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 249 | <code>}</code> | 结束当前 CSS 规则块。 |
| 250 | <code>.pf-hint { font-size: 0.7rem; color: rgba(var(--color-brand-deep-rgb),0.3); font-weight: 500; }</code> | 设置 `.pf-hint { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 251 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 252 | <code>.pf-input-wrap { position: relative; display: flex; align-items: center; }</code> | 设置 `.pf-input-wrap { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 253 | <code>.pf-input-wrap .pf-input { padding-right: 2.75rem; }</code> | 设置 `.pf-input-wrap .pf-input { padding-right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 254 | <code>.pf-input-wrap.has-code-btn .pf-input { padding-right: 7.5rem; }</code> | 设置 `.pf-input-wrap.has-code-btn .pf-input { padding-right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 255 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 256 | <code>.pf-toggle-pw {</code> | 选择器 `.pf-toggle-pw` 的样式块开始，下面定义这类元素的视觉表现。 |
| 257 | <code>    position: absolute; right: 0.75rem;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 258 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 259 | <code>    width: 28px; height: 28px; border-radius: 0.5rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 260 | <code>    color: rgba(var(--color-brand-deep-rgb),0.3); cursor: pointer;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 261 | <code>    transition: color 0.2s, background 0.2s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 262 | <code>    background: none; border: none; padding: 0;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 263 | <code>}</code> | 结束当前 CSS 规则块。 |
| 264 | <code>.pf-toggle-pw:hover { color: var(--color-brand-primary); background: rgba(var(--color-brand-primary-rgb),0.06); }</code> | 设置 `.pf-toggle-pw` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 265 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 266 | <code>.pf-send-code {</code> | 选择器 `.pf-send-code` 的样式块开始，下面定义这类元素的视觉表现。 |
| 267 | <code>    position: absolute; right: 0.5rem;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 268 | <code>    padding: 0.45rem 0.85rem; border-radius: 0.75rem; border: none;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 269 | <code>    font-size: 0.75rem; font-weight: 700; color: #fff;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 270 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-hover));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 271 | <code>    cursor: pointer; transition: opacity 0.2s, transform 0.15s;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 272 | <code>    white-space: nowrap;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 273 | <code>}</code> | 结束当前 CSS 规则块。 |
| 274 | <code>.pf-send-code:hover { opacity: 0.85; transform: translateY(-1px); }</code> | 设置 `.pf-send-code` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 275 | <code>.pf-send-code:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }</code> | 设置 `.pf-send-code` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 276 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 277 | <code>/* ====== Buttons ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 278 | <code>.pf-btn-primary, .pf-btn-accent {</code> | 选择器 `.pf-btn-primary, .pf-btn-accent` 的样式块开始，下面定义这类元素的视觉表现。 |
| 279 | <code>    display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 280 | <code>    padding: 0.875rem 2rem; border-radius: 1.25rem; border: none;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 281 | <code>    font-size: 0.9rem; font-weight: 700; color: #fff;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 282 | <code>    cursor: pointer; transition: transform 0.2s, box-shadow 0.2s;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 283 | <code>    margin-top: 0.25rem;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 284 | <code>}</code> | 结束当前 CSS 规则块。 |
| 285 | <code>.pf-btn-primary {</code> | 选择器 `.pf-btn-primary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 286 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-hover));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 287 | <code>    box-shadow: 0 8px 24px -8px rgba(var(--color-brand-primary-rgb),0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 288 | <code>}</code> | 结束当前 CSS 规则块。 |
| 289 | <code>.pf-btn-primary:hover {</code> | 选择器 `.pf-btn-primary:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 290 | <code>    transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 291 | <code>    box-shadow: 0 12px 32px -10px rgba(var(--color-brand-primary-rgb),0.5);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 292 | <code>}</code> | 结束当前 CSS 规则块。 |
| 293 | <code>.pf-btn-accent {</code> | 选择器 `.pf-btn-accent` 的样式块开始，下面定义这类元素的视觉表现。 |
| 294 | <code>    background: linear-gradient(135deg, #8b5cf6, #7c3aed);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 295 | <code>    box-shadow: 0 8px 24px -8px rgba(139,92,246,0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 296 | <code>}</code> | 结束当前 CSS 规则块。 |
| 297 | <code>.pf-btn-accent:hover {</code> | 选择器 `.pf-btn-accent:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 298 | <code>    transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 299 | <code>    box-shadow: 0 12px 32px -10px rgba(139,92,246,0.5);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 300 | <code>}</code> | 结束当前 CSS 规则块。 |
| 301 | <code>.pf-btn-primary:disabled, .pf-btn-accent:disabled {</code> | 选择器 `.pf-btn-primary:disabled, .pf-btn-accent:disabled` 的样式块开始，下面定义这类元素的视觉表现。 |
| 302 | <code>    opacity: 0.6; cursor: not-allowed; transform: none;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 303 | <code>}</code> | 结束当前 CSS 规则块。 |
| 304 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 305 | <code>/* ====== Shortcuts ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 306 | <code>.pf-shortcuts { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }</code> | 设置 `.pf-shortcuts { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 307 | <code>.pf-shortcut {</code> | 选择器 `.pf-shortcut` 的样式块开始，下面定义这类元素的视觉表现。 |
| 308 | <code>    display: flex; align-items: center; gap: 1rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 309 | <code>    padding: 1.25rem 1.5rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 310 | <code>    background: rgba(255,255,255,0.7); backdrop-filter: blur(12px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 311 | <code>    border: 1px solid rgba(249,168,212,0.2);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 312 | <code>    border-radius: 1.5rem; text-decoration: none;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 313 | <code>    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 314 | <code>}</code> | 结束当前 CSS 规则块。 |
| 315 | <code>.pf-shortcut:hover {</code> | 选择器 `.pf-shortcut:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 316 | <code>    transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 317 | <code>    box-shadow: 0 12px 32px -10px rgba(var(--color-brand-primary-rgb),0.15);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 318 | <code>    border-color: rgba(var(--color-brand-primary-rgb),0.3);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 319 | <code>}</code> | 结束当前 CSS 规则块。 |
| 320 | <code>.pf-shortcut-icon {</code> | 选择器 `.pf-shortcut-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 321 | <code>    width: 44px; height: 44px; flex-shrink: 0; border-radius: 1rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 322 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 323 | <code>}</code> | 结束当前 CSS 规则块。 |
| 324 | <code>.pf-shortcut-icon svg { width: 22px; height: 22px; }</code> | 设置 `.pf-shortcut-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 325 | <code>.pf-shortcut-icon.tone-pink   { background: rgba(var(--color-brand-primary-rgb),0.1); color: var(--color-brand-primary); }</code> | 设置 `.pf-shortcut-icon.tone-pink   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 326 | <code>.pf-shortcut-icon.tone-purple { background: rgba(139,92,246,0.1); color: #8b5cf6; }</code> | 设置 `.pf-shortcut-icon.tone-purple { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 327 | <code>.pf-shortcut-meta { flex: 1; min-width: 0; }</code> | 设置 `.pf-shortcut-meta { flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 328 | <code>.pf-shortcut-meta h3 { font-family: &#x27;Cormorant&#x27;, serif; font-size: 1rem; font-weight: 700; color: var(--color-brand-deep); }</code> | 设置 `.pf-shortcut-meta h3 { font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 329 | <code>.pf-shortcut-meta p  { font-size: 0.75rem; color: rgba(var(--color-brand-deep-rgb),0.4); font-weight: 500; }</code> | 设置 `.pf-shortcut-meta p  { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 330 | <code>.pf-shortcut-arrow {</code> | 选择器 `.pf-shortcut-arrow` 的样式块开始，下面定义这类元素的视觉表现。 |
| 331 | <code>    width: 18px; height: 18px; flex-shrink: 0;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 332 | <code>    color: rgba(var(--color-brand-deep-rgb),0.2); transition: color 0.2s, transform 0.2s;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 333 | <code>}</code> | 结束当前 CSS 规则块。 |
| 334 | <code>.pf-shortcut:hover .pf-shortcut-arrow { color: var(--color-brand-primary); transform: translateX(3px); }</code> | 设置 `.pf-shortcut` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 335 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 336 | <code>/* ====== Crop Modal ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 337 | <code>.crop-modal {</code> | 选择器 `.crop-modal` 的样式块开始，下面定义这类元素的视觉表现。 |
| 338 | <code>    position: fixed; inset: 0; z-index: 10000;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 339 | <code>    display: none; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 340 | <code>    background: rgba(15,23,42,0.6); backdrop-filter: blur(8px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 341 | <code>    padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 342 | <code>}</code> | 结束当前 CSS 规则块。 |
| 343 | <code>.crop-modal.is-open { display: flex; }</code> | 设置 `.crop-modal.is-open { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 344 | <code>.crop-dialog {</code> | 选择器 `.crop-dialog` 的样式块开始，下面定义这类元素的视觉表现。 |
| 345 | <code>    background: #fff; border-radius: 2rem;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 346 | <code>    box-shadow: 0 32px 80px -20px rgba(0,0,0,0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 347 | <code>    max-width: 400px; width: 100%; padding: 1.5rem;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 348 | <code>    animation: cropPopIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 349 | <code>}</code> | 结束当前 CSS 规则块。 |
| 350 | <code>@keyframes cropPopIn {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 351 | <code>    0%   { opacity: 0; transform: scale(0.9) translateY(16px); }</code> | 设置 `0%   { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 352 | <code>    100% { opacity: 1; transform: scale(1) translateY(0); }</code> | 设置 `100% { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 353 | <code>}</code> | 结束当前 CSS 规则块。 |
| 354 | <code>.crop-header { text-align: center; margin-bottom: 1rem; }</code> | 设置 `.crop-header { text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 355 | <code>.crop-header h3 { font-family: &#x27;Cormorant&#x27;, serif; font-size: 1.25rem; font-weight: 700; color: var(--color-brand-deep); }</code> | 设置 `.crop-header h3 { font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 356 | <code>.crop-header p  { font-size: 0.75rem; color: rgba(var(--color-brand-deep-rgb),0.45); margin-top: 0.25rem; }</code> | 设置 `.crop-header p  { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 357 | <code>.crop-viewport {</code> | 选择器 `.crop-viewport` 的样式块开始，下面定义这类元素的视觉表现。 |
| 358 | <code>    position: relative; width: 100%; aspect-ratio: 1;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 359 | <code>    border-radius: 1.25rem; overflow: hidden; background: #1e1e2e;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 360 | <code>    touch-action: none; user-select: none; -webkit-user-select: none; cursor: grab;</code> | 设置 `touch-action` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 361 | <code>}</code> | 结束当前 CSS 规则块。 |
| 362 | <code>.crop-viewport:active { cursor: grabbing; }</code> | 设置 `.crop-viewport` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 363 | <code>.crop-viewport canvas { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</code> | 设置 `.crop-viewport canvas { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 364 | <code>.crop-ring {</code> | 选择器 `.crop-ring` 的样式块开始，下面定义这类元素的视觉表现。 |
| 365 | <code>    position: absolute; border-radius: 50%;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 366 | <code>    box-shadow: 0 0 0 9999px rgba(0,0,0,0.55);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 367 | <code>    border: 1.5px dashed rgba(255,255,255,0.3); pointer-events: none;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 368 | <code>}</code> | 结束当前 CSS 规则块。 |
| 369 | <code>.crop-zoom {</code> | 选择器 `.crop-zoom` 的样式块开始，下面定义这类元素的视觉表现。 |
| 370 | <code>    display: flex; align-items: center; gap: 0.75rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 371 | <code>    margin: 1rem 0; padding: 0 0.25rem;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 372 | <code>}</code> | 结束当前 CSS 规则块。 |
| 373 | <code>.crop-zoom-icon { width: 18px; height: 18px; color: rgba(var(--color-brand-deep-rgb),0.4); flex-shrink: 0; }</code> | 设置 `.crop-zoom-icon { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 374 | <code>.crop-slider {</code> | 选择器 `.crop-slider` 的样式块开始，下面定义这类元素的视觉表现。 |
| 375 | <code>    flex: 1; height: 4px;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 376 | <code>    -webkit-appearance: none; appearance: none;</code> | 设置 `-webkit-appearance` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 377 | <code>    background: rgba(249,168,212,0.3); border-radius: 2px; outline: none;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 378 | <code>}</code> | 结束当前 CSS 规则块。 |
| 379 | <code>.crop-slider::-webkit-slider-thumb {</code> | 选择器 `.crop-slider::-webkit-slider-thumb` 的样式块开始，下面定义这类元素的视觉表现。 |
| 380 | <code>    -webkit-appearance: none; appearance: none;</code> | 设置 `-webkit-appearance` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 381 | <code>    width: 18px; height: 18px; border-radius: 50%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 382 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-hover));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 383 | <code>    box-shadow: 0 2px 8px rgba(var(--color-brand-primary-rgb),0.4); cursor: pointer;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 384 | <code>}</code> | 结束当前 CSS 规则块。 |
| 385 | <code>.crop-slider::-moz-range-thumb {</code> | 选择器 `.crop-slider::-moz-range-thumb` 的样式块开始，下面定义这类元素的视觉表现。 |
| 386 | <code>    width: 18px; height: 18px; border-radius: 50%; border: none;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 387 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-hover));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 388 | <code>    box-shadow: 0 2px 8px rgba(var(--color-brand-primary-rgb),0.4); cursor: pointer;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 389 | <code>}</code> | 结束当前 CSS 规则块。 |
| 390 | <code>.crop-actions { display: flex; gap: 0.75rem; }</code> | 设置 `.crop-actions { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 391 | <code>.crop-btn-cancel, .crop-btn-confirm {</code> | 选择器 `.crop-btn-cancel, .crop-btn-confirm` 的样式块开始，下面定义这类元素的视觉表现。 |
| 392 | <code>    flex: 1; padding: 0.75rem; border-radius: 1rem; border: none;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 393 | <code>    font-size: 0.875rem; font-weight: 700; cursor: pointer;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 394 | <code>    transition: transform 0.15s, box-shadow 0.15s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 395 | <code>}</code> | 结束当前 CSS 规则块。 |
| 396 | <code>.crop-btn-cancel { background: rgba(249,168,212,0.12); color: rgba(var(--color-brand-deep-rgb),0.5); }</code> | 设置 `.crop-btn-cancel { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 397 | <code>.crop-btn-cancel:hover { background: rgba(249,168,212,0.2); }</code> | 设置 `.crop-btn-cancel` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 398 | <code>.crop-btn-confirm {</code> | 选择器 `.crop-btn-confirm` 的样式块开始，下面定义这类元素的视觉表现。 |
| 399 | <code>    display: inline-flex; align-items: center; justify-content: center; gap: 0.4rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 400 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-hover)); color: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 401 | <code>    box-shadow: 0 6px 20px -6px rgba(var(--color-brand-primary-rgb),0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 402 | <code>}</code> | 结束当前 CSS 规则块。 |
| 403 | <code>.crop-btn-confirm:hover { transform: translateY(-1px); box-shadow: 0 10px 28px -8px rgba(var(--color-brand-primary-rgb),0.5); }</code> | 设置 `.crop-btn-confirm` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 404 | <code>.crop-btn-confirm:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }</code> | 设置 `.crop-btn-confirm` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 405 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 406 | <code>/* ====== Entrance Animations ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 407 | <code>@keyframes pfSlideUp {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 408 | <code>    from { opacity: 0; transform: translateY(24px); }</code> | 设置 `from { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 409 | <code>    to   { opacity: 1; transform: translateY(0); }</code> | 设置 `to   { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 410 | <code>}</code> | 结束当前 CSS 规则块。 |
| 411 | <code>.pf-topbar, .pf-hero, .pf-tabs, .pf-panel, .pf-shortcuts {</code> | 选择器 `.pf-topbar, .pf-hero, .pf-tabs, .pf-panel, .pf-shortcuts` 的样式块开始，下面定义这类元素的视觉表现。 |
| 412 | <code>    opacity: 0;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 413 | <code>    animation: pfSlideUp 0.65s cubic-bezier(0.22,1,0.36,1) forwards;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 414 | <code>}</code> | 结束当前 CSS 规则块。 |
| 415 | <code>.pf-topbar    { animation-delay: 0s; }</code> | 设置 `.pf-topbar    { animation-delay` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 416 | <code>.pf-hero      { animation-delay: 0.07s; }</code> | 设置 `.pf-hero      { animation-delay` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 417 | <code>.pf-tabs      { animation-delay: 0.14s; }</code> | 设置 `.pf-tabs      { animation-delay` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 418 | <code>.pf-panel     { animation-delay: 0.21s; }</code> | 设置 `.pf-panel     { animation-delay` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 419 | <code>.pf-shortcuts { animation-delay: 0.28s; }</code> | 设置 `.pf-shortcuts { animation-delay` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 420 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 421 | <code>.pf-stat {</code> | 选择器 `.pf-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 422 | <code>    opacity: 0;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 423 | <code>    animation: pfSlideUp 0.5s cubic-bezier(0.22,1,0.36,1) forwards;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 424 | <code>}</code> | 结束当前 CSS 规则块。 |
| 425 | <code>.pf-stat:nth-child(1) { animation-delay: 0.15s; }</code> | 设置 `.pf-stat` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 426 | <code>.pf-stat:nth-child(2) { animation-delay: 0.22s; }</code> | 设置 `.pf-stat` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 427 | <code>.pf-stat:nth-child(3) { animation-delay: 0.29s; }</code> | 设置 `.pf-stat` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 428 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 429 | <code>/* Hover Micro‐interactions */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 430 | <code>.pf-panel { transition: box-shadow 0.3s cubic-bezier(0.22,1,0.36,1); }</code> | 设置 `.pf-panel { transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 431 | <code>.pf-panel:hover { box-shadow: 0 16px 48px -16px rgba(var(--color-brand-primary-rgb),0.1); }</code> | 设置 `.pf-panel` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 432 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 433 | <code>/* ====== Utilities ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 434 | <code>.sr-only {</code> | 选择器 `.sr-only` 的样式块开始，下面定义这类元素的视觉表现。 |
| 435 | <code>    position: absolute; width: 1px; height: 1px;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 436 | <code>    padding: 0; margin: -1px; overflow: hidden;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 437 | <code>    clip: rect(0,0,0,0); border: 0;</code> | 设置 `clip` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 438 | <code>}</code> | 结束当前 CSS 规则块。 |
| 439 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 440 | <code>/* ====== Responsive ====== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 441 | <code>@media (max-width: 768px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 442 | <code>    .pf-hero { padding: 2rem 1.5rem 1.5rem; border-radius: 2rem; }</code> | 设置 `.pf-hero { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 443 | <code>    .pf-avatar { width: 96px; height: 96px; border-radius: 2rem; }</code> | 设置 `.pf-avatar { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 444 | <code>    .pf-avatar-overlay { border-radius: 2rem; }</code> | 设置 `.pf-avatar-overlay { border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 445 | <code>    .pf-avatar-letter { font-size: 2.25rem; }</code> | 设置 `.pf-avatar-letter { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 446 | <code>    .pf-stats { gap: 0.5rem; }</code> | 设置 `.pf-stats { gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 447 | <code>    .pf-stat { padding: 0.75rem; gap: 0.5rem; }</code> | 设置 `.pf-stat { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 448 | <code>    .pf-stat-icon { width: 34px; height: 34px; border-radius: 0.7rem; }</code> | 设置 `.pf-stat-icon { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 449 | <code>    .pf-stat-icon svg { width: 16px; height: 16px; }</code> | 设置 `.pf-stat-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 450 | <code>    .pf-stat-label { font-size: 0.6rem; }</code> | 设置 `.pf-stat-label { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 451 | <code>    .pf-stat-value { font-size: 1.15rem; }</code> | 设置 `.pf-stat-value { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 452 | <code>    .pf-panel { padding: 1.5rem; border-radius: 1.5rem; }</code> | 设置 `.pf-panel { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 453 | <code>    .pf-form-grid { grid-template-columns: 1fr; }</code> | 设置 `.pf-form-grid { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 454 | <code>}</code> | 结束当前 CSS 规则块。 |
| 455 | <code>@media (max-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 456 | <code>    .pf-shortcuts { grid-template-columns: 1fr; }</code> | 设置 `.pf-shortcuts { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 457 | <code>}</code> | 结束当前 CSS 规则块。 |
| 458 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 459 | <code>@media (max-width: 520px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 460 | <code>    .pf-topbar {</code> | 选择器 `.pf-topbar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 461 | <code>        margin-bottom: 0.9rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 462 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 463 | <code>    .pf-logout {</code> | 选择器 `.pf-logout` 的样式块开始，下面定义这类元素的视觉表现。 |
| 464 | <code>        width: 44px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 465 | <code>        height: 44px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 466 | <code>        padding: 0;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 467 | <code>        justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 468 | <code>        border-radius: 0.95rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 469 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 470 | <code>    .pf-logout svg {</code> | 选择器 `.pf-logout svg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 471 | <code>        width: 18px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 472 | <code>        height: 18px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 473 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 474 | <code>    .pf-logout {</code> | 选择器 `.pf-logout` 的样式块开始，下面定义这类元素的视觉表现。 |
| 475 | <code>        font-size: 0;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 476 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 477 | <code>    .pf-hero {</code> | 选择器 `.pf-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 478 | <code>        padding: 1.75rem 1rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 479 | <code>        border-radius: 1.35rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 480 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 481 | <code>    .pf-stats {</code> | 选择器 `.pf-stats` 的样式块开始，下面定义这类元素的视觉表现。 |
| 482 | <code>        grid-template-columns: 1fr;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 483 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 484 | <code>    .pf-stat {</code> | 选择器 `.pf-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 485 | <code>        justify-content: flex-start;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 486 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 487 | <code>    .pf-tabs {</code> | 选择器 `.pf-tabs` 的样式块开始，下面定义这类元素的视觉表现。 |
| 488 | <code>        position: sticky;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 489 | <code>        top: 0.75rem;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 490 | <code>        z-index: 30;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 491 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 492 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 493 | <code>    .pf-tab {</code> | 选择器 `.pf-tab` 的样式块开始，下面定义这类元素的视觉表现。 |
| 494 | <code>        min-height: 44px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 495 | <code>        padding-inline: 0.75rem;</code> | 设置 `padding-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 496 | <code>        font-size: 0.8rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 497 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 498 | <code>    .pf-panel {</code> | 选择器 `.pf-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 499 | <code>        padding: 1.15rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 500 | <code>        border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 501 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 502 | <code>    .pf-panel-head {</code> | 选择器 `.pf-panel-head` 的样式块开始，下面定义这类元素的视觉表现。 |
| 503 | <code>        flex-wrap: wrap;</code> | 设置 `flex-wrap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 504 | <code>        gap: 0.55rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 505 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 506 | <code>    .pf-panel-badge {</code> | 选择器 `.pf-panel-badge` 的样式块开始，下面定义这类元素的视觉表现。 |
| 507 | <code>        width: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 508 | <code>        margin-left: 0;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 509 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 510 | <code>    .pf-input-wrap.has-code-btn {</code> | 选择器 `.pf-input-wrap.has-code-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 511 | <code>        display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 512 | <code>        gap: 0.55rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 513 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 514 | <code>    .pf-input-wrap.has-code-btn .pf-input {</code> | 选择器 `.pf-input-wrap.has-code-btn .pf-input` 的样式块开始，下面定义这类元素的视觉表现。 |
| 515 | <code>        padding-right: 1rem;</code> | 设置 `padding-right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 516 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 517 | <code>    .pf-send-code {</code> | 选择器 `.pf-send-code` 的样式块开始，下面定义这类元素的视觉表现。 |
| 518 | <code>        position: static;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 519 | <code>        min-height: 42px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 520 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 521 | <code>    .crop-dialog {</code> | 选择器 `.crop-dialog` 的样式块开始，下面定义这类元素的视觉表现。 |
| 522 | <code>        border-radius: 1.35rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 523 | <code>        padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 524 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 525 | <code>}</code> | 结束当前 CSS 规则块。 |
| 526 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 527 | <code>/* ==================== Desktop profile cohesion ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 528 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 529 | <code>    .pf-page {</code> | 选择器 `.pf-page` 的样式块开始，下面定义这类元素的视觉表现。 |
| 530 | <code>        max-width: 1120px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 531 | <code>        margin-inline: auto;</code> | 设置 `margin-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 532 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 533 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 534 | <code>    .pf-topbar {</code> | 选择器 `.pf-topbar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 535 | <code>        margin-bottom: 1rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 536 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 537 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 538 | <code>    .pf-hero {</code> | 选择器 `.pf-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 539 | <code>        border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 540 | <code>        padding: 2rem 2.25rem 1.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 541 | <code>        margin-bottom: 1rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 542 | <code>        box-shadow: 0 24px 64px -44px rgba(var(--color-brand-primary-rgb), 0.42);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 543 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 544 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 545 | <code>    .pf-hero-content {</code> | 选择器 `.pf-hero-content` 的样式块开始，下面定义这类元素的视觉表现。 |
| 546 | <code>        flex-direction: row;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 547 | <code>        align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 548 | <code>        justify-content: flex-start;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 549 | <code>        gap: 1.35rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 550 | <code>        text-align: left;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 551 | <code>        margin-bottom: 1.5rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 552 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 553 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 554 | <code>    .pf-avatar {</code> | 选择器 `.pf-avatar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 555 | <code>        width: 96px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 556 | <code>        height: 96px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 557 | <code>        border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 558 | <code>        margin-bottom: 0;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 559 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 560 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 561 | <code>    .pf-avatar-overlay {</code> | 选择器 `.pf-avatar-overlay` 的样式块开始，下面定义这类元素的视觉表现。 |
| 562 | <code>        border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 563 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 564 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 565 | <code>    .pf-identity {</code> | 选择器 `.pf-identity` 的样式块开始，下面定义这类元素的视觉表现。 |
| 566 | <code>        min-width: 0;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 567 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 568 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 569 | <code>    .pf-hero-eyebrow {</code> | 选择器 `.pf-hero-eyebrow` 的样式块开始，下面定义这类元素的视觉表现。 |
| 570 | <code>        justify-content: flex-start;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 571 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 572 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 573 | <code>    .pf-hero-name {</code> | 选择器 `.pf-hero-name` 的样式块开始，下面定义这类元素的视觉表现。 |
| 574 | <code>        font-size: clamp(2rem, 2.4vw, 2.8rem);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 575 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 576 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 577 | <code>    .pf-stats {</code> | 选择器 `.pf-stats` 的样式块开始，下面定义这类元素的视觉表现。 |
| 578 | <code>        gap: 1rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 579 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 580 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 581 | <code>    .pf-stat,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 582 | <code>    .pf-panel,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 583 | <code>    .pf-tabs {</code> | 选择器 `.pf-tabs` 的样式块开始，下面定义这类元素的视觉表现。 |
| 584 | <code>        border-color: rgba(249, 168, 212, 0.24);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 585 | <code>        box-shadow: 0 14px 36px -30px rgba(var(--color-brand-primary-rgb), 0.36);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 586 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 587 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 588 | <code>    .pf-stat {</code> | 选择器 `.pf-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 589 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 590 | <code>        background: rgba(255, 255, 255, 0.84);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 591 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 592 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 593 | <code>    .pf-tabs {</code> | 选择器 `.pf-tabs` 的样式块开始，下面定义这类元素的视觉表现。 |
| 594 | <code>        margin-bottom: 1rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 595 | <code>        border-radius: 1.1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 596 | <code>        background: rgba(255, 255, 255, 0.68);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 597 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 598 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 599 | <code>    .pf-tab {</code> | 选择器 `.pf-tab` 的样式块开始，下面定义这类元素的视觉表现。 |
| 600 | <code>        border-radius: 0.85rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 601 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 602 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 603 | <code>    .pf-panel {</code> | 选择器 `.pf-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 604 | <code>        border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 605 | <code>        padding: 2rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 606 | <code>        background: rgba(255, 255, 255, 0.78);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 607 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 608 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 609 | <code>    .pf-form-grid {</code> | 选择器 `.pf-form-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 610 | <code>        gap: 1rem 1.25rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 611 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 612 | <code>}</code> | 结束当前 CSS 规则块。 |
