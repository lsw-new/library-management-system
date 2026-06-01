# static/js/borrow-modal.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>/**</code> | 块注释内容，用于解释一组前端逻辑。 |
| 2 | <code> * 借阅预约弹窗模块 (BorrowModal)</code> | 块注释内容，用于解释一组前端逻辑。 |
| 3 | <code> * IIFE 封装，避免全局命名空间污染</code> | 块注释内容，用于解释一组前端逻辑。 |
| 4 | <code> */</code> | 块注释内容，用于解释一组前端逻辑。 |
| 5 | <code>const BorrowModal = (() =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 6 | <code>    // ==================== 私有状态 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 7 | <code>    let currentBookId = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 8 | <code>    let currentCalendarType = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 9 | <code>    let selectedStartDate = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 10 | <code>    let selectedEndDate = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 11 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 12 | <code>    // ==================== 私有工具函数 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 13 | <code>    function formatDate(date) {</code> | 定义 `formatDate` 函数，封装页面交互或请求处理逻辑。 |
| 14 | <code>        const y = date.getFullYear();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 15 | <code>        const m = String(date.getMonth() + 1).padStart(2, &#x27;0&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 16 | <code>        const d = String(date.getDate()).padStart(2, &#x27;0&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 17 | <code>        return `${y}-${m}-${d}`;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 18 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 19 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 20 | <code>    function hideCalendar(type) {</code> | 定义 `hideCalendar` 函数，封装页面交互或请求处理逻辑。 |
| 21 | <code>        const el = document.getElementById(type === &#x27;start&#x27; ? &#x27;calendarStart&#x27; : &#x27;calendarEnd&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 22 | <code>        if (el) { el.classList.add(&#x27;hidden&#x27;); el.innerHTML = &#x27;&#x27;; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 23 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 24 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 25 | <code>    function updateDuration() {</code> | 定义 `updateDuration` 函数，封装页面交互或请求处理逻辑。 |
| 26 | <code>        const durationEl = document.getElementById(&#x27;borrowDuration&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 27 | <code>        const errorEl = document.getElementById(&#x27;borrowDateError&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 28 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 29 | <code>        if (!selectedEndDate) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 30 | <code>            if (durationEl) durationEl.textContent = &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 31 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 32 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 33 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 34 | <code>        const start = selectedStartDate ? new Date(selectedStartDate) : new Date();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 35 | <code>        const end = new Date(selectedEndDate);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 36 | <code>        const days = Math.round((end - start) / 86400000);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 37 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 38 | <code>        if (days &lt;= 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 39 | <code>            if (errorEl) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 40 | <code>                errorEl.textContent = &#x27;归还日期必须晚于开始日期&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 41 | <code>                errorEl.classList.remove(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 42 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 43 | <code>            if (durationEl) durationEl.textContent = &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 44 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 45 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 46 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 47 | <code>        if (days &gt; 12) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 48 | <code>            if (errorEl) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 49 | <code>                errorEl.textContent = &#x27;借阅时长不能超过12天&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 50 | <code>                errorEl.classList.remove(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 51 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 52 | <code>            if (durationEl) durationEl.textContent = &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 53 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 54 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 55 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 56 | <code>        if (errorEl) { errorEl.textContent = &#x27;&#x27;; errorEl.classList.add(&#x27;hidden&#x27;); }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 57 | <code>        if (durationEl) durationEl.textContent = `借阅时长：${days} 天`;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 58 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 59 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 60 | <code>    function renderCalendar(type) {</code> | 定义 `renderCalendar` 函数，封装页面交互或请求处理逻辑。 |
| 61 | <code>        const container = document.getElementById(type === &#x27;start&#x27; ? &#x27;calendarStart&#x27; : &#x27;calendarEnd&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 62 | <code>        if (!container) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 63 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 64 | <code>        const today = new Date();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 65 | <code>        today.setHours(0, 0, 0, 0);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 66 | <code>        const viewDate = new Date(today.getFullYear(), today.getMonth(), 1);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 67 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 68 | <code>        function build(year, month) {</code> | 定义 `build` 函数，封装页面交互或请求处理逻辑。 |
| 69 | <code>            const firstDay = new Date(year, month, 1);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 70 | <code>            const lastDay = new Date(year, month + 1, 0);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 71 | <code>            const startWeekday = firstDay.getDay();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 72 | <code>            const monthNames = [&#x27;1月&#x27;, &#x27;2月&#x27;, &#x27;3月&#x27;, &#x27;4月&#x27;, &#x27;5月&#x27;, &#x27;6月&#x27;, &#x27;7月&#x27;, &#x27;8月&#x27;, &#x27;9月&#x27;, &#x27;10月&#x27;, &#x27;11月&#x27;, &#x27;12月&#x27;];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 73 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 74 | <code>            let html = &#x27;&lt;div class=&quot;bg-white border border-purple-200 rounded-xl shadow-lg p-3&quot;&gt;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 75 | <code>            html += &#x27;&lt;div class=&quot;flex items-center justify-between mb-2&quot;&gt;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 76 | <code>            html += `&lt;button type=&quot;button&quot; class=&quot;cal-prev p-1 hover:bg-purple-50 rounded text-purple-600 text-sm&quot;&gt;&amp;lt;&lt;/button&gt;`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 77 | <code>            html += `&lt;span class=&quot;text-sm font-bold text-pink-900&quot;&gt;${year}年${monthNames[month]}&lt;/span&gt;`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 78 | <code>            html += `&lt;button type=&quot;button&quot; class=&quot;cal-next p-1 hover:bg-purple-50 rounded text-purple-600 text-sm&quot;&gt;&amp;gt;&lt;/button&gt;`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 79 | <code>            html += &#x27;&lt;/div&gt;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 80 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 81 | <code>            html += &#x27;&lt;div class=&quot;grid grid-cols-7 gap-0.5 text-center text-[10px] text-pink-400 mb-1&quot;&gt;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 82 | <code>            [&#x27;日&#x27;, &#x27;一&#x27;, &#x27;二&#x27;, &#x27;三&#x27;, &#x27;四&#x27;, &#x27;五&#x27;, &#x27;六&#x27;].forEach(d =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 83 | <code>                html += `&lt;div class=&quot;py-0.5&quot;&gt;${d}&lt;/div&gt;`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 84 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 85 | <code>            html += &#x27;&lt;/div&gt;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 86 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 87 | <code>            html += &#x27;&lt;div class=&quot;grid grid-cols-7 gap-0.5 text-center&quot;&gt;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 88 | <code>            for (let i = 0; i &lt; startWeekday; i++) {</code> | 循环语句，用于遍历 DOM 集合、数据列表或重试逻辑。 |
| 89 | <code>                html += &#x27;&lt;div&gt;&lt;/div&gt;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 90 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 91 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 92 | <code>            const maxDays = type === &#x27;end&#x27; ? 12 : 30;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 93 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 94 | <code>            for (let d = 1; d &lt;= lastDay.getDate(); d++) {</code> | 循环语句，用于遍历 DOM 集合、数据列表或重试逻辑。 |
| 95 | <code>                const date = new Date(year, month, d);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 96 | <code>                const dateStr = formatDate(date);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 97 | <code>                const isPast = date &lt; today;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 98 | <code>                const isTooFar = date &gt; new Date(today.getTime() + maxDays * 86400000);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 99 | <code>                const isSelected = (type === &#x27;start&#x27; &amp;&amp; selectedStartDate === dateStr) ||</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 100 | <code>                                   (type === &#x27;end&#x27; &amp;&amp; selectedEndDate === dateStr);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 101 | <code>                const isDisabled = isPast || isTooFar;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 102 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 103 | <code>                let cls = &#x27;py-1 text-xs rounded-lg cursor-pointer transition-colors &#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 104 | <code>                if (isDisabled) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 105 | <code>                    cls += &#x27;text-gray-300 cursor-not-allowed&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 106 | <code>                } else if (isSelected) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 107 | <code>                    cls += &#x27;bg-purple-500 text-white font-bold&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 108 | <code>                } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 109 | <code>                    cls += &#x27;text-pink-900 hover:bg-purple-50&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 110 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 111 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 112 | <code>                html += `&lt;div class=&quot;${cls}&quot; data-date=&quot;${dateStr}&quot; ${isDisabled ? &#x27;&#x27; : `onclick=&quot;BorrowModal.selectDate(&#x27;${type}&#x27;,&#x27;${dateStr}&#x27;)&quot;`}&gt;${d}&lt;/div&gt;`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 113 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 114 | <code>            html += &#x27;&lt;/div&gt;&lt;/div&gt;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 115 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 116 | <code>            container.innerHTML = html;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 117 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 118 | <code>            container.querySelector(&#x27;.cal-prev&#x27;)?.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 119 | <code>                e.stopPropagation();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 120 | <code>                const prev = month === 0 ? 11 : month - 1;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 121 | <code>                const prevYear = month === 0 ? year - 1 : year;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 122 | <code>                build(prevYear, prev);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 123 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 124 | <code>            container.querySelector(&#x27;.cal-next&#x27;)?.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 125 | <code>                e.stopPropagation();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 126 | <code>                const next = month === 11 ? 0 : month + 1;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 127 | <code>                const nextYear = month === 11 ? year + 1 : year;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 128 | <code>                build(nextYear, next);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 129 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 130 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 131 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 132 | <code>        build(viewDate.getFullYear(), viewDate.getMonth());</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 133 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 134 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 135 | <code>    // ==================== 公开方法 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 136 | <code>    function setHeaderVisible(visible) {</code> | 定义 `setHeaderVisible` 函数，封装页面交互或请求处理逻辑。 |
| 137 | <code>        var header = document.querySelector(&#x27;.site-header&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 138 | <code>        if (header) header.style.display = visible ? &#x27;&#x27; : &#x27;none&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 139 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 140 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 141 | <code>    function open(bookId, title, stock) {</code> | 定义 `open` 函数，封装页面交互或请求处理逻辑。 |
| 142 | <code>        currentBookId = bookId;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 143 | <code>        selectedEndDate = null;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 144 | <code>        currentCalendarType = null;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 145 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 146 | <code>        var today = new Date();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 147 | <code>        var todayStr = formatDate(today);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 148 | <code>        selectedStartDate = todayStr;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 149 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 150 | <code>        const modal = document.getElementById(&#x27;borrowModal&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 151 | <code>        const titleEl = document.getElementById(&#x27;modalBookTitle&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 152 | <code>        const stockEl = document.getElementById(&#x27;modalBookStock&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 153 | <code>        const startDisplay = document.getElementById(&#x27;borrowStartDateDisplay&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 154 | <code>        const endDisplay = document.getElementById(&#x27;borrowEndDateDisplay&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 155 | <code>        const durationEl = document.getElementById(&#x27;borrowDuration&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 156 | <code>        const errorEl = document.getElementById(&#x27;borrowDateError&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 157 | <code>        const startHidden = document.getElementById(&#x27;borrowStartDate&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 158 | <code>        const endHidden = document.getElementById(&#x27;borrowEndDate&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 159 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 160 | <code>        if (titleEl) titleEl.textContent = title;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 161 | <code>        if (stockEl) stockEl.textContent = stock;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 162 | <code>        if (startDisplay) startDisplay.value = todayStr;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 163 | <code>        if (startHidden) startHidden.value = todayStr;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 164 | <code>        if (endDisplay) endDisplay.value = &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 165 | <code>        if (durationEl) durationEl.textContent = &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 166 | <code>        if (errorEl) { errorEl.textContent = &#x27;&#x27;; errorEl.classList.add(&#x27;hidden&#x27;); }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 167 | <code>        if (endHidden) endHidden.value = &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 168 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 169 | <code>        hideCalendar(&#x27;start&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 170 | <code>        hideCalendar(&#x27;end&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 171 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 172 | <code>        setHeaderVisible(false);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 173 | <code>        if (modal) modal.classList.remove(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 174 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 175 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 176 | <code>    function close() {</code> | 定义 `close` 函数，封装页面交互或请求处理逻辑。 |
| 177 | <code>        const modal = document.getElementById(&#x27;borrowModal&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 178 | <code>        if (modal) modal.classList.add(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 179 | <code>        currentBookId = null;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 180 | <code>        setHeaderVisible(true);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 181 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 182 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 183 | <code>    function toggleCalendar(type) {</code> | 定义 `toggleCalendar` 函数，封装页面交互或请求处理逻辑。 |
| 184 | <code>        if (type === &#x27;start&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 185 | <code>        const calEnd = document.getElementById(&#x27;calendarEnd&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 186 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 187 | <code>        if (calEnd &amp;&amp; !calEnd.classList.contains(&#x27;hidden&#x27;)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 188 | <code>            calEnd.classList.add(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 189 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 190 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 191 | <code>        renderCalendar(&#x27;end&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 192 | <code>        if (calEnd) calEnd.classList.remove(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 193 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 194 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 195 | <code>    function selectDate(type, dateStr) {</code> | 定义 `selectDate` 函数，封装页面交互或请求处理逻辑。 |
| 196 | <code>        if (type === &#x27;start&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 197 | <code>            selectedStartDate = dateStr;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 198 | <code>            const display = document.getElementById(&#x27;borrowStartDateDisplay&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 199 | <code>            const hidden = document.getElementById(&#x27;borrowStartDate&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 200 | <code>            if (display) display.value = dateStr;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 201 | <code>            if (hidden) hidden.value = dateStr;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 202 | <code>        } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 203 | <code>            selectedEndDate = dateStr;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 204 | <code>            const display = document.getElementById(&#x27;borrowEndDateDisplay&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 205 | <code>            const hidden = document.getElementById(&#x27;borrowEndDate&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 206 | <code>            if (display) display.value = dateStr;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 207 | <code>            if (hidden) hidden.value = dateStr;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 208 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 209 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 210 | <code>        hideCalendar(type);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 211 | <code>        updateDuration();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 212 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 213 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 214 | <code>    async function confirmBorrow() {</code> | 定义 `confirmBorrow` 函数，封装页面交互或请求处理逻辑。 |
| 215 | <code>        if (!currentBookId) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 216 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 217 | <code>        const errorEl = document.getElementById(&#x27;borrowDateError&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 218 | <code>        const endDate = selectedEndDate || document.getElementById(&#x27;borrowEndDate&#x27;)?.value;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 219 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 220 | <code>        if (!endDate) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 221 | <code>            if (errorEl) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 222 | <code>                errorEl.textContent = &#x27;请选择归还日期&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 223 | <code>                errorEl.classList.remove(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 224 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 225 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 226 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 227 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 228 | <code>        const btn = document.getElementById(&#x27;confirmBorrowBtn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 229 | <code>        if (btn) { btn.disabled = true; btn.textContent = &#x27;预约中...&#x27;; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 230 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 231 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 232 | <code>            const body = { return_date: endDate };</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 233 | <code>            if (selectedStartDate) body.start_date = selectedStartDate;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 234 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 235 | <code>            const { ok, data } = await postJson(`/book/borrow/${currentBookId}`, body);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 236 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 237 | <code>            if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 238 | <code>                const borrowedBookId = currentBookId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 239 | <code>                close();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 240 | <code>                const successMessage = data.message || &#x27;预约成功，等待管理员审核后即可领取图书。&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 241 | <code>                if (typeof showNotice === &#x27;function&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 242 | <code>                    showNotice(&#x27;预约已提交&#x27;, successMessage, &#x27;success&#x27;, [</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 243 | <code>                        { label: &#x27;查看借阅记录&#x27;, href: (window.borrowModalConfig || {}).recordsUrl || &#x27;/borrow_records&#x27;, primary: true },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 244 | <code>                        { label: &#x27;继续浏览&#x27; }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 245 | <code>                    ]);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 246 | <code>                } else if (typeof showToast === &#x27;function&#x27;) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 247 | <code>                    showToast(data.message || &#x27;预约成功&#x27;, &#x27;success&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 248 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 249 | <code>                if (data.stock !== undefined) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 250 | <code>                    window.dispatchEvent(new CustomEvent(&#x27;library:book-stock-changed&#x27;, {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 251 | <code>                        detail: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 252 | <code>                            book_id: data.book_id || borrowedBookId,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 253 | <code>                            stock: data.stock,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 254 | <code>                            total: data.total,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 255 | <code>                            available: data.available</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 256 | <code>                        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 257 | <code>                    }));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 258 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 259 | <code>            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 260 | <code>                if (errorEl) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 261 | <code>                    errorEl.textContent = data.message || &#x27;预约失败&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 262 | <code>                    errorEl.classList.remove(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 263 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 264 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 265 | <code>        } catch {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 266 | <code>            if (errorEl) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 267 | <code>                errorEl.textContent = &#x27;网络错误，请稍后重试&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 268 | <code>                errorEl.classList.remove(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 269 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 270 | <code>        } finally {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 271 | <code>            if (btn) { btn.disabled = false; btn.textContent = &#x27;确认预约&#x27;; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 272 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 273 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 274 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 275 | <code>    function showFromData(btn) {</code> | 定义 `showFromData` 函数，封装页面交互或请求处理逻辑。 |
| 276 | <code>        const bookId = btn.dataset.bookId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 277 | <code>        const title = btn.dataset.bookTitle || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 278 | <code>        const stock = btn.dataset.bookStock || &#x27;0&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 279 | <code>        if (bookId) open(bookId, title, stock);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 280 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 281 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 282 | <code>    function applyStockChange(info) {</code> | 定义 `applyStockChange` 函数，封装页面交互或请求处理逻辑。 |
| 283 | <code>        if (!info || String(info.book_id) !== String(currentBookId)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 284 | <code>        const stockEl = document.getElementById(&#x27;modalBookStock&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 285 | <code>        if (stockEl) stockEl.textContent = String(info.stock);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 286 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 287 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 288 | <code>    window.addEventListener(&#x27;library:book-stock-changed&#x27;, function(event) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 289 | <code>        applyStockChange(event.detail);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 290 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 291 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 292 | <code>    // ==================== 导出公开 API ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 293 | <code>    return { open, close, toggleCalendar, selectDate, confirmBorrow, showFromData };</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 294 | <code>})();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 295 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 296 | <code>// ==================== 全局 facade（兼容 HTML onclick 调用）====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 297 | <code>window.openBorrowModal = BorrowModal.open;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 298 | <code>window.closeBorrowModal = BorrowModal.close;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 299 | <code>window.toggleCalendar = BorrowModal.toggleCalendar;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 300 | <code>window.selectDate = BorrowModal.selectDate;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 301 | <code>window.confirmBorrow = BorrowModal.confirmBorrow;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 302 | <code>window.showBorrowModalFromData = BorrowModal.showFromData;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
