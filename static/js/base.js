/**
 * 基础全局JavaScript - 图书管理系统
 * 包含移动端菜单、Toast通知、确认弹窗等全局功能
 */

// ==================== 移动端菜单控制 ====================
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (menuBtn && menu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
        });

        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                menu.classList.add('hidden');
            }
        });
    }

    // ==================== 仅在顶部显示导航 ====================
    const header = document.querySelector('header.site-header');
    if (header) {
        let ticking = false;

        const updateHeader = () => {
            const currentY = window.scrollY;

            if (currentY <= 0) {
                header.classList.remove('is-hidden');
            } else {
                header.classList.add('is-hidden');
                if (menu) menu.classList.add('hidden');
            }

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }, { passive: true });
    }
});

// ==================== Toast 通知函数 ====================
function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');

    const typeLabels = {
        success: '成功',
        error: '错误',
        warning: '警告',
        info: '提示'
    };

    const config = {
        success: { bg: 'bg-emerald-500', icon: 'M5 13l4 4L19 7' },
        error: { bg: 'bg-rose-500', icon: 'M6 18L18 6M6 6l12 12' },
        warning: { bg: 'bg-amber-500', icon: 'M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        info: { bg: 'bg-brand-primary', icon: 'M13 16h-1v-4h-1m1-4h.01' }
    };

    const selected = config[type] || config.info;

    toast.className = `pointer-events-auto flex max-w-full items-center gap-4 ${selected.bg} text-white px-4 md:px-6 py-4 rounded-[1.5rem] shadow-2xl transform translate-x-full opacity-0 transition-all duration-500 ease-out w-full md:min-w-[300px] md:w-auto border border-white/20`;
    toast.innerHTML = `
        <div class="flex-shrink-0 bg-white/20 p-1.5 rounded-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="${selected.icon}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/></svg>
        </div>
        <div class="min-w-0 flex-1">
            <p class="text-xs font-bold tracking-widest opacity-70 leading-none mb-1">${escapeHtml(typeLabels[type] || type)}</p>
            <p class="text-sm font-semibold break-words">${escapeHtml(message)}</p>
        </div>
    `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.classList.remove('translate-x-full', 'opacity-0');
    }, 100);

    setTimeout(() => {
        toast.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// ==================== 全局确认弹窗 ====================
function showConfirm(title, message, onConfirm, type = 'warning') {
    if (document.querySelector('.confirm-modal-overlay')) {
        return;
    }

    const colors = {
        warning: 'text-amber-600 bg-amber-50',
        danger: 'text-rose-600 bg-rose-50',
        info: 'text-brand-primary bg-pink-50'
    };
    const btnColors = {
        warning: 'bg-amber-600 hover:bg-amber-700',
        danger: 'bg-rose-600 hover:bg-rose-700',
        info: 'bg-brand-primary hover:bg-brand-deep'
    };

    const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialogId = `confirm-dialog-${Date.now()}`;
    const titleId = `${dialogId}-title`;
    const messageId = `${dialogId}-message`;
    const modal = document.createElement('div');
    modal.className = 'confirm-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    modal.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.18))';
    modal.innerHTML = `
        <div class="bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300" role="dialog" aria-modal="true" aria-labelledby="${titleId}" aria-describedby="${messageId}" tabindex="-1">
            <div class="flex flex-col items-center text-center">
                <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] ${colors[type] || colors.info}">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <h3 id="${titleId}" class="mb-3 text-3xl font-heading font-bold text-brand-deep">${escapeHtml(title)}</h3>
                <p id="${messageId}" class="mb-8 text-sm font-medium leading-relaxed text-brand-deep/60">${escapeHtml(message)}</p>
                <div class="flex w-full gap-4">
                    <button class="cancel-btn flex-1 rounded-2xl py-4 text-sm font-bold text-brand-soft transition-all cursor-pointer hover:bg-white/50">取消</button>
                    <button class="confirm-btn flex-1 rounded-2xl py-4 text-sm font-bold text-white cursor-pointer ${btnColors[type] || btnColors.info}">确认执行</button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    const cancelButton = modal.querySelector('.cancel-btn');
    const confirmButton = modal.querySelector('.confirm-btn');
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function closeModal() {
        document.removeEventListener('keydown', handleKeydown);
        modal.remove();
        if (activeElement && document.contains(activeElement)) {
            activeElement.focus();
        }
    }

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            event.preventDefault();
            closeModal();
            return;
        }

        if (event.key !== 'Tab') {
            return;
        }

        const focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
            .filter((element) => !element.hasAttribute('disabled'));
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (!firstElement || !lastElement) {
            return;
        }

        if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
            return;
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
        }
    }

    cancelButton?.addEventListener('click', closeModal);
    confirmButton?.addEventListener('click', () => {
        closeModal();
        onConfirm();
    });
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    document.addEventListener('keydown', handleKeydown);
    cancelButton?.focus();
}

// ==================== 通用 fetch 封装 ====================
// 发起 POST 请求，自动带上 XHR header；body 可为 FormData / object / undefined
async function postJson(url, body) {
    const init = {
        method: 'POST',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-Token': window.adminConfig?.csrfToken || window.borrowModalConfig?.csrfToken || '',
        },
    };
    if (body instanceof FormData) {
        init.body = body;
    } else if (body && typeof body === 'object') {
        init.headers['Content-Type'] = 'application/json';
        init.body = JSON.stringify(body);
    }
    const resp = await fetch(url, init);
    let data = {};
    try { data = await resp.json(); } catch (_) {}
    return { ok: resp.ok, status: resp.status, data };
}

// 在异步操作期间禁用按钮并显示文字，结束后恢复原 HTML（出错也恢复）
async function withLoadingBtn(btn, loadingText, asyncFn) {
    if (!btn) return asyncFn();
    const originalHTML = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = loadingText;
    try {
        return await asyncFn();
    } finally {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
    }
}

// ==================== 密码显示/隐藏 ====================
function initPasswordToggles() {
    document.querySelectorAll('[data-password-toggle]').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            if (!input) return;
            const isPassword = input.type === 'password';
            input.type = isPassword ? 'text' : 'password';
            btn.textContent = isPassword ? '隐藏' : '显示';
            btn.setAttribute('aria-pressed', String(isPassword));
        });
    });
}

// ==================== 验证码倒计时 ====================
function startCountdown(btn, btnText, btnIcon, badge) {
    let seconds = 60;
    if (btnIcon) btnIcon.classList.remove('animate-spin');

    function tick() {
        if (seconds <= 0) {
            btn.disabled = false;
            if (btnText) btnText.textContent = '重新发送';
            if (badge) badge.textContent = '';
            return;
        }
        btn.disabled = true;
        if (btnText) btnText.textContent = `${seconds}s`;
        if (badge) badge.textContent = `${seconds}s`;
        seconds--;
        setTimeout(tick, 1000);
    }

    tick();
}

// ==================== Flask Flash 消息处理 ====================
document.addEventListener('DOMContentLoaded', function() {
    const dataElement = document.getElementById('flash-messages-data');
    if (dataElement) {
        try {
            const flashMessages = JSON.parse(dataElement.getAttribute('data-messages'));
            flashMessages.forEach(function(msg) {
                const category = msg[0];
                const message = msg[1];
                const type = category === 'success' ? 'success' : category === 'danger' ? 'error' : category === 'message' ? 'info' : category;
                showToast(message, type);
            });
        } catch (e) {
            console.error('Failed to parse flash messages:', e);
        }
    }
});
