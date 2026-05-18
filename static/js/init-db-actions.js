const dom = {};

function setupHeaders(headers = {}) {
    return { ...headers, 'X-CSRF-Token': window.setupConfig?.csrfToken || '' };
}

document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    bindEvents();
    runPreflightCheck();
});

function cacheDom() {
    dom.consoleEls = {
        root: document.getElementById('messageConsole'),
        icon: document.getElementById('messageConsoleIcon'),
        title: document.getElementById('messageConsoleTitle'),
        text: document.getElementById('messageConsoleText')
    };

    dom.statusEls = {
        badge: document.getElementById('pageStatusBadge'),
        ping: document.getElementById('pageStatusPing'),
        dot: document.getElementById('pageStatusDot'),
        text: document.getElementById('pageStatusText')
    };

    dom.createTablesButton = document.getElementById('createTablesButton');
    dom.insertTestDataButton = document.getElementById('insertTestDataButton');
    dom.resetDatabaseButton = document.getElementById('resetDatabaseButton');

    dom.notConfiguredAlert = document.getElementById('notConfiguredAlert');
    dom.actionsHint = document.getElementById('actionsHint');
    dom.actionsBadge = document.getElementById('actionsBadge');
    dom.finishArea = document.getElementById('finishArea');

    dom.previewStatusDot = document.getElementById('previewStatusDot');
    dom.previewStatusText = document.getElementById('previewStatusText');
    dom.previewStatusHint = document.getElementById('previewStatusHint');
    dom.previewDbName = document.getElementById('previewDbName');
    dom.previewExistenceValue = document.getElementById('previewExistenceValue');
    dom.previewTableCount = document.getElementById('previewTableCount');
    dom.previewTableCountBadge = document.getElementById('previewTableCountBadge');
    dom.previewHint = document.getElementById('previewHint');
    dom.previewTableList = document.getElementById('previewTableList');

    dom.credentialsStatusBadge = document.getElementById('credentialsStatusBadge');
    dom.credentialsHint = document.getElementById('credentialsHint');
}

function bindEvents() {
    dom.createTablesButton?.addEventListener('click', createTables);
    dom.insertTestDataButton?.addEventListener('click', insertTestData);
    dom.resetDatabaseButton?.addEventListener('click', resetDatabase);
}

function enableActions() {
    [dom.createTablesButton, dom.insertTestDataButton, dom.resetDatabaseButton].forEach(btn => {
        if (btn) { btn.disabled = false; btn.setAttribute('aria-disabled', 'false'); }
    });
}

function setActionsBadge(text, color) {
    if (!dom.actionsBadge) return;
    dom.actionsBadge.innerHTML = `<span class="h-2 w-2 rounded-full bg-${color}-400"></span><span>${text}</span>`;
}

async function runPreflightCheck() {
    setPageStatus(dom.statusEls, '正在校验连接配置...', 'pending');

    try {
        const resp = await fetch('/api/test_connection', {
            method: 'POST',
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({})
        });
        const data = await resp.json();

        if (!resp.ok || !data.success) {
            setPageStatus(dom.statusEls, '连接配置无效', 'pending');
            if (dom.notConfiguredAlert) dom.notConfiguredAlert.classList.remove('hidden');
            if (dom.actionsHint) dom.actionsHint.textContent = '请先返回上一步配置数据库连接';
            setActionsBadge('不可用', 'rose');
            return;
        }

        updatePreview(data);
        enableActions();

        if (dom.actionsHint) dom.actionsHint.textContent = '连接正常，可执行以下操作';
        setActionsBadge('就绪', 'sky');
        setPageStatus(dom.statusEls, '连接验证成功，操作就绪', 'ready');

        if (data.demo_data_ready) {
            updateCredentialsReady();
            showFinishArea();
        }
    } catch {
        setPageStatus(dom.statusEls, '网络请求失败', 'pending');
        if (dom.notConfiguredAlert) dom.notConfiguredAlert.classList.remove('hidden');
        if (dom.actionsHint) dom.actionsHint.textContent = '无法连接后端服务';
        setActionsBadge('异常', 'rose');
    }
}

