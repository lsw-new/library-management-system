# static/js/register.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>document.addEventListener(&#x27;DOMContentLoaded&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 2 | <code>    initOtpInputs();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 3 | <code>    initPasswordToggles();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 4 | <code>    initSendCodeButton();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 5 | <code>});</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 6 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 7 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 8 | <code>function initOtpInputs() {</code> | 定义 `initOtpInputs` 函数，封装页面交互或请求处理逻辑。 |
| 9 | <code>    const digits = document.querySelectorAll(&#x27;.otp-digit&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 10 | <code>    const hiddenInput = document.getElementById(&#x27;verification_code&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 11 | <code>    if (!digits.length || !hiddenInput) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 12 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 13 | <code>    function syncHidden() {</code> | 定义 `syncHidden` 函数，封装页面交互或请求处理逻辑。 |
| 14 | <code>        let code = &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 15 | <code>        digits.forEach(d =&gt; { code += d.value; });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 16 | <code>        hiddenInput.value = code;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 17 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 18 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 19 | <code>    digits.forEach((input, idx) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 20 | <code>        input.addEventListener(&#x27;input&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 21 | <code>            input.value = input.value.replace(/\D/g, &#x27;&#x27;).slice(0, 1);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 22 | <code>            syncHidden();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 23 | <code>            if (input.value &amp;&amp; idx &lt; digits.length - 1) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 24 | <code>                digits[idx + 1].focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 25 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 26 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 27 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 28 | <code>        input.addEventListener(&#x27;keydown&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 29 | <code>            if (e.key === &#x27;Backspace&#x27; &amp;&amp; !input.value &amp;&amp; idx &gt; 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 30 | <code>                digits[idx - 1].focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 31 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 32 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 33 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 34 | <code>        input.addEventListener(&#x27;paste&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 35 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 36 | <code>            const pasted = (e.clipboardData.getData(&#x27;text&#x27;) || &#x27;&#x27;).replace(/\D/g, &#x27;&#x27;).slice(0, digits.length);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 37 | <code>            pasted.split(&#x27;&#x27;).forEach((ch, i) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 38 | <code>                if (digits[i]) digits[i].value = ch;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 39 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 40 | <code>            syncHidden();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 41 | <code>            const nextEmpty = Array.from(digits).findIndex(d =&gt; !d.value);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 42 | <code>            (digits[nextEmpty &gt;= 0 ? nextEmpty : digits.length - 1]).focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 43 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 44 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 45 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 46 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 47 | <code>function initSendCodeButton() {</code> | 定义 `initSendCodeButton` 函数，封装页面交互或请求处理逻辑。 |
| 48 | <code>    const btn = document.getElementById(&#x27;send-code-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 49 | <code>    const btnText = document.getElementById(&#x27;send-btn-text&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 50 | <code>    const btnIcon = document.getElementById(&#x27;send-btn-icon&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 51 | <code>    const emailInput = document.getElementById(&#x27;email&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 52 | <code>    const codeSentTip = document.getElementById(&#x27;code-sent-tip&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 53 | <code>    const sentEmailDisplay = document.getElementById(&#x27;sent-email-display&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 54 | <code>    const countdownBadge = document.getElementById(&#x27;countdown-badge&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 55 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 56 | <code>    if (!btn || !emailInput) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 57 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 58 | <code>    btn.addEventListener(&#x27;click&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 59 | <code>        const email = emailInput.value.trim();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 60 | <code>        if (!email) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 61 | <code>            emailInput.focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 62 | <code>            return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 63 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 64 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 65 | <code>        btn.disabled = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 66 | <code>        if (btnText) btnText.textContent = &#x27;发送中...&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 67 | <code>        if (btnIcon) btnIcon.classList.add(&#x27;animate-spin&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 68 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 69 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 70 | <code>            const csrfMeta = document.querySelector(&#x27;meta[name=&quot;csrf-token&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 71 | <code>            const headers = { &#x27;Content-Type&#x27;: &#x27;application/json&#x27; };</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 72 | <code>            const csrfToken = window.authCsrfToken || (csrfMeta &amp;&amp; csrfMeta.content) || &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 73 | <code>            if (csrfToken) headers[&#x27;X-CSRF-Token&#x27;] = csrfToken;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 74 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 75 | <code>            const resp = await fetch(&#x27;/send-verification-code&#x27;, {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 76 | <code>                method: &#x27;POST&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 77 | <code>                headers,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 78 | <code>                body: JSON.stringify({ email, check_unique: true })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 79 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 80 | <code>            const data = await resp.json();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 81 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 82 | <code>            if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 83 | <code>                if (codeSentTip) codeSentTip.classList.remove(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 84 | <code>                if (sentEmailDisplay) sentEmailDisplay.textContent = email;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 85 | <code>                startCountdown(btn, btnText, btnIcon, countdownBadge);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 86 | <code>            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 87 | <code>                if (btnText) btnText.textContent = &#x27;发送验证码&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 88 | <code>                if (btnIcon) btnIcon.classList.remove(&#x27;animate-spin&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 89 | <code>                btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 90 | <code>                showToast(data.message || &#x27;发送失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 91 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 92 | <code>        } catch {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 93 | <code>            if (btnText) btnText.textContent = &#x27;发送验证码&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 94 | <code>            if (btnIcon) btnIcon.classList.remove(&#x27;animate-spin&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 95 | <code>            btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 96 | <code>            showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 97 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 98 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 99 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 100 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 101 | <code>function openTermsModal(event) {</code> | 定义 `openTermsModal` 函数，封装页面交互或请求处理逻辑。 |
| 102 | <code>    if (event) event.preventDefault();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 103 | <code>    const modal = document.getElementById(&#x27;termsModal&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 104 | <code>    if (modal) modal.classList.remove(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 105 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 106 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 107 | <code>function closeTermsModal() {</code> | 定义 `closeTermsModal` 函数，封装页面交互或请求处理逻辑。 |
| 108 | <code>    const modal = document.getElementById(&#x27;termsModal&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 109 | <code>    if (modal) modal.classList.add(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 110 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 111 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 112 | <code>function openRulesModal(event) {</code> | 定义 `openRulesModal` 函数，封装页面交互或请求处理逻辑。 |
| 113 | <code>    if (event) event.preventDefault();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 114 | <code>    const modal = document.getElementById(&#x27;rulesModal&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 115 | <code>    if (modal) modal.classList.remove(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 116 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 117 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 118 | <code>function closeRulesModal() {</code> | 定义 `closeRulesModal` 函数，封装页面交互或请求处理逻辑。 |
| 119 | <code>    const modal = document.getElementById(&#x27;rulesModal&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 120 | <code>    if (modal) modal.classList.add(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 121 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 122 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 123 | <code>window.openTermsModal = openTermsModal;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 124 | <code>window.closeTermsModal = closeTermsModal;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 125 | <code>window.openRulesModal = openRulesModal;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 126 | <code>window.closeRulesModal = closeRulesModal;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
