/**
 * 管理员页面JavaScript - 图书管理系统
 * 包含图书管理、预约管理等功能
 */

function getAdminCsrfHeaders(headers = {}) {
    return { ...headers, 'X-CSRF-Token': window.adminConfig?.csrfToken || '' };
}

function adminPostInit(init = {}) {
    return { ...init, method: 'POST', headers: getAdminCsrfHeaders(init.headers || {}) };
}

// ==================== 标签页切换 ====================
function switchAdminTab(btn, tabKey) {
    // 记录当前滚动位置
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    const navItems = document.querySelectorAll('[data-tab]');

    navItems.forEach(item => {
        item.classList.remove('is-active');
        const badge = item.querySelector('[class*="badge"]');
        if (badge) {
            badge.className = 'sidebar-nav-badge-inactive';
        }
    });

    btn.classList.add('is-active');
    const activeBadge = btn.querySelector('[class*="badge"]');
    if (activeBadge) {
        activeBadge.className = 'sidebar-nav-badge';
    }

    const baseUrl = window.location.pathname.replace(/\?.*/, '');
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
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, 'text/html');

        const newAside = doc.querySelector('aside');
        const newSection = doc.querySelector('section');
        const oldSection = document.querySelector('section');

        if (!newSection || !oldSection || !newAside) return;

        // 移除新section的入场动画类，避免切换时的位移动画
        newSection.classList.remove('animate-in', 'fade-in', 'slide-in-from-right-4', 'duration-700');

        // 替换section内容
        oldSection.replaceWith(newSection);
        window.history.replaceState({}, '', `${targetUrl.pathname}${targetUrl.search}`);

        // 从新的sidebar中提取badge数据
        const tabs = ['online', 'books', 'current', 'history'];
        tabs.forEach(key => {
            const newBadge = newAside.querySelector(`#badge-${key}`);
            const oldBadge = document.getElementById(`badge-${key}`);
            if (newBadge && oldBadge) {
                oldBadge.textContent = newBadge.textContent;
            }
        });

        initCurrentStatusFilter();

        // 恢复滚动位置（页面高度已统一，不会再有位移问题）
        window.scrollTo(0, scrollY);
    })
    .catch(() => {});
}

function initCurrentStatusFilter() {
    const tabs = Array.from(document.querySelectorAll('[data-current-status-tab]'));
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
        const label = status === 'picked_up' ? '已取待归还' : '待审核';
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

    const requestedStatus = new URL(window.location.href).searchParams.get('status');
    const currentDefaultStatus = document.querySelector('[data-current-default-status]')?.dataset.currentDefaultStatus || 'pending';
    const availableStatuses = tabs.map(tab => tab.dataset.currentStatusTab);
    setActiveTab(availableStatuses.includes(requestedStatus) ? requestedStatus : currentDefaultStatus);
}

// ==================== 数字步进控件 ====================
function adjustNumber(inputId, delta) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const current = parseInt(input.value, 10) || 0;
    const min = parseInt(input.min, 10);
    const next = isNaN(min) ? current + delta : Math.max(min, current + delta);
    input.value = next;
}

// ==================== 图片预览 ====================
function previewImage(input, previewId) {
    const container = document.getElementById(previewId);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // 清除占位符
            container.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = 'none');
            // 移除旧预览图
            const oldImg = container.querySelector('img');
            if (oldImg) oldImg.remove();
            // 插入新预览图
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'w-full h-full object-cover rounded-2xl';
            container.appendChild(img);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// ==================== 添加图书 ====================
function openAddBookModal() {
    const form = document.getElementById('addBookForm');
    form.reset();
    // 重置图片预览
    const preview = document.getElementById('addImagePreview');
    const oldImg = preview.querySelector('img');
    if (oldImg) oldImg.remove();
    preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = '');
    openModal(document.getElementById('addBookModal'));
}

function closeAddBookModal() {
    closeModal(document.getElementById('addBookModal'));
}

