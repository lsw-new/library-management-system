var reservationState = { pendingCount: null, latestId: null, initialized: false };

function isOnlineTab() {
    var url = new URL(window.location.href);
    return url.searchParams.get('tab') === 'online' || (!url.searchParams.get('tab') && !!document.getElementById('online-users-grid'));
}

function buildUserCard(u) {
    var isAdmin = u.user_type === 'admin';
    var avatarClass = isAdmin
        ? 'bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white'
        : 'bg-gradient-to-br from-brand-deep to-brand-deep/80 text-white';
    var roleClass = isAdmin ? 'text-purple-600' : 'text-brand-deep/40';
    var roleLabel = isAdmin ? '管理员' : '普通用户';
    var userId   = escapeHtml(u.user_id);
    var userType = escapeHtml(u.user_type);
    var username = escapeHtml(u.username || '');
    var usernameInitial = escapeHtml((u.username || '?').charAt(0).toUpperCase());
    var ipAddress = escapeHtml(u.ip_address || '—');
    var geoLocation = escapeHtml(u.geo_location || '');
    var lastSeen  = escapeHtml(u.last_seen || '—');
    var kickBtn = isAdmin ? '' : `
        <div class="mt-2.5">
            <button type="button"
                    class="kick-btn w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-bold text-rose-600 border border-rose-200 rounded-lg hover:bg-rose-50 hover:border-rose-400 transition-colors"
                    data-user-id="${userId}"
                    data-username="${username}">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
                踢出下线
            </button>
        </div>`;
    return `
        <article class="online-user-card" data-uid="${userId}" data-utype="${userType}">
            <div class="flex items-center gap-3 mb-3">
                <div class="relative flex-shrink-0">
                    <div class="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-base shadow-sm ${avatarClass}">${usernameInitial}</div>
                    <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white">
                        <span class="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60"></span>
                    </span>
                </div>
                <div class="min-w-0 flex-1">
                    <p class="text-sm font-bold text-brand-deep truncate">${username}</p>
                    <p class="text-[10px] font-bold uppercase tracking-wider mt-0.5 ${roleClass}">${roleLabel}</p>
                </div>
                <span class="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>活跃
                </span>
            </div>
            <div class="online-meta">
                <div class="online-ip" title="${ipAddress}">
                    <svg class="online-ip-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>
                    <span class="online-ip-text">${ipAddress}</span>
                </div>
                <div class="online-sub">
                    ${geoLocation ? '<span class="online-geo"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span class="online-geo-text">' + geoLocation + '</span></span>' : '<span class="online-geo-empty"></span>'}
                    <span class="online-last-seen">${lastSeen}</span>
                </div>
            </div>
            ${kickBtn}
        </article>`;
}

function renderOnlineUsers(users) {
    var grid = document.getElementById('online-users-grid');
    if (!grid) return;

    var incoming = new Map(users.map(function (u) { return [`${u.user_type}:${u.user_id}`, u]; }));
    var existing = new Map();
    grid.querySelectorAll('[data-uid]').forEach(function (el) {
        existing.set(`${el.dataset.utype}:${el.dataset.uid}`, el);
    });

    existing.forEach(function (el, key) {
        if (!incoming.has(key)) {
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            el.style.opacity   = '0';
            el.style.transform = 'scale(0.95)';
            setTimeout(function () { el.remove(); }, 320);
        }
    });

    incoming.forEach(function (u, key) {
        var el = existing.get(key);
        if (el) {
            var ts = el.querySelector('.online-last-seen');
            if (ts) ts.textContent = u.last_seen;
            var ip = el.querySelector('.online-ip-text');
            if (ip) ip.textContent = u.ip_address || '—';
            var ipWrap = el.querySelector('.online-ip');
            if (ipWrap) ipWrap.setAttribute('title', u.ip_address || '—');
            var geo = el.querySelector('.online-geo');
            if (u.geo_location && !geo) {
                var sub = el.querySelector('.online-sub');
                var empty = el.querySelector('.online-geo-empty');
                if (empty) empty.remove();
                var geoHtml = '<span class="online-geo"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg><span class="online-geo-text">' + escapeHtml(u.geo_location) + '</span></span>';
                if (sub) sub.insertAdjacentHTML('afterbegin', geoHtml);
            }
        } else {
            var tmp = document.createElement('div');
            tmp.innerHTML = buildUserCard(u).trim();
            var card = tmp.firstElementChild;
            card.style.opacity   = '0';
            card.style.transform = 'translateY(8px)';
            grid.prepend(card);
            requestAnimationFrame(function () {
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                card.style.opacity    = '1';
                card.style.transform  = 'translateY(0)';
            });
        }
    });

    updateOnlineCountBadges(users.length);
}

