# static/css/admin.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>﻿/* ==================== 管理后台 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code>.admin-kpi {</code> | 选择器 `.admin-kpi` 的样式块开始，下面定义这类元素的视觉表现。 |
| 3 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 4 | <code>    padding: 1rem 1.125rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 5 | <code>    border-radius: 1.125rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 6 | <code>    background: rgba(255, 255, 255, 0.85);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 7 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb), 0.08);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 8 | <code>    backdrop-filter: blur(12px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 9 | <code>    -webkit-backdrop-filter: blur(12px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 10 | <code>    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 11 | <code>}</code> | 结束当前 CSS 规则块。 |
| 12 | <code>.admin-kpi:hover {</code> | 选择器 `.admin-kpi:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 13 | <code>    transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 14 | <code>    border-color: rgba(var(--color-brand-primary-rgb), 0.25);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 15 | <code>    box-shadow: 0 14px 28px -18px rgba(var(--color-brand-primary-rgb), 0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 16 | <code>}</code> | 结束当前 CSS 规则块。 |
| 17 | <code>.admin-kpi-label {</code> | 选择器 `.admin-kpi-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 18 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 19 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 20 | <code>    letter-spacing: 0.08em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 21 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 22 | <code>    color: rgba(131, 24, 67, 0.5);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 23 | <code>}</code> | 结束当前 CSS 规则块。 |
| 24 | <code>.admin-kpi-value {</code> | 选择器 `.admin-kpi-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 25 | <code>    margin-top: 0.125rem;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 26 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 27 | <code>    font-size: 2.25rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 28 | <code>    line-height: 1;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 29 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 30 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 31 | <code>}</code> | 结束当前 CSS 规则块。 |
| 32 | <code>.admin-kpi-trend {</code> | 选择器 `.admin-kpi-trend` 的样式块开始，下面定义这类元素的视觉表现。 |
| 33 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 34 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 35 | <code>    gap: 4px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 36 | <code>    margin-top: 6px;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 37 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 38 | <code>    font-weight: 600;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 39 | <code>}</code> | 结束当前 CSS 规则块。 |
| 40 | <code>.admin-kpi-trend.is-up   { color: #059669; }</code> | 设置 `.admin-kpi-trend.is-up   { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 41 | <code>.admin-kpi-trend.is-warn { color: #b45309; }</code> | 设置 `.admin-kpi-trend.is-warn { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 42 | <code>.admin-kpi-icon {</code> | 选择器 `.admin-kpi-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 43 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 44 | <code>    top: 0.875rem;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 45 | <code>    right: 0.875rem;</code> | 设置 `right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 46 | <code>    width: 2rem; height: 2rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 47 | <code>    border-radius: 0.625rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 48 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 49 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 50 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 51 | <code>}</code> | 结束当前 CSS 规则块。 |
| 52 | <code>.admin-kpi.tone-online   .admin-kpi-icon { background: linear-gradient(135deg, #34d399, #10b981); color: #fff; }</code> | 设置 `.admin-kpi.tone-online   .admin-kpi-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 53 | <code>.admin-kpi.tone-books    .admin-kpi-icon { background: linear-gradient(135deg, #f472b6, var(--color-brand-primary)); color: #fff; }</code> | 设置 `.admin-kpi.tone-books    .admin-kpi-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 54 | <code>.admin-kpi.tone-pending  .admin-kpi-icon { background: linear-gradient(135deg, #fbbf24, #f59e0b); color: #fff; }</code> | 设置 `.admin-kpi.tone-pending  .admin-kpi-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 55 | <code>.admin-kpi.tone-history  .admin-kpi-icon { background: linear-gradient(135deg, #a78bfa, #8b5cf6); color: #fff; }</code> | 设置 `.admin-kpi.tone-history  .admin-kpi-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 56 | <code>.admin-kpi.tone-users    .admin-kpi-icon { background: linear-gradient(135deg, #fb7185, #e11d48); color: #fff; }</code> | 设置 `.admin-kpi.tone-users    .admin-kpi-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 57 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 58 | <code>/* 管理图书卡片 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 59 | <code>.admin-book-card {</code> | 选择器 `.admin-book-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 60 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 61 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 62 | <code>    flex-direction: column;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 63 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 64 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb), 0.08);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 65 | <code>    border-radius: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 66 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 67 | <code>    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 68 | <code>}</code> | 结束当前 CSS 规则块。 |
| 69 | <code>.admin-book-card:hover {</code> | 选择器 `.admin-book-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 70 | <code>    transform: translateY(-3px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 71 | <code>    border-color: rgba(var(--color-brand-primary-rgb), 0.25);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 72 | <code>    box-shadow: 0 16px 28px -18px rgba(var(--color-brand-primary-rgb), 0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 73 | <code>}</code> | 结束当前 CSS 规则块。 |
| 74 | <code>.admin-book-card-cover {</code> | 选择器 `.admin-book-card-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 75 | <code>    aspect-ratio: 3 / 4;</code> | 设置 `aspect-ratio` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 76 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 77 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 78 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 79 | <code>}</code> | 结束当前 CSS 规则块。 |
| 80 | <code>.admin-book-card-cover img {</code> | 选择器 `.admin-book-card-cover img` 的样式块开始，下面定义这类元素的视觉表现。 |
| 81 | <code>    width: 100%; height: 100%; object-fit: cover;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 82 | <code>    transition: transform 0.5s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 83 | <code>}</code> | 结束当前 CSS 规则块。 |
| 84 | <code>.admin-book-card:hover .admin-book-card-cover img { transform: scale(1.04); }</code> | 设置 `.admin-book-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 85 | <code>.admin-book-card-isbn {</code> | 选择器 `.admin-book-card-isbn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 86 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 87 | <code>    bottom: 0.5rem; left: 0.5rem;</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 88 | <code>    padding: 2px 8px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 89 | <code>    font-family: ui-monospace, Menlo, monospace;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 90 | <code>    font-size: 10px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 91 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 92 | <code>    color: rgba(131, 24, 67, 0.7);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 93 | <code>    background: rgba(255, 255, 255, 0.92);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 94 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 95 | <code>    backdrop-filter: blur(6px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 96 | <code>    -webkit-backdrop-filter: blur(6px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 97 | <code>}</code> | 结束当前 CSS 规则块。 |
| 98 | <code>.admin-book-card-edit {</code> | 选择器 `.admin-book-card-edit` 的样式块开始，下面定义这类元素的视觉表现。 |
| 99 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 100 | <code>    top: 0.5rem; right: 0.5rem;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 101 | <code>    min-width: 3.25rem;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 102 | <code>    min-height: 2.75rem;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 103 | <code>    padding: 0.5rem 0.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 104 | <code>    border-radius: 0.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 105 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 106 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 107 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 108 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 109 | <code>    box-shadow: 0 6px 14px -6px rgba(var(--color-brand-primary-rgb), 0.6);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 110 | <code>    opacity: 0;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 111 | <code>    transform: translateY(-4px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 112 | <code>    transition: opacity 0.25s ease, transform 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 113 | <code>}</code> | 结束当前 CSS 规则块。 |
| 114 | <code>.admin-book-card:hover .admin-book-card-edit,</code> | 设置 `.admin-book-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 115 | <code>.admin-book-card-edit:focus-visible {</code> | 选择器 `.admin-book-card-edit:focus-visible` 的样式块开始，下面定义这类元素的视觉表现。 |
| 116 | <code>    opacity: 1;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 117 | <code>    transform: translateY(0);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 118 | <code>}</code> | 结束当前 CSS 规则块。 |
| 119 | <code>@media (hover: none) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 120 | <code>    .admin-book-card-edit {</code> | 选择器 `.admin-book-card-edit` 的样式块开始，下面定义这类元素的视觉表现。 |
| 121 | <code>        opacity: 1;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 122 | <code>        transform: translateY(0);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 123 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 124 | <code>}</code> | 结束当前 CSS 规则块。 |
| 125 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 126 | <code>.admin-stock-bar {</code> | 选择器 `.admin-stock-bar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 127 | <code>    height: 6px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 128 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 129 | <code>    background: rgba(var(--color-brand-primary-rgb), 0.12);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 130 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 131 | <code>}</code> | 结束当前 CSS 规则块。 |
| 132 | <code>.admin-stock-bar &gt; div {</code> | 选择器 `.admin-stock-bar &gt; div` 的样式块开始，下面定义这类元素的视觉表现。 |
| 133 | <code>    height: 100%;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 134 | <code>    border-radius: inherit;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 135 | <code>    background: linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 136 | <code>    transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 137 | <code>}</code> | 结束当前 CSS 规则块。 |
| 138 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 139 | <code>/* 管理 — 在线用户卡片 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 140 | <code>.online-user-card {</code> | 选择器 `.online-user-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 141 | <code>    padding: 0.875rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 142 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 143 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb), 0.08);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 144 | <code>    border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 145 | <code>    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 146 | <code>}</code> | 结束当前 CSS 规则块。 |
| 147 | <code>.online-user-card:hover {</code> | 选择器 `.online-user-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 148 | <code>    transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 149 | <code>    border-color: rgba(16, 185, 129, 0.35);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 150 | <code>    box-shadow: 0 12px 24px -16px rgba(16, 185, 129, 0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 151 | <code>}</code> | 结束当前 CSS 规则块。 |
| 152 | <code>.kick-btn,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 153 | <code>.ban-btn,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 154 | <code>.unban-btn {</code> | 选择器 `.unban-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 155 | <code>    min-height: 44px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 156 | <code>}</code> | 结束当前 CSS 规则块。 |
| 157 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 158 | <code>/* 管理 — 预约审核操作按钮组 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 159 | <code>.admin-action-btn {</code> | 选择器 `.admin-action-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 160 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 161 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 162 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 163 | <code>    min-height: 44px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 164 | <code>    gap: 4px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 165 | <code>    padding: 0.625rem 0.875rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 166 | <code>    border-radius: 0.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 167 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 168 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 169 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 170 | <code>    transition: transform 0.15s ease, box-shadow 0.2s ease, opacity 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 171 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 172 | <code>    white-space: nowrap;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 173 | <code>}</code> | 结束当前 CSS 规则块。 |
| 174 | <code>.admin-action-btn:hover { transform: translateY(-1px); }</code> | 设置 `.admin-action-btn` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 175 | <code>.admin-action-btn:active { transform: translateY(0); }</code> | 设置 `.admin-action-btn` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 176 | <code>.admin-action-btn.is-approve { background: linear-gradient(135deg, #34d399, #10b981); box-shadow: 0 6px 14px -6px rgba(16, 185, 129, 0.5); }</code> | 设置 `.admin-action-btn.is-approve { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 177 | <code>.admin-action-btn.is-reject  { background: linear-gradient(135deg, #fb7185, #ef4444); box-shadow: 0 6px 14px -6px rgba(239, 68, 68, 0.5); }</code> | 设置 `.admin-action-btn.is-reject  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 178 | <code>.admin-action-btn.is-return  { background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent)); box-shadow: 0 6px 14px -6px rgba(var(--color-brand-primary-rgb), 0.5); }</code> | 设置 `.admin-action-btn.is-return  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 179 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 180 | <code>/* 管理 — 待处理预约卡片 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 181 | <code>.admin-pending-card {</code> | 选择器 `.admin-pending-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 182 | <code>    padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 183 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 184 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb), 0.12);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 185 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 186 | <code>    transition: all 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 187 | <code>}</code> | 结束当前 CSS 规则块。 |
| 188 | <code>.admin-pending-card:hover {</code> | 选择器 `.admin-pending-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 189 | <code>    transform: translateY(-3px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 190 | <code>    border-color: rgba(var(--color-brand-primary-rgb), 0.25);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 191 | <code>    box-shadow: 0 12px 32px -8px rgba(var(--color-brand-primary-rgb), 0.18);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 192 | <code>}</code> | 结束当前 CSS 规则块。 |
| 193 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 194 | <code>.admin-pending-header {</code> | 选择器 `.admin-pending-header` 的样式块开始，下面定义这类元素的视觉表现。 |
| 195 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 196 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 197 | <code>    justify-content: space-between;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 198 | <code>    gap: 1rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 199 | <code>    margin-bottom: 0.75rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 200 | <code>}</code> | 结束当前 CSS 规则块。 |
| 201 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 202 | <code>/* 管理 — 历史记录卡片 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 203 | <code>.admin-history-card {</code> | 选择器 `.admin-history-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 204 | <code>    padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 205 | <code>    background: linear-gradient(135deg, #ffffff 0%, #f9f5ff 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 206 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb), 0.1);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 207 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 208 | <code>    transition: all 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 209 | <code>}</code> | 结束当前 CSS 规则块。 |
| 210 | <code>.admin-history-card:hover {</code> | 选择器 `.admin-history-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 211 | <code>    transform: translateY(-3px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 212 | <code>    border-color: rgba(var(--color-brand-primary-rgb), 0.2);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 213 | <code>    box-shadow: 0 12px 32px -8px rgba(var(--color-brand-primary-rgb), 0.15);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 214 | <code>}</code> | 结束当前 CSS 规则块。 |
| 215 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 216 | <code>/* ==================== 侧边导航栏优化 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 217 | <code>.sidebar-nav-item {</code> | 选择器 `.sidebar-nav-item` 的样式块开始，下面定义这类元素的视觉表现。 |
| 218 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 219 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 220 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 221 | <code>    justify-content: space-between;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 222 | <code>    padding: 0.875rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 223 | <code>    border-radius: 1.125rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 224 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 225 | <code>    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 226 | <code>    border: 1.5px solid transparent;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 227 | <code>    white-space: nowrap;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 228 | <code>}</code> | 结束当前 CSS 规则块。 |
| 229 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 230 | <code>@media (max-width: 1023px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 231 | <code>    .sidebar-nav-item {</code> | 选择器 `.sidebar-nav-item` 的样式块开始，下面定义这类元素的视觉表现。 |
| 232 | <code>        min-height: 3rem;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 233 | <code>        padding: 0.75rem 0.875rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 234 | <code>        white-space: normal;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 235 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 236 | <code>}</code> | 结束当前 CSS 规则块。 |
| 237 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 238 | <code>.sidebar-nav-item:not(.is-active) {</code> | 选择器 `.sidebar-nav-item:not(.is-active)` 的样式块开始，下面定义这类元素的视觉表现。 |
| 239 | <code>    color: rgba(131, 24, 67, 0.65);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 240 | <code>    background: rgba(249, 168, 212, 0.04);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 241 | <code>}</code> | 结束当前 CSS 规则块。 |
| 242 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 243 | <code>.sidebar-nav-item:not(.is-active):hover {</code> | 选择器 `.sidebar-nav-item:not(.is-active):hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 244 | <code>    background: linear-gradient(135deg, rgba(var(--color-brand-primary-rgb), 0.08), rgba(168, 85, 247, 0.06));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 245 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 246 | <code>    border-color: rgba(var(--color-brand-primary-rgb), 0.2);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 247 | <code>    transform: translateX(4px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 248 | <code>}</code> | 结束当前 CSS 规则块。 |
| 249 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 250 | <code>.sidebar-nav-item.is-active {</code> | 选择器 `.sidebar-nav-item.is-active` 的样式块开始，下面定义这类元素的视觉表现。 |
| 251 | <code>    background: linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-accent) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 252 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 253 | <code>    box-shadow: 0 8px 20px -6px rgba(var(--color-brand-primary-rgb), 0.45);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 254 | <code>    border-color: rgba(255, 255, 255, 0.2);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 255 | <code>}</code> | 结束当前 CSS 规则块。 |
| 256 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 257 | <code>.sidebar-nav-item.is-active:hover {</code> | 选择器 `.sidebar-nav-item.is-active:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 258 | <code>    box-shadow: 0 10px 28px -8px rgba(var(--color-brand-primary-rgb), 0.5);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 259 | <code>    transform: translateY(-1px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 260 | <code>}</code> | 结束当前 CSS 规则块。 |
| 261 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 262 | <code>.sidebar-nav-badge {</code> | 选择器 `.sidebar-nav-badge` 的样式块开始，下面定义这类元素的视觉表现。 |
| 263 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 264 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 265 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 266 | <code>    min-width: 1.75rem;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 267 | <code>    height: 1.5rem;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 268 | <code>    padding: 0 0.5rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 269 | <code>    background: rgba(255, 255, 255, 0.25);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 270 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 271 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 272 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 273 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 274 | <code>    backdrop-filter: blur(4px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 275 | <code>    -webkit-backdrop-filter: blur(4px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 276 | <code>    margin-left: 0.5rem;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 277 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 278 | <code>}</code> | 结束当前 CSS 规则块。 |
| 279 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 280 | <code>.sidebar-nav-badge-inactive {</code> | 选择器 `.sidebar-nav-badge-inactive` 的样式块开始，下面定义这类元素的视觉表现。 |
| 281 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 282 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 283 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 284 | <code>    min-width: 1.75rem;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 285 | <code>    height: 1.5rem;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 286 | <code>    padding: 0 0.5rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 287 | <code>    background: rgba(var(--color-brand-primary-rgb), 0.12);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 288 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 289 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 290 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 291 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 292 | <code>    margin-left: 0.5rem;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 293 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 294 | <code>    transition: all 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 295 | <code>}</code> | 结束当前 CSS 规则块。 |
| 296 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 297 | <code>.sidebar-nav-item:not(.is-active):hover .sidebar-nav-badge-inactive {</code> | 选择器 `.sidebar-nav-item:not(.is-active):hover .sidebar-nav-badge-inactive` 的样式块开始，下面定义这类元素的视觉表现。 |
| 298 | <code>    background: var(--color-brand-primary);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 299 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 300 | <code>}</code> | 结束当前 CSS 规则块。 |
| 301 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 302 | <code>/* 侧边卡片容器 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 303 | <code>.sidebar-info-card {</code> | 选择器 `.sidebar-info-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 304 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 305 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 306 | <code>    background: linear-gradient(135deg, rgba(249, 240, 245, 0.8) 0%, rgba(243, 232, 255, 0.6) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 307 | <code>    padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 308 | <code>    border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 309 | <code>    border: 1.5px solid rgba(168, 85, 247, 0.15);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 310 | <code>    backdrop-filter: blur(8px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 311 | <code>    -webkit-backdrop-filter: blur(8px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 312 | <code>    transition: all 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 313 | <code>}</code> | 结束当前 CSS 规则块。 |
| 314 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 315 | <code>.sidebar-info-card:hover {</code> | 选择器 `.sidebar-info-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 316 | <code>    border-color: rgba(168, 85, 247, 0.25);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 317 | <code>    background: linear-gradient(135deg, rgba(249, 240, 245, 0.9) 0%, rgba(243, 232, 255, 0.7) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 318 | <code>    box-shadow: 0 8px 16px -4px rgba(168, 85, 247, 0.15);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 319 | <code>}</code> | 结束当前 CSS 规则块。 |
| 320 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 321 | <code>.sidebar-card-header {</code> | 选择器 `.sidebar-card-header` 的样式块开始，下面定义这类元素的视觉表现。 |
| 322 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 323 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 324 | <code>    gap: 0.5rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 325 | <code>    margin-bottom: 0.75rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 326 | <code>}</code> | 结束当前 CSS 规则块。 |
| 327 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 328 | <code>.sidebar-card-icon {</code> | 选择器 `.sidebar-card-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 329 | <code>    width: 1.5rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 330 | <code>    height: 1.5rem;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 331 | <code>    background: linear-gradient(135deg, var(--color-brand-accent) 0%, var(--color-brand-primary) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 332 | <code>    border-radius: 0.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 333 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 334 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 335 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 336 | <code>    box-shadow: 0 2px 6px -2px rgba(168, 85, 247, 0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 337 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 338 | <code>}</code> | 结束当前 CSS 规则块。 |
| 339 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 340 | <code>.sidebar-status-card {</code> | 选择器 `.sidebar-status-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 341 | <code>    background: linear-gradient(135deg, rgba(240, 253, 250, 0.8) 0%, rgba(236, 253, 245, 0.6) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 342 | <code>    border-color: rgba(16, 185, 129, 0.15);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 343 | <code>}</code> | 结束当前 CSS 规则块。 |
| 344 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 345 | <code>.sidebar-status-card:hover {</code> | 选择器 `.sidebar-status-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 346 | <code>    border-color: rgba(16, 185, 129, 0.25);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 347 | <code>    background: linear-gradient(135deg, rgba(240, 253, 250, 0.9) 0%, rgba(236, 253, 245, 0.7) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 348 | <code>    box-shadow: 0 8px 16px -4px rgba(16, 185, 129, 0.15);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 349 | <code>}</code> | 结束当前 CSS 规则块。 |
| 350 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 351 | <code>/* 管理 Tab 内容容器 - 固定最小高度，确保切换时大小一致 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 352 | <code>.admin-tab-content {</code> | 选择器 `.admin-tab-content` 的样式块开始，下面定义这类元素的视觉表现。 |
| 353 | <code>    min-height: 75vh;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 354 | <code>}</code> | 结束当前 CSS 规则块。 |
| 355 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 356 | <code>@media (max-width: 639px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 357 | <code>    .admin-tab-content .text-\[9px\],</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 358 | <code>    .admin-tab-content .text-\[10px\] {</code> | 选择器 `.admin-tab-content .text-\[10px\]` 的样式块开始，下面定义这类元素的视觉表现。 |
| 359 | <code>        font-size: 0.75rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 360 | <code>        line-height: 1rem;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 361 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 362 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 363 | <code>    .admin-tab-content .text-brand-deep\/30,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 364 | <code>    .admin-tab-content .text-brand-deep\/35,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 365 | <code>    .admin-tab-content .text-brand-deep\/40 {</code> | 选择器 `.admin-tab-content .text-brand-deep\/40` 的样式块开始，下面定义这类元素的视觉表现。 |
| 366 | <code>        color: rgba(131, 24, 67, 0.62);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 367 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 368 | <code>}</code> | 结束当前 CSS 规则块。 |
| 369 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 370 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 371 | <code>    .admin-tab-content {</code> | 选择器 `.admin-tab-content` 的样式块开始，下面定义这类元素的视觉表现。 |
| 372 | <code>        min-height: calc(100vh - 320px);</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 373 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 374 | <code>}</code> | 结束当前 CSS 规则块。 |
| 375 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 376 | <code>/* 管理 — 侧边导航栏固定高度（在视口高度基础上额外加 120px） */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 377 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 378 | <code>    .admin-sidebar {</code> | 选择器 `.admin-sidebar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 379 | <code>        height: calc(100vh - 2rem + 124px);</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 380 | <code>        max-height: calc(100vh - 2rem + 124px);</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 381 | <code>        overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 382 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 383 | <code>}</code> | 结束当前 CSS 规则块。 |
| 384 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 385 | <code>/* 实时日志容器 - 固定高度，超出滚动 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 386 | <code>.admin-sidebar #sidebarLogs {</code> | 选择器 `.admin-sidebar #sidebarLogs` 的样式块开始，下面定义这类元素的视觉表现。 |
| 387 | <code>    height: 28rem;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 388 | <code>    max-height: 28rem;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 389 | <code>    overflow-y: auto;</code> | 设置 `overflow-y` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 390 | <code>}</code> | 结束当前 CSS 规则块。 |
| 391 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 392 | <code>/* 管理内容区：小屏跟随页面自然滚动，桌面保留面板内滚动 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 393 | <code>.history-records-fixed,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 394 | <code>.admin-content-fixed {</code> | 选择器 `.admin-content-fixed` 的样式块开始，下面定义这类元素的视觉表现。 |
| 395 | <code>    height: auto;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 396 | <code>    max-height: none;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 397 | <code>}</code> | 结束当前 CSS 规则块。 |
| 398 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 399 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 400 | <code>    .history-records-fixed {</code> | 选择器 `.history-records-fixed` 的样式块开始，下面定义这类元素的视觉表现。 |
| 401 | <code>        height: calc(34rem + 13px);</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 402 | <code>        max-height: calc(34rem + 13px);</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 403 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 404 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 405 | <code>    .admin-content-fixed {</code> | 选择器 `.admin-content-fixed` 的样式块开始，下面定义这类元素的视觉表现。 |
| 406 | <code>        height: calc(34rem + 60px);</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 407 | <code>        max-height: calc(34rem + 60px);</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 408 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 409 | <code>}</code> | 结束当前 CSS 规则块。 |
| 410 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 411 | <code>/* ==================== PC 管理台整体布局优化 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 412 | <code>.admin-workspace-wrapper {</code> | 选择器 `.admin-workspace-wrapper` 的样式块开始，下面定义这类元素的视觉表现。 |
| 413 | <code>    width: min(100%, 1360px);</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 414 | <code>}</code> | 结束当前 CSS 规则块。 |
| 415 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 416 | <code>.admin-layout-shell,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 417 | <code>.admin-layout-shell * {</code> | 选择器 `.admin-layout-shell *` 的样式块开始，下面定义这类元素的视觉表现。 |
| 418 | <code>    letter-spacing: 0 !important;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 419 | <code>}</code> | 结束当前 CSS 规则块。 |
| 420 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 421 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 422 | <code>    .admin-layout-shell {</code> | 选择器 `.admin-layout-shell` 的样式块开始，下面定义这类元素的视觉表现。 |
| 423 | <code>        grid-template-columns: 248px minmax(0, 1fr) !important;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 424 | <code>        gap: 1rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 425 | <code>        align-items: start !important;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 426 | <code>        padding: 0.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 427 | <code>        border: 1px solid rgba(var(--color-brand-primary-rgb), 0.1);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 428 | <code>        border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 429 | <code>        background:</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 430 | <code>            linear-gradient(180deg, rgba(255, 255, 255, 0.86), rgba(255, 255, 255, 0.66)),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 431 | <code>            rgba(255, 255, 255, 0.72);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 432 | <code>        box-shadow: 0 24px 60px -42px rgba(131, 24, 67, 0.42);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 433 | <code>        backdrop-filter: blur(14px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 434 | <code>        -webkit-backdrop-filter: blur(14px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 435 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 436 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 437 | <code>    .admin-sidebar-panel {</code> | 选择器 `.admin-sidebar-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 438 | <code>        top: 6.25rem !important;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 439 | <code>        height: auto !important;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 440 | <code>        max-height: none !important;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 441 | <code>        min-height: 0 !important;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 442 | <code>        overflow: visible !important;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 443 | <code>        padding: 1rem !important;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 444 | <code>        border: 1px solid rgba(var(--color-brand-primary-rgb), 0.12) !important;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 445 | <code>        border-left: 1px solid rgba(var(--color-brand-primary-rgb), 0.12) !important;</code> | 设置 `border-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 446 | <code>        border-radius: 1.125rem !important;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 447 | <code>        background: rgba(255, 255, 255, 0.92) !important;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 448 | <code>        box-shadow: 0 16px 36px -30px rgba(131, 24, 67, 0.45) !important;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 449 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 450 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 451 | <code>    .admin-sidebar-panel &gt; .hidden.lg\:flex:first-child {</code> | 选择器 `.admin-sidebar-panel &gt; .hidden.lg\:flex:first-child` 的样式块开始，下面定义这类元素的视觉表现。 |
| 452 | <code>        min-height: 0 !important;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 453 | <code>        margin-bottom: 0.875rem !important;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 454 | <code>        padding-bottom: 0.875rem !important;</code> | 设置 `padding-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 455 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 456 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 457 | <code>    .admin-sidebar-panel nav {</code> | 选择器 `.admin-sidebar-panel nav` 的样式块开始，下面定义这类元素的视觉表现。 |
| 458 | <code>        flex: 0 0 auto !important;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 459 | <code>        gap: 0.45rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 460 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 461 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 462 | <code>    .sidebar-nav-item {</code> | 选择器 `.sidebar-nav-item` 的样式块开始，下面定义这类元素的视觉表现。 |
| 463 | <code>        min-height: 2.75rem;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 464 | <code>        padding: 0.65rem 0.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 465 | <code>        border-radius: 0.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 466 | <code>        transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 467 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 468 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 469 | <code>    .sidebar-nav-item:not(.is-active):hover {</code> | 选择器 `.sidebar-nav-item:not(.is-active):hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 470 | <code>        transform: translateX(2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 471 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 472 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 473 | <code>    .sidebar-nav-item.is-active:hover {</code> | 选择器 `.sidebar-nav-item.is-active:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 474 | <code>        transform: translateY(-1px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 475 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 476 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 477 | <code>    .sidebar-nav-badge,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 478 | <code>    .sidebar-nav-badge-inactive {</code> | 选择器 `.sidebar-nav-badge-inactive` 的样式块开始，下面定义这类元素的视觉表现。 |
| 479 | <code>        height: 1.35rem;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 480 | <code>        min-width: 1.55rem;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 481 | <code>        font-size: 10px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 482 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 483 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 484 | <code>    .admin-sidebar-panel .hidden.lg\:flex.lg\:flex-col.mt-4 {</code> | 选择器 `.admin-sidebar-panel .hidden.lg\:flex.lg\:flex-col.mt-4` 的样式块开始，下面定义这类元素的视觉表现。 |
| 485 | <code>        flex: 0 0 auto !important;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 486 | <code>        margin-top: 0.875rem !important;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 487 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 488 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 489 | <code>    .sidebar-info-card {</code> | 选择器 `.sidebar-info-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 490 | <code>        flex: 0 0 auto !important;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 491 | <code>        padding: 0.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 492 | <code>        border-radius: 0.875rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 493 | <code>        background: rgba(248, 250, 252, 0.82);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 494 | <code>        border-color: rgba(148, 163, 184, 0.22);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 495 | <code>        box-shadow: none;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 496 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 497 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 498 | <code>    .sidebar-info-card:hover {</code> | 选择器 `.sidebar-info-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 499 | <code>        background: rgba(248, 250, 252, 0.9);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 500 | <code>        box-shadow: none;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 501 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 502 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 503 | <code>    .admin-sidebar #sidebarLogs {</code> | 选择器 `.admin-sidebar #sidebarLogs` 的样式块开始，下面定义这类元素的视觉表现。 |
| 504 | <code>        height: auto !important;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 505 | <code>        max-height: 15.5rem !important;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 506 | <code>        padding-right: 0.25rem;</code> | 设置 `padding-right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 507 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 508 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 509 | <code>    .admin-main-panel {</code> | 选择器 `.admin-main-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 510 | <code>        min-height: 0 !important;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 511 | <code>        gap: 0.875rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 512 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 513 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 514 | <code>    .admin-hero-panel {</code> | 选择器 `.admin-hero-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 515 | <code>        padding: 1rem 1.125rem !important;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 516 | <code>        border: 1px solid rgba(var(--color-brand-primary-rgb), 0.1);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 517 | <code>        border-radius: 1.125rem !important;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 518 | <code>        background: linear-gradient(135deg, rgba(255, 255, 255, 0.94), rgba(253, 242, 248, 0.68));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 519 | <code>        box-shadow: 0 14px 34px -30px rgba(131, 24, 67, 0.5);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 520 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 521 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 522 | <code>    .admin-hero-panel h1 {</code> | 选择器 `.admin-hero-panel h1` 的样式块开始，下面定义这类元素的视觉表现。 |
| 523 | <code>        font-size: 1.65rem !important;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 524 | <code>        line-height: 1.15 !important;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 525 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 526 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 527 | <code>    .admin-hero-panel p {</code> | 选择器 `.admin-hero-panel p` 的样式块开始，下面定义这类元素的视觉表现。 |
| 528 | <code>        max-width: 42rem;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 529 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 530 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 531 | <code>    .admin-kpi-grid {</code> | 选择器 `.admin-kpi-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 532 | <code>        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 533 | <code>        gap: 0.75rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 534 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 535 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 536 | <code>    .admin-kpi {</code> | 选择器 `.admin-kpi` 的样式块开始，下面定义这类元素的视觉表现。 |
| 537 | <code>        min-height: 6.2rem;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 538 | <code>        padding: 0.85rem 0.9rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 539 | <code>        border-radius: 0.95rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 540 | <code>        background: rgba(255, 255, 255, 0.9);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 541 | <code>        border-color: rgba(148, 163, 184, 0.18);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 542 | <code>        box-shadow: 0 12px 24px -24px rgba(131, 24, 67, 0.44);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 543 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 544 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 545 | <code>    .admin-kpi-value {</code> | 选择器 `.admin-kpi-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 546 | <code>        font-size: 1.9rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 547 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 548 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 549 | <code>    .admin-kpi-icon {</code> | 选择器 `.admin-kpi-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 550 | <code>        top: 0.75rem;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 551 | <code>        right: 0.75rem;</code> | 设置 `right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 552 | <code>        width: 1.8rem;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 553 | <code>        height: 1.8rem;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 554 | <code>        border-radius: 0.55rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 555 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 556 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 557 | <code>    .admin-tab-panel {</code> | 选择器 `.admin-tab-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 558 | <code>        min-height: 0 !important;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 559 | <code>        border-radius: 1.125rem !important;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 560 | <code>        border-color: rgba(var(--color-brand-primary-rgb), 0.1) !important;</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 561 | <code>        background: rgba(255, 255, 255, 0.94) !important;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 562 | <code>        box-shadow: 0 18px 40px -34px rgba(131, 24, 67, 0.5) !important;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 563 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 564 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 565 | <code>    .admin-section-toolbar {</code> | 选择器 `.admin-section-toolbar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 566 | <code>        position: static !important;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 567 | <code>        padding: 0.9rem 1rem !important;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 568 | <code>        background: linear-gradient(135deg, rgba(248, 250, 252, 0.92), rgba(255, 255, 255, 0.98)) !important;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 569 | <code>        border-color: rgba(var(--color-brand-primary-rgb), 0.1) !important;</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 570 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 571 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 572 | <code>    .admin-content-fixed,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 573 | <code>    .history-records-fixed {</code> | 选择器 `.history-records-fixed` 的样式块开始，下面定义这类元素的视觉表现。 |
| 574 | <code>        height: auto !important;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 575 | <code>        max-height: none !important;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 576 | <code>        overflow: visible !important;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 577 | <code>        padding: 1rem !important;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 578 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 579 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 580 | <code>    .admin-online-grid,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 581 | <code>    .admin-users-grid,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 582 | <code>    .admin-records-grid {</code> | 选择器 `.admin-records-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 583 | <code>        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 584 | <code>        gap: 0.875rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 585 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 586 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 587 | <code>    .admin-books-grid {</code> | 选择器 `.admin-books-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 588 | <code>        grid-template-columns: repeat(5, minmax(0, 1fr)) !important;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 589 | <code>        gap: 0.875rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 590 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 591 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 592 | <code>    .admin-book-card,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 593 | <code>    .online-user-card,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 594 | <code>    .admin-history-card,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 595 | <code>    .user-card {</code> | 选择器 `.user-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 596 | <code>        border-radius: 0.95rem !important;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 597 | <code>        border-color: rgba(148, 163, 184, 0.18) !important;</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 598 | <code>        box-shadow: 0 14px 30px -28px rgba(131, 24, 67, 0.42) !important;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 599 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 600 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 601 | <code>    .admin-book-card:hover,</code> | 设置 `.admin-book-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 602 | <code>    .online-user-card:hover,</code> | 设置 `.online-user-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 603 | <code>    .admin-history-card:hover,</code> | 设置 `.admin-history-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 604 | <code>    .user-card:hover {</code> | 选择器 `.user-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 605 | <code>        transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 606 | <code>        box-shadow: 0 20px 36px -30px rgba(131, 24, 67, 0.5) !important;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 607 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 608 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 609 | <code>    .admin-book-card-cover {</code> | 选择器 `.admin-book-card-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 610 | <code>        aspect-ratio: 4 / 3;</code> | 设置 `aspect-ratio` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 611 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 612 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 613 | <code>    .admin-book-card .p-3 {</code> | 选择器 `.admin-book-card .p-3` 的样式块开始，下面定义这类元素的视觉表现。 |
| 614 | <code>        padding: 0.75rem !important;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 615 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 616 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 617 | <code>    .admin-book-card-edit {</code> | 选择器 `.admin-book-card-edit` 的样式块开始，下面定义这类元素的视觉表现。 |
| 618 | <code>        min-height: 2.25rem;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 619 | <code>        min-width: 2.75rem;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 620 | <code>        border-radius: 0.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 621 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 622 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 623 | <code>    .admin-history-card {</code> | 选择器 `.admin-history-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 624 | <code>        padding: 0.9rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 625 | <code>        background: linear-gradient(180deg, #fff, #fbfdff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 626 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 627 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 628 | <code>    .online-user-card {</code> | 选择器 `.online-user-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 629 | <code>        padding: 0.85rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 630 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 631 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 632 | <code>    .user-card {</code> | 选择器 `.user-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 633 | <code>        padding: 0.9rem !important;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 634 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 635 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 636 | <code>    .user-card .grid.grid-cols-3 {</code> | 选择器 `.user-card .grid.grid-cols-3` 的样式块开始，下面定义这类元素的视觉表现。 |
| 637 | <code>        gap: 0.45rem !important;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 638 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 639 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 640 | <code>    .change-email-btn,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 641 | <code>    .reset-pwd-btn,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 642 | <code>    .ban-btn,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 643 | <code>    .unban-btn,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 644 | <code>    .kick-btn {</code> | 选择器 `.kick-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 645 | <code>        min-height: 2.4rem;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 646 | <code>        border-radius: 0.55rem !important;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 647 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 648 | <code>}</code> | 结束当前 CSS 规则块。 |
| 649 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 650 | <code>@media (min-width: 1180px) and (max-width: 1320px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 651 | <code>    .admin-books-grid {</code> | 选择器 `.admin-books-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 652 | <code>        grid-template-columns: repeat(4, minmax(0, 1fr)) !important;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 653 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 654 | <code>}</code> | 结束当前 CSS 规则块。 |
