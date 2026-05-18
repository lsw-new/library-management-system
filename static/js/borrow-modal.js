let currentBookId = null;
let currentCalendarType = null;
let selectedStartDate = null;
let selectedEndDate = null;

function openBorrowModal(bookId, title, stock) {
    currentBookId = bookId;
    selectedStartDate = null;
    selectedEndDate = null;
    currentCalendarType = null;

    const modal = document.getElementById('borrowModal');
    const titleEl = document.getElementById('modalBookTitle');
    const stockEl = document.getElementById('modalBookStock');
    const startDisplay = document.getElementById('borrowStartDateDisplay');
    const endDisplay = document.getElementById('borrowEndDateDisplay');
    const durationEl = document.getElementById('borrowDuration');
    const errorEl = document.getElementById('borrowDateError');
    const startHidden = document.getElementById('borrowStartDate');
    const endHidden = document.getElementById('borrowEndDate');

    if (titleEl) titleEl.textContent = title;
    if (stockEl) stockEl.textContent = stock;
    if (startDisplay) startDisplay.value = '';
    if (endDisplay) endDisplay.value = '';
    if (durationEl) durationEl.textContent = '';
    if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
    if (startHidden) startHidden.value = '';
    if (endHidden) endHidden.value = '';

    hideCalendar('start');
    hideCalendar('end');

    if (modal) modal.classList.remove('hidden');
}

function closeBorrowModal() {
    const modal = document.getElementById('borrowModal');
    if (modal) modal.classList.add('hidden');
    currentBookId = null;
}

function toggleCalendar(type) {
    const calStart = document.getElementById('calendarStart');
    const calEnd = document.getElementById('calendarEnd');

    if (type === 'start') {
        if (calEnd) calEnd.classList.add('hidden');
        if (calStart && !calStart.classList.contains('hidden')) {
            calStart.classList.add('hidden');
            return;
        }
        renderCalendar('start');
        if (calStart) calStart.classList.remove('hidden');
    } else {
        if (calStart) calStart.classList.add('hidden');
        if (calEnd && !calEnd.classList.contains('hidden')) {
            calEnd.classList.add('hidden');
            return;
        }
        renderCalendar('end');
        if (calEnd) calEnd.classList.remove('hidden');
    }
}

function hideCalendar(type) {
    const el = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
    if (el) { el.classList.add('hidden'); el.innerHTML = ''; }
}

function renderCalendar(type) {
    const container = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
    if (!container) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const viewDate = new Date(today.getFullYear(), today.getMonth(), 1);

    function build(year, month) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const startWeekday = firstDay.getDay();
        const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

        let html = '<div class="bg-white border border-purple-200 rounded-xl shadow-lg p-3">';
        html += '<div class="flex items-center justify-between mb-2">';
        html += `<button type="button" class="cal-prev p-1 hover:bg-purple-50 rounded text-purple-600 text-sm">&lt;</button>`;
        html += `<span class="text-sm font-bold text-pink-900">${year}年${monthNames[month]}</span>`;
        html += `<button type="button" class="cal-next p-1 hover:bg-purple-50 rounded text-purple-600 text-sm">&gt;</button>`;
        html += '</div>';

        html += '<div class="grid grid-cols-7 gap-0.5 text-center text-[10px] text-pink-400 mb-1">';
        ['日', '一', '二', '三', '四', '五', '六'].forEach(d => {
            html += `<div class="py-0.5">${d}</div>`;
        });
        html += '</div>';

        html += '<div class="grid grid-cols-7 gap-0.5 text-center">';
        for (let i = 0; i < startWeekday; i++) {
            html += '<div></div>';
        }

        const maxDays = type === 'end' ? 12 : 30;

        for (let d = 1; d <= lastDay.getDate(); d++) {
            const date = new Date(year, month, d);
            const dateStr = formatDate(date);
            const isPast = date < today;
            const isTooFar = date > new Date(today.getTime() + maxDays * 86400000);
            const isSelected = (type === 'start' && selectedStartDate === dateStr) ||
                               (type === 'end' && selectedEndDate === dateStr);
            const isDisabled = isPast || isTooFar;

            let cls = 'py-1 text-xs rounded-lg cursor-pointer transition-colors ';
            if (isDisabled) {
                cls += 'text-gray-300 cursor-not-allowed';
            } else if (isSelected) {
                cls += 'bg-purple-500 text-white font-bold';
            } else {
                cls += 'text-pink-900 hover:bg-purple-50';
            }

            html += `<div class="${cls}" data-date="${dateStr}" ${isDisabled ? '' : `onclick="selectDate('${type}','${dateStr}')"`}>${d}</div>`;
        }
        html += '</div></div>';

        container.innerHTML = html;

        container.querySelector('.cal-prev')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const prev = month === 0 ? 11 : month - 1;
            const prevYear = month === 0 ? year - 1 : year;
            build(prevYear, prev);
        });
        container.querySelector('.cal-next')?.addEventListener('click', (e) => {
            e.stopPropagation();
            const next = month === 11 ? 0 : month + 1;
            const nextYear = month === 11 ? year + 1 : year;
            build(nextYear, next);
        });
    }

    build(viewDate.getFullYear(), viewDate.getMonth());
}

