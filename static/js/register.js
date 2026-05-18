document.addEventListener('DOMContentLoaded', () => {
    initOtpInputs();
    initPasswordToggles();
    initSendCodeButton();
});

function initOtpInputs() {
    const digits = document.querySelectorAll('.otp-digit');
    const hiddenInput = document.getElementById('verification_code');
    if (!digits.length || !hiddenInput) return;

    function syncHidden() {
        let code = '';
        digits.forEach(d => { code += d.value; });
        hiddenInput.value = code;
    }

    digits.forEach((input, idx) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/\D/g, '').slice(0, 1);
            syncHidden();
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
            syncHidden();
            const nextEmpty = Array.from(digits).findIndex(d => !d.value);
            (digits[nextEmpty >= 0 ? nextEmpty : digits.length - 1]).focus();
        });
    });
}


function initSendCodeButton() {
    const btn = document.getElementById('send-code-btn');
    const btnText = document.getElementById('send-btn-text');
    const btnIcon = document.getElementById('send-btn-icon');
    const emailInput = document.getElementById('email');
    const codeSentTip = document.getElementById('code-sent-tip');
    const sentEmailDisplay = document.getElementById('sent-email-display');
    const countdownBadge = document.getElementById('countdown-badge');

    if (!btn || !emailInput) return;

    btn.addEventListener('click', async () => {
        const email = emailInput.value.trim();
        if (!email) {
            emailInput.focus();
            return;
        }

        btn.disabled = true;
        if (btnText) btnText.textContent = '发送中...';
        if (btnIcon) btnIcon.classList.add('animate-spin');

        try {
            const csrfMeta = document.querySelector('meta[name="csrf-token"]');
            const headers = { 'Content-Type': 'application/json' };
            const csrfToken = window.authCsrfToken || (csrfMeta && csrfMeta.content) || '';
            if (csrfToken) headers['X-CSRF-Token'] = csrfToken;

            const resp = await fetch('/send-verification-code', {
                method: 'POST',
                headers,
                body: JSON.stringify({ email, check_unique: true })
            });
            const data = await resp.json();

            if (data.success) {
                if (codeSentTip) codeSentTip.classList.remove('hidden');
                if (sentEmailDisplay) sentEmailDisplay.textContent = email;
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

function openTermsModal(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('termsModal');
    if (modal) modal.classList.remove('hidden');
}

function closeTermsModal() {
    const modal = document.getElementById('termsModal');
    if (modal) modal.classList.add('hidden');
}

function openRulesModal(event) {
    if (event) event.preventDefault();
    const modal = document.getElementById('rulesModal');
    if (modal) modal.classList.remove('hidden');
}

function closeRulesModal() {
    const modal = document.getElementById('rulesModal');
    if (modal) modal.classList.add('hidden');
}

window.openTermsModal = openTermsModal;
window.closeTermsModal = closeTermsModal;
window.openRulesModal = openRulesModal;
window.closeRulesModal = closeRulesModal;
