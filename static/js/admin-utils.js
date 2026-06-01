function getAdminCsrfHeaders(headers = {}) {
    return { ...headers, 'X-CSRF-Token': window.adminConfig?.csrfToken || '' };
}

function adminPostInit(init = {}) {
    return { ...init, method: 'POST', headers: getAdminCsrfHeaders(init.headers || {}) };
}

let lastModalTrigger = null;

function getModalFocusableElements(modal) {
    return Array.from(
        modal.querySelectorAll('a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')
    ).filter(el => !el.disabled && el.offsetParent !== null);
}

function openModal(modal) {
    if (!modal) return;
    lastModalTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modal.classList.remove('hidden');
    const focusable = getModalFocusableElements(modal);
    if (focusable.length > 0) focusable[0].focus();
}

function closeModal(modal) {
    if (!modal || modal.classList.contains('hidden')) return;
    modal.classList.add('hidden');
    if (lastModalTrigger && document.contains(lastModalTrigger)) lastModalTrigger.focus();
    lastModalTrigger = null;
}

function trapModalFocus(e, modal) {
    if (!modal || e.key !== 'Tab' || modal.classList.contains('hidden')) return;
    const focusable = getModalFocusableElements(modal);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (!modal.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
        return;
    }
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}
