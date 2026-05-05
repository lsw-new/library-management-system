/**
 * 借阅弹窗JavaScript - 图书管理系统
 * 爱莉希雅配色自定义日历
 */

let currentBookId = null;
let calendarState = { type: null, year: 0, month: 0, minDate: null, maxDate: null };
let detailStockInterval = null;

// ==================== 日期工具 ====================
function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

function parseDate(str) {
    if (!str) return null;
    const [y, m, d] = str.split('-').map(Number);
    return new Date(y, m - 1, d);
}

function dateToYMD(date) {
    return { y: date.getFullYear(), m: date.getMonth(), d: date.getDate() };
}

// ==================== 自定义日历渲染 ====================
function renderCalendar(type) {
    const { year, month, minDate, maxDate } = calendarState;
    const selectedVal = document.getElementById(type === 'start' ? 'borrowStartDate' : 'borrowEndDate').value;
    const selected = selectedVal ? parseDate(selectedVal) : null;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthNames = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'];
    const dayNames = ['日','一','二','三','四','五','六'];

    let cells = '';
    for (let i = 0; i < firstDay; i++) cells += `<div></div>`;
    for (let d = 1; d <= daysInMonth; d++) {
        const cur = new Date(year, month, d);
        const curStr = formatDate(cur);
        const disabled = (minDate && cur < minDate) || (maxDate && cur > maxDate);
        const isSelected = selected && formatDate(selected) === curStr;
        const isToday = formatDate(new Date()) === curStr;

        let cls = 'w-8 h-8 flex items-center justify-center rounded-full text-xs transition-all ';
        if (disabled) {
            cls += 'text-gray-300 cursor-not-allowed';
        } else if (isSelected) {
            cls += 'bg-gradient-to-br from-purple-400 to-fuchsia-400 text-white font-bold cursor-pointer shadow-md';
        } else if (isToday) {
            cls += 'border-2 border-purple-300 text-purple-600 font-semibold cursor-pointer hover:bg-purple-50';
        } else {
            cls += 'text-gray-700 cursor-pointer hover:bg-purple-100 hover:text-purple-700';
        }

        cells += `<div class="flex items-center justify-center">
            <button type="button" class="${cls}" ${disabled ? 'disabled' : ''} onclick="selectDate('${type}','${curStr}')">${d}</button>
        </div>`;
    }

    const canPrev = minDate ? new Date(year, month, 1) > new Date(minDate.getFullYear(), minDate.getMonth(), 1) : true;
    const canNext = maxDate ? new Date(year, month, 1) < new Date(maxDate.getFullYear(), maxDate.getMonth(), 1) : true;

    return `<div class="bg-white rounded-2xl shadow-2xl border border-purple-100 p-4 select-none" style="background:linear-gradient(135deg,#fdf4ff 0%,#faf5ff 100%)">
        <div class="flex items-center justify-between mb-3">
            <button type="button" onclick="shiftMonth(event,'${type}',-1)" class="w-7 h-7 flex items-center justify-center rounded-full transition-colors ${canPrev ? 'text-purple-500 hover:bg-purple-100 cursor-pointer' : 'text-gray-200 cursor-not-allowed pointer-events-none'}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <span class="text-sm font-semibold" style="background:linear-gradient(90deg,#c084fc,#e879f9);-webkit-background-clip:text;-webkit-text-fill-color:transparent">${year}年 ${monthNames[month]}</span>
            <button type="button" onclick="shiftMonth(event,'${type}',1)" class="w-7 h-7 flex items-center justify-center rounded-full transition-colors ${canNext ? 'text-purple-500 hover:bg-purple-100 cursor-pointer' : 'text-gray-200 cursor-not-allowed pointer-events-none'}">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </button>
        </div>
        <div class="grid grid-cols-7 gap-0.5 mb-1">
            ${dayNames.map(n => `<div class="text-center text-xs font-medium text-purple-300 py-1">${n}</div>`).join('')}
        </div>
        <div class="grid grid-cols-7 gap-0.5">${cells}</div>
    </div>`;
}

