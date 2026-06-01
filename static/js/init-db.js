// 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const dom = {};
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `setupHeaders` 函数，封装页面交互、请求或状态更新逻辑。
function setupHeaders(headers = {}) {
    // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
    return { ...headers, 'X-CSRF-Token': window.setupConfig?.csrfToken || '' };
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('DOMContentLoaded', () => {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    cacheDom();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindEvents();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    syncDbName();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    updateChecklist();
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `cacheDom` 函数，封装页面交互、请求或状态更新逻辑。
function cacheDom() {
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.form = document.getElementById('dbConfigForm');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbHost = document.getElementById('dbHost');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbPort = document.getElementById('dbPort');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbUser = document.getElementById('dbUser');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbName = document.getElementById('dbName');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbPass = document.getElementById('dbPass');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.heroDbName = document.getElementById('heroDbName');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.consoleEls = {
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        root: document.getElementById('messageConsole'),
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        icon: document.getElementById('messageConsoleIcon'),
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        title: document.getElementById('messageConsoleTitle'),
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        text: document.getElementById('messageConsoleText')
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.statusEls = {
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        badge: document.getElementById('pageStatusBadge'),
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        ping: document.getElementById('pageStatusPing'),
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        dot: document.getElementById('pageStatusDot'),
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        text: document.getElementById('pageStatusText')
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.testConnectionButton = document.getElementById('testConnectionButton');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.proceedSection = document.getElementById('proceedSection');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.proceedPending = document.getElementById('proceedPending');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.togglePassBtn = document.getElementById('togglePassBtn');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.passEyeOff = document.getElementById('passEyeOff');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.passEyeOn = document.getElementById('passEyeOn');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.checkStep1 = document.getElementById('checkStep1');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.checkStep2 = document.getElementById('checkStep2');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.checkStep3 = document.getElementById('checkStep3');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `bindEvents` 函数，封装页面交互、请求或状态更新逻辑。
function bindEvents() {
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    dom.form?.addEventListener('submit', (event) => {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        event.preventDefault();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        testAndSaveConfig();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    [dom.dbHost, dom.dbPort, dom.dbUser, dom.dbName, dom.dbPass].forEach((field) => {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        field?.addEventListener('input', () => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncDbName();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearFieldError(field);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            hideProceedSection();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateChecklist();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.togglePassBtn?.addEventListener('click', togglePasswordVisibility);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `togglePasswordVisibility` 函数，封装页面交互、请求或状态更新逻辑。
function togglePasswordVisibility() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.dbPass) return;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const isPassword = dom.dbPass.type === 'password';
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.dbPass.type = isPassword ? 'text' : 'password';
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    dom.passEyeOff?.classList.toggle('hidden', !isPassword);
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    dom.passEyeOn?.classList.toggle('hidden', isPassword);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `updateChecklist` 函数，封装页面交互、请求或状态更新逻辑。
function updateChecklist() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const hostFilled = dom.dbHost?.value.trim().length > 0;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const userFilled = dom.dbUser?.value.trim().length > 0;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const passFilled = dom.dbPass?.value.length > 0;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep1, hostFilled && userFilled);
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep2, passFilled);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `setCheckState` 函数，封装页面交互、请求或状态更新逻辑。
function setCheckState(el, checked) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!el) return;
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (checked) {
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.remove('border-pink-200', 'bg-white', 'text-transparent');
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.add('border-emerald-300', 'bg-emerald-500', 'text-white');
    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else {
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.remove('border-emerald-300', 'bg-emerald-500', 'text-white');
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.add('border-pink-200', 'bg-white', 'text-transparent');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `syncDbName` 函数，封装页面交互、请求或状态更新逻辑。
function syncDbName() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const dbName = dom.dbName?.value.trim() || 'library_db';
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.heroDbName) dom.heroDbName.textContent = dbName;
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `getConnectionPayload` 函数，封装页面交互、请求或状态更新逻辑。
function getConnectionPayload() {
    // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
    return {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        host: dom.dbHost.value.trim(),
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        port: dom.dbPort.value.trim(),
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        user: dom.dbUser.value.trim(),
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        password: dom.dbPass.value,
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        database: dom.dbName.value.trim()
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `clearFieldError` 函数，封装页面交互、请求或状态更新逻辑。
function clearFieldError(field) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!field) return;
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    field.removeAttribute('aria-invalid');
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    field.classList.remove('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `setFieldError` 函数，封装页面交互、请求或状态更新逻辑。
function setFieldError(field) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!field) return;
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    field.setAttribute('aria-invalid', 'true');
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    field.classList.add('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `showProceedSection` 函数，封装页面交互、请求或状态更新逻辑。
function showProceedSection() {
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedPending?.classList.add('hidden');
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedSection?.classList.remove('hidden');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep3, true);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `hideProceedSection` 函数，封装页面交互、请求或状态更新逻辑。
function hideProceedSection() {
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedSection?.classList.add('hidden');
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedPending?.classList.remove('hidden');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep3, false);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `testAndSaveConfig` 函数，封装页面交互、请求或状态更新逻辑。
async function testAndSaveConfig() {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    clearFieldError(dom.dbHost);
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    clearFieldError(dom.dbUser);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const data = getConnectionPayload();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!data.host || !data.user) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!data.host) setFieldError(dom.dbHost);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!data.user) setFieldError(dom.dbUser);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '请至少填写数据库主机和用户名，然后再测试连接。', 'error', '缺少必填信息');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.testConnectionButton, true, '正在验证连接...');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在验证连接', 'pending');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    showMessage(dom.consoleEls, '正在验证数据库连接并同步配置，请稍候。', 'info', '正在处理');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    hideProceedSection();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const loadingStartedAt = Date.now();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const response = await fetch('/api/test_connection', {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            body: JSON.stringify(data)
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const result = await response.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!response.ok || !result.success) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '连接验证失败', 'pending');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, result.message || '数据库连接验证失败，请检查配置后重试。', 'error');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (typeof showToast === 'function') {
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(result.message || '数据库连接验证失败', 'error');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '连接验证成功，配置已保存', 'success');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, result.message, 'success', '连接验证成功');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showProceedSection();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (typeof showToast === 'function') {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('数据库验证成功，配置已就绪！', 'success');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch (error) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '连接验证失败', 'pending');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '请求失败，请检查后端服务是否正常。', 'error', '网络请求异常');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(loadingStartedAt);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.testConnectionButton, false, '正在验证连接...');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
