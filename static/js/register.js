document.addEventListener('DOMContentLoaded', function () {

    // ==================== 密码显示切换 ====================
    document.querySelectorAll('[data-password-toggle]').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            if (!input) return;
            const visible = input.type === 'text';
            input.type = visible ? 'password' : 'text';
            btn.textContent = visible ? '显示' : '隐藏';
            btn.setAttribute('aria-pressed', String(!visible));
            btn.setAttribute('aria-label', (visible ? '显示' : '隐藏') + (targetId === 'confirm_password' ? '确认密码' : '密码'));
        });
    });

    // ==================== OTP 6格联动 ====================
    const otpDigits = Array.from(document.querySelectorAll('.otp-digit'));
    const hiddenCode = document.getElementById('verification_code');

    function syncHidden() {
        hiddenCode.value = otpDigits.map(i => i.value).join('');
    }

    otpDigits.forEach(function (box, idx) {
        // 只允许输入数字
        box.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace') {
                if (!box.value && idx > 0) {
                    otpDigits[idx - 1].value = '';
                    otpDigits[idx - 1].focus();
                } else {
                    box.value = '';
                }
                syncHidden();
                e.preventDefault();
                return;
            }
            if (e.key === 'ArrowLeft' && idx > 0) { otpDigits[idx - 1].focus(); e.preventDefault(); return; }
            if (e.key === 'ArrowRight' && idx < otpDigits.length - 1) { otpDigits[idx + 1].focus(); e.preventDefault(); return; }
        });

        box.addEventListener('input', function () {
            // 只保留最后输入的数字字符
            const digit = box.value.replace(/\D/g, '').slice(-1);
            box.value = digit;
            syncHidden();
            if (digit && idx < otpDigits.length - 1) {
                otpDigits[idx + 1].focus();
            }
        });

        // 粘贴整个验证码
        box.addEventListener('paste', function (e) {
            e.preventDefault();
            const text = (e.clipboardData || window.clipboardData).getData('text').replace(/\D/g, '');
            if (!text) return;
            text.split('').slice(0, otpDigits.length).forEach(function (ch, i) {
                if (otpDigits[i]) otpDigits[i].value = ch;
            });
            syncHidden();
            const nextEmpty = otpDigits.findIndex(b => !b.value);
            (nextEmpty >= 0 ? otpDigits[nextEmpty] : otpDigits[otpDigits.length - 1]).focus();
        });

        // 点击时选中内容，方便重输
        box.addEventListener('focus', function () { box.select(); });
    });

    // ==================== 发送验证码 ====================
    const sendCodeBtn = document.getElementById('send-code-btn');
    const sendBtnText = document.getElementById('send-btn-text');
    const sendBtnIcon = document.getElementById('send-btn-icon');
    const emailInput = document.getElementById('email');
    const codeSentTip = document.getElementById('code-sent-tip');
    const sentEmailDisplay = document.getElementById('sent-email-display');
    const countdownBadge = document.getElementById('countdown-badge');

    // 如果邮箱已预填（服务端回传），提示用户可重新发送验证码
    if (emailInput && emailInput.value.trim()) {
        codeSentTip.classList.remove('hidden');
        sentEmailDisplay.textContent = emailInput.value.trim();
        countdownBadge.textContent = '';
        sendBtnText.textContent = '重新发送';
    }

    let countdownTimer = null;

    function startCountdown(seconds) {
        let remaining = seconds;

        function tick() {
            countdownBadge.textContent = remaining + 's 后重发';
            if (remaining <= 0) {
                clearInterval(countdownTimer);
                sendCodeBtn.disabled = false;
                sendBtnIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>';
                sendBtnText.textContent = '重新发送';
                countdownBadge.textContent = '';
            }
            remaining--;
        }

        tick();
        countdownTimer = setInterval(tick, 1000);
    }

    if (sendCodeBtn) {
        sendCodeBtn.addEventListener('click', async function () {
            const email = emailInput.value.trim();

            if (!email) {
                showToast('请先输入邮箱地址', 'warning');
                emailInput.focus();
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                showToast('请输入有效的邮箱地址', 'warning');
                emailInput.focus();
                return;
            }

            sendCodeBtn.disabled = true;
            sendBtnText.textContent = '发送中…';
            sendBtnIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>';

            try {
                const res = await fetch('/send-verification-code', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email })
                });
                const data = await res.json();

                if (data.success) {
                    showToast('验证码已发送，请查收邮件 ✓', 'success');
                    sentEmailDisplay.textContent = email;
                    codeSentTip.classList.remove('hidden');
                    otpDigits[0].focus();
                    startCountdown(60);
                } else {
                    showToast(data.message, 'error');
                    sendCodeBtn.disabled = false;
                    sendBtnText.textContent = '发送验证码';
                    sendBtnIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>';
                }
            } catch {
                showToast('发送失败，请检查网络连接后重试', 'error');
                sendCodeBtn.disabled = false;
                sendBtnText.textContent = '发送验证码';
                sendBtnIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>';
            }
        });
    }

    // ==================== 表单提交验证 ====================
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            // 提交前重新从格子收集，确保值最新
            const code = otpDigits.map(i => i.value.trim()).join('');
            hiddenCode.value = code;

            const studentId = document.getElementById('student_id').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            const agreeTerms = document.getElementById('agree_terms');

            if (!/^\d{13}$/.test(studentId)) {
                e.preventDefault();
                showToast('请输入13位纯数字学号', 'warning');
                document.getElementById('student_id').focus();
                return;
            }
            if (password !== confirmPassword) {
                e.preventDefault();
                showToast('两次输入的密码不一致，请重新输入', 'error');
                document.getElementById('confirm_password').focus();
                return;
            }
            if (!/^\d{6}$/.test(code)) {
                e.preventDefault();
                showToast('请输入完整的6位验证码', 'warning');
                otpDigits[0].focus();
                return;
            }
            if (agreeTerms && !agreeTerms.checked) {
                e.preventDefault();
                showToast('请先阅读并同意服务协议与用户规则', 'warning');
                agreeTerms.closest('label').classList.add('ring-2', 'ring-pink-400', 'ring-offset-2');
                setTimeout(() => agreeTerms.closest('label').classList.remove('ring-2', 'ring-pink-400', 'ring-offset-2'), 2000);
                return;
            }
        });
    }
});

// ==================== 服务协议 / 用户规则弹窗 ====================
function openTermsModal(e) { e.preventDefault(); document.getElementById('termsModal').classList.remove('hidden'); }
function closeTermsModal() { document.getElementById('termsModal').classList.add('hidden'); }
function openRulesModal(e) { e.preventDefault(); document.getElementById('rulesModal').classList.remove('hidden'); }
function closeRulesModal() { document.getElementById('rulesModal').classList.add('hidden'); }

document.addEventListener('DOMContentLoaded', function () {
    ['termsModal', 'rulesModal'].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', function (e) { if (e.target === el) el.classList.add('hidden'); });
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeTermsModal(); closeRulesModal(); }
    });
});
