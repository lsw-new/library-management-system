// 共享工具：消息控制台、状态徽章、按钮 loading、HTML 转义、延时辅助
// 由 init-db.js（页面1：连接配置）和 init-db-actions.js（页面2：初始化操作）共用

const messageVariants = {
    info: {
        title: '系统提示',
        wrapper: 'border-sky-100 bg-sky-50/80 text-sky-800',
        icon: 'bg-sky-500/10 text-sky-600',
        svg: '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    },
    success: {
        title: '操作成功',
        wrapper: 'border-emerald-100 bg-emerald-50/80 text-emerald-800',
        icon: 'bg-emerald-500/10 text-emerald-600',
        svg: '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>'
    },
    error: {
        title: '操作失败',
        wrapper: 'border-rose-100 bg-rose-50/80 text-rose-800',
        icon: 'bg-rose-500/10 text-rose-600',
        svg: '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z" /></svg>'
    }
};

const pageStatusToneMap = {
    pending: {
        badge: 'bg-amber-50 text-amber-700',
        ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75',
        dot: 'relative inline-flex h-2 w-2 rounded-full bg-amber-500'
    },
    ready: {
        badge: 'bg-sky-50 text-sky-700',
        ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75',
        dot: 'relative inline-flex h-2 w-2 rounded-full bg-sky-500'
    },
    success: {
        badge: 'bg-emerald-50 text-emerald-700',
        ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75',
        dot: 'relative inline-flex h-2 w-2 rounded-full bg-emerald-500'
    }
};

function showMessage(consoleEls, message, type = 'info', customTitle = '') {
    const variant = messageVariants[type] || messageVariants.info;
    consoleEls.root.className = `rounded-2xl border p-4 mb-5 ${variant.wrapper}`;
    consoleEls.root.classList.remove('hidden');
    consoleEls.root.setAttribute('role', type === 'error' ? 'alert' : 'status');
    consoleEls.icon.className = `mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${variant.icon}`;
    consoleEls.icon.innerHTML = variant.svg;
    consoleEls.title.textContent = customTitle || variant.title;
    consoleEls.text.textContent = message;
}

function setPageStatus(statusEls, text, tone = 'pending') {
    const currentTone = pageStatusToneMap[tone] || pageStatusToneMap.pending;
    statusEls.badge.className = `inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-black ${currentTone.badge}`;
    statusEls.ping.className = currentTone.ping;
    statusEls.dot.className = currentTone.dot;
    statusEls.text.textContent = text;
}

function setButtonLoading(button, isLoading, loadingText) {
    if (!button) return;
    if (!button.dataset.defaultHtml) {
        button.dataset.defaultHtml = button.innerHTML;
    }
    button.disabled = isLoading;
    button.setAttribute('aria-disabled', String(isLoading));
    if (isLoading) {
        button.innerHTML = `<span class="inline-flex items-center gap-2"><svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg><span>${loadingText}</span></span>`;
        return;
    }
    button.innerHTML = button.dataset.defaultHtml;
}

function wait(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function keepLoadingVisible(startedAt, minimumDuration = 600) {
    const elapsed = Date.now() - startedAt;
    const remaining = minimumDuration - elapsed;
    if (remaining > 0) {
        await wait(remaining);
    }
}
