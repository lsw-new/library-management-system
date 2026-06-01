# static/js/admin-users.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>document.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 2 | <code>    const btn = e.target.closest(&#x27;.kick-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 3 | <code>    if (!btn) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 4 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 5 | <code>    const userId = btn.dataset.userId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 6 | <code>    const username = btn.dataset.username || &#x27;该用户&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 7 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 8 | <code>    showConfirm(</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 9 | <code>        &#x27;强制下线&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 10 | <code>        `确定要将 ${username} 强制下线吗？该用户的当前会话将立即失效。`,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 11 | <code>        async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 12 | <code>            await performKickUser(btn, userId);</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 13 | <code>        },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 14 | <code>        &#x27;danger&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 15 | <code>    );</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 16 | <code>});</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 17 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 18 | <code>async function performKickUser(btn, userId) {</code> | 定义 `performKickUser` 函数，封装页面交互或请求处理逻辑。 |
| 19 | <code>    let success = false;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 20 | <code>    await withLoadingBtn(btn, &#x27;处理中…&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 21 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 22 | <code>            const { data } = await postJson(`/admin/kick_user/${userId}`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 23 | <code>            if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 24 | <code>                showToast(data.message, &#x27;success&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 25 | <code>                success = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 26 | <code>            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 27 | <code>                showToast(data.message || &#x27;操作失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 28 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 29 | <code>        } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 30 | <code>            showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 31 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 32 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 33 | <code>    if (success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 34 | <code>        const card = btn.closest(&#x27;article&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 35 | <code>        if (card) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 36 | <code>            card.style.transition = &#x27;opacity 0.4s ease, transform 0.4s ease&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 37 | <code>            card.style.opacity = &#x27;0&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 38 | <code>            card.style.transform = &#x27;scale(0.95)&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 39 | <code>            setTimeout(() =&gt; card.remove(), 420);</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 40 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 41 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 42 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 43 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 44 | <code>function openBanModal(userId, username) {</code> | 定义 `openBanModal` 函数，封装页面交互或请求处理逻辑。 |
| 45 | <code>    if (document.querySelector(&#x27;.ban-modal-overlay&#x27;)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 46 | <code>    const overlay = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 47 | <code>    overlay.className = &#x27;ban-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 48 | <code>    overlay.style.background = &#x27;linear-gradient(135deg, rgba(225,29,72,0.25), rgba(236,72,153,0.18))&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 49 | <code>    overlay.innerHTML = `</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 50 | <code>        &lt;div class=&quot;bg-white w-full max-w-md rounded-[2.5rem] p-7 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;banModalTitle&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 51 | <code>            &lt;div class=&quot;flex flex-col items-center text-center&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 52 | <code>                &lt;div class=&quot;mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-rose-50 text-rose-600&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 53 | <code>                    &lt;svg class=&quot;w-10 h-10&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636&quot;/&gt;&lt;/svg&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 54 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 55 | <code>                &lt;h3 id=&quot;banModalTitle&quot; class=&quot;mb-2 text-2xl font-heading font-bold text-brand-deep&quot;&gt;封禁账号&lt;/h3&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 56 | <code>                &lt;p class=&quot;mb-6 text-sm font-medium text-brand-deep/55&quot;&gt;即将封禁用户 &lt;span class=&quot;font-bold text-rose-600&quot;&gt;${escapeHtml(username)}&lt;/span&gt;，封禁期间该账号无法登录。&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 57 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 58 | <code>                &lt;div class=&quot;w-full mb-4&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 59 | <code>                    &lt;p class=&quot;text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left&quot;&gt;快捷选择&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 60 | <code>                    &lt;div class=&quot;grid grid-cols-3 gap-2&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 61 | <code>                        ${[5, 30, 60, 180, 720, 1440].map(m =&gt; `</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 62 | <code>                            &lt;button type=&quot;button&quot; data-mins=&quot;${m}&quot; class=&quot;ban-quick min-h-[44px] px-3 py-2 text-xs font-bold rounded-xl border border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-colors&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 63 | <code>                                ${m &lt; 60 ? m + &#x27; 分钟&#x27; : (m % 1440 === 0 ? (m/1440) + &#x27; 天&#x27; : (m/60) + &#x27; 小时&#x27;)}</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 64 | <code>                            &lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 65 | <code>                        `).join(&#x27;&#x27;)}</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 66 | <code>                    &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 67 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 68 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 69 | <code>                &lt;div class=&quot;w-full mb-6&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 70 | <code>                    &lt;label for=&quot;ban-minutes-input&quot; class=&quot;block text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left&quot;&gt;自定义时长（分钟）&lt;/label&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 71 | <code>                    &lt;input type=&quot;number&quot; min=&quot;1&quot; max=&quot;525600&quot; id=&quot;ban-minutes-input&quot; placeholder=&quot;例如：60&quot;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 72 | <code>                           class=&quot;w-full px-4 py-3 bg-white border border-pink-100 hover:border-rose-300 focus:border-rose-500 rounded-2xl text-sm font-medium transition-all outline-none shadow-sm focus:shadow-[0_0_0_3px_rgba(244,63,94,0.12)]&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 73 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 74 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 75 | <code>                &lt;div class=&quot;flex w-full gap-3&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 76 | <code>                    &lt;button class=&quot;ban-cancel flex-1 rounded-2xl py-3.5 text-sm font-bold text-brand-deep/55 border border-pink-100 hover:bg-white/50 transition-colors&quot;&gt;取消&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 77 | <code>                    &lt;button class=&quot;ban-confirm flex-1 rounded-2xl py-3.5 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors&quot;&gt;确认封禁&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 78 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 79 | <code>            &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 80 | <code>        &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 81 | <code>    `;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 82 | <code>    document.body.appendChild(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 83 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 84 | <code>    const input = overlay.querySelector(&#x27;#ban-minutes-input&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 85 | <code>    const onBanKeydown = e =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 86 | <code>        if (e.key === &#x27;Escape&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 87 | <code>            closeBanModal();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 88 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 89 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 90 | <code>        trapModalFocus(e, overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 91 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 92 | <code>    const closeBanModal = () =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 93 | <code>        closeModal(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 94 | <code>        overlay.remove();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 95 | <code>        document.removeEventListener(&#x27;keydown&#x27;, onBanKeydown);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 96 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 97 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 98 | <code>    openModal(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 99 | <code>    document.addEventListener(&#x27;keydown&#x27;, onBanKeydown);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 100 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 101 | <code>    overlay.querySelectorAll(&#x27;.ban-quick&#x27;).forEach(b =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 102 | <code>        b.addEventListener(&#x27;click&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 103 | <code>            input.value = b.dataset.mins;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 104 | <code>            overlay.querySelectorAll(&#x27;.ban-quick&#x27;).forEach(x =&gt; x.classList.remove(&#x27;bg-rose-600&#x27;, &#x27;text-white&#x27;, &#x27;border-rose-600&#x27;));</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 105 | <code>            b.classList.add(&#x27;bg-rose-600&#x27;, &#x27;text-white&#x27;, &#x27;border-rose-600&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 106 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 107 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 108 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 109 | <code>    overlay.querySelector(&#x27;.ban-cancel&#x27;).addEventListener(&#x27;click&#x27;, closeBanModal);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 110 | <code>    overlay.addEventListener(&#x27;click&#x27;, e =&gt; { if (e.target === overlay) closeBanModal(); });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 111 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 112 | <code>    overlay.querySelector(&#x27;.ban-confirm&#x27;).addEventListener(&#x27;click&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 113 | <code>        const minutes = parseInt(input.value, 10);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 114 | <code>        if (!minutes || minutes &lt;= 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 115 | <code>            showToast(&#x27;请输入大于 0 的封禁时长&#x27;, &#x27;warning&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 116 | <code>            input.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 117 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 118 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 119 | <code>        const confirmBtn = overlay.querySelector(&#x27;.ban-confirm&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 120 | <code>        const fd = new FormData();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 121 | <code>        fd.append(&#x27;minutes&#x27;, String(minutes));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 122 | <code>        withLoadingBtn(confirmBtn, &#x27;处理中…&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 123 | <code>            try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 124 | <code>                const { data } = await postJson(`/admin/ban_user/${userId}`, fd);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 125 | <code>                if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 126 | <code>                    showToast(data.message, &#x27;success&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 127 | <code>                    closeBanModal();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 128 | <code>                    setTimeout(() =&gt; window.location.reload(), 600);</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 129 | <code>                } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 130 | <code>                    showToast(data.message || &#x27;封禁失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 131 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 132 | <code>            } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 133 | <code>                showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 134 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 135 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 136 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 137 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 138 | <code>    input.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 139 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 140 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 141 | <code>document.addEventListener(&#x27;click&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 142 | <code>    const banBtn = e.target.closest(&#x27;.ban-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 143 | <code>    if (banBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 144 | <code>        openBanModal(banBtn.dataset.userId, banBtn.dataset.username || &#x27;该用户&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 145 | <code>        return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 146 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 147 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 148 | <code>    const unbanBtn = e.target.closest(&#x27;.unban-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 149 | <code>    if (unbanBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 150 | <code>        const userId = unbanBtn.dataset.userId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 151 | <code>        const username = unbanBtn.dataset.username || &#x27;该用户&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 152 | <code>        showConfirm(</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 153 | <code>            &#x27;解除封禁&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 154 | <code>            `确定要解除 ${username} 的封禁吗？解除后该账号可立即登录。`,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 155 | <code>            () =&gt; withLoadingBtn(unbanBtn, &#x27;处理中…&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 156 | <code>                try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 157 | <code>                    const { data } = await postJson(`/admin/unban_user/${userId}`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 158 | <code>                    if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 159 | <code>                        showToast(data.message, &#x27;success&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 160 | <code>                        setTimeout(() =&gt; window.location.reload(), 600);</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 161 | <code>                    } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 162 | <code>                        showToast(data.message || &#x27;操作失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 163 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 164 | <code>                } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 165 | <code>                    showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 166 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 167 | <code>            }),</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 168 | <code>            &#x27;info&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 169 | <code>        );</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 170 | <code>        return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 171 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 172 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 173 | <code>    const changeEmailBtn = e.target.closest(&#x27;.change-email-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 174 | <code>    if (changeEmailBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 175 | <code>        openChangeEmailModal(</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 176 | <code>            changeEmailBtn.dataset.userId,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 177 | <code>            changeEmailBtn.dataset.username || &#x27;该用户&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 178 | <code>            changeEmailBtn.dataset.email || &#x27;&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 179 | <code>        );</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 180 | <code>        return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 181 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 182 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 183 | <code>    const resetPwdBtn = e.target.closest(&#x27;.reset-pwd-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 184 | <code>    if (resetPwdBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 185 | <code>        const userId = resetPwdBtn.dataset.userId;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 186 | <code>        const username = resetPwdBtn.dataset.username || &#x27;该用户&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 187 | <code>        showConfirm(</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 188 | <code>            &#x27;初始化密码&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 189 | <code>            `确定要将 ${username} 的密码重置为学号吗？此操作不可撤销。`,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 190 | <code>            () =&gt; withLoadingBtn(resetPwdBtn, &#x27;处理中…&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 191 | <code>                try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 192 | <code>                    const { data } = await postJson(`/admin/reset_password/${userId}`);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 193 | <code>                    if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 194 | <code>                        showToast(data.message, &#x27;success&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 195 | <code>                    } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 196 | <code>                        showToast(data.message || &#x27;操作失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 197 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 198 | <code>                } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 199 | <code>                    showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 200 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 201 | <code>            }),</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 202 | <code>            &#x27;warning&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 203 | <code>        );</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 204 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 205 | <code>});</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 206 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 207 | <code>function openChangeEmailModal(userId, username, currentEmail) {</code> | 定义 `openChangeEmailModal` 函数，封装页面交互或请求处理逻辑。 |
| 208 | <code>    if (document.querySelector(&#x27;.email-modal-overlay&#x27;)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 209 | <code>    const overlay = document.createElement(&#x27;div&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 210 | <code>    overlay.className = &#x27;email-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 211 | <code>    overlay.style.background = &#x27;linear-gradient(135deg, rgba(37,99,235,0.22), rgba(99,102,241,0.18))&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 212 | <code>    overlay.innerHTML = `</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 213 | <code>        &lt;div class=&quot;bg-white w-full max-w-md rounded-[2.5rem] p-7 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300&quot; role=&quot;dialog&quot; aria-modal=&quot;true&quot; aria-labelledby=&quot;emailModalTitle&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 214 | <code>            &lt;div class=&quot;flex flex-col items-center text-center&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 215 | <code>                &lt;div class=&quot;mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-blue-50 text-blue-600&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 216 | <code>                    &lt;svg class=&quot;w-10 h-10&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z&quot;/&gt;&lt;/svg&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 217 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 218 | <code>                &lt;h3 id=&quot;emailModalTitle&quot; class=&quot;mb-2 text-2xl font-heading font-bold text-brand-deep&quot;&gt;修改邮箱&lt;/h3&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 219 | <code>                &lt;p class=&quot;mb-6 text-sm font-medium text-brand-deep/55&quot;&gt;修改用户 &lt;span class=&quot;font-bold text-blue-600&quot;&gt;${escapeHtml(username)}&lt;/span&gt; 的绑定邮箱&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 220 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 221 | <code>                &lt;div class=&quot;w-full mb-3&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 222 | <code>                    &lt;label class=&quot;block text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left&quot;&gt;当前邮箱&lt;/label&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 223 | <code>                    &lt;p class=&quot;w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-mono text-brand-deep/50 text-left truncate&quot;&gt;${escapeHtml(currentEmail)}&lt;/p&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 224 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 225 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 226 | <code>                &lt;div class=&quot;w-full mb-6&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 227 | <code>                    &lt;label for=&quot;new-email-input&quot; class=&quot;block text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left&quot;&gt;新邮箱&lt;/label&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 228 | <code>                    &lt;input type=&quot;email&quot; id=&quot;new-email-input&quot; placeholder=&quot;请输入新邮箱地址&quot;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 229 | <code>                           class=&quot;w-full px-4 py-3 bg-white border border-pink-100 hover:border-blue-300 focus:border-blue-500 rounded-2xl text-sm font-medium transition-all outline-none shadow-sm focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)]&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 230 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 231 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 232 | <code>                &lt;div class=&quot;flex w-full gap-3&quot;&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 233 | <code>                    &lt;button class=&quot;email-cancel flex-1 rounded-2xl py-3.5 text-sm font-bold text-brand-deep/55 border border-pink-100 hover:bg-white/50 transition-colors&quot;&gt;取消&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 234 | <code>                    &lt;button class=&quot;email-confirm flex-1 rounded-2xl py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors&quot;&gt;确认修改&lt;/button&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 235 | <code>                &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 236 | <code>            &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 237 | <code>        &lt;/div&gt;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 238 | <code>    `;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 239 | <code>    document.body.appendChild(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 240 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 241 | <code>    const input = overlay.querySelector(&#x27;#new-email-input&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 242 | <code>    const onKeydown = e =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 243 | <code>        if (e.key === &#x27;Escape&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 244 | <code>            closeEmailModal();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 245 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 246 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 247 | <code>        if (e.key === &#x27;Enter&#x27; &amp;&amp; document.activeElement === input) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 248 | <code>            overlay.querySelector(&#x27;.email-confirm&#x27;).click();</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 249 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 250 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 251 | <code>        trapModalFocus(e, overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 252 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 253 | <code>    const closeEmailModal = () =&gt; {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 254 | <code>        closeModal(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 255 | <code>        overlay.remove();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 256 | <code>        document.removeEventListener(&#x27;keydown&#x27;, onKeydown);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 257 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 258 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 259 | <code>    openModal(overlay);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 260 | <code>    document.addEventListener(&#x27;keydown&#x27;, onKeydown);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 261 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 262 | <code>    overlay.querySelector(&#x27;.email-cancel&#x27;).addEventListener(&#x27;click&#x27;, closeEmailModal);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 263 | <code>    overlay.addEventListener(&#x27;click&#x27;, e =&gt; { if (e.target === overlay) closeEmailModal(); });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 264 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 265 | <code>    overlay.querySelector(&#x27;.email-confirm&#x27;).addEventListener(&#x27;click&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 266 | <code>        const newEmail = input.value.trim();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 267 | <code>        if (!newEmail) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 268 | <code>            showToast(&#x27;请输入新邮箱地址&#x27;, &#x27;warning&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 269 | <code>            input.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 270 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 271 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 272 | <code>        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 273 | <code>            showToast(&#x27;邮箱格式不正确&#x27;, &#x27;warning&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 274 | <code>            input.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 275 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 276 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 277 | <code>        if (newEmail === currentEmail) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 278 | <code>            showToast(&#x27;新邮箱与当前邮箱相同&#x27;, &#x27;warning&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 279 | <code>            input.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 280 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 281 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 282 | <code>        const confirmBtn = overlay.querySelector(&#x27;.email-confirm&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 283 | <code>        const fd = new FormData();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 284 | <code>        fd.append(&#x27;email&#x27;, newEmail);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 285 | <code>        withLoadingBtn(confirmBtn, &#x27;提交中…&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 286 | <code>            try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 287 | <code>                const { data } = await postJson(`/admin/change_email/${userId}`, fd);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 288 | <code>                if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 289 | <code>                    showToast(data.message, &#x27;success&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 290 | <code>                    closeEmailModal();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 291 | <code>                    setTimeout(() =&gt; window.location.reload(), 600);</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 292 | <code>                } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 293 | <code>                    showToast(data.message || &#x27;修改失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 294 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 295 | <code>            } catch (err) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 296 | <code>                showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 297 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 298 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 299 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 300 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 301 | <code>    input.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 302 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
