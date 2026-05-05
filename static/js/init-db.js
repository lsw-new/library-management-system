const state = {
    verified: false,
    step: 1,
    demoDataReady: false
};

const dom = {};

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

document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    bindEvents();
    syncDbName();
    resetPreviewState();
    setStepState(1, false);
});

function cacheDom() {
    dom.form = document.getElementById('dbConfigForm');
    dom.dbHost = document.getElementById('dbHost');
    dom.dbPort = document.getElementById('dbPort');
    dom.dbUser = document.getElementById('dbUser');
    dom.dbName = document.getElementById('dbName');
    dom.dbPass = document.getElementById('dbPass');

    dom.messageConsole = document.getElementById('messageConsole');
    dom.messageConsoleIcon = document.getElementById('messageConsoleIcon');
    dom.messageConsoleTitle = document.getElementById('messageConsoleTitle');
    dom.messageConsoleText = document.getElementById('messageConsoleText');

    dom.pageStatusBadge = document.getElementById('pageStatusBadge');
    dom.pageStatusPing = document.getElementById('pageStatusPing');
    dom.pageStatusDot = document.getElementById('pageStatusDot');
    dom.pageStatusText = document.getElementById('pageStatusText');
    dom.heroDbName = document.getElementById('heroDbName');

    dom.step1Indicator = document.getElementById('step1Indicator');
    dom.step2Indicator = document.getElementById('step2Indicator');
    dom.step1IndicatorBadge = document.getElementById('step1IndicatorBadge');
    dom.step2IndicatorBadge = document.getElementById('step2IndicatorBadge');
    dom.step1Circle = dom.step1Indicator?.firstElementChild?.firstElementChild?.firstElementChild;
    dom.step2Circle = dom.step2Indicator?.firstElementChild?.firstElementChild?.firstElementChild;

    dom.step1Heading = document.getElementById('step1Heading');
    dom.step2Heading = document.getElementById('step2Heading');
    dom.step2 = document.getElementById('step2');

    dom.previewDbNamePill = document.getElementById('previewDbNamePill');
    dom.previewStatusDot = document.getElementById('previewStatusDot');
    dom.previewStatusText = document.getElementById('previewStatusText');
    dom.previewStatusHint = document.getElementById('previewStatusHint');
    dom.previewDbName = document.getElementById('previewDbName');
    dom.previewExistenceValue = document.getElementById('previewExistenceValue');
    dom.previewTableCount = document.getElementById('previewTableCount');
    dom.previewTableCountBadge = document.getElementById('previewTableCountBadge');
    dom.previewHint = document.getElementById('previewHint');
    dom.previewTableList = document.getElementById('previewTableList');
    dom.previewReadyState = document.getElementById('previewReadyState');
    dom.credentialsStatusBadge = document.getElementById('credentialsStatusBadge');
    dom.credentialsHint = document.getElementById('credentialsHint');
    dom.adminCredentialValue = document.getElementById('adminCredentialValue');
    dom.userCredentialValue = document.getElementById('userCredentialValue');

    dom.testConnectionButton = document.getElementById('testConnectionButton');
    dom.goStep2Button = document.getElementById('goStep2Button');
    dom.createTablesButton = document.getElementById('createTablesButton');
    dom.insertTestDataButton = document.getElementById('insertTestDataButton');
    dom.resetDatabaseButton = document.getElementById('resetDatabaseButton');
    dom.backToStep1Button = document.getElementById('backToStep1Button');
    dom.finishArea = document.getElementById('finishArea');
}

function bindEvents() {
    dom.form?.addEventListener('submit', (event) => {
        event.preventDefault();
        testAndSaveConfig();
    });

    [dom.dbHost, dom.dbPort, dom.dbUser, dom.dbName, dom.dbPass].forEach((field) => {
        field?.addEventListener('input', () => {
            syncDbName();
            clearFieldError(field);

            if (state.verified) {
                invalidateVerificationState();
            }
        });
    });

    dom.goStep2Button?.addEventListener('click', goToStep2);
    dom.backToStep1Button?.addEventListener('click', backToStep1);
    dom.createTablesButton?.addEventListener('click', createTables);
    dom.insertTestDataButton?.addEventListener('click', insertTestData);
    dom.resetDatabaseButton?.addEventListener('click', resetDatabase);
}

