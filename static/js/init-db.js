// 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const dom = {};

// 定义 `setupHeaders` 函数，封装页面交互、请求或状态更新逻辑。
function setupHeaders(headers = {}) {
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return { ...headers, 'X-CSRF-Token': window.setupConfig?.csrfToken || '' };
// 结束前面打开的代码块、函数调用或对象结构。
}

// 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('DOMContentLoaded', () => {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    cacheDom();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    bindEvents();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    syncDbName();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    updateChecklist();
// 结束前面打开的代码块、函数调用或对象结构。
});

// 定义 `cacheDom` 函数，封装页面交互、请求或状态更新逻辑。
function cacheDom() {
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.form = document.getElementById('dbConfigForm');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbHost = document.getElementById('dbHost');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbPort = document.getElementById('dbPort');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbUser = document.getElementById('dbUser');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbName = document.getElementById('dbName');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.dbPass = document.getElementById('dbPass');

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.heroDbName = document.getElementById('heroDbName');

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.consoleEls = {
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        root: document.getElementById('messageConsole'),
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        icon: document.getElementById('messageConsoleIcon'),
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        title: document.getElementById('messageConsoleTitle'),
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        text: document.getElementById('messageConsoleText')
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.statusEls = {
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        badge: document.getElementById('pageStatusBadge'),
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        ping: document.getElementById('pageStatusPing'),
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        dot: document.getElementById('pageStatusDot'),
        // 查找页面 DOM 元素，为读取状态或更新界面做准备。
        text: document.getElementById('pageStatusText')
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.testConnectionButton = document.getElementById('testConnectionButton');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.proceedSection = document.getElementById('proceedSection');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.proceedPending = document.getElementById('proceedPending');

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.togglePassBtn = document.getElementById('togglePassBtn');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.passEyeOff = document.getElementById('passEyeOff');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.passEyeOn = document.getElementById('passEyeOn');

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.checkStep1 = document.getElementById('checkStep1');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.checkStep2 = document.getElementById('checkStep2');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.checkStep3 = document.getElementById('checkStep3');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `bindEvents` 函数，封装页面交互、请求或状态更新逻辑。
function bindEvents() {
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    dom.form?.addEventListener('submit', (event) => {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        event.preventDefault();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        testAndSaveConfig();
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    [dom.dbHost, dom.dbPort, dom.dbUser, dom.dbName, dom.dbPass].forEach((field) => {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        field?.addEventListener('input', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncDbName();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clearFieldError(field);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            hideProceedSection();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateChecklist();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.togglePassBtn?.addEventListener('click', togglePasswordVisibility);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `togglePasswordVisibility` 函数，封装页面交互、请求或状态更新逻辑。
function togglePasswordVisibility() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.dbPass) return;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const isPassword = dom.dbPass.type === 'password';
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.dbPass.type = isPassword ? 'text' : 'password';
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    dom.passEyeOff?.classList.toggle('hidden', !isPassword);
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    dom.passEyeOn?.classList.toggle('hidden', isPassword);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `updateChecklist` 函数，封装页面交互、请求或状态更新逻辑。
function updateChecklist() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const hostFilled = dom.dbHost?.value.trim().length > 0;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const userFilled = dom.dbUser?.value.trim().length > 0;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const passFilled = dom.dbPass?.value.length > 0;

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep1, hostFilled && userFilled);
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep2, passFilled);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `setCheckState` 函数，封装页面交互、请求或状态更新逻辑。
function setCheckState(el, checked) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!el) return;
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (checked) {
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.remove('border-pink-200', 'bg-white', 'text-transparent');
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.add('border-emerald-300', 'bg-emerald-500', 'text-white');
    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else {
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.remove('border-emerald-300', 'bg-emerald-500', 'text-white');
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        el.classList.add('border-pink-200', 'bg-white', 'text-transparent');
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `syncDbName` 函数，封装页面交互、请求或状态更新逻辑。
function syncDbName() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const dbName = dom.dbName?.value.trim() || 'library_db';
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.heroDbName) dom.heroDbName.textContent = dbName;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `getConnectionPayload` 函数，封装页面交互、请求或状态更新逻辑。
function getConnectionPayload() {
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        host: dom.dbHost.value.trim(),
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        port: dom.dbPort.value.trim(),
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        user: dom.dbUser.value.trim(),
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        password: dom.dbPass.value,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        database: dom.dbName.value.trim()
    // 结束前面打开的代码块、函数调用或对象结构。
    };
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `clearFieldError` 函数，封装页面交互、请求或状态更新逻辑。
function clearFieldError(field) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!field) return;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    field.removeAttribute('aria-invalid');
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    field.classList.remove('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `setFieldError` 函数，封装页面交互、请求或状态更新逻辑。
function setFieldError(field) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!field) return;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    field.setAttribute('aria-invalid', 'true');
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    field.classList.add('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `showProceedSection` 函数，封装页面交互、请求或状态更新逻辑。
function showProceedSection() {
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedPending?.classList.add('hidden');
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedSection?.classList.remove('hidden');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep3, true);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `hideProceedSection` 函数，封装页面交互、请求或状态更新逻辑。
function hideProceedSection() {
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedSection?.classList.add('hidden');
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    dom.proceedPending?.classList.remove('hidden');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setCheckState(dom.checkStep3, false);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `testAndSaveConfig` 函数，封装页面交互、请求或状态更新逻辑。
async function testAndSaveConfig() {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    clearFieldError(dom.dbHost);
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    clearFieldError(dom.dbUser);

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const data = getConnectionPayload();

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!data.host || !data.user) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!data.host) setFieldError(dom.dbHost);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!data.user) setFieldError(dom.dbUser);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '请至少填写数据库主机和用户名，然后再测试连接。', 'error', '缺少必填信息');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.testConnectionButton, true, '正在验证连接...');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在验证连接', 'pending');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    showMessage(dom.consoleEls, '正在验证数据库连接并同步配置，请稍候。', 'info', '正在处理');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    hideProceedSection();

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const loadingStartedAt = Date.now();

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const response = await fetch('/api/test_connection', {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            body: JSON.stringify(data)
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const result = await response.json();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!response.ok || !result.success) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '连接验证失败', 'pending');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, result.message || '数据库连接验证失败，请检查配置后重试。', 'error');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (typeof showToast === 'function') {
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(result.message || '数据库连接验证失败', 'error');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '连接验证成功，配置已保存', 'success');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, result.message, 'success', '连接验证成功');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showProceedSection();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (typeof showToast === 'function') {
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('数据库验证成功，配置已就绪！', 'success');
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch (error) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '连接验证失败', 'pending');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '请求失败，请检查后端服务是否正常。', 'error', '网络请求异常');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(loadingStartedAt);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.testConnectionButton, false, '正在验证连接...');
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}
