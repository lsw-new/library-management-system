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
    runPreflightCheck();
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `cacheDom` 函数，封装页面交互、请求或状态更新逻辑。
function cacheDom() {
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
    dom.createTablesButton = document.getElementById('createTablesButton');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.insertTestDataButton = document.getElementById('insertTestDataButton');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.resetDatabaseButton = document.getElementById('resetDatabaseButton');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.notConfiguredAlert = document.getElementById('notConfiguredAlert');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.actionsHint = document.getElementById('actionsHint');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.actionsBadge = document.getElementById('actionsBadge');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.finishArea = document.getElementById('finishArea');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewStatusDot = document.getElementById('previewStatusDot');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewStatusText = document.getElementById('previewStatusText');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewStatusHint = document.getElementById('previewStatusHint');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewDbName = document.getElementById('previewDbName');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewExistenceValue = document.getElementById('previewExistenceValue');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewTableCount = document.getElementById('previewTableCount');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewTableCountBadge = document.getElementById('previewTableCountBadge');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewHint = document.getElementById('previewHint');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewTableList = document.getElementById('previewTableList');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.credentialsStatusBadge = document.getElementById('credentialsStatusBadge');
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.credentialsHint = document.getElementById('credentialsHint');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `bindEvents` 函数，封装页面交互、请求或状态更新逻辑。
function bindEvents() {
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.createTablesButton?.addEventListener('click', createTables);
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.insertTestDataButton?.addEventListener('click', insertTestData);
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.resetDatabaseButton?.addEventListener('click', resetDatabase);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `enableActions` 函数，封装页面交互、请求或状态更新逻辑。
function enableActions() {
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    [dom.createTablesButton, dom.insertTestDataButton, dom.resetDatabaseButton].forEach(btn => {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btn) { btn.disabled = false; btn.setAttribute('aria-disabled', 'false'); }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `setActionsBadge` 函数，封装页面交互、请求或状态更新逻辑。
function setActionsBadge(text, color) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.actionsBadge) return;
    // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
    dom.actionsBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-${color}-400"></span><span>${text}</span>`;
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `runPreflightCheck` 函数，封装页面交互、请求或状态更新逻辑。
async function runPreflightCheck() {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在校验连接配置...', 'pending');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/test_connection', {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            body: JSON.stringify({})
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!resp.ok || !data.success) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '连接配置无效', 'pending');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.notConfiguredAlert) dom.notConfiguredAlert.classList.remove('hidden');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.actionsHint) dom.actionsHint.textContent = '请先返回上一步配置数据库连接';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setActionsBadge('不可用', 'rose');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        updatePreview(data);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        enableActions();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.actionsHint) dom.actionsHint.textContent = '连接正常，可执行以下操作';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setActionsBadge('就绪', 'sky');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '连接验证成功，操作就绪', 'ready');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.demo_data_ready) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateCredentialsReady();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showFinishArea();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '网络请求失败', 'pending');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.notConfiguredAlert) dom.notConfiguredAlert.classList.remove('hidden');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.actionsHint) dom.actionsHint.textContent = '无法连接后端服务';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setActionsBadge('异常', 'rose');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `updatePreview` 函数，封装页面交互、请求或状态更新逻辑。
function updatePreview(data) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewStatusDot) dom.previewStatusDot.className = 'h-2.5 w-2.5 rounded-full bg-emerald-400 transition-colors duration-300';
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewStatusText) dom.previewStatusText.textContent = '已连接';
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewStatusHint) dom.previewStatusHint.textContent = '配置有效，连接正常';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (data.db_name && dom.previewDbName) dom.previewDbName.textContent = data.db_name;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (data.db_exists) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.previewExistenceValue) dom.previewExistenceValue.textContent = '数据库已存在';
    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.previewExistenceValue) dom.previewExistenceValue.textContent = '数据库尚未创建';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const tables = data.tables || [];
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewTableCount) dom.previewTableCount.textContent = `${tables.length} 张表`;
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewTableCountBadge) {
        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
        dom.previewTableCountBadge.textContent = tables.length > 0 ? '已检测' : '无表';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewHint) {
        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
        dom.previewHint.textContent = tables.length > 0
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ? `已发现 ${tables.length} 张数据表。`
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            : '尚未发现任何数据表。';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewTableList) {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        dom.previewTableList.innerHTML = tables.map(t =>
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            `<span class="rounded-full border border-pink-100 bg-white px-2 py-0.5 text-[10px] font-bold text-pink-700/70">${escapeHtml(t)}</span>`
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        ).join('');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `updateCredentialsReady` 函数，封装页面交互、请求或状态更新逻辑。
function updateCredentialsReady() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.credentialsStatusBadge) {
        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
        dom.credentialsStatusBadge.textContent = '已就绪';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dom.credentialsStatusBadge.className = 'rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600 transition-all duration-300';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.credentialsHint) dom.credentialsHint.textContent = '演示数据已导入，以下账号可直接登录。';
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `showFinishArea` 函数，封装页面交互、请求或状态更新逻辑。
function showFinishArea() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.finishArea) return;
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.finishArea.className = 'mt-auto rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-5 transition-all duration-500';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const icon = document.getElementById('finishIcon');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (icon) icon.className = 'mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-[0_6px_16px_-4px_rgba(16,185,129,0.4)] transition-all duration-500';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const label = document.getElementById('finishLabel');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (label) { label.textContent = '全部就绪'; label.className = 'text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700/70 transition-colors duration-500'; }
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const title = document.getElementById('finishTitle');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (title) { title.textContent = '初始化已完成'; title.className = 'mt-0.5 text-sm font-bold text-emerald-900 transition-colors duration-500'; }
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const desc = document.getElementById('finishDesc');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (desc) { desc.textContent = '数据库与演示数据均已就绪，现在可以进入系统首页继续使用。'; desc.className = 'mt-1 mb-4 text-[11px] leading-4 text-emerald-800/70 transition-colors duration-500'; }
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const link = document.getElementById('finishLink');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (link) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.className = 'inline-flex w-full min-h-[42px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_12px_-3px_rgba(16,185,129,0.35)] transition-all duration-500 hover:from-emerald-700 hover:to-teal-700 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(16,185,129,0.4)]';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.removeAttribute('aria-disabled');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `resetFinishArea` 函数，封装页面交互、请求或状态更新逻辑。
function resetFinishArea() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.finishArea) return;
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.finishArea.className = 'mt-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100/50 p-5 transition-all duration-500';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const icon = document.getElementById('finishIcon');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (icon) icon.className = 'mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-300 text-white transition-all duration-500';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const label = document.getElementById('finishLabel');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (label) { label.textContent = '等待初始化'; label.className = 'text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 transition-colors duration-500'; }
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const title = document.getElementById('finishTitle');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (title) { title.textContent = '请先同步表结构'; title.className = 'mt-0.5 text-sm font-bold text-slate-500 transition-colors duration-500'; }
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const desc = document.getElementById('finishDesc');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (desc) { desc.textContent = '完成表结构同步后，即可进入系统首页。'; desc.className = 'mt-1 mb-4 text-[11px] leading-4 text-slate-400 transition-colors duration-500'; }
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const link = document.getElementById('finishLink');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (link) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.className = 'inline-flex w-full min-h-[42px] items-center justify-center gap-2 rounded-xl bg-slate-300 px-5 py-2.5 text-sm font-bold text-white pointer-events-none cursor-not-allowed transition-all duration-500';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.setAttribute('aria-disabled', 'true');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `createTables` 函数，封装页面交互、请求或状态更新逻辑。
async function createTables() {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.createTablesButton, true, '正在同步表结构...');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在创建表结构', 'pending');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const startedAt = Date.now();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/create_tables', {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'success', '表结构同步成功');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '表结构已同步', 'success');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showFinishArea();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            refreshPreview();
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'error');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '表结构同步失败', 'pending');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(startedAt);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.createTablesButton, false);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `insertTestData` 函数，封装页面交互、请求或状态更新逻辑。
async function insertTestData() {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.insertTestDataButton, true, '正在导入演示数据...');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在导入演示数据', 'pending');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const startedAt = Date.now();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/insert_test_data', {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'success', '演示数据导入成功');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '演示数据已导入', 'success');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateCredentialsReady();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showFinishArea();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            refreshPreview();
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'error');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '数据导入失败', 'pending');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(startedAt);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.insertTestDataButton, false);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `resetDatabase` 函数，封装页面交互、请求或状态更新逻辑。
async function resetDatabase(options = {}) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!options.skipConfirm && !window.confirm('⚠ 确定要完全重置数据库吗？此操作不可撤销，所有数据将被清除！')) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.resetDatabaseButton, true, '正在重置...');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在重置数据库', 'pending');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const startedAt = Date.now();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/reset_database', {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'success', '数据库已重置');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '数据库已重置', 'success');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            resetFinishArea();
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.credentialsStatusBadge) {
                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                dom.credentialsStatusBadge.textContent = '未导入';
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                dom.credentialsStatusBadge.className = 'rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500 transition-all duration-300';
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.credentialsHint) dom.credentialsHint.textContent = '执行"导入演示数据"后，以下默认账号将被创建并可直接登录。';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            refreshPreview();
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'error');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '重置失败', 'pending');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(startedAt);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.resetDatabaseButton, false);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const resetDatabaseWithNativeConfirm = resetDatabase;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
resetDatabase = async function resetDatabaseWithDialog() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (typeof showConfirm === 'function') {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const confirmed = await showConfirm({
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            title: '重置数据库',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            message: '此操作会清空当前数据库并且不可撤销，请确认已经完成备份。',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            type: 'danger',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            confirmText: '确认重置',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cancelText: '再检查一下'
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!confirmed) return;
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        await resetDatabaseWithNativeConfirm({ skipConfirm: true });
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
    // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
    await resetDatabaseWithNativeConfirm();
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
};
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `refreshPreview` 函数，封装页面交互、请求或状态更新逻辑。
async function refreshPreview() {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/test_connection', {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            body: JSON.stringify({})
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) updatePreview(data);
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch { /* silent */ }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
