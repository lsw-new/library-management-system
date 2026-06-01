// 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('DOMContentLoaded', () => {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initOtpInputs();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initPasswordToggles();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initSendCodeButton();
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `initOtpInputs` 函数，封装页面交互、请求或状态更新逻辑。
function initOtpInputs() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const digits = document.querySelectorAll('.otp-digit');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const hiddenInput = document.getElementById('verification_code');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!digits.length || !hiddenInput) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `syncHidden` 函数，封装页面交互、请求或状态更新逻辑。
    function syncHidden() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let code = '';
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        digits.forEach(d => { code += d.value; });
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hiddenInput.value = code;
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
            syncHidden();
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
            syncHidden();
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

// 逐行注释：定义 `initSendCodeButton` 函数，封装页面交互、请求或状态更新逻辑。
function initSendCodeButton() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = document.getElementById('send-code-btn');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnText = document.getElementById('send-btn-text');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnIcon = document.getElementById('send-btn-icon');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const emailInput = document.getElementById('email');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const codeSentTip = document.getElementById('code-sent-tip');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const sentEmailDisplay = document.getElementById('sent-email-display');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const countdownBadge = document.getElementById('countdown-badge');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn || !emailInput) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    btn.addEventListener('click', async () => {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const email = emailInput.value.trim();
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!email) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            emailInput.focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

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
            const csrfMeta = document.querySelector('meta[name="csrf-token"]');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const headers = { 'Content-Type': 'application/json' };
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const csrfToken = window.authCsrfToken || (csrfMeta && csrfMeta.content) || '';
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (csrfToken) headers['X-CSRF-Token'] = csrfToken;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch('/send-verification-code', {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers,
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({ email, check_unique: true })
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (codeSentTip) codeSentTip.classList.remove('hidden');
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (sentEmailDisplay) sentEmailDisplay.textContent = email;
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

// 逐行注释：定义 `openTermsModal` 函数，封装页面交互、请求或状态更新逻辑。
function openTermsModal(event) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (event) event.preventDefault();
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('termsModal');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.remove('hidden');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `closeTermsModal` 函数，封装页面交互、请求或状态更新逻辑。
function closeTermsModal() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('termsModal');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.add('hidden');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `openRulesModal` 函数，封装页面交互、请求或状态更新逻辑。
function openRulesModal(event) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (event) event.preventDefault();
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('rulesModal');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.remove('hidden');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `closeRulesModal` 函数，封装页面交互、请求或状态更新逻辑。
function closeRulesModal() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('rulesModal');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.add('hidden');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.openTermsModal = openTermsModal;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.closeTermsModal = closeTermsModal;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.openRulesModal = openRulesModal;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.closeRulesModal = closeRulesModal;