function syncDbName() {
    const dbName = dom.dbName?.value.trim() || 'library_db';
    dom.heroDbName.textContent = dbName;
    dom.previewDbName.textContent = dbName;
    dom.previewDbNamePill.textContent = dbName;
}

function getConnectionPayload() {
    return {
        host: dom.dbHost.value.trim(),
        port: dom.dbPort.value.trim(),
        user: dom.dbUser.value.trim(),
        password: dom.dbPass.value,
        database: dom.dbName.value.trim()
    };
}

function setDemoDataState(isReady) {
    state.demoDataReady = isReady;
    dom.credentialsStatusBadge.textContent = isReady ? '可登录' : '未导入';
    dom.credentialsStatusBadge.className = isReady
        ? 'rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-200'
        : 'rounded-full bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-200';
    dom.credentialsHint.textContent = isReady
        ? '当前数据库已检测到演示账号与基础馆藏，可以直接使用以下默认凭据登录。'
        : '只有执行“导入演示数据”后，以下默认账号才会被创建并可直接登录。';
    dom.adminCredentialValue.textContent = isReady ? 'admin / admin123' : 'admin / admin123（导入后可用）';
    dom.userCredentialValue.textContent = isReady ? 'user1 / user123' : 'user1 / user123（导入后可用）';
}

function updateCompletionState(isReady) {
    dom.finishArea.classList.toggle('hidden', !isReady);
}

function resetPreviewState() {
    syncDbName();
    dom.previewStatusDot.className = 'h-3 w-3 rounded-full bg-amber-400';
    dom.previewStatusText.textContent = '尚未验证';
    dom.previewStatusHint.textContent = '填写左侧表单并测试连接后，这里会显示环境状态。';
    dom.previewExistenceValue.textContent = '等待检测是否已存在';
    dom.previewTableCount.textContent = '0 张表';
    dom.previewTableCountBadge.textContent = '未检测';
    dom.previewTableCountBadge.className = 'rounded-full bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500 shadow-sm';
    dom.previewHint.textContent = '尚未生成数据库概览。';
    dom.previewTableList.innerHTML = '';
    dom.previewReadyState.classList.add('hidden');
    setDemoDataState(false);
    updateCompletionState(false);
}

function invalidateVerificationState() {
    dom.step2.classList.add('hidden');
    dom.step2.setAttribute('aria-hidden', 'true');
    resetPreviewState();
    setStepState(1, false);
    setPageStatus('连接配置已更改，请重新验证', 'pending');
}

