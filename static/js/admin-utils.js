// 定义 `getAdminCsrfHeaders` 函数，封装页面交互、请求或状态更新逻辑。
function getAdminCsrfHeaders(headers = {}) {
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return { ...headers, 'X-CSRF-Token': window.adminConfig?.csrfToken || '' };
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `adminPostInit` 函数，封装页面交互、请求或状态更新逻辑。
function adminPostInit(init = {}) {
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return { ...init, method: 'POST', headers: getAdminCsrfHeaders(init.headers || {}) };
// 结束前面打开的代码块、函数调用或对象结构。
}

// 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
let lastModalTrigger = null;

// 定义 `getModalFocusableElements` 函数，封装页面交互、请求或状态更新逻辑。
function getModalFocusableElements(modal) {
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return Array.from(
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        modal.querySelectorAll('a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    ).filter(el => !el.disabled && el.offsetParent !== null);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `openModal` 函数，封装页面交互、请求或状态更新逻辑。
function openModal(modal) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!modal) return;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    lastModalTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    modal.classList.remove('hidden');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const focusable = getModalFocusableElements(modal);
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (focusable.length > 0) focusable[0].focus();
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `closeModal` 函数，封装页面交互、请求或状态更新逻辑。
function closeModal(modal) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!modal || modal.classList.contains('hidden')) return;
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    modal.classList.add('hidden');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (lastModalTrigger && document.contains(lastModalTrigger)) lastModalTrigger.focus();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    lastModalTrigger = null;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `trapModalFocus` 函数，封装页面交互、请求或状态更新逻辑。
function trapModalFocus(e, modal) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!modal || e.key !== 'Tab' || modal.classList.contains('hidden')) return;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const focusable = getModalFocusableElements(modal);
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (focusable.length === 0) return;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const first = focusable[0];
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const last  = focusable[focusable.length - 1];
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!modal.contains(document.activeElement)) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        e.preventDefault();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        first.focus();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (e.shiftKey && document.activeElement === first) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        e.preventDefault();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        last.focus();
    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else if (!e.shiftKey && document.activeElement === last) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        e.preventDefault();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        first.focus();
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}
