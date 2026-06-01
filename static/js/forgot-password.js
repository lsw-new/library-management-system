// 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initOtpInputs();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initPasswordToggles();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initSendCodeButton();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initVerifyCodeButton();
// 结束前面打开的代码块、函数调用或对象结构。
});


// 定义 `initOtpInputs` 函数，封装页面交互、请求或状态更新逻辑。
function initOtpInputs() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const digits = document.querySelectorAll('.otp-digit');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!digits.length) return;

    // 定义 `getCode` 函数，封装页面交互、请求或状态更新逻辑。
    function getCode() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let code = '';
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        digits.forEach(d => { code += d.value; });
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return code;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `updateVerifyButton` 函数，封装页面交互、请求或状态更新逻辑。
    function updateVerifyButton() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const btn = document.getElementById('verify-code-btn');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btn) btn.disabled = getCode().length !== digits.length;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    digits.forEach((input, idx) => {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        input.addEventListener('input', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.value = input.value.replace(/\D/g, '').slice(0, 1);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateVerifyButton();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (input.value && idx < digits.length - 1) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                digits[idx + 1].focus();
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        input.addEventListener('keydown', (e) => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.key === 'Backspace' && !input.value && idx > 0) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                digits[idx - 1].focus();
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        input.addEventListener('paste', (e) => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const pasted = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, digits.length);
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            pasted.split('').forEach((ch, i) => {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (digits[i]) digits[i].value = ch;
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateVerifyButton();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextEmpty = Array.from(digits).findIndex(d => !d.value);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            (digits[nextEmpty >= 0 ? nextEmpty : digits.length - 1]).focus();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `getCsrfToken` 函数，封装页面交互、请求或状态更新逻辑。
function getCsrfToken() {
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return window.authCsrfToken || '';
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `initSendCodeButton` 函数，封装页面交互、请求或状态更新逻辑。
function initSendCodeButton() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = document.getElementById('send-code-btn');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnText = document.getElementById('send-btn-text');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnIcon = document.getElementById('send-btn-icon');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const codeSentTip = document.getElementById('code-sent-tip');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const countdownBadge = document.getElementById('countdown-badge');

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn) return;

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    btn.addEventListener('click', async () => {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        btn.disabled = true;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnText) btnText.textContent = '发送中...';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnIcon) btnIcon.classList.add('animate-spin');

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch('/forgot-password/send-code', {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'Content-Type': 'application/json',
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-CSRF-Token': getCsrfToken()
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                },
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({})
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (codeSentTip) codeSentTip.classList.remove('hidden');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                startCountdown(btn, btnText, btnIcon, countdownBadge);
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (btnText) btnText.textContent = '发送验证码';
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (btnIcon) btnIcon.classList.remove('animate-spin');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                btn.disabled = false;
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message || '发送失败', 'error');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btnText) btnText.textContent = '发送验证码';
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btnIcon) btnIcon.classList.remove('animate-spin');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.disabled = false;
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('网络错误，请稍后重试', 'error');
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `initVerifyCodeButton` 函数，封装页面交互、请求或状态更新逻辑。
function initVerifyCodeButton() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = document.getElementById('verify-code-btn');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnText = document.getElementById('verify-btn-text');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn) return;

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    btn.addEventListener('click', async () => {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const digits = document.querySelectorAll('.otp-digit');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let code = '';
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        digits.forEach(d => { code += d.value; });

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (code.length !== digits.length) return;

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        btn.disabled = true;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnText) btnText.textContent = '验证中...';

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch('/forgot-password/verify-code', {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'Content-Type': 'application/json',
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-CSRF-Token': getCsrfToken()
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                },
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({ code })
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const verifySection = document.getElementById('verify-section');
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const passwordSection = document.getElementById('password-section');
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (verifySection) verifySection.classList.add('hidden');
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (passwordSection) passwordSection.classList.remove('hidden');
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                btn.disabled = false;
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (btnText) btnText.textContent = '验证';
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message || '验证失败', 'error');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.disabled = false;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btnText) btnText.textContent = '验证';
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('网络错误，请稍后重试', 'error');
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
}