function selectDate(type, dateStr) {
    if (type === 'start') {
        selectedStartDate = dateStr;
        const display = document.getElementById('borrowStartDateDisplay');
        const hidden = document.getElementById('borrowStartDate');
        if (display) display.value = dateStr;
        if (hidden) hidden.value = dateStr;
    } else {
        selectedEndDate = dateStr;
        const display = document.getElementById('borrowEndDateDisplay');
        const hidden = document.getElementById('borrowEndDate');
        if (display) display.value = dateStr;
        if (hidden) hidden.value = dateStr;
    }

    hideCalendar(type);
    updateDuration();
}

function updateDuration() {
    const durationEl = document.getElementById('borrowDuration');
    const errorEl = document.getElementById('borrowDateError');

    if (!selectedEndDate) {
        if (durationEl) durationEl.textContent = '';
        return;
    }

    const start = selectedStartDate ? new Date(selectedStartDate) : new Date();
    const end = new Date(selectedEndDate);
    const days = Math.round((end - start) / 86400000);

    if (days <= 0) {
        if (errorEl) {
            errorEl.textContent = '归还日期必须晚于开始日期';
            errorEl.classList.remove('hidden');
        }
        if (durationEl) durationEl.textContent = '';
        return;
    }

    if (days > 12) {
        if (errorEl) {
            errorEl.textContent = '借阅时长不能超过12天';
            errorEl.classList.remove('hidden');
        }
        if (durationEl) durationEl.textContent = '';
        return;
    }

    if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
    if (durationEl) durationEl.textContent = `借阅时长：${days} 天`;
}

function formatDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

async function confirmBorrow() {
    if (!currentBookId) return;

    const errorEl = document.getElementById('borrowDateError');
    const endDate = selectedEndDate || document.getElementById('borrowEndDate')?.value;

    if (!endDate) {
        if (errorEl) {
            errorEl.textContent = '请选择归还日期';
            errorEl.classList.remove('hidden');
        }
        return;
    }

    const btn = document.getElementById('confirmBorrowBtn');
    if (btn) { btn.disabled = true; btn.textContent = '预约中...'; }

    const config = window.borrowModalConfig || {};

    try {
        const body = { return_date: endDate };
        if (selectedStartDate) body.start_date = selectedStartDate;

        const resp = await fetch(`/book/borrow/${currentBookId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': config.csrfToken || ''
            },
            body: JSON.stringify(body)
        });
        const data = await resp.json();

        if (data.success) {
            closeBorrowModal();
            if (typeof showToast === 'function') {
                showToast(data.message || '预约成功', 'success');
            } else {
                alert(data.message || '预约成功');
            }
            if (data.stock !== undefined) {
                const stockEl = document.querySelector(`[data-book-stock="${currentBookId}"]`);
                if (stockEl) stockEl.textContent = data.stock;
            }
        } else {
            if (errorEl) {
                errorEl.textContent = data.message || '预约失败';
                errorEl.classList.remove('hidden');
            }
        }
    } catch {
        if (errorEl) {
            errorEl.textContent = '网络错误，请稍后重试';
            errorEl.classList.remove('hidden');
        }
    } finally {
        if (btn) { btn.disabled = false; btn.textContent = '确认预约'; }
    }
}

function showBorrowModalFromData(btn) {
    const bookId = btn.dataset.bookId;
    const title = btn.dataset.bookTitle || '';
    const stock = btn.dataset.bookStock || '0';
    if (bookId) openBorrowModal(bookId, title, stock);
}

window.openBorrowModal = openBorrowModal;
window.closeBorrowModal = closeBorrowModal;
window.toggleCalendar = toggleCalendar;
window.selectDate = selectDate;
window.confirmBorrow = confirmBorrow;
window.showBorrowModalFromData = showBorrowModalFromData;
