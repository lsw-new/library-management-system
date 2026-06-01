# static/js/base.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>/**</code> | 块注释内容，用于解释一组前端逻辑。 |
| 2 | <code> * 基础全局JavaScript - 图书管理系统</code> | 块注释内容，用于解释一组前端逻辑。 |
| 3 | <code> * 包含移动端菜单、Toast通知、确认弹窗等全局功能</code> | 块注释内容，用于解释一组前端逻辑。 |
| 4 | <code> */</code> | 块注释内容，用于解释一组前端逻辑。 |
| 5 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 6 | <code>// ==================== 移动端菜单控制 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 7 | <code>document.addEventListener(&#x27;DOMContentLoaded&#x27;, function() {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 8 | <code>    const menuBtn = document.getElementById(&#x27;mobile-menu-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 9 | <code>    const menu = document.getElementById(&#x27;mobile-menu&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 10 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 11 | <code>    if (menuBtn &amp;&amp; menu) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 12 | <code>        menuBtn.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 13 | <code>            e.stopPropagation();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 14 | <code>            const isOpen = menu.classList.toggle(&#x27;hidden&#x27;) === false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 15 | <code>            menuBtn.classList.toggle(&#x27;is-open&#x27;, isOpen);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 16 | <code>            menuBtn.setAttribute(&#x27;aria-expanded&#x27;, String(isOpen));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 17 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 18 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 19 | <code>        document.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 20 | <code>            if (!menu.contains(e.target) &amp;&amp; !menuBtn.contains(e.target)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 21 | <code>                menu.classList.add(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 22 | <code>                menuBtn.classList.remove(&#x27;is-open&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 23 | <code>                menuBtn.setAttribute(&#x27;aria-expanded&#x27;, &#x27;false&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 24 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 25 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 26 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 27 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 28 | <code>    // ==================== 仅在顶部显示导航 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 29 | <code>    const header = document.querySelector(&#x27;header.site-header&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 30 | <code>    if (header) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 31 | <code>        let ticking = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 32 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 33 | <code>        const updateHeader = () =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 34 | <code>            const currentY = window.scrollY;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 35 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 36 | <code>            if (currentY &lt;= 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 37 | <code>                header.classList.remove(&#x27;is-hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 38 | <code>            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 39 | <code>                header.classList.add(&#x27;is-hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 40 | <code>                if (menu) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 41 | <code>                    menu.classList.add(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 42 | <code>                    if (menuBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 43 | <code>                        menuBtn.classList.remove(&#x27;is-open&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 44 | <code>                        menuBtn.setAttribute(&#x27;aria-expanded&#x27;, &#x27;false&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 45 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 46 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 47 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 48 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 49 | <code>            ticking = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 50 | <code>        };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 51 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 52 | <code>        window.addEventListener(&#x27;scroll&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 53 | <code>            if (!ticking) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 54 | <code>                window.requestAnimationFrame(updateHeader);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 55 | <code>                ticking = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 56 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 57 | <code>        }, { passive: true });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 58 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 59 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 60 | <code>    initLogoutConfirm();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 61 | <code>});</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 62 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 63 | <code>// ==================== Toast 通知函数 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 64 | <code>function escapeHtml(value) {</code> | 定义 `escapeHtml` 函数，封装页面交互或请求处理逻辑。 |
| 65 | <code>    return String(value)</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 66 | <code>        .replaceAll(&#x27;&amp;&#x27;, &#x27;&amp;amp;&#x27;)</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 67 | <code>        .replaceAll(&#x27;&lt;&#x27;, &#x27;&amp;lt;&#x27;)</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 68 | <code>        .replaceAll(&#x27;&gt;&#x27;, &#x27;&amp;gt;&#x27;)</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 69 | <code>        .replaceAll(&#x27;&quot;&#x27;, &#x27;&amp;quot;&#x27;)</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 70 | <code>        .replaceAll(&quot;&#x27;&quot;, &#x27;&amp;#39;&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 71 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 72 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 73 | <code>function showToast(message, type = &#x27;success&#x27;) {</code> | 定义 `showToast` 函数，封装页面交互或请求处理逻辑。 |
| 74 | <code>    const container = document.getElementById(&#x27;toast-container&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 75 | <code>    if (!container) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 76 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 77 | <code>    const toast = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 78 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 79 | <code>    const typeLabels = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 80 | <code>        success: &#x27;成功&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 81 | <code>        error: &#x27;错误&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 82 | <code>        warning: &#x27;警告&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 83 | <code>        info: &#x27;提示&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 84 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 85 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 86 | <code>    const config = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 87 | <code>        success: { bg: &#x27;bg-emerald-500&#x27;, icon: &#x27;M5 13l4 4L19 7&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 88 | <code>        error: { bg: &#x27;bg-rose-500&#x27;, icon: &#x27;M6 18L18 6M6 6l12 12&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 89 | <code>        warning: { bg: &#x27;bg-amber-500&#x27;, icon: &#x27;M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 90 | <code>        info: { bg: &#x27;bg-brand-primary&#x27;, icon: &#x27;M13 16h-1v-4h-1m1-4h.01&#x27; }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 91 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 92 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 93 | <code>    const selected = config[type] || config.info;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 94 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 95 | <code>    toast.className = `pointer-events-auto flex max-w-full items-center gap-4 ${selected.bg} text-white px-4 md:px-6 py-4 rounded-[1.5rem] shadow-2xl transform translate-x-full opacity-0 transition-all duration-500 ease-out w-full md:min-w-[300px] md:w-auto border border-white/20`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 96 | <code>    toast.innerHTML = `</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 97 | <code>        &lt;div class=&quot;flex-shrink-0 bg-white/20 p-1.5 rounded-lg&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 98 | <code>            &lt;svg class=&quot;w-5 h-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;${selected.icon}&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot;/&gt;&lt;/svg&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 99 | <code>        &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 100 | <code>        &lt;div class=&quot;min-w-0 flex-1&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 101 | <code>            &lt;p class=&quot;text-xs font-bold tracking-widest opacity-70 leading-none mb-1&quot;&gt;${escapeHtml(typeLabels[type] || type)}&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 102 | <code>            &lt;p class=&quot;text-sm font-semibold break-words&quot;&gt;${escapeHtml(message)}&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 103 | <code>        &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 104 | <code>    `;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 105 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 106 | <code>    container.appendChild(toast);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 107 | <code>    setTimeout(() =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 108 | <code>        toast.classList.remove(&#x27;translate-x-full&#x27;, &#x27;opacity-0&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 109 | <code>    }, 100);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 110 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 111 | <code>    setTimeout(() =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 112 | <code>        toast.classList.add(&#x27;translate-x-full&#x27;, &#x27;opacity-0&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 113 | <code>        setTimeout(() =&gt; toast.remove(), 500);</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 114 | <code>    }, 4000);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 115 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 116 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 117 | <code>// ==================== 全局确认弹窗 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 118 | <code>function showConfirm(title, message, onConfirm, type = &#x27;warning&#x27;, options = {}) {</code> | 定义 `showConfirm` 函数，封装页面交互或请求处理逻辑。 |
| 119 | <code>    if (document.querySelector(&#x27;.confirm-modal-overlay&#x27;)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 120 | <code>        return Promise.resolve(false);</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 121 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 122 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 123 | <code>    const opts = typeof title === &#x27;object&#x27;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 124 | <code>        ? { ...title }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 125 | <code>        : { title, message, onConfirm, type, ...options };</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 126 | <code>    const confirmTitle = opts.title || &#x27;确认操作&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 127 | <code>    const confirmMessage = opts.message || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 128 | <code>    const confirmType = opts.type || type || &#x27;warning&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 129 | <code>    const confirmText = opts.confirmText || &#x27;确认执行&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 130 | <code>    const cancelText = opts.cancelText || &#x27;取消&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 131 | <code>    const confirmCallback = typeof opts.onConfirm === &#x27;function&#x27; ? opts.onConfirm : onConfirm;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 132 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 133 | <code>    const colors = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 134 | <code>        warning: &#x27;text-amber-600 bg-amber-50&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 135 | <code>        danger: &#x27;text-rose-600 bg-rose-50&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 136 | <code>        success: &#x27;text-emerald-600 bg-emerald-50&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 137 | <code>        info: &#x27;text-brand-primary bg-pink-50&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 138 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 139 | <code>    const btnColors = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 140 | <code>        warning: &#x27;bg-amber-600 hover:bg-amber-700&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 141 | <code>        danger: &#x27;bg-rose-600 hover:bg-rose-700&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 142 | <code>        success: &#x27;bg-emerald-600 hover:bg-emerald-700&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 143 | <code>        info: &#x27;bg-brand-primary hover:bg-brand-deep&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 144 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 145 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 146 | <code>    const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 147 | <code>    const dialogId = `confirm-dialog-${Date.now()}`;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 148 | <code>    const titleId = `${dialogId}-title`;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 149 | <code>    const messageId = `${dialogId}-message`;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 150 | <code>    const modal = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 151 | <code>    modal.className = &#x27;confirm-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 152 | <code>    modal.style.background = &#x27;linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.18))&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 153 | <code>    modal.innerHTML = `</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 154 | <code>        &lt;div class=&quot;bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;${titleId}&quot; aria-describedby=&quot;${messageId}&quot; tabindex=&quot;-1&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 155 | <code>            &lt;div class=&quot;flex flex-col items-center text-center&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 156 | <code>                &lt;div class=&quot;mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] ${colors[confirmType] || colors.info}&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 157 | <code>                    &lt;svg class=&quot;w-10 h-10&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path d=&quot;M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;/&gt;&lt;/svg&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 158 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 159 | <code>                &lt;h3 id=&quot;${titleId}&quot; class=&quot;mb-3 text-3xl font-heading font-bold text-brand-deep&quot;&gt;${escapeHtml(confirmTitle)}&lt;/h3&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 160 | <code>                &lt;p id=&quot;${messageId}&quot; class=&quot;mb-8 text-sm font-medium leading-relaxed text-brand-deep/60&quot;&gt;${escapeHtml(confirmMessage)}&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 161 | <code>                &lt;div class=&quot;flex w-full gap-4&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 162 | <code>                    &lt;button class=&quot;cancel-btn flex-1 rounded-2xl py-4 text-sm font-bold text-brand-soft transition-all cursor-pointer hover:bg-white/50&quot;&gt;取消&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 163 | <code>                    &lt;button class=&quot;confirm-btn flex-1 rounded-2xl py-4 text-sm font-bold text-white cursor-pointer ${btnColors[type] || btnColors.info}&quot;&gt;确认执行&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 164 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 165 | <code>            &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 166 | <code>        &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 167 | <code>    `;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 168 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 169 | <code>    document.body.appendChild(modal);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 170 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 171 | <code>    const cancelButton = modal.querySelector(&#x27;.cancel-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 172 | <code>    const confirmButton = modal.querySelector(&#x27;.confirm-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 173 | <code>    const focusableSelector = &#x27;button, [href], input, select, textarea, [tabindex]:not([tabindex=&quot;-1&quot;])&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 174 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 175 | <code>    function closeModal() {</code> | 定义 `closeModal` 函数，封装页面交互或请求处理逻辑。 |
| 176 | <code>        document.removeEventListener(&#x27;keydown&#x27;, handleKeydown);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 177 | <code>        modal.remove();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 178 | <code>        if (activeElement &amp;&amp; document.contains(activeElement)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 179 | <code>            activeElement.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 180 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 181 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 182 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 183 | <code>    function handleKeydown(event) {</code> | 定义 `handleKeydown` 函数，封装页面交互或请求处理逻辑。 |
| 184 | <code>        if (event.key === &#x27;Escape&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 185 | <code>            event.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 186 | <code>            closeModal();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 187 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 188 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 189 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 190 | <code>        if (event.key !== &#x27;Tab&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 191 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 192 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 193 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 194 | <code>        const focusableElements = Array.from(modal.querySelectorAll(focusableSelector))</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 195 | <code>            .filter((element) =&gt; !element.hasAttribute(&#x27;disabled&#x27;));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 196 | <code>        const firstElement = focusableElements[0];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 197 | <code>        const lastElement = focusableElements[focusableElements.length - 1];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 198 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 199 | <code>        if (!firstElement || !lastElement) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 200 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 201 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 202 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 203 | <code>        if (event.shiftKey &amp;&amp; document.activeElement === firstElement) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 204 | <code>            event.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 205 | <code>            lastElement.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 206 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 207 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 208 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 209 | <code>        if (!event.shiftKey &amp;&amp; document.activeElement === lastElement) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 210 | <code>            event.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 211 | <code>            firstElement.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 212 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 213 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 214 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 215 | <code>    cancelButton?.addEventListener(&#x27;click&#x27;, closeModal);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 216 | <code>    confirmButton?.addEventListener(&#x27;click&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 217 | <code>        closeModal();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 218 | <code>        onConfirm();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 219 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 220 | <code>    modal.addEventListener(&#x27;click&#x27;, (event) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 221 | <code>        if (event.target === modal) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 222 | <code>            closeModal();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 223 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 224 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 225 | <code>    document.addEventListener(&#x27;keydown&#x27;, handleKeydown);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 226 | <code>    cancelButton?.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 227 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 228 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 229 | <code>showConfirm = window.showConfirm = function appShowConfirm(title, message, onConfirm, type = &#x27;warning&#x27;, options = {}) {</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 230 | <code>    if (document.querySelector(&#x27;.confirm-modal-overlay&#x27;)) return Promise.resolve(false);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 231 | <code>    const opts = typeof title === &#x27;object&#x27; ? { ...title } : { title, message, onConfirm, type, ...options };</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 232 | <code>    const dialogType = opts.type || type || &#x27;warning&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 233 | <code>    const palette = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 234 | <code>        warning: { icon: &#x27;!&#x27;, bg: &#x27;#fffbeb&#x27;, fg: &#x27;#d97706&#x27;, btn: &#x27;linear-gradient(135deg,#f59e0b,#d97706)&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 235 | <code>        danger: { icon: &#x27;!&#x27;, bg: &#x27;#fff1f2&#x27;, fg: &#x27;#e11d48&#x27;, btn: &#x27;linear-gradient(135deg,#f43f5e,#be123c)&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 236 | <code>        success: { icon: &#x27;✓&#x27;, bg: &#x27;#ecfdf5&#x27;, fg: &#x27;#059669&#x27;, btn: &#x27;linear-gradient(135deg,#10b981,#059669)&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 237 | <code>        info: { icon: &#x27;i&#x27;, bg: &#x27;#fdf2f8&#x27;, fg: &#x27;var(--color-brand-primary)&#x27;, btn: &#x27;linear-gradient(135deg,var(--color-brand-primary),var(--color-brand-accent))&#x27; }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 238 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 239 | <code>    const selected = palette[dialogType] || palette.info;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 240 | <code>    const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 241 | <code>    const overlay = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 242 | <code>    overlay.className = &#x27;confirm-modal-overlay app-dialog-overlay&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 243 | <code>    overlay.innerHTML = `</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 244 | <code>        &lt;section class=&quot;app-dialog-card&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; tabindex=&quot;-1&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 245 | <code>            &lt;div class=&quot;app-dialog-icon&quot; style=&quot;background:${selected.bg};color:${selected.fg}&quot;&gt;${escapeHtml(selected.icon)}&lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 246 | <code>            &lt;h3 class=&quot;app-dialog-title&quot;&gt;${escapeHtml(opts.title || &#x27;确认操作&#x27;)}&lt;/h3&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 247 | <code>            &lt;p class=&quot;app-dialog-message&quot;&gt;${escapeHtml(opts.message || &#x27;&#x27;)}&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 248 | <code>            &lt;div class=&quot;app-dialog-actions&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 249 | <code>                &lt;button type=&quot;button&quot; class=&quot;app-dialog-btn is-secondary&quot; data-dialog-cancel&gt;${escapeHtml(opts.cancelText || &#x27;取消&#x27;)}&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 250 | <code>                &lt;button type=&quot;button&quot; class=&quot;app-dialog-btn is-primary&quot; style=&quot;background:${selected.btn}&quot; data-dialog-confirm&gt;${escapeHtml(opts.confirmText || &#x27;确认执行&#x27;)}&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 251 | <code>            &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 252 | <code>        &lt;/section&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 253 | <code>    `;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 254 | <code>    document.body.appendChild(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 255 | <code>    return new Promise((resolve) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 256 | <code>        const card = overlay.querySelector(&#x27;.app-dialog-card&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 257 | <code>        const cancelBtn = overlay.querySelector(&#x27;[data-dialog-cancel]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 258 | <code>        const confirmBtn = overlay.querySelector(&#x27;[data-dialog-confirm]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 259 | <code>        function close(result) {</code> | 定义 `close` 函数，封装页面交互或请求处理逻辑。 |
| 260 | <code>            document.removeEventListener(&#x27;keydown&#x27;, onKeydown);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 261 | <code>            overlay.remove();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 262 | <code>            if (activeElement &amp;&amp; document.contains(activeElement)) activeElement.focus();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 263 | <code>            resolve(result);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 264 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 265 | <code>        function onKeydown(event) {</code> | 定义 `onKeydown` 函数，封装页面交互或请求处理逻辑。 |
| 266 | <code>            if (event.key === &#x27;Escape&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 267 | <code>                event.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 268 | <code>                close(false);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 269 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 270 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 271 | <code>        cancelBtn?.addEventListener(&#x27;click&#x27;, () =&gt; close(false));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 272 | <code>        confirmBtn?.addEventListener(&#x27;click&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 273 | <code>            close(true);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 274 | <code>            if (typeof opts.onConfirm === &#x27;function&#x27;) opts.onConfirm();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 275 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 276 | <code>        overlay.addEventListener(&#x27;click&#x27;, (event) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 277 | <code>            if (event.target === overlay) close(false);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 278 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 279 | <code>        document.addEventListener(&#x27;keydown&#x27;, onKeydown);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 280 | <code>        card?.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 281 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 282 | <code>};</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 283 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 284 | <code>function showNotice(title, message, type = &#x27;success&#x27;, actions = []) {</code> | 定义 `showNotice` 函数，封装页面交互或请求处理逻辑。 |
| 285 | <code>    const palette = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 286 | <code>        success: { icon: &#x27;✓&#x27;, bg: &#x27;#ecfdf5&#x27;, fg: &#x27;#059669&#x27;, accent: &#x27;linear-gradient(135deg,#10b981,#059669)&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 287 | <code>        warning: { icon: &#x27;!&#x27;, bg: &#x27;#fffbeb&#x27;, fg: &#x27;#d97706&#x27;, accent: &#x27;linear-gradient(135deg,#f59e0b,#d97706)&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 288 | <code>        danger: { icon: &#x27;!&#x27;, bg: &#x27;#fff1f2&#x27;, fg: &#x27;#e11d48&#x27;, accent: &#x27;linear-gradient(135deg,#f43f5e,#be123c)&#x27; },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 289 | <code>        info: { icon: &#x27;i&#x27;, bg: &#x27;#fdf2f8&#x27;, fg: &#x27;var(--color-brand-primary)&#x27;, accent: &#x27;linear-gradient(135deg,var(--color-brand-primary),var(--color-brand-accent))&#x27; }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 290 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 291 | <code>    const selected = palette[type] || palette.info;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 292 | <code>    const normalizedActions = actions.length ? actions : [{ label: &#x27;知道了&#x27;, primary: true }];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 293 | <code>    const overlay = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 294 | <code>    overlay.className = &#x27;app-dialog-overlay app-notice-overlay&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 295 | <code>    overlay.innerHTML = `</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 296 | <code>        &lt;section class=&quot;app-dialog-card app-notice-card&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; tabindex=&quot;-1&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 297 | <code>            &lt;div class=&quot;app-dialog-icon&quot; style=&quot;background:${selected.bg};color:${selected.fg}&quot;&gt;${escapeHtml(selected.icon)}&lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 298 | <code>            &lt;h3 class=&quot;app-dialog-title&quot;&gt;${escapeHtml(title || &#x27;提示&#x27;)}&lt;/h3&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 299 | <code>            &lt;p class=&quot;app-dialog-message&quot;&gt;${escapeHtml(message || &#x27;&#x27;)}&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 300 | <code>            &lt;div class=&quot;app-dialog-actions&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 301 | <code>                ${normalizedActions.map((action, index) =&gt; `</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 302 | <code>                    &lt;button type=&quot;button&quot; class=&quot;app-dialog-btn ${action.primary ? &#x27;is-primary&#x27; : &#x27;is-secondary&#x27;}&quot; ${action.primary ? `style=&quot;background:${selected.accent}&quot;` : &#x27;&#x27;} data-notice-action=&quot;${index}&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 303 | <code>                        ${escapeHtml(action.label || action.text || &#x27;确定&#x27;)}</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 304 | <code>                    &lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 305 | <code>                `).join(&#x27;&#x27;)}</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 306 | <code>            &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 307 | <code>        &lt;/section&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 308 | <code>    `;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 309 | <code>    document.body.appendChild(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 310 | <code>    const close = () =&gt; overlay.remove();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 311 | <code>    overlay.addEventListener(&#x27;click&#x27;, (event) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 312 | <code>        if (event.target === overlay) close();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 313 | <code>        const button = event.target.closest(&#x27;[data-notice-action]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 314 | <code>        if (!button) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 315 | <code>        const action = normalizedActions[Number(button.dataset.noticeAction)] || {};</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 316 | <code>        close();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 317 | <code>        if (action.href) window.location.href = action.href;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 318 | <code>        if (typeof action.onClick === &#x27;function&#x27;) action.onClick();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 319 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 320 | <code>    overlay.querySelector(&#x27;.app-dialog-card&#x27;)?.focus();</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 321 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 322 | <code>window.showNotice = showNotice;</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 323 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 324 | <code>function initLogoutConfirm() {</code> | 定义 `initLogoutConfirm` 函数，封装页面交互或请求处理逻辑。 |
| 325 | <code>    document.addEventListener(&#x27;click&#x27;, function(event) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 326 | <code>        const link = event.target.closest(&#x27;a[href]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 327 | <code>        if (!link || link.dataset.noConfirm === &#x27;true&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 328 | <code>        const url = new URL(link.href, window.location.href);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 329 | <code>        if (url.pathname !== &#x27;/logout&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 330 | <code>        event.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 331 | <code>        showConfirm(&#x27;退出登录&#x27;, &#x27;确认退出当前账号吗？退出后需要重新登录才能继续借阅和查看记录。&#x27;, function() {</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 332 | <code>            window.location.href = link.href;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 333 | <code>        }, &#x27;warning&#x27;, { confirmText: &#x27;退出登录&#x27;, cancelText: &#x27;继续浏览&#x27; });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 334 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 335 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 336 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 337 | <code>// ==================== 通用 fetch 封装 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 338 | <code>// 发起 POST 请求，自动带上 XHR header；body 可为 FormData / object / undefined</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 339 | <code>async function postJson(url, body) {</code> | 定义 `postJson` 函数，封装页面交互或请求处理逻辑。 |
| 340 | <code>    const init = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 341 | <code>        method: &#x27;POST&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 342 | <code>        headers: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 343 | <code>            &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 344 | <code>            &#x27;X-CSRF-Token&#x27;: window.adminConfig?.csrfToken || window.borrowModalConfig?.csrfToken || &#x27;&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 345 | <code>        },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 346 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 347 | <code>    if (body instanceof FormData) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 348 | <code>        init.body = body;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 349 | <code>    } else if (body &amp;&amp; typeof body === &#x27;object&#x27;) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 350 | <code>        init.headers[&#x27;Content-Type&#x27;] = &#x27;application/json&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 351 | <code>        init.body = JSON.stringify(body);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 352 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 353 | <code>    const resp = await fetch(url, init);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 354 | <code>    let data = {};</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 355 | <code>    try { data = await resp.json(); } catch (_) {}</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 356 | <code>    return { ok: resp.ok, status: resp.status, data };</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 357 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 358 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 359 | <code>// 在异步操作期间禁用按钮并显示文字，结束后恢复原 HTML（出错也恢复）</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 360 | <code>async function withLoadingBtn(btn, loadingText, asyncFn) {</code> | 定义 `withLoadingBtn` 函数，封装页面交互或请求处理逻辑。 |
| 361 | <code>    if (!btn) return asyncFn();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 362 | <code>    const originalHTML = btn.innerHTML;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 363 | <code>    btn.disabled = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 364 | <code>    btn.textContent = loadingText;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 365 | <code>    try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 366 | <code>        return await asyncFn();</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 367 | <code>    } finally {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 368 | <code>        btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 369 | <code>        btn.innerHTML = originalHTML;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 370 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 371 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 372 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 373 | <code>// ==================== 密码显示/隐藏 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 374 | <code>function initPasswordToggles() {</code> | 定义 `initPasswordToggles` 函数，封装页面交互或请求处理逻辑。 |
| 375 | <code>    document.querySelectorAll(&#x27;[data-password-toggle]&#x27;).forEach(btn =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 376 | <code>        btn.addEventListener(&#x27;click&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 377 | <code>            const targetId = btn.dataset.target;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 378 | <code>            const input = document.getElementById(targetId);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 379 | <code>            if (!input) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 380 | <code>            const isPassword = input.type === &#x27;password&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 381 | <code>            input.type = isPassword ? &#x27;text&#x27; : &#x27;password&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 382 | <code>            btn.textContent = isPassword ? &#x27;隐藏&#x27; : &#x27;显示&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 383 | <code>            btn.setAttribute(&#x27;aria-pressed&#x27;, String(isPassword));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 384 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 385 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 386 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 387 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 388 | <code>// ==================== 验证码倒计时 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 389 | <code>function startCountdown(btn, btnText, btnIcon, badge) {</code> | 定义 `startCountdown` 函数，封装页面交互或请求处理逻辑。 |
| 390 | <code>    let seconds = 60;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 391 | <code>    if (btnIcon) btnIcon.classList.remove(&#x27;animate-spin&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 392 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 393 | <code>    function tick() {</code> | 定义 `tick` 函数，封装页面交互或请求处理逻辑。 |
| 394 | <code>        if (seconds &lt;= 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 395 | <code>            btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 396 | <code>            if (btnText) btnText.textContent = &#x27;重新发送&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 397 | <code>            if (badge) badge.textContent = &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 398 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 399 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 400 | <code>        btn.disabled = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 401 | <code>        if (btnText) btnText.textContent = `${seconds}s`;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 402 | <code>        if (badge) badge.textContent = `${seconds}s`;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 403 | <code>        seconds--;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 404 | <code>        setTimeout(tick, 1000);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 405 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 406 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 407 | <code>    tick();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 408 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 409 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 410 | <code>// ==================== Flask Flash 消息处理 ====================</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 411 | <code>document.addEventListener(&#x27;DOMContentLoaded&#x27;, function() {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 412 | <code>    const dataElement = document.getElementById(&#x27;flash-messages-data&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 413 | <code>    if (dataElement) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 414 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 415 | <code>            const flashMessages = JSON.parse(dataElement.getAttribute(&#x27;data-messages&#x27;));</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 416 | <code>            flashMessages.forEach(function(msg) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 417 | <code>                const category = msg[0];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 418 | <code>                const message = msg[1];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 419 | <code>                const type = category === &#x27;success&#x27; ? &#x27;success&#x27; : category === &#x27;danger&#x27; ? &#x27;error&#x27; : category === &#x27;message&#x27; ? &#x27;info&#x27; : category;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 420 | <code>                showToast(message, type);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 421 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 422 | <code>        } catch (e) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 423 | <code>            console.error(&#x27;Failed to parse flash messages:&#x27;, e);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 424 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 425 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 426 | <code>});</code> | 结束前面打开的代码块、函数调用或对象结构。 |
