# static/css/borrow-sidebar.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>﻿/* ===== 侧栏卡片 ===== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code>.aside-card {</code> | 选择器 `.aside-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 3 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 4 | <code>    padding: 1.125rem 1.25rem 1.25rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 5 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 6 | <code>    background: rgba(255, 255, 255, 0.85);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 7 | <code>    backdrop-filter: blur(14px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 8 | <code>    -webkit-backdrop-filter: blur(14px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 9 | <code>    border: 1px solid rgba(255, 255, 255, 0.7);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 10 | <code>    box-shadow: 0 12px 28px -20px rgba(var(--color-brand-deep-rgb), 0.25);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 11 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 12 | <code>}</code> | 结束当前 CSS 规则块。 |
| 13 | <code>.aside-card-head {</code> | 选择器 `.aside-card-head` 的样式块开始，下面定义这类元素的视觉表现。 |
| 14 | <code>    display: flex; align-items: center; justify-content: space-between;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 15 | <code>    margin-bottom: 0.875rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 16 | <code>}</code> | 结束当前 CSS 规则块。 |
| 17 | <code>.aside-card-title { display: inline-flex; align-items: center; gap: 8px; }</code> | 设置 `.aside-card-title { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 18 | <code>.aside-card-title h3 {</code> | 选择器 `.aside-card-title h3` 的样式块开始，下面定义这类元素的视觉表现。 |
| 19 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 20 | <code>    font-size: 1.0625rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 21 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 22 | <code>    margin: 0;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 23 | <code>}</code> | 结束当前 CSS 规则块。 |
| 24 | <code>.aside-icon {</code> | 选择器 `.aside-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 25 | <code>    width: 30px; height: 30px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 26 | <code>    border-radius: 0.625rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 27 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 28 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 29 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 30 | <code>}</code> | 结束当前 CSS 规则块。 |
| 31 | <code>.aside-icon svg { width: 15px; height: 15px; }</code> | 设置 `.aside-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 32 | <code>.aside-icon.tone-pink    { background: linear-gradient(135deg, #f472b6, var(--color-brand-primary)); }</code> | 设置 `.aside-icon.tone-pink    { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 33 | <code>.aside-icon.tone-purple  { background: linear-gradient(135deg, #c084fc, var(--color-brand-accent)); }</code> | 设置 `.aside-icon.tone-purple  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 34 | <code>.aside-icon.tone-amber   { background: linear-gradient(135deg, #fbbf24, #f59e0b); }</code> | 设置 `.aside-icon.tone-amber   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 35 | <code>.aside-icon.tone-emerald { background: linear-gradient(135deg, #34d399, #10b981); }</code> | 设置 `.aside-icon.tone-emerald { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 36 | <code>.aside-card-eye {</code> | 选择器 `.aside-card-eye` 的样式块开始，下面定义这类元素的视觉表现。 |
| 37 | <code>    font-size: 9.5px; font-weight: 800;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 38 | <code>    letter-spacing: 0.22em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 39 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 40 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.4);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 41 | <code>}</code> | 结束当前 CSS 规则块。 |
| 42 | <code>.aside-card-eye.pulse {</code> | 选择器 `.aside-card-eye.pulse` 的样式块开始，下面定义这类元素的视觉表现。 |
| 43 | <code>    background: linear-gradient(135deg, #fef3c7, #fed7aa);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 44 | <code>    color: #92400e;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 45 | <code>    padding: 2px 8px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 46 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 47 | <code>    animation: pulse-eye 2.4s ease-in-out infinite;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 48 | <code>}</code> | 结束当前 CSS 规则块。 |
| 49 | <code>@keyframes pulse-eye {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 50 | <code>    0%, 100% { box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.3); }</code> | 设置 `0%, 100% { box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 51 | <code>    50%      { box-shadow: 0 0 0 6px rgba(245, 158, 11, 0); }</code> | 设置 `50%      { box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 52 | <code>}</code> | 结束当前 CSS 规则块。 |
| 53 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 54 | <code>/* ----- 阅读概览 ring + list ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 55 | <code>.overview-content {</code> | 选择器 `.overview-content` 的样式块开始，下面定义这类元素的视觉表现。 |
| 56 | <code>    display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 57 | <code>    grid-template-columns: 110px 1fr;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 58 | <code>    gap: 1rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 59 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 60 | <code>}</code> | 结束当前 CSS 规则块。 |
| 61 | <code>.overview-ring { position: relative; width: 110px; height: 110px; }</code> | 设置 `.overview-ring { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 62 | <code>.overview-ring svg { width: 100%; height: 100%; }</code> | 设置 `.overview-ring svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 63 | <code>.overview-ring .ring-bg {</code> | 选择器 `.overview-ring .ring-bg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 64 | <code>    fill: none;</code> | 设置 `fill` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 65 | <code>    stroke: rgba(236, 72, 153, 0.08);</code> | 设置 `stroke` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 66 | <code>    stroke-width: 10;</code> | 设置 `stroke-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 67 | <code>}</code> | 结束当前 CSS 规则块。 |
| 68 | <code>.overview-ring .ring-fg {</code> | 选择器 `.overview-ring .ring-fg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 69 | <code>    fill: none;</code> | 设置 `fill` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 70 | <code>    stroke-width: 10;</code> | 设置 `stroke-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 71 | <code>    stroke-linecap: round;</code> | 设置 `stroke-linecap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 72 | <code>    transition: stroke-dasharray 0.6s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 73 | <code>}</code> | 结束当前 CSS 规则块。 |
| 74 | <code>.overview-ring .ring-center {</code> | 选择器 `.overview-ring .ring-center` 的样式块开始，下面定义这类元素的视觉表现。 |
| 75 | <code>    position: absolute; inset: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 76 | <code>    display: flex; flex-direction: column;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 77 | <code>    align-items: center; justify-content: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 78 | <code>}</code> | 结束当前 CSS 规则块。 |
| 79 | <code>.overview-ring .ring-num {</code> | 选择器 `.overview-ring .ring-num` 的样式块开始，下面定义这类元素的视觉表现。 |
| 80 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 81 | <code>    font-size: 1.625rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 82 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 83 | <code>    line-height: 1;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 84 | <code>    font-variant-numeric: tabular-nums;</code> | 设置 `font-variant-numeric` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 85 | <code>}</code> | 结束当前 CSS 规则块。 |
| 86 | <code>.overview-ring .ring-num small {</code> | 选择器 `.overview-ring .ring-num small` 的样式块开始，下面定义这类元素的视觉表现。 |
| 87 | <code>    font-size: 0.75rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 88 | <code>    margin-left: 1px;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 89 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 90 | <code>}</code> | 结束当前 CSS 规则块。 |
| 91 | <code>.overview-ring .ring-label {</code> | 选择器 `.overview-ring .ring-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 92 | <code>    margin-top: 4px;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 93 | <code>    font-size: 10px; font-weight: 800;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 94 | <code>    letter-spacing: 0.18em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 95 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 96 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.45);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 97 | <code>}</code> | 结束当前 CSS 规则块。 |
| 98 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 99 | <code>.overview-list {</code> | 选择器 `.overview-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 100 | <code>    list-style: none; padding: 0; margin: 0;</code> | 设置 `list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 101 | <code>    display: flex; flex-direction: column; gap: 0.4rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 102 | <code>}</code> | 结束当前 CSS 规则块。 |
| 103 | <code>.overview-list li {</code> | 选择器 `.overview-list li` 的样式块开始，下面定义这类元素的视觉表现。 |
| 104 | <code>    display: flex; align-items: center; gap: 8px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 105 | <code>    font-size: 12px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 106 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.7);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 107 | <code>}</code> | 结束当前 CSS 规则块。 |
| 108 | <code>.overview-list .dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }</code> | 设置 `.overview-list .dot { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 109 | <code>.overview-list .lbl { flex: 1; }</code> | 设置 `.overview-list .lbl { flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 110 | <code>.overview-list strong {</code> | 选择器 `.overview-list strong` 的样式块开始，下面定义这类元素的视觉表现。 |
| 111 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 112 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 113 | <code>    font-variant-numeric: tabular-nums;</code> | 设置 `font-variant-numeric` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 114 | <code>}</code> | 结束当前 CSS 规则块。 |
| 115 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 116 | <code>.overview-level {</code> | 选择器 `.overview-level` 的样式块开始，下面定义这类元素的视觉表现。 |
| 117 | <code>    margin-top: 1rem;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 118 | <code>    padding: 10px 12px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 119 | <code>    border-radius: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 120 | <code>    display: flex; align-items: center; gap: 10px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 121 | <code>}</code> | 结束当前 CSS 规则块。 |
| 122 | <code>.overview-level.tone-pink    { background: linear-gradient(135deg, #fdf2f8, #fce7f3); }</code> | 设置 `.overview-level.tone-pink    { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 123 | <code>.overview-level.tone-emerald { background: linear-gradient(135deg, #ecfdf5, #d1fae5); }</code> | 设置 `.overview-level.tone-emerald { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 124 | <code>.overview-level.tone-blue    { background: linear-gradient(135deg, #eff6ff, #dbeafe); }</code> | 设置 `.overview-level.tone-blue    { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 125 | <code>.overview-level.tone-orange  { background: linear-gradient(135deg, #fff7ed, #fed7aa); }</code> | 设置 `.overview-level.tone-orange  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 126 | <code>.overview-level .level-badge {</code> | 选择器 `.overview-level .level-badge` 的样式块开始，下面定义这类元素的视觉表现。 |
| 127 | <code>    width: 28px; height: 28px; border-radius: 8px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 128 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 129 | <code>    background: rgba(255, 255, 255, 0.7);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 130 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 131 | <code>}</code> | 结束当前 CSS 规则块。 |
| 132 | <code>.overview-level.tone-pink    .level-badge svg { color: var(--color-brand-primary); }</code> | 设置 `.overview-level.tone-pink    .level-badge svg { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 133 | <code>.overview-level.tone-emerald .level-badge svg { color: #10b981; }</code> | 设置 `.overview-level.tone-emerald .level-badge svg { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 134 | <code>.overview-level.tone-blue    .level-badge svg { color: #3b82f6; }</code> | 设置 `.overview-level.tone-blue    .level-badge svg { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 135 | <code>.overview-level.tone-orange  .level-badge svg { color: #f97316; }</code> | 设置 `.overview-level.tone-orange  .level-badge svg { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 136 | <code>.overview-level .level-badge svg { width: 14px; height: 14px; }</code> | 设置 `.overview-level .level-badge svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 137 | <code>.overview-level .level-name {</code> | 选择器 `.overview-level .level-name` 的样式块开始，下面定义这类元素的视觉表现。 |
| 138 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 139 | <code>    font-size: 1rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 140 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 141 | <code>    line-height: 1.1;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 142 | <code>}</code> | 结束当前 CSS 规则块。 |
| 143 | <code>.overview-level .level-desc {</code> | 选择器 `.overview-level .level-desc` 的样式块开始，下面定义这类元素的视觉表现。 |
| 144 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 145 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 146 | <code>    margin-top: 1px;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 147 | <code>}</code> | 结束当前 CSS 规则块。 |
| 148 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 149 | <code>/* ----- 阅读偏好 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 150 | <code>.pref-list {</code> | 选择器 `.pref-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 151 | <code>    list-style: none; padding: 0; margin: 0;</code> | 设置 `list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 152 | <code>    display: flex; flex-direction: column; gap: 0.875rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 153 | <code>}</code> | 结束当前 CSS 规则块。 |
| 154 | <code>.pref-item {</code> | 选择器 `.pref-item` 的样式块开始，下面定义这类元素的视觉表现。 |
| 155 | <code>    display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 156 | <code>    grid-template-columns: 32px 1fr;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 157 | <code>    gap: 10px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 158 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 159 | <code>}</code> | 结束当前 CSS 规则块。 |
| 160 | <code>.pref-rank {</code> | 选择器 `.pref-rank` 的样式块开始，下面定义这类元素的视觉表现。 |
| 161 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 162 | <code>    font-size: 1.375rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 163 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.25);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 164 | <code>    line-height: 1;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 165 | <code>    text-align: center;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 166 | <code>}</code> | 结束当前 CSS 规则块。 |
| 167 | <code>.pref-item.rank-1 .pref-rank {</code> | 选择器 `.pref-item.rank-1 .pref-rank` 的样式块开始，下面定义这类元素的视觉表现。 |
| 168 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 169 | <code>    -webkit-background-clip: text; background-clip: text;</code> | 设置 `-webkit-background-clip` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 170 | <code>    color: transparent;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 171 | <code>    opacity: 0.95;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 172 | <code>}</code> | 结束当前 CSS 规则块。 |
| 173 | <code>.pref-item.rank-2 .pref-rank { color: rgba(168, 85, 247, 0.55); }</code> | 设置 `.pref-item.rank-2 .pref-rank { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 174 | <code>.pref-meta { min-width: 0; }</code> | 设置 `.pref-meta { min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 175 | <code>.pref-row { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 4px; }</code> | 设置 `.pref-row { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 176 | <code>.pref-name {</code> | 选择器 `.pref-name` 的样式块开始，下面定义这类元素的视觉表现。 |
| 177 | <code>    font-size: 13px; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 178 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 179 | <code>    white-space: nowrap;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 180 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 181 | <code>    text-overflow: ellipsis;</code> | 设置 `text-overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 182 | <code>    max-width: 65%;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 183 | <code>}</code> | 结束当前 CSS 规则块。 |
| 184 | <code>.pref-count { font-size: 11px; color: rgba(var(--color-brand-deep-rgb), 0.5); font-variant-numeric: tabular-nums; }</code> | 设置 `.pref-count { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 185 | <code>.pref-bar {</code> | 选择器 `.pref-bar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 186 | <code>    height: 6px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 187 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 188 | <code>    background: rgba(236, 72, 153, 0.08);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 189 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 190 | <code>}</code> | 结束当前 CSS 规则块。 |
| 191 | <code>.pref-fill {</code> | 选择器 `.pref-fill` 的样式块开始，下面定义这类元素的视觉表现。 |
| 192 | <code>    display: block; height: 100%;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 193 | <code>    background: linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 194 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 195 | <code>    transition: width 0.4s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 196 | <code>}</code> | 结束当前 CSS 规则块。 |
| 197 | <code>.pref-item.rank-2 .pref-fill { background: linear-gradient(90deg, #f472b6, #c084fc); }</code> | 设置 `.pref-item.rank-2 .pref-fill { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 198 | <code>.pref-item.rank-3 .pref-fill { background: linear-gradient(90deg, #fbcfe8, #e9d5ff); }</code> | 设置 `.pref-item.rank-3 .pref-fill { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 199 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 200 | <code>/* ----- 即将到期 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 201 | <code>.due-list {</code> | 选择器 `.due-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 202 | <code>    list-style: none; padding: 0; margin: 0;</code> | 设置 `list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 203 | <code>    display: flex; flex-direction: column; gap: 0.5rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 204 | <code>}</code> | 结束当前 CSS 规则块。 |
| 205 | <code>.due-item { border-radius: 0.75rem; transition: background 0.2s ease; }</code> | 设置 `.due-item { border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 206 | <code>.due-item:hover { background: rgba(236, 72, 153, 0.05); }</code> | 设置 `.due-item` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 207 | <code>.due-link {</code> | 选择器 `.due-link` 的样式块开始，下面定义这类元素的视觉表现。 |
| 208 | <code>    display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 209 | <code>    grid-template-columns: 36px 1fr;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 210 | <code>    gap: 10px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 211 | <code>    padding: 6px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 212 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 213 | <code>}</code> | 结束当前 CSS 规则块。 |
| 214 | <code>.due-cover {</code> | 选择器 `.due-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 215 | <code>    width: 36px; height: 48px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 216 | <code>    border-radius: 0.375rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 217 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 218 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 219 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 220 | <code>}</code> | 结束当前 CSS 规则块。 |
| 221 | <code>.due-cover img { width: 100%; height: 100%; object-fit: cover; }</code> | 设置 `.due-cover img { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 222 | <code>.due-meta { min-width: 0; }</code> | 设置 `.due-meta { min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 223 | <code>.due-title {</code> | 选择器 `.due-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 224 | <code>    font-size: 12.5px; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 225 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 226 | <code>    line-height: 1.3;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 227 | <code>    display: -webkit-box;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 228 | <code>    -webkit-line-clamp: 2;</code> | 设置 `-webkit-line-clamp` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 229 | <code>    -webkit-box-orient: vertical;</code> | 设置 `-webkit-box-orient` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 230 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 231 | <code>    margin-bottom: 4px;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 232 | <code>}</code> | 结束当前 CSS 规则块。 |
| 233 | <code>.due-pill {</code> | 选择器 `.due-pill` 的样式块开始，下面定义这类元素的视觉表现。 |
| 234 | <code>    display: inline-block;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 235 | <code>    padding: 2px 7px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 236 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 237 | <code>    font-size: 10px; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 238 | <code>    letter-spacing: 0.02em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 239 | <code>}</code> | 结束当前 CSS 规则块。 |
| 240 | <code>.due-pill.is-soon     { background: #fef3c7; color: #92400e; }</code> | 设置 `.due-pill.is-soon     { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 241 | <code>.due-pill.is-today    { background: #fed7aa; color: #9a3412; }</code> | 设置 `.due-pill.is-today    { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 242 | <code>.due-pill.is-overdue  { background: #fee2e2; color: #991b1b; }</code> | 设置 `.due-pill.is-overdue  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 243 | <code>.due-item.is-overdue { background: rgba(239, 68, 68, 0.04); border: 1px dashed rgba(239, 68, 68, 0.2); }</code> | 设置 `.due-item.is-overdue { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 244 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 245 | <code>/* ----- 借阅小贴士 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 246 | <code>.tips-card {</code> | 选择器 `.tips-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 247 | <code>    background:</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 248 | <code>        radial-gradient(circle at top right, rgba(236, 72, 153, 0.08), transparent 60%),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 249 | <code>        rgba(255, 255, 255, 0.85);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 250 | <code>}</code> | 结束当前 CSS 规则块。 |
| 251 | <code>.tips-list {</code> | 选择器 `.tips-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 252 | <code>    list-style: none; padding: 0; margin: 0;</code> | 设置 `list-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 253 | <code>    display: flex; flex-direction: column; gap: 0.75rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 254 | <code>}</code> | 结束当前 CSS 规则块。 |
| 255 | <code>.tips-list li {</code> | 选择器 `.tips-list li` 的样式块开始，下面定义这类元素的视觉表现。 |
| 256 | <code>    display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 257 | <code>    grid-template-columns: 28px 1fr;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 258 | <code>    gap: 10px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 259 | <code>    align-items: start;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 260 | <code>}</code> | 结束当前 CSS 规则块。 |
| 261 | <code>.tip-num {</code> | 选择器 `.tip-num` 的样式块开始，下面定义这类元素的视觉表现。 |
| 262 | <code>    width: 28px; height: 28px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 263 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 264 | <code>    border-radius: 0.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 265 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 266 | <code>    font-size: 0.75rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 267 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 268 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 269 | <code>    letter-spacing: 0.05em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 270 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 271 | <code>}</code> | 结束当前 CSS 规则块。 |
| 272 | <code>.tips-list li p {</code> | 选择器 `.tips-list li p` 的样式块开始，下面定义这类元素的视觉表现。 |
| 273 | <code>    font-size: 12.5px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 274 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.7);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 275 | <code>    line-height: 1.55;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 276 | <code>    margin: 0;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 277 | <code>}</code> | 结束当前 CSS 规则块。 |
| 278 | <code>.tips-list li strong { color: var(--color-brand-primary); font-weight: 700; }</code> | 设置 `.tips-list li strong { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
