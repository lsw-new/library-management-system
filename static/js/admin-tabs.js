// 逐行注释：定义 `refreshAdminPanel` 函数，封装页面交互、请求或状态更新逻辑。
function refreshAdminPanel(targetUrl, options = {}) {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const scrollY = options.scrollY ?? window.scrollY;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const resolvedUrl = targetUrl ? new URL(targetUrl, window.location.origin) : new URL(window.location.href);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
    return fetch(`${resolvedUrl.pathname}${resolvedUrl.search}`, {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        method: 'GET',
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    })
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        .then(res => res.text())
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        .then(htmlText => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const parser     = new DOMParser();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const doc        = parser.parseFromString(htmlText, 'text/html');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const newAside   = doc.querySelector('aside');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const newSection = doc.querySelector('section');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const oldSection = document.querySelector('section');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!newSection || !oldSection || !newAside) return false;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            newSection.classList.remove('animate-in', 'fade-in', 'slide-in-from-right-4', 'duration-700');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            oldSection.replaceWith(newSection);
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (options.updateHistory !== false) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.history.replaceState({}, '', `${resolvedUrl.pathname}${resolvedUrl.search}`);
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const tabs = ['online', 'books', 'users', 'current', 'history'];
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            tabs.forEach(key => {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const newBadge = newAside.querySelector(`#badge-${key}`);
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const oldBadge = document.getElementById(`badge-${key}`);
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (newBadge && oldBadge) {
                    // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                    oldBadge.textContent = newBadge.textContent;
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            initCurrentStatusFilter();
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (document.getElementById('todayTabBtn')) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                switchHistoryTab('today');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (typeof checkOnlineUsers === 'function') {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                checkOnlineUsers();
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (typeof loadSystemLogs === 'function') {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                loadSystemLogs();
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.scrollTo(0, scrollY);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.dispatchEvent(new CustomEvent('library:admin-panel-refreshed', {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                detail: { url: `${resolvedUrl.pathname}${resolvedUrl.search}` }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            }));
            // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
            return true;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        })
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        .catch(() => false);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `switchAdminTab` 函数，封装页面交互、请求或状态更新逻辑。
function switchAdminTab(btn, tabKey) {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const scrollY = window.scrollY;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    document.querySelectorAll('[data-tab]').forEach(item => {
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        item.classList.remove('is-active');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const badge = item.querySelector('[class*="badge"]');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badge) badge.className = 'sidebar-nav-badge-inactive';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    btn.classList.add('is-active');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const activeBadge = btn.querySelector('[class*="badge"]');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (activeBadge) activeBadge.className = 'sidebar-nav-badge';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const baseUrl   = window.location.pathname.replace(/\?.*/, '');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const targetUrl = new URL(baseUrl, window.location.origin);
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    targetUrl.searchParams.set('tab', tabKey);
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (tabKey === 'current') {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const currentStatus = new URL(window.location.href).searchParams.get('status');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (currentStatus) targetUrl.searchParams.set('status', currentStatus);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    refreshAdminPanel(targetUrl, { scrollY });
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `initCurrentStatusFilter` 函数，封装页面交互、请求或状态更新逻辑。
function initCurrentStatusFilter() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const tabs  = Array.from(document.querySelectorAll('[data-current-status-tab]'));
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const cards = Array.from(document.querySelectorAll('[data-current-record-status]'));
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (tabs.length === 0) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const setActiveTab = status => {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let visibleCount = 0;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        tabs.forEach(tab => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const isActive = tab.dataset.currentStatusTab === status;
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.toggle('is-active', isActive);
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.toggle('border-brand-primary', isActive);
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.toggle('text-brand-primary', isActive);
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.toggle('bg-pink-50/50', isActive);
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.toggle('border-transparent', !isActive);
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.toggle('text-brand-deep/50', !isActive);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            tab.setAttribute('aria-pressed', String(isActive));
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        cards.forEach(card => {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const isVisible = card.dataset.currentRecordStatus === status;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            card.hidden = !isVisible;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (isVisible) visibleCount += 1;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll('[data-current-empty-state]').forEach(empty => {
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            empty.classList.toggle('hidden', empty.dataset.currentEmptyState !== status || visibleCount > 0);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        document.querySelectorAll('input[name="status"]').forEach(input => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.value = status;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const label        = status === 'picked_up' ? '已取待归还' : '待审核';
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const announcement = document.getElementById('current-status-announcement');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (announcement) announcement.textContent = `已切换到${label}，共 ${visibleCount} 条记录`;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const url = new URL(window.location.href);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        url.searchParams.set('tab', 'current');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        url.searchParams.set('status', status);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        window.history.replaceState({}, '', url);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    tabs.forEach(tab => {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        tab.addEventListener('click', () => setActiveTab(tab.dataset.currentStatusTab));
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const requestedStatus     = new URL(window.location.href).searchParams.get('status');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const currentDefaultStatus = document.querySelector('[data-current-default-status]')?.dataset.currentDefaultStatus || 'pending';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const availableStatuses   = tabs.map(tab => tab.dataset.currentStatusTab);
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setActiveTab(availableStatuses.includes(requestedStatus) ? requestedStatus : currentDefaultStatus);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `switchHistoryTab` 函数，封装页面交互、请求或状态更新逻辑。
function switchHistoryTab(tabName) {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const todayBtn     = document.getElementById('todayTabBtn');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const pastBtn      = document.getElementById('pastTabBtn');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const todayContent = document.getElementById('todayRecordsTab');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const pastContent  = document.getElementById('pastRecordsTab');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    document.querySelectorAll('.history-tab-btn').forEach(btn => {
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        btn.classList.remove('border-brand-primary', 'text-brand-primary', 'bg-pink-50/50');
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        btn.classList.add('border-transparent', 'text-brand-deep/60');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    document.querySelectorAll('.history-tab-content').forEach(content => {
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        content.classList.add('hidden');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (tabName === 'today') {
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        todayBtn.classList.remove('border-transparent', 'text-brand-deep/60');
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        todayBtn.classList.add('border-brand-primary', 'text-brand-primary', 'bg-pink-50/50');
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        todayContent.classList.remove('hidden');
    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else if (tabName === 'past') {
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        pastBtn.classList.remove('border-transparent', 'text-brand-deep/60');
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        pastBtn.classList.add('border-brand-primary', 'text-brand-primary', 'bg-pink-50/50');
        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        pastContent.classList.remove('hidden');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function () {
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    initCurrentStatusFilter();
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.getElementById('todayTabBtn')) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        switchHistoryTab('today');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.refreshAdminPanel = refreshAdminPanel;
