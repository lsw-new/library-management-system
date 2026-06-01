# static/js/init-db-shared.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>// 共享工具：消息控制台、状态徽章、按钮 loading、HTML 转义、延时辅助</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 2 | <code>// 由 init-db.js（页面1：连接配置）和 init-db-actions.js（页面2：初始化操作）共用</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 3 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 4 | <code>const messageVariants = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 5 | <code>    info: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 6 | <code>        title: &#x27;系统提示&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 7 | <code>        wrapper: &#x27;border-sky-100 bg-sky-50/80 text-sky-800&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 8 | <code>        icon: &#x27;bg-sky-500/10 text-sky-600&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 9 | <code>        svg: &#x27;&lt;svg class=&quot;h-5 w-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z&quot; /&gt;&lt;/svg&gt;&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 10 | <code>    },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 11 | <code>    success: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 12 | <code>        title: &#x27;操作成功&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 13 | <code>        wrapper: &#x27;border-emerald-100 bg-emerald-50/80 text-emerald-800&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 14 | <code>        icon: &#x27;bg-emerald-500/10 text-emerald-600&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 15 | <code>        svg: &#x27;&lt;svg class=&quot;h-5 w-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M5 13l4 4L19 7&quot; /&gt;&lt;/svg&gt;&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 16 | <code>    },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 17 | <code>    error: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 18 | <code>        title: &#x27;操作失败&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 19 | <code>        wrapper: &#x27;border-rose-100 bg-rose-50/80 text-rose-800&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 20 | <code>        icon: &#x27;bg-rose-500/10 text-rose-600&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 21 | <code>        svg: &#x27;&lt;svg class=&quot;h-5 w-5&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2.5&quot; d=&quot;M12 8v4m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z&quot; /&gt;&lt;/svg&gt;&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 22 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 23 | <code>};</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 24 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 25 | <code>const pageStatusToneMap = {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 26 | <code>    pending: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 27 | <code>        badge: &#x27;bg-amber-50 text-amber-700&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 28 | <code>        ping: &#x27;absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 29 | <code>        dot: &#x27;relative inline-flex h-2 w-2 rounded-full bg-amber-500&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 30 | <code>    },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 31 | <code>    ready: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 32 | <code>        badge: &#x27;bg-sky-50 text-sky-700&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 33 | <code>        ping: &#x27;absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 34 | <code>        dot: &#x27;relative inline-flex h-2 w-2 rounded-full bg-sky-500&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 35 | <code>    },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 36 | <code>    success: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 37 | <code>        badge: &#x27;bg-emerald-50 text-emerald-700&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 38 | <code>        ping: &#x27;absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 39 | <code>        dot: &#x27;relative inline-flex h-2 w-2 rounded-full bg-emerald-500&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 40 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 41 | <code>};</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 42 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 43 | <code>function showMessage(consoleEls, message, type = &#x27;info&#x27;, customTitle = &#x27;&#x27;) {</code> | 定义 `showMessage` 函数，封装页面交互或请求处理逻辑。 |
| 44 | <code>    const variant = messageVariants[type] || messageVariants.info;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 45 | <code>    consoleEls.root.className = `rounded-2xl border p-4 mb-5 ${variant.wrapper}`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 46 | <code>    consoleEls.root.classList.remove(&#x27;hidden&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 47 | <code>    consoleEls.root.setAttribute(&#x27;role&#x27;, type === &#x27;error&#x27; ? &#x27;alert&#x27; : &#x27;status&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 48 | <code>    consoleEls.icon.className = `mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${variant.icon}`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 49 | <code>    consoleEls.icon.innerHTML = variant.svg;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 50 | <code>    consoleEls.title.textContent = customTitle || variant.title;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 51 | <code>    consoleEls.text.textContent = message;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 52 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 53 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 54 | <code>function setPageStatus(statusEls, text, tone = &#x27;pending&#x27;) {</code> | 定义 `setPageStatus` 函数，封装页面交互或请求处理逻辑。 |
| 55 | <code>    const currentTone = pageStatusToneMap[tone] || pageStatusToneMap.pending;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 56 | <code>    statusEls.badge.className = `inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-black ${currentTone.badge}`;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 57 | <code>    statusEls.ping.className = currentTone.ping;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 58 | <code>    statusEls.dot.className = currentTone.dot;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 59 | <code>    statusEls.text.textContent = text;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 60 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 61 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 62 | <code>function setButtonLoading(button, isLoading, loadingText) {</code> | 定义 `setButtonLoading` 函数，封装页面交互或请求处理逻辑。 |
| 63 | <code>    if (!button) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 64 | <code>    if (!button.dataset.defaultHtml) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 65 | <code>        button.dataset.defaultHtml = button.innerHTML;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 66 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 67 | <code>    button.disabled = isLoading;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 68 | <code>    button.setAttribute(&#x27;aria-disabled&#x27;, String(isLoading));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 69 | <code>    if (isLoading) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 70 | <code>        button.innerHTML = `&lt;span class=&quot;inline-flex items-center gap-2&quot;&gt;&lt;svg class=&quot;h-4 w-4 animate-spin&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;circle class=&quot;opacity-25&quot; cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;4&quot;&gt;&lt;/circle&gt;&lt;path class=&quot;opacity-90&quot; fill=&quot;currentColor&quot; d=&quot;M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;span&gt;${loadingText}&lt;/span&gt;&lt;/span&gt;`;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 71 | <code>        return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 72 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 73 | <code>    button.innerHTML = button.dataset.defaultHtml;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 74 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 75 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 76 | <code>function wait(ms) {</code> | 定义 `wait` 函数，封装页面交互或请求处理逻辑。 |
| 77 | <code>    return new Promise((resolve) =&gt; window.setTimeout(resolve, ms));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 78 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 79 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 80 | <code>async function keepLoadingVisible(startedAt, minimumDuration = 600) {</code> | 定义 `keepLoadingVisible` 函数，封装页面交互或请求处理逻辑。 |
| 81 | <code>    const elapsed = Date.now() - startedAt;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 82 | <code>    const remaining = minimumDuration - elapsed;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 83 | <code>    if (remaining &gt; 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 84 | <code>        await wait(remaining);</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 85 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 86 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
