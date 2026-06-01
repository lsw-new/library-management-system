// 块注释内容，用于解释一组前端逻辑或功能区域。
/**
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * 借阅预约弹窗模块 (BorrowModal)
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 * IIFE 封装，避免全局命名空间污染
 // 块注释内容，用于解释一组前端逻辑或功能区域。
 */
// 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const BorrowModal = (() => {
    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 私有状态 ====================
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentBookId = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentCalendarType = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let selectedStartDate = null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let selectedEndDate = null;

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 私有工具函数 ====================
    // 定义 `formatDate` 函数，封装页面交互、请求或状态更新逻辑。
    function formatDate(date) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const y = date.getFullYear();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const m = String(date.getMonth() + 1).padStart(2, '0');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = String(date.getDate()).padStart(2, '0');
        // 返回当前函数的处理结果，或提前结束前端执行流程。
        return `${y}-${m}-${d}`;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `hideCalendar` 函数，封装页面交互、请求或状态更新逻辑。
    function hideCalendar(type) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (el) { el.classList.add('hidden'); el.innerHTML = ''; }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `updateDuration` 函数，封装页面交互、请求或状态更新逻辑。
    function updateDuration() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const durationEl = document.getElementById('borrowDuration');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const errorEl = document.getElementById('borrowDateError');

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!selectedEndDate) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (durationEl) durationEl.textContent = '';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const start = selectedStartDate ? new Date(selectedStartDate) : new Date();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const end = new Date(selectedEndDate);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const days = Math.round((end - start) / 86400000);

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (days <= 0) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '归还日期必须晚于开始日期';
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (durationEl) durationEl.textContent = '';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (days > 12) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '借阅时长不能超过12天';
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (durationEl) durationEl.textContent = '';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (durationEl) durationEl.textContent = `借阅时长：${days} 天`;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `renderCalendar` 函数，封装页面交互、请求或状态更新逻辑。
    function renderCalendar(type) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const container = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!container) return;

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const today = new Date();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        today.setHours(0, 0, 0, 0);
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const viewDate = new Date(today.getFullYear(), today.getMonth(), 1);

        // 定义 `build` 函数，封装页面交互、请求或状态更新逻辑。
        function build(year, month) {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const firstDay = new Date(year, month, 1);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const lastDay = new Date(year, month + 1, 0);
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const startWeekday = firstDay.getDay();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            let html = '<div class="bg-white border border-purple-200 rounded-xl shadow-lg p-3">';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '<div class="flex items-center justify-between mb-2">';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += `<button type="button" class="cal-prev p-1 hover:bg-purple-50 rounded text-purple-600 text-sm">&lt;</button>`;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += `<span class="text-sm font-bold text-pink-900">${year}年${monthNames[month]}</span>`;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += `<button type="button" class="cal-next p-1 hover:bg-purple-50 rounded text-purple-600 text-sm">&gt;</button>`;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '</div>';

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '<div class="grid grid-cols-7 gap-0.5 text-center text-[10px] text-pink-400 mb-1">';
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            ['日', '一', '二', '三', '四', '五', '六'].forEach(d => {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                html += `<div class="py-0.5">${d}</div>`;
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '</div>';

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '<div class="grid grid-cols-7 gap-0.5 text-center">';
            // 循环语句，用于遍历数据列表、DOM 集合或重复执行操作。
            for (let i = 0; i < startWeekday; i++) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                html += '<div></div>';
            // 结束前面打开的代码块、函数调用或对象结构。
            }

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const maxDays = type === 'end' ? 12 : 30;

            // 循环语句，用于遍历数据列表、DOM 集合或重复执行操作。
            for (let d = 1; d <= lastDay.getDate(); d++) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const date = new Date(year, month, d);
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const dateStr = formatDate(date);
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isPast = date < today;
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isTooFar = date > new Date(today.getTime() + maxDays * 86400000);
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isSelected = (type === 'start' && selectedStartDate === dateStr) ||
                                   // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                   (type === 'end' && selectedEndDate === dateStr);
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isDisabled = isPast || isTooFar;

                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                let cls = 'py-1 text-xs rounded-lg cursor-pointer transition-colors ';
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (isDisabled) {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    cls += 'text-gray-300 cursor-not-allowed';
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else if (isSelected) {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    cls += 'bg-purple-500 text-white font-bold';
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    cls += 'text-pink-900 hover:bg-purple-50';
                // 结束前面打开的代码块、函数调用或对象结构。
                }

                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                html += `<div class="${cls}" data-date="${dateStr}" ${isDisabled ? '' : `onclick="BorrowModal.selectDate('${type}','${dateStr}')"`}>${d}</div>`;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '</div></div>';

            // 写入页面内容，让界面展示最新数据或提示文案。
            container.innerHTML = html;

            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            container.querySelector('.cal-prev')?.addEventListener('click', (e) => {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                e.stopPropagation();
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const prev = month === 0 ? 11 : month - 1;
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const prevYear = month === 0 ? year - 1 : year;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                build(prevYear, prev);
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            container.querySelector('.cal-next')?.addEventListener('click', (e) => {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                e.stopPropagation();
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const next = month === 11 ? 0 : month + 1;
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const nextYear = month === 11 ? year + 1 : year;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                build(nextYear, next);
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        build(viewDate.getFullYear(), viewDate.getMonth());
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 公开方法 ====================
    // 定义 `setHeaderVisible` 函数，封装页面交互、请求或状态更新逻辑。
    function setHeaderVisible(visible) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var header = document.querySelector('.site-header');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (header) header.style.display = visible ? '' : 'none';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `open` 函数，封装页面交互、请求或状态更新逻辑。
    function open(bookId, title, stock) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBookId = bookId;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        selectedEndDate = null;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentCalendarType = null;

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var today = new Date();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var todayStr = formatDate(today);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        selectedStartDate = todayStr;

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const modal = document.getElementById('borrowModal');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const titleEl = document.getElementById('modalBookTitle');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const stockEl = document.getElementById('modalBookStock');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const startDisplay = document.getElementById('borrowStartDateDisplay');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const endDisplay = document.getElementById('borrowEndDateDisplay');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const durationEl = document.getElementById('borrowDuration');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const errorEl = document.getElementById('borrowDateError');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const startHidden = document.getElementById('borrowStartDate');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const endHidden = document.getElementById('borrowEndDate');

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (titleEl) titleEl.textContent = title;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockEl) stockEl.textContent = stock;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (startDisplay) startDisplay.value = todayStr;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (startHidden) startHidden.value = todayStr;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (endDisplay) endDisplay.value = '';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (durationEl) durationEl.textContent = '';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (endHidden) endHidden.value = '';

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hideCalendar('start');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hideCalendar('end');

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHeaderVisible(false);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (modal) modal.classList.remove('hidden');
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `close` 函数，封装页面交互、请求或状态更新逻辑。
    function close() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const modal = document.getElementById('borrowModal');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (modal) modal.classList.add('hidden');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBookId = null;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHeaderVisible(true);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `toggleCalendar` 函数，封装页面交互、请求或状态更新逻辑。
    function toggleCalendar(type) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (type === 'start') return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const calEnd = document.getElementById('calendarEnd');

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (calEnd && !calEnd.classList.contains('hidden')) {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            calEnd.classList.add('hidden');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        renderCalendar('end');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (calEnd) calEnd.classList.remove('hidden');
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `selectDate` 函数，封装页面交互、请求或状态更新逻辑。
    function selectDate(type, dateStr) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (type === 'start') {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            selectedStartDate = dateStr;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const display = document.getElementById('borrowStartDateDisplay');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const hidden = document.getElementById('borrowStartDate');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (display) display.value = dateStr;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (hidden) hidden.value = dateStr;
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            selectedEndDate = dateStr;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const display = document.getElementById('borrowEndDateDisplay');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const hidden = document.getElementById('borrowEndDate');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (display) display.value = dateStr;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (hidden) hidden.value = dateStr;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hideCalendar(type);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        updateDuration();
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `confirmBorrow` 函数，封装页面交互、请求或状态更新逻辑。
    async function confirmBorrow() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!currentBookId) return;

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const errorEl = document.getElementById('borrowDateError');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const endDate = selectedEndDate || document.getElementById('borrowEndDate')?.value;

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!endDate) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '请选择归还日期';
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const btn = document.getElementById('confirmBorrowBtn');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btn) { btn.disabled = true; btn.textContent = '预约中...'; }

        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const body = { return_date: endDate };
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (selectedStartDate) body.start_date = selectedStartDate;

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const { ok, data } = await postJson(`/book/borrow/${currentBookId}`, body);

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const borrowedBookId = currentBookId;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                close();
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const successMessage = data.message || '预约成功，等待管理员审核后即可领取图书。';
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (typeof showNotice === 'function') {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showNotice('预约已提交', successMessage, 'success', [
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        { label: '查看借阅记录', href: (window.borrowModalConfig || {}).recordsUrl || '/borrow_records', primary: true },
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        { label: '继续浏览' }
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ]);
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else if (typeof showToast === 'function') {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message || '预约成功', 'success');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.stock !== undefined) {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    window.dispatchEvent(new CustomEvent('library:book-stock-changed', {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        detail: {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            book_id: data.book_id || borrowedBookId,
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            stock: data.stock,
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            total: data.total,
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            available: data.available
                        // 结束前面打开的代码块、函数调用或对象结构。
                        }
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    }));
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (errorEl) {
                    // 写入页面内容，让界面展示最新数据或提示文案。
                    errorEl.textContent = data.message || '预约失败';
                    // 更新元素样式或状态类，驱动页面视觉状态变化。
                    errorEl.classList.remove('hidden');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '网络错误，请稍后重试';
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } finally {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btn) { btn.disabled = false; btn.textContent = '确认预约'; }
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `showFromData` 函数，封装页面交互、请求或状态更新逻辑。
    function showFromData(btn) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const bookId = btn.dataset.bookId;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const title = btn.dataset.bookTitle || '';
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const stock = btn.dataset.bookStock || '0';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (bookId) open(bookId, title, stock);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `applyStockChange` 函数，封装页面交互、请求或状态更新逻辑。
    function applyStockChange(info) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info || String(info.book_id) !== String(currentBookId)) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const stockEl = document.getElementById('modalBookStock');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockEl) stockEl.textContent = String(info.stock);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-stock-changed', function(event) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        applyStockChange(event.detail);
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 导出公开 API ====================
    // 返回当前函数的处理结果，或提前结束前端执行流程。
    return { open, close, toggleCalendar, selectDate, confirmBorrow, showFromData };
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();

// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== 全局 facade（兼容 HTML onclick 调用）====================
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.openBorrowModal = BorrowModal.open;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.closeBorrowModal = BorrowModal.close;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.toggleCalendar = BorrowModal.toggleCalendar;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.selectDate = BorrowModal.selectDate;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.confirmBorrow = BorrowModal.confirmBorrow;
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.showBorrowModalFromData = BorrowModal.showFromData;
