# static/css/base.css

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>﻿/* 基础样式 - 图书管理系统 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 2 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 3 | <code>:root {</code> | 选择器 `:root` 的样式块开始，下面定义这类元素的视觉表现。 |
| 4 | <code>    --color-brand-primary: #EC4899;</code> | 设置 `--color-brand-primary` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 5 | <code>    --color-brand-primary-hover: #DB2777;</code> | 设置 `--color-brand-primary-hover` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 6 | <code>    --color-brand-accent: #a855f7;</code> | 设置 `--color-brand-accent` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 7 | <code>    --color-brand-deep: #831843;</code> | 设置 `--color-brand-deep` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 8 | <code>    --color-brand-primary-rgb: 236, 72, 153;</code> | 设置 `--color-brand-primary-rgb` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 9 | <code>    --color-brand-accent-rgb: 168, 85, 247;</code> | 设置 `--color-brand-accent-rgb` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 10 | <code>    --color-brand-deep-rgb: 131, 24, 67;</code> | 设置 `--color-brand-deep-rgb` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 11 | <code>}</code> | 结束当前 CSS 规则块。 |
| 12 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 13 | <code>body {</code> | 选择器 `body` 的样式块开始，下面定义这类元素的视觉表现。 |
| 14 | <code>    font-family: &#x27;Montserrat&#x27;, sans-serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 15 | <code>    background-attachment: fixed;</code> | 设置 `background-attachment` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 16 | <code>}</code> | 结束当前 CSS 规则块。 |
| 17 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 18 | <code>h1, h2, h3, h4, h5, h6 {</code> | 选择器 `h1, h2, h3, h4, h5, h6` 的样式块开始，下面定义这类元素的视觉表现。 |
| 19 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 20 | <code>}</code> | 结束当前 CSS 规则块。 |
| 21 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 22 | <code>:is(a, button, input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])):focus-visible {</code> | 选择器 `:is(a, button, input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])):focus-visible` 的样式块开始，下面定义这类元素的视觉表现。 |
| 23 | <code>    outline: 3px solid rgba(var(--color-brand-deep-rgb), 0.75);</code> | 设置 `outline` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 24 | <code>    outline-offset: 3px;</code> | 设置 `outline-offset` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 25 | <code>    box-shadow: 0 0 0 5px rgba(var(--color-brand-primary-rgb), 0.16);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 26 | <code>}</code> | 结束当前 CSS 规则块。 |
| 27 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 28 | <code>/* 玻璃态面板效果 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 29 | <code>.glass-panel {</code> | 选择器 `.glass-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 30 | <code>    background: rgba(255, 255, 255, 0.7);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 31 | <code>    backdrop-filter: blur(16px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 32 | <code>    -webkit-backdrop-filter: blur(16px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 33 | <code>    border: 1px solid rgba(249, 168, 212, 0.3);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 34 | <code>}</code> | 结束当前 CSS 规则块。 |
| 35 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 36 | <code>/* ==================== 页脚链接 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 37 | <code>.footer-link {</code> | 选择器 `.footer-link` 的样式块开始，下面定义这类元素的视觉表现。 |
| 38 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 39 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 40 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 41 | <code>    gap: 6px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 42 | <code>    padding: 6px 10px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 43 | <code>    border-radius: 10px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 44 | <code>    font-size: 11px;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 45 | <code>    font-weight: 600;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 46 | <code>    letter-spacing: 0.05em;</code> | 设置 `letter-spacing` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 47 | <code>    color: rgba(131, 24, 67, 0.5);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 48 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 49 | <code>    transition: color 0.25s ease, background 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 50 | <code>}</code> | 结束当前 CSS 规则块。 |
| 51 | <code>.footer-link:hover {</code> | 选择器 `.footer-link:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 52 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 53 | <code>    background: rgba(var(--color-brand-primary-rgb), 0.06);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 54 | <code>}</code> | 结束当前 CSS 规则块。 |
| 55 | <code>.footer-link-icon {</code> | 选择器 `.footer-link-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 56 | <code>    width: 13px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 57 | <code>    height: 13px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 58 | <code>    opacity: 0.85;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 59 | <code>    transition: transform 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 60 | <code>}</code> | 结束当前 CSS 规则块。 |
| 61 | <code>.footer-link:hover .footer-link-icon {</code> | 选择器 `.footer-link:hover .footer-link-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 62 | <code>    transform: scale(1.1);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 63 | <code>}</code> | 结束当前 CSS 规则块。 |
| 64 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 65 | <code>.footer-dot {</code> | 选择器 `.footer-dot` 的样式块开始，下面定义这类元素的视觉表现。 |
| 66 | <code>    width: 3px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 67 | <code>    height: 3px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 68 | <code>    border-radius: 9999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 69 | <code>    background: rgba(249, 168, 212, 0.8);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 70 | <code>    flex-shrink: 0;</code> | 设置 `flex-shrink` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 71 | <code>}</code> | 结束当前 CSS 规则块。 |
| 72 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 73 | <code>/* Tooltip 卡片 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 74 | <code>.footer-tooltip {</code> | 选择器 `.footer-tooltip` 的样式块开始，下面定义这类元素的视觉表现。 |
| 75 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 76 | <code>    bottom: calc(100% + 12px);</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 77 | <code>    left: 50%;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 78 | <code>    transform: translateX(-50%) translateY(6px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 79 | <code>    width: max-content;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 80 | <code>    max-width: min(20rem, calc(100vw - 2rem));</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 81 | <code>    padding: 12px 14px;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 82 | <code>    background: #ffffff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 83 | <code>    border: 1px solid rgba(249, 168, 212, 0.45);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 84 | <code>    border-radius: 14px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 85 | <code>    box-shadow:</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 86 | <code>        0 12px 32px -8px rgba(236, 72, 153, 0.18),</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 87 | <code>        0 4px 12px -4px rgba(131, 24, 67, 0.08);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 88 | <code>    text-align: left;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 89 | <code>    display: none;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 90 | <code>    opacity: 0;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 91 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 92 | <code>    visibility: hidden;</code> | 设置 `visibility` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 93 | <code>    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s linear 0.25s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 94 | <code>    z-index: 50;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 95 | <code>}</code> | 结束当前 CSS 规则块。 |
| 96 | <code>.footer-link:hover .footer-tooltip,</code> | 设置 `.footer-link` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 97 | <code>.footer-link:focus-within .footer-tooltip {</code> | 选择器 `.footer-link:focus-within .footer-tooltip` 的样式块开始，下面定义这类元素的视觉表现。 |
| 98 | <code>    display: block;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 99 | <code>    opacity: 1;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 100 | <code>    visibility: visible;</code> | 设置 `visibility` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 101 | <code>    transform: translateX(-50%) translateY(0);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 102 | <code>    transition: opacity 0.25s ease, transform 0.25s ease, visibility 0s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 103 | <code>}</code> | 结束当前 CSS 规则块。 |
| 104 | <code>.footer-tooltip-arrow {</code> | 选择器 `.footer-tooltip-arrow` 的样式块开始，下面定义这类元素的视觉表现。 |
| 105 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 106 | <code>    top: 100%;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 107 | <code>    left: 50%;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 108 | <code>    transform: translateX(-50%);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 109 | <code>    width: 12px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 110 | <code>    height: 6px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 111 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 112 | <code>}</code> | 结束当前 CSS 规则块。 |
| 113 | <code>.footer-tooltip-arrow::before {</code> | 选择器 `.footer-tooltip-arrow::before` 的样式块开始，下面定义这类元素的视觉表现。 |
| 114 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 115 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 116 | <code>    top: -6px;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 117 | <code>    left: 50%;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 118 | <code>    width: 10px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 119 | <code>    height: 10px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 120 | <code>    background: #ffffff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 121 | <code>    border: 1px solid rgba(249, 168, 212, 0.45);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 122 | <code>    transform: translateX(-50%) rotate(45deg);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 123 | <code>}</code> | 结束当前 CSS 规则块。 |
| 124 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 125 | <code>/* 顶部导航：全程不透明，避免滚动内容穿透 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 126 | <code>.nav-glass {</code> | 选择器 `.nav-glass` 的样式块开始，下面定义这类元素的视觉表现。 |
| 127 | <code>    background: #ffffff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 128 | <code>    border: 1px solid rgba(249, 168, 212, 0.45);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 129 | <code>    box-shadow: 0 8px 24px -10px rgba(var(--color-brand-primary-rgb), 0.18),</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 130 | <code>                0 2px 8px -2px rgba(var(--color-brand-deep-rgb), 0.06);</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 131 | <code>}</code> | 结束当前 CSS 规则块。 |
| 132 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 133 | <code>/* 滚动时整个 header 平滑收起；上滑或回到顶部再恢复 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 134 | <code>header.site-header {</code> | 选择器 `header.site-header` 的样式块开始，下面定义这类元素的视觉表现。 |
| 135 | <code>    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 136 | <code>    will-change: transform;</code> | 设置 `will-change` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 137 | <code>}</code> | 结束当前 CSS 规则块。 |
| 138 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 139 | <code>header.site-header.is-hidden {</code> | 选择器 `header.site-header.is-hidden` 的样式块开始，下面定义这类元素的视觉表现。 |
| 140 | <code>    transform: translateY(-120%);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 141 | <code>    opacity: 0;</code> | 设置 `opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 142 | <code>    pointer-events: none;</code> | 设置 `pointer-events` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 143 | <code>}</code> | 结束当前 CSS 规则块。 |
| 144 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 145 | <code>/* 主按钮样式 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 146 | <code>.btn-primary {</code> | 选择器 `.btn-primary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 147 | <code>    background: linear-gradient(135deg, var(--color-brand-primary) 0%, var(--color-brand-primary-hover) 100%);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 148 | <code>    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 149 | <code>}</code> | 结束当前 CSS 规则块。 |
| 150 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 151 | <code>.btn-primary:hover {</code> | 选择器 `.btn-primary:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 152 | <code>    transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 153 | <code>    box-shadow: 0 10px 20px -5px rgba(var(--color-brand-primary-rgb), 0.4);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 154 | <code>}</code> | 结束当前 CSS 规则块。 |
| 155 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 156 | <code>/* 导航链接效果 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 157 | <code>.nav-link {</code> | 选择器 `.nav-link` 的样式块开始，下面定义这类元素的视觉表现。 |
| 158 | <code>    position: relative;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 159 | <code>    transition: color 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 160 | <code>}</code> | 结束当前 CSS 规则块。 |
| 161 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 162 | <code>.nav-link::after {</code> | 选择器 `.nav-link::after` 的样式块开始，下面定义这类元素的视觉表现。 |
| 163 | <code>    content: &#x27;&#x27;;</code> | 设置 `content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 164 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 165 | <code>    bottom: -2px;</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 166 | <code>    left: 50%;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 167 | <code>    width: 0;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 168 | <code>    height: 2px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 169 | <code>    background: var(--color-brand-primary);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 170 | <code>    transition: all 0.3s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 171 | <code>    transform: translateX(-50%);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 172 | <code>}</code> | 结束当前 CSS 规则块。 |
| 173 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 174 | <code>.nav-link:hover::after {</code> | 选择器 `.nav-link:hover::after` 的样式块开始，下面定义这类元素的视觉表现。 |
| 175 | <code>    width: 80%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 176 | <code>}</code> | 结束当前 CSS 规则块。 |
| 177 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 178 | <code>.nav-avatar {</code> | 选择器 `.nav-avatar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 179 | <code>    width: 40px; height: 40px; flex-shrink: 0;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 180 | <code>    border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 181 | <code>    background: linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 182 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 183 | <code>    box-shadow: 0 0 0 2.5px rgba(255,255,255,0.85), 0 0 0 4.5px rgba(var(--color-brand-primary-rgb),0.15);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 184 | <code>    overflow: hidden;</code> | 设置 `overflow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 185 | <code>    transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 186 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 187 | <code>}</code> | 结束当前 CSS 规则块。 |
| 188 | <code>.nav-avatar:hover {</code> | 选择器 `.nav-avatar:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 189 | <code>    transform: translateY(-2px);</code> | 设置 `transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 190 | <code>    box-shadow: 0 0 0 2.5px rgba(255,255,255,0.9), 0 0 0 5px rgba(var(--color-brand-primary-rgb),0.25), 0 6px 16px -6px rgba(var(--color-brand-primary-rgb),0.3);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 191 | <code>}</code> | 结束当前 CSS 规则块。 |
| 192 | <code>.nav-avatar-img { width: 100%; height: 100%; object-fit: cover; }</code> | 设置 `.nav-avatar-img { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 193 | <code>.nav-avatar-letter {</code> | 选择器 `.nav-avatar-letter` 的样式块开始，下面定义这类元素的视觉表现。 |
| 194 | <code>    font-size: 1.1rem; font-weight: 700; color: #fff;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 195 | <code>    font-family: &#x27;Cormorant&#x27;, serif;</code> | 设置 `font-family` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 196 | <code>    line-height: 1;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 197 | <code>}</code> | 结束当前 CSS 规则块。 |
| 198 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 199 | <code>/* 自定义滚动条 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 200 | <code>::-webkit-scrollbar {</code> | 选择器 `::-webkit-scrollbar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 201 | <code>    width: 8px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 202 | <code>}</code> | 结束当前 CSS 规则块。 |
| 203 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 204 | <code>::-webkit-scrollbar-track {</code> | 选择器 `::-webkit-scrollbar-track` 的样式块开始，下面定义这类元素的视觉表现。 |
| 205 | <code>    background: #FDF2F8;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 206 | <code>}</code> | 结束当前 CSS 规则块。 |
| 207 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 208 | <code>::-webkit-scrollbar-thumb {</code> | 选择器 `::-webkit-scrollbar-thumb` 的样式块开始，下面定义这类元素的视觉表现。 |
| 209 | <code>    background: #F9A8D4;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 210 | <code>    border-radius: 10px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 211 | <code>    border: 2px solid #FDF2F8;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 212 | <code>}</code> | 结束当前 CSS 规则块。 |
| 213 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 214 | <code>::-webkit-scrollbar-thumb:hover {</code> | 选择器 `::-webkit-scrollbar-thumb:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 215 | <code>    background: var(--color-brand-primary);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 216 | <code>}</code> | 结束当前 CSS 规则块。 |
| 217 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 218 | <code>/* 移动端优化 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 219 | <code>@media (max-width: 768px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 220 | <code>    /* 移除300ms点击延迟 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 221 | <code>    * {</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 222 | <code>        touch-action: manipulation;</code> | 设置 `touch-action` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 223 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 224 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 225 | <code>    /* 防止意外缩放 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 226 | <code>    input, textarea, select {</code> | 选择器 `input, textarea, select` 的样式块开始，下面定义这类元素的视觉表现。 |
| 227 | <code>        font-size: 16px !important;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 228 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 229 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 230 | <code>    /* 优化触摸目标 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 231 | <code>    .touch-target {</code> | 选择器 `.touch-target` 的样式块开始，下面定义这类元素的视觉表现。 |
| 232 | <code>        min-height: 44px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 233 | <code>        min-width: 44px;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 234 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 235 | <code>}</code> | 结束当前 CSS 规则块。 |
| 236 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 237 | <code>/* 减少动画在移动端的使用 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 238 | <code>@media (prefers-reduced-motion: reduce) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 239 | <code>    *, *::before, *::after {</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 240 | <code>        animation-duration: 0.01ms !important;</code> | 设置 `animation-duration` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 241 | <code>        animation-iteration-count: 1 !important;</code> | 设置 `animation-iteration-count` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 242 | <code>        transition-duration: 0.01ms !important;</code> | 设置 `transition-duration` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 243 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 244 | <code>}</code> | 结束当前 CSS 规则块。 |
| 245 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 246 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 247 | <code>/* 隐藏横向滚动条但保持滚动功能 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 248 | <code>.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }</code> | 设置 `.scrollbar-hide { -ms-overflow-style` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 249 | <code>.scrollbar-hide::-webkit-scrollbar { display: none; }</code> | 设置 `.scrollbar-hide` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 250 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 251 | <code>/* 自定义细滚动条 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 252 | <code>.scrollbar-thin {</code> | 选择器 `.scrollbar-thin` 的样式块开始，下面定义这类元素的视觉表现。 |
| 253 | <code>    scrollbar-width: thin;</code> | 设置 `scrollbar-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 254 | <code>    scrollbar-color: rgba(139, 92, 246, 0.3) transparent;</code> | 设置 `scrollbar-color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 255 | <code>}</code> | 结束当前 CSS 规则块。 |
| 256 | <code>.scrollbar-thin::-webkit-scrollbar { width: 6px; }</code> | 设置 `.scrollbar-thin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 257 | <code>.scrollbar-thin::-webkit-scrollbar-track { background: transparent; }</code> | 设置 `.scrollbar-thin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 258 | <code>.scrollbar-thin::-webkit-scrollbar-thumb {</code> | 选择器 `.scrollbar-thin::-webkit-scrollbar-thumb` 的样式块开始，下面定义这类元素的视觉表现。 |
| 259 | <code>    background: rgba(139, 92, 246, 0.3);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 260 | <code>    border-radius: 3px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 261 | <code>}</code> | 结束当前 CSS 规则块。 |
| 262 | <code>.scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(139, 92, 246, 0.5); }</code> | 设置 `.scrollbar-thin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 263 | <code>/* 布局容器 */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 264 | <code>.page-shell, .admin-shell, .records-shell { max-width: 1200px; margin: 0 auto; }</code> | 设置 `.page-shell, .admin-shell, .records-shell { max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 265 | <code>.card, .panel { background: rgba(255,255,255,.86); border: 1px solid rgba(var(--color-brand-primary-rgb),.14); border-radius: 1rem; }</code> | 设置 `.card, .panel { background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 266 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 267 | <code>/* ==================== Kickout 弹窗 ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 268 | <code>@keyframes kickoutFadeIn { from { opacity: 0; } to { opacity: 1; } }</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 269 | <code>@keyframes kickoutPopIn {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 270 | <code>    0%   { opacity: 0; transform: scale(0.85) translateY(20px); }</code> | 设置 `0%   { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 271 | <code>    60%  { opacity: 1; transform: scale(1.03) translateY(-4px); }</code> | 设置 `60%  { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 272 | <code>    100% { opacity: 1; transform: scale(1) translateY(0); }</code> | 设置 `100% { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 273 | <code>}</code> | 结束当前 CSS 规则块。 |
| 274 | <code>@keyframes kickoutPulse {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 275 | <code>    0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.55); }</code> | 设置 `0%, 100% { box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 276 | <code>    50%      { box-shadow: 0 0 0 18px rgba(244, 63, 94, 0); }</code> | 设置 `50%      { box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 277 | <code>}</code> | 结束当前 CSS 规则块。 |
| 278 | <code>@keyframes kickoutCountdown {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 279 | <code>    from { stroke-dashoffset: 0; }</code> | 设置 `from { stroke-dashoffset` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 280 | <code>    to   { stroke-dashoffset: 138.23; }</code> | 设置 `to   { stroke-dashoffset` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 281 | <code>}</code> | 结束当前 CSS 规则块。 |
| 282 | <code>.kickout-overlay {</code> | 选择器 `.kickout-overlay` 的样式块开始，下面定义这类元素的视觉表现。 |
| 283 | <code>    position: fixed; inset: 0; z-index: 99999;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 284 | <code>    background: rgba(15, 23, 42, 0.55);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 285 | <code>    backdrop-filter: blur(8px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 286 | <code>    -webkit-backdrop-filter: blur(8px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 287 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 288 | <code>    padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 289 | <code>    animation: kickoutFadeIn 0.25s ease-out both;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 290 | <code>}</code> | 结束当前 CSS 规则块。 |
| 291 | <code>.kickout-card {</code> | 选择器 `.kickout-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 292 | <code>    background: #ffffff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 293 | <code>    border-radius: 1.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 294 | <code>    box-shadow: 0 30px 80px -20px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.6);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 295 | <code>    max-width: 26rem; width: 100%;</code> | 设置 `max-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 296 | <code>    padding: 2.25rem 1.75rem 1.75rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 297 | <code>    text-align: center;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 298 | <code>    animation: kickoutPopIn 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 299 | <code>}</code> | 结束当前 CSS 规则块。 |
| 300 | <code>.kickout-icon-wrap {</code> | 选择器 `.kickout-icon-wrap` 的样式块开始，下面定义这类元素的视觉表现。 |
| 301 | <code>    width: 76px; height: 76px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 302 | <code>    margin: 0 auto 1.25rem;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 303 | <code>    border-radius: 9999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 304 | <code>    background: linear-gradient(135deg, #fb7185, #e11d48);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 305 | <code>    display: flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 306 | <code>    animation: kickoutPulse 1.6s ease-out infinite;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 307 | <code>}</code> | 结束当前 CSS 规则块。 |
| 308 | <code>.kickout-icon-wrap svg { width: 40px; height: 40px; color: #fff; }</code> | 设置 `.kickout-icon-wrap svg { width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 309 | <code>.kickout-title {</code> | 选择器 `.kickout-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 310 | <code>    font-size: 1.25rem; font-weight: 700;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 311 | <code>    color: #0f172a; margin-bottom: 0.5rem; letter-spacing: 0.02em;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 312 | <code>}</code> | 结束当前 CSS 规则块。 |
| 313 | <code>.kickout-msg {</code> | 选择器 `.kickout-msg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 314 | <code>    font-size: 0.95rem; color: #475569;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 315 | <code>    line-height: 1.6; margin-bottom: 1.5rem;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 316 | <code>}</code> | 结束当前 CSS 规则块。 |
| 317 | <code>.kickout-countdown {</code> | 选择器 `.kickout-countdown` 的样式块开始，下面定义这类元素的视觉表现。 |
| 318 | <code>    position: relative; width: 50px; height: 50px; margin: 0 auto 1.25rem;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 319 | <code>}</code> | 结束当前 CSS 规则块。 |
| 320 | <code>.kickout-countdown svg { transform: rotate(-90deg); }</code> | 设置 `.kickout-countdown svg { transform` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 321 | <code>.kickout-countdown-num {</code> | 选择器 `.kickout-countdown-num` 的样式块开始，下面定义这类元素的视觉表现。 |
| 322 | <code>    position: absolute; inset: 0; display: flex;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 323 | <code>    align-items: center; justify-content: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 324 | <code>    font-weight: 700; color: #e11d48; font-size: 1.05rem;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 325 | <code>}</code> | 结束当前 CSS 规则块。 |
| 326 | <code>.kickout-btn {</code> | 选择器 `.kickout-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 327 | <code>    display: inline-flex; align-items: center; justify-content: center;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 328 | <code>    gap: 0.5rem; width: 100%;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 329 | <code>    padding: 0.75rem 1.25rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 330 | <code>    border-radius: 9999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 331 | <code>    background: linear-gradient(135deg, #f43f5e, #be123c);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 332 | <code>    color: #ffffff; font-weight: 600; font-size: 0.95rem;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 333 | <code>    border: none; cursor: pointer;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 334 | <code>    transition: transform 0.2s ease, box-shadow 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 335 | <code>    box-shadow: 0 10px 25px -10px rgba(225, 29, 72, 0.6);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 336 | <code>}</code> | 结束当前 CSS 规则块。 |
| 337 | <code>.kickout-btn:hover { transform: translateY(-1px); box-shadow: 0 14px 30px -10px rgba(225, 29, 72, 0.7); }</code> | 设置 `.kickout-btn` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 338 | <code>.kickout-btn:active { transform: translateY(0); }</code> | 设置 `.kickout-btn` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 339 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 340 | <code>/* ==================== Mobile / tablet shell ==================== */</code> | CSS 注释，标记样式分区或解释设计目的。 |
| 341 | <code>.mobile-menu-btn {</code> | 选择器 `.mobile-menu-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 342 | <code>    width: 44px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 343 | <code>    height: 44px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 344 | <code>    border-radius: 14px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 345 | <code>    border: 1px solid rgba(var(--color-brand-primary-rgb), 0.14);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 346 | <code>    background: rgba(253, 242, 248, 0.72);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 347 | <code>    display: none;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 348 | <code>    flex-direction: column;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 349 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 350 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 351 | <code>    gap: 5px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 352 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 353 | <code>}</code> | 结束当前 CSS 规则块。 |
| 354 | <code>.mobile-menu-btn span {</code> | 选择器 `.mobile-menu-btn span` 的样式块开始，下面定义这类元素的视觉表现。 |
| 355 | <code>    width: 18px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 356 | <code>    height: 2px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 357 | <code>    border-radius: 999px;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 358 | <code>    background: currentColor;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 359 | <code>    transition: transform 0.22s ease, opacity 0.22s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 360 | <code>}</code> | 结束当前 CSS 规则块。 |
| 361 | <code>.mobile-menu-btn.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }</code> | 设置 `.mobile-menu-btn.is-open span` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 362 | <code>.mobile-menu-btn.is-open span:nth-child(2) { opacity: 0; }</code> | 设置 `.mobile-menu-btn.is-open span` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 363 | <code>.mobile-menu-btn.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }</code> | 设置 `.mobile-menu-btn.is-open span` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 364 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 365 | <code>.mobile-menu-panel {</code> | 选择器 `.mobile-menu-panel` 的样式块开始，下面定义这类元素的视觉表现。 |
| 366 | <code>    position: absolute;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 367 | <code>    display: none;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 368 | <code>    top: calc(100% + 10px);</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 369 | <code>    left: 0.75rem;</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 370 | <code>    right: 0.75rem;</code> | 设置 `right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 371 | <code>    padding: 0.65rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 372 | <code>    border-radius: 1.25rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 373 | <code>    background: rgba(255, 255, 255, 0.96);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 374 | <code>    border: 1px solid rgba(249, 168, 212, 0.42);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 375 | <code>    box-shadow: 0 20px 44px -24px rgba(var(--color-brand-primary-rgb), 0.46);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 376 | <code>}</code> | 结束当前 CSS 规则块。 |
| 377 | <code>.mobile-menu-panel a {</code> | 选择器 `.mobile-menu-panel a` 的样式块开始，下面定义这类元素的视觉表现。 |
| 378 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 379 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 380 | <code>    min-height: 44px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 381 | <code>    padding: 0.75rem 0.9rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 382 | <code>    border-radius: 0.95rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 383 | <code>    font-size: 0.9rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 384 | <code>    font-weight: 800;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 385 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.76);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 386 | <code>}</code> | 结束当前 CSS 规则块。 |
| 387 | <code>.mobile-menu-panel a:hover,</code> | 设置 `.mobile-menu-panel a` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 388 | <code>.mobile-menu-panel a:focus-visible {</code> | 选择器 `.mobile-menu-panel a:focus-visible` 的样式块开始，下面定义这类元素的视觉表现。 |
| 389 | <code>    background: rgba(var(--color-brand-primary-rgb), 0.08);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 390 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 391 | <code>}</code> | 结束当前 CSS 规则块。 |
| 392 | <code>.mobile-menu-panel a.is-danger {</code> | 选择器 `.mobile-menu-panel a.is-danger` 的样式块开始，下面定义这类元素的视觉表现。 |
| 393 | <code>    color: #e11d48;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 394 | <code>    background: rgba(255, 241, 242, 0.76);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 395 | <code>}</code> | 结束当前 CSS 规则块。 |
| 396 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 397 | <code>.mobile-bottom-nav {</code> | 选择器 `.mobile-bottom-nav` 的样式块开始，下面定义这类元素的视觉表现。 |
| 398 | <code>    position: fixed;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 399 | <code>    left: max(0.75rem, env(safe-area-inset-left));</code> | 设置 `left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 400 | <code>    right: max(0.75rem, env(safe-area-inset-right));</code> | 设置 `right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 401 | <code>    bottom: max(0.75rem, env(safe-area-inset-bottom));</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 402 | <code>    z-index: 900;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 403 | <code>    display: none;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 404 | <code>    grid-template-columns: repeat(auto-fit, minmax(64px, 1fr));</code> | 设置 `grid-template-columns` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 405 | <code>    gap: 0.35rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 406 | <code>    padding: 0.45rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 407 | <code>    border-radius: 1.45rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 408 | <code>    background: rgba(255, 255, 255, 0.92);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 409 | <code>    border: 1px solid rgba(249, 168, 212, 0.45);</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 410 | <code>    box-shadow: 0 18px 48px -26px rgba(var(--color-brand-primary-rgb), 0.55);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 411 | <code>    backdrop-filter: blur(18px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 412 | <code>    -webkit-backdrop-filter: blur(18px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 413 | <code>}</code> | 结束当前 CSS 规则块。 |
| 414 | <code>.mobile-bottom-nav a {</code> | 选择器 `.mobile-bottom-nav a` 的样式块开始，下面定义这类元素的视觉表现。 |
| 415 | <code>    min-width: 0;</code> | 设置 `min-width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 416 | <code>    min-height: 50px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 417 | <code>    border-radius: 1.1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 418 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 419 | <code>    flex-direction: column;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 420 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 421 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 422 | <code>    gap: 3px;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 423 | <code>    font-size: 0.67rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 424 | <code>    font-weight: 800;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 425 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.46);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 426 | <code>    transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;</code> | 设置 `transition` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 427 | <code>}</code> | 结束当前 CSS 规则块。 |
| 428 | <code>.mobile-bottom-nav svg {</code> | 选择器 `.mobile-bottom-nav svg` 的样式块开始，下面定义这类元素的视觉表现。 |
| 429 | <code>    width: 20px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 430 | <code>    height: 20px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 431 | <code>}</code> | 结束当前 CSS 规则块。 |
| 432 | <code>.mobile-bottom-nav a.is-active,</code> | CSS 语句，参与页面视觉样式或响应式布局定义。 |
| 433 | <code>.mobile-bottom-nav a:hover {</code> | 选择器 `.mobile-bottom-nav a:hover` 的样式块开始，下面定义这类元素的视觉表现。 |
| 434 | <code>    color: var(--color-brand-primary);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 435 | <code>    background: rgba(var(--color-brand-primary-rgb), 0.09);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 436 | <code>}</code> | 结束当前 CSS 规则块。 |
| 437 | <code>.mobile-bottom-nav a:active { transform: scale(0.96); }</code> | 设置 `.mobile-bottom-nav a` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 438 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 439 | <code>.app-dialog-overlay {</code> | 选择器 `.app-dialog-overlay` 的样式块开始，下面定义这类元素的视觉表现。 |
| 440 | <code>    position: fixed;</code> | 设置 `position` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 441 | <code>    inset: 0;</code> | 设置 `inset` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 442 | <code>    z-index: 2000;</code> | 设置 `z-index` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 443 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 444 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 445 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 446 | <code>    padding: 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 447 | <code>    background: linear-gradient(135deg, rgba(131, 24, 67, 0.28), rgba(168, 85, 247, 0.22));</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 448 | <code>    backdrop-filter: blur(10px);</code> | 设置 `backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 449 | <code>    -webkit-backdrop-filter: blur(10px);</code> | 设置 `-webkit-backdrop-filter` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 450 | <code>    animation: dialog-fade 0.18s ease-out both;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 451 | <code>}</code> | 结束当前 CSS 规则块。 |
| 452 | <code>.app-dialog-card {</code> | 选择器 `.app-dialog-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 453 | <code>    width: min(100%, 390px);</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 454 | <code>    border-radius: 1.75rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 455 | <code>    background: #fff;</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 456 | <code>    padding: 1.6rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 457 | <code>    text-align: center;</code> | 设置 `text-align` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 458 | <code>    box-shadow: 0 28px 76px -34px rgba(76, 24, 60, 0.55);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 459 | <code>    animation: dialog-pop 0.26s cubic-bezier(0.22, 1, 0.36, 1) both;</code> | 设置 `animation` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 460 | <code>}</code> | 结束当前 CSS 规则块。 |
| 461 | <code>.app-dialog-icon {</code> | 选择器 `.app-dialog-icon` 的样式块开始，下面定义这类元素的视觉表现。 |
| 462 | <code>    width: 64px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 463 | <code>    height: 64px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 464 | <code>    margin: 0 auto 1rem;</code> | 设置 `margin` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 465 | <code>    border-radius: 1.3rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 466 | <code>    display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 467 | <code>    align-items: center;</code> | 设置 `align-items` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 468 | <code>    justify-content: center;</code> | 设置 `justify-content` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 469 | <code>    font-size: 1.65rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 470 | <code>    font-weight: 900;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 471 | <code>}</code> | 结束当前 CSS 规则块。 |
| 472 | <code>.app-dialog-title {</code> | 选择器 `.app-dialog-title` 的样式块开始，下面定义这类元素的视觉表现。 |
| 473 | <code>    font-size: 1.45rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 474 | <code>    line-height: 1.15;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 475 | <code>    color: var(--color-brand-deep);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 476 | <code>    margin-bottom: 0.5rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 477 | <code>}</code> | 结束当前 CSS 规则块。 |
| 478 | <code>.app-dialog-message {</code> | 选择器 `.app-dialog-message` 的样式块开始，下面定义这类元素的视觉表现。 |
| 479 | <code>    font-size: 0.9rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 480 | <code>    line-height: 1.7;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 481 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.62);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 482 | <code>    margin-bottom: 1.25rem;</code> | 设置 `margin-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 483 | <code>}</code> | 结束当前 CSS 规则块。 |
| 484 | <code>.app-dialog-actions {</code> | 选择器 `.app-dialog-actions` 的样式块开始，下面定义这类元素的视觉表现。 |
| 485 | <code>    display: flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 486 | <code>    gap: 0.7rem;</code> | 设置 `gap` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 487 | <code>}</code> | 结束当前 CSS 规则块。 |
| 488 | <code>.app-dialog-btn {</code> | 选择器 `.app-dialog-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 489 | <code>    flex: 1;</code> | 设置 `flex` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 490 | <code>    min-height: 46px;</code> | 设置 `min-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 491 | <code>    border-radius: 1rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 492 | <code>    border: 0;</code> | 设置 `border` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 493 | <code>    padding: 0 1rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 494 | <code>    font-size: 0.85rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 495 | <code>    font-weight: 850;</code> | 设置 `font-weight` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 496 | <code>    cursor: pointer;</code> | 设置 `cursor` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 497 | <code>}</code> | 结束当前 CSS 规则块。 |
| 498 | <code>.app-dialog-btn.is-primary {</code> | 选择器 `.app-dialog-btn.is-primary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 499 | <code>    color: #fff;</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 500 | <code>    box-shadow: 0 14px 30px -18px rgba(var(--color-brand-primary-rgb), 0.7);</code> | 设置 `box-shadow` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 501 | <code>}</code> | 结束当前 CSS 规则块。 |
| 502 | <code>.app-dialog-btn.is-secondary {</code> | 选择器 `.app-dialog-btn.is-secondary` 的样式块开始，下面定义这类元素的视觉表现。 |
| 503 | <code>    color: rgba(var(--color-brand-deep-rgb), 0.62);</code> | 设置 `color` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 504 | <code>    background: rgba(253, 242, 248, 0.88);</code> | 设置 `background` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 505 | <code>}</code> | 结束当前 CSS 规则块。 |
| 506 | <code>@keyframes dialog-fade { from { opacity: 0; } to { opacity: 1; } }</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 507 | <code>@keyframes dialog-pop {</code> | CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。 |
| 508 | <code>    from { opacity: 0; transform: translateY(16px) scale(0.96); }</code> | 设置 `from { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 509 | <code>    to { opacity: 1; transform: translateY(0) scale(1); }</code> | 设置 `to { opacity` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 510 | <code>}</code> | 结束当前 CSS 规则块。 |
| 511 | <code> </code> | 空行，用于分隔 CSS 代码块，提升阅读层次。 |
| 512 | <code>@media (max-width: 767px) {</code> | 响应式媒体查询，根据屏幕宽度应用不同布局规则。 |
| 513 | <code>    html { scroll-padding-bottom: 6rem; }</code> | 设置 `html { scroll-padding-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 514 | <code>    body { background-attachment: scroll; }</code> | 设置 `body { background-attachment` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 515 | <code>    .mobile-menu-btn {</code> | 选择器 `.mobile-menu-btn` 的样式块开始，下面定义这类元素的视觉表现。 |
| 516 | <code>        display: inline-flex;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 517 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 518 | <code>    .mobile-menu-panel:not(.hidden) {</code> | 选择器 `.mobile-menu-panel:not(.hidden)` 的样式块开始，下面定义这类元素的视觉表现。 |
| 519 | <code>        display: block;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 520 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 521 | <code>    .mobile-bottom-nav {</code> | 选择器 `.mobile-bottom-nav` 的样式块开始，下面定义这类元素的视觉表现。 |
| 522 | <code>        display: grid;</code> | 设置 `display` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 523 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 524 | <code>    main#page-content {</code> | 选择器 `main#page-content` 的样式块开始，下面定义这类元素的视觉表现。 |
| 525 | <code>        padding-left: 0.85rem;</code> | 设置 `padding-left` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 526 | <code>        padding-right: 0.85rem;</code> | 设置 `padding-right` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 527 | <code>        padding-bottom: 6.5rem;</code> | 设置 `padding-bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 528 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 529 | <code>    header.site-header {</code> | 选择器 `header.site-header` 的样式块开始，下面定义这类元素的视觉表现。 |
| 530 | <code>        padding-top: max(0.55rem, env(safe-area-inset-top));</code> | 设置 `padding-top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 531 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 532 | <code>    #site-nav {</code> | 选择器 `#site-nav` 的样式块开始，下面定义这类元素的视觉表现。 |
| 533 | <code>        border-radius: 1.35rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 534 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 535 | <code>    #site-nav .nav-avatar {</code> | 选择器 `#site-nav .nav-avatar` 的样式块开始，下面定义这类元素的视觉表现。 |
| 536 | <code>        width: 36px;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 537 | <code>        height: 36px;</code> | 设置 `height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 538 | <code>        border-radius: 0.85rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 539 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 540 | <code>    .site-header .font-heading.text-2xl {</code> | 选择器 `.site-header .font-heading.text-2xl` 的样式块开始，下面定义这类元素的视觉表现。 |
| 541 | <code>        font-size: 1.25rem;</code> | 设置 `font-size` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 542 | <code>        line-height: 1.2;</code> | 设置 `line-height` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 543 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 544 | <code>    #toast-container {</code> | 选择器 `#toast-container` 的样式块开始，下面定义这类元素的视觉表现。 |
| 545 | <code>        top: auto !important;</code> | 设置 `top` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 546 | <code>        bottom: calc(5.8rem + env(safe-area-inset-bottom));</code> | 设置 `bottom` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 547 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 548 | <code>    .app-dialog-card {</code> | 选择器 `.app-dialog-card` 的样式块开始，下面定义这类元素的视觉表现。 |
| 549 | <code>        width: 100%;</code> | 设置 `width` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 550 | <code>        border-radius: 1.45rem;</code> | 设置 `border-radius` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 551 | <code>        padding: 1.35rem;</code> | 设置 `padding` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 552 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 553 | <code>    .app-dialog-actions {</code> | 选择器 `.app-dialog-actions` 的样式块开始，下面定义这类元素的视觉表现。 |
| 554 | <code>        flex-direction: column-reverse;</code> | 设置 `flex-direction` 样式属性，影响元素的布局、尺寸、颜色或交互效果。 |
| 555 | <code>    }</code> | 结束当前 CSS 规则块。 |
| 556 | <code>}</code> | 结束当前 CSS 规则块。 |
