// 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
var reservationState = { pendingCount: null, latestId: null, initialized: false };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `isOnlineTab` 函数，封装页面交互、请求或状态更新逻辑。
function isOnlineTab() {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var url = new URL(window.location.href);
    // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
    return url.searchParams.get('tab') === 'online' || (!url.searchParams.get('tab') && !!document.getElementById('online-users-grid'));
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `buildUserCard` 函数，封装页面交互、请求或状态更新逻辑。
function buildUserCard(u) {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var isAdmin = u.user_type === 'admin';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var avatarClass = isAdmin
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        ? 'bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white'
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        : 'bg-gradient-to-br from-brand-deep to-brand-deep/80 text-white';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var roleClass = isAdmin ? 'text-purple-600' : 'text-brand-deep/40';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var roleLabel = isAdmin ? '管理员' : '普通用户';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var userId   = escapeHtml(u.user_id);
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var userType = escapeHtml(u.user_type);
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var username = escapeHtml(u.username || '');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var usernameInitial = escapeHtml((u.username || '?').charAt(0).toUpperCase());
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var ipAddress = escapeHtml(u.ip_address || '—');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var geoLocation = escapeHtml(u.geo_location || '');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var lastSeen  = escapeHtml(u.last_seen || '—');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
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
    // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
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
            <div class="flex items-center justify-between text-[11px] pt-3 border-t border-pink-50">
                <div class="flex items-center gap-1.5 min-w-0">
                    <span class="font-mono text-brand-deep/50 shrink-0">${ipAddress}</span>
                    ${geoLocation ? '<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-md border border-blue-100 truncate online-geo"><svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' + geoLocation + '</span>' : ''}
                </div>
                <span class="font-mono font-semibold text-brand-deep/70 online-last-seen shrink-0">${lastSeen}</span>
            </div>
            ${kickBtn}
        </article>`;
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `renderOnlineUsers` 函数，封装页面交互、请求或状态更新逻辑。
function renderOnlineUsers(users) {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var grid = document.getElementById('online-users-grid');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!grid) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var incoming = new Map(users.map(function (u) { return [`${u.user_type}:${u.user_id}`, u]; }));
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var existing = new Map();
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    grid.querySelectorAll('[data-uid]').forEach(function (el) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        existing.set(`${el.dataset.utype}:${el.dataset.uid}`, el);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    existing.forEach(function (el, key) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!incoming.has(key)) {
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            el.style.opacity   = '0';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            el.style.transform = 'scale(0.95)';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            setTimeout(function () { el.remove(); }, 320);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    incoming.forEach(function (u, key) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var el = existing.get(key);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (el) {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var ts = el.querySelector('.online-last-seen');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (ts) ts.textContent = u.last_seen;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var ip = el.querySelector('.font-mono.text-brand-deep\\/50');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (ip) ip.textContent = u.ip_address || '—';
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var geo = el.querySelector('.online-geo');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (u.geo_location && !geo) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                var geoHtml = '<span class="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-semibold rounded-md border border-blue-100 truncate online-geo"><svg class="w-2.5 h-2.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>' + escapeHtml(u.geo_location) + '</span>';
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (ip && ip.parentElement) ip.parentElement.insertAdjacentHTML('beforeend', geoHtml);
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var tmp = document.createElement('div');
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            tmp.innerHTML = buildUserCard(u).trim();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var card = tmp.firstElementChild;
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.opacity   = '0';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.transform = 'translateY(8px)';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            grid.prepend(card);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            requestAnimationFrame(function () {
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                card.style.opacity    = '1';
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                card.style.transform  = 'translateY(0)';
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    updateOnlineCountBadges(users.length);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `updateOnlineCountBadges` 函数，封装页面交互、请求或状态更新逻辑。
function updateOnlineCountBadges(count) {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var kpiVal = document.querySelector('.admin-kpi.tone-online .admin-kpi-value');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (kpiVal) kpiVal.textContent = count;
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.querySelectorAll('#badge-online').forEach(function (el) { el.textContent = count; });
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var badge = document.getElementById('online-count-badge');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (badge) badge.textContent = count + ' 人';
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `checkOnlineUsers` 函数，封装页面交互、请求或状态更新逻辑。
function checkOnlineUsers() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.hidden || !isOnlineTab()) return;
    // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
    fetch('/api/online_users')
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        .then(function (res) { return res.json(); })
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        .then(function (data) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!data.success) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            renderOnlineUsers(data.users || []);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        })
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        .catch(function () {});
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `handleReservationEvent` 函数，封装页面交互、请求或状态更新逻辑。
function handleReservationEvent(data) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!data) return;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var isLiveEvent = !!data.action;
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!reservationState.initialized) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reservationState.pendingCount  = data.pending_count;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reservationState.latestId      = data.latest_id;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reservationState.initialized   = true;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!isLiveEvent) return;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var countChanged = data.pending_count !== reservationState.pendingCount;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var newRecord    = data.latest_id > reservationState.latestId;
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (countChanged || newRecord || isLiveEvent) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (data.pending_count > reservationState.pendingCount) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('检测到新的预约记录', 'info');
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else if (data.pending_count < reservationState.pendingCount) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('预约状态已更新', 'info');
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else if (isLiveEvent) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('借阅状态已同步', 'info');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reservationState.pendingCount = data.pending_count;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reservationState.latestId = data.latest_id;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (typeof window.refreshAdminPanel === 'function') {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.refreshAdminPanel(null, { updateHistory: false });
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            location.reload();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `checkNewReservations` 函数，封装页面交互、请求或状态更新逻辑。
function checkNewReservations() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.hidden) return;
    // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
    fetch('/admin/check_new_reservations')
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        .then(function (res) { return res.json(); })
        // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
        .then(function (data) { handleReservationEvent(data); })
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        .catch(function () {});
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `startOnlineTimestampTick` 函数，封装页面交互、请求或状态更新逻辑。
function startOnlineTimestampTick() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!isOnlineTab()) return;
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setInterval(function () {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var hms = new Date().toTimeString().slice(0, 8);
        // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
        document.querySelectorAll('.online-last-seen').forEach(function (el) {
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            el.textContent = hms;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 1000);
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function () {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (window.location.pathname !== '/admin') return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    checkNewReservations();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    checkOnlineUsers();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    startOnlineTimestampTick();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:online-users-changed', function (event) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var data = event.detail || {};
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        renderOnlineUsers(data.users || []);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:reservation-changed', function (event) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        handleReservationEvent(event.detail || {});
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('visibilitychange', function () {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (window.location.pathname !== '/admin') return;
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!document.hidden) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        checkOnlineUsers();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