function updateOnlineCountBadges(count) {
    var kpiVal = document.querySelector('.admin-kpi.tone-online .admin-kpi-value');
    if (kpiVal) kpiVal.textContent = count;
    document.querySelectorAll('#badge-online').forEach(function (el) { el.textContent = count; });
    var badge = document.getElementById('online-count-badge');
    if (badge) badge.textContent = count + ' 人';
}

function checkOnlineUsers() {
    if (document.hidden || !isOnlineTab()) return;
    fetch('/api/online_users')
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (!data.success) return;
            renderOnlineUsers(data.users || []);
        })
        .catch(function () {});
}

function handleReservationEvent(data) {
    if (!data) return;
    var isLiveEvent = !!data.action;
    if (!reservationState.initialized) {
        reservationState.pendingCount  = data.pending_count;
        reservationState.latestId      = data.latest_id;
        reservationState.initialized   = true;
        if (!isLiveEvent) return;
    }
    var countChanged = data.pending_count !== reservationState.pendingCount;
    var newRecord    = data.latest_id > reservationState.latestId;
    if (countChanged || newRecord || isLiveEvent) {
        if (data.pending_count > reservationState.pendingCount) {
            showToast('检测到新的预约记录', 'info');
        } else if (data.pending_count < reservationState.pendingCount) {
            showToast('预约状态已更新', 'info');
        } else if (isLiveEvent) {
            showToast('借阅状态已同步', 'info');
        }
        reservationState.pendingCount = data.pending_count;
        reservationState.latestId = data.latest_id;
        if (typeof window.refreshAdminPanel === 'function') {
            window.refreshAdminPanel(null, { updateHistory: false });
        } else {
            location.reload();
        }
    }
}

function checkNewReservations() {
    if (document.hidden) return;
    fetch('/admin/check_new_reservations')
        .then(function (res) { return res.json(); })
        .then(function (data) { handleReservationEvent(data); })
        .catch(function () {});
}

function startOnlineTimestampTick() {
    if (!isOnlineTab()) return;
    setInterval(function () {
        if (document.hidden) return;
        var hms = new Date().toTimeString().slice(0, 8);
        document.querySelectorAll('.online-last-seen').forEach(function (el) {
            el.textContent = hms;
        });
    }, 1000);
}


document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname !== '/admin') return;

    checkNewReservations();
    checkOnlineUsers();
    startOnlineTimestampTick();

    // 兜底轮询：实时事件（socket）偶发丢失或重连间隙时，仍保证在线用户列表自动刷新。
    // checkOnlineUsers 内部已守卫 document.hidden 与 isOnlineTab，非在线页/后台标签不会请求。
    setInterval(checkOnlineUsers, 10000);

    window.addEventListener('library:online-users-changed', function (event) {
        var data = event.detail || {};
        renderOnlineUsers(data.users || []);
    });
    window.addEventListener('library:reservation-changed', function (event) {
        handleReservationEvent(event.detail || {});
    });
});

document.addEventListener('visibilitychange', function () {
    if (window.location.pathname !== '/admin') return;
    if (!document.hidden) {
        checkOnlineUsers();
    }
});