document.addEventListener('DOMContentLoaded', function() {
    initCurrentStatusFilter();
});

document.addEventListener('DOMContentLoaded', function() {
    const addBookForm = document.getElementById('addBookForm');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const form = this;
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = '提交中...';

            const formData = new FormData(form);
            fetch('/book/add', adminPostInit({ body: formData }))
                .then(res => res.json())
                .then(data => {
                    btn.disabled = false;
                    btn.textContent = '确认入库馆藏集';
                    if (data.success) {
                        showToast(data.message, 'success');
                        closeAddBookModal();
                        setTimeout(() => location.reload(), 800);
                    } else {
                        showToast(data.message, 'error');
                    }
                })
                .catch(() => {
                    btn.disabled = false;
                    btn.textContent = '确认入库馆藏集';
                    showToast('添加失败，请稍后重试', 'error');
                });
        });
    }
});

// ==================== 编辑图书 ====================
let currentEditBookId = null;
let lastModalTrigger = null;

function getModalFocusableElements(modal) {
    return Array.from(modal.querySelectorAll('a[href], button, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter(el => !el.disabled && el.offsetParent !== null);
}

function openModal(modal) {
    if (!modal) return;
    lastModalTrigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modal.classList.remove('hidden');
    const focusable = getModalFocusableElements(modal);
    if (focusable.length > 0) focusable[0].focus();
}

function closeModal(modal) {
    if (!modal || modal.classList.contains('hidden')) return;
    modal.classList.add('hidden');
    if (lastModalTrigger && document.contains(lastModalTrigger)) lastModalTrigger.focus();
    lastModalTrigger = null;
}

function trapModalFocus(e, modal) {
    if (!modal || e.key !== 'Tab' || modal.classList.contains('hidden')) return;
    const focusable = getModalFocusableElements(modal);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!modal.contains(document.activeElement)) {
        e.preventDefault();
        first.focus();
        return;
    }
    if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
    }
}

// 从 data 属性读取并调用主函数
function openEditBookModalFromData(button) {
    const dataset = button.dataset;
    openEditBookModal(
        parseInt(dataset.bookId),
        dataset.bookTitle,
        dataset.bookAuthor,
        dataset.bookIsbn,
        dataset.bookPublisher,
        dataset.bookLocation,
        dataset.bookCategory,
        parseInt(dataset.bookStock),
        parseInt(dataset.bookTotal),
        dataset.bookImage
    );
}

function openEditBookModal(id, title, author, isbn, publisher, location, category, stock, total, image) {
    currentEditBookId = id;
    document.getElementById('editBookId').value = id;
    document.getElementById('editTitle').value = title;
    document.getElementById('editAuthor').value = author;
    document.getElementById('editIsbn').value = isbn || '';
    document.getElementById('editPublisher').value = publisher || '';
    document.getElementById('editLocation').value = location || '';
    document.getElementById('editCategory').value = category || '';
    document.getElementById('editStock').value = stock;
    document.getElementById('editTotal').value = total;

    // 重置文件输入
    document.getElementById('editBookImage').value = '';

    // 显示现有封面预览
    const preview = document.getElementById('editImagePreview');
    const oldImg = preview.querySelector('img');
    if (oldImg) oldImg.remove();
    preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = '');

    if (image) {
        const img = document.createElement('img');
        img.src = '/static/images/' + image;
        img.className = 'w-full h-full object-cover rounded-2xl';
        preview.appendChild(img);
        preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = 'none');
    }

    openModal(document.getElementById('editBookModal'));
}

function closeEditBookModal() {
    closeModal(document.getElementById('editBookModal'));
    currentEditBookId = null;
}

