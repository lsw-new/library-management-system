// 块注释内容，用于解释一组前端逻辑或功能区域。
/**
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * 基础全局JavaScript - 图书管理系统
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * 包含移动端菜单、Toast通知、确认弹窗等全局功能
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 */

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== 移动端菜单控制 ====================
// 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const menuBtn = document.getElementById('mobile-menu-btn');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const menu = document.getElementById('mobile-menu');

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (menuBtn && menu) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        menuBtn.addEventListener('click', (e) => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.stopPropagation();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const isOpen = menu.classList.toggle('hidden') === false;
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            menuBtn.classList.toggle('is-open', isOpen);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            menuBtn.setAttribute('aria-expanded', String(isOpen));
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.addEventListener('click', (e) => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                menu.classList.add('hidden');
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                menuBtn.classList.remove('is-open');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                menuBtn.setAttribute('aria-expanded', 'false');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 仅在顶部显示导航 ====================
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const header = document.querySelector('header.site-header');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (header) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let ticking = false;

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const updateHeader = () => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const currentY = window.scrollY;

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (currentY <= 0) {
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                header.classList.remove('is-hidden');
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                header.classList.add('is-hidden');
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (menu) {
                    // 更新元素样式或状态类，驱动页面视觉状态变化。
                    menu.classList.add('hidden');
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (menuBtn) {
                        // 更新元素样式或状态类，驱动页面视觉状态变化。
                        menuBtn.classList.remove('is-open');
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        menuBtn.setAttribute('aria-expanded', 'false');
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // 结束前面打开的代码块、函数调用或对象结构。
            }

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ticking = false;
        // 结束前面打开的代码块、函数调用或对象结构。
        };

        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        window.addEventListener('scroll', () => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!ticking) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.requestAnimationFrame(updateHeader);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                ticking = true;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, { passive: true });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initLogoutConfirm();
// 结束前面打开的代码块、函数调用或对象结构。
});

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== Toast 通知函数 ====================
// 定义 `escapeHtml` 函数，封装页面交互、请求或状态更新逻辑。
function escapeHtml(value) {
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return String(value)
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        .replaceAll('&', '&amp;')
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        .replaceAll('<', '&lt;')
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        .replaceAll('>', '&gt;')
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        .replaceAll('"', '&quot;')
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        .replaceAll("'", '&#39;');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `showToast` 函数，封装页面交互、请求或状态更新逻辑。
function showToast(message, type = 'success') {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const container = document.getElementById('toast-container');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!container) return;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const toast = document.createElement('div');

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const typeLabels = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        success: '成功',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        error: '错误',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        warning: '警告',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        info: '提示'
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const config = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        success: { bg: 'bg-emerald-500', icon: 'M5 13l4 4L19 7' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        error: { bg: 'bg-rose-500', icon: 'M6 18L18 6M6 6l12 12' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        warning: { bg: 'bg-amber-500', icon: 'M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        info: { bg: 'bg-brand-primary', icon: 'M13 16h-1v-4h-1m1-4h.01' }
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const selected = config[type] || config.info;

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    toast.className = `pointer-events-auto flex max-w-full items-center gap-4 ${selected.bg} text-white px-4 md:px-6 py-4 rounded-[1.5rem] shadow-2xl transform translate-x-full opacity-0 transition-all duration-500 ease-out w-full md:min-w-[300px] md:w-auto border border-white/20`;
    // 写入页面内容，让界面展示最新数据或提示文案。
    toast.innerHTML = `
        <div class="flex-shrink-0 bg-white/20 p-1.5 rounded-lg">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="${selected.icon}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"/></svg>
        </div>
        <div class="min-w-0 flex-1">
            <p class="text-xs font-bold tracking-widest opacity-70 leading-none mb-1">${escapeHtml(typeLabels[type] || type)}</p>
            <p class="text-sm font-semibold break-words">${escapeHtml(message)}</p>
        </div>
    `;

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    container.appendChild(toast);
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    setTimeout(() => {
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        toast.classList.remove('translate-x-full', 'opacity-0');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 100);

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    setTimeout(() => {
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        toast.classList.add('translate-x-full', 'opacity-0');
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        setTimeout(() => toast.remove(), 500);
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 4000);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== 全局确认弹窗 ====================
// 定义 `showConfirm` 函数，封装页面交互、请求或状态更新逻辑。
function showConfirm(title, message, onConfirm, type = 'warning', options = {}) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.querySelector('.confirm-modal-overlay')) {
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return Promise.resolve(false);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const opts = typeof title === 'object'
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        ? { ...title }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        : { title, message, onConfirm, type, ...options };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmTitle = opts.title || '确认操作';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmMessage = opts.message || '';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmType = opts.type || type || 'warning';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmText = opts.confirmText || '确认执行';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const cancelText = opts.cancelText || '取消';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmCallback = typeof opts.onConfirm === 'function' ? opts.onConfirm : onConfirm;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const colors = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        warning: 'text-amber-600 bg-amber-50',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        danger: 'text-rose-600 bg-rose-50',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        success: 'text-emerald-600 bg-emerald-50',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        info: 'text-brand-primary bg-pink-50'
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btnColors = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        warning: 'bg-amber-600 hover:bg-amber-700',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        danger: 'bg-rose-600 hover:bg-rose-700',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        success: 'bg-emerald-600 hover:bg-emerald-700',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        info: 'bg-brand-primary hover:bg-brand-deep'
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const dialogId = `confirm-dialog-${Date.now()}`;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const titleId = `${dialogId}-title`;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const messageId = `${dialogId}-message`;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const modal = document.createElement('div');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    modal.className = 'confirm-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    modal.style.background = 'linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.18))';
    // 写入页面内容，让界面展示最新数据或提示文案。
    modal.innerHTML = `
        <div class="bg-white w-full max-w-sm rounded-[3rem] p-8 shadow-2xl animate-in zoom-in-95 duration-300" role="dialog" aria-modal="true" aria-labelledby="${titleId}" aria-describedby="${messageId}" tabindex="-1">
            <div class="flex flex-col items-center text-center">
                <div class="mb-6 flex h-20 w-20 items-center justify-center rounded-[2rem] ${colors[confirmType] || colors.info}">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <h3 id="${titleId}" class="mb-3 text-3xl font-heading font-bold text-brand-deep">${escapeHtml(confirmTitle)}</h3>
                <p id="${messageId}" class="mb-8 text-sm font-medium leading-relaxed text-brand-deep/60">${escapeHtml(confirmMessage)}</p>
                <div class="flex w-full gap-4">
                    <button class="cancel-btn flex-1 rounded-2xl py-4 text-sm font-bold text-brand-soft transition-all cursor-pointer hover:bg-white/50">取消</button>
                    <button class="confirm-btn flex-1 rounded-2xl py-4 text-sm font-bold text-white cursor-pointer ${btnColors[type] || btnColors.info}">确认执行</button>
                </div>
            </div>
        </div>
    `;

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    document.body.appendChild(modal);

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const cancelButton = modal.querySelector('.cancel-btn');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmButton = modal.querySelector('.confirm-btn');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const focusableSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    // 定义 `closeModal` 函数，封装页面交互、请求或状态更新逻辑。
    function closeModal() {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        document.removeEventListener('keydown', handleKeydown);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        modal.remove();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (activeElement && document.contains(activeElement)) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            activeElement.focus();
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `handleKeydown` 函数，封装页面交互、请求或状态更新逻辑。
    function handleKeydown(event) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (event.key === 'Escape') {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            event.preventDefault();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            closeModal();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (event.key !== 'Tab') {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const focusableElements = Array.from(modal.querySelectorAll(focusableSelector))
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .filter((element) => !element.hasAttribute('disabled'));
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const firstElement = focusableElements[0];
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const lastElement = focusableElements[focusableElements.length - 1];

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!firstElement || !lastElement) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (event.shiftKey && document.activeElement === firstElement) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            event.preventDefault();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            lastElement.focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!event.shiftKey && document.activeElement === lastElement) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            event.preventDefault();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            firstElement.focus();
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    cancelButton?.addEventListener('click', closeModal);
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    confirmButton?.addEventListener('click', () => {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        closeModal();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        onConfirm();
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    modal.addEventListener('click', (event) => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (event.target === modal) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            closeModal();
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('keydown', handleKeydown);
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    cancelButton?.focus();
// 结束前面打开的代码块、函数调用或对象结构。
}

// 调用统一提示或弹窗能力，向用户反馈操作结果。
showConfirm = window.showConfirm = function appShowConfirm(title, message, onConfirm, type = 'warning', options = {}) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.querySelector('.confirm-modal-overlay')) return Promise.resolve(false);
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const opts = typeof title === 'object' ? { ...title } : { title, message, onConfirm, type, ...options };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const dialogType = opts.type || type || 'warning';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const palette = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        warning: { icon: '!', bg: '#fffbeb', fg: '#d97706', btn: 'linear-gradient(135deg,#f59e0b,#d97706)' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        danger: { icon: '!', bg: '#fff1f2', fg: '#e11d48', btn: 'linear-gradient(135deg,#f43f5e,#be123c)' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        success: { icon: '✓', bg: '#ecfdf5', fg: '#059669', btn: 'linear-gradient(135deg,#10b981,#059669)' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        info: { icon: 'i', bg: '#fdf2f8', fg: 'var(--color-brand-primary)', btn: 'linear-gradient(135deg,var(--color-brand-primary),var(--color-brand-accent))' }
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const selected = palette[dialogType] || palette.info;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const activeElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const overlay = document.createElement('div');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    overlay.className = 'confirm-modal-overlay app-dialog-overlay';
    // 写入页面内容，让界面展示最新数据或提示文案。
    overlay.innerHTML = `
        <section class="app-dialog-card" role="dialog" aria-modal="true" tabindex="-1">
            <div class="app-dialog-icon" style="background:${selected.bg};color:${selected.fg}">${escapeHtml(selected.icon)}</div>
            <h3 class="app-dialog-title">${escapeHtml(opts.title || '确认操作')}</h3>
            <p class="app-dialog-message">${escapeHtml(opts.message || '')}</p>
            <div class="app-dialog-actions">
                <button type="button" class="app-dialog-btn is-secondary" data-dialog-cancel>${escapeHtml(opts.cancelText || '取消')}</button>
                <button type="button" class="app-dialog-btn is-primary" style="background:${selected.btn}" data-dialog-confirm>${escapeHtml(opts.confirmText || '确认执行')}</button>
            </div>
        </section>
    `;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    document.body.appendChild(overlay);
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    return new Promise((resolve) => {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const card = overlay.querySelector('.app-dialog-card');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cancelBtn = overlay.querySelector('[data-dialog-cancel]');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const confirmBtn = overlay.querySelector('[data-dialog-confirm]');
        // 定义 `close` 函数，封装页面交互、请求或状态更新逻辑。
        function close(result) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            document.removeEventListener('keydown', onKeydown);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            overlay.remove();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (activeElement && document.contains(activeElement)) activeElement.focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            resolve(result);
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 定义 `onKeydown` 函数，封装页面交互、请求或状态更新逻辑。
        function onKeydown(event) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (event.key === 'Escape') {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                event.preventDefault();
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                close(false);
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        cancelBtn?.addEventListener('click', () => close(false));
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        confirmBtn?.addEventListener('click', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            close(true);
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (typeof opts.onConfirm === 'function') opts.onConfirm();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        overlay.addEventListener('click', (event) => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (event.target === overlay) close(false);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        document.addEventListener('keydown', onKeydown);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        card?.focus();
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
};

// 定义 `showNotice` 函数，封装页面交互、请求或状态更新逻辑。
function showNotice(title, message, type = 'success', actions = []) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const palette = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        success: { icon: '✓', bg: '#ecfdf5', fg: '#059669', accent: 'linear-gradient(135deg,#10b981,#059669)' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        warning: { icon: '!', bg: '#fffbeb', fg: '#d97706', accent: 'linear-gradient(135deg,#f59e0b,#d97706)' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        danger: { icon: '!', bg: '#fff1f2', fg: '#e11d48', accent: 'linear-gradient(135deg,#f43f5e,#be123c)' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        info: { icon: 'i', bg: '#fdf2f8', fg: 'var(--color-brand-primary)', accent: 'linear-gradient(135deg,var(--color-brand-primary),var(--color-brand-accent))' }
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const selected = palette[type] || palette.info;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const normalizedActions = actions.length ? actions : [{ label: '知道了', primary: true }];
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const overlay = document.createElement('div');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    overlay.className = 'app-dialog-overlay app-notice-overlay';
    // 写入页面内容，让界面展示最新数据或提示文案。
    overlay.innerHTML = `
        <section class="app-dialog-card app-notice-card" role="dialog" aria-modal="true" tabindex="-1">
            <div class="app-dialog-icon" style="background:${selected.bg};color:${selected.fg}">${escapeHtml(selected.icon)}</div>
            <h3 class="app-dialog-title">${escapeHtml(title || '提示')}</h3>
            <p class="app-dialog-message">${escapeHtml(message || '')}</p>
            <div class="app-dialog-actions">
                ${normalizedActions.map((action, index) => `
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    <button type="button" class="app-dialog-btn ${action.primary ? 'is-primary' : 'is-secondary'}" ${action.primary ? `style="background:${selected.accent}"` : ''} data-notice-action="${index}">
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        ${escapeHtml(action.label || action.text || '确定')}
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    </button>
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                `).join('')}
            </div>
        </section>
    `;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    document.body.appendChild(overlay);
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const close = () => overlay.remove();
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.addEventListener('click', (event) => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (event.target === overlay) close();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const button = event.target.closest('[data-notice-action]');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!button) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const action = normalizedActions[Number(button.dataset.noticeAction)] || {};
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        close();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (action.href) window.location.href = action.href;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (typeof action.onClick === 'function') action.onClick();
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    overlay.querySelector('.app-dialog-card')?.focus();
// 结束前面打开的代码块、函数调用或对象结构。
}
// 调用统一提示或弹窗能力，向用户反馈操作结果。
window.showNotice = showNotice;

// 定义 `initLogoutConfirm` 函数，封装页面交互、请求或状态更新逻辑。
function initLogoutConfirm() {
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('click', function(event) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const link = event.target.closest('a[href]');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!link || link.dataset.noConfirm === 'true') return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const url = new URL(link.href, window.location.href);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (url.pathname !== '/logout') return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        event.preventDefault();
        // 调用统一提示或弹窗能力，向用户反馈操作结果。
        showConfirm('退出登录', '确认退出当前账号吗？退出后需要重新登录才能继续借阅和查看记录。', function() {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.location.href = link.href;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, 'warning', { confirmText: '退出登录', cancelText: '继续浏览' });
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
}

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== 通用 fetch 封装 ====================
// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// 发起 POST 请求，自动带上 XHR header；body 可为 FormData / object / undefined
// 定义 `postJson` 函数，封装页面交互、请求或状态更新逻辑。
async function postJson(url, body) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const init = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        method: 'POST',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        headers: {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            'X-Requested-With': 'XMLHttpRequest',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            'X-CSRF-Token': window.adminConfig?.csrfToken || window.borrowModalConfig?.csrfToken || '',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        },
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (body instanceof FormData) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        init.body = body;
    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else if (body && typeof body === 'object') {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        init.headers['Content-Type'] = 'application/json';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        init.body = JSON.stringify(body);
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const resp = await fetch(url, init);
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let data = {};
    // 处理异步流程，等待接口、动画或浏览器任务完成。
    try { data = await resp.json(); } catch (_) {}
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return { ok: resp.ok, status: resp.status, data };
// 结束前面打开的代码块、函数调用或对象结构。
}

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// 在异步操作期间禁用按钮并显示文字，结束后恢复原 HTML（出错也恢复）
// 定义 `withLoadingBtn` 函数，封装页面交互、请求或状态更新逻辑。
async function withLoadingBtn(btn, loadingText, asyncFn) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn) return asyncFn();
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const originalHTML = btn.innerHTML;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    btn.disabled = true;
    // 写入页面内容，让界面展示最新数据或提示文案。
    btn.textContent = loadingText;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return await asyncFn();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        btn.disabled = false;
        // 写入页面内容，让界面展示最新数据或提示文案。
        btn.innerHTML = originalHTML;
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== 密码显示/隐藏 ====================
// 定义 `initPasswordToggles` 函数，封装页面交互、请求或状态更新逻辑。
function initPasswordToggles() {
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    document.querySelectorAll('[data-password-toggle]').forEach(btn => {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        btn.addEventListener('click', () => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const targetId = btn.dataset.target;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const input = document.getElementById(targetId);
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!input) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const isPassword = input.type === 'password';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.type = isPassword ? 'text' : 'password';
            // 写入页面内容，让界面展示最新数据或提示文案。
            btn.textContent = isPassword ? '隐藏' : '显示';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.setAttribute('aria-pressed', String(isPassword));
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
}

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== 验证码倒计时 ====================
// 定义 `startCountdown` 函数，封装页面交互、请求或状态更新逻辑。
function startCountdown(btn, btnText, btnIcon, badge) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let seconds = 60;
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (btnIcon) btnIcon.classList.remove('animate-spin');

    // 定义 `tick` 函数，封装页面交互、请求或状态更新逻辑。
    function tick() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (seconds <= 0) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.disabled = false;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btnText) btnText.textContent = '重新发送';
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (badge) badge.textContent = '';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        btn.disabled = true;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btnText) btnText.textContent = `${seconds}s`;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badge) badge.textContent = `${seconds}s`;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        seconds--;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setTimeout(tick, 1000);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    tick();
// 结束前面打开的代码块、函数调用或对象结构。
}

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== Flask Flash 消息处理 ====================
// 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const dataElement = document.getElementById('flash-messages-data');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dataElement) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const flashMessages = JSON.parse(dataElement.getAttribute('data-messages'));
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            flashMessages.forEach(function(msg) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const category = msg[0];
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const message = msg[1];
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const type = category === 'success' ? 'success' : category === 'danger' ? 'error' : category === 'message' ? 'info' : category;
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(message, type);
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            console.error('Failed to parse flash messages:', e);
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
});
