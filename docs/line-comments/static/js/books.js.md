# static/js/books.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>/**</code> | 块注释内容，用于解释一组前端逻辑。 |
| 2 | <code> * 图书列表页交互</code> | 块注释内容，用于解释一组前端逻辑。 |
| 3 | <code> * - 即时搜索 / 分类切换 / 排序 / 仅显示可借</code> | 块注释内容，用于解释一组前端逻辑。 |
| 4 | <code> * - 可见性感知轮询(页面隐藏时暂停)</code> | 块注释内容，用于解释一组前端逻辑。 |
| 5 | <code> * - 图片即时加载</code> | 块注释内容，用于解释一组前端逻辑。 |
| 6 | <code> */</code> | 块注释内容，用于解释一组前端逻辑。 |
| 7 | <code>(function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 8 | <code>    const config = window.__BOOKS_CONFIG__ || {};</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 9 | <code>    const booksBaseUrl = config.booksUrl;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 10 | <code>    const booksStockUrl = config.stockUrl;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 11 | <code>    const booksCategoriesUrl = config.categoriesUrl;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 12 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 13 | <code>    const STOCK_POLL_MS = 5000;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 14 | <code>    const CATEGORY_POLL_MS = 60000;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 15 | <code>    const SEARCH_DEBOUNCE_MS = 300;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 16 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 17 | <code>    let searchForm = document.getElementById(&#x27;books-search-form&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 18 | <code>    let searchInput = document.getElementById(&#x27;books-search-input&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 19 | <code>    let searchTimer = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 20 | <code>    let isComposing = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 21 | <code>    let activeSearchRequestId = 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 22 | <code>    let activeSearchController = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 23 | <code>    let activeStockPollRequestId = 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 24 | <code>    let activeCategoriesPollRequestId = 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 25 | <code>    let pollStockInterval = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 26 | <code>    let pollCategoriesInterval = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 27 | <code>    let activeCategoryLink = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 28 | <code>    let isToolbarBound = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 29 | <code>    let booksRefreshTimer = null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 30 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 31 | <code>    let currentBooksSearch = normalizeSearch(searchInput ? searchInput.value : &#x27;&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 32 | <code>    let currentBooksCategory = readHiddenInput(&#x27;category&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 33 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 34 | <code>    function normalizeSearch(value) {</code> | 定义 `normalizeSearch` 函数，封装页面交互或请求处理逻辑。 |
| 35 | <code>        return (value || &#x27;&#x27;).replace(/\s+/g, &#x27; &#x27;).trim();</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 36 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 37 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 38 | <code>    function readHiddenInput(name) {</code> | 定义 `readHiddenInput` 函数，封装页面交互或请求处理逻辑。 |
| 39 | <code>        const el = searchForm ? searchForm.querySelector(`input[name=&quot;${name}&quot;]`) : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 40 | <code>        return el ? el.value : &#x27;&#x27;;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 41 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 42 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 43 | <code>    function setHiddenInput(name, value) {</code> | 定义 `setHiddenInput` 函数，封装页面交互或请求处理逻辑。 |
| 44 | <code>        if (!searchForm) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 45 | <code>        let el = searchForm.querySelector(`input[name=&quot;${name}&quot;]`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 46 | <code>        if (value) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 47 | <code>            if (!el) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 48 | <code>                el = document.createElement(&#x27;input&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 49 | <code>                el.type = &#x27;hidden&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 50 | <code>                el.name = name;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 51 | <code>                searchForm.prepend(el);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 52 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 53 | <code>            el.value = value;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 54 | <code>        } else if (el) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 55 | <code>            el.remove();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 56 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 57 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 58 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 59 | <code>    function buildBooksUrl(overrides = {}) {</code> | 定义 `buildBooksUrl` 函数，封装页面交互或请求处理逻辑。 |
| 60 | <code>        const params = new URLSearchParams();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 61 | <code>        const search = normalizeSearch(searchInput ? searchInput.value : &#x27;&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 62 | <code>        const category = &#x27;category&#x27; in overrides ? overrides.category : readHiddenInput(&#x27;category&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 63 | <code>        const sort = &#x27;sort&#x27; in overrides ? overrides.sort : readHiddenInput(&#x27;sort&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 64 | <code>        const onlyAvailable = &#x27;only_available&#x27; in overrides</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 65 | <code>            ? overrides.only_available</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 66 | <code>            : readHiddenInput(&#x27;only_available&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 67 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 68 | <code>        if (search) params.set(&#x27;search&#x27;, search);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 69 | <code>        if (category) params.set(&#x27;category&#x27;, category);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 70 | <code>        if (sort &amp;&amp; sort !== &#x27;newest&#x27;) params.set(&#x27;sort&#x27;, sort);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 71 | <code>        if (onlyAvailable === &#x27;1&#x27;) params.set(&#x27;only_available&#x27;, &#x27;1&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 72 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 73 | <code>        const qs = params.toString();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 74 | <code>        return qs ? `${booksBaseUrl}?${qs}` : booksBaseUrl;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 75 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 76 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 77 | <code>    function buildCategoriesUrl() {</code> | 定义 `buildCategoriesUrl` 函数，封装页面交互或请求处理逻辑。 |
| 78 | <code>        const params = new URLSearchParams();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 79 | <code>        if (currentBooksSearch) params.set(&#x27;search&#x27;, currentBooksSearch);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 80 | <code>        const qs = params.toString();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 81 | <code>        return qs ? `${booksCategoriesUrl}?${qs}` : booksCategoriesUrl;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 82 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 83 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 84 | <code>    function escapeSelectorValue(value) {</code> | 定义 `escapeSelectorValue` 函数，封装页面交互或请求处理逻辑。 |
| 85 | <code>        if (window.CSS &amp;&amp; typeof window.CSS.escape === &#x27;function&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 86 | <code>            return window.CSS.escape(value);</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 87 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 88 | <code>        return value.replace(/[&quot;\\\]]/g, &#x27;\\$&amp;&#x27;);</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 89 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 90 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 91 | <code>    function commitState(nextSearch, nextCategory) {</code> | 定义 `commitState` 函数，封装页面交互或请求处理逻辑。 |
| 92 | <code>        currentBooksSearch = normalizeSearch(nextSearch || &#x27;&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 93 | <code>        currentBooksCategory = nextCategory || &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 94 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 95 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 96 | <code>    function loadImageNow(img) {</code> | 定义 `loadImageNow` 函数，封装页面交互或请求处理逻辑。 |
| 97 | <code>        const src = img.dataset.src;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 98 | <code>        if (!src) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 99 | <code>        img.removeAttribute(&#x27;data-src&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 100 | <code>        img.src = src;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 101 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 102 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 103 | <code>    function bindLazyImages() {</code> | 定义 `bindLazyImages` 函数，封装页面交互或请求处理逻辑。 |
| 104 | <code>        const images = document.querySelectorAll(&#x27;img.lazy-img:not([data-bound])&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 105 | <code>        if (!images.length) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 106 | <code>        images.forEach(img =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 107 | <code>            img.dataset.bound = &#x27;1&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 108 | <code>            if (img.dataset.src) loadImageNow(img);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 109 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 110 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 111 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 112 | <code>    function bindSearchEvents() {</code> | 定义 `bindSearchEvents` 函数，封装页面交互或请求处理逻辑。 |
| 113 | <code>        searchForm = document.getElementById(&#x27;books-search-form&#x27;);</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 114 | <code>        searchInput = document.getElementById(&#x27;books-search-input&#x27;);</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 115 | <code>        if (!searchForm || !searchInput) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 116 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 117 | <code>        searchForm.addEventListener(&#x27;submit&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 118 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 119 | <code>            clearTimeout(searchTimer);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 120 | <code>            submitSearch();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 121 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 122 | <code>        searchInput.addEventListener(&#x27;input&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 123 | <code>            if (isComposing) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 124 | <code>            clearTimeout(searchTimer);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 125 | <code>            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 126 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 127 | <code>        searchInput.addEventListener(&#x27;compositionstart&#x27;, () =&gt; { isComposing = true; });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 128 | <code>        searchInput.addEventListener(&#x27;compositionend&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 129 | <code>            isComposing = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 130 | <code>            clearTimeout(searchTimer);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 131 | <code>            searchTimer = setTimeout(submitSearch, SEARCH_DEBOUNCE_MS);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 132 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 133 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 134 | <code>        // 全局键盘快捷键: &#x27;/&#x27; 聚焦搜索, ESC 清空</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 135 | <code>        document.addEventListener(&#x27;keydown&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 136 | <code>            if (e.key === &#x27;/&#x27; &amp;&amp; document.activeElement !== searchInput</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 137 | <code>                &amp;&amp; ![&#x27;INPUT&#x27;, &#x27;TEXTAREA&#x27;].includes(document.activeElement?.tagName)) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 138 | <code>                e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 139 | <code>                searchInput.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 140 | <code>                searchInput.select();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 141 | <code>            } else if (e.key === &#x27;Escape&#x27; &amp;&amp; document.activeElement === searchInput &amp;&amp; searchInput.value) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 142 | <code>                searchInput.value = &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 143 | <code>                clearTimeout(searchTimer);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 144 | <code>                submitSearch();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 145 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 146 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 147 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 148 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 149 | <code>    function bindToolbar() {</code> | 定义 `bindToolbar` 函数，封装页面交互或请求处理逻辑。 |
| 150 | <code>        if (isToolbarBound) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 151 | <code>        const toolbar = document.getElementById(&#x27;books-toolbar&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 152 | <code>        if (!toolbar) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 153 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 154 | <code>        toolbar.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 155 | <code>            const sortBtn = e.target.closest(&#x27;[data-sort]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 156 | <code>            if (sortBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 157 | <code>                const nextSort = sortBtn.dataset.sort;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 158 | <code>                setHiddenInput(&#x27;sort&#x27;, nextSort);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 159 | <code>                applyToolbarActive(&#x27;sort&#x27;, nextSort);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 160 | <code>                updateBooksView(buildBooksUrl({ sort: nextSort }), {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 161 | <code>                    historyMode: &#x27;push&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 162 | <code>                    animateResults: true</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 163 | <code>                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 164 | <code>                return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 165 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 166 | <code>            const availBtn = e.target.closest(&#x27;[data-toggle=&quot;only-available&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 167 | <code>            if (availBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 168 | <code>                const isActive = availBtn.classList.toggle(&#x27;is-active&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 169 | <code>                const next = isActive ? &#x27;1&#x27; : &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 170 | <code>                setHiddenInput(&#x27;only_available&#x27;, next);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 171 | <code>                updateBooksView(buildBooksUrl({ only_available: next }), {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 172 | <code>                    historyMode: &#x27;push&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 173 | <code>                    animateResults: true</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 174 | <code>                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 175 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 176 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 177 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 178 | <code>        isToolbarBound = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 179 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 180 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 181 | <code>    function applyToolbarActive(name, value) {</code> | 定义 `applyToolbarActive` 函数，封装页面交互或请求处理逻辑。 |
| 182 | <code>        document.querySelectorAll(`[data-${name}]`).forEach(el =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 183 | <code>            el.classList.toggle(&#x27;is-active&#x27;, el.dataset[name === &#x27;sort&#x27; ? &#x27;sort&#x27; : name] === value);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 184 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 185 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 186 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 187 | <code>    function bindCategoryLinks() {</code> | 定义 `bindCategoryLinks` 函数，封装页面交互或请求处理逻辑。 |
| 188 | <code>        const sidebar = document.getElementById(&#x27;books-sidebar-content&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 189 | <code>        if (!sidebar || sidebar.dataset.bound) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 190 | <code>        sidebar.dataset.bound = &#x27;1&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 191 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 192 | <code>        sidebar.addEventListener(&#x27;click&#x27;, (event) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 193 | <code>            const link = event.target.closest(&#x27;a[href*=&quot;/books&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 194 | <code>            if (!link || !sidebar.contains(link)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 195 | <code>            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 196 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 197 | <code>            event.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 198 | <code>            clearTimeout(searchTimer);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 199 | <code>            activeCategoryLink = link;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 200 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 201 | <code>            const nextCategory = link.dataset.categoryValue || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 202 | <code>            const targetUrl = new URL(link.href, window.location.origin);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 203 | <code>            const nextSearch = targetUrl.searchParams.get(&#x27;search&#x27;) || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 204 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 205 | <code>            setHiddenInput(&#x27;category&#x27;, nextCategory);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 206 | <code>            commitState(nextSearch, nextCategory);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 207 | <code>            applyOptimisticCategoryState(nextCategory);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 208 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 209 | <code>            updateBooksView(buildBooksUrl({ category: nextCategory }), {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 210 | <code>                categoryScrollPositions: getCategoryScrollPositions(),</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 211 | <code>                historyMode: &#x27;push&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 212 | <code>                animateResults: true,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 213 | <code>                syncSidebar: false</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 214 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 215 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 216 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 217 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 218 | <code>    function getCategoryScrollPositions() {</code> | 定义 `getCategoryScrollPositions` 函数，封装页面交互或请求处理逻辑。 |
| 219 | <code>        const m = document.getElementById(&#x27;books-mobile-categories&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 220 | <code>        const d = document.getElementById(&#x27;books-desktop-categories&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 221 | <code>        return {</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 222 | <code>            mobileScrollLeft: m ? m.scrollLeft : 0,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 223 | <code>            desktopScrollTop: d ? d.scrollTop : 0</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 224 | <code>        };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 225 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 226 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 227 | <code>    function restoreCategoryScrollPositions(p) {</code> | 定义 `restoreCategoryScrollPositions` 函数，封装页面交互或请求处理逻辑。 |
| 228 | <code>        const m = document.getElementById(&#x27;books-mobile-categories&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 229 | <code>        const d = document.getElementById(&#x27;books-desktop-categories&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 230 | <code>        if (m) m.scrollLeft = p.mobileScrollLeft;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 231 | <code>        if (d) d.scrollTop = p.desktopScrollTop;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 232 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 233 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 234 | <code>    function applyOptimisticCategoryState(nextCategory) {</code> | 定义 `applyOptimisticCategoryState` 函数，封装页面交互或请求处理逻辑。 |
| 235 | <code>        document.querySelectorAll(&#x27;#books-sidebar-content a[data-category-value]&#x27;).forEach(link =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 236 | <code>            const value = link.getAttribute(&#x27;data-category-value&#x27;) || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 237 | <code>            const isActive = value === nextCategory;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 238 | <code>            link.classList.toggle(&#x27;is-active-category&#x27;, isActive);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 239 | <code>            const badge = link.querySelector(&#x27;[data-category]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 240 | <code>            if (link.closest(&#x27;#books-mobile-categories&#x27;)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 241 | <code>                link.className = isActive</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 242 | <code>                    ? &#x27;flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg border-transparent&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 243 | <code>                    : &#x27;flex-shrink-0 snap-start inline-flex items-center gap-2 px-4 py-2.5 rounded-full border transition-all duration-300 bg-white text-brand-deep/70 border-gray-200&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 244 | <code>                if (badge) badge.className = `px-1.5 py-0.5 ${isActive ? &#x27;bg-white/30&#x27; : &#x27;bg-gray-100&#x27;} text-xs font-bold rounded-full`;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 245 | <code>                return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 246 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 247 | <code>            if (link.closest(&#x27;#books-desktop-categories&#x27;)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 248 | <code>                link.className = isActive</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 249 | <code>                    ? &#x27;flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 250 | <code>                    : &#x27;flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out mb-2 hover:bg-pink-50/50 text-brand-deep/70 border-transparent&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 251 | <code>                if (badge) badge.className = `px-2 py-0.5 ${isActive ? &#x27;bg-white/50&#x27; : &#x27;bg-gray-100&#x27;} text-xs font-bold rounded-full transition-all duration-300`;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 252 | <code>                return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 253 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 254 | <code>            link.className = isActive</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 255 | <code>                ? &#x27;flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out bg-gradient-to-r from-purple-50 to-pink-50 text-brand-primary border-brand-primary&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 256 | <code>                : &#x27;flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all duration-300 ease-out hover:bg-pink-50/50 text-brand-deep/70 border-transparent&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 257 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 258 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 259 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 260 | <code>    function setResultsTransition(state) {</code> | 定义 `setResultsTransition` 函数，封装页面交互或请求处理逻辑。 |
| 261 | <code>        const el = document.getElementById(&#x27;books-results-content&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 262 | <code>        if (!el) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 263 | <code>        el.classList.toggle(&#x27;is-results-transitioning&#x27;, state);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 264 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 265 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 266 | <code>    function showSkeleton() {</code> | 定义 `showSkeleton` 函数，封装页面交互或请求处理逻辑。 |
| 267 | <code>        const el = document.getElementById(&#x27;books-results-content&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 268 | <code>        if (!el) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 269 | <code>        const cards = Array.from({ length: 8 }).map(() =&gt; `</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 270 | <code>            &lt;div class=&quot;book-skeleton&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 271 | <code>                &lt;div class=&quot;book-skeleton-cover skeleton-shimmer&quot;&gt;&lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 272 | <code>                &lt;div class=&quot;p-4 space-y-2&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 273 | <code>                    &lt;div class=&quot;h-4 rounded skeleton-shimmer&quot;&gt;&lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 274 | <code>                    &lt;div class=&quot;h-3 w-2/3 rounded skeleton-shimmer&quot;&gt;&lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 275 | <code>                    &lt;div class=&quot;h-3 w-1/2 rounded skeleton-shimmer&quot;&gt;&lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 276 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 277 | <code>            &lt;/div&gt;`).join(&#x27;&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 278 | <code>        el.innerHTML = `&lt;div class=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5&quot;&gt;${cards}&lt;/div&gt;`;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 279 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 280 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 281 | <code>    function isStaleRequest(id, controller) {</code> | 定义 `isStaleRequest` 函数，封装页面交互或请求处理逻辑。 |
| 282 | <code>        return id !== activeSearchRequestId || activeSearchController !== controller;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 283 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 284 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 285 | <code>    function replaceSection(id, doc) {</code> | 定义 `replaceSection` 函数，封装页面交互或请求处理逻辑。 |
| 286 | <code>        const cur = document.getElementById(id);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 287 | <code>        const next = doc.getElementById(id);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 288 | <code>        if (!cur || !next) return false;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 289 | <code>        cur.innerHTML = next.innerHTML;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 290 | <code>        return true;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 291 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 292 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 293 | <code>    function syncSidebarLinks(doc) {</code> | 定义 `syncSidebarLinks` 函数，封装页面交互或请求处理逻辑。 |
| 294 | <code>        const cur = document.getElementById(&#x27;books-sidebar-content&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 295 | <code>        const next = doc.getElementById(&#x27;books-sidebar-content&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 296 | <code>        if (!cur || !next) return false;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 297 | <code>        const curLinks = cur.querySelectorAll(&#x27;a[href*=&quot;/books&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 298 | <code>        const nextLinks = next.querySelectorAll(&#x27;a[href*=&quot;/books&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 299 | <code>        if (curLinks.length !== nextLinks.length) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 300 | <code>            cur.innerHTML = next.innerHTML;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 301 | <code>            return true;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 302 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 303 | <code>        curLinks.forEach((link, i) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 304 | <code>            const n = nextLinks[i];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 305 | <code>            link.className = n.className;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 306 | <code>            link.innerHTML = n.innerHTML;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 307 | <code>            const href = n.getAttribute(&#x27;href&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 308 | <code>            if (href) link.setAttribute(&#x27;href&#x27;, href);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 309 | <code>            const cv = n.getAttribute(&#x27;data-category-value&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 310 | <code>            if (cv !== null) link.setAttribute(&#x27;data-category-value&#x27;, cv);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 311 | <code>            else link.removeAttribute(&#x27;data-category-value&#x27;);</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 312 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 313 | <code>        return true;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 314 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 315 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 316 | <code>    async function updateBooksView(targetUrl, options = {}) {</code> | 定义 `updateBooksView` 函数，封装页面交互或请求处理逻辑。 |
| 317 | <code>        const {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 318 | <code>            preserveSearchSelection = false,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 319 | <code>            categoryScrollPositions = null,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 320 | <code>            historyMode = &#x27;replace&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 321 | <code>            syncHistory = true,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 322 | <code>            animateResults = false,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 323 | <code>            syncSidebar = true,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 324 | <code>            showLoading = false</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 325 | <code>        } = options;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 326 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 327 | <code>        if (!searchForm || !searchInput) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 328 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 329 | <code>        const selectionStart = preserveSearchSelection ? searchInput.selectionStart : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 330 | <code>        const selectionEnd = preserveSearchSelection ? searchInput.selectionEnd : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 331 | <code>        const requestId = ++activeSearchRequestId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 332 | <code>        const resolved = new URL(targetUrl, window.location.origin);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 333 | <code>        const nextPath = `${resolved.pathname}${resolved.search}`;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 334 | <code>        const curPath = `${window.location.pathname}${window.location.search}`;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 335 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 336 | <code>        if (syncHistory &amp;&amp; nextPath !== curPath) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 337 | <code>            if (historyMode === &#x27;push&#x27;) window.history.pushState({}, &#x27;&#x27;, nextPath);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 338 | <code>            else window.history.replaceState({}, &#x27;&#x27;, nextPath);</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 339 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 340 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 341 | <code>        if (activeSearchController) activeSearchController.abort();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 342 | <code>        const controller = new AbortController();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 343 | <code>        activeSearchController = controller;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 344 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 345 | <code>        if (showLoading) showSkeleton();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 346 | <code>        else if (animateResults) setResultsTransition(true);</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 347 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 348 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 349 | <code>            const response = await fetch(nextPath, {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 350 | <code>                headers: { &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 351 | <code>                signal: controller.signal</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 352 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 353 | <code>            if (!response.ok) { window.location.href = nextPath; return; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 354 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 355 | <code>            const html = await response.text();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 356 | <code>            if (isStaleRequest(requestId, controller)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 357 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 358 | <code>            const doc = new DOMParser().parseFromString(html, &#x27;text/html&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 359 | <code>            if (isStaleRequest(requestId, controller)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 360 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 361 | <code>            const okSummary = replaceSection(&#x27;books-summary&#x27;, doc);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 362 | <code>            const okToolbar = replaceSection(&#x27;books-toolbar&#x27;, doc);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 363 | <code>            const okResults = replaceSection(&#x27;books-results-content&#x27;, doc);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 364 | <code>            const okSidebar = syncSidebar ? syncSidebarLinks(doc) : true;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 365 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 366 | <code>            if (!okSummary || !okResults || !okSidebar) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 367 | <code>                window.location.href = nextPath;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 368 | <code>                return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 369 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 370 | <code>            const nextCategoryEl = doc.querySelector(&#x27;#books-search-form input[name=&quot;category&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 371 | <code>            const nextSortEl = doc.querySelector(&#x27;#books-search-form input[name=&quot;sort&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 372 | <code>            const nextAvailEl = doc.querySelector(&#x27;#books-search-form input[name=&quot;only_available&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 373 | <code>            const nextSearchEl = doc.getElementById(&#x27;books-search-input&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 374 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 375 | <code>            const committedSearch = nextSearchEl ? nextSearchEl.value : &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 376 | <code>            const committedCategory = nextCategoryEl ? nextCategoryEl.value : &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 377 | <code>            const committedSort = nextSortEl ? nextSortEl.value : &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 378 | <code>            const committedAvail = nextAvailEl ? nextAvailEl.value : &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 379 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 380 | <code>            if (nextSearchEl) searchInput.value = committedSearch;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 381 | <code>            setHiddenInput(&#x27;category&#x27;, committedCategory);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 382 | <code>            setHiddenInput(&#x27;sort&#x27;, committedSort);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 383 | <code>            setHiddenInput(&#x27;only_available&#x27;, committedAvail);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 384 | <code>            commitState(committedSearch, committedCategory);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 385 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 386 | <code>            bindLazyImages();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 387 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 388 | <code>            if (animateResults || showLoading) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 389 | <code>                setResultsTransition(false);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 390 | <code>                const el = document.getElementById(&#x27;books-results-content&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 391 | <code>                if (el) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 392 | <code>                    el.classList.remove(&#x27;animate-fade-in&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 393 | <code>                    void el.offsetWidth;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 394 | <code>                    el.classList.add(&#x27;animate-fade-in&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 395 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 396 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 397 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 398 | <code>            if (isStaleRequest(requestId, controller)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 399 | <code>            startPolling();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 400 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 401 | <code>            if (categoryScrollPositions) restoreCategoryScrollPositions(categoryScrollPositions);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 402 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 403 | <code>            if (activeCategoryLink &amp;&amp; activeCategoryLink.isConnected) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 404 | <code>                activeCategoryLink.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 405 | <code>            } else if (preserveSearchSelection) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 406 | <code>                const len = searchInput.value.length;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 407 | <code>                searchInput.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 408 | <code>                searchInput.setSelectionRange(</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 409 | <code>                    Math.min(len, selectionStart ?? len),</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 410 | <code>                    Math.min(len, selectionEnd ?? len)</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 411 | <code>                );</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 412 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 413 | <code>        } catch (error) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 414 | <code>            if (error.name === &#x27;AbortError&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 415 | <code>            window.location.href = nextPath;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 416 | <code>        } finally {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 417 | <code>            if (activeSearchController === controller) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 418 | <code>                if (animateResults) setResultsTransition(false);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 419 | <code>                activeSearchController = null;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 420 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 421 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 422 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 423 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 424 | <code>    async function submitSearch() {</code> | 定义 `submitSearch` 函数，封装页面交互或请求处理逻辑。 |
| 425 | <code>        if (!searchForm || !searchInput) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 426 | <code>        const normalized = normalizeSearch(searchInput.value);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 427 | <code>        if (searchInput.value !== normalized) searchInput.value = normalized;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 428 | <code>        activeCategoryLink = null;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 429 | <code>        await updateBooksView(buildBooksUrl(), {</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 430 | <code>            preserveSearchSelection: true,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 431 | <code>            historyMode: &#x27;replace&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 432 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 433 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 434 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 435 | <code>    function createBorrowButton(bookId, bookTitle, bookStock) {</code> | 定义 `createBorrowButton` 函数，封装页面交互或请求处理逻辑。 |
| 436 | <code>        const button = document.createElement(&#x27;button&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 437 | <code>        button.type = &#x27;button&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 438 | <code>        button.dataset.bookId = String(bookId);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 439 | <code>        button.dataset.bookTitle = bookTitle;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 440 | <code>        button.dataset.bookStock = String(bookStock);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 441 | <code>        button.className = &#x27;w-full px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-primary to-brand-accent hover:opacity-90 rounded-lg transition-all duration-200 active:scale-95&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 442 | <code>        button.textContent = &#x27;预约图书&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 443 | <code>        button.addEventListener(&#x27;click&#x27;, () =&gt; window.showBorrowModalFromData?.(button));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 444 | <code>        return button;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 445 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 446 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 447 | <code>    function pollStock() {</code> | 定义 `pollStock` 函数，封装页面交互或请求处理逻辑。 |
| 448 | <code>        if (document.hidden) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 449 | <code>        const cards = document.querySelectorAll(&#x27;[data-book-id][data-book-title]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 450 | <code>        if (!cards.length) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 451 | <code>        const requestId = ++activeStockPollRequestId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 452 | <code>        const ids = Array.from(new Set(Array.from(cards).map(c =&gt; c.dataset.bookId))).join(&#x27;,&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 453 | <code>        fetch(`${booksStockUrl}?ids=${ids}`)</code> | 发起 HTTP 请求，与后端接口交换数据。 |
| 454 | <code>            .then(r =&gt; r.json())</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 455 | <code>            .then(data =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 456 | <code>                if (requestId !== activeStockPollRequestId) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 457 | <code>                cards.forEach(card =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 458 | <code>                    const info = data[card.dataset.bookId];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 459 | <code>                    if (!info) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 460 | <code>                    const stockEl = card.querySelector(&#x27;[data-stock-text]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 461 | <code>                    const badge = card.querySelector(&#x27;.book-card-status&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 462 | <code>                    const actions = card.querySelector(&#x27;[data-actions]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 463 | <code>                    const borrowBtn = actions ? actions.querySelector(&#x27;button[data-book-id]&#x27;) : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 464 | <code>                    if (stockEl) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 465 | <code>                        stockEl.textContent = `${info.stock}/${info.total}`;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 466 | <code>                        stockEl.className = `text-xs font-semibold ${info.stock &gt; 0 ? &#x27;text-emerald-600&#x27; : &#x27;text-rose-600&#x27;}`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 467 | <code>                        stockEl.dataset.stockText = &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 468 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 469 | <code>                    if (badge) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 470 | <code>                        const ok = info.available;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 471 | <code>                        badge.textContent = ok ? &#x27;可借阅&#x27; : &#x27;已借出&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 472 | <code>                        badge.className = `book-card-status ${ok ? &#x27;is-available&#x27; : &#x27;is-unavailable&#x27;}`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 473 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 474 | <code>                    if (borrowBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 475 | <code>                        borrowBtn.dataset.bookStock = String(info.stock);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 476 | <code>                        if (!info.available) borrowBtn.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 477 | <code>                    } else if (info.available &amp;&amp; actions &amp;&amp; card.dataset.bookTitle) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 478 | <code>                        actions.appendChild(createBorrowButton(card.dataset.bookId, card.dataset.bookTitle, info.stock));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 479 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 480 | <code>                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 481 | <code>            })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 482 | <code>            .catch(() =&gt; {});</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 483 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 484 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 485 | <code>    function updateCount(selector, n) {</code> | 定义 `updateCount` 函数，封装页面交互或请求处理逻辑。 |
| 486 | <code>        document.querySelectorAll(selector).forEach(el =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 487 | <code>            const cur = parseInt(el.textContent, 10);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 488 | <code>            if (cur === n) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 489 | <code>            el.textContent = n;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 490 | <code>            el.classList.add(&#x27;scale-110&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 491 | <code>            setTimeout(() =&gt; el.classList.remove(&#x27;scale-110&#x27;), 300);</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 492 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 493 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 494 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 495 | <code>    function pollCategories() {</code> | 定义 `pollCategories` 函数，封装页面交互或请求处理逻辑。 |
| 496 | <code>        if (document.hidden) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 497 | <code>        const requestId = ++activeCategoriesPollRequestId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 498 | <code>        fetch(buildCategoriesUrl())</code> | 发起 HTTP 请求，与后端接口交换数据。 |
| 499 | <code>            .then(r =&gt; r.json())</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 500 | <code>            .then(data =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 501 | <code>                if (requestId !== activeCategoriesPollRequestId) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 502 | <code>                const visible = new Set(Object.keys(data.categories || {}));</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 503 | <code>                document.querySelectorAll(&#x27;#books-sidebar-content a[data-category-value]&#x27;).forEach(link =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 504 | <code>                    const v = link.getAttribute(&#x27;data-category-value&#x27;) || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 505 | <code>                    if (!v) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 506 | <code>                    link.classList.toggle(&#x27;hidden&#x27;, !(visible.has(v) || v === currentBooksCategory));</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 507 | <code>                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 508 | <code>                if (data.total !== undefined) updateCount(&#x27;[data-category=&quot;all&quot;]&#x27;, data.total);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 509 | <code>                document.querySelectorAll(&#x27;#books-sidebar-content a[data-category-value]&#x27;).forEach(link =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 510 | <code>                    const v = link.getAttribute(&#x27;data-category-value&#x27;) || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 511 | <code>                    if (!v || Object.prototype.hasOwnProperty.call(data.categories || {}, v)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 512 | <code>                    updateCount(`[data-category=&quot;${escapeSelectorValue(v)}&quot;]`, 0);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 513 | <code>                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 514 | <code>                Object.entries(data.categories || {}).forEach(([cat, count]) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 515 | <code>                    updateCount(`[data-category=&quot;${escapeSelectorValue(cat)}&quot;]`, count);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 516 | <code>                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 517 | <code>            })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 518 | <code>            .catch(() =&gt; {});</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 519 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 520 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 521 | <code>    function startPolling() {</code> | 定义 `startPolling` 函数，封装页面交互或请求处理逻辑。 |
| 522 | <code>        stopPolling();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 523 | <code>        if (!document.hidden) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 524 | <code>            pollStockInterval = setInterval(pollStock, STOCK_POLL_MS);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 525 | <code>            pollCategoriesInterval = setInterval(pollCategories, CATEGORY_POLL_MS);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 526 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 527 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 528 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 529 | <code>    function scheduleBooksRefresh() {</code> | 定义 `scheduleBooksRefresh` 函数，封装页面交互或请求处理逻辑。 |
| 530 | <code>        clearTimeout(booksRefreshTimer);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 531 | <code>        booksRefreshTimer = setTimeout(() =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 532 | <code>            if (document.hidden) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 533 | <code>            updateBooksView(window.location.href, {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 534 | <code>                syncHistory: false,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 535 | <code>                animateResults: false,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 536 | <code>                showLoading: false</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 537 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 538 | <code>        }, 200);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 539 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 540 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 541 | <code>    function stopPolling() {</code> | 定义 `stopPolling` 函数，封装页面交互或请求处理逻辑。 |
| 542 | <code>        if (pollStockInterval) { clearInterval(pollStockInterval); pollStockInterval = null; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 543 | <code>        if (pollCategoriesInterval) { clearInterval(pollCategoriesInterval); pollCategoriesInterval = null; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 544 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 545 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 546 | <code>    document.addEventListener(&#x27;visibilitychange&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 547 | <code>        if (document.hidden) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 548 | <code>            stopPolling();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 549 | <code>        } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 550 | <code>            pollStock();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 551 | <code>            pollCategories();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 552 | <code>            startPolling();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 553 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 554 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 555 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 556 | <code>    window.addEventListener(&#x27;popstate&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 557 | <code>        activeCategoryLink = null;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 558 | <code>        clearTimeout(searchTimer);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 559 | <code>        const url = new URL(window.location.href);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 560 | <code>        const nextCategory = url.searchParams.get(&#x27;category&#x27;) || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 561 | <code>        searchInput.value = url.searchParams.get(&#x27;search&#x27;) || &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 562 | <code>        setHiddenInput(&#x27;category&#x27;, nextCategory);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 563 | <code>        setHiddenInput(&#x27;sort&#x27;, url.searchParams.get(&#x27;sort&#x27;) || &#x27;&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 564 | <code>        setHiddenInput(&#x27;only_available&#x27;, url.searchParams.get(&#x27;only_available&#x27;) || &#x27;&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 565 | <code>        applyOptimisticCategoryState(nextCategory);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 566 | <code>        updateBooksView(window.location.href, {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 567 | <code>            categoryScrollPositions: getCategoryScrollPositions(),</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 568 | <code>            syncHistory: false</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 569 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 570 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 571 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 572 | <code>    function bindPagination() {</code> | 定义 `bindPagination` 函数，封装页面交互或请求处理逻辑。 |
| 573 | <code>        // 委托：监听结果区域内分页链接，使用 AJAX 局部刷新而非整页跳转</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 574 | <code>        document.addEventListener(&#x27;click&#x27;, (event) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 575 | <code>            if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 576 | <code>            const link = event.target.closest(&#x27;a[href]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 577 | <code>            if (!link) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 578 | <code>            const resultsRoot = document.getElementById(&#x27;books-results-content&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 579 | <code>            if (!resultsRoot || !resultsRoot.contains(link)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 580 | <code>            const nav = link.closest(&#x27;nav&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 581 | <code>            if (!nav) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 582 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 583 | <code>            const targetUrl = new URL(link.href, window.location.origin);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 584 | <code>            if (targetUrl.pathname !== window.location.pathname) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 585 | <code>            if (!targetUrl.searchParams.has(&#x27;page&#x27;)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 586 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 587 | <code>            event.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 588 | <code>            const savedScrollY = window.scrollY;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 589 | <code>            updateBooksView(targetUrl.toString(), {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 590 | <code>                historyMode: &#x27;push&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 591 | <code>                animateResults: true,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 592 | <code>            }).then(() =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 593 | <code>                // 保持点击前的滚动位置，避免页面跳动</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 594 | <code>                window.scrollTo({ top: savedScrollY, behavior: &#x27;instant&#x27; });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 595 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 596 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 597 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 598 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 599 | <code>    function handleStockPush(info) {</code> | 定义 `handleStockPush` 函数，封装页面交互或请求处理逻辑。 |
| 600 | <code>        if (!info || !info.book_id) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 601 | <code>        var cards = document.querySelectorAll(&#x27;[data-book-id=&quot;&#x27; + info.book_id + &#x27;&quot;][data-book-title]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 602 | <code>        var matchedCards = cards.length;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 603 | <code>        cards.forEach(function(card) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 604 | <code>            var stockEl = card.querySelector(&#x27;[data-stock-text]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 605 | <code>            var badge = card.querySelector(&#x27;.book-card-status&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 606 | <code>            var actions = card.querySelector(&#x27;[data-actions]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 607 | <code>            var borrowBtn = actions ? actions.querySelector(&#x27;button[data-book-id]&#x27;) : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 608 | <code>            if (stockEl) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 609 | <code>                stockEl.textContent = info.stock + &#x27;/&#x27; + info.total;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 610 | <code>                stockEl.className = &#x27;text-xs font-semibold &#x27; + (info.stock &gt; 0 ? &#x27;text-emerald-600&#x27; : &#x27;text-rose-600&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 611 | <code>                stockEl.dataset.stockText = &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 612 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 613 | <code>            if (badge) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 614 | <code>                badge.textContent = info.available ? &#x27;可借阅&#x27; : &#x27;已借出&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 615 | <code>                badge.className = &#x27;book-card-status &#x27; + (info.available ? &#x27;is-available&#x27; : &#x27;is-unavailable&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 616 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 617 | <code>            if (borrowBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 618 | <code>                borrowBtn.dataset.bookStock = String(info.stock);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 619 | <code>                if (!info.available) borrowBtn.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 620 | <code>            } else if (info.available &amp;&amp; actions &amp;&amp; card.dataset.bookTitle) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 621 | <code>                actions.appendChild(createBorrowButton(info.book_id, card.dataset.bookTitle, info.stock));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 622 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 623 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 624 | <code>        if (matchedCards &amp;&amp; readHiddenInput(&#x27;only_available&#x27;) === &#x27;1&#x27; &amp;&amp; !info.available) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 625 | <code>            scheduleBooksRefresh();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 626 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 627 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 628 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 629 | <code>    window.addEventListener(&#x27;library:book-stock-changed&#x27;, function(event) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 630 | <code>        handleStockPush(event.detail);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 631 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 632 | <code>    window.addEventListener(&#x27;library:book-catalog-changed&#x27;, function() {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 633 | <code>        pollCategories();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 634 | <code>        scheduleBooksRefresh();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 635 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 636 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 637 | <code>    bindSearchEvents();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 638 | <code>    bindCategoryLinks();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 639 | <code>    bindToolbar();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 640 | <code>    bindLazyImages();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 641 | <code>    bindPagination();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 642 | <code>    startPolling();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 643 | <code>})();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