document.addEventListener('DOMContentLoaded', function() {
    const editBookForm = document.getElementById('editBookForm');
    if (editBookForm) {
        editBookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            if (!currentEditBookId) return;

            const form = this;
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = '保存中...';

            const formData = new FormData(form);
            fetch(`/book/edit/${currentEditBookId}`, adminPostInit({ body: formData }))
                .then(res => res.json())
                .then(data => {
                    btn.disabled = false;
                    btn.textContent = '保存修改';
                    if (data.success) {
                        showToast(data.message, 'success');
                        closeEditBookModal();
                        setTimeout(() => location.reload(), 800);
                    } else {
                        showToast(data.message, 'error');
                    }
                })
                .catch(() => {
                    btn.disabled = false;
                    btn.textContent = '保存修改';
                    showToast('更新失败，请稍后重试', 'error');
                });
        });
    }
});

// ==================== 删除图书 ====================
function deleteCurrentBook() {
    if (!currentEditBookId) return;
    showConfirm('删除图书', '确定要删除这本图书吗？此操作无法撤销。', () => {
        fetch(`/book/delete/${currentEditBookId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    closeEditBookModal();
                    setTimeout(() => location.reload(), 800);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('删除失败，请稍后重试', 'error'));
    }, 'danger');
}

// ==================== 预约管理 ====================
function approveReservation(recordId) {
    pauseAutoRefresh(); // 暂停自动刷新
    showConfirm('同意领取', '确认同意该用户领取图书吗？', () => {
        fetch(`/admin/approve_reservation/${recordId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    setTimeout(() => location.reload(), 1500);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    }, 'info');
}

function rejectReservation(recordId) {
    pauseAutoRefresh(); // 暂停自动刷新
    showConfirm('拒绝领取', '确认拒绝该用户领取图书吗？库存将自动恢复。', () => {
        fetch(`/admin/reject_reservation/${recordId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    setTimeout(() => location.reload(), 1500);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    }, 'danger');
}

function adminReturnBook(recordId) {
    pauseAutoRefresh(); // 暂停自动刷新
    showConfirm('确认归还', '确认该图书已归还入库吗？', () => {
        fetch(`/admin/return_book/${recordId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    setTimeout(() => location.reload(), 1500);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    }, 'warning');
}

// ==================== 搜索交互优化 ====================
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('input[name="search"]');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.classList.add('scale-[1.02]');
        });
        searchInput.addEventListener('blur', function() {
            this.parentElement.classList.remove('scale-[1.02]');
        });
    }
});

// ==================== 设置库存进度条宽度 ====================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-width]').forEach(function(el) {
        const width = el.getAttribute('data-width');
        el.style.width = width + '%';
    });
});

// ==================== 键盘快捷键 ====================
document.addEventListener('keydown', function(e) {
    const addBookModal = document.getElementById('addBookModal');
    const editBookModal = document.getElementById('editBookModal');
    if (e.key === 'Escape') {
        closeAddBookModal();
        closeEditBookModal();
        return;
    }
    trapModalFocus(e, addBookModal);
    trapModalFocus(e, editBookModal);
});

// ==================== 点击遮罩关闭模态框 ====================
document.addEventListener('DOMContentLoaded', function() {
    const addBookModal = document.getElementById('addBookModal');
    const editBookModal = document.getElementById('editBookModal');

    if (addBookModal) {
        addBookModal.addEventListener('click', function(e) {
            if (e.target === this) closeAddBookModal();
        });
    }

    if (editBookModal) {
        editBookModal.addEventListener('click', function(e) {
            if (e.target === this) closeEditBookModal();
        });
    }
});

// ==================== 在线用户静默刷新 ====================
const ONLINE_POLL_MS = 5000;
let onlinePollInterval = null;

function isOnlineTab() {
    const url = new URL(window.location.href);
    return url.searchParams.get('tab') === 'online' || (!url.searchParams.get('tab') && !!document.getElementById('online-users-grid'));
}