function toggleCalendar(type) {
    const otherId = type === 'start' ? 'calendarEnd' : 'calendarStart';
    document.getElementById(otherId).classList.add('hidden');

    const el = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
    if (!el.classList.contains('hidden')) { el.classList.add('hidden'); return; }

    const today = new Date(); today.setHours(0,0,0,0);
    if (type === 'start') {
        const startVal = document.getElementById('borrowStartDate').value;
        const initDate = startVal ? parseDate(startVal) : today;
        calendarState = { type, year: initDate.getFullYear(), month: initDate.getMonth(), minDate: today, maxDate: null };
    } else {
        const startVal = document.getElementById('borrowStartDate').value;
        const startDate = startVal ? parseDate(startVal) : today;
        const minD = new Date(startDate); minD.setDate(minD.getDate() + 1);
        const maxD = new Date(startDate); maxD.setDate(maxD.getDate() + 12);
        const endVal = document.getElementById('borrowEndDate').value;
        const initDate = endVal ? parseDate(endVal) : maxD;
        calendarState = { type, year: initDate.getFullYear(), month: initDate.getMonth(), minDate: minD, maxDate: maxD };
    }

    el.innerHTML = renderCalendar(type);
    el.classList.remove('hidden');
}

function shiftMonth(e, type, delta) {
    e.stopPropagation();
    calendarState.month += delta;
    if (calendarState.month > 11) { calendarState.month = 0; calendarState.year++; }
    if (calendarState.month < 0) { calendarState.month = 11; calendarState.year--; }
    const el = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
    el.innerHTML = renderCalendar(type);
}

function selectDate(type, dateStr) {
    if (type === 'start') {
        document.getElementById('borrowStartDate').value = dateStr;
        document.getElementById('borrowStartDateDisplay').value = dateStr;
        document.getElementById('calendarStart').classList.add('hidden');
        // 重置归还日期
        const startDate = parseDate(dateStr);
        const maxD = new Date(startDate); maxD.setDate(maxD.getDate() + 12);
        const maxStr = formatDate(maxD);
        document.getElementById('borrowEndDate').value = maxStr;
        document.getElementById('borrowEndDateDisplay').value = maxStr;
    } else {
        document.getElementById('borrowEndDate').value = dateStr;
        document.getElementById('borrowEndDateDisplay').value = dateStr;
        document.getElementById('calendarEnd').classList.add('hidden');
    }
    updateDuration();
}

// ==================== 更新借阅时长显示 ====================
function updateDuration() {
    const start = document.getElementById('borrowStartDate').value;
    const end = document.getElementById('borrowEndDate').value;
    const durationEl = document.getElementById('borrowDuration');
    if (start && end) {
        const diffMs = parseDate(end) - parseDate(start);
        const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
        if (diffDays > 0) {
            durationEl.textContent = `借阅时长：${diffDays} 天`;
            durationEl.className = 'text-xs text-purple-400 mt-1.5';
        } else {
            durationEl.textContent = '归还日期必须晚于借阅开始日期';
            durationEl.className = 'text-xs text-red-500 mt-1.5';
        }
    } else {
        durationEl.textContent = '';
    }
}

// ==================== 显示借阅弹窗 ====================
function showBorrowModal(bookId, bookTitle, stock) {
    currentBookId = bookId;
    document.getElementById('modalBookTitle').textContent = bookTitle;
    document.getElementById('modalBookStock').textContent = stock;

    const today = formatDate(new Date());
    const maxD = new Date(); maxD.setDate(maxD.getDate() + 12);
    const maxStr = formatDate(maxD);

    document.getElementById('borrowStartDate').value = today;
    document.getElementById('borrowStartDateDisplay').value = today;
    document.getElementById('borrowEndDate').value = maxStr;
    document.getElementById('borrowEndDateDisplay').value = maxStr;

    document.getElementById('calendarStart').classList.add('hidden');
    document.getElementById('calendarEnd').classList.add('hidden');
    document.getElementById('borrowDateError').classList.add('hidden');
    document.getElementById('borrowModal').classList.remove('hidden');
    updateDuration();
}

