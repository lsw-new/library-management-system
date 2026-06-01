# static/js/forgot-password.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>document.addEventListener(&#x27;DOMContentLoaded&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 2 | <code>    initOtpInputs();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 3 | <code>    initPasswordToggles();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 4 | <code>    initSendCodeButton();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 5 | <code>    initVerifyCodeButton();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 6 | <code>});</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 7 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 8 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 9 | <code>function initOtpInputs() {</code> | 定义 `initOtpInputs` 函数，封装页面交互或请求处理逻辑。 |
| 10 | <code>    const digits = document.querySelectorAll(&#x27;.otp-digit&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 11 | <code>    if (!digits.length) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 12 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 13 | <code>    function getCode() {</code> | 定义 `getCode` 函数，封装页面交互或请求处理逻辑。 |
| 14 | <code>        let code = &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 15 | <code>        digits.forEach(d =&gt; { code += d.value; });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 16 | <code>        return code;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 17 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 18 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 19 | <code>    function updateVerifyButton() {</code> | 定义 `updateVerifyButton` 函数，封装页面交互或请求处理逻辑。 |
| 20 | <code>        const btn = document.getElementById(&#x27;verify-code-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 21 | <code>        if (btn) btn.disabled = getCode().length !== digits.length;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 22 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 23 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 24 | <code>    digits.forEach((input, idx) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 25 | <code>        input.addEventListener(&#x27;input&#x27;, () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 26 | <code>            input.value = input.value.replace(/\D/g, &#x27;&#x27;).slice(0, 1);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 27 | <code>            updateVerifyButton();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 28 | <code>            if (input.value &amp;&amp; idx &lt; digits.length - 1) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 29 | <code>                digits[idx + 1].focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 30 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 31 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 32 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 33 | <code>        input.addEventListener(&#x27;keydown&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 34 | <code>            if (e.key === &#x27;Backspace&#x27; &amp;&amp; !input.value &amp;&amp; idx &gt; 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 35 | <code>                digits[idx - 1].focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 36 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 37 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 38 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 39 | <code>        input.addEventListener(&#x27;paste&#x27;, (e) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 40 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 41 | <code>            const pasted = (e.clipboardData.getData(&#x27;text&#x27;) || &#x27;&#x27;).replace(/\D/g, &#x27;&#x27;).slice(0, digits.length);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 42 | <code>            pasted.split(&#x27;&#x27;).forEach((ch, i) =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 43 | <code>                if (digits[i]) digits[i].value = ch;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 44 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 45 | <code>            updateVerifyButton();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 46 | <code>            const nextEmpty = Array.from(digits).findIndex(d =&gt; !d.value);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 47 | <code>            (digits[nextEmpty &gt;= 0 ? nextEmpty : digits.length - 1]).focus();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 48 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 49 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 50 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 51 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 52 | <code>function getCsrfToken() {</code> | 定义 `getCsrfToken` 函数，封装页面交互或请求处理逻辑。 |
| 53 | <code>    return window.authCsrfToken || &#x27;&#x27;;</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 54 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 55 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 56 | <code>function initSendCodeButton() {</code> | 定义 `initSendCodeButton` 函数，封装页面交互或请求处理逻辑。 |
| 57 | <code>    const btn = document.getElementById(&#x27;send-code-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 58 | <code>    const btnText = document.getElementById(&#x27;send-btn-text&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 59 | <code>    const btnIcon = document.getElementById(&#x27;send-btn-icon&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 60 | <code>    const codeSentTip = document.getElementById(&#x27;code-sent-tip&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 61 | <code>    const countdownBadge = document.getElementById(&#x27;countdown-badge&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 62 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 63 | <code>    if (!btn) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 64 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 65 | <code>    btn.addEventListener(&#x27;click&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 66 | <code>        btn.disabled = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 67 | <code>        if (btnText) btnText.textContent = &#x27;发送中...&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 68 | <code>        if (btnIcon) btnIcon.classList.add(&#x27;animate-spin&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 69 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 70 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 71 | <code>            const resp = await fetch(&#x27;/forgot-password/send-code&#x27;, {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 72 | <code>                method: &#x27;POST&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 73 | <code>                headers: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 74 | <code>                    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 75 | <code>                    &#x27;X-CSRF-Token&#x27;: getCsrfToken()</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 76 | <code>                },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 77 | <code>                body: JSON.stringify({})</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 78 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 79 | <code>            const data = await resp.json();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 80 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 81 | <code>            if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 82 | <code>                if (codeSentTip) codeSentTip.classList.remove(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 83 | <code>                startCountdown(btn, btnText, btnIcon, countdownBadge);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 84 | <code>            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 85 | <code>                if (btnText) btnText.textContent = &#x27;发送验证码&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 86 | <code>                if (btnIcon) btnIcon.classList.remove(&#x27;animate-spin&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 87 | <code>                btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 88 | <code>                showToast(data.message || &#x27;发送失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 89 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 90 | <code>        } catch {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 91 | <code>            if (btnText) btnText.textContent = &#x27;发送验证码&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 92 | <code>            if (btnIcon) btnIcon.classList.remove(&#x27;animate-spin&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 93 | <code>            btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 94 | <code>            showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 95 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 96 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 97 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 98 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 99 | <code>function initVerifyCodeButton() {</code> | 定义 `initVerifyCodeButton` 函数，封装页面交互或请求处理逻辑。 |
| 100 | <code>    const btn = document.getElementById(&#x27;verify-code-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 101 | <code>    const btnText = document.getElementById(&#x27;verify-btn-text&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 102 | <code>    if (!btn) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 103 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 104 | <code>    btn.addEventListener(&#x27;click&#x27;, async () =&gt; {</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 105 | <code>        const digits = document.querySelectorAll(&#x27;.otp-digit&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 106 | <code>        let code = &#x27;&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 107 | <code>        digits.forEach(d =&gt; { code += d.value; });</code> | 箭头函数表达式，通常用于回调、事件处理或数组处理。 |
| 108 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 109 | <code>        if (code.length !== digits.length) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 110 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 111 | <code>        btn.disabled = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 112 | <code>        if (btnText) btnText.textContent = &#x27;验证中...&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 113 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 114 | <code>        try {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 115 | <code>            const resp = await fetch(&#x27;/forgot-password/verify-code&#x27;, {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 116 | <code>                method: &#x27;POST&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 117 | <code>                headers: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 118 | <code>                    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 119 | <code>                    &#x27;X-CSRF-Token&#x27;: getCsrfToken()</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 120 | <code>                },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 121 | <code>                body: JSON.stringify({ code })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 122 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 123 | <code>            const data = await resp.json();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 124 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 125 | <code>            if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 126 | <code>                const verifySection = document.getElementById(&#x27;verify-section&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 127 | <code>                const passwordSection = document.getElementById(&#x27;password-section&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 128 | <code>                if (verifySection) verifySection.classList.add(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 129 | <code>                if (passwordSection) passwordSection.classList.remove(&#x27;hidden&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 130 | <code>            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 131 | <code>                btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 132 | <code>                if (btnText) btnText.textContent = &#x27;验证&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 133 | <code>                showToast(data.message || &#x27;验证失败&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 134 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 135 | <code>        } catch {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 136 | <code>            btn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 137 | <code>            if (btnText) btnText.textContent = &#x27;验证&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 138 | <code>            showToast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;);</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 139 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 140 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 141 | <code>}</code> | 结束前面打开的代码块、函数调用或对象结构。 |
