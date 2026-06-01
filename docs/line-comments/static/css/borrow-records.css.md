# static/css/borrow-records.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>﻿/* ==================== 借阅记录页 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 3 | <code>/* 筛选 Tab 栏 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 4 | <code>.records-tabs-bar {</code> | 选择器 `.records-tabs-bar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 5 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 6 | <code>}</code> | 结束当前 CSS 规则块。 |
| 7 | <code>.records-tabs-scroll {</code> | 选择器 `.records-tabs-scroll` 的样式块开始，下面定义这类元素的视觉表现。 |
| 8 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 9 | <code>    gap: 0.5rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 10 | <code>    overflow-x: auto;</code> | 设置 `overflow-x` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 11 | <code>    padding-bottom: 2px;</code> | 设置 `padding-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 12 | <code>    scrollbar-width: none;</code> | 设置 `scrollbar-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 13 | <code>}</code> | 结束当前 CSS 规则块。 |
| 14 | <code>.records-tabs-scroll::-webkit-scrollbar { display: none; }</code> | 设置 `.records-tabs-scroll` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 15 | <code>.records-tab {</code> | 选择器 `.records-tab` 的样式块开始，下面定义这类元素的视觉表现。 |
| 16 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 17 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 18 | <code>    gap: 6px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 19 | <code>    padding: 7px 14px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 20 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 21 | <code>    font-size: 13px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 22 | <code>    font-weight: 600;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 23 | <code>    white-space: nowrap;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 24 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 25 | <code>    border: 1.5px solid rgba(var(--color-brand-primary-rgb), 0.12);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 26 | <code>    color: rgba(131, 24, 67, 0.65);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 27 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 28 | <code>    user-select: none;</code> | 设置 `user-select` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 29 | <code>    transition: transform 0.18s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 30 | <code>}</code> | 结束当前 CSS 规则块。 |
| 31 | <code>.records-tab:hover {</code> | 选择器 `.records-tab:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 32 | <code>    border-color: rgba(236, 72, 153, 0.35);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 33 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 34 | <code>    transform: translateY(-1px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 35 | <code>    box-shadow: 0 6px 14px -8px rgba(236, 72, 153, 0.3);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 36 | <code>}</code> | 结束当前 CSS 规则块。 |
| 37 | <code>.records-tab-count {</code> | 选择器 `.records-tab-count` 的样式块开始，下面定义这类元素的视觉表现。 |
| 38 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 39 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 40 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 41 | <code>    min-width: 20px;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 42 | <code>    height: 20px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 43 | <code>    padding: 0 5px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 44 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 45 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 46 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 47 | <code>    background: rgba(131, 24, 67, 0.07);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 48 | <code>    color: rgba(131, 24, 67, 0.6);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 49 | <code>    transition: background 0.2s ease, color 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 50 | <code>}</code> | 结束当前 CSS 规则块。 |
| 51 | <code>/* 激活态 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 52 | <code>.records-tab.is-active { border-color: transparent; color: #fff; transform: translateY(-1px); }</code> | 设置 `.records-tab.is-active { border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 53 | <code>.records-tab.is-active .records-tab-count { background: rgba(255,255,255,0.25); color: #fff; }</code> | 设置 `.records-tab.is-active .records-tab-count { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 54 | <code>.records-tab.is-active.tone-all      { background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent)); box-shadow: 0 8px 20px -10px rgba(var(--color-brand-primary-rgb),0.55); }</code> | 设置 `.records-tab.is-active.tone-all      { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 55 | <code>.records-tab.is-active.tone-pending  { background: linear-gradient(135deg, #fbbf24, #f59e0b); box-shadow: 0 8px 20px -10px rgba(245,158,11,0.5); }</code> | 设置 `.records-tab.is-active.tone-pending  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 56 | <code>.records-tab.is-active.tone-picked   { background: linear-gradient(135deg, #60a5fa, #3b82f6); box-shadow: 0 8px 20px -10px rgba(59,130,246,0.5); }</code> | 设置 `.records-tab.is-active.tone-picked   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 57 | <code>.records-tab.is-active.tone-returned { background: linear-gradient(135deg, #34d399, #10b981); box-shadow: 0 8px 20px -10px rgba(16,185,129,0.45); }</code> | 设置 `.records-tab.is-active.tone-returned { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 58 | <code>.records-tab.is-active.tone-rejected { background: linear-gradient(135deg, #f87171, #ef4444); box-shadow: 0 8px 20px -10px rgba(239,68,68,0.45); }</code> | 设置 `.records-tab.is-active.tone-rejected { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 59 | <code>.records-tab.is-active.tone-expired  { background: linear-gradient(135deg, #fb923c, #f97316); box-shadow: 0 8px 20px -10px rgba(249,115,22,0.45); }</code> | 设置 `.records-tab.is-active.tone-expired  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 60 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 61 | <code>/* 状态色板 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 62 | <code>.status-pill {</code> | 选择器 `.status-pill` 的样式块开始，下面定义这类元素的视觉表现。 |
| 63 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 64 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 65 | <code>    gap: 5px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 66 | <code>    padding: 3px 9px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 67 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 68 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 69 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 70 | <code>    white-space: nowrap;</code> | 设置 `white-space` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 71 | <code>}</code> | 结束当前 CSS 规则块。 |
| 72 | <code>.status-pill::before {</code> | 选择器 `.status-pill::before` 的样式块开始，下面定义这类元素的视觉表现。 |
| 73 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 74 | <code>    width: 5px; height: 5px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 75 | <code>    border-radius: 50%;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 76 | <code>    background: currentColor;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 77 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 78 | <code>}</code> | 结束当前 CSS 规则块。 |
| 79 | <code>.status-pill.tone-pending { background: #fef3c7; color: #92400e; }</code> | 设置 `.status-pill.tone-pending { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 80 | <code>.status-pill.tone-picked  { background: #dbeafe; color: #1e40af; }</code> | 设置 `.status-pill.tone-picked  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 81 | <code>.status-pill.tone-returned{ background: #d1fae5; color: #065f46; }</code> | 设置 `.status-pill.tone-returned{ background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 82 | <code>.status-pill.tone-rejected{ background: #fee2e2; color: #991b1b; }</code> | 设置 `.status-pill.tone-rejected{ background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 83 | <code>.status-pill.tone-expired { background: #fed7aa; color: #9a3412; }</code> | 设置 `.status-pill.tone-expired { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 84 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 85 | <code>/* 记录卡片 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 86 | <code>.record-card {</code> | 选择器 `.record-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 87 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 88 | <code>    display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 89 | <code>    grid-template-columns: minmax(0, 1fr);</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 90 | <code>    gap: 0.875rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 91 | <code>    padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 92 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 93 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 94 | <code>    border: 1px solid rgba(236, 72, 153, 0.09);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 95 | <code>    box-shadow: 0 2px 6px -2px rgba(131, 24, 67, 0.06);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 96 | <code>    transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 97 | <code>                box-shadow 0.3s ease, border-color 0.25s ease;</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 98 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 99 | <code>}</code> | 结束当前 CSS 规则块。 |
| 100 | <code>@media (min-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 101 | <code>    .record-card { grid-template-columns: 100px 1fr; padding: 1.375rem 1.375rem 1.375rem 1.5rem; gap: 1.25rem; }</code> | 设置 `.record-card { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 102 | <code>}</code> | 结束当前 CSS 规则块。 |
| 103 | <code>.record-card::before {</code> | 选择器 `.record-card::before` 的样式块开始，下面定义这类元素的视觉表现。 |
| 104 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 105 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 106 | <code>    top: 14px; bottom: 14px; left: 0;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 107 | <code>    width: 4px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 108 | <code>    border-radius: 0 4px 4px 0;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 109 | <code>    opacity: 0.6;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 110 | <code>    transition: opacity 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 111 | <code>}</code> | 结束当前 CSS 规则块。 |
| 112 | <code>.record-card[data-status=&quot;pending&quot;]::before  { background: linear-gradient(180deg, #fbbf24, #f59e0b); }</code> | 设置 `.record-card[data-status=&quot;pending&quot;]` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 113 | <code>.record-card[data-status=&quot;picked_up&quot;]::before{ background: linear-gradient(180deg, #60a5fa, #3b82f6); }</code> | 设置 `.record-card[data-status=&quot;picked_up&quot;]` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 114 | <code>.record-card[data-status=&quot;returned&quot;]::before { background: linear-gradient(180deg, #34d399, #10b981); }</code> | 设置 `.record-card[data-status=&quot;returned&quot;]` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 115 | <code>.record-card[data-status=&quot;rejected&quot;]::before { background: linear-gradient(180deg, #f87171, #ef4444); }</code> | 设置 `.record-card[data-status=&quot;rejected&quot;]` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 116 | <code>.record-card[data-status=&quot;expired&quot;]::before  { background: linear-gradient(180deg, #fb923c, #f97316); }</code> | 设置 `.record-card[data-status=&quot;expired&quot;]` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 117 | <code>.record-card:hover {</code> | 选择器 `.record-card:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 118 | <code>    transform: translateY(-3px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 119 | <code>    border-color: rgba(236, 72, 153, 0.22);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 120 | <code>    box-shadow: 0 16px 32px -18px rgba(236, 72, 153, 0.4),</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 121 | <code>                0 4px 10px -6px rgba(168, 85, 247, 0.14);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 122 | <code>}</code> | 结束当前 CSS 规则块。 |
| 123 | <code>.record-card:hover::before { opacity: 1; }</code> | 设置 `.record-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 124 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 125 | <code>/* 封面 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 126 | <code>.record-cover {</code> | 选择器 `.record-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 127 | <code>    width: min(7rem, 42vw);</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 128 | <code>    justify-self: center;</code> | 设置 `justify-self` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 129 | <code>    aspect-ratio: 3 / 4;</code> | 设置 `aspect-ratio` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 130 | <code>    border-radius: 0.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 131 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 132 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 133 | <code>    box-shadow: 0 4px 12px -6px rgba(131, 24, 67, 0.2);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 134 | <code>}</code> | 结束当前 CSS 规则块。 |
| 135 | <code>@media (min-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 136 | <code>    .record-cover { width: auto; justify-self: stretch; }</code> | 设置 `.record-cover { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 137 | <code>}</code> | 结束当前 CSS 规则块。 |
| 138 | <code>.record-cover img {</code> | 选择器 `.record-cover img` 的样式块开始，下面定义这类元素的视觉表现。 |
| 139 | <code>    width: 100%; height: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 140 | <code>    object-fit: cover;</code> | 设置 `object-fit` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 141 | <code>    transition: transform 0.5s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 142 | <code>}</code> | 结束当前 CSS 规则块。 |
| 143 | <code>.record-card:hover .record-cover img { transform: scale(1.05); }</code> | 设置 `.record-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 144 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 145 | <code>/* 卡片内容区 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 146 | <code>.record-body {</code> | 选择器 `.record-body` 的样式块开始，下面定义这类元素的视觉表现。 |
| 147 | <code>    min-width: 0;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 148 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 149 | <code>    flex-direction: column;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 150 | <code>    gap: 0.5rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 151 | <code>}</code> | 结束当前 CSS 规则块。 |
| 152 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 153 | <code>/* 时间线（垂直） */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 154 | <code>.record-timeline {</code> | 选择器 `.record-timeline` 的样式块开始，下面定义这类元素的视觉表现。 |
| 155 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 156 | <code>    flex-direction: column;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 157 | <code>    gap: 0;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 158 | <code>    margin-top: 0.125rem;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 159 | <code>}</code> | 结束当前 CSS 规则块。 |
| 160 | <code>.timeline-step {</code> | 选择器 `.timeline-step` 的样式块开始，下面定义这类元素的视觉表现。 |
| 161 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 162 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 163 | <code>    align-items: flex-start;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 164 | <code>    gap: 8px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 165 | <code>    font-size: 12px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 166 | <code>    color: rgba(131, 24, 67, 0.45);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 167 | <code>    padding-bottom: 8px;</code> | 设置 `padding-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 168 | <code>}</code> | 结束当前 CSS 规则块。 |
| 169 | <code>.timeline-step:last-child { padding-bottom: 0; }</code> | 设置 `.timeline-step` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 170 | <code>.timeline-step .timeline-dot {</code> | 选择器 `.timeline-step .timeline-dot` 的样式块开始，下面定义这类元素的视觉表现。 |
| 171 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 172 | <code>    z-index: 1;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 173 | <code>    width: 7px; height: 7px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 174 | <code>    border-radius: 50%;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 175 | <code>    background: rgba(131, 24, 67, 0.18);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 176 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 177 | <code>    margin-top: 2px;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 178 | <code>}</code> | 结束当前 CSS 规则块。 |
| 179 | <code>/* 竖向连接线 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 180 | <code>.timeline-step:not(:last-child)::after {</code> | 选择器 `.timeline-step:not(:last-child)::after` 的样式块开始，下面定义这类元素的视觉表现。 |
| 181 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 182 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 183 | <code>    left: 3px;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 184 | <code>    top: 11px;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 185 | <code>    bottom: 0;</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 186 | <code>    width: 1px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 187 | <code>    background: rgba(131, 24, 67, 0.1);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 188 | <code>}</code> | 结束当前 CSS 规则块。 |
| 189 | <code>.timeline-step.is-done { color: rgba(131, 24, 67, 0.75); font-weight: 600; }</code> | 设置 `.timeline-step.is-done { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 190 | <code>.timeline-step.is-done .timeline-dot { background: var(--color-brand-primary); box-shadow: 0 0 0 3px rgba(var(--color-brand-primary-rgb),0.15); }</code> | 设置 `.timeline-step.is-done .timeline-dot { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 191 | <code>.timeline-step.is-done.tone-blue   { color: #1e40af; }</code> | 设置 `.timeline-step.is-done.tone-blue   { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 192 | <code>.timeline-step.is-done.tone-blue   .timeline-dot { background: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.18); }</code> | 设置 `.timeline-step.is-done.tone-blue   .timeline-dot { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 193 | <code>.timeline-step.is-done.tone-green  { color: #065f46; }</code> | 设置 `.timeline-step.is-done.tone-green  { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 194 | <code>.timeline-step.is-done.tone-green  .timeline-dot { background: #10b981; box-shadow: 0 0 0 3px rgba(16,185,129,0.18); }</code> | 设置 `.timeline-step.is-done.tone-green  .timeline-dot { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 195 | <code>.timeline-step.is-done.tone-red    { color: #991b1b; }</code> | 设置 `.timeline-step.is-done.tone-red    { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 196 | <code>.timeline-step.is-done.tone-red    .timeline-dot { background: #ef4444; box-shadow: 0 0 0 3px rgba(239,68,68,0.18); }</code> | 设置 `.timeline-step.is-done.tone-red    .timeline-dot { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 197 | <code>.timeline-step.is-done.tone-orange { color: #9a3412; }</code> | 设置 `.timeline-step.is-done.tone-orange { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 198 | <code>.timeline-step.is-done.tone-orange .timeline-dot { background: #f97316; box-shadow: 0 0 0 3px rgba(249,115,22,0.18); }</code> | 设置 `.timeline-step.is-done.tone-orange .timeline-dot { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 199 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 200 | <code>/* 操作按钮组 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 201 | <code>.record-actions {</code> | 选择器 `.record-actions` 的样式块开始，下面定义这类元素的视觉表现。 |
| 202 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 203 | <code>    flex-wrap: wrap;</code> | 设置 `flex-wrap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 204 | <code>    justify-content: stretch;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 205 | <code>    gap: 0.5rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 206 | <code>    margin-top: auto;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 207 | <code>    padding-top: 0.5rem;</code> | 设置 `padding-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 208 | <code>}</code> | 结束当前 CSS 规则块。 |
| 209 | <code>.record-action-btn {</code> | 选择器 `.record-action-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 210 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 211 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 212 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 213 | <code>    flex: 1 1 100%;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 214 | <code>    min-height: 44px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 215 | <code>    gap: 4px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 216 | <code>    padding: 0.625rem 0.875rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 217 | <code>    font-size: 12px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 218 | <code>    font-weight: 600;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 219 | <code>    border-radius: 0.625rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 220 | <code>    border: 1px solid transparent;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 221 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 222 | <code>    transition: transform 0.15s ease, box-shadow 0.2s ease, opacity 0.15s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 223 | <code>}</code> | 结束当前 CSS 规则块。 |
| 224 | <code>@media (min-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 225 | <code>    .record-actions { justify-content: flex-end; }</code> | 设置 `.record-actions { justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 226 | <code>    .record-action-btn { flex: 0 1 auto; }</code> | 设置 `.record-action-btn { flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 227 | <code>}</code> | 结束当前 CSS 规则块。 |
| 228 | <code>.record-action-btn:hover { transform: translateY(-1px); }</code> | 设置 `.record-action-btn` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 229 | <code>.record-action-btn:active { transform: translateY(0); }</code> | 设置 `.record-action-btn` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 230 | <code>.record-action-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: none !important; }</code> | 设置 `.record-action-btn` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 231 | <code>.record-action-btn.tone-cancel {</code> | 选择器 `.record-action-btn.tone-cancel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 232 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 233 | <code>    background: linear-gradient(135deg, #f43f5e, #e11d48);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 234 | <code>    box-shadow: 0 4px 12px -6px rgba(244,63,94,0.55);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 235 | <code>}</code> | 结束当前 CSS 规则块。 |
| 236 | <code>.record-action-btn.tone-cancel:hover { box-shadow: 0 8px 18px -8px rgba(244,63,94,0.7); }</code> | 设置 `.record-action-btn.tone-cancel` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 237 | <code>.record-action-btn.tone-return {</code> | 选择器 `.record-action-btn.tone-return` 的样式块开始，下面定义这类元素的视觉表现。 |
| 238 | <code>    color: #065f46;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 239 | <code>    background: linear-gradient(135deg, #d1fae5, #a7f3d0);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 240 | <code>    box-shadow: 0 4px 12px -6px rgba(16,185,129,0.35);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 241 | <code>}</code> | 结束当前 CSS 规则块。 |
| 242 | <code>.record-action-btn.tone-return:hover { box-shadow: 0 8px 18px -8px rgba(16,185,129,0.55); }</code> | 设置 `.record-action-btn.tone-return` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 243 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 244 | <code>/* 自助确认弹层 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 245 | <code>.record-confirm-overlay {</code> | 选择器 `.record-confirm-overlay` 的样式块开始，下面定义这类元素的视觉表现。 |
| 246 | <code>    position: fixed; inset: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 247 | <code>    background: rgba(76, 24, 60, 0.35);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 248 | <code>    backdrop-filter: blur(6px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 249 | <code>    -webkit-backdrop-filter: blur(6px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 250 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 251 | <code>    z-index: 1100; padding: 1rem;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 252 | <code>    opacity: 0; pointer-events: none;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 253 | <code>    transition: opacity 0.22s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 254 | <code>}</code> | 结束当前 CSS 规则块。 |
| 255 | <code>.record-confirm-overlay.is-open { opacity: 1; pointer-events: auto; }</code> | 设置 `.record-confirm-overlay.is-open { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 256 | <code>.record-confirm-card {</code> | 选择器 `.record-confirm-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 257 | <code>    width: 100%; max-width: 360px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 258 | <code>    background: #fff; border-radius: 1.25rem;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 259 | <code>    padding: 1.5rem 1.5rem 1.125rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 260 | <code>    box-shadow: 0 30px 60px -20px rgba(131, 24, 67, 0.35);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 261 | <code>    border: 1px solid rgba(236, 72, 153, 0.1);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 262 | <code>    transform: scale(0.94) translateY(8px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 263 | <code>    transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 264 | <code>}</code> | 结束当前 CSS 规则块。 |
| 265 | <code>.record-confirm-overlay.is-open .record-confirm-card { transform: scale(1) translateY(0); }</code> | 设置 `.record-confirm-overlay.is-open .record-confirm-card { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 266 | <code>.record-confirm-icon {</code> | 选择器 `.record-confirm-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 267 | <code>    width: 44px; height: 44px; border-radius: 14px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 268 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 269 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 270 | <code>    color: var(--color-brand-primary); margin-bottom: 0.875rem;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 271 | <code>}</code> | 结束当前 CSS 规则块。 |
| 272 | <code>.record-confirm-title {</code> | 选择器 `.record-confirm-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 273 | <code>    font-family: &#x27;Cormorant&#x27;, &#x27;Noto Serif SC&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 274 | <code>    font-size: 1.125rem; font-weight: 700; color: var(--color-brand-deep);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 275 | <code>    margin-bottom: 0.375rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 276 | <code>}</code> | 结束当前 CSS 规则块。 |
| 277 | <code>.record-confirm-msg { font-size: 13px; color: rgba(131, 24, 67, 0.7); line-height: 1.55; }</code> | 设置 `.record-confirm-msg { font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 278 | <code>.record-confirm-actions { display: flex; gap: 0.5rem; margin-top: 1.25rem; }</code> | 设置 `.record-confirm-actions { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 279 | <code>.record-confirm-btn {</code> | 选择器 `.record-confirm-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 280 | <code>    flex: 1; padding: 0.625rem 0.875rem;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 281 | <code>    border-radius: 0.75rem; font-size: 13px; font-weight: 700;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 282 | <code>    transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 283 | <code>    cursor: pointer; border: 1px solid transparent;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 284 | <code>}</code> | 结束当前 CSS 规则块。 |
| 285 | <code>.record-confirm-btn.is-cancel { background: #faf5ff; color: #6b21a8; border-color: rgba(168, 85, 247, 0.18); }</code> | 设置 `.record-confirm-btn.is-cancel { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 286 | <code>.record-confirm-btn.is-cancel:hover { background: #f3e8ff; }</code> | 设置 `.record-confirm-btn.is-cancel` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 287 | <code>.record-confirm-btn.is-confirm { background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent)); color: #fff; }</code> | 设置 `.record-confirm-btn.is-confirm { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 288 | <code>.record-confirm-btn.is-confirm:hover { transform: translateY(-1px); box-shadow: 0 12px 22px -12px rgba(236, 72, 153, 0.6); }</code> | 设置 `.record-confirm-btn.is-confirm` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 289 | <code>.record-confirm-btn.is-confirm.tone-danger { background: linear-gradient(135deg, #f43f5e, #ef4444); }</code> | 设置 `.record-confirm-btn.is-confirm.tone-danger { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 290 | <code>.record-confirm-btn.is-confirm.tone-danger:hover { box-shadow: 0 12px 22px -12px rgba(239, 68, 68, 0.6); }</code> | 设置 `.record-confirm-btn.is-confirm.tone-danger` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 291 | <code>.record-confirm-btn.is-confirm.tone-return { background: linear-gradient(135deg, #34d399, #10b981); }</code> | 设置 `.record-confirm-btn.is-confirm.tone-return { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 292 | <code>.record-confirm-btn.is-confirm.tone-return:hover { box-shadow: 0 12px 22px -12px rgba(16, 185, 129, 0.55); }</code> | 设置 `.record-confirm-btn.is-confirm.tone-return` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 293 | <code>/* 入场动画 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 294 | <code>@keyframes record-enter {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 295 | <code>    from { opacity: 0; transform: translateY(10px); }</code> | 设置 `from { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 296 | <code>    to   { opacity: 1; transform: translateY(0); }</code> | 设置 `to   { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 297 | <code>}</code> | 结束当前 CSS 规则块。 |
| 298 | <code>.record-card { animation: record-enter 0.35s cubic-bezier(0.22, 1, 0.36, 1) both; }</code> | 设置 `.record-card { animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 299 | <code>.record-card[hidden] { display: none !important; animation: none; }</code> | 设置 `.record-card[hidden] { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 300 | <code>@media (prefers-reduced-motion: reduce) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 301 | <code>    .record-card { animation: none; }</code> | 设置 `.record-card { animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 302 | <code>}</code> | 结束当前 CSS 规则块。 |
| 303 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 304 | <code>/* ==================== 借阅记录 · Elysia 升级 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 305 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 306 | <code>/* 借阅页根容器，便于覆盖间距 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 307 | <code>.borrow-page { padding-top: 0.25rem; }</code> | 设置 `.borrow-page { padding-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 308 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 309 | <code>/* ----- Hero ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 310 | <code>.borrow-hero {</code> | 选择器 `.borrow-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 311 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 312 | <code>    margin: 0 -0.25rem 1.75rem;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 313 | <code>    padding: 1.75rem 1.5rem 1.5rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 314 | <code>    border-radius: 1.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 315 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 316 | <code>    background: rgba(255, 255, 255, 0.58);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 317 | <code>    backdrop-filter: blur(20px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 318 | <code>    -webkit-backdrop-filter: blur(20px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 319 | <code>    border: 1px solid rgba(255, 255, 255, 0.7);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 320 | <code>    box-shadow:</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 321 | <code>        0 30px 60px -28px rgba(236, 72, 153, 0.28),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 322 | <code>        inset 0 0 0 1px rgba(255, 255, 255, 0.6);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 323 | <code>    isolation: isolate;</code> | 设置 `isolation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 324 | <code>}</code> | 结束当前 CSS 规则块。 |
| 325 | <code>@media (min-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 326 | <code>    .borrow-hero { padding: 2.25rem 2.25rem 1.75rem; margin-bottom: 2rem; }</code> | 设置 `.borrow-hero { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 327 | <code>}</code> | 结束当前 CSS 规则块。 |
| 328 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 329 | <code>.borrow-hero-gradient {</code> | 选择器 `.borrow-hero-gradient` 的样式块开始，下面定义这类元素的视觉表现。 |
| 330 | <code>    position: absolute; inset: 0; z-index: -3;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 331 | <code>    background: linear-gradient(135deg, #FFE4F1 0%, #FFF0F5 35%, #F3E5F5 70%, #FCE4EC 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 332 | <code>}</code> | 结束当前 CSS 规则块。 |
| 333 | <code>.borrow-hero-blob {</code> | 选择器 `.borrow-hero-blob` 的样式块开始，下面定义这类元素的视觉表现。 |
| 334 | <code>    position: absolute; z-index: -2;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 335 | <code>    border-radius: 9999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 336 | <code>    filter: blur(48px);</code> | 设置 `filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 337 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 338 | <code>    opacity: 0.65;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 339 | <code>}</code> | 结束当前 CSS 规则块。 |
| 340 | <code>.borrow-hero-blob-a { top: -90px; left: -60px; width: 320px; height: 320px;</code> | 设置 `.borrow-hero-blob-a { top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 341 | <code>    background: radial-gradient(circle, #FFB6D9 0%, transparent 70%); }</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 342 | <code>.borrow-hero-blob-b { bottom: -100px; right: -70px; width: 360px; height: 360px;</code> | 设置 `.borrow-hero-blob-b { bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 343 | <code>    background: radial-gradient(circle, #E8D5F2 0%, transparent 70%); }</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 344 | <code>.borrow-hero-blob-c { top: 30%; right: 20%; width: 220px; height: 220px;</code> | 设置 `.borrow-hero-blob-c { top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 345 | <code>    background: radial-gradient(circle, #FFD9E8 0%, transparent 70%); opacity: 0.5; }</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 346 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 347 | <code>.borrow-hero-petals { position: absolute; inset: 0; z-index: -1; pointer-events: none; }</code> | 设置 `.borrow-hero-petals { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 348 | <code>.borrow-hero-petals .petal-dot {</code> | 选择器 `.borrow-hero-petals .petal-dot` 的样式块开始，下面定义这类元素的视觉表现。 |
| 349 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 350 | <code>    width: 6px; height: 6px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 351 | <code>    border-radius: 50%;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 352 | <code>    background: rgba(244, 114, 182, 0.45);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 353 | <code>    box-shadow: 0 0 8px rgba(236, 72, 153, 0.35);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 354 | <code>    animation: petal-pulse 3.6s ease-in-out infinite;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 355 | <code>}</code> | 结束当前 CSS 规则块。 |
| 356 | <code>.borrow-hero-petals .petal-svg {</code> | 选择器 `.borrow-hero-petals .petal-svg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 357 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 358 | <code>    width: 30px; height: 30px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 359 | <code>    color: rgba(244, 114, 182, 0.32);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 360 | <code>    animation: petal-float 7s ease-in-out infinite;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 361 | <code>}</code> | 结束当前 CSS 规则块。 |
| 362 | <code>.borrow-hero-petals .petal-svg-sm { width: 22px; height: 22px; animation-duration: 8.5s; }</code> | 设置 `.borrow-hero-petals .petal-svg-sm { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 363 | <code>@keyframes petal-pulse {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 364 | <code>    0%, 100% { opacity: 0.55; transform: scale(1); }</code> | 设置 `0%, 100% { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 365 | <code>    50%      { opacity: 1;    transform: scale(1.35); }</code> | 设置 `50%      { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 366 | <code>}</code> | 结束当前 CSS 规则块。 |
| 367 | <code>@keyframes petal-float {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 368 | <code>    0%, 100% { transform: translateY(0) rotate(0deg); }</code> | 设置 `0%, 100% { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 369 | <code>    50%      { transform: translateY(-6px) rotate(0deg); }</code> | 设置 `50%      { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 370 | <code>}</code> | 结束当前 CSS 规则块。 |
| 371 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 372 | <code>.borrow-hero-inner {</code> | 选择器 `.borrow-hero-inner` 的样式块开始，下面定义这类元素的视觉表现。 |
| 373 | <code>    display: flex; align-items: flex-end; justify-content: space-between;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 374 | <code>    flex-wrap: wrap; gap: 1rem;</code> | 设置 `flex-wrap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 375 | <code>}</code> | 结束当前 CSS 规则块。 |
| 376 | <code>.borrow-hero-eyebrow {</code> | 选择器 `.borrow-hero-eyebrow` 的样式块开始，下面定义这类元素的视觉表现。 |
| 377 | <code>    display: inline-flex; align-items: center; gap: 8px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 378 | <code>    padding: 5px 14px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 379 | <code>    background: linear-gradient(135deg, rgba(252, 231, 243, 0.85), rgba(243, 232, 255, 0.85));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 380 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 381 | <code>    font-size: 10px; font-weight: 800; letter-spacing: 0.28em;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 382 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 383 | <code>    background-clip: padding-box;</code> | 设置 `background-clip` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 384 | <code>    margin-bottom: 0.875rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 385 | <code>}</code> | 结束当前 CSS 规则块。 |
| 386 | <code>.borrow-hero-eyebrow .text {</code> | 选择器 `.borrow-hero-eyebrow .text` 的样式块开始，下面定义这类元素的视觉表现。 |
| 387 | <code>    background: linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 388 | <code>    -webkit-background-clip: text; background-clip: text;</code> | 设置 `-webkit-background-clip` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 389 | <code>    color: transparent;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 390 | <code>}</code> | 结束当前 CSS 规则块。 |
| 391 | <code>.borrow-hero-eyebrow .dot {</code> | 选择器 `.borrow-hero-eyebrow .dot` 的样式块开始，下面定义这类元素的视觉表现。 |
| 392 | <code>    width: 6px; height: 6px; border-radius: 50%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 393 | <code>    background: var(--color-brand-primary);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 394 | <code>}</code> | 结束当前 CSS 规则块。 |
| 395 | <code>.borrow-hero-eyebrow .dot-purple { background: var(--color-brand-accent); }</code> | 设置 `.borrow-hero-eyebrow .dot-purple { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 396 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 397 | <code>.borrow-hero-title {</code> | 选择器 `.borrow-hero-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 398 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 399 | <code>    font-size: clamp(1.875rem, 1.4rem + 1.6vw, 2.5rem);</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 400 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 401 | <code>    line-height: 1.15;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 402 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 403 | <code>    letter-spacing: -0.01em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 404 | <code>}</code> | 结束当前 CSS 规则块。 |
| 405 | <code>.borrow-hero-title .accent {</code> | 选择器 `.borrow-hero-title .accent` 的样式块开始，下面定义这类元素的视觉表现。 |
| 406 | <code>    font-style: italic; font-weight: 500;</code> | 设置 `font-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 407 | <code>    background: linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 408 | <code>    -webkit-background-clip: text; background-clip: text;</code> | 设置 `-webkit-background-clip` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 409 | <code>    color: transparent;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 410 | <code>    margin-left: 6px;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 411 | <code>}</code> | 结束当前 CSS 规则块。 |
| 412 | <code>.borrow-hero-sub {</code> | 选择器 `.borrow-hero-sub` 的样式块开始，下面定义这类元素的视觉表现。 |
| 413 | <code>    margin-top: 0.5rem;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 414 | <code>    font-size: 13px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 415 | <code>    color: rgba(131, 24, 67, 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 416 | <code>    line-height: 1.6;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 417 | <code>}</code> | 结束当前 CSS 规则块。 |
| 418 | <code>.borrow-hero-sub strong {</code> | 选择器 `.borrow-hero-sub strong` 的样式块开始，下面定义这类元素的视觉表现。 |
| 419 | <code>    font-weight: 800;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 420 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 421 | <code>    letter-spacing: 0.02em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 422 | <code>}</code> | 结束当前 CSS 规则块。 |
| 423 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 424 | <code>.borrow-hero-cta {</code> | 选择器 `.borrow-hero-cta` 的样式块开始，下面定义这类元素的视觉表现。 |
| 425 | <code>    display: inline-flex; align-items: center; gap: 8px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 426 | <code>    padding: 11px 18px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 427 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 428 | <code>    font-size: 13px; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 429 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 430 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 431 | <code>    box-shadow:</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 432 | <code>        0 12px 28px -12px rgba(236, 72, 153, 0.55),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 433 | <code>        inset 0 1px 0 rgba(255, 255, 255, 0.4);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 434 | <code>    transition: transform 0.2s ease, box-shadow 0.25s ease, filter 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 435 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 436 | <code>}</code> | 结束当前 CSS 规则块。 |
| 437 | <code>.borrow-hero-cta:hover { transform: translateY(-2px); box-shadow: 0 18px 36px -12px rgba(var(--color-brand-primary-rgb),0.6); filter: brightness(1.05); }</code> | 设置 `.borrow-hero-cta` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 438 | <code>.borrow-hero-cta .cta-icon { width: 14px; height: 14px; }</code> | 设置 `.borrow-hero-cta .cta-icon { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 439 | <code>.borrow-hero-cta .cta-arrow { width: 14px; height: 14px; transition: transform 0.25s ease; }</code> | 设置 `.borrow-hero-cta .cta-arrow { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 440 | <code>.borrow-hero-cta:hover .cta-arrow { transform: translateX(3px); }</code> | 设置 `.borrow-hero-cta` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 441 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 442 | <code>/* ----- 数据卡片条 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 443 | <code>.borrow-stat-grid {</code> | 选择器 `.borrow-stat-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 444 | <code>    display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 445 | <code>    grid-template-columns: repeat(3, minmax(0, 1fr));</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 446 | <code>    gap: 0.625rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 447 | <code>    margin-top: 1.5rem;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 448 | <code>}</code> | 结束当前 CSS 规则块。 |
| 449 | <code>@media (min-width: 640px) { .borrow-stat-grid { gap: 0.875rem; margin-top: 1.75rem; } }</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 450 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 451 | <code>.borrow-stat-card {</code> | 选择器 `.borrow-stat-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 452 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 453 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 454 | <code>    padding: 0.875rem 0.875rem 0.875rem 0.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 455 | <code>    border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 456 | <code>    background: rgba(255, 255, 255, 0.85);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 457 | <code>    border: 1px solid rgba(255, 255, 255, 0.9);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 458 | <code>    box-shadow: 0 8px 22px -14px rgba(131, 24, 67, 0.25);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 459 | <code>    display: flex; align-items: center; gap: 0.625rem;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 460 | <code>    transition: transform 0.25s ease, box-shadow 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 461 | <code>}</code> | 结束当前 CSS 规则块。 |
| 462 | <code>@media (min-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 463 | <code>    .borrow-stat-card { padding: 1rem 1.125rem 1rem 1rem; gap: 0.875rem; }</code> | 设置 `.borrow-stat-card { padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 464 | <code>}</code> | 结束当前 CSS 规则块。 |
| 465 | <code>.borrow-stat-card:hover { transform: translateY(-2px); box-shadow: 0 14px 32px -14px rgba(131, 24, 67, 0.32); }</code> | 设置 `.borrow-stat-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 466 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 467 | <code>.borrow-stat-card .stat-icon {</code> | 选择器 `.borrow-stat-card .stat-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 468 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 469 | <code>    width: 36px; height: 36px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 470 | <code>    border-radius: 0.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 471 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 472 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 473 | <code>    box-shadow: 0 4px 10px -4px currentColor;</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 474 | <code>}</code> | 结束当前 CSS 规则块。 |
| 475 | <code>@media (min-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 476 | <code>    .borrow-stat-card .stat-icon { width: 40px; height: 40px; border-radius: 0.875rem; }</code> | 设置 `.borrow-stat-card .stat-icon { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 477 | <code>}</code> | 结束当前 CSS 规则块。 |
| 478 | <code>.borrow-stat-card .stat-icon svg { width: 18px; height: 18px; }</code> | 设置 `.borrow-stat-card .stat-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 479 | <code>@media (min-width: 640px) { .borrow-stat-card .stat-icon svg { width: 20px; height: 20px; } }</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 480 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 481 | <code>.borrow-stat-card.tone-pink    .stat-icon { background: linear-gradient(135deg, #f472b6, var(--color-brand-primary)); }</code> | 设置 `.borrow-stat-card.tone-pink    .stat-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 482 | <code>.borrow-stat-card.tone-amber   .stat-icon { background: linear-gradient(135deg, #fbbf24, #f59e0b); }</code> | 设置 `.borrow-stat-card.tone-amber   .stat-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 483 | <code>.borrow-stat-card.tone-emerald .stat-icon { background: linear-gradient(135deg, #34d399, #10b981); }</code> | 设置 `.borrow-stat-card.tone-emerald .stat-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 484 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 485 | <code>.borrow-stat-card .stat-meta { min-width: 0; }</code> | 设置 `.borrow-stat-card .stat-meta { min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 486 | <code>.borrow-stat-card .stat-label {</code> | 选择器 `.borrow-stat-card .stat-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 487 | <code>    font-size: 10px; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 488 | <code>    letter-spacing: 0.18em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 489 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 490 | <code>    color: rgba(131, 24, 67, 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 491 | <code>    line-height: 1.2;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 492 | <code>}</code> | 结束当前 CSS 规则块。 |
| 493 | <code>@media (min-width: 640px) { .borrow-stat-card .stat-label { font-size: 11px; } }</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 494 | <code>.borrow-stat-card .stat-value {</code> | 选择器 `.borrow-stat-card .stat-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 495 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 496 | <code>    font-size: 1.625rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 497 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 498 | <code>    line-height: 1.05;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 499 | <code>    margin-top: 2px;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 500 | <code>    font-variant-numeric: tabular-nums;</code> | 设置 `font-variant-numeric` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 501 | <code>}</code> | 结束当前 CSS 规则块。 |
| 502 | <code>@media (min-width: 640px) { .borrow-stat-card .stat-value { font-size: 1.875rem; } }</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 503 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 504 | <code>.borrow-stat-card .stat-deco {</code> | 选择器 `.borrow-stat-card .stat-deco` 的样式块开始，下面定义这类元素的视觉表现。 |
| 505 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 506 | <code>    bottom: -28px; right: -28px;</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 507 | <code>    width: 80px; height: 80px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 508 | <code>    border-radius: 50%;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 509 | <code>    opacity: 0.18;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 510 | <code>    filter: blur(2px);</code> | 设置 `filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 511 | <code>}</code> | 结束当前 CSS 规则块。 |
| 512 | <code>.borrow-stat-card.tone-pink    .stat-deco { background: radial-gradient(circle, var(--color-brand-primary), transparent 70%); }</code> | 设置 `.borrow-stat-card.tone-pink    .stat-deco { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 513 | <code>.borrow-stat-card.tone-amber   .stat-deco { background: radial-gradient(circle, #f59e0b, transparent 70%); }</code> | 设置 `.borrow-stat-card.tone-amber   .stat-deco { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 514 | <code>.borrow-stat-card.tone-emerald .stat-deco { background: radial-gradient(circle, #10b981, transparent 70%); }</code> | 设置 `.borrow-stat-card.tone-emerald .stat-deco { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 515 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 516 | <code>/* ----- 筛选条标签头 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 517 | <code>.records-tabs-label {</code> | 选择器 `.records-tabs-label` 的样式块开始，下面定义这类元素的视觉表现。 |
| 518 | <code>    display: inline-flex; align-items: center; gap: 8px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 519 | <code>    margin-bottom: 0.625rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 520 | <code>    color: rgba(131, 24, 67, 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 521 | <code>    font-size: 11px; font-weight: 800;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 522 | <code>    letter-spacing: 0.22em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 523 | <code>    text-transform: uppercase;</code> | 设置 `text-transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 524 | <code>}</code> | 结束当前 CSS 规则块。 |
| 525 | <code>.records-tabs-label .dash {</code> | 选择器 `.records-tabs-label .dash` 的样式块开始，下面定义这类元素的视觉表现。 |
| 526 | <code>    flex: 1; height: 1px; min-width: 32px;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 527 | <code>    background: linear-gradient(90deg, rgba(236, 72, 153, 0.25), transparent);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 528 | <code>    margin-left: 4px;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 529 | <code>}</code> | 结束当前 CSS 规则块。 |
| 530 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 531 | <code>/* ----- 卡片增强 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 532 | <code>.record-card {</code> | 选择器 `.record-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 533 | <code>    background:</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 534 | <code>        linear-gradient(180deg, rgba(255, 240, 247, 0.0) 0%, rgba(255, 255, 255, 0.0) 100%),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 535 | <code>        #fff;</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 536 | <code>}</code> | 结束当前 CSS 规则块。 |
| 537 | <code>.record-card[data-status=&quot;pending&quot;]   { background: linear-gradient(180deg, rgba(251, 191, 36, 0.045), #fff 60%); }</code> | 设置 `.record-card[data-status=&quot;pending&quot;]   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 538 | <code>.record-card[data-status=&quot;picked_up&quot;] { background: linear-gradient(180deg, rgba(96, 165, 250, 0.05), #fff 60%); }</code> | 设置 `.record-card[data-status=&quot;picked_up&quot;] { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 539 | <code>.record-card[data-status=&quot;returned&quot;]  { background: linear-gradient(180deg, rgba(52, 211, 153, 0.05), #fff 60%); }</code> | 设置 `.record-card[data-status=&quot;returned&quot;]  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 540 | <code>.record-card[data-status=&quot;rejected&quot;]  { background: linear-gradient(180deg, rgba(248, 113, 113, 0.05), #fff 60%); }</code> | 设置 `.record-card[data-status=&quot;rejected&quot;]  { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 541 | <code>.record-card[data-status=&quot;expired&quot;]   { background: linear-gradient(180deg, rgba(251, 146, 60, 0.05), #fff 60%); }</code> | 设置 `.record-card[data-status=&quot;expired&quot;]   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 542 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 543 | <code>.record-card::before { width: 5px; }</code> | 设置 `.record-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 544 | <code>.record-cover { position: relative; }</code> | 设置 `.record-cover { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 545 | <code>.record-cover-shine {</code> | 选择器 `.record-cover-shine` 的样式块开始，下面定义这类元素的视觉表现。 |
| 546 | <code>    position: absolute; inset: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 547 | <code>    background: linear-gradient(135deg, transparent 40%, rgba(255, 255, 255, 0.5) 50%, transparent 60%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 548 | <code>    transform: translateX(-100%);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 549 | <code>    transition: transform 0.8s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 550 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 551 | <code>}</code> | 结束当前 CSS 规则块。 |
| 552 | <code>.record-card:hover .record-cover-shine { transform: translateX(100%); }</code> | 设置 `.record-card` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 553 | <code>.record-cat {</code> | 选择器 `.record-cat` 的样式块开始，下面定义这类元素的视觉表现。 |
| 554 | <code>    display: inline-block;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 555 | <code>    padding: 1px 7px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 556 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 557 | <code>    background: rgba(168, 85, 247, 0.08);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 558 | <code>    color: #6b21a8;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 559 | <code>    font-weight: 600;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 560 | <code>    font-size: 10.5px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 561 | <code>    margin-left: 2px;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 562 | <code>}</code> | 结束当前 CSS 规则块。 |
| 563 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 564 | <code>/* ----- 空筛选状态 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 565 | <code>.records-empty-filter {</code> | 选择器 `.records-empty-filter` 的样式块开始，下面定义这类元素的视觉表现。 |
| 566 | <code>    text-align: center;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 567 | <code>    padding: 2.75rem 1.5rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 568 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 569 | <code>    background: linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.4));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 570 | <code>    border: 1px dashed rgba(236, 72, 153, 0.2);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 571 | <code>}</code> | 结束当前 CSS 规则块。 |
| 572 | <code>.records-empty-filter-icon {</code> | 选择器 `.records-empty-filter-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 573 | <code>    margin: 0 auto 0.75rem;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 574 | <code>    width: 48px; height: 48px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 575 | <code>    border-radius: 16px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 576 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 577 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 578 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 579 | <code>}</code> | 结束当前 CSS 规则块。 |
| 580 | <code>.records-empty-filter-icon svg { width: 22px; height: 22px; }</code> | 设置 `.records-empty-filter-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 581 | <code>.records-empty-filter-title {</code> | 选择器 `.records-empty-filter-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 582 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 583 | <code>    font-size: 1.0625rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 584 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 585 | <code>    margin-bottom: 0.25rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 586 | <code>}</code> | 结束当前 CSS 规则块。 |
| 587 | <code>.records-empty-filter-desc {</code> | 选择器 `.records-empty-filter-desc` 的样式块开始，下面定义这类元素的视觉表现。 |
| 588 | <code>    font-size: 12.5px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 589 | <code>    color: rgba(131, 24, 67, 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 590 | <code>}</code> | 结束当前 CSS 规则块。 |
| 591 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 592 | <code>/* ----- 整体空状态（无任何记录） ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 593 | <code>.borrow-empty {</code> | 选择器 `.borrow-empty` 的样式块开始，下面定义这类元素的视觉表现。 |
| 594 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 595 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 596 | <code>    text-align: center;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 597 | <code>    padding: 3.5rem 1.5rem 3rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 598 | <code>    border-radius: 1.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 599 | <code>    background: rgba(255, 255, 255, 0.7);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 600 | <code>    backdrop-filter: blur(16px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 601 | <code>    -webkit-backdrop-filter: blur(16px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 602 | <code>    border: 1px solid rgba(255, 255, 255, 0.7);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 603 | <code>    box-shadow: 0 20px 50px -28px rgba(236, 72, 153, 0.28);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 604 | <code>}</code> | 结束当前 CSS 规则块。 |
| 605 | <code>.borrow-empty-center {</code> | 选择器 `.borrow-empty-center` 的样式块开始，下面定义这类元素的视觉表现。 |
| 606 | <code>    max-width: 480px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 607 | <code>    margin: 3rem auto;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 608 | <code>    padding: 4.5rem 2rem 3.5rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 609 | <code>}</code> | 结束当前 CSS 规则块。 |
| 610 | <code>.borrow-empty-blob {</code> | 选择器 `.borrow-empty-blob` 的样式块开始，下面定义这类元素的视觉表现。 |
| 611 | <code>    position: absolute; z-index: 0;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 612 | <code>    top: -60px; left: 50%;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 613 | <code>    transform: translateX(-50%);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 614 | <code>    width: 260px; height: 260px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 615 | <code>    border-radius: 50%;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 616 | <code>    background: radial-gradient(circle, #FFE4F1, transparent 70%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 617 | <code>    filter: blur(20px);</code> | 设置 `filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 618 | <code>    opacity: 0.85;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 619 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 620 | <code>}</code> | 结束当前 CSS 规则块。 |
| 621 | <code>.borrow-empty &gt; * { position: relative; z-index: 1; }</code> | 设置 `.borrow-empty &gt; * { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 622 | <code>.borrow-empty-icon {</code> | 选择器 `.borrow-empty-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 623 | <code>    width: 84px; height: 84px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 624 | <code>    margin: 0 auto 1rem;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 625 | <code>    border-radius: 9999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 626 | <code>    background: linear-gradient(135deg, #fdf2f8, #f3e8ff);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 627 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 628 | <code>    color: rgba(236, 72, 153, 0.7);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 629 | <code>    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.7), 0 12px 24px -16px rgba(236, 72, 153, 0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 630 | <code>}</code> | 结束当前 CSS 规则块。 |
| 631 | <code>.borrow-empty-icon svg { width: 38px; height: 38px; }</code> | 设置 `.borrow-empty-icon svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 632 | <code>.borrow-empty-eyebrow {</code> | 选择器 `.borrow-empty-eyebrow` 的样式块开始，下面定义这类元素的视觉表现。 |
| 633 | <code>    font-size: 10px; font-weight: 800;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 634 | <code>    letter-spacing: 0.32em; text-transform: uppercase;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 635 | <code>    color: rgba(168, 85, 247, 0.6);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 636 | <code>    margin-bottom: 0.5rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 637 | <code>}</code> | 结束当前 CSS 规则块。 |
| 638 | <code>.borrow-empty-title {</code> | 选择器 `.borrow-empty-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 639 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 640 | <code>    font-size: 1.5rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 641 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 642 | <code>    margin-bottom: 0.5rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 643 | <code>}</code> | 结束当前 CSS 规则块。 |
| 644 | <code>.borrow-empty-sub {</code> | 选择器 `.borrow-empty-sub` 的样式块开始，下面定义这类元素的视觉表现。 |
| 645 | <code>    font-size: 13px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 646 | <code>    color: rgba(131, 24, 67, 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 647 | <code>    margin-bottom: 1.5rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 648 | <code>}</code> | 结束当前 CSS 规则块。 |
| 649 | <code>.borrow-empty-cta {</code> | 选择器 `.borrow-empty-cta` 的样式块开始，下面定义这类元素的视觉表现。 |
| 650 | <code>    display: inline-flex; align-items: center; gap: 10px;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 651 | <code>    padding: 12px 22px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 652 | <code>    border-radius: 9999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 653 | <code>    font-size: 13px; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 654 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 655 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 656 | <code>    box-shadow: 0 14px 30px -14px rgba(236, 72, 153, 0.55);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 657 | <code>    transition: transform 0.2s ease, box-shadow 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 658 | <code>}</code> | 结束当前 CSS 规则块。 |
| 659 | <code>.borrow-empty-cta:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -14px rgba(236, 72, 153, 0.65); }</code> | 设置 `.borrow-empty-cta` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 660 | <code>.borrow-empty-cta svg { width: 14px; height: 14px; }</code> | 设置 `.borrow-empty-cta svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 661 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 662 | <code>@media (prefers-reduced-motion: reduce) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 663 | <code>    .borrow-hero-petals .petal-dot,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 664 | <code>    .borrow-hero-petals .petal-svg { animation: none; }</code> | 设置 `.borrow-hero-petals .petal-svg { animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 665 | <code>    .record-cover-shine { display: none; }</code> | 设置 `.record-cover-shine { display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 666 | <code>}</code> | 结束当前 CSS 规则块。 |
| 667 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 668 | <code>/* ----- 4 列数据条 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 669 | <code>.borrow-stat-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }</code> | 设置 `.borrow-stat-grid { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 670 | <code>@media (min-width: 640px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 671 | <code>    .borrow-stat-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }</code> | 设置 `.borrow-stat-grid { grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 672 | <code>}</code> | 结束当前 CSS 规则块。 |
| 673 | <code>.borrow-stat-card.tone-purple .stat-icon { background: linear-gradient(135deg, #c084fc, var(--color-brand-accent)); }</code> | 设置 `.borrow-stat-card.tone-purple .stat-icon { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 674 | <code>.borrow-stat-card.tone-purple .stat-deco { background: radial-gradient(circle, var(--color-brand-accent), transparent 70%); }</code> | 设置 `.borrow-stat-card.tone-purple .stat-deco { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 675 | <code>.borrow-stat-card .stat-unit {</code> | 选择器 `.borrow-stat-card .stat-unit` 的样式块开始，下面定义这类元素的视觉表现。 |
| 676 | <code>    font-size: 0.875rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 677 | <code>    font-weight: 700;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 678 | <code>    margin-left: 2px;</code> | 设置 `margin-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 679 | <code>    color: rgba(131, 24, 67, 0.55);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 680 | <code>    font-family: &#x27;Montserrat&#x27;, sans-serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 681 | <code>    vertical-align: 1px;</code> | 设置 `vertical-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 682 | <code>}</code> | 结束当前 CSS 规则块。 |
| 683 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 684 | <code>/* ==================== Phone/tablet borrow records ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 685 | <code>@media (max-width: 1023px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 686 | <code>    #records-list {</code> | 选择器 `#records-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 687 | <code>        max-height: none;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 688 | <code>        overflow: visible;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 689 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 690 | <code>    .borrow-aside {</code> | 选择器 `.borrow-aside` 的样式块开始，下面定义这类元素的视觉表现。 |
| 691 | <code>        display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 692 | <code>        grid-template-columns: repeat(2, minmax(0, 1fr));</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 693 | <code>        align-items: start;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 694 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 695 | <code>}</code> | 结束当前 CSS 规则块。 |
| 696 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 697 | <code>@media (max-width: 639px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 698 | <code>    .borrow-page {</code> | 选择器 `.borrow-page` 的样式块开始，下面定义这类元素的视觉表现。 |
| 699 | <code>        padding-left: 0;</code> | 设置 `padding-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 700 | <code>        padding-right: 0;</code> | 设置 `padding-right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 701 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 702 | <code>    .borrow-hero {</code> | 选择器 `.borrow-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 703 | <code>        margin-inline: 0;</code> | 设置 `margin-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 704 | <code>        border-radius: 1.35rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 705 | <code>        padding: 1.35rem 1rem 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 706 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 707 | <code>    .borrow-hero-inner {</code> | 选择器 `.borrow-hero-inner` 的样式块开始，下面定义这类元素的视觉表现。 |
| 708 | <code>        align-items: stretch;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 709 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 710 | <code>    .borrow-hero-cta {</code> | 选择器 `.borrow-hero-cta` 的样式块开始，下面定义这类元素的视觉表现。 |
| 711 | <code>        width: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 712 | <code>        min-height: 46px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 713 | <code>        justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 714 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 715 | <code>    .borrow-stat-grid {</code> | 选择器 `.borrow-stat-grid` 的样式块开始，下面定义这类元素的视觉表现。 |
| 716 | <code>        grid-template-columns: repeat(2, minmax(0, 1fr));</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 717 | <code>        gap: 0.55rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 718 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 719 | <code>    .borrow-stat-card {</code> | 选择器 `.borrow-stat-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 720 | <code>        padding: 0.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 721 | <code>        border-radius: 0.95rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 722 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 723 | <code>    .borrow-stat-card .stat-icon {</code> | 选择器 `.borrow-stat-card .stat-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 724 | <code>        width: 32px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 725 | <code>        height: 32px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 726 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 727 | <code>    .borrow-stat-card .stat-value {</code> | 选择器 `.borrow-stat-card .stat-value` 的样式块开始，下面定义这类元素的视觉表现。 |
| 728 | <code>        font-size: 1.35rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 729 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 730 | <code>    .records-tabs-head {</code> | 选择器 `.records-tabs-head` 的样式块开始，下面定义这类元素的视觉表现。 |
| 731 | <code>        align-items: stretch;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 732 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 733 | <code>    .records-search {</code> | 选择器 `.records-search` 的样式块开始，下面定义这类元素的视觉表现。 |
| 734 | <code>        max-width: none;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 735 | <code>        flex-basis: 100%;</code> | 设置 `flex-basis` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 736 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 737 | <code>    .record-card {</code> | 选择器 `.record-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 738 | <code>        border-radius: 1.15rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 739 | <code>        padding: 0.9rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 740 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 741 | <code>    .record-cover {</code> | 选择器 `.record-cover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 742 | <code>        width: min(8.5rem, 54vw);</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 743 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 744 | <code>    .record-confirm-card {</code> | 选择器 `.record-confirm-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 745 | <code>        border-radius: 1.15rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 746 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 747 | <code>    .borrow-aside {</code> | 选择器 `.borrow-aside` 的样式块开始，下面定义这类元素的视觉表现。 |
| 748 | <code>        grid-template-columns: minmax(0, 1fr);</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 749 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 750 | <code>}</code> | 结束当前 CSS 规则块。 |
| 751 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 752 | <code>/* ----- 主体两栏布局 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 753 | <code>.borrow-layout {</code> | 选择器 `.borrow-layout` 的样式块开始，下面定义这类元素的视觉表现。 |
| 754 | <code>    display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 755 | <code>    grid-template-columns: minmax(0, 1fr);</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 756 | <code>    gap: 1.25rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 757 | <code>}</code> | 结束当前 CSS 规则块。 |
| 758 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 759 | <code>    .borrow-layout {</code> | 选择器 `.borrow-layout` 的样式块开始，下面定义这类元素的视觉表现。 |
| 760 | <code>        grid-template-columns: minmax(0, 1fr) 320px;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 761 | <code>        gap: 1.75rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 762 | <code>        align-items: start;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 763 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 764 | <code>}</code> | 结束当前 CSS 规则块。 |
| 765 | <code>.borrow-main { min-width: 0; }</code> | 设置 `.borrow-main { min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 766 | <code>#records-list {</code> | 选择器 `#records-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 767 | <code>    max-height: 746px;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 768 | <code>    overflow-y: auto;</code> | 设置 `overflow-y` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 769 | <code>    scrollbar-width: thin;</code> | 设置 `scrollbar-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 770 | <code>    scrollbar-color: rgba(var(--color-brand-primary-rgb),0.25) transparent;</code> | 设置 `scrollbar-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 771 | <code>}</code> | 结束当前 CSS 规则块。 |
| 772 | <code>#records-list::-webkit-scrollbar { width: 6px; }</code> | 设置 `#records-list` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 773 | <code>#records-list::-webkit-scrollbar-track { background: transparent; }</code> | 设置 `#records-list` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 774 | <code>#records-list::-webkit-scrollbar-thumb { background: rgba(var(--color-brand-primary-rgb),0.25); border-radius: 999px; }</code> | 设置 `#records-list` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 775 | <code>#records-list::-webkit-scrollbar-thumb:hover { background: rgba(var(--color-brand-primary-rgb),0.4); }</code> | 设置 `#records-list` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 776 | <code>.borrow-aside {</code> | 选择器 `.borrow-aside` 的样式块开始，下面定义这类元素的视觉表现。 |
| 777 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 778 | <code>    flex-direction: column;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 779 | <code>    gap: 1.125rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 780 | <code>}</code> | 结束当前 CSS 规则块。 |
| 781 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 782 | <code>    .borrow-aside { position: sticky; top: 7rem; max-height: calc(100vh - 8rem); overflow-y: auto; }</code> | 设置 `.borrow-aside { position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 783 | <code>    .borrow-aside::-webkit-scrollbar { width: 6px; }</code> | 设置 `.borrow-aside` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 784 | <code>    .borrow-aside::-webkit-scrollbar-thumb { background: rgba(236, 72, 153, 0.2); border-radius: 999px; }</code> | 设置 `.borrow-aside` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 785 | <code>}</code> | 结束当前 CSS 规则块。 |
| 786 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 787 | <code>/* ----- 筛选头：搜索框 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 788 | <code>.records-tabs-head {</code> | 选择器 `.records-tabs-head` 的样式块开始，下面定义这类元素的视觉表现。 |
| 789 | <code>    display: flex; align-items: center; justify-content: space-between;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 790 | <code>    gap: 0.75rem; flex-wrap: wrap;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 791 | <code>    margin-bottom: 0.75rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 792 | <code>}</code> | 结束当前 CSS 规则块。 |
| 793 | <code>.records-search {</code> | 选择器 `.records-search` 的样式块开始，下面定义这类元素的视觉表现。 |
| 794 | <code>    position: relative; flex: 1 1 220px; max-width: 280px;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 795 | <code>}</code> | 结束当前 CSS 规则块。 |
| 796 | <code>.records-search-icon {</code> | 选择器 `.records-search-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 797 | <code>    position: absolute; top: 50%; left: 12px;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 798 | <code>    width: 14px; height: 14px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 799 | <code>    transform: translateY(-50%);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 800 | <code>    color: rgba(131, 24, 67, 0.45);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 801 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 802 | <code>}</code> | 结束当前 CSS 规则块。 |
| 803 | <code>.records-search input {</code> | 选择器 `.records-search input` 的样式块开始，下面定义这类元素的视觉表现。 |
| 804 | <code>    width: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 805 | <code>    padding: 9px 36px 9px 36px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 806 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 807 | <code>    background: rgba(255, 255, 255, 0.85);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 808 | <code>    border: 1.5px solid rgba(236, 72, 153, 0.18);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 809 | <code>    font-size: 13px; font-weight: 500;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 810 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 811 | <code>    outline: none;</code> | 设置 `outline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 812 | <code>    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 813 | <code>}</code> | 结束当前 CSS 规则块。 |
| 814 | <code>.records-search input::placeholder { color: rgba(131, 24, 67, 0.4); }</code> | 设置 `.records-search input` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 815 | <code>.records-search input:hover { border-color: rgba(236, 72, 153, 0.35); }</code> | 设置 `.records-search input` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 816 | <code>.records-search input:focus { background: #fff; border-color: var(--color-brand-primary); box-shadow: 0 0 0 4px rgba(var(--color-brand-primary-rgb), 0.12); }</code> | 设置 `.records-search input` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 817 | <code>.records-search-clear {</code> | 选择器 `.records-search-clear` 的样式块开始，下面定义这类元素的视觉表现。 |
| 818 | <code>    position: absolute; top: 50%; right: 8px;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 819 | <code>    width: 22px; height: 22px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 820 | <code>    transform: translateY(-50%);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 821 | <code>    border-radius: 50%;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 822 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 823 | <code>    color: rgba(131, 24, 67, 0.45);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 824 | <code>    background: rgba(236, 72, 153, 0.08);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 825 | <code>    opacity: 0; pointer-events: none;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 826 | <code>    transition: opacity 0.2s ease, background 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 827 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 828 | <code>}</code> | 结束当前 CSS 规则块。 |
| 829 | <code>.records-search-clear svg { width: 12px; height: 12px; }</code> | 设置 `.records-search-clear svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 830 | <code>.records-search-clear.is-visible { opacity: 1; pointer-events: auto; }</code> | 设置 `.records-search-clear.is-visible { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 831 | <code>.records-search-clear:hover { background: rgba(var(--color-brand-primary-rgb), 0.15); color: var(--color-brand-primary); }</code> | 设置 `.records-search-clear` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 832 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 833 | <code>/* ----- 卡片：封面天数标签 + 进度条 ----- */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 834 | <code>.record-cover-day {</code> | 选择器 `.record-cover-day` 的样式块开始，下面定义这类元素的视觉表现。 |
| 835 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 836 | <code>    top: 6px; left: 6px;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 837 | <code>    padding: 2px 8px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 838 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 839 | <code>    background: rgba(0, 0, 0, 0.55);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 840 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 841 | <code>    font-size: 10px; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 842 | <code>    letter-spacing: 0.04em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 843 | <code>    backdrop-filter: blur(4px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 844 | <code>    -webkit-backdrop-filter: blur(4px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 845 | <code>    z-index: 2;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 846 | <code>}</code> | 结束当前 CSS 规则块。 |
| 847 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 848 | <code>.record-progress {</code> | 选择器 `.record-progress` 的样式块开始，下面定义这类元素的视觉表现。 |
| 849 | <code>    margin-top: 2px;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 850 | <code>    padding: 8px 10px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 851 | <code>    border-radius: 0.625rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 852 | <code>    background: rgba(255, 255, 255, 0.6);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 853 | <code>    border: 1px solid rgba(236, 72, 153, 0.08);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 854 | <code>}</code> | 结束当前 CSS 规则块。 |
| 855 | <code>.record-progress-track {</code> | 选择器 `.record-progress-track` 的样式块开始，下面定义这类元素的视觉表现。 |
| 856 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 857 | <code>    width: 100%; height: 6px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 858 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 859 | <code>    background: rgba(131, 24, 67, 0.08);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 860 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 861 | <code>}</code> | 结束当前 CSS 规则块。 |
| 862 | <code>.record-progress-fill {</code> | 选择器 `.record-progress-fill` 的样式块开始，下面定义这类元素的视觉表现。 |
| 863 | <code>    display: block; height: 100%;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 864 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 865 | <code>    background: linear-gradient(90deg, #34d399, #10b981);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 866 | <code>    transition: width 0.4s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 867 | <code>}</code> | 结束当前 CSS 规则块。 |
| 868 | <code>.record-progress.is-soon .record-progress-fill   { background: linear-gradient(90deg, #fbbf24, #f59e0b); }</code> | 设置 `.record-progress.is-soon .record-progress-fill   { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 869 | <code>.record-progress.is-overdue .record-progress-fill { background: linear-gradient(90deg, #f87171, #ef4444); }</code> | 设置 `.record-progress.is-overdue .record-progress-fill { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 870 | <code>.record-progress-meta {</code> | 选择器 `.record-progress-meta` 的样式块开始，下面定义这类元素的视觉表现。 |
| 871 | <code>    display: flex; align-items: center; justify-content: space-between;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 872 | <code>    margin-top: 6px;</code> | 设置 `margin-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 873 | <code>    font-size: 11px; font-weight: 600;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 874 | <code>}</code> | 结束当前 CSS 规则块。 |
| 875 | <code>.record-progress-label { color: rgba(131, 24, 67, 0.7); }</code> | 设置 `.record-progress-label { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 876 | <code>.record-progress-pct   { color: rgba(131, 24, 67, 0.45); font-variant-numeric: tabular-nums; }</code> | 设置 `.record-progress-pct   { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 877 | <code>.record-progress.is-soon    .record-progress-label { color: #92400e; }</code> | 设置 `.record-progress.is-soon    .record-progress-label { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 878 | <code>.record-progress.is-overdue .record-progress-label { color: #991b1b; }</code> | 设置 `.record-progress.is-overdue .record-progress-label { color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 879 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 880 | <code>/* ==================== Desktop borrow-records cohesion ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 881 | <code>@media (min-width: 1024px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 882 | <code>    .borrow-page {</code> | 选择器 `.borrow-page` 的样式块开始，下面定义这类元素的视觉表现。 |
| 883 | <code>        max-width: 1180px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 884 | <code>        margin-inline: auto;</code> | 设置 `margin-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 885 | <code>        padding-inline: 1.5rem;</code> | 设置 `padding-inline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 886 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 887 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 888 | <code>    .borrow-hero {</code> | 选择器 `.borrow-hero` 的样式块开始，下面定义这类元素的视觉表现。 |
| 889 | <code>        margin: 0 0 1.25rem;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 890 | <code>        padding: 1.7rem 1.75rem 1.45rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 891 | <code>        border-radius: 1.5rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 892 | <code>        box-shadow: 0 24px 64px -44px rgba(var(--color-brand-primary-rgb), 0.42);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 893 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 894 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 895 | <code>    .borrow-layout {</code> | 选择器 `.borrow-layout` 的样式块开始，下面定义这类元素的视觉表现。 |
| 896 | <code>        grid-template-columns: minmax(0, 1fr) 300px;</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 897 | <code>        gap: 1.25rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 898 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 899 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 900 | <code>    .records-tabs-bar {</code> | 选择器 `.records-tabs-bar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 901 | <code>        padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 902 | <code>        border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 903 | <code>        background: rgba(255, 255, 255, 0.78);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 904 | <code>        border: 1px solid rgba(249, 168, 212, 0.24);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 905 | <code>        box-shadow: 0 14px 36px -30px rgba(var(--color-brand-primary-rgb), 0.35);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 906 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 907 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 908 | <code>    #records-list {</code> | 选择器 `#records-list` 的样式块开始，下面定义这类元素的视觉表现。 |
| 909 | <code>        max-height: none;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 910 | <code>        overflow: visible;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 911 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 912 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 913 | <code>    .record-card,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 914 | <code>    .aside-card {</code> | 选择器 `.aside-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 915 | <code>        border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 916 | <code>        border-color: rgba(249, 168, 212, 0.22);</code> | 设置 `border-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 917 | <code>        box-shadow: 0 14px 36px -30px rgba(var(--color-brand-primary-rgb), 0.36);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 918 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 919 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 920 | <code>    .borrow-aside {</code> | 选择器 `.borrow-aside` 的样式块开始，下面定义这类元素的视觉表现。 |
| 921 | <code>        gap: 1rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 922 | <code>        max-height: none;</code> | 设置 `max-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 923 | <code>        overflow: visible;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 924 | <code>        top: 7.25rem;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 925 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 926 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 927 | <code>    .records-search {</code> | 选择器 `.records-search` 的样式块开始，下面定义这类元素的视觉表现。 |
| 928 | <code>        max-width: 320px;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 929 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 930 | <code>}</code> | 结束当前 CSS 规则块。 |