function buildUserCard(u) {
    const isAdmin = u.user_type === 'admin';
    const avatarClass = isAdmin
        ? 'bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white'
        : 'bg-gradient-to-br from-brand-deep to-brand-deep/80 text-white';
    const roleClass = isAdmin ? 'text-purple-600' : 'text-brand-deep/40';
    const roleLabel = isAdmin ? '管理员' : '普通用户';
    const userId = escapeHtml(u.user_id);
    const userType = escapeHtml(u.user_type);
    const username = escapeHtml(u.username || '');
    const usernameInitial = escapeHtml((u.username || '?').charAt(0).toUpperCase());
    const ipAddress = escapeHtml(u.ip_address || '—');
    const lastSeen = escapeHtml(u.last_seen || '—');
    const kickBtn = isAdmin ? '' : `
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
            <div class="flex items-center justify-between text-[11px] pt-3 border-t border-pink-50">
                <span class="font-mono text-brand-deep/50">${ipAddress}</span>
                <span class="font-mono font-semibold text-brand-deep/70 online-last-seen">${lastSeen}</span>
            </div>
            ${kickBtn}
        </article>`;
}

function renderOnlineUsers(users) {
    const grid = document.getElementById('online-users-grid');
    if (!grid) return;

    const incoming = new Map(users.map(u => [`${u.user_type}:${u.user_id}`, u]));
    const existing = new Map();
    grid.querySelectorAll('[data-uid]').forEach(el => {
        existing.set(`${el.dataset.utype}:${el.dataset.uid}`, el);
    });

    // 移除已下线的卡片
    existing.forEach((el, key) => {
        if (!incoming.has(key)) {
            el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            el.style.opacity = '0';
            el.style.transform = 'scale(0.95)';
            setTimeout(() => el.remove(), 320);
        }
    });

    // 更新已有卡片的时间戳 + IP，添加新卡片
    incoming.forEach((u, key) => {
        const el = existing.get(key);
        if (el) {
            const ts = el.querySelector('.online-last-seen');
            if (ts) ts.textContent = u.last_seen;
            const ip = el.querySelector('.font-mono.text-brand-deep\\/50');
            if (ip) ip.textContent = u.ip_address || '—';
        } else {
            const tmp = document.createElement('div');
            tmp.innerHTML = buildUserCard(u).trim();
            const card = tmp.firstElementChild;
            card.style.opacity = '0';
            card.style.transform = 'translateY(8px)';
            grid.prepend(card);
            requestAnimationFrame(() => {
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }
    });

    // 同步更新计数
    updateOnlineCountBadges(users.length);
}

function updateOnlineCountBadges(count) {
    const kpiVal = document.querySelector('.admin-kpi.tone-online .admin-kpi-value');
    if (kpiVal) kpiVal.textContent = count;
    document.querySelectorAll('#badge-online').forEach(el => { el.textContent = count; });
    const badge = document.getElementById('online-count-badge');
    if (badge) badge.textContent = `${count} 人`;
}

function checkOnlineUsers() {
    if (document.hidden || !isOnlineTab()) return;
    fetch('/api/online_users')
        .then(res => res.json())
        .then(data => {
            if (!data.success) return;
            renderOnlineUsers(data.users || []);
        })
        .catch(() => {});
}

function startOnlinePolling() {
    if (onlinePollInterval || !isOnlineTab()) return;
    onlinePollInterval = setInterval(checkOnlineUsers, ONLINE_POLL_MS);
}

function stopOnlinePolling() {
    if (onlinePollInterval) {
        clearInterval(onlinePollInterval);
        onlinePollInterval = null;
    }
}

// 每秒刷新时间戳
function startOnlineTimestampTick() {
    if (!isOnlineTab()) return;
    setInterval(() => {
        if (document.hidden) return;
        const hms = new Date().toTimeString().slice(0, 8);
        document.querySelectorAll('.online-last-seen').forEach(el => {
            el.textContent = hms;
        });
    }, 1000);
}

// ==================== 自动刷新管理工作台 ====================
const RESERVATIONS_POLL_MS = 5000;
let autoRefreshInterval = null;
let reservationState = { pendingCount: null, latestId: null, initialized: false };

function checkNewReservations() {
    if (document.hidden) return;
    fetch('/admin/check_new_reservations')
        .then(res => res.json())
        .then(data => {
            if (!reservationState.initialized) {
                reservationState.pendingCount = data.pending_count;
                reservationState.latestId = data.latest_id;
                reservationState.initialized = true;
                return;
            }
            const countChanged = data.pending_count !== reservationState.pendingCount;
            const newRecord = data.latest_id > reservationState.latestId;
            if (countChanged || newRecord) {
                if (data.pending_count > reservationState.pendingCount) {
                    showToast('检测到新的预约记录', 'info');
                } else if (data.pending_count < reservationState.pendingCount) {
                    showToast('预约状态已更新', 'info');
                }
                setTimeout(() => location.reload(), 1000);
            }
        })
        .catch(() => {});
}

function startReservationsPolling() {
    if (autoRefreshInterval) return;
    if (document.hidden) return;
    autoRefreshInterval = setInterval(checkNewReservations, RESERVATIONS_POLL_MS);
}

function pauseAutoRefresh() {
    if (autoRefreshInterval) {
        clearInterval(autoRefreshInterval);
        autoRefreshInterval = null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname !== '/admin') return;
    checkNewReservations();
    startReservationsPolling();
    checkOnlineUsers();
    startOnlinePolling();
    startOnlineTimestampTick();
});

document.addEventListener('visibilitychange', function() {
    if (window.location.pathname !== '/admin') return;
    if (document.hidden) {
        pauseAutoRefresh();
        stopOnlinePolling();
    } else {
        checkNewReservations();
        startReservationsPolling();
        checkOnlineUsers();
        startOnlinePolling();
    }
});

// ==================== 实时日志功能 ====================
function loadSystemLogs() {
    const logsContainer = document.getElementById('sidebarLogs');
    if (!logsContainer) return;

    const readCachedLogs = window.readAdminSidebarLogsCache;
    const writeCachedLogs = window.writeAdminSidebarLogsCache;
    const clearCachedLogs = window.clearAdminSidebarLogsCache;
    const cached = typeof readCachedLogs === 'function' ? readCachedLogs() : null;

    if (cached && Array.isArray(cached.logs) && Date.now() - cached.timestamp < 10000) {
        renderLogs(cached.logs, logsContainer);
    }

    fetch('/admin/logs?limit=15')
        .then(res => res.json())
        .then(data => {
            if (data.success && data.logs.length > 0) {
                if (typeof writeCachedLogs === 'function') {
                    writeCachedLogs(data.logs);
                }
                renderLogs(data.logs, logsContainer);
            } else {
                if (typeof clearCachedLogs === 'function') {
                    clearCachedLogs();
                }
                logsContainer.innerHTML = '<div class="text-center text-purple-300 py-4 text-[10px]">暂无日志</div>';
            }
        })
        .catch(() => {
            if (!cached || !Array.isArray(cached.logs) || cached.logs.length === 0) {
                logsContainer.innerHTML = '<div class="text-center text-red-400 py-4 text-[10px]">加载失败</div>';
            }
        });
}

function renderLogs(logs, container) {
    if (typeof window.renderAdminSidebarLogs === 'function') {
        window.renderAdminSidebarLogs(logs, container);
    }
}

// 页面加载时启动日志轮询(可见时,5s 间隔)
const LOGS_POLL_MS = 5000;
let logsPollInterval = null;

function startLogsPolling() {
    if (logsPollInterval || document.hidden) return;
    logsPollInterval = setInterval(loadSystemLogs, LOGS_POLL_MS);
}

function stopLogsPolling() {
    if (logsPollInterval) {
        clearInterval(logsPollInterval);
        logsPollInterval = null;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('sidebarLogs')) {
        loadSystemLogs();
        startLogsPolling();
    }

    if (document.getElementById('todayTabBtn')) {
        switchHistoryTab('today');
    }
});

