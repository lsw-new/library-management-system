// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const page = document.querySelector('[data-borrow-action-csrf]');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const filters = document.getElementById('records-filters');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const list = document.getElementById('records-list');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!filters || !list) return;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const emptyHint = document.getElementById('records-empty-filter');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const toast = (msg, type = 'success') => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (window.showToast) return window.showToast(msg, type);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        console.warn(msg);
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentFilter = 'all';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let searchKeyword = '';

    // 定义 `getCards` 函数，封装页面交互、请求或状态更新逻辑。
    function getCards() { return list.querySelectorAll('.record-card'); }

    // 定义 `applyFilter` 函数，封装页面交互、请求或状态更新逻辑。
    function applyFilter(value) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (typeof value === 'string') currentFilter = value;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        let visible = 0;
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        getCards().forEach(card => {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const statusOk = currentFilter === 'all' || card.dataset.status === currentFilter;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const titleOk = !searchKeyword || (card.dataset.title || '').includes(searchKeyword);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const match = statusOk && titleOk;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            card.hidden = !match;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (match) visible += 1;
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (emptyHint) emptyHint.classList.toggle('hidden', visible !== 0);
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        filters.querySelectorAll('[data-filter]').forEach(btn => {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            btn.classList.toggle('is-active', btn.dataset.filter === currentFilter);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const url = new URL(window.location.href);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (currentFilter === 'all') url.searchParams.delete('status');
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        else url.searchParams.set('status', currentFilter);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        window.history.replaceState({}, '', url);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    filters.addEventListener('click', (e) => {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const btn = e.target.closest('[data-filter]');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!btn) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        applyFilter(btn.dataset.filter);
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const initial = new URL(window.location.href).searchParams.get('status') || 'all';
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    applyFilter(initial);

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ============ 搜索框 ============
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const searchInput = document.getElementById('records-search-input');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const searchClear = document.getElementById('records-search-clear');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (searchInput) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchInput.addEventListener('input', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchKeyword = searchInput.value.trim().toLowerCase();
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            searchClear.classList.toggle('is-visible', !!searchKeyword);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyFilter();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        searchClear.addEventListener('click', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchInput.value = '';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchKeyword = '';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            searchClear.classList.remove('is-visible');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyFilter();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            searchInput.focus();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ============ 顶部数据条更新 ============
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const heroStatTotal     = document.querySelector('[data-stat="total"]');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const heroStatActive    = document.querySelector('[data-stat="active"]');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const heroStatCompleted = document.querySelector('[data-stat="completed"]');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const heroStatRate      = document.querySelector('[data-stat="rate"]');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const heroTotalText     = document.getElementById('records-total-text');

    // 定义 `refreshHeroStats` 函数，封装页面交互、请求或状态更新逻辑。
    function refreshHeroStats(stats) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!stats) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const total = stats.total;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const active = (stats.pending || 0) + (stats.picked_up || 0);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const completed = stats.returned || 0;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const rate = total ? Math.round(completed / total * 100) : 0;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (heroStatTotal)     heroStatTotal.textContent = total;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (heroStatActive)    heroStatActive.textContent = active;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (heroStatCompleted) heroStatCompleted.textContent = completed;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (heroStatRate)      heroStatRate.innerHTML = rate + '<span class="stat-unit">%</span>';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (heroTotalText)     heroTotalText.innerHTML = `至今共 <strong>${total}</strong> 段书页之约 ♡`;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `bumpStat` 函数，封装页面交互、请求或状态更新逻辑。
    function bumpStat(key, delta) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const btn = filters.querySelector(`[data-filter="${key}"]`);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!btn) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const v = btn.querySelector('.records-tab-count');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!v) return;
        // 写入页面内容，让界面展示最新数据或提示文案。
        v.textContent = Math.max(0, parseInt(v.textContent || '0', 10) + delta);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `bumpHeroFromDelta` 函数，封装页面交互、请求或状态更新逻辑。
    function bumpHeroFromDelta(deltaMap) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = deltaMap || {};
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const totalDelta = Object.values(d).reduce((a, b) => a + b, 0);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const activeDelta = (d.pending || 0) + (d.picked_up || 0);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const completedDelta = d.returned || 0;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const apply = (el, delta) => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!el) return;
            // 写入页面内容，让界面展示最新数据或提示文案。
            el.textContent = Math.max(0, parseInt(el.textContent || '0', 10) + delta);
        // 结束前面打开的代码块、函数调用或对象结构。
        };
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        apply(heroStatTotal, totalDelta);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        apply(heroStatActive, activeDelta);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        apply(heroStatCompleted, completedDelta);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (heroStatRate && heroStatTotal) {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const total = parseInt(heroStatTotal.textContent || '0', 10);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const completed = parseInt(heroStatCompleted?.textContent || '0', 10);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const rate = total ? Math.round(completed / total * 100) : 0;
            // 写入页面内容，让界面展示最新数据或提示文案。
            heroStatRate.innerHTML = rate + '<span class="stat-unit">%</span>';
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (heroTotalText && heroStatTotal) {
            // 写入页面内容，让界面展示最新数据或提示文案。
            heroTotalText.innerHTML = `至今共 <strong>${heroStatTotal.textContent}</strong> 段书页之约 ♡`;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ============ 自定义确认弹层 ============
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmEl = document.getElementById('record-confirm');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!confirmEl) return;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmTitle = document.getElementById('record-confirm-title');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmMsg = document.getElementById('record-confirm-msg');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmOk = confirmEl.querySelector('[data-confirm-ok]');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const confirmCancel = confirmEl.querySelector('[data-confirm-cancel]');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let confirmResolver = null;

    // 定义 `openConfirm` 函数，封装页面交互、请求或状态更新逻辑。
    function openConfirm({ title, msg, okText = '确定', tone = '' }) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        return new Promise((resolve) => {
            // 写入页面内容，让界面展示最新数据或提示文案。
            confirmTitle.textContent = title;
            // 写入页面内容，让界面展示最新数据或提示文案。
            confirmMsg.textContent = msg;
            // 写入页面内容，让界面展示最新数据或提示文案。
            confirmOk.textContent = okText;
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            confirmOk.classList.remove('tone-danger', 'tone-return');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (tone) confirmOk.classList.add(tone);
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            confirmEl.classList.add('is-open');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            confirmEl.setAttribute('aria-hidden', 'false');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            confirmResolver = resolve;
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 定义 `closeConfirm` 函数，封装页面交互、请求或状态更新逻辑。
    function closeConfirm(result) {
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        confirmEl.classList.remove('is-open');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        confirmEl.setAttribute('aria-hidden', 'true');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (confirmResolver) { confirmResolver(result); confirmResolver = null; }
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    confirmOk.addEventListener('click', () => closeConfirm(true));
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    confirmCancel.addEventListener('click', () => closeConfirm(false));
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    confirmEl.addEventListener('click', (e) => { if (e.target === confirmEl) closeConfirm(false); });
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    document.addEventListener('keydown', (e) => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (e.key === 'Escape' && confirmEl.classList.contains('is-open')) closeConfirm(false);
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ============ 操作配置 ============
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const STATUS_META = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        pending:   { label: '未领取', tone: 'pending'  },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        picked_up: { label: '已领取', tone: 'picked'   },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        returned:  { label: '已归还', tone: 'returned' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        rejected:  { label: '已拒绝', tone: 'rejected' },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        expired:   { label: '已逾期', tone: 'expired'  },
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const ACTIONS = {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        cancel: {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            expectedStatus: 'pending',
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            url: id => `/book/cancel/${id}`,
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            confirm: title => ({ title: '取消预约', msg: `确定取消《${title}》的预约吗？库存将被释放。`, okText: '确认取消', tone: 'tone-danger' }),
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            successMsg: '已取消预约',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            newStatus: 'rejected',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            timelineTone: 'tone-red',
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            timelineLabel: ts => `已取消 · ${ts}`,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            statDelta: { pending: -1, rejected: +1 },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        },
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // 定义 `nowStamp` 函数，封装页面交互、请求或状态更新逻辑。
    function nowStamp() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = new Date();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const pad = n => String(n).padStart(2, '0');
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `setStatus` 函数，封装页面交互、请求或状态更新逻辑。
    function setStatus(card, status) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        card.dataset.status = status;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const meta = STATUS_META[status];
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const pill = card.querySelector('.status-pill');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (pill && meta) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pill.className = `status-pill tone-${meta.tone} flex-shrink-0 mt-0.5`;
            // 写入页面内容，让界面展示最新数据或提示文案。
            pill.textContent = meta.label;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `removeWaitingStep` 函数，封装页面交互、请求或状态更新逻辑。
    function removeWaitingStep(timeline) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const placeholder = Array.from(timeline.querySelectorAll('.timeline-step'))
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .find(el => /等待管理员审核/.test(el.textContent));
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (placeholder) placeholder.remove();
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `appendTimelineStep` 函数，封装页面交互、请求或状态更新逻辑。
    function appendTimelineStep(card, className, text) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const timeline = card.querySelector('.record-timeline');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!timeline || !text) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        removeWaitingStep(timeline);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const step = document.createElement('div');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        step.className = className;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const dot = document.createElement('span');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dot.className = 'timeline-dot';
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const label = document.createElement('span');
        // 写入页面内容，让界面展示最新数据或提示文案。
        label.textContent = text;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        step.append(dot, label);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        timeline.appendChild(step);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `setActions` 函数，封装页面交互、请求或状态更新逻辑。
    function setActions(card, status, recordId, bookTitle) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const oldActions = card.querySelector('.record-actions');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (oldActions) oldActions.remove();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (status !== 'pending') return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const body = card.querySelector('.record-body');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!body) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const actions = document.createElement('div');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        actions.className = 'record-actions';
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const button = document.createElement('button');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.type = 'button';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.className = 'record-action-btn tone-cancel';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.action = 'cancel';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.recordId = recordId;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookTitle = bookTitle;
        // 写入页面内容，让界面展示最新数据或提示文案。
        button.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>取消预约';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        actions.appendChild(button);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        body.appendChild(actions);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `updateCard` 函数，封装页面交互、请求或状态更新逻辑。
    function updateCard(card, cfg) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setStatus(card, cfg.newStatus);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const actions = card.querySelector('.record-actions');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (actions) actions.remove();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const progress = card.querySelector('.record-progress');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (progress) progress.remove();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        appendTimelineStep(card, `timeline-step is-done ${cfg.timelineTone}`, cfg.timelineLabel(nowStamp()));
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        card.style.transition = 'box-shadow 0.6s ease';
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        card.style.boxShadow = '0 0 0 3px rgba(236,72,153,0.3), 0 16px 32px -18px rgba(236,72,153,0.4)';
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        setTimeout(() => { card.style.boxShadow = ''; }, 750);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `setExactStats` 函数，封装页面交互、请求或状态更新逻辑。
    function setExactStats(stats) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!stats) return;
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        Object.entries(stats).forEach(([key, value]) => {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (key === 'total') return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const btn = filters.querySelector(`[data-filter="${key}"]`);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const count = btn && btn.querySelector('.records-tab-count');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (count) count.textContent = value;
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const allCount = filters.querySelector('[data-filter="all"] .records-tab-count');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (allCount) allCount.textContent = stats.total;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        refreshHeroStats(stats);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `statusTimelineText` 函数，封装页面交互、请求或状态更新逻辑。
    function statusTimelineText(record) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (record.status === 'picked_up') return record.pickup_date ? `已领取 · ${record.pickup_date}` : '已领取';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (record.status === 'returned') return record.return_date ? `已归还 · ${record.return_date}` : '已归还';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (record.status === 'rejected') return record.reject_date ? `已拒绝 · ${record.reject_date}` : '已拒绝';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (record.status === 'expired') return record.reject_date ? `已逾期 · ${record.reject_date}` : '已逾期';
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return '';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `statusTimelineClass` 函数，封装页面交互、请求或状态更新逻辑。
    function statusTimelineClass(status) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (status === 'picked_up') return 'timeline-step is-done tone-blue';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (status === 'returned') return 'timeline-step is-done tone-green';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (status === 'rejected') return 'timeline-step is-done tone-red';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (status === 'expired') return 'timeline-step is-done tone-orange';
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return 'timeline-step';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `syncRecord` 函数，封装页面交互、请求或状态更新逻辑。
    function syncRecord(record) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const card = list.querySelector(`[data-record-id="${record.id}"]`);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!card || card.dataset.status === record.status) return false;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const title = card.querySelector('a')?.textContent.trim() || '该书';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setStatus(card, record.status);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setActions(card, record.status, String(record.id), title);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const progress = card.querySelector('.record-progress');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (progress && record.status !== 'picked_up') progress.remove();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        appendTimelineStep(card, statusTimelineClass(record.status), statusTimelineText(record));
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return true;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let syncInFlight = false;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let recordsRefreshInFlight = false;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let userActionInFlight = false;

    // 定义 `refreshRecordsView` 函数，封装页面交互、请求或状态更新逻辑。
    async function refreshRecordsView(stats) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (recordsRefreshInFlight || userActionInFlight || confirmEl.classList.contains('is-open') || document.hidden) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        recordsRefreshInFlight = true;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch(window.location.pathname + window.location.search, {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!resp.ok) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const html = await resp.text();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const doc = new DOMParser().parseFromString(html, 'text/html');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextList = doc.getElementById('records-list');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const nextFilters = doc.getElementById('records-filters');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (nextList) list.innerHTML = nextList.innerHTML;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (nextFilters) filters.innerHTML = nextFilters.innerHTML;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setExactStats(stats);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyFilter(currentFilter);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (err) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            list.dataset.syncState = 'stale';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } finally {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            recordsRefreshInFlight = false;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `syncRecords` 函数，封装页面交互、请求或状态更新逻辑。
    async function syncRecords() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (syncInFlight || userActionInFlight || confirmEl.classList.contains('is-open') || document.hidden) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        syncInFlight = true;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch('/borrow_records/status', { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!resp.ok) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!data.success || !Array.isArray(data.records)) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            let changed = false;
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            data.records.forEach(record => { changed = syncRecord(record) || changed; });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setExactStats(data.stats);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            list.dataset.syncState = 'ok';
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (changed) applyFilter(currentFilter);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (err) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            list.dataset.syncState = 'stale';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } finally {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            syncInFlight = false;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:borrow-status-changed', function(event) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var data = event.detail;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!data || !Array.isArray(data.records)) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var changed = false;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var hasMissingRecord = false;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        data.records.forEach(function(record) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!list.querySelector('[data-record-id="' + record.id + '"]')) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                hasMissingRecord = true;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            changed = syncRecord(record) || changed;
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (hasMissingRecord) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            refreshRecordsView(data.stats);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setExactStats(data.stats);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        list.dataset.syncState = 'ok';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (changed) applyFilter(currentFilter);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('visibilitychange', function() { if (!document.hidden) syncRecords(); });

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    list.addEventListener('click', async (e) => {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const btn = e.target.closest('.record-action-btn');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!btn) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const actionKey = btn.dataset.action;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const cfg = ACTIONS[actionKey];
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!cfg) return;

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const recordId = btn.dataset.recordId;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const bookTitle = btn.dataset.bookTitle || '该书';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        userActionInFlight = true;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const ok = await openConfirm(cfg.confirm(bookTitle));
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!ok) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            userActionInFlight = false;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const card = list.querySelector(`[data-record-id="${recordId}"]`);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!card || card.dataset.status !== cfg.expectedStatus) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            userActionInFlight = false;
            // 处理异步流程，等待接口、动画或浏览器任务完成。
            await syncRecords();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const allBtns = card.querySelectorAll('.record-action-btn');
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        allBtns.forEach(b => (b.disabled = true));

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const resp = await fetch(cfg.url(recordId), {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-Requested-With': 'XMLHttpRequest',
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-CSRF-Token': page.dataset.borrowActionCsrf
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const data = await resp.json();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                toast(cfg.successMsg, 'success');
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                Object.entries(cfg.statDelta || {}).forEach(([k, d]) => bumpStat(k, d));
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                bumpHeroFromDelta(cfg.statDelta);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                updateCard(card, cfg);
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                applyFilter(currentFilter);
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                toast(data.message || '操作失败', 'error');
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                allBtns.forEach(b => (b.disabled = false));
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (err) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            toast('网络错误，请稍后重试', 'error');
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            allBtns.forEach(b => (b.disabled = false));
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } finally {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            userActionInFlight = false;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
