const dom = {};

function setupHeaders(headers = {}) {
    return { ...headers, 'X-CSRF-Token': window.setupConfig?.csrfToken || '' };
}

document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    bindEvents();
    syncDbName();
    updateChecklist();
});

function cacheDom() {
    dom.form = document.getElementById('dbConfigForm');
    dom.dbHost = document.getElementById('dbHost');
    dom.dbPort = document.getElementById('dbPort');
    dom.dbUser = document.getElementById('dbUser');
    dom.dbName = document.getElementById('dbName');
    dom.dbPass = document.getElementById('dbPass');

    dom.heroDbName = document.getElementById('heroDbName');

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

    dom.testConnectionButton = document.getElementById('testConnectionButton');
    dom.proceedSection = document.getElementById('proceedSection');
    dom.proceedPending = document.getElementById('proceedPending');

    dom.togglePassBtn = document.getElementById('togglePassBtn');
    dom.passEyeOff = document.getElementById('passEyeOff');
    dom.passEyeOn = document.getElementById('passEyeOn');

    dom.checkStep1 = document.getElementById('checkStep1');
    dom.checkStep2 = document.getElementById('checkStep2');
    dom.checkStep3 = document.getElementById('checkStep3');
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
            hideProceedSection();
            updateChecklist();
        });
    });

    dom.togglePassBtn?.addEventListener('click', togglePasswordVisibility);
}

function togglePasswordVisibility() {
    if (!dom.dbPass) return;
    const isPassword = dom.dbPass.type === 'password';
    dom.dbPass.type = isPassword ? 'text' : 'password';
    dom.passEyeOff?.classList.toggle('hidden', !isPassword);
    dom.passEyeOn?.classList.toggle('hidden', isPassword);
}

function updateChecklist() {
    const hostFilled = dom.dbHost?.value.trim().length > 0;
    const userFilled = dom.dbUser?.value.trim().length > 0;
    const passFilled = dom.dbPass?.value.length > 0;

    setCheckState(dom.checkStep1, hostFilled && userFilled);
    setCheckState(dom.checkStep2, passFilled);
}

function setCheckState(el, checked) {
    if (!el) return;
    if (checked) {
        el.classList.remove('border-pink-200', 'bg-white', 'text-transparent');
        el.classList.add('border-emerald-300', 'bg-emerald-500', 'text-white');
    } else {
        el.classList.remove('border-emerald-300', 'bg-emerald-500', 'text-white');
        el.classList.add('border-pink-200', 'bg-white', 'text-transparent');
    }
}

function syncDbName() {
    const dbName = dom.dbName?.value.trim() || 'library_db';
    if (dom.heroDbName) dom.heroDbName.textContent = dbName;
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

function clearFieldError(field) {
    if (!field) return;
    field.removeAttribute('aria-invalid');
    field.classList.remove('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
}

function setFieldError(field) {
    if (!field) return;
    field.setAttribute('aria-invalid', 'true');
    field.classList.add('border-rose-400', 'focus:border-rose-500', 'focus:shadow-[0_0_0_4px_rgba(244,63,94,0.12)]');
}

function showProceedSection() {
    dom.proceedPending?.classList.add('hidden');
    dom.proceedSection?.classList.remove('hidden');
    setCheckState(dom.checkStep3, true);
}

function hideProceedSection() {
    dom.proceedSection?.classList.add('hidden');
    dom.proceedPending?.classList.remove('hidden');
    setCheckState(dom.checkStep3, false);
}

async function testAndSaveConfig() {
    clearFieldError(dom.dbHost);
    clearFieldError(dom.dbUser);

    const data = getConnectionPayload();

    if (!data.host || !data.user) {
        if (!data.host) setFieldError(dom.dbHost);
        if (!data.user) setFieldError(dom.dbUser);
        showMessage(dom.consoleEls, '请至少填写数据库主机和用户名，然后再测试连接。', 'error', '缺少必填信息');
        return;
    }

    setButtonLoading(dom.testConnectionButton, true, '正在验证连接...');
    setPageStatus(dom.statusEls, '正在验证连接', 'pending');
    showMessage(dom.consoleEls, '正在验证数据库连接并同步配置，请稍候。', 'info', '正在处理');
    hideProceedSection();

    const loadingStartedAt = Date.now();

    try {
        const response = await fetch('/api/test_connection', {
            method: 'POST',
            headers: setupHeaders({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            setPageStatus(dom.statusEls, '连接验证失败', 'pending');
            showMessage(dom.consoleEls, result.message || '数据库连接验证失败，请检查配置后重试。', 'error');
            if (typeof showToast === 'function') {
                showToast(result.message || '数据库连接验证失败', 'error');
            }
            return;
        }

        setPageStatus(dom.statusEls, '连接验证成功，配置已保存', 'success');
        showMessage(dom.consoleEls, result.message, 'success', '连接验证成功');
        showProceedSection();

        if (typeof showToast === 'function') {
            showToast('数据库验证成功，配置已就绪！', 'success');
        }
    } catch (error) {
        setPageStatus(dom.statusEls, '连接验证失败', 'pending');
        showMessage(dom.consoleEls, '请求失败，请检查后端服务是否正常。', 'error', '网络请求异常');
    } finally {
        await keepLoadingVisible(loadingStartedAt);
        setButtonLoading(dom.testConnectionButton, false, '正在验证连接...');
    }
}