document.addEventListener('visibilitychange', function() {
    if (!document.getElementById('sidebarLogs')) return;
    if (document.hidden) {
        stopLogsPolling();
    } else {
        loadSystemLogs();
        startLogsPolling();
    }
});

// ==================== 历史记录标签页切换 ====================
function switchHistoryTab(tabName) {
    // 获取所有标签按钮和内容
    const todayBtn = document.getElementById('todayTabBtn');
    const pastBtn = document.getElementById('pastTabBtn');
    const todayContent = document.getElementById('todayRecordsTab');
    const pastContent = document.getElementById('pastRecordsTab');

    // 移除所有按钮的激活状态
    document.querySelectorAll('.history-tab-btn').forEach(btn => {
        btn.classList.remove('border-brand-primary', 'text-brand-primary', 'bg-pink-50/50');
        btn.classList.add('border-transparent', 'text-brand-deep/60');
    });

    // 隐藏所有内容
    document.querySelectorAll('.history-tab-content').forEach(content => {
        content.classList.add('hidden');
    });

    // 激活选中的标签
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

// ==================== 踢出用户 ====================
document.addEventListener('click', (e) => {
    const btn = e.target.closest('.kick-btn');
    if (!btn) return;

    const userId = btn.dataset.userId;
    const username = btn.dataset.username || '该用户';

    showConfirm(
        '强制下线',
        `确定要将 ${username} 强制下线吗？该用户的当前会话将立即失效。`,
        async () => {
            await performKickUser(btn, userId);
        },
        'danger'
    );
});

async function performKickUser(btn, userId) {
    let success = false;
    await withLoadingBtn(btn, '处理中…', async () => {
        try {
            const { data } = await postJson(`/admin/kick_user/${userId}`);
            if (data.success) {
                showToast(data.message, 'success');
                success = true;
            } else {
                showToast(data.message || '操作失败', 'error');
            }
        } catch (err) {
            showToast('网络错误，请稍后重试', 'error');
        }
    });
    if (success) {
        const card = btn.closest('article');
        if (card) {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => card.remove(), 420);
        }
    }
}

