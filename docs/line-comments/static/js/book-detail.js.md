# static/js/book-detail.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>(function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 2 | <code>    var state = document.getElementById(&#x27;bookDetailPageState&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 3 | <code>    if (!state) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 4 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 5 | <code>    var bar = document.getElementById(&#x27;detailStockBar&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 6 | <code>    var stockNow = document.getElementById(&#x27;detailStockNow&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 7 | <code>    var borrowCount = document.getElementById(&#x27;detailBorrowCount&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 8 | <code>    var badge = document.getElementById(&#x27;bookDetailAvailabilityBadge&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 9 | <code>    var badgeText = document.getElementById(&#x27;bookDetailAvailabilityText&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 10 | <code>    var badgeIconPath = document.getElementById(&#x27;bookDetailAvailabilityIconPath&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 11 | <code>    var inventoryText = document.getElementById(&#x27;bookDetailInventoryText&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 12 | <code>    var borrowButtonSlot = document.getElementById(&#x27;bookDetailBorrowButtonSlot&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 13 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 14 | <code>    var sync = function () {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 15 | <code>        var stock = parseInt(state.dataset.bookStock, 10) || 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 16 | <code>        var total = parseInt(state.dataset.bookTotal, 10) || 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 17 | <code>        if (stockNow) stockNow.textContent = String(stock);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 18 | <code>        if (stockNow &amp;&amp; stockNow.nextElementSibling) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 19 | <code>            stockNow.nextElementSibling.textContent = &#x27;/&#x27; + total;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 20 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 21 | <code>        if (bar) bar.style.width = (total &gt; 0 ? Math.round((stock * 100) / total) : 0) + &#x27;%&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 22 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 23 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 24 | <code>    new MutationObserver(sync).observe(state, {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 25 | <code>        attributes: true,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 26 | <code>        attributeFilter: [&#x27;data-book-stock&#x27;, &#x27;data-book-total&#x27;]</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 27 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 28 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 29 | <code>    function setAvailability(info) {</code> | 定义 `setAvailability` 函数，封装页面交互或请求处理逻辑。 |
| 30 | <code>        var available = !!info.available;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 31 | <code>        if (badge) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 32 | <code>            badge.className = available</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 33 | <code>                ? &#x27;flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 34 | <code>                : &#x27;flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 35 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 36 | <code>        if (badgeText) badgeText.textContent = available ? &#x27;可借阅&#x27; : &#x27;已借出&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 37 | <code>        if (badgeIconPath) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 38 | <code>            badgeIconPath.setAttribute(</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 39 | <code>                &#x27;d&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 40 | <code>                available</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 41 | <code>                    ? &#x27;M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 42 | <code>                    : &#x27;M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 43 | <code>            );</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 44 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 45 | <code>        if (inventoryText) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 46 | <code>            inventoryText.textContent = available</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 47 | <code>                ? &#x27;可借阅 (剩余 &#x27; + info.stock + &#x27;/&#x27; + info.total + &#x27; 本)&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 48 | <code>                : &#x27;已借出&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 49 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 50 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 51 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 52 | <code>    function setBorrowButton(info) {</code> | 定义 `setBorrowButton` 函数，封装页面交互或请求处理逻辑。 |
| 53 | <code>        if (!borrowButtonSlot || state.dataset.canBorrow !== &#x27;true&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 54 | <code>        var button = document.getElementById(&#x27;bookDetailBorrowButton&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 55 | <code>        if (!info.available) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 56 | <code>            if (button) button.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 57 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 58 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 59 | <code>        if (!button) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 60 | <code>            button = document.createElement(&#x27;button&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 61 | <code>            button.type = &#x27;button&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 62 | <code>            button.id = &#x27;bookDetailBorrowButton&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 63 | <code>            button.className = &#x27;detail-action-primary&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 64 | <code>            button.textContent = &#x27;预约借阅&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 65 | <code>            button.addEventListener(&#x27;click&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 66 | <code>                window.showBorrowModalFromData?.(button);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 67 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 68 | <code>            borrowButtonSlot.appendChild(button);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 69 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 70 | <code>        button.dataset.bookId = String(info.book_id);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 71 | <code>        button.dataset.bookTitle = state.dataset.bookTitle || info.title || &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 72 | <code>        button.dataset.bookStock = String(info.stock);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 73 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 74 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 75 | <code>    function applyStockChange(info) {</code> | 定义 `applyStockChange` 函数，封装页面交互或请求处理逻辑。 |
| 76 | <code>        if (!info || String(info.book_id) !== String(state.dataset.bookId)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 77 | <code>        state.dataset.bookStock = String(info.stock);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 78 | <code>        state.dataset.bookTotal = String(info.total);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 79 | <code>        if (borrowCount &amp;&amp; info.borrow_count !== undefined) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 80 | <code>            borrowCount.textContent = String(info.borrow_count);</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 81 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 82 | <code>        sync();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 83 | <code>        setAvailability(info);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 84 | <code>        setBorrowButton(info);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 85 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 86 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 87 | <code>    function pollStock() {</code> | 定义 `pollStock` 函数，封装页面交互或请求处理逻辑。 |
| 88 | <code>        if (document.hidden) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 89 | <code>        var stockUrl = window.borrowModalConfig &amp;&amp; window.borrowModalConfig.booksStockUrl;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 90 | <code>        if (!stockUrl) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 91 | <code>        fetch(stockUrl + &#x27;?ids=&#x27; + encodeURIComponent(state.dataset.bookId), {</code> | 发起 HTTP 请求，与后端接口交换数据。 |
| 92 | <code>            headers: { &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27; }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 93 | <code>        })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 94 | <code>            .then(function(resp) { return resp.json(); })</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 95 | <code>            .then(function(data) {</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 96 | <code>                var info = data &amp;&amp; data[state.dataset.bookId];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 97 | <code>                if (!info) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 98 | <code>                info.book_id = state.dataset.bookId;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 99 | <code>                applyStockChange(info);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 100 | <code>            })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 101 | <code>            .catch(function() {});</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 102 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 103 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 104 | <code>    window.addEventListener(&#x27;library:book-stock-changed&#x27;, function(event) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 105 | <code>        applyStockChange(event.detail);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 106 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 107 | <code>    document.addEventListener(&#x27;visibilitychange&#x27;, function() {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 108 | <code>        if (!document.hidden) pollStock();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 109 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 110 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 111 | <code>    sync();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 112 | <code>    setInterval(pollStock, 3000);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 113 | <code>})();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