function showBorrowModalFromData(button) {
    showBorrowModal(parseInt(button.dataset.bookId), button.dataset.bookTitle, parseInt(button.dataset.bookStock));
}

// ==================== 关闭借阅弹窗 ====================
function closeBorrowModal() {
    document.getElementById('borrowModal').classList.add('hidden');
    document.getElementById('calendarStart').classList.add('hidden');
    document.getElementById('calendarEnd').classList.add('hidden');
    currentBookId = null;
}

function getBooksStockUrl() {
    return window.borrowModalConfig?.booksStockUrl || '/books/stock';
}

function getBookDetailPageState() {
    return document.getElementById('bookDetailPageState');
}

function createBookDetailBorrowButton(bookId, title, stock) {
    const button = document.createElement('button');
    button.type = 'button';
    button.id = 'bookDetailBorrowButton';
    button.dataset.bookId = String(bookId);
    button.dataset.bookTitle = title;
    button.dataset.bookStock = String(stock);
    button.className = 'w-full px-4 py-3 text-base font-medium text-white bg-brand-primary hover:bg-pink-600 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer';
    button.textContent = '预约图书';
    button.addEventListener('click', function() {
        showBorrowModalFromData(button);
    });
    return button;
}

function syncBorrowButtons(bookId, stock, available) {
    document.querySelectorAll(`button[data-book-id="${bookId}"]`).forEach(button => {
        if (available) {
            button.dataset.bookStock = String(stock);
            return;
        }

        button.remove();
    });
}