// ==================== 封禁用户（弹出时长选择） ====================
function openBanModal(userId, username) {
    if (document.querySelector('.ban-modal-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'ban-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    overlay.style.background = 'linear-gradient(135deg, rgba(225,29,72,0.25), rgba(236,72,153,0.18))';
    overlay.innerHTML = `
        <div class="bg-white w-full max-w-md rounded-[2.5rem] p-7 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300" role="dialog" aria-modal="true" aria-labelledby="banModalTitle">
            <div class="flex flex-col items-center text-center">
                <div class="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-rose-50 text-rose-600">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                </div>
                <h3 id="banModalTitle" class="mb-2 text-2xl font-heading font-bold text-brand-deep">封禁账号</h3>
                <p class="mb-6 text-sm font-medium text-brand-deep/55">即将封禁用户 <span class="font-bold text-rose-600">${escapeHtml(username)}</span>，封禁期间该账号无法登录。</p>

                <div class="w-full mb-4">
                    <p class="text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left">快捷选择</p>
                    <div class="grid grid-cols-3 gap-2">
                        ${[5, 30, 60, 180, 720, 1440].map(m => `
                            <button type="button" data-mins="${m}" class="ban-quick min-h-[44px] px-3 py-2 text-xs font-bold rounded-xl border border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-colors">
                                ${m < 60 ? m + ' 分钟' : (m % 1440 === 0 ? (m/1440) + ' 天' : (m/60) + ' 小时')}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="w-full mb-6">
                    <label for="ban-minutes-input" class="block text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left">自定义时长（分钟）</label>
                    <input type="number" min="1" max="525600" id="ban-minutes-input" placeholder="例如：60"
                           class="w-full px-4 py-3 bg-white border border-pink-100 hover:border-rose-300 focus:border-rose-500 rounded-2xl text-sm font-medium transition-all outline-none shadow-sm focus:shadow-[0_0_0_3px_rgba(244,63,94,0.12)]">
                </div>

                <div class="flex w-full gap-3">
                    <button class="ban-cancel flex-1 rounded-2xl py-3.5 text-sm font-bold text-brand-deep/55 border border-pink-100 hover:bg-white/50 transition-colors">取消</button>
                    <button class="ban-confirm flex-1 rounded-2xl py-3.5 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors">确认封禁</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('#ban-minutes-input');
    const onBanKeydown = e => {
        if (e.key === 'Escape') {
            closeBanModal();
            return;
        }
        trapModalFocus(e, overlay);
    };
    const closeBanModal = () => {
        closeModal(overlay);
        overlay.remove();
        document.removeEventListener('keydown', onBanKeydown);
    };

    openModal(overlay);
    document.addEventListener('keydown', onBanKeydown);

    overlay.querySelectorAll('.ban-quick').forEach(b => {
        b.addEventListener('click', () => {
            input.value = b.dataset.mins;
            overlay.querySelectorAll('.ban-quick').forEach(x => x.classList.remove('bg-rose-600', 'text-white', 'border-rose-600'));
            b.classList.add('bg-rose-600', 'text-white', 'border-rose-600');
        });
    });

    overlay.querySelector('.ban-cancel').addEventListener('click', closeBanModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeBanModal(); });

    overlay.querySelector('.ban-confirm').addEventListener('click', () => {
        const minutes = parseInt(input.value, 10);
        if (!minutes || minutes <= 0) {
            showToast('请输入大于 0 的封禁时长', 'warning');
            input.focus();
            return;
        }
        const confirmBtn = overlay.querySelector('.ban-confirm');
        const fd = new FormData();
        fd.append('minutes', String(minutes));
        withLoadingBtn(confirmBtn, '处理中…', async () => {
            try {
                const { data } = await postJson(`/admin/ban_user/${userId}`, fd);
                if (data.success) {
                    showToast(data.message, 'success');
                    closeBanModal();
                    setTimeout(() => window.location.reload(), 600);
                } else {
                    showToast(data.message || '封禁失败', 'error');
                }
            } catch (err) {
                showToast('网络错误，请稍后重试', 'error');
            }
        });
    });

    input.focus();
}

document.addEventListener('click', (e) => {
    const banBtn = e.target.closest('.ban-btn');
    if (banBtn) {
        openBanModal(banBtn.dataset.userId, banBtn.dataset.username || '该用户');
        return;
    }

    const unbanBtn = e.target.closest('.unban-btn');
    if (unbanBtn) {
        const userId = unbanBtn.dataset.userId;
        const username = unbanBtn.dataset.username || '该用户';
        showConfirm(
            '解除封禁',
            `确定要解除 ${username} 的封禁吗？解除后该账号可立即登录。`,
            () => withLoadingBtn(unbanBtn, '处理中…', async () => {
                try {
                    const { data } = await postJson(`/admin/unban_user/${userId}`);
                    if (data.success) {
                        showToast(data.message, 'success');
                        setTimeout(() => window.location.reload(), 600);
                    } else {
                        showToast(data.message || '操作失败', 'error');
                    }
                } catch (err) {
                    showToast('网络错误，请稍后重试', 'error');
                }
            }),
            'info'
        );
        return;
    }

    const resetPwdBtn = e.target.closest('.reset-pwd-btn');
    if (resetPwdBtn) {
        const userId = resetPwdBtn.dataset.userId;
        const username = resetPwdBtn.dataset.username || '该用户';
        showConfirm(
            '初始化密码',
            `确定要将 ${username} 的密码重置为学号吗？此操作不可撤销。`,
            () => withLoadingBtn(resetPwdBtn, '处理中…', async () => {
                try {
                    const { data } = await postJson(`/admin/reset_password/${userId}`);
                    if (data.success) {
                        showToast(data.message, 'success');
                    } else {
                        showToast(data.message || '操作失败', 'error');
                    }
                } catch (err) {
                    showToast('网络错误，请稍后重试', 'error');
                }
            }),
            'warning'
        );
    }
});

