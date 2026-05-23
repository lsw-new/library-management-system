document.addEventListener('DOMContentLoaded', () => {
    initOtpInputs();
    initPasswordToggles();
    initSendCodeButton();
    initVerifyCodeButton();
});


function initOtpInputs() {
    const digits = document.querySelectorAll('.otp-digit');
    if (!digits.length) return;

    function getCode() {
        let code = '';
        digits.forEach(d => { code += d.value; });
        return code;
    }

    function updateVerifyButton() {
        const btn = document.getElementById('verify-code-btn');
        if (btn) btn.disabled = getCode().length !== digits.length;
    }

    digits.forEach((input, idx) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '').slice(0, 1);
            updateVerifyButton();
            if (input.value && idx < digits.length - 1) {
                digits[idx + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !input.value && idx > 0) {
                digits[idx - 1].focus();
            }
        });

        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasted = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, digits.length);
            pasted.split('').forEach((ch, i) => {
                if (digits[i]) digits[i].value = ch;
            });
            updateVerifyButton();
            const nextEmpty = Array.from(digits).findIndex(d => !d.value);
            (digits[nextEmpty >= 0 ? nextEmpty : digits.length - 1]).focus();
        });
    });
}

function getCsrfToken() {
    return window.authCsrfToken || '';
}

function initSendCodeButton() {
    const btn = document.getElementById('send-code-btn');
    const btnText = document.getElementById('send-btn-text');
    const btnIcon = document.getElementById('send-btn-icon');
    const codeSentTip = document.getElementById('code-sent-tip');
    const countdownBadge = document.getElementById('countdown-badge');

    if (!btn) return;

    btn.addEventListener('click', async () => {
        btn.disabled = true;
        if (btnText) btnText.textContent = '发送中...';
        if (btnIcon) btnIcon.classList.add('animate-spin');

        try {
            const resp = await fetch('/forgot-password/send-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': getCsrfToken()
                },
                body: JSON.stringify({})
            });
            const data = await resp.json();

            if (data.success) {
                if (codeSentTip) codeSentTip.classList.remove('hidden');
                startCountdown(btn, btnText, btnIcon, countdownBadge);
            } else {
                if (btnText) btnText.textContent = '发送验证码';
                if (btnIcon) btnIcon.classList.remove('animate-spin');
                btn.disabled = false;
                showToast(data.message || '发送失败', 'error');
            }
        } catch {
            if (btnText) btnText.textContent = '发送验证码';
            if (btnIcon) btnIcon.classList.remove('animate-spin');
            btn.disabled = false;
            showToast('网络错误，请稍后重试', 'error');
        }
    });
}

function initVerifyCodeButton() {
    const btn = document.getElementById('verify-code-btn');
    const btnText = document.getElementById('verify-btn-text');
    if (!btn) return;

    btn.addEventListener('click', async () => {
        const digits = document.querySelectorAll('.otp-digit');
        let code = '';
        digits.forEach(d => { code += d.value; });

        if (code.length !== digits.length) return;

        btn.disabled = true;
        if (btnText) btnText.textContent = '验证中...';

        try {
            const resp = await fetch('/forgot-password/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': getCsrfToken()
                },
                body: JSON.stringify({ code })
            });
            const data = await resp.json();

            if (data.success) {
                const verifySection = document.getElementById('verify-section');
                const passwordSection = document.getElementById('password-section');
                if (verifySection) verifySection.classList.add('hidden');
                if (passwordSection) passwordSection.classList.remove('hidden');
            } else {
                btn.disabled = false;
                if (btnText) btnText.textContent = '验证';
                showToast(data.message || '验证失败', 'error');
            }
        } catch {
            btn.disabled = false;
            if (btnText) btnText.textContent = '验证';
            showToast('网络错误，请稍后重试', 'error');
        }
    });
}