function updateBookCardState(bookId, stock, total, available) {
    const card = document.querySelector(`div[data-book-id="${bookId}"]`);
    if (!card) {
        return;
    }

    const stockEl = card.querySelector('.mt-auto .flex span:last-child');
    const badge = card.querySelector('.mt-auto .flex span:first-child');
    if (stockEl) {
        stockEl.textContent = `${stock}/${total}`;
        stockEl.className = `text-xs font-medium ${stock > 0 ? 'text-green-600' : 'text-red-600'}`;
    }
    if (badge) {
        badge.textContent = available ? '可借阅' : '已借出';
        badge.className = `inline-block px-3 py-1 text-xs font-medium rounded-full ${available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
    }
}

function updateBookDetailState(stock, total, available) {
    const detailState = getBookDetailPageState();
    const inventoryText = document.getElementById('bookDetailInventoryText');
    const badge = document.getElementById('bookDetailAvailabilityBadge');
    const badgeText = document.getElementById('bookDetailAvailabilityText');
    const iconPath = document.getElementById('bookDetailAvailabilityIconPath');

    if (detailState) {
        detailState.dataset.bookStock = String(stock);
        detailState.dataset.bookTotal = String(total);
    }
    if (inventoryText) {
        inventoryText.textContent = available ? `可借阅 (剩余 ${stock}/${total} 本)` : '已借出';
    }
    if (badge) {
        badge.className = `flex items-center px-4 py-2 rounded-full text-sm font-medium ${available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`;
    }
    if (badgeText) {
        badgeText.textContent = available ? '可借阅' : '已借出';
    }
    if (iconPath) {
        iconPath.setAttribute('d', available
            ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            : 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z');
    }
}

function syncBookDetailBorrowButton(bookId, stock, available) {
    const detailState = getBookDetailPageState();
    const slot = document.getElementById('bookDetailBorrowButtonSlot');
    const existingButton = document.getElementById('bookDetailBorrowButton');
    if (!detailState || !slot) {
        return;
    }

    const canBorrow = detailState.dataset.canBorrow === 'true';
    if (existingButton) {
        existingButton.dataset.bookStock = String(stock);
    }

    if (!canBorrow) {
        return;
    }

    if (!available) {
        if (existingButton) {
            existingButton.remove();
        }
        return;
    }

    if (existingButton) {
        return;
    }

    slot.appendChild(createBookDetailBorrowButton(bookId, detailState.dataset.bookTitle, stock));
}

function refreshBookDetailStock() {
    const detailState = getBookDetailPageState();
    if (!detailState) {
        return;
    }

    const bookId = detailState.dataset.bookId;
    if (!bookId) {
        return;
    }

    fetch(`${getBooksStockUrl()}?ids=${bookId}`)
        .then(response => response.json())
        .then(data => {
            const stockInfo = data[bookId];
            if (!stockInfo) {
                return;
            }

            syncBorrowButtons(bookId, stockInfo.stock, stockInfo.available);
            updateBookDetailState(stockInfo.stock, stockInfo.total, stockInfo.available);
            syncBookDetailBorrowButton(bookId, stockInfo.stock, stockInfo.available);
        })
        .catch(() => {});
}

function startBookDetailStockPolling() {
    if (detailStockInterval) {
        clearInterval(detailStockInterval);
    }

    if (!getBookDetailPageState()) {
        return;
    }

    refreshBookDetailStock();
    detailStockInterval = setInterval(refreshBookDetailStock, 3000);
}

function applyBorrowSuccessState(bookId, stock, total, available) {
    syncBorrowButtons(bookId, stock, available);
    updateBookCardState(bookId, stock, total, available);
    updateBookDetailState(stock, total, available);
    syncBookDetailBorrowButton(bookId, stock, available);
}

// ==================== 确认预约 ====================
function confirmBorrow() {
    if (!currentBookId) return;
    const returnDate = document.getElementById('borrowEndDate').value;
    const errorEl = document.getElementById('borrowDateError');

    if (!returnDate) {
        errorEl.textContent = '请选择预计归还时间';
        errorEl.classList.remove('hidden');
        return;
    }
    const startDate = parseDate(document.getElementById('borrowStartDate').value);
    const endDate = parseDate(returnDate);
    if (endDate <= startDate) {
        errorEl.textContent = '归还日期必须晚于借阅开始日期';
        errorEl.classList.remove('hidden');
        return;
    }
    errorEl.classList.add('hidden');

    const btn = document.getElementById('confirmBorrowBtn');
    btn.disabled = true;
    btn.textContent = '提交中...';
    btn.classList.add('opacity-60');

    fetch(`/book/borrow/${currentBookId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ return_date: returnDate, start_date: document.getElementById('borrowStartDate').value })
    })
    .then(res => res.json())
    .then(data => {
        const borrowedId = currentBookId;
        closeBorrowModal();
        btn.disabled = false;
        btn.textContent = '确认预约';
        btn.classList.remove('opacity-60');
        if (data.success) {
            showToast(data.message, 'success');
            applyBorrowSuccessState(borrowedId, data.stock, data.total, data.available);
        } else {
            showToast(data.message, 'error');
        }
    })
    .catch(() => {
        closeBorrowModal();
        btn.disabled = false;
        btn.textContent = '确认预约';
        btn.classList.remove('opacity-60');
        showToast('预约失败，请稍后重试', 'error');
    });
}

// ==================== 事件监听器 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 点击弹窗外部关闭日历
    document.addEventListener('click', function(e) {
        if (e.target.closest('#calendarStart, #calendarEnd, #borrowStartDateDisplay, #borrowEndDateDisplay')) return;
        document.getElementById('calendarStart')?.classList.add('hidden');
        document.getElementById('calendarEnd')?.classList.add('hidden');
    });

    // 点击模态框外部关闭
    const borrowModal = document.getElementById('borrowModal');
    if (borrowModal) {
        borrowModal.addEventListener('click', function(e) {
            if (e.target === this) closeBorrowModal();
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && borrowModal && !borrowModal.classList.contains('hidden')) {
            closeBorrowModal();
        }
    });

    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) {
            refreshBookDetailStock();
        }
    });

    window.addEventListener('focus', function() {
        refreshBookDetailStock();
    });

    startBookDetailStockPolling();
});
