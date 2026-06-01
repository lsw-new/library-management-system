# static/js/borrow-records.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>(function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 2 | <code>    const page = document.querySelector(&#x27;[data-borrow-action-csrf]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 3 | <code>    const filters = document.getElementById(&#x27;records-filters&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 4 | <code>    const list = document.getElementById(&#x27;records-list&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 5 | <code>    if (!filters || !list) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 6 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 7 | <code>    const emptyHint = document.getElementById(&#x27;records-empty-filter&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 8 | <code>    const toast = (msg, type = &#x27;success&#x27;) =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 9 | <code>        if (window.showToast) return window.showToast(msg, type);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 10 | <code>        console.warn(msg);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 11 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 12 | <code>    let currentFilter = &#x27;all&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 13 | <code>    let searchKeyword = &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 14 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 15 | <code>    function getCards() { return list.querySelectorAll(&#x27;.record-card&#x27;); }</code> | 定义 `getCards` 函数，封装页面交互或请求处理逻辑。 |
| 16 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 17 | <code>    function applyFilter(value) {</code> | 定义 `applyFilter` 函数，封装页面交互或请求处理逻辑。 |
| 18 | <code>        if (typeof value === &#x27;string&#x27;) currentFilter = value;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 19 | <code>        let visible = 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 20 | <code>        getCards().forEach(card =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 21 | <code>            const statusOk = currentFilter === &#x27;all&#x27; || card.dataset.status === currentFilter;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 22 | <code>            const titleOk = !searchKeyword || (card.dataset.title || &#x27;&#x27;).includes(searchKeyword);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 23 | <code>            const match = statusOk &amp;&amp; titleOk;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 24 | <code>            card.hidden = !match;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 25 | <code>            if (match) visible += 1;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 26 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 27 | <code>        if (emptyHint) emptyHint.classList.toggle(&#x27;hidden&#x27;, visible !== 0);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 28 | <code>        filters.querySelectorAll(&#x27;[data-filter]&#x27;).forEach(btn =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 29 | <code>            btn.classList.toggle(&#x27;is-active&#x27;, btn.dataset.filter === currentFilter);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 30 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 31 | <code>        const url = new URL(window.location.href);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 32 | <code>        if (currentFilter === &#x27;all&#x27;) url.searchParams.delete(&#x27;status&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 33 | <code>        else url.searchParams.set(&#x27;status&#x27;, currentFilter);</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 34 | <code>        window.history.replaceState({}, &#x27;&#x27;, url);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 35 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 36 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 37 | <code>    filters.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 38 | <code>        const btn = e.target.closest(&#x27;[data-filter]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 39 | <code>        if (!btn) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 40 | <code>        applyFilter(btn.dataset.filter);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 41 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 42 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 43 | <code>    const initial = new URL(window.location.href).searchParams.get(&#x27;status&#x27;) || &#x27;all&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 44 | <code>    applyFilter(initial);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 45 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 46 | <code>    // ============ 搜索框 ============</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 47 | <code>    const searchInput = document.getElementById(&#x27;records-search-input&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 48 | <code>    const searchClear = document.getElementById(&#x27;records-search-clear&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 49 | <code>    if (searchInput) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 50 | <code>        searchInput.addEventListener(&#x27;input&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 51 | <code>            searchKeyword = searchInput.value.trim().toLowerCase();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 52 | <code>            searchClear.classList.toggle(&#x27;is-visible&#x27;, !!searchKeyword);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 53 | <code>            applyFilter();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 54 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 55 | <code>        searchClear.addEventListener(&#x27;click&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 56 | <code>            searchInput.value = &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 57 | <code>            searchKeyword = &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 58 | <code>            searchClear.classList.remove(&#x27;is-visible&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 59 | <code>            applyFilter();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 60 | <code>            searchInput.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 61 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 62 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 63 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 64 | <code>    // ============ 顶部数据条更新 ============</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 65 | <code>    const heroStatTotal     = document.querySelector(&#x27;[data-stat=&quot;total&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 66 | <code>    const heroStatActive    = document.querySelector(&#x27;[data-stat=&quot;active&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 67 | <code>    const heroStatCompleted = document.querySelector(&#x27;[data-stat=&quot;completed&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 68 | <code>    const heroStatRate      = document.querySelector(&#x27;[data-stat=&quot;rate&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 69 | <code>    const heroTotalText     = document.getElementById(&#x27;records-total-text&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 70 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 71 | <code>    function refreshHeroStats(stats) {</code> | 定义 `refreshHeroStats` 函数，封装页面交互或请求处理逻辑。 |
| 72 | <code>        if (!stats) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 73 | <code>        const total = stats.total;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 74 | <code>        const active = (stats.pending || 0) + (stats.picked_up || 0);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 75 | <code>        const completed = stats.returned || 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 76 | <code>        const rate = total ? Math.round(completed / total * 100) : 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 77 | <code>        if (heroStatTotal)     heroStatTotal.textContent = total;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 78 | <code>        if (heroStatActive)    heroStatActive.textContent = active;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 79 | <code>        if (heroStatCompleted) heroStatCompleted.textContent = completed;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 80 | <code>        if (heroStatRate)      heroStatRate.innerHTML = rate + &#x27;&lt;span class=&quot;stat-unit&quot;&gt;%&lt;/span&gt;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 81 | <code>        if (heroTotalText)     heroTotalText.innerHTML = `至今共 &lt;strong&gt;${total}&lt;/strong&gt; 段书页之约 ♡`;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 82 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 83 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 84 | <code>    function bumpStat(key, delta) {</code> | 定义 `bumpStat` 函数，封装页面交互或请求处理逻辑。 |
| 85 | <code>        const btn = filters.querySelector(`[data-filter=&quot;${key}&quot;]`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 86 | <code>        if (!btn) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 87 | <code>        const v = btn.querySelector(&#x27;.records-tab-count&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 88 | <code>        if (!v) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 89 | <code>        v.textContent = Math.max(0, parseInt(v.textContent || &#x27;0&#x27;, 10) + delta);</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 90 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 91 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 92 | <code>    function bumpHeroFromDelta(deltaMap) {</code> | 定义 `bumpHeroFromDelta` 函数，封装页面交互或请求处理逻辑。 |
| 93 | <code>        const d = deltaMap || {};</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 94 | <code>        const totalDelta = Object.values(d).reduce((a, b) =&gt; a + b, 0);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 95 | <code>        const activeDelta = (d.pending || 0) + (d.picked_up || 0);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 96 | <code>        const completedDelta = d.returned || 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 97 | <code>        const apply = (el, delta) =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 98 | <code>            if (!el) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 99 | <code>            el.textContent = Math.max(0, parseInt(el.textContent || &#x27;0&#x27;, 10) + delta);</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 100 | <code>        };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 101 | <code>        apply(heroStatTotal, totalDelta);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 102 | <code>        apply(heroStatActive, activeDelta);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 103 | <code>        apply(heroStatCompleted, completedDelta);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 104 | <code>        if (heroStatRate &amp;&amp; heroStatTotal) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 105 | <code>            const total = parseInt(heroStatTotal.textContent || &#x27;0&#x27;, 10);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 106 | <code>            const completed = parseInt(heroStatCompleted?.textContent || &#x27;0&#x27;, 10);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 107 | <code>            const rate = total ? Math.round(completed / total * 100) : 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 108 | <code>            heroStatRate.innerHTML = rate + &#x27;&lt;span class=&quot;stat-unit&quot;&gt;%&lt;/span&gt;&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 109 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 110 | <code>        if (heroTotalText &amp;&amp; heroStatTotal) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 111 | <code>            heroTotalText.innerHTML = `至今共 &lt;strong&gt;${heroStatTotal.textContent}&lt;/strong&gt; 段书页之约 ♡`;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 112 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 113 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 114 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 115 | <code>    // ============ 自定义确认弹层 ============</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 116 | <code>    const confirmEl = document.getElementById(&#x27;record-confirm&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 117 | <code>    if (!confirmEl) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 118 | <code>    const confirmTitle = document.getElementById(&#x27;record-confirm-title&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 119 | <code>    const confirmMsg = document.getElementById(&#x27;record-confirm-msg&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 120 | <code>    const confirmOk = confirmEl.querySelector(&#x27;[data-confirm-ok]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 121 | <code>    const confirmCancel = confirmEl.querySelector(&#x27;[data-confirm-cancel]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 122 | <code>    let confirmResolver = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 123 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 124 | <code>    function openConfirm({ title, msg, okText = &#x27;确定&#x27;, tone = &#x27;&#x27; }) {</code> | 定义 `openConfirm` 函数，封装页面交互或请求处理逻辑。 |
| 125 | <code>        return new Promise((resolve) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 126 | <code>            confirmTitle.textContent = title;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 127 | <code>            confirmMsg.textContent = msg;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 128 | <code>            confirmOk.textContent = okText;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 129 | <code>            confirmOk.classList.remove(&#x27;tone-danger&#x27;, &#x27;tone-return&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 130 | <code>            if (tone) confirmOk.classList.add(tone);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 131 | <code>            confirmEl.classList.add(&#x27;is-open&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 132 | <code>            confirmEl.setAttribute(&#x27;aria-hidden&#x27;, &#x27;false&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 133 | <code>            confirmResolver = resolve;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 134 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 135 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 136 | <code>    function closeConfirm(result) {</code> | 定义 `closeConfirm` 函数，封装页面交互或请求处理逻辑。 |
| 137 | <code>        confirmEl.classList.remove(&#x27;is-open&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 138 | <code>        confirmEl.setAttribute(&#x27;aria-hidden&#x27;, &#x27;true&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 139 | <code>        if (confirmResolver) { confirmResolver(result); confirmResolver = null; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 140 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 141 | <code>    confirmOk.addEventListener(&#x27;click&#x27;, () =&gt; closeConfirm(true));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 142 | <code>    confirmCancel.addEventListener(&#x27;click&#x27;, () =&gt; closeConfirm(false));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 143 | <code>    confirmEl.addEventListener(&#x27;click&#x27;, (e) =&gt; { if (e.target === confirmEl) closeConfirm(false); });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 144 | <code>    document.addEventListener(&#x27;keydown&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 145 | <code>        if (e.key === &#x27;Escape&#x27; &amp;&amp; confirmEl.classList.contains(&#x27;is-open&#x27;)) closeConfirm(false);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 146 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 147 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 148 | <code>    // ============ 操作配置 ============</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 149 | <code>    const STATUS_META = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 150 | <code>        pending:   { label: &#x27;未领取&#x27;, tone: &#x27;pending&#x27;  },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 151 | <code>        picked_up: { label: &#x27;已领取&#x27;, tone: &#x27;picked&#x27;   },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 152 | <code>        returned:  { label: &#x27;已归还&#x27;, tone: &#x27;returned&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 153 | <code>        rejected:  { label: &#x27;已拒绝&#x27;, tone: &#x27;rejected&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 154 | <code>        expired:   { label: &#x27;已逾期&#x27;, tone: &#x27;expired&#x27;  },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 155 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 156 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 157 | <code>    const ACTIONS = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 158 | <code>        cancel: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 159 | <code>            expectedStatus: &#x27;pending&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 160 | <code>            url: id =&gt; `/book/cancel/${id}`,</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 161 | <code>            confirm: title =&gt; ({ title: &#x27;取消预约&#x27;, msg: `确定取消《${title}》的预约吗？库存将被释放。`, okText: &#x27;确认取消&#x27;, tone: &#x27;tone-danger&#x27; }),</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 162 | <code>            successMsg: &#x27;已取消预约&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 163 | <code>            newStatus: &#x27;rejected&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 164 | <code>            timelineTone: &#x27;tone-red&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 165 | <code>            timelineLabel: ts =&gt; `已取消 · ${ts}`,</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 166 | <code>            statDelta: { pending: -1, rejected: +1 },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 167 | <code>        },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 168 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 169 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 170 | <code>    function nowStamp() {</code> | 定义 `nowStamp` 函数，封装页面交互或请求处理逻辑。 |
| 171 | <code>        const d = new Date();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 172 | <code>        const pad = n =&gt; String(n).padStart(2, &#x27;0&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 173 | <code>        return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 174 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 175 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 176 | <code>    function setStatus(card, status) {</code> | 定义 `setStatus` 函数，封装页面交互或请求处理逻辑。 |
| 177 | <code>        card.dataset.status = status;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 178 | <code>        const meta = STATUS_META[status];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 179 | <code>        const pill = card.querySelector(&#x27;.status-pill&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 180 | <code>        if (pill &amp;&amp; meta) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 181 | <code>            pill.className = `status-pill tone-${meta.tone} flex-shrink-0 mt-0.5`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 182 | <code>            pill.textContent = meta.label;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 183 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 184 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 185 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 186 | <code>    function removeWaitingStep(timeline) {</code> | 定义 `removeWaitingStep` 函数，封装页面交互或请求处理逻辑。 |
| 187 | <code>        const placeholder = Array.from(timeline.querySelectorAll(&#x27;.timeline-step&#x27;))</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 188 | <code>            .find(el =&gt; /等待管理员审核/.test(el.textContent));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 189 | <code>        if (placeholder) placeholder.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 190 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 191 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 192 | <code>    function appendTimelineStep(card, className, text) {</code> | 定义 `appendTimelineStep` 函数，封装页面交互或请求处理逻辑。 |
| 193 | <code>        const timeline = card.querySelector(&#x27;.record-timeline&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 194 | <code>        if (!timeline || !text) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 195 | <code>        removeWaitingStep(timeline);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 196 | <code>        const step = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 197 | <code>        step.className = className;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 198 | <code>        const dot = document.createElement(&#x27;span&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 199 | <code>        dot.className = &#x27;timeline-dot&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 200 | <code>        const label = document.createElement(&#x27;span&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 201 | <code>        label.textContent = text;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 202 | <code>        step.append(dot, label);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 203 | <code>        timeline.appendChild(step);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 204 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 205 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 206 | <code>    function setActions(card, status, recordId, bookTitle) {</code> | 定义 `setActions` 函数，封装页面交互或请求处理逻辑。 |
| 207 | <code>        const oldActions = card.querySelector(&#x27;.record-actions&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 208 | <code>        if (oldActions) oldActions.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 209 | <code>        if (status !== &#x27;pending&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 210 | <code>        const body = card.querySelector(&#x27;.record-body&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 211 | <code>        if (!body) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 212 | <code>        const actions = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 213 | <code>        actions.className = &#x27;record-actions&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 214 | <code>        const button = document.createElement(&#x27;button&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 215 | <code>        button.type = &#x27;button&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 216 | <code>        button.className = &#x27;record-action-btn tone-cancel&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 217 | <code>        button.dataset.action = &#x27;cancel&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 218 | <code>        button.dataset.recordId = recordId;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 219 | <code>        button.dataset.bookTitle = bookTitle;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 220 | <code>        button.innerHTML = &#x27;&lt;svg class=&quot;w-3.5 h-3.5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M6 18L18 6M6 6l12 12&quot;/&gt;&lt;/svg&gt;取消预约&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 221 | <code>        actions.appendChild(button);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 222 | <code>        body.appendChild(actions);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 223 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 224 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 225 | <code>    function updateCard(card, cfg) {</code> | 定义 `updateCard` 函数，封装页面交互或请求处理逻辑。 |
| 226 | <code>        setStatus(card, cfg.newStatus);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 227 | <code>        const actions = card.querySelector(&#x27;.record-actions&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 228 | <code>        if (actions) actions.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 229 | <code>        const progress = card.querySelector(&#x27;.record-progress&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 230 | <code>        if (progress) progress.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 231 | <code>        appendTimelineStep(card, `timeline-step is-done ${cfg.timelineTone}`, cfg.timelineLabel(nowStamp()));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 232 | <code>        card.style.transition = &#x27;box-shadow 0.6s ease&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 233 | <code>        card.style.boxShadow = &#x27;0 0 0 3px rgba(236,72,153,0.3), 0 16px 32px -18px rgba(236,72,153,0.4)&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 234 | <code>        setTimeout(() =&gt; { card.style.boxShadow = &#x27;&#x27;; }, 750);</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 235 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 236 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 237 | <code>    function setExactStats(stats) {</code> | 定义 `setExactStats` 函数，封装页面交互或请求处理逻辑。 |
| 238 | <code>        if (!stats) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 239 | <code>        Object.entries(stats).forEach(([key, value]) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 240 | <code>            if (key === &#x27;total&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 241 | <code>            const btn = filters.querySelector(`[data-filter=&quot;${key}&quot;]`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 242 | <code>            const count = btn &amp;&amp; btn.querySelector(&#x27;.records-tab-count&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 243 | <code>            if (count) count.textContent = value;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 244 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 245 | <code>        const allCount = filters.querySelector(&#x27;[data-filter=&quot;all&quot;] .records-tab-count&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 246 | <code>        if (allCount) allCount.textContent = stats.total;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 247 | <code>        refreshHeroStats(stats);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 248 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 249 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 250 | <code>    function statusTimelineText(record) {</code> | 定义 `statusTimelineText` 函数，封装页面交互或请求处理逻辑。 |
| 251 | <code>        if (record.status === &#x27;picked_up&#x27;) return record.pickup_date ? `已领取 · ${record.pickup_date}` : &#x27;已领取&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 252 | <code>        if (record.status === &#x27;returned&#x27;) return record.return_date ? `已归还 · ${record.return_date}` : &#x27;已归还&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 253 | <code>        if (record.status === &#x27;rejected&#x27;) return record.reject_date ? `已拒绝 · ${record.reject_date}` : &#x27;已拒绝&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 254 | <code>        if (record.status === &#x27;expired&#x27;) return record.reject_date ? `已逾期 · ${record.reject_date}` : &#x27;已逾期&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 255 | <code>        return &#x27;&#x27;;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 256 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 257 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 258 | <code>    function statusTimelineClass(status) {</code> | 定义 `statusTimelineClass` 函数，封装页面交互或请求处理逻辑。 |
| 259 | <code>        if (status === &#x27;picked_up&#x27;) return &#x27;timeline-step is-done tone-blue&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 260 | <code>        if (status === &#x27;returned&#x27;) return &#x27;timeline-step is-done tone-green&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 261 | <code>        if (status === &#x27;rejected&#x27;) return &#x27;timeline-step is-done tone-red&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 262 | <code>        if (status === &#x27;expired&#x27;) return &#x27;timeline-step is-done tone-orange&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 263 | <code>        return &#x27;timeline-step&#x27;;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 264 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 265 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 266 | <code>    function syncRecord(record) {</code> | 定义 `syncRecord` 函数，封装页面交互或请求处理逻辑。 |
| 267 | <code>        const card = list.querySelector(`[data-record-id=&quot;${record.id}&quot;]`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 268 | <code>        if (!card || card.dataset.status === record.status) return false;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 269 | <code>        const title = card.querySelector(&#x27;a&#x27;)?.textContent.trim() || &#x27;该书&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 270 | <code>        setStatus(card, record.status);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 271 | <code>        setActions(card, record.status, String(record.id), title);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 272 | <code>        const progress = card.querySelector(&#x27;.record-progress&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 273 | <code>        if (progress &amp;&amp; record.status !== &#x27;picked_up&#x27;) progress.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 274 | <code>        appendTimelineStep(card, statusTimelineClass(record.status), statusTimelineText(record));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 275 | <code>        return true;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 276 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 277 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 278 | <code>    let syncInFlight = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 279 | <code>    let recordsRefreshInFlight = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 280 | <code>    let userActionInFlight = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 281 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 282 | <code>    async function refreshRecordsView(stats) {</code> | 定义 `refreshRecordsView` 函数，封装页面交互或请求处理逻辑。 |
| 283 | <code>        if (recordsRefreshInFlight || userActionInFlight || confirmEl.classList.contains(&#x27;is-open&#x27;) || document.hidden) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 284 | <code>        recordsRefreshInFlight = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 285 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 286 | <code>            const resp = await fetch(window.location.pathname + window.location.search, {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 287 | <code>                headers: { &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27; }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 288 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 289 | <code>            if (!resp.ok) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 290 | <code>            const html = await resp.text();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 291 | <code>            const doc = new DOMParser().parseFromString(html, &#x27;text/html&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 292 | <code>            const nextList = doc.getElementById(&#x27;records-list&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 293 | <code>            const nextFilters = doc.getElementById(&#x27;records-filters&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 294 | <code>            if (nextList) list.innerHTML = nextList.innerHTML;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 295 | <code>            if (nextFilters) filters.innerHTML = nextFilters.innerHTML;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 296 | <code>            setExactStats(stats);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 297 | <code>            applyFilter(currentFilter);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 298 | <code>        } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 299 | <code>            list.dataset.syncState = &#x27;stale&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 300 | <code>        } finally {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 301 | <code>            recordsRefreshInFlight = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 302 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 303 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 304 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 305 | <code>    async function syncRecords() {</code> | 定义 `syncRecords` 函数，封装页面交互或请求处理逻辑。 |
| 306 | <code>        if (syncInFlight || userActionInFlight || confirmEl.classList.contains(&#x27;is-open&#x27;) || document.hidden) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 307 | <code>        syncInFlight = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 308 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 309 | <code>            const resp = await fetch(&#x27;/borrow_records/status&#x27;, { headers: { &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27; } });</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 310 | <code>            if (!resp.ok) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 311 | <code>            const data = await resp.json();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 312 | <code>            if (!data.success || !Array.isArray(data.records)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 313 | <code>            let changed = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 314 | <code>            data.records.forEach(record =&gt; { changed = syncRecord(record) || changed; });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 315 | <code>            setExactStats(data.stats);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 316 | <code>            list.dataset.syncState = &#x27;ok&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 317 | <code>            if (changed) applyFilter(currentFilter);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 318 | <code>        } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 319 | <code>            list.dataset.syncState = &#x27;stale&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 320 | <code>        } finally {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 321 | <code>            syncInFlight = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 322 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 323 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 324 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 325 | <code>    window.addEventListener(&#x27;library:borrow-status-changed&#x27;, function(event) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 326 | <code>        var data = event.detail;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 327 | <code>        if (!data || !Array.isArray(data.records)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 328 | <code>        var changed = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 329 | <code>        var hasMissingRecord = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 330 | <code>        data.records.forEach(function(record) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 331 | <code>            if (!list.querySelector(&#x27;[data-record-id=&quot;&#x27; + record.id + &#x27;&quot;]&#x27;)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 332 | <code>                hasMissingRecord = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 333 | <code>                return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 334 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 335 | <code>            changed = syncRecord(record) || changed;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 336 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 337 | <code>        if (hasMissingRecord) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 338 | <code>            refreshRecordsView(data.stats);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 339 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 340 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 341 | <code>        setExactStats(data.stats);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 342 | <code>        list.dataset.syncState = &#x27;ok&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 343 | <code>        if (changed) applyFilter(currentFilter);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 344 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 345 | <code>    document.addEventListener(&#x27;visibilitychange&#x27;, function() { if (!document.hidden) syncRecords(); });</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 346 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 347 | <code>    list.addEventListener(&#x27;click&#x27;, async (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 348 | <code>        const btn = e.target.closest(&#x27;.record-action-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 349 | <code>        if (!btn) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 350 | <code>        const actionKey = btn.dataset.action;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 351 | <code>        const cfg = ACTIONS[actionKey];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 352 | <code>        if (!cfg) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 353 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 354 | <code>        const recordId = btn.dataset.recordId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 355 | <code>        const bookTitle = btn.dataset.bookTitle || &#x27;该书&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 356 | <code>        userActionInFlight = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 357 | <code>        const ok = await openConfirm(cfg.confirm(bookTitle));</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 358 | <code>        if (!ok) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 359 | <code>            userActionInFlight = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 360 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 361 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 362 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 363 | <code>        const card = list.querySelector(`[data-record-id=&quot;${recordId}&quot;]`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 364 | <code>        if (!card || card.dataset.status !== cfg.expectedStatus) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 365 | <code>            userActionInFlight = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 366 | <code>            await syncRecords();</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 367 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 368 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 369 | <code>        const allBtns = card.querySelectorAll(&#x27;.record-action-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 370 | <code>        allBtns.forEach(b =&gt; (b.disabled = true));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 371 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 372 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 373 | <code>            const resp = await fetch(cfg.url(recordId), {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 374 | <code>                method: &#x27;POST&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 375 | <code>                headers: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 376 | <code>                    &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 377 | <code>                    &#x27;X-CSRF-Token&#x27;: page.dataset.borrowActionCsrf</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 378 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 379 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 380 | <code>            const data = await resp.json();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 381 | <code>            if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 382 | <code>                toast(cfg.successMsg, &#x27;success&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 383 | <code>                Object.entries(cfg.statDelta || {}).forEach(([k, d]) =&gt; bumpStat(k, d));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 384 | <code>                bumpHeroFromDelta(cfg.statDelta);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 385 | <code>                updateCard(card, cfg);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 386 | <code>                applyFilter(currentFilter);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 387 | <code>            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 388 | <code>                toast(data.message || &#x27;操作失败&#x27;, &#x27;error&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 389 | <code>                allBtns.forEach(b =&gt; (b.disabled = false));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 390 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 391 | <code>        } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 392 | <code>            toast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 393 | <code>            allBtns.forEach(b =&gt; (b.disabled = false));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 394 | <code>        } finally {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 395 | <code>            userActionInFlight = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 396 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 397 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 398 | <code>})();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
