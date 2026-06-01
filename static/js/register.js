// 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initOtpInputs();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initPasswordToggles();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initSendCodeButton();
// 结束前面打开的代码块、函数调用或对象结构。
});


// 定义 `initOtpInputs` 函数，封装页面交互、请求或状态更新逻辑。
function initOtpInputs() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const digits = document.querySelectorAll('.otp-digit');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const hiddenInput = document.getElementById('verification_code');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!digits.length || !hiddenInput) return;

    // 定义 `syncHidden` 函数，封装页面交互、请求或状态更新逻辑。
    function syncHidden() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let code = '';
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        digits.forEach(d => { code += d.value; });
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hiddenInput.value = code;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    digits.forEach((input, idx) => {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        input.addEventListener('input', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.value = input.value.replace(/\D/g, '').slice(0, 1);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncHidden();
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
            syncHidden();
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

// 定义 `initSendCodeButton` 函数，封装页面交互、请求或状态更新逻辑。
function initSendCodeButton() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = document.getElementById('send-code-btn');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnText = document.getElementById('send-btn-text');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnIcon = document.getElementById('send-btn-icon');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const emailInput = document.getElementById('email');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const codeSentTip = document.getElementById('code-sent-tip');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const sentEmailDisplay = document.getElementById('sent-email-display');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const countdownBadge = document.getElementById('countdown-badge');

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn || !emailInput) return;

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    btn.addEventListener('click', async () => {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const email = emailInput.value.trim();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!email) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            emailInput.focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        btn.disabled = true;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnText) btnText.textContent = '发送中...';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnIcon) btnIcon.classList.add('animate-spin');

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const csrfMeta = document.querySelector('meta[name="csrf-token"]');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const headers = { 'Content-Type': 'application/json' };
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const csrfToken = window.authCsrfToken || (csrfMeta && csrfMeta.content) || '';
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (csrfToken) headers['X-CSRF-Token'] = csrfToken;

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch('/send-verification-code', {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers,
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({ email, check_unique: true })
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (codeSentTip) codeSentTip.classList.remove('hidden');
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (sentEmailDisplay) sentEmailDisplay.textContent = email;
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

// 定义 `openTermsModal` 函数，封装页面交互、请求或状态更新逻辑。
function openTermsModal(event) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (event) event.preventDefault();
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('termsModal');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.remove('hidden');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `closeTermsModal` 函数，封装页面交互、请求或状态更新逻辑。
function closeTermsModal() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('termsModal');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.add('hidden');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `openRulesModal` 函数，封装页面交互、请求或状态更新逻辑。
function openRulesModal(event) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (event) event.preventDefault();
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('rulesModal');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.remove('hidden');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `closeRulesModal` 函数，封装页面交互、请求或状态更新逻辑。
function closeRulesModal() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.getElementById('rulesModal');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (modal) modal.classList.add('hidden');
// 结束前面打开的代码块、函数调用或对象结构。
}

// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.openTermsModal = openTermsModal;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.closeTermsModal = closeTermsModal;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.openRulesModal = openRulesModal;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.closeRulesModal = closeRulesModal;
