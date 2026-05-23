function switchAdminTab(btn, tabKey) {
    const scrollY = window.scrollY;

    document.querySelectorAll('[data-tab]').forEach(item => {
        item.classList.remove('is-active');
        const badge = item.querySelector('[class*="badge"]');
        if (badge) badge.className = 'sidebar-nav-badge-inactive';
    });

    btn.classList.add('is-active');
    const activeBadge = btn.querySelector('[class*="badge"]');
    if (activeBadge) activeBadge.className = 'sidebar-nav-badge';

    const baseUrl   = window.location.pathname.replace(/\?.*/, '');
    const targetUrl = new URL(baseUrl, window.location.origin);
    targetUrl.searchParams.set('tab', tabKey);
    if (tabKey === 'current') {
        const currentStatus = new URL(window.location.href).searchParams.get('status');
        if (currentStatus) targetUrl.searchParams.set('status', currentStatus);
    }

    fetch(`${targetUrl.pathname}${targetUrl.search}`, {
        method: 'GET',
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
        .then(res => res.text())
        .then(htmlText => {
            const parser     = new DOMParser();
            const doc        = parser.parseFromString(htmlText, 'text/html');
            const newAside   = doc.querySelector('aside');
            const newSection = doc.querySelector('section');
            const oldSection = document.querySelector('section');

            if (!newSection || !oldSection || !newAside) return;

            newSection.classList.remove('animate-in', 'fade-in', 'slide-in-from-right-4', 'duration-700');
            oldSection.replaceWith(newSection);
            window.history.replaceState({}, '', `${targetUrl.pathname}${targetUrl.search}`);

            const tabs = ['online', 'books', 'current', 'history'];
            tabs.forEach(key => {
                const newBadge = newAside.querySelector(`#badge-${key}`);
                const oldBadge = document.getElementById(`badge-${key}`);
                if (newBadge && oldBadge) {
                    oldBadge.textContent = newBadge.textContent;
                }
            });

            initCurrentStatusFilter();
            window.scrollTo(0, scrollY);
        })
        .catch(() => {});
}

function initCurrentStatusFilter() {
    const tabs  = Array.from(document.querySelectorAll('[data-current-status-tab]'));
    const cards = Array.from(document.querySelectorAll('[data-current-record-status]'));
    if (tabs.length === 0) return;

    const setActiveTab = status => {
        let visibleCount = 0;

        tabs.forEach(tab => {
            const isActive = tab.dataset.currentStatusTab === status;
            tab.classList.toggle('is-active', isActive);
            tab.classList.toggle('border-brand-primary', isActive);
            tab.classList.toggle('text-brand-primary', isActive);
            tab.classList.toggle('bg-pink-50/50', isActive);
            tab.classList.toggle('border-transparent', !isActive);
            tab.classList.toggle('text-brand-deep/50', !isActive);
            tab.setAttribute('aria-pressed', String(isActive));
        });

        cards.forEach(card => {
            const isVisible = card.dataset.currentRecordStatus === status;
            card.hidden = !isVisible;
            if (isVisible) visibleCount += 1;
        });

        document.querySelectorAll('[data-current-empty-state]').forEach(empty => {
            empty.classList.toggle('hidden', empty.dataset.currentEmptyState !== status || visibleCount > 0);
        });

        document.querySelectorAll('input[name="status"]').forEach(input => {
            input.value = status;
        });

        const label        = status === 'picked_up' ? '已取待归还' : '待审核';
        const announcement = document.getElementById('current-status-announcement');
        if (announcement) announcement.textContent = `已切换到${label}，共 ${visibleCount} 条记录`;

        const url = new URL(window.location.href);
        url.searchParams.set('tab', 'current');
        url.searchParams.set('status', status);
        window.history.replaceState({}, '', url);
    };

    tabs.forEach(tab => {
        tab.addEventListener('click', () => setActiveTab(tab.dataset.currentStatusTab));
    });

    const requestedStatus     = new URL(window.location.href).searchParams.get('status');
    const currentDefaultStatus = document.querySelector('[data-current-default-status]')?.dataset.currentDefaultStatus || 'pending';
    const availableStatuses   = tabs.map(tab => tab.dataset.currentStatusTab);
    setActiveTab(availableStatuses.includes(requestedStatus) ? requestedStatus : currentDefaultStatus);
}

function switchHistoryTab(tabName) {
    const todayBtn     = document.getElementById('todayTabBtn');
    const pastBtn      = document.getElementById('pastTabBtn');
    const todayContent = document.getElementById('todayRecordsTab');
    const pastContent  = document.getElementById('pastRecordsTab');

    document.querySelectorAll('.history-tab-btn').forEach(btn => {
        btn.classList.remove('border-brand-primary', 'text-brand-primary', 'bg-pink-50/50');
        btn.classList.add('border-transparent', 'text-brand-deep/60');
    });
    document.querySelectorAll('.history-tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    if (tabName === 'today') {
        todayBtn.classList.remove('border-transparent', 'text-brand-deep/60');
        todayBtn.classList.add('border-brand-primary', 'text-brand-primary', 'bg-pink-50/50');
        todayContent.classList.remove('hidden');
    } else if (tabName === 'past') {
        pastBtn.classList.remove('border-transparent', 'text-brand-deep/60');
        pastBtn.classList.add('border-brand-primary', 'text-brand-primary', 'bg-pink-50/50');
        pastContent.classList.remove('hidden');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    initCurrentStatusFilter();
    if (document.getElementById('todayTabBtn')) {
        switchHistoryTab('today');
    }
});
