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
    runPreflightCheck();
// 结束前面打开的代码块、函数调用或对象结构。
});

// 定义 `cacheDom` 函数，封装页面交互、请求或状态更新逻辑。
function cacheDom() {
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
    dom.createTablesButton = document.getElementById('createTablesButton');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.insertTestDataButton = document.getElementById('insertTestDataButton');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.resetDatabaseButton = document.getElementById('resetDatabaseButton');

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.notConfiguredAlert = document.getElementById('notConfiguredAlert');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.actionsHint = document.getElementById('actionsHint');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.actionsBadge = document.getElementById('actionsBadge');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.finishArea = document.getElementById('finishArea');

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewStatusDot = document.getElementById('previewStatusDot');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewStatusText = document.getElementById('previewStatusText');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewStatusHint = document.getElementById('previewStatusHint');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewDbName = document.getElementById('previewDbName');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewExistenceValue = document.getElementById('previewExistenceValue');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewTableCount = document.getElementById('previewTableCount');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewTableCountBadge = document.getElementById('previewTableCountBadge');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewHint = document.getElementById('previewHint');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.previewTableList = document.getElementById('previewTableList');

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.credentialsStatusBadge = document.getElementById('credentialsStatusBadge');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    dom.credentialsHint = document.getElementById('credentialsHint');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `bindEvents` 函数，封装页面交互、请求或状态更新逻辑。
function bindEvents() {
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.createTablesButton?.addEventListener('click', createTables);
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.insertTestDataButton?.addEventListener('click', insertTestData);
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    dom.resetDatabaseButton?.addEventListener('click', resetDatabase);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `enableActions` 函数，封装页面交互、请求或状态更新逻辑。
function enableActions() {
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    [dom.createTablesButton, dom.insertTestDataButton, dom.resetDatabaseButton].forEach(btn => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btn) { btn.disabled = false; btn.setAttribute('aria-disabled', 'false'); }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `setActionsBadge` 函数，封装页面交互、请求或状态更新逻辑。
function setActionsBadge(text, color) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.actionsBadge) return;
    // 写入页面内容，让界面展示最新数据或提示文案。
    dom.actionsBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-${color}-400"></span><span>${text}</span>`;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `runPreflightCheck` 函数，封装页面交互、请求或状态更新逻辑。
async function runPreflightCheck() {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在校验连接配置...', 'pending');

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/test_connection', {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            body: JSON.stringify({})
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!resp.ok || !data.success) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '连接配置无效', 'pending');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.notConfiguredAlert) dom.notConfiguredAlert.classList.remove('hidden');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.actionsHint) dom.actionsHint.textContent = '请先返回上一步配置数据库连接';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setActionsBadge('不可用', 'rose');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        updatePreview(data);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        enableActions();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.actionsHint) dom.actionsHint.textContent = '连接正常，可执行以下操作';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setActionsBadge('就绪', 'sky');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '连接验证成功，操作就绪', 'ready');

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.demo_data_ready) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateCredentialsReady();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showFinishArea();
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '网络请求失败', 'pending');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.notConfiguredAlert) dom.notConfiguredAlert.classList.remove('hidden');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.actionsHint) dom.actionsHint.textContent = '无法连接后端服务';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setActionsBadge('异常', 'rose');
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `updatePreview` 函数，封装页面交互、请求或状态更新逻辑。
function updatePreview(data) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewStatusDot) dom.previewStatusDot.className = 'h-2.5 w-2.5 rounded-full bg-emerald-400 transition-colors duration-300';
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewStatusText) dom.previewStatusText.textContent = '已连接';
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewStatusHint) dom.previewStatusHint.textContent = '配置有效，连接正常';

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (data.db_name && dom.previewDbName) dom.previewDbName.textContent = data.db_name;

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (data.db_exists) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.previewExistenceValue) dom.previewExistenceValue.textContent = '数据库已存在';
    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (dom.previewExistenceValue) dom.previewExistenceValue.textContent = '数据库尚未创建';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const tables = data.tables || [];
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewTableCount) dom.previewTableCount.textContent = `${tables.length} 张表`;
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewTableCountBadge) {
        // 写入页面内容，让界面展示最新数据或提示文案。
        dom.previewTableCountBadge.textContent = tables.length > 0 ? '已检测' : '无表';
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewHint) {
        // 写入页面内容，让界面展示最新数据或提示文案。
        dom.previewHint.textContent = tables.length > 0
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ? `已发现 ${tables.length} 张数据表。`
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            : '尚未发现任何数据表。';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.previewTableList) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        dom.previewTableList.innerHTML = tables.map(t =>
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            `<span class="rounded-full border border-pink-100 bg-white px-2 py-0.5 text-[10px] font-bold text-pink-700/70">${escapeHtml(t)}</span>`
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        ).join('');
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `updateCredentialsReady` 函数，封装页面交互、请求或状态更新逻辑。
function updateCredentialsReady() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.credentialsStatusBadge) {
        // 写入页面内容，让界面展示最新数据或提示文案。
        dom.credentialsStatusBadge.textContent = '已就绪';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dom.credentialsStatusBadge.className = 'rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600 transition-all duration-300';
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (dom.credentialsHint) dom.credentialsHint.textContent = '演示数据已导入，以下账号可直接登录。';
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `showFinishArea` 函数，封装页面交互、请求或状态更新逻辑。
function showFinishArea() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.finishArea) return;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.finishArea.className = 'mt-auto rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50/50 p-5 transition-all duration-500';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const icon = document.getElementById('finishIcon');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (icon) icon.className = 'mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-[0_6px_16px_-4px_rgba(16,185,129,0.4)] transition-all duration-500';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const label = document.getElementById('finishLabel');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (label) { label.textContent = '全部就绪'; label.className = 'text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-700/70 transition-colors duration-500'; }
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const title = document.getElementById('finishTitle');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (title) { title.textContent = '初始化已完成'; title.className = 'mt-0.5 text-sm font-bold text-emerald-900 transition-colors duration-500'; }
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const desc = document.getElementById('finishDesc');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (desc) { desc.textContent = '数据库与演示数据均已就绪，现在可以进入系统首页继续使用。'; desc.className = 'mt-1 mb-4 text-[11px] leading-4 text-emerald-800/70 transition-colors duration-500'; }
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const link = document.getElementById('finishLink');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (link) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.className = 'inline-flex w-full min-h-[42px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-5 py-2.5 text-sm font-bold text-white shadow-[0_4px_12px_-3px_rgba(16,185,129,0.35)] transition-all duration-500 hover:from-emerald-700 hover:to-teal-700 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_-4px_rgba(16,185,129,0.4)]';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.removeAttribute('aria-disabled');
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `resetFinishArea` 函数，封装页面交互、请求或状态更新逻辑。
function resetFinishArea() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!dom.finishArea) return;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    dom.finishArea.className = 'mt-auto rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100/50 p-5 transition-all duration-500';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const icon = document.getElementById('finishIcon');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (icon) icon.className = 'mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-300 text-white transition-all duration-500';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const label = document.getElementById('finishLabel');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (label) { label.textContent = '等待初始化'; label.className = 'text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 transition-colors duration-500'; }
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const title = document.getElementById('finishTitle');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (title) { title.textContent = '请先同步表结构'; title.className = 'mt-0.5 text-sm font-bold text-slate-500 transition-colors duration-500'; }
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const desc = document.getElementById('finishDesc');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (desc) { desc.textContent = '完成表结构同步后，即可进入系统首页。'; desc.className = 'mt-1 mb-4 text-[11px] leading-4 text-slate-400 transition-colors duration-500'; }
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const link = document.getElementById('finishLink');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (link) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.className = 'inline-flex w-full min-h-[42px] items-center justify-center gap-2 rounded-xl bg-slate-300 px-5 py-2.5 text-sm font-bold text-white pointer-events-none cursor-not-allowed transition-all duration-500';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        link.setAttribute('aria-disabled', 'true');
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `createTables` 函数，封装页面交互、请求或状态更新逻辑。
async function createTables() {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.createTablesButton, true, '正在同步表结构...');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在创建表结构', 'pending');

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const startedAt = Date.now();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/create_tables', {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'success', '表结构同步成功');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '表结构已同步', 'success');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showFinishArea();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            refreshPreview();
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'error');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '表结构同步失败', 'pending');
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(startedAt);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.createTablesButton, false);
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `insertTestData` 函数，封装页面交互、请求或状态更新逻辑。
async function insertTestData() {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.insertTestDataButton, true, '正在导入演示数据...');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在导入演示数据', 'pending');

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const startedAt = Date.now();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/insert_test_data', {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'success', '演示数据导入成功');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '演示数据已导入', 'success');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            updateCredentialsReady();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showFinishArea();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            refreshPreview();
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'error');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '数据导入失败', 'pending');
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(startedAt);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.insertTestDataButton, false);
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `resetDatabase` 函数，封装页面交互、请求或状态更新逻辑。
async function resetDatabase(options = {}) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!options.skipConfirm && !window.confirm('⚠ 确定要完全重置数据库吗？此操作不可撤销，所有数据将被清除！')) return;

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setButtonLoading(dom.resetDatabaseButton, true, '正在重置...');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setPageStatus(dom.statusEls, '正在重置数据库', 'pending');

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const startedAt = Date.now();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/reset_database', {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'success', '数据库已重置');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '数据库已重置', 'success');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            resetFinishArea();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.credentialsStatusBadge) {
                // 写入页面内容，让界面展示最新数据或提示文案。
                dom.credentialsStatusBadge.textContent = '未导入';
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                dom.credentialsStatusBadge.className = 'rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500 transition-all duration-300';
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (dom.credentialsHint) dom.credentialsHint.textContent = '执行"导入演示数据"后，以下默认账号将被创建并可直接登录。';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            refreshPreview();
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            showMessage(dom.consoleEls, data.message, 'error');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setPageStatus(dom.statusEls, '重置失败', 'pending');
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } finally {
        // 处理异步流程，等待接口、动画或浏览器任务完成。
        await keepLoadingVisible(startedAt);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setButtonLoading(dom.resetDatabaseButton, false);
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const resetDatabaseWithNativeConfirm = resetDatabase;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
resetDatabase = async function resetDatabaseWithDialog() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (typeof showConfirm === 'function') {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const confirmed = await showConfirm({
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            title: '重置数据库',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            message: '此操作会清空当前数据库并且不可撤销，请确认已经完成备份。',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            type: 'danger',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            confirmText: '确认重置',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cancelText: '再检查一下'
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!confirmed) return;
        // 处理异步流程，等待接口、动画或浏览器任务完成。
        await resetDatabaseWithNativeConfirm({ skipConfirm: true });
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 处理异步流程，等待接口、动画或浏览器任务完成。
    await resetDatabaseWithNativeConfirm();
// 结束前面打开的代码块、函数调用或对象结构。
};

// 定义 `refreshPreview` 函数，封装页面交互、请求或状态更新逻辑。
async function refreshPreview() {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    try {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const resp = await fetch('/api/test_connection', {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            method: 'POST',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            body: JSON.stringify({})
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const data = await resp.json();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.success) updatePreview(data);
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    } catch { /* silent */ }
// 结束前面打开的代码块、函数调用或对象结构。
}
