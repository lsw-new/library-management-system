// 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('DOMContentLoaded', () => {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initOtpInputs();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initPasswordToggles();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initSendCodeButton();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initVerifyCodeButton();
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `initOtpInputs` 函数，封装页面交互、请求或状态更新逻辑。
function initOtpInputs() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const digits = document.querySelectorAll('.otp-digit');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!digits.length) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `getCode` 函数，封装页面交互、请求或状态更新逻辑。
    function getCode() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let code = '';
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        digits.forEach(d => { code += d.value; });
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return code;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `updateVerifyButton` 函数，封装页面交互、请求或状态更新逻辑。
    function updateVerifyButton() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const btn = document.getElementById('verify-code-btn');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btn) btn.disabled = getCode().length !== digits.length;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    digits.forEach((input, idx) => {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        input.addEventListener('input', () => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.value = input.value.replace(/\D/g, '').slice(0, 1);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateVerifyButton();
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (input.value && idx < digits.length - 1) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                digits[idx + 1].focus();
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        input.addEventListener('keydown', (e) => {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.key === 'Backspace' && !input.value && idx > 0) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                digits[idx - 1].focus();
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        input.addEventListener('paste', (e) => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const pasted = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, digits.length);
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            pasted.split('').forEach((ch, i) => {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (digits[i]) digits[i].value = ch;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateVerifyButton();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextEmpty = Array.from(digits).findIndex(d => !d.value);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            (digits[nextEmpty >= 0 ? nextEmpty : digits.length - 1]).focus();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `getCsrfToken` 函数，封装页面交互、请求或状态更新逻辑。
function getCsrfToken() {
    // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
    return window.authCsrfToken || '';
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `initSendCodeButton` 函数，封装页面交互、请求或状态更新逻辑。
function initSendCodeButton() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = document.getElementById('send-code-btn');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnText = document.getElementById('send-btn-text');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnIcon = document.getElementById('send-btn-icon');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const codeSentTip = document.getElementById('code-sent-tip');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const countdownBadge = document.getElementById('countdown-badge');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    btn.addEventListener('click', async () => {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        btn.disabled = true;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnText) btnText.textContent = '发送中...';
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnIcon) btnIcon.classList.add('animate-spin');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch('/forgot-password/send-code', {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'Content-Type': 'application/json',
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-CSRF-Token': getCsrfToken()
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                },
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({})
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (codeSentTip) codeSentTip.classList.remove('hidden');
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                startCountdown(btn, btnText, btnIcon, countdownBadge);
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (btnText) btnText.textContent = '发送验证码';
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (btnIcon) btnIcon.classList.remove('animate-spin');
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                btn.disabled = false;
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message || '发送失败', 'error');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btnText) btnText.textContent = '发送验证码';
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btnIcon) btnIcon.classList.remove('animate-spin');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.disabled = false;
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('网络错误，请稍后重试', 'error');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `initVerifyCodeButton` 函数，封装页面交互、请求或状态更新逻辑。
function initVerifyCodeButton() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = document.getElementById('verify-code-btn');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnText = document.getElementById('verify-btn-text');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    btn.addEventListener('click', async () => {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const digits = document.querySelectorAll('.otp-digit');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let code = '';
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        digits.forEach(d => { code += d.value; });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (code.length !== digits.length) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        btn.disabled = true;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnText) btnText.textContent = '验证中...';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch('/forgot-password/verify-code', {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'Content-Type': 'application/json',
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-CSRF-Token': getCsrfToken()
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                },
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({ code })
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const verifySection = document.getElementById('verify-section');
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const passwordSection = document.getElementById('password-section');
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (verifySection) verifySection.classList.add('hidden');
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (passwordSection) passwordSection.classList.remove('hidden');
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                btn.disabled = false;
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (btnText) btnText.textContent = '验证';
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message || '验证失败', 'error');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.disabled = false;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btnText) btnText.textContent = '验证';
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('网络错误，请稍后重试', 'error');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