function clearFieldError(field) {
    if (!field) {
        return;
    }

    field.removeAttribute('aria-invalid');
    field.classList.remove('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
}

function setFieldError(field) {
    if (!field) {
        return;
    }

    field.setAttribute('aria-invalid', 'true');
    field.classList.add('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
}

function showMessage(message, type = 'info', customTitle = '') {
    const variant = messageVariants[type] || messageVariants.info;

    dom.messageConsole.className = `rounded-2xl border p-4 md:p-5 ${variant.wrapper}`;
    dom.messageConsole.classList.remove('hidden');
    dom.messageConsole.setAttribute('role', type === 'error' ? 'alert' : 'status');
    dom.messageConsoleIcon.className = `mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${variant.icon}`;
    dom.messageConsoleIcon.innerHTML = variant.svg;
    dom.messageConsoleTitle.textContent = customTitle || variant.title;
    dom.messageConsoleText.textContent = message;
}

function setPageStatus(text, tone = 'pending') {
    const toneMap = {
        pending: {
            badge: 'bg-amber-50 text-amber-700 shadow-sm shadow-amber-100/80',
            ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75',
            dot: 'relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-500'
        },
        ready: {
            badge: 'bg-sky-50 text-sky-700 shadow-sm shadow-sky-100/80',
            ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75',
            dot: 'relative inline-flex h-2.5 w-2.5 rounded-full bg-sky-500'
        },
        success: {
            badge: 'bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100/80',
            ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75',
            dot: 'relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500'
        }
    };

    const currentTone = toneMap[tone] || toneMap.pending;

    dom.pageStatusBadge.className = `inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-xs font-black ${currentTone.badge}`;
    dom.pageStatusPing.className = currentTone.ping;
    dom.pageStatusDot.className = currentTone.dot;
    dom.pageStatusText.textContent = text;
}

function setStepState(activeStep, unlockedStep2) {
    state.step = activeStep;
    state.verified = unlockedStep2;

    dom.step1Indicator.className = activeStep === 1
        ? 'rounded-2xl border border-brand-primary/20 bg-white/80 p-5 shadow-sm ring-2 ring-brand-primary/10 backdrop-blur-sm transition-all'
        : 'rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all';
    dom.step2Indicator.className = activeStep === 2
        ? 'rounded-2xl border border-brand-accent/20 bg-white/80 p-5 shadow-sm ring-2 ring-brand-accent/10 backdrop-blur-sm transition-all'
        : unlockedStep2
            ? 'rounded-2xl border border-sky-200 bg-white/80 p-5 shadow-sm ring-2 ring-sky-100 backdrop-blur-sm transition-all'
            : 'rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-all';

    if (dom.step1Circle) {
        dom.step1Circle.className = activeStep === 1
            ? 'flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-primary text-white shadow-lg shadow-pink-200/70'
            : 'flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400';
    }

    if (dom.step2Circle) {
        dom.step2Circle.className = activeStep === 2
            ? 'flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-accent text-white shadow-lg shadow-purple-200/70'
            : unlockedStep2
                ? 'flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white shadow-lg shadow-sky-200/70'
                : 'flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-400';
    }

    dom.step1IndicatorBadge.textContent = activeStep === 1 ? '进行中' : '已完成';
    dom.step1IndicatorBadge.className = activeStep === 1
        ? 'rounded-full bg-brand-primary/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-primary'
        : 'rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700';

    if (activeStep === 2) {
        dom.step2IndicatorBadge.textContent = '执行中';
        dom.step2IndicatorBadge.className = 'rounded-full bg-brand-accent/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-accent';
    } else if (unlockedStep2) {
        dom.step2IndicatorBadge.textContent = '可进入';
        dom.step2IndicatorBadge.className = 'rounded-full bg-sky-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-sky-700';
    } else {
        dom.step2IndicatorBadge.textContent = '待解锁';
        dom.step2IndicatorBadge.className = 'rounded-full bg-slate-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500';
    }
}

function focusHeading(element) {
    if (!element) {
        return;
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => element.focus(), 200);
}

function setButtonLoading(button, isLoading, loadingText) {
    if (!button) {
        return;
    }

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

function updatePreview(result) {
    const tables = Array.isArray(result.tables) ? result.tables : [];
    const dbExists = Boolean(result.db_exists);
    const dbName = result.db_name || dom.dbName.value.trim() || 'library_db';

    dom.heroDbName.textContent = dbName;
    dom.previewDbName.textContent = dbName;
    dom.previewDbNamePill.textContent = dbName;

    dom.previewStatusDot.className = 'h-3 w-3 rounded-full bg-emerald-500';
    dom.previewStatusText.textContent = '连接验证成功';
    dom.previewStatusHint.textContent = dbExists
        ? '已检测到现有数据库，可以直接继续执行初始化动作。'
        : '目标数据库当前不存在，系统将在创建表结构时自动创建数据库。';

    dom.previewExistenceValue.textContent = dbExists
        ? '数据库已存在，可直接查看或补充结构。'
        : '数据库尚不存在，创建表结构时会自动生成。';

    dom.previewTableCount.textContent = `${tables.length} 张表`;
    dom.previewTableCountBadge.textContent = tables.length > 0 ? '已发现' : '空库';
    dom.previewTableCountBadge.className = tables.length > 0
        ? 'rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 shadow-sm'
        : 'rounded-full bg-sky-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-sky-700 shadow-sm';

    dom.previewHint.textContent = tables.length > 0
        ? '以下是当前已检测到的数据表，你可以继续创建缺失结构或直接导入演示数据。'
        : '当前数据库中尚未发现表结构，适合先执行“同步表结构”。';

    dom.previewTableList.innerHTML = tables.length > 0
        ? tables.map((table) => `<span class="max-w-full truncate rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">${escapeHtml(table)}</span>`).join('')
        : '<span class="rounded-full border border-dashed border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-400">尚未发现表结构</span>';

    dom.previewReadyState.classList.remove('hidden');
}

function applyPreviewState(result) {
    updatePreview(result);
    const demoDataReady = Boolean(result.demo_data_ready);
    setDemoDataState(demoDataReady);
    updateCompletionState(demoDataReady);
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
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

async function refreshPreviewState() {
    const data = getConnectionPayload();

    if (!data.host || !data.user) {
        return null;
    }

    try {
        const response = await fetch('/api/test_connection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
            return null;
        }

        applyPreviewState(result);
        return result;
    } catch (error) {
        return null;
    }
}

function setVerifiedPageStatus() {
    const statusText = state.demoDataReady
        ? (state.step === 2 ? '演示数据已就绪，可直接进入系统' : '连接已验证，当前环境已具备演示数据')
        : (state.step === 2 ? '初始化控制台已解锁' : '连接已验证，可进入下一步');
    const tone = state.demoDataReady ? 'success' : 'ready';
    setPageStatus(statusText, tone);
}

function setActionPageStatus(actionName) {
    if (actionName === 'reset') {
        setPageStatus('数据库已重置，可按需重新导入演示数据', 'ready');
        return;
    }

    if (state.demoDataReady) {
        setPageStatus('演示数据已就绪，可直接进入系统', 'success');
        return;
    }

    setPageStatus('表结构已同步，可继续导入演示数据', 'ready');
}

async function testAndSaveConfig() {
    clearFieldError(dom.dbHost);
    clearFieldError(dom.dbUser);

    const data = getConnectionPayload();

    if (!data.host || !data.user) {
        if (!data.host) {
            setFieldError(dom.dbHost);
        }
        if (!data.user) {
            setFieldError(dom.dbUser);
        }
        showMessage('请至少填写数据库主机和用户名，然后再测试连接。', 'error', '缺少必填信息');
        return;
    }

    setButtonLoading(dom.testConnectionButton, true, '正在验证连接...');
    setPageStatus('正在验证连接', 'pending');
    showMessage('正在验证数据库连接并同步配置，请稍候。', 'info', '正在处理');

    const loadingStartedAt = Date.now();

    try {
        const response = await fetch('/api/test_connection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            resetPreviewState();
            setStepState(1, false);
            setPageStatus('连接验证失败', 'pending');
            showMessage(result.message || '数据库连接验证失败，请检查配置后重试。', 'error');
            if (typeof showToast === 'function') {
                showToast(result.message || '数据库连接验证失败', 'error');
            }
            return;
        }

        applyPreviewState(result);
        setStepState(state.step === 2 ? 2 : 1, true);
        setVerifiedPageStatus();
        showMessage(result.message, 'success', '连接验证成功');

        if (typeof showToast === 'function') {
            showToast('数据库验证成功，配置已就绪！', 'success');
        }
    } catch (error) {
        resetPreviewState();
        setStepState(1, false);
        setPageStatus('连接验证失败', 'pending');
        showMessage('请求失败，请检查后端服务是否正常。', 'error', '网络请求异常');
    } finally {
        await keepLoadingVisible(loadingStartedAt);
        setButtonLoading(dom.testConnectionButton, false, '正在验证连接...');
    }
}

function goToStep2() {
    dom.step2.classList.remove('hidden');
    dom.step2.setAttribute('aria-hidden', 'false');
    setStepState(2, true);
    setVerifiedPageStatus();
    focusHeading(dom.step2Heading);
}

function backToStep1() {
    dom.step2.classList.add('hidden');
    dom.step2.setAttribute('aria-hidden', 'true');
    setStepState(1, state.verified);

    if (state.verified) {
        setVerifiedPageStatus();
    } else {
        setPageStatus('等待验证连接', 'pending');
    }

    focusHeading(dom.step1Heading);
}

async function runApi(url, button, pendingMessage, successTitle, actionName) {
    setButtonLoading(button, true, '正在执行...');
    showMessage(pendingMessage, 'info', '正在处理');

    const loadingStartedAt = Date.now();

    try {
        const response = await fetch(url, { method: 'POST' });
        const result = await response.json();

        if (!response.ok || !result.success) {
            showMessage(result.message || '系统操作失败，请稍后重试。', 'error');
            if (typeof showToast === 'function') {
                showToast(result.message || '系统操作失败', 'error');
            }
            return;
        }

        showMessage(result.message, 'success', successTitle);
        const previewResult = await refreshPreviewState();

        if (!previewResult) {
            if (actionName === 'insert') {
                setDemoDataState(true);
            }
            if (actionName === 'reset') {
                setDemoDataState(false);
            }

            updateCompletionState(state.demoDataReady);
            if (typeof showToast === 'function') {
                showToast('操作已完成，但数据库概览刷新失败，请重新测试连接。', 'warning');
            }
        }

        setActionPageStatus(actionName);

        if (typeof showToast === 'function') {
            showToast(result.message, 'success');
        }
    } catch (error) {
        showMessage('操作异常，请检查数据库权限或后端日志。', 'error', '系统请求异常');
    } finally {
        await keepLoadingVisible(loadingStartedAt);
        setButtonLoading(button, false, '正在执行...');
    }
}

function createTables() {
    if (typeof showConfirm !== 'function') {
        runApi('/api/create_tables', dom.createTablesButton, '正在同步数据库表结构，请稍候。', '表结构同步成功', 'create');
        return;
    }

    showConfirm(
        '初始化表结构',
        '确定要同步数据库表结构吗？这将在目标数据库中创建必要的存储结构。',
        () => runApi('/api/create_tables', dom.createTablesButton, '正在同步数据库表结构，请稍候。', '表结构同步成功', 'create'),
        'info'
    );
}

function insertTestData() {
    if (typeof showConfirm !== 'function') {
        runApi('/api/insert_test_data', dom.insertTestDataButton, '正在导入首批演示数据，请稍候。', '演示数据导入成功', 'insert');
        return;
    }

    showConfirm(
        '插入测试数据',
        '确定要导入首批演示数据吗？这将包括预设的图书清单和演示账号。',
        () => runApi('/api/insert_test_data', dom.insertTestDataButton, '正在导入首批演示数据，请稍候。', '演示数据导入成功', 'insert'),
        'info'
    );
}

function resetDatabase() {
    if (typeof showConfirm !== 'function') {
        runApi('/api/reset_database', dom.resetDatabaseButton, '正在重置数据库，请稍候。', '数据库已重置', 'reset');
        return;
    }

    showConfirm(
        '警告：危险操作',
        '您正在尝试完全重置数据库。此操作将彻底删除所有现有的表及存储的数据（图书、用户、记录等）。此过程无法撤销，请确认您已做好备份或确定要重新开始。',
        () => runApi('/api/reset_database', dom.resetDatabaseButton, '正在重置数据库，请稍候。', '数据库已重置', 'reset'),
        'danger'
    );
}
