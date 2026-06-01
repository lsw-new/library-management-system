# static/css/ranking.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>/* ===== Ranking Page v3 ===== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 3 | <code>.rk { min-height: 100vh; }</code> | 设置 `.rk { min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 4 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 5 | <code>/* ---- Hero ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 6 | <code>.rk-hero {</code> | 选择器 `.rk-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 7 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 8 | <code>    padding: 3.5rem 1.5rem 2.25rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 9 | <code>    text-align: center;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 10 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 11 | <code>}</code> | 结束当前 CSS 规则块。 |
| 12 | <code>.rk-hero-bg {</code> | 选择器 `.rk-hero-bg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 13 | <code>    position: absolute; inset: 0; pointer-events: none;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 14 | <code>    background:</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 15 | <code>        radial-gradient(ellipse at 20% 0%, rgba(var(--color-brand-primary-rgb),0.14), transparent 50%),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 16 | <code>        radial-gradient(ellipse at 80% 100%, rgba(168,85,247,0.11), transparent 50%);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 17 | <code>}</code> | 结束当前 CSS 规则块。 |
| 18 | <code>.rk-hero &gt; *:not(.rk-hero-bg) { position: relative; z-index: 1; }</code> | 设置 `.rk-hero &gt; *` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 19 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 20 | <code>.rk-back {</code> | 选择器 `.rk-back` 的样式块开始，下面定义这类元素的视觉表现。 |
| 21 | <code>    position: fixed; top: 1rem; left: 1.25rem; z-index: 60;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 22 | <code>    display: inline-flex; align-items: center; gap: 6px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 23 | <code>    padding: 8px 18px; border-radius: 999px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 24 | <code>    background: rgba(255,255,255,0.88); backdrop-filter: blur(14px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 25 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb),0.12);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 26 | <code>    color: var(--color-brand-deep); font-size: 13px; font-weight: 600; text-decoration: none;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 27 | <code>    box-shadow: 0 4px 20px -6px rgba(var(--color-brand-deep-rgb),0.12);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 28 | <code>    transition: transform 0.2s, box-shadow 0.2s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 29 | <code>    min-width: 44px; min-height: 44px;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 30 | <code>}</code> | 结束当前 CSS 规则块。 |
| 31 | <code>.rk-back:hover { transform: translateY(-1px); box-shadow: 0 8px 28px -8px rgba(var(--color-brand-deep-rgb),0.22); }</code> | 设置 `.rk-back` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 32 | <code>.rk-back svg { width: 16px; height: 16px; flex-shrink: 0; }</code> | 设置 `.rk-back svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 33 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 34 | <code>.rk-eyebrow {</code> | 选择器 `.rk-eyebrow` 的样式块开始，下面定义这类元素的视觉表现。 |
| 35 | <code>    display: inline-block;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 36 | <code>    font-size: 10px; font-weight: 800; letter-spacing: 0.25em; text-transform: uppercase;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 37 | <code>    color: rgba(var(--color-brand-deep-rgb),0.45); margin-bottom: 0.5rem;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 38 | <code>}</code> | 结束当前 CSS 规则块。 |
| 39 | <code>.rk-title {</code> | 选择器 `.rk-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 40 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 41 | <code>    font-size: clamp(2.5rem, 1.5rem + 3vw, 4rem);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 42 | <code>    font-weight: 700; color: var(--color-brand-deep); line-height: 1.1; margin-bottom: 0.75rem;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 43 | <code>}</code> | 结束当前 CSS 规则块。 |
| 44 | <code>.rk-title span {</code> | 选择器 `.rk-title span` 的样式块开始，下面定义这类元素的视觉表现。 |
| 45 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 46 | <code>    -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;</code> | 设置 `-webkit-background-clip` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 47 | <code>}</code> | 结束当前 CSS 规则块。 |
| 48 | <code>.rk-sub { font-size: 14px; color: rgba(var(--color-brand-deep-rgb),0.55); margin-bottom: 1.5rem; }</code> | 设置 `.rk-sub { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 49 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 50 | <code>.rk-stats {</code> | 选择器 `.rk-stats` 的样式块开始，下面定义这类元素的视觉表现。 |
| 51 | <code>    display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 52 | <code>}</code> | 结束当前 CSS 规则块。 |
| 53 | <code>.rk-stat {</code> | 选择器 `.rk-stat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 54 | <code>    display: flex; flex-direction: column; align-items: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 55 | <code>    padding: 0.625rem 1.125rem; min-width: 88px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 56 | <code>    background: rgba(255,255,255,0.72); backdrop-filter: blur(8px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 57 | <code>    border: 1px solid rgba(255,255,255,0.82); border-radius: 1rem;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 58 | <code>    box-shadow: 0 4px 14px -6px rgba(var(--color-brand-deep-rgb),0.1);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 59 | <code>}</code> | 结束当前 CSS 规则块。 |
| 60 | <code>.rk-stat strong {</code> | 选择器 `.rk-stat strong` 的样式块开始，下面定义这类元素的视觉表现。 |
| 61 | <code>    font-family: &#x27;Cormorant&#x27;, serif; font-size: 1.7rem; font-weight: 700;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 62 | <code>    color: var(--color-brand-deep); line-height: 1; font-variant-numeric: tabular-nums;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 63 | <code>}</code> | 结束当前 CSS 规则块。 |
| 64 | <code>.rk-stat span {</code> | 选择器 `.rk-stat span` 的样式块开始，下面定义这类元素的视觉表现。 |
| 65 | <code>    font-size: 10.5px; font-weight: 600; color: rgba(var(--color-brand-deep-rgb),0.5); margin-top: 3px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 66 | <code>}</code> | 结束当前 CSS 规则块。 |
| 67 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 68 | <code>/* ---- Content wrapper ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 69 | <code>.rk-content { max-width: 72rem; margin: 0 auto; padding: 0 1rem 3rem; }</code> | 设置 `.rk-content { max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 70 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 71 | <code>/* ---- Podium ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 72 | <code>.rk-podium {</code> | 选择器 `.rk-podium` 的样式块开始，下面定义这类元素的视觉表现。 |
| 73 | <code>    display: grid; grid-template-columns: 1fr 1.15fr 1fr;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 74 | <code>    gap: 1rem; align-items: end;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 75 | <code>    margin-bottom: 1.75rem; padding: 0.5rem 0 1rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 76 | <code>}</code> | 结束当前 CSS 规则块。 |
| 77 | <code>.rk-pod {</code> | 选择器 `.rk-pod` 的样式块开始，下面定义这类元素的视觉表现。 |
| 78 | <code>    position: relative; display: flex; flex-direction: column; align-items: center;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 79 | <code>    text-align: center; padding: 1.25rem 1rem;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 80 | <code>    background: rgba(255,255,255,0.86); border: 1px solid rgba(255,255,255,0.82);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 81 | <code>    border-radius: 1.5rem; box-shadow: 0 10px 28px -14px rgba(var(--color-brand-deep-rgb),0.18);</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 82 | <code>    transition: transform 0.3s ease, box-shadow 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 83 | <code>}</code> | 结束当前 CSS 规则块。 |
| 84 | <code>.rk-pod:hover {</code> | 选择器 `.rk-pod:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 85 | <code>    transform: translateY(-4px); box-shadow: 0 18px 36px -14px rgba(var(--color-brand-deep-rgb),0.28);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 86 | <code>}</code> | 结束当前 CSS 规则块。 |
| 87 | <code>.rk-pod--gold {</code> | 选择器 `.rk-pod--gold` 的样式块开始，下面定义这类元素的视觉表现。 |
| 88 | <code>    padding: 1.75rem 1.25rem 1.5rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 89 | <code>    background: linear-gradient(160deg, rgba(255,255,255,0.96), rgba(254,243,199,0.45));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 90 | <code>    border-color: rgba(251,191,36,0.25);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 91 | <code>    box-shadow: 0 14px 36px -14px rgba(245,158,11,0.28);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 92 | <code>}</code> | 结束当前 CSS 规则块。 |
| 93 | <code>.rk-pod--silver {</code> | 选择器 `.rk-pod--silver` 的样式块开始，下面定义这类元素的视觉表现。 |
| 94 | <code>    background: linear-gradient(160deg, rgba(255,255,255,0.94), rgba(241,245,249,0.5));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 95 | <code>}</code> | 结束当前 CSS 规则块。 |
| 96 | <code>.rk-pod--bronze {</code> | 选择器 `.rk-pod--bronze` 的样式块开始，下面定义这类元素的视觉表现。 |
| 97 | <code>    background: linear-gradient(160deg, rgba(255,255,255,0.94), rgba(255,237,213,0.4));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 98 | <code>}</code> | 结束当前 CSS 规则块。 |
| 99 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 100 | <code>.rk-pod-badge {</code> | 选择器 `.rk-pod-badge` 的样式块开始，下面定义这类元素的视觉表现。 |
| 101 | <code>    position: absolute; top: -14px;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 102 | <code>    width: 32px; height: 32px; border-radius: 50%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 103 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 104 | <code>    font-size: 13px; font-weight: 900; color: #fff; z-index: 2;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 105 | <code>}</code> | 结束当前 CSS 规则块。 |
| 106 | <code>.rk-pod--gold  .rk-pod-badge { width: 38px; height: 38px; background: linear-gradient(135deg, #f59e0b, #d97706); box-shadow: 0 6px 16px -4px rgba(245,158,11,0.55); }</code> | 设置 `.rk-pod--gold  .rk-pod-badge { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 107 | <code>.rk-pod--silver .rk-pod-badge { background: linear-gradient(135deg, #94a3b8, #64748b); box-shadow: 0 6px 14px -4px rgba(100,116,139,0.45); }</code> | 设置 `.rk-pod--silver .rk-pod-badge { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 108 | <code>.rk-pod--bronze .rk-pod-badge { background: linear-gradient(135deg, #d97706, #b45309); box-shadow: 0 6px 14px -4px rgba(180,83,9,0.45); }</code> | 设置 `.rk-pod--bronze .rk-pod-badge { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 109 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 110 | <code>.rk-pod-cover {</code> | 选择器 `.rk-pod-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 111 | <code>    width: 100%; max-width: 110px; aspect-ratio: 3/4;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 112 | <code>    border-radius: 0.875rem; overflow: hidden; margin-bottom: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 113 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 114 | <code>    box-shadow: 0 8px 20px -10px rgba(var(--color-brand-deep-rgb),0.28);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 115 | <code>}</code> | 结束当前 CSS 规则块。 |
| 116 | <code>.rk-pod--gold .rk-pod-cover {</code> | 选择器 `.rk-pod--gold .rk-pod-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 117 | <code>    max-width: 130px; box-shadow: 0 12px 28px -10px rgba(245,158,11,0.32);</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 118 | <code>}</code> | 结束当前 CSS 规则块。 |
| 119 | <code>.rk-pod-cover img {</code> | 选择器 `.rk-pod-cover img` 的样式块开始，下面定义这类元素的视觉表现。 |
| 120 | <code>    width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 121 | <code>}</code> | 结束当前 CSS 规则块。 |
| 122 | <code>.rk-pod:hover .rk-pod-cover img { transform: scale(1.05); }</code> | 设置 `.rk-pod` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 123 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 124 | <code>.rk-pod-name {</code> | 选择器 `.rk-pod-name` 的样式块开始，下面定义这类元素的视觉表现。 |
| 125 | <code>    font-weight: 700; font-size: 0.9rem; color: var(--color-brand-deep); text-decoration: none;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 126 | <code>    line-height: 1.3; margin-bottom: 3px;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 127 | <code>    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 128 | <code>    transition: color 0.15s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 129 | <code>}</code> | 结束当前 CSS 规则块。 |
| 130 | <code>.rk-pod-name:hover { color: var(--color-brand-primary-hover); }</code> | 设置 `.rk-pod-name` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 131 | <code>.rk-pod--gold .rk-pod-name { font-size: 1.05rem; font-family: &#x27;Cormorant&#x27;, serif; }</code> | 设置 `.rk-pod--gold .rk-pod-name { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 132 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 133 | <code>.rk-pod-author { font-size: 11.5px; color: rgba(var(--color-brand-deep-rgb),0.5); margin-bottom: 0.625rem; }</code> | 设置 `.rk-pod-author { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 134 | <code>.rk-pod-count  { font-size: 11.5px; font-weight: 700; color: var(--color-brand-primary-hover); margin-top: 0.375rem; }</code> | 设置 `.rk-pod-count  { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 135 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 136 | <code>/* ---- Heat bar (shared) ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 137 | <code>.rk-bar {</code> | 选择器 `.rk-bar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 138 | <code>    width: 100%; height: 6px; border-radius: 99px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 139 | <code>    background: rgba(var(--color-brand-primary-rgb),0.1); overflow: hidden;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 140 | <code>}</code> | 结束当前 CSS 规则块。 |
| 141 | <code>.rk-bar span {</code> | 选择器 `.rk-bar span` 的样式块开始，下面定义这类元素的视觉表现。 |
| 142 | <code>    display: block; height: 100%; border-radius: inherit;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 143 | <code>    background: linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 144 | <code>    transition: width 0.4s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 145 | <code>}</code> | 结束当前 CSS 规则块。 |
| 146 | <code>.rk-bar.sm { height: 5px; max-width: 180px; margin-top: 5px; }</code> | 设置 `.rk-bar.sm { height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 147 | <code>.rk-bar.xs { height: 4px; margin-top: 4px; }</code> | 设置 `.rk-bar.xs { height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 148 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 149 | <code>/* ---- Toolbar ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 150 | <code>.rk-toolbar {</code> | 选择器 `.rk-toolbar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 151 | <code>    display: flex; flex-direction: column; gap: 0.625rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 152 | <code>    margin-bottom: 1.5rem; padding: 0.75rem 1rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 153 | <code>    background: rgba(255,255,255,0.78); backdrop-filter: blur(10px);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 154 | <code>    border: 1px solid rgba(255,255,255,0.82); border-radius: 1.25rem;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 155 | <code>    box-shadow: 0 4px 14px -6px rgba(var(--color-brand-deep-rgb),0.08);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 156 | <code>}</code> | 结束当前 CSS 规则块。 |
| 157 | <code>.rk-search-wrap {</code> | 选择器 `.rk-search-wrap` 的样式块开始，下面定义这类元素的视觉表现。 |
| 158 | <code>    display: flex; align-items: center; gap: 8px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 159 | <code>    flex: 1; min-width: 180px;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 160 | <code>    padding: 0.45rem 0.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 161 | <code>    background: rgba(253,242,248,0.45);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 162 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb),0.1); border-radius: 0.75rem;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 163 | <code>    transition: border-color 0.2s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 164 | <code>}</code> | 结束当前 CSS 规则块。 |
| 165 | <code>.rk-search-wrap:focus-within { border-color: rgba(var(--color-brand-primary-rgb),0.35); }</code> | 设置 `.rk-search-wrap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 166 | <code>.rk-search-wrap svg { width: 18px; height: 18px; color: rgba(var(--color-brand-deep-rgb),0.35); flex-shrink: 0; }</code> | 设置 `.rk-search-wrap svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 167 | <code>.rk-search-wrap input {</code> | 选择器 `.rk-search-wrap input` 的样式块开始，下面定义这类元素的视觉表现。 |
| 168 | <code>    border: none; outline: none; background: transparent;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 169 | <code>    font-size: 13px; color: var(--color-brand-deep); width: 100%;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 170 | <code>    font-family: &#x27;Montserrat&#x27;, sans-serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 171 | <code>}</code> | 结束当前 CSS 规则块。 |
| 172 | <code>.rk-search-wrap input::placeholder { color: rgba(var(--color-brand-deep-rgb),0.3); }</code> | 设置 `.rk-search-wrap input` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 173 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 174 | <code>.rk-cats {</code> | 选择器 `.rk-cats` 的样式块开始，下面定义这类元素的视觉表现。 |
| 175 | <code>    display: flex; flex-wrap: nowrap; gap: 6px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 176 | <code>    overflow-x: auto; -webkit-overflow-scrolling: touch;</code> | 设置 `overflow-x` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 177 | <code>    scrollbar-width: none; padding-bottom: 2px;</code> | 设置 `scrollbar-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 178 | <code>    cursor: grab;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 179 | <code>}</code> | 结束当前 CSS 规则块。 |
| 180 | <code>.rk-cats:active { cursor: grabbing; }</code> | 设置 `.rk-cats` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 181 | <code>.rk-cats::-webkit-scrollbar { display: none; }</code> | 设置 `.rk-cats` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 182 | <code>.rk-cat {</code> | 选择器 `.rk-cat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 183 | <code>    padding: 5px 14px; border: 1px solid rgba(var(--color-brand-primary-rgb),0.12); border-radius: 999px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 184 | <code>    background: transparent; font-size: 12px; font-weight: 600;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 185 | <code>    color: rgba(var(--color-brand-deep-rgb),0.6); cursor: pointer; white-space: nowrap; flex-shrink: 0;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 186 | <code>    font-family: &#x27;Montserrat&#x27;, sans-serif; transition: all 0.2s;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 187 | <code>}</code> | 结束当前 CSS 规则块。 |
| 188 | <code>.rk-cat:hover { background: rgba(253,242,248,0.65); border-color: rgba(var(--color-brand-primary-rgb),0.25); }</code> | 设置 `.rk-cat` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 189 | <code>.rk-cat.is-active {</code> | 选择器 `.rk-cat.is-active` 的样式块开始，下面定义这类元素的视觉表现。 |
| 190 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 191 | <code>    color: #fff; border-color: transparent;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 192 | <code>    box-shadow: 0 4px 12px -4px rgba(var(--color-brand-primary-rgb),0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 193 | <code>}</code> | 结束当前 CSS 规则块。 |
| 194 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 195 | <code>/* ---- Body layout ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 196 | <code>.rk-body { display: grid; grid-template-columns: minmax(0,1fr); gap: 1.5rem; }</code> | 设置 `.rk-body { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 197 | <code>@media (min-width: 1024px) { .rk-body { grid-template-columns: minmax(0,1fr) 280px; } }</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 198 | <code>.rk-main { min-width: 0; }</code> | 设置 `.rk-main { min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 199 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 200 | <code>/* ---- List ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 201 | <code>.rk-list {</code> | 选择器 `.rk-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 202 | <code>    list-style: none; padding: 0; margin: 0;</code> | 设置 `list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 203 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 204 | <code>    background: rgba(255,255,255,0.85);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 205 | <code>    border: none; border-radius: 1.5rem; overflow: hidden;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 206 | <code>    box-shadow:</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 207 | <code>        0 8px 28px -10px rgba(var(--color-brand-deep-rgb),0.13),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 208 | <code>        inset 0 0 0 1.5px rgba(var(--color-brand-primary-rgb),0.15),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 209 | <code>        inset 0 1px 0 rgba(255,255,255,0.8);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 210 | <code>    height: calc(70vh + 5px); overflow-y: auto;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 211 | <code>    scrollbar-width: thin; scrollbar-color: rgba(var(--color-brand-primary-rgb),0.25) transparent;</code> | 设置 `scrollbar-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 212 | <code>}</code> | 结束当前 CSS 规则块。 |
| 213 | <code>.rk-list::-webkit-scrollbar { width: 6px; }</code> | 设置 `.rk-list` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 214 | <code>.rk-list::-webkit-scrollbar-track { background: transparent; }</code> | 设置 `.rk-list` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 215 | <code>.rk-list::-webkit-scrollbar-thumb {</code> | 选择器 `.rk-list::-webkit-scrollbar-thumb` 的样式块开始，下面定义这类元素的视觉表现。 |
| 216 | <code>    background: rgba(var(--color-brand-primary-rgb),0.25); border-radius: 99px;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 217 | <code>}</code> | 结束当前 CSS 规则块。 |
| 218 | <code>.rk-list::-webkit-scrollbar-thumb:hover { background: rgba(var(--color-brand-primary-rgb),0.4); }</code> | 设置 `.rk-list` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 219 | <code>.rk-row {</code> | 选择器 `.rk-row` 的样式块开始，下面定义这类元素的视觉表现。 |
| 220 | <code>    display: grid; grid-template-columns: 40px 52px minmax(0,1fr) auto;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 221 | <code>    gap: 0.75rem; align-items: center;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 222 | <code>    padding: 0.75rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 223 | <code>    border-bottom: 1px solid rgba(var(--color-brand-primary-rgb),0.08);</code> | 设置 `border-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 224 | <code>    transition: background 0.15s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 225 | <code>}</code> | 结束当前 CSS 规则块。 |
| 226 | <code>.rk-row:last-child { border-bottom: none; }</code> | 设置 `.rk-row` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 227 | <code>.rk-row:hover { background: rgba(253,242,248,0.45); }</code> | 设置 `.rk-row` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 228 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 229 | <code>.rk-row-rank {</code> | 选择器 `.rk-row-rank` 的样式块开始，下面定义这类元素的视觉表现。 |
| 230 | <code>    width: 32px; height: 32px; border-radius: 0.625rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 231 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 232 | <code>    font-weight: 900; font-size: 12px;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 233 | <code>    color: rgba(var(--color-brand-deep-rgb),0.55); background: rgba(var(--color-brand-deep-rgb),0.05);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 234 | <code>    font-variant-numeric: tabular-nums;</code> | 设置 `font-variant-numeric` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 235 | <code>}</code> | 结束当前 CSS 规则块。 |
| 236 | <code>.rk-row-rank.top {</code> | 选择器 `.rk-row-rank.top` 的样式块开始，下面定义这类元素的视觉表现。 |
| 237 | <code>    color: #fff; background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 238 | <code>    box-shadow: 0 5px 12px -5px rgba(var(--color-brand-primary-rgb),0.45);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 239 | <code>}</code> | 结束当前 CSS 规则块。 |
| 240 | <code>.rk-row-cover {</code> | 选择器 `.rk-row-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 241 | <code>    width: 52px; aspect-ratio: 3/4; border-radius: 0.5rem; overflow: hidden;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 242 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 243 | <code>    box-shadow: 0 4px 10px -5px rgba(var(--color-brand-deep-rgb),0.18);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 244 | <code>}</code> | 结束当前 CSS 规则块。 |
| 245 | <code>.rk-row-cover img { width: 100%; height: 100%; object-fit: cover; }</code> | 设置 `.rk-row-cover img { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 246 | <code>.rk-row-info { min-width: 0; }</code> | 设置 `.rk-row-info { min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 247 | <code>.rk-row-title {</code> | 选择器 `.rk-row-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 248 | <code>    display: block; font-weight: 700; font-size: 13.5px; color: var(--color-brand-deep);</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 249 | <code>    text-decoration: none; overflow-wrap: anywhere; transition: color 0.15s;</code> | 设置 `text-decoration` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 250 | <code>}</code> | 结束当前 CSS 规则块。 |
| 251 | <code>.rk-row-title:hover { color: var(--color-brand-primary-hover); }</code> | 设置 `.rk-row-title` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 252 | <code>.rk-row-info p {</code> | 选择器 `.rk-row-info p` 的样式块开始，下面定义这类元素的视觉表现。 |
| 253 | <code>    font-size: 11.5px; color: rgba(var(--color-brand-deep-rgb),0.5); margin-top: 2px; overflow-wrap: anywhere;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 254 | <code>}</code> | 结束当前 CSS 规则块。 |
| 255 | <code>.rk-row-num { text-align: right; min-width: 4rem; }</code> | 设置 `.rk-row-num { text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 256 | <code>.rk-row-num strong {</code> | 选择器 `.rk-row-num strong` 的样式块开始，下面定义这类元素的视觉表现。 |
| 257 | <code>    display: block; font-family: &#x27;Cormorant&#x27;, serif; font-size: 1.35rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 258 | <code>    color: var(--color-brand-deep); line-height: 1; font-variant-numeric: tabular-nums;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 259 | <code>}</code> | 结束当前 CSS 规则块。 |
| 260 | <code>.rk-row-num span { font-size: 11px; font-weight: 600; color: rgba(var(--color-brand-deep-rgb),0.45); }</code> | 设置 `.rk-row-num span { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 261 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 262 | <code>.rk-no-match { text-align: center; padding: 3rem 1rem; color: rgba(var(--color-brand-deep-rgb),0.45); font-size: 14px; }</code> | 设置 `.rk-no-match { text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 263 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 264 | <code>/* ---- Sidebar ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 265 | <code>.rk-side { display: flex; flex-direction: column; gap: 1rem; }</code> | 设置 `.rk-side { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 266 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 267 | <code>    .rk-side {</code> | 选择器 `.rk-side` 的样式块开始，下面定义这类元素的视觉表现。 |
| 268 | <code>        position: sticky; top: 2rem;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 269 | <code>        max-height: calc(100vh - 4rem); overflow-y: auto;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 270 | <code>        scrollbar-width: thin; scrollbar-color: rgba(var(--color-brand-primary-rgb),0.2) transparent;</code> | 设置 `scrollbar-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 271 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 272 | <code>    .rk-side::-webkit-scrollbar { width: 5px; }</code> | 设置 `.rk-side` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 273 | <code>    .rk-side::-webkit-scrollbar-thumb { background: rgba(var(--color-brand-primary-rgb),0.2); border-radius: 99px; }</code> | 设置 `.rk-side` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 274 | <code>}</code> | 结束当前 CSS 规则块。 |
| 275 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 276 | <code>.rk-card {</code> | 选择器 `.rk-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 277 | <code>    background: rgba(255,255,255,0.84); border: 1px solid rgba(255,255,255,0.86);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 278 | <code>    border-radius: 1.25rem; padding: 1rem 1.125rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 279 | <code>    box-shadow: 0 5px 18px -8px rgba(var(--color-brand-deep-rgb),0.1);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 280 | <code>}</code> | 结束当前 CSS 规则块。 |
| 281 | <code>.rk-card h3 {</code> | 选择器 `.rk-card h3` 的样式块开始，下面定义这类元素的视觉表现。 |
| 282 | <code>    font-family: &#x27;Cormorant&#x27;, serif; font-size: 1rem; font-weight: 700;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 283 | <code>    color: var(--color-brand-deep); margin-bottom: 0.75rem; padding-bottom: 0.5rem;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 284 | <code>    border-bottom: 1px solid rgba(var(--color-brand-primary-rgb),0.08);</code> | 设置 `border-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 285 | <code>}</code> | 结束当前 CSS 规则块。 |
| 286 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 287 | <code>/* Overview ring */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 288 | <code>.rk-overview { display: grid; grid-template-columns: 100px 1fr; gap: 0.875rem; align-items: center; }</code> | 设置 `.rk-overview { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 289 | <code>.rk-ring { position: relative; width: 100px; height: 100px; }</code> | 设置 `.rk-ring { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 290 | <code>.rk-ring svg { width: 100%; height: 100%; }</code> | 设置 `.rk-ring svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 291 | <code>.rk-ring-bg { fill: none; stroke: rgba(var(--color-brand-primary-rgb),0.08); stroke-width: 7; }</code> | 设置 `.rk-ring-bg { fill` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 292 | <code>.rk-ring-fg { fill: none; stroke: url(#rkGrad); stroke-width: 7; stroke-linecap: round; }</code> | 设置 `.rk-ring-fg { fill` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 293 | <code>.rk-ring-center {</code> | 选择器 `.rk-ring-center` 的样式块开始，下面定义这类元素的视觉表现。 |
| 294 | <code>    position: absolute; inset: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 295 | <code>    display: flex; flex-direction: column; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 296 | <code>}</code> | 结束当前 CSS 规则块。 |
| 297 | <code>.rk-ring-center b {</code> | 选择器 `.rk-ring-center b` 的样式块开始，下面定义这类元素的视觉表现。 |
| 298 | <code>    font-family: &#x27;Cormorant&#x27;, serif; font-size: 1.4rem; font-weight: 700; color: var(--color-brand-deep); line-height: 1;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 299 | <code>}</code> | 结束当前 CSS 规则块。 |
| 300 | <code>.rk-ring-center span { font-size: 10px; font-weight: 600; color: rgba(var(--color-brand-deep-rgb),0.45); margin-top: 2px; }</code> | 设置 `.rk-ring-center span { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 301 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 302 | <code>.rk-ov-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }</code> | 设置 `.rk-ov-list { list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 303 | <code>.rk-ov-list li { display: flex; align-items: center; gap: 7px; font-size: 11.5px; color: rgba(var(--color-brand-deep-rgb),0.55); }</code> | 设置 `.rk-ov-list li { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 304 | <code>.rk-ov-list b { margin-left: auto; font-family: &#x27;Cormorant&#x27;, serif; font-size: 1.05rem; color: var(--color-brand-deep); }</code> | 设置 `.rk-ov-list b { margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 305 | <code>.rk-ov-list i { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }</code> | 设置 `.rk-ov-list i { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 306 | <code>.dot-pk { background: var(--color-brand-primary); }</code> | 设置 `.dot-pk { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 307 | <code>.dot-am { background: #f59e0b; }</code> | 设置 `.dot-am { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 308 | <code>.dot-em { background: #10b981; }</code> | 设置 `.dot-em { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 309 | <code>.dot-pu { background: var(--color-brand-accent); }</code> | 设置 `.dot-pu { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 310 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 311 | <code>/* Mini top 3 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 312 | <code>.rk-mini3 { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }</code> | 设置 `.rk-mini3 { list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 313 | <code>.rk-mini3 &gt; li { display: flex; align-items: flex-start; gap: 10px; }</code> | 设置 `.rk-mini3 &gt; li { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 314 | <code>.rk-mini3-rank {</code> | 选择器 `.rk-mini3-rank` 的样式块开始，下面定义这类元素的视觉表现。 |
| 315 | <code>    font-family: &#x27;Cormorant&#x27;, serif; font-size: 1.4rem; font-weight: 700; line-height: 1; min-width: 26px;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 316 | <code>}</code> | 结束当前 CSS 规则块。 |
| 317 | <code>.r1 .rk-mini3-rank { color: rgba(var(--color-brand-primary-rgb),0.65); }</code> | 设置 `.r1 .rk-mini3-rank { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 318 | <code>.r2 .rk-mini3-rank { color: rgba(168,85,247,0.45); }</code> | 设置 `.r2 .rk-mini3-rank { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 319 | <code>.r3 .rk-mini3-rank { color: rgba(var(--color-brand-deep-rgb),0.2); }</code> | 设置 `.r3 .rk-mini3-rank { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 320 | <code>.rk-mini3-body { flex: 1; min-width: 0; }</code> | 设置 `.rk-mini3-body { flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 321 | <code>.rk-mini3-head {</code> | 选择器 `.rk-mini3-head` 的样式块开始，下面定义这类元素的视觉表现。 |
| 322 | <code>    display: flex; justify-content: space-between; gap: 6px; font-size: 12px; line-height: 1.4;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 323 | <code>}</code> | 结束当前 CSS 规则块。 |
| 324 | <code>.rk-mini3-head span { color: var(--color-brand-deep); font-weight: 600; overflow-wrap: anywhere; }</code> | 设置 `.rk-mini3-head span { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 325 | <code>.rk-mini3-head b { flex-shrink: 0; color: var(--color-brand-primary-hover); font-weight: 800; font-size: 11px; }</code> | 设置 `.rk-mini3-head b { flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 326 | <code>.r1 .rk-bar.xs span { background: linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent)); }</code> | 设置 `.r1 .rk-bar.xs span { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 327 | <code>.r2 .rk-bar.xs span { background: linear-gradient(90deg, #f472b6, #c084fc); }</code> | 设置 `.r2 .rk-bar.xs span { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 328 | <code>.r3 .rk-bar.xs span { background: linear-gradient(90deg, #fbcfe8, #e9d5ff); }</code> | 设置 `.r3 .rk-bar.xs span { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 329 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 330 | <code>/* Tips */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 331 | <code>.rk-tips { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }</code> | 设置 `.rk-tips { list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 332 | <code>.rk-tips li { display: flex; gap: 8px; align-items: flex-start; }</code> | 设置 `.rk-tips li { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 333 | <code>.rk-tips b { font-family: &#x27;Cormorant&#x27;, serif; font-size: 0.95rem; color: rgba(var(--color-brand-deep-rgb),0.2); min-width: 20px; }</code> | 设置 `.rk-tips b { font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 334 | <code>.rk-tips p { font-size: 12px; line-height: 1.6; color: rgba(var(--color-brand-deep-rgb),0.55); margin: 0; }</code> | 设置 `.rk-tips p { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 335 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 336 | <code>/* ---- Empty state ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 337 | <code>.rk-empty {</code> | 选择器 `.rk-empty` 的样式块开始，下面定义这类元素的视觉表现。 |
| 338 | <code>    text-align: center; padding: 5rem 1rem 4rem; max-width: 22rem; margin: 0 auto;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 339 | <code>}</code> | 结束当前 CSS 规则块。 |
| 340 | <code>.rk-empty svg { width: 48px; height: 48px; color: rgba(var(--color-brand-deep-rgb),0.2); margin: 0 auto 1.25rem; display: block; }</code> | 设置 `.rk-empty svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 341 | <code>.rk-empty h3 {</code> | 选择器 `.rk-empty h3` 的样式块开始，下面定义这类元素的视觉表现。 |
| 342 | <code>    font-family: &#x27;Cormorant&#x27;, serif; font-size: 1.2rem; color: var(--color-brand-deep); margin-bottom: 0.5rem;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 343 | <code>}</code> | 结束当前 CSS 规则块。 |
| 344 | <code>.rk-empty p { font-size: 13px; color: rgba(var(--color-brand-deep-rgb),0.45); margin-bottom: 1.5rem; }</code> | 设置 `.rk-empty p { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 345 | <code>.rk-empty-btn {</code> | 选择器 `.rk-empty-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 346 | <code>    display: inline-flex; align-items: center; gap: 6px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 347 | <code>    padding: 10px 24px; border-radius: 999px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 348 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent)); color: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 349 | <code>    font-size: 13px; font-weight: 700; text-decoration: none;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 350 | <code>    box-shadow: 0 8px 20px -8px rgba(var(--color-brand-primary-rgb),0.45);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 351 | <code>    transition: transform 0.2s, box-shadow 0.2s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 352 | <code>}</code> | 结束当前 CSS 规则块。 |
| 353 | <code>.rk-empty-btn:hover {</code> | 选择器 `.rk-empty-btn:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 354 | <code>    transform: translateY(-2px); box-shadow: 0 12px 26px -8px rgba(var(--color-brand-primary-rgb),0.55);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 355 | <code>}</code> | 结束当前 CSS 规则块。 |
| 356 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 357 | <code>/* ---- Focus styles ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 358 | <code>.rk-pod-name:focus-visible,</code> | 设置 `.rk-pod-name` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 359 | <code>.rk-row-title:focus-visible {</code> | 选择器 `.rk-row-title:focus-visible` 的样式块开始，下面定义这类元素的视觉表现。 |
| 360 | <code>    outline: 3px solid rgba(var(--color-brand-deep-rgb),0.65); outline-offset: 2px; border-radius: 4px;</code> | 设置 `outline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 361 | <code>}</code> | 结束当前 CSS 规则块。 |
| 362 | <code>.rk-cat:focus-visible { outline: 3px solid rgba(var(--color-brand-deep-rgb),0.65); outline-offset: 2px; }</code> | 设置 `.rk-cat` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 363 | <code>.rk-back:focus-visible { outline: 3px solid rgba(var(--color-brand-deep-rgb),0.65); outline-offset: 2px; }</code> | 设置 `.rk-back` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 364 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 365 | <code>/* ---- Responsive ---- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 366 | <code>@media (max-width: 767px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 367 | <code>    .rk-hero { padding: 2rem 1rem 1.5rem; }</code> | 设置 `.rk-hero { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 368 | <code>    .rk-title { font-size: clamp(2rem, 1rem + 4vw, 3rem); }</code> | 设置 `.rk-title { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 369 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 370 | <code>    .rk-podium { grid-template-columns: 1fr 1fr; align-items: stretch; }</code> | 设置 `.rk-podium { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 371 | <code>    .rk-pod--gold { grid-column: 1 / -1; order: -1; }</code> | 设置 `.rk-pod--gold { grid-column` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 372 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 373 | <code>    .rk-back span { display: none; }</code> | 设置 `.rk-back span { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 374 | <code>    .rk-back { padding: 10px; border-radius: 0.875rem; }</code> | 设置 `.rk-back { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 375 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 376 | <code>    .rk-row { grid-template-columns: 32px 44px minmax(0,1fr); gap: 0.6rem; }</code> | 设置 `.rk-row { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 377 | <code>    .rk-row-rank { width: 28px; height: 28px; font-size: 11px; }</code> | 设置 `.rk-row-rank { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 378 | <code>    .rk-row-cover { width: 44px; }</code> | 设置 `.rk-row-cover { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 379 | <code>    .rk-row-num {</code> | 选择器 `.rk-row-num` 的样式块开始，下面定义这类元素的视觉表现。 |
| 380 | <code>        grid-column: 3; justify-self: start; display: flex;</code> | 设置 `grid-column` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 381 | <code>        align-items: baseline; gap: 4px; text-align: left; min-width: 0;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 382 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 383 | <code>    .rk-row-num strong { font-size: 1.1rem; }</code> | 设置 `.rk-row-num strong { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 384 | <code>}</code> | 结束当前 CSS 规则块。 |
| 385 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 386 | <code>@media (max-width: 480px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 387 | <code>    .rk-stats { gap: 0.5rem; }</code> | 设置 `.rk-stats { gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 388 | <code>    .rk-stat { padding: 0.5rem 0.75rem; min-width: 72px; }</code> | 设置 `.rk-stat { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 389 | <code>    .rk-stat strong { font-size: 1.3rem; }</code> | 设置 `.rk-stat strong { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 390 | <code>    .rk-podium { grid-template-columns: 1fr; }</code> | 设置 `.rk-podium { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 391 | <code>}</code> | 结束当前 CSS 规则块。 |
| 392 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 393 | <code>@media (prefers-reduced-motion: reduce) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 394 | <code>    .rk *, .rk *::before, .rk *::after {</code> | 选择器 `.rk *, .rk *::before, .rk *::after` 的样式块开始，下面定义这类元素的视觉表现。 |
| 395 | <code>        animation: none !important; transition: none !important;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 396 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 397 | <code>}</code> | 结束当前 CSS 规则块。 |
