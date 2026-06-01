(function () {
    const page = document.querySelector('[data-borrow-action-csrf]');
    const filters = document.getElementById('records-filters');
    const list = document.getElementById('records-list');
    if (!filters || !list) return;

    const emptyHint = document.getElementById('records-empty-filter');
    const toast = (msg, type = 'success') => {
        if (window.showToast) return window.showToast(msg, type);
        console.warn(msg);
    };
    let currentFilter = 'all';
    let searchKeyword = '';

    function getCards() { return list.querySelectorAll('.record-card'); }

    function applyFilter(value) {
        if (typeof value === 'string') currentFilter = value;
        let visible = 0;
        getCards().forEach(card => {
            const statusOk = currentFilter === 'all' || card.dataset.status === currentFilter;
            const titleOk = !searchKeyword || (card.dataset.title || '').includes(searchKeyword);
            const match = statusOk && titleOk;
            card.hidden = !match;
            if (match) visible += 1;
        });
        if (emptyHint) emptyHint.classList.toggle('hidden', visible !== 0);
        filters.querySelectorAll('[data-filter]').forEach(btn => {
            btn.classList.toggle('is-active', btn.dataset.filter === currentFilter);
        });
        const url = new URL(window.location.href);
        if (currentFilter === 'all') url.searchParams.delete('status');
        else url.searchParams.set('status', currentFilter);
        window.history.replaceState({}, '', url);
    }

    filters.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-filter]');
        if (!btn) return;
        applyFilter(btn.dataset.filter);
    });

    const initial = new URL(window.location.href).searchParams.get('status') || 'all';
    applyFilter(initial);

    // ============ 搜索框 ============
    const searchInput = document.getElementById('records-search-input');
    const searchClear = document.getElementById('records-search-clear');
    if (searchInput) {
        searchInput.addEventListener('input', () => {
            searchKeyword = searchInput.value.trim().toLowerCase();
            searchClear.classList.toggle('is-visible', !!searchKeyword);
            applyFilter();
        });
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchKeyword = '';
            searchClear.classList.remove('is-visible');
            applyFilter();
            searchInput.focus();
        });
    }

    // ============ 顶部数据条更新 ============
    const heroStatTotal     = document.querySelector('[data-stat="total"]');
    const heroStatActive    = document.querySelector('[data-stat="active"]');
    const heroStatCompleted = document.querySelector('[data-stat="completed"]');
    const heroStatRate      = document.querySelector('[data-stat="rate"]');
    const heroTotalText     = document.getElementById('records-total-text');

    function refreshHeroStats(stats) {
        if (!stats) return;
        const total = stats.total;
        const active = (stats.pending || 0) + (stats.picked_up || 0);
        const completed = stats.returned || 0;
        const rate = total ? Math.round(completed / total * 100) : 0;
        if (heroStatTotal)     heroStatTotal.textContent = total;
        if (heroStatActive)    heroStatActive.textContent = active;
        if (heroStatCompleted) heroStatCompleted.textContent = completed;
        if (heroStatRate)      heroStatRate.innerHTML = rate + '<span class="stat-unit">%</span>';
        if (heroTotalText)     heroTotalText.innerHTML = `至今共 <strong>${total}</strong> 段书页之约 ♡`;
    }

    function bumpStat(key, delta) {
        const btn = filters.querySelector(`[data-filter="${key}"]`);
        if (!btn) return;
        const v = btn.querySelector('.records-tab-count');
        if (!v) return;
        v.textContent = Math.max(0, parseInt(v.textContent || '0', 10) + delta);
    }

    function bumpHeroFromDelta(deltaMap) {
        const d = deltaMap || {};
        const totalDelta = Object.values(d).reduce((a, b) => a + b, 0);
        const activeDelta = (d.pending || 0) + (d.picked_up || 0);
        const completedDelta = d.returned || 0;
        const apply = (el, delta) => {
            if (!el) return;
            el.textContent = Math.max(0, parseInt(el.textContent || '0', 10) + delta);
        };
        apply(heroStatTotal, totalDelta);
        apply(heroStatActive, activeDelta);
        apply(heroStatCompleted, completedDelta);
        if (heroStatRate && heroStatTotal) {
            const total = parseInt(heroStatTotal.textContent || '0', 10);
            const completed = parseInt(heroStatCompleted?.textContent || '0', 10);
            const rate = total ? Math.round(completed / total * 100) : 0;
            heroStatRate.innerHTML = rate + '<span class="stat-unit">%</span>';
        }
        if (heroTotalText && heroStatTotal) {
            heroTotalText.innerHTML = `至今共 <strong>${heroStatTotal.textContent}</strong> 段书页之约 ♡`;
        }
    }

    // ============ 自定义确认弹层 ============
    const confirmEl = document.getElementById('record-confirm');
    if (!confirmEl) return;
    const confirmTitle = document.getElementById('record-confirm-title');
    const confirmMsg = document.getElementById('record-confirm-msg');
    const confirmOk = confirmEl.querySelector('[data-confirm-ok]');
    const confirmCancel = confirmEl.querySelector('[data-confirm-cancel]');
    let confirmResolver = null;

    function openConfirm({ title, msg, okText = '确定', tone = '' }) {
        return new Promise((resolve) => {
            confirmTitle.textContent = title;
            confirmMsg.textContent = msg;
            confirmOk.textContent = okText;
            confirmOk.classList.remove('tone-danger', 'tone-return');
            if (tone) confirmOk.classList.add(tone);
            confirmEl.classList.add('is-open');
            confirmEl.setAttribute('aria-hidden', 'false');
            confirmResolver = resolve;
        });
    }
    function closeConfirm(result) {
        confirmEl.classList.remove('is-open');
        confirmEl.setAttribute('aria-hidden', 'true');
        if (confirmResolver) { confirmResolver(result); confirmResolver = null; }
    }
    confirmOk.addEventListener('click', () => closeConfirm(true));
    confirmCancel.addEventListener('click', () => closeConfirm(false));
    confirmEl.addEventListener('click', (e) => { if (e.target === confirmEl) closeConfirm(false); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && confirmEl.classList.contains('is-open')) closeConfirm(false);
    });

    // ============ 操作配置 ============
    const STATUS_META = {
        pending:   { label: '未领取', tone: 'pending'  },
        picked_up: { label: '已领取', tone: 'picked'   },
        returned:  { label: '已归还', tone: 'returned' },
        rejected:  { label: '已拒绝', tone: 'rejected' },
        expired:   { label: '已逾期', tone: 'expired'  },
    };

    const ACTIONS = {
        cancel: {
            expectedStatus: 'pending',
            url: id => `/book/cancel/${id}`,
            confirm: title => ({ title: '取消预约', msg: `确定取消《${title}》的预约吗？库存将被释放。`, okText: '确认取消', tone: 'tone-danger' }),
            successMsg: '已取消预约',
            newStatus: 'rejected',
            timelineTone: 'tone-red',
            timelineLabel: ts => `已取消 · ${ts}`,
            statDelta: { pending: -1, rejected: +1 },
        },
    };

    function nowStamp() {
        const d = new Date();
        const pad = n => String(n).padStart(2, '0');
        return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    function setStatus(card, status) {
        card.dataset.status = status;
        const meta = STATUS_META[status];
        const pill = card.querySelector('.status-pill');
        if (pill && meta) {
            pill.className = `status-pill tone-${meta.tone} flex-shrink-0 mt-0.5`;
            pill.textContent = meta.label;
        }
    }

    function removeWaitingStep(timeline) {
        const placeholder = Array.from(timeline.querySelectorAll('.timeline-step'))
            .find(el => /等待管理员审核/.test(el.textContent));
        if (placeholder) placeholder.remove();
    }

    function appendTimelineStep(card, className, text) {
        const timeline = card.querySelector('.record-timeline');
        if (!timeline || !text) return;
        removeWaitingStep(timeline);
        const step = document.createElement('div');
        step.className = className;
        const dot = document.createElement('span');
        dot.className = 'timeline-dot';
        const label = document.createElement('span');
        label.textContent = text;
        step.append(dot, label);
        timeline.appendChild(step);
    }

    function setActions(card, status, recordId, bookTitle) {
        const oldActions = card.querySelector('.record-actions');
        if (oldActions) oldActions.remove();
        if (status !== 'pending') return;
        const body = card.querySelector('.record-body');
        if (!body) return;
        const actions = document.createElement('div');
        actions.className = 'record-actions';
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'record-action-btn tone-cancel';
        button.dataset.action = 'cancel';
        button.dataset.recordId = recordId;
        button.dataset.bookTitle = bookTitle;
        button.innerHTML = '<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>取消预约';
        actions.appendChild(button);
        body.appendChild(actions);
    }

    function updateCard(card, cfg) {
        setStatus(card, cfg.newStatus);
        const actions = card.querySelector('.record-actions');
        if (actions) actions.remove();
        const progress = card.querySelector('.record-progress');
        if (progress) progress.remove();
        appendTimelineStep(card, `timeline-step is-done ${cfg.timelineTone}`, cfg.timelineLabel(nowStamp()));
        card.style.transition = 'box-shadow 0.6s ease';
        card.style.boxShadow = '0 0 0 3px rgba(236,72,153,0.3), 0 16px 32px -18px rgba(236,72,153,0.4)';
        setTimeout(() => { card.style.boxShadow = ''; }, 750);
    }

    function setExactStats(stats) {
        if (!stats) return;
        Object.entries(stats).forEach(([key, value]) => {
            if (key === 'total') return;
            const btn = filters.querySelector(`[data-filter="${key}"]`);
            const count = btn && btn.querySelector('.records-tab-count');
            if (count) count.textContent = value;
        });
        const allCount = filters.querySelector('[data-filter="all"] .records-tab-count');
        if (allCount) allCount.textContent = stats.total;
        refreshHeroStats(stats);
    }

    function statusTimelineText(record) {
        if (record.status === 'picked_up') return record.pickup_date ? `已领取 · ${record.pickup_date}` : '已领取';
        if (record.status === 'returned') return record.return_date ? `已归还 · ${record.return_date}` : '已归还';
        if (record.status === 'rejected') return record.reject_date ? `已拒绝 · ${record.reject_date}` : '已拒绝';
        if (record.status === 'expired') return record.reject_date ? `已逾期 · ${record.reject_date}` : '已逾期';
        return '';
    }

    function statusTimelineClass(status) {
        if (status === 'picked_up') return 'timeline-step is-done tone-blue';
        if (status === 'returned') return 'timeline-step is-done tone-green';
        if (status === 'rejected') return 'timeline-step is-done tone-red';
        if (status === 'expired') return 'timeline-step is-done tone-orange';
        return 'timeline-step';
    }

    function syncRecord(record) {
        const card = list.querySelector(`[data-record-id="${record.id}"]`);
        if (!card || card.dataset.status === record.status) return false;
        const title = card.querySelector('a')?.textContent.trim() || '该书';
        setStatus(card, record.status);
        setActions(card, record.status, String(record.id), title);
        const progress = card.querySelector('.record-progress');
        if (progress && record.status !== 'picked_up') progress.remove();
        appendTimelineStep(card, statusTimelineClass(record.status), statusTimelineText(record));
        return true;
    }

    let syncInFlight = false;
    let recordsRefreshInFlight = false;
    let userActionInFlight = false;

    async function refreshRecordsView(stats) {
        if (recordsRefreshInFlight || userActionInFlight || confirmEl.classList.contains('is-open') || document.hidden) return;
        recordsRefreshInFlight = true;
        try {
            const resp = await fetch(window.location.pathname + window.location.search, {
                headers: { 'X-Requested-With': 'XMLHttpRequest' }
            });
            if (!resp.ok) return;
            const html = await resp.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const nextList = doc.getElementById('records-list');
            const nextFilters = doc.getElementById('records-filters');
            if (nextList) list.innerHTML = nextList.innerHTML;
            if (nextFilters) filters.innerHTML = nextFilters.innerHTML;
            setExactStats(stats);
            applyFilter(currentFilter);
        } catch (err) {
            list.dataset.syncState = 'stale';
        } finally {
            recordsRefreshInFlight = false;
        }
    }

    async function syncRecords() {
        if (syncInFlight || userActionInFlight || confirmEl.classList.contains('is-open') || document.hidden) return;
        syncInFlight = true;
        try {
            const resp = await fetch('/borrow_records/status', { headers: { 'X-Requested-With': 'XMLHttpRequest' } });
            if (!resp.ok) return;
            const data = await resp.json();
            if (!data.success || !Array.isArray(data.records)) return;
            let changed = false;
            data.records.forEach(record => { changed = syncRecord(record) || changed; });
            setExactStats(data.stats);
            list.dataset.syncState = 'ok';
            if (changed) applyFilter(currentFilter);
        } catch (err) {
            list.dataset.syncState = 'stale';
        } finally {
            syncInFlight = false;
        }
    }

    window.addEventListener('library:borrow-status-changed', function(event) {
        var data = event.detail;
        if (!data || !Array.isArray(data.records)) return;
        var changed = false;
        var hasMissingRecord = false;
        data.records.forEach(function(record) {
            if (!list.querySelector('[data-record-id="' + record.id + '"]')) {
                hasMissingRecord = true;
                return;
            }
            changed = syncRecord(record) || changed;
        });
        if (hasMissingRecord) {
            refreshRecordsView(data.stats);
            return;
        }
        setExactStats(data.stats);
        list.dataset.syncState = 'ok';
        if (changed) applyFilter(currentFilter);
    });
    document.addEventListener('visibilitychange', function() { if (!document.hidden) syncRecords(); });

    list.addEventListener('click', async (e) => {
        const btn = e.target.closest('.record-action-btn');
        if (!btn) return;
        const actionKey = btn.dataset.action;
        const cfg = ACTIONS[actionKey];
        if (!cfg) return;

        const recordId = btn.dataset.recordId;
        const bookTitle = btn.dataset.bookTitle || '该书';
        userActionInFlight = true;
        const ok = await openConfirm(cfg.confirm(bookTitle));
        if (!ok) {
            userActionInFlight = false;
            return;
        }

        const card = list.querySelector(`[data-record-id="${recordId}"]`);
        if (!card || card.dataset.status !== cfg.expectedStatus) {
            userActionInFlight = false;
            await syncRecords();
            return;
        }
        const allBtns = card.querySelectorAll('.record-action-btn');
        allBtns.forEach(b => (b.disabled = true));

        try {
            const resp = await fetch(cfg.url(recordId), {
                method: 'POST',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-Token': page.dataset.borrowActionCsrf
                }
            });
            const data = await resp.json();
            if (data.success) {
                toast(cfg.successMsg, 'success');
                Object.entries(cfg.statDelta || {}).forEach(([k, d]) => bumpStat(k, d));
                bumpHeroFromDelta(cfg.statDelta);
                updateCard(card, cfg);
                applyFilter(currentFilter);
            } else {
                toast(data.message || '操作失败', 'error');
                allBtns.forEach(b => (b.disabled = false));
            }
        } catch (err) {
            toast('网络错误，请稍后重试', 'error');
            allBtns.forEach(b => (b.disabled = false));
        } finally {
            userActionInFlight = false;
        }
    });
})();