function updatePreview(data) {
    if (dom.previewStatusDot) dom.previewStatusDot.className = 'h-2.5 w-2.5 rounded-full bg-emerald-400 transition-colors duration-300';
    if (dom.previewStatusText) dom.previewStatusText.textContent = '已连接';
    if (dom.previewStatusHint) dom.previewStatusHint.textContent = '配置有效，连接正常';

    if (data.db_name && dom.previewDbName) dom.previewDbName.textContent = data.db_name;

    if (data.db_exists) {
        if (dom.previewExistenceValue) dom.previewExistenceValue.textContent = '数据库已存在';
    } else {
        if (dom.previewExistenceValue) dom.previewExistenceValue.textContent = '数据库尚未创建';
    }

    const tables = data.tables || [];
    if (dom.previewTableCount) dom.previewTableCount.textContent = `${tables.length} 张表`;
    if (dom.previewTableCountBadge) {
        dom.previewTableCountBadge.textContent = tables.length > 0 ? '已检测' : '无表';
    }
    if (dom.previewHint) {
        dom.previewHint.textContent = tables.length > 0
            ? `已发现 ${tables.length} 张数据表。`
            : '尚未发现任何数据表。';
    }

    if (dom.previewTableList) {
        dom.previewTableList.innerHTML = tables.map(t =>
            `<span class="rounded-full border border-pink-100 bg-white px-2 py-0.5 text-[10px] font-bold text-pink-700/70">${escapeHtml(t)}</span>`
        ).join('');
    }
}

function updateCredentialsReady() {
    if (dom.credentialsStatusBadge) {
        dom.credentialsStatusBadge.textContent = '已就绪';
        dom.credentialsStatusBadge.className = 'rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-600 transition-all duration-300';
    }
    if (dom.credentialsHint) dom.credentialsHint.textContent = '演示数据已导入，以下账号可直接登录。';
}

function showFinishArea() {
    if (dom.finishArea) dom.finishArea.classList.remove('hidden');
}

async function createTables() {
    setButtonLoading(dom.createTablesButton, true, '正在同步表结构...');
    setPageStatus(dom.statusEls, '正在创建表结构', 'pending');

    const startedAt = Date.now();
    try {
        const resp = await fetch('/api/create_tables', {
            method: 'POST',
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        });
        const data = await resp.json();

        if (data.success) {
            showMessage(dom.consoleEls, data.message, 'success', '表结构同步成功');
            setPageStatus(dom.statusEls, '表结构已同步', 'success');
            refreshPreview();
        } else {
            showMessage(dom.consoleEls, data.message, 'error');
            setPageStatus(dom.statusEls, '表结构同步失败', 'pending');
        }
    } catch {
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    } finally {
        await keepLoadingVisible(startedAt);
        setButtonLoading(dom.createTablesButton, false);
    }
}

async function insertTestData() {
    setButtonLoading(dom.insertTestDataButton, true, '正在导入演示数据...');
    setPageStatus(dom.statusEls, '正在导入演示数据', 'pending');

    const startedAt = Date.now();
    try {
        const resp = await fetch('/api/insert_test_data', {
            method: 'POST',
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        });
        const data = await resp.json();

        if (data.success) {
            showMessage(dom.consoleEls, data.message, 'success', '演示数据导入成功');
            setPageStatus(dom.statusEls, '演示数据已导入', 'success');
            updateCredentialsReady();
            showFinishArea();
            refreshPreview();
        } else {
            showMessage(dom.consoleEls, data.message, 'error');
            setPageStatus(dom.statusEls, '数据导入失败', 'pending');
        }
    } catch {
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    } finally {
        await keepLoadingVisible(startedAt);
        setButtonLoading(dom.insertTestDataButton, false);
    }
}

async function resetDatabase() {
    if (!confirm('⚠ 确定要完全重置数据库吗？此操作不可撤销，所有数据将被清除！')) return;

    setButtonLoading(dom.resetDatabaseButton, true, '正在重置...');
    setPageStatus(dom.statusEls, '正在重置数据库', 'pending');

    const startedAt = Date.now();
    try {
        const resp = await fetch('/api/reset_database', {
            method: 'POST',
            headers: setupHeaders({ 'Content-Type': 'application/json' })
        });
        const data = await resp.json();

        if (data.success) {
            showMessage(dom.consoleEls, data.message, 'success', '数据库已重置');
            setPageStatus(dom.statusEls, '数据库已重置', 'success');
            if (dom.finishArea) dom.finishArea.classList.add('hidden');
            if (dom.credentialsStatusBadge) {
                dom.credentialsStatusBadge.textContent = '未导入';
                dom.credentialsStatusBadge.className = 'rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-slate-500 transition-all duration-300';
            }
            if (dom.credentialsHint) dom.credentialsHint.textContent = '执行"导入演示数据"后，以下默认账号将被创建并可直接登录。';
            refreshPreview();
        } else {
            showMessage(dom.consoleEls, data.message, 'error');
            setPageStatus(dom.statusEls, '重置失败', 'pending');
        }
    } catch {
        showMessage(dom.consoleEls, '网络请求失败，请检查后端服务。', 'error', '网络异常');
        setPageStatus(dom.statusEls, '请求失败', 'pending');
    } finally {
        await keepLoadingVisible(startedAt);
        setButtonLoading(dom.resetDatabaseButton, false);
    }
}

async function refreshPreview() {
    try {
        const resp = await fetch('/api/test_connection', {
            method: 'POST',
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({})
        });
        const data = await resp.json();
        if (data.success) updatePreview(data);
    } catch { /* silent */ }
}
