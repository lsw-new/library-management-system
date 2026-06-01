// 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
/**
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 * 借阅预约弹窗模块 (BorrowModal)
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 * IIFE 封装，避免全局命名空间污染
 // 逐行注释：块注释内容，用于解释一组前端逻辑或功能区域。
 */
// 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const BorrowModal = (() => {
    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 私有状态 ====================
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentBookId = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let currentCalendarType = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let selectedStartDate = null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let selectedEndDate = null;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 私有工具函数 ====================
    // 逐行注释：定义 `formatDate` 函数，封装页面交互、请求或状态更新逻辑。
    function formatDate(date) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const y = date.getFullYear();
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const m = String(date.getMonth() + 1).padStart(2, '0');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const d = String(date.getDate()).padStart(2, '0');
        // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
        return `${y}-${m}-${d}`;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `hideCalendar` 函数，封装页面交互、请求或状态更新逻辑。
    function hideCalendar(type) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const el = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (el) { el.classList.add('hidden'); el.innerHTML = ''; }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `updateDuration` 函数，封装页面交互、请求或状态更新逻辑。
    function updateDuration() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const durationEl = document.getElementById('borrowDuration');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const errorEl = document.getElementById('borrowDateError');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!selectedEndDate) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (durationEl) durationEl.textContent = '';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const start = selectedStartDate ? new Date(selectedStartDate) : new Date();
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const end = new Date(selectedEndDate);
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const days = Math.round((end - start) / 86400000);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (days <= 0) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '归还日期必须晚于开始日期';
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (durationEl) durationEl.textContent = '';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (days > 12) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '借阅时长不能超过12天';
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (durationEl) durationEl.textContent = '';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (durationEl) durationEl.textContent = `借阅时长：${days} 天`;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `renderCalendar` 函数，封装页面交互、请求或状态更新逻辑。
    function renderCalendar(type) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const container = document.getElementById(type === 'start' ? 'calendarStart' : 'calendarEnd');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!container) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const today = new Date();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        today.setHours(0, 0, 0, 0);
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：定义 `build` 函数，封装页面交互、请求或状态更新逻辑。
        function build(year, month) {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const firstDay = new Date(year, month, 1);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const lastDay = new Date(year, month + 1, 0);
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const startWeekday = firstDay.getDay();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            let html = '<div class="bg-white border border-purple-200 rounded-xl shadow-lg p-3">';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '<div class="flex items-center justify-between mb-2">';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += `<button type="button" class="cal-prev p-1 hover:bg-purple-50 rounded text-purple-600 text-sm">&lt;</button>`;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += `<span class="text-sm font-bold text-pink-900">${year}年${monthNames[month]}</span>`;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += `<button type="button" class="cal-next p-1 hover:bg-purple-50 rounded text-purple-600 text-sm">&gt;</button>`;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '</div>';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '<div class="grid grid-cols-7 gap-0.5 text-center text-[10px] text-pink-400 mb-1">';
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            ['日', '一', '二', '三', '四', '五', '六'].forEach(d => {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                html += `<div class="py-0.5">${d}</div>`;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '</div>';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '<div class="grid grid-cols-7 gap-0.5 text-center">';
            // 逐行注释：循环语句，用于遍历数据列表、DOM 集合或重复执行操作。
            for (let i = 0; i < startWeekday; i++) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                html += '<div></div>';
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const maxDays = type === 'end' ? 12 : 30;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：循环语句，用于遍历数据列表、DOM 集合或重复执行操作。
            for (let d = 1; d <= lastDay.getDate(); d++) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const date = new Date(year, month, d);
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const dateStr = formatDate(date);
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isPast = date < today;
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isTooFar = date > new Date(today.getTime() + maxDays * 86400000);
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isSelected = (type === 'start' && selectedStartDate === dateStr) ||
                                   // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                   (type === 'end' && selectedEndDate === dateStr);
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const isDisabled = isPast || isTooFar;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                let cls = 'py-1 text-xs rounded-lg cursor-pointer transition-colors ';
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (isDisabled) {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    cls += 'text-gray-300 cursor-not-allowed';
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else if (isSelected) {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    cls += 'bg-purple-500 text-white font-bold';
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    cls += 'text-pink-900 hover:bg-purple-50';
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                html += `<div class="${cls}" data-date="${dateStr}" ${isDisabled ? '' : `onclick="BorrowModal.selectDate('${type}','${dateStr}')"`}>${d}</div>`;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            html += '</div></div>';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            container.innerHTML = html;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            container.querySelector('.cal-prev')?.addEventListener('click', (e) => {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                e.stopPropagation();
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const prev = month === 0 ? 11 : month - 1;
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const prevYear = month === 0 ? year - 1 : year;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                build(prevYear, prev);
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            container.querySelector('.cal-next')?.addEventListener('click', (e) => {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                e.stopPropagation();
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const next = month === 11 ? 0 : month + 1;
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const nextYear = month === 11 ? year + 1 : year;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                build(nextYear, next);
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        build(viewDate.getFullYear(), viewDate.getMonth());
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 公开方法 ====================
    // 逐行注释：定义 `setHeaderVisible` 函数，封装页面交互、请求或状态更新逻辑。
    function setHeaderVisible(visible) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var header = document.querySelector('.site-header');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (header) header.style.display = visible ? '' : 'none';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `open` 函数，封装页面交互、请求或状态更新逻辑。
    function open(bookId, title, stock) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBookId = bookId;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        selectedEndDate = null;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentCalendarType = null;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var today = new Date();
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var todayStr = formatDate(today);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        selectedStartDate = todayStr;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const modal = document.getElementById('borrowModal');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const titleEl = document.getElementById('modalBookTitle');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const stockEl = document.getElementById('modalBookStock');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const startDisplay = document.getElementById('borrowStartDateDisplay');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const endDisplay = document.getElementById('borrowEndDateDisplay');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const durationEl = document.getElementById('borrowDuration');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const errorEl = document.getElementById('borrowDateError');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const startHidden = document.getElementById('borrowStartDate');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const endHidden = document.getElementById('borrowEndDate');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (titleEl) titleEl.textContent = title;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockEl) stockEl.textContent = stock;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (startDisplay) startDisplay.value = todayStr;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (startHidden) startHidden.value = todayStr;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (endDisplay) endDisplay.value = '';
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (durationEl) durationEl.textContent = '';
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (errorEl) { errorEl.textContent = ''; errorEl.classList.add('hidden'); }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (endHidden) endHidden.value = '';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hideCalendar('start');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hideCalendar('end');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHeaderVisible(false);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (modal) modal.classList.remove('hidden');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `close` 函数，封装页面交互、请求或状态更新逻辑。
    function close() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const modal = document.getElementById('borrowModal');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (modal) modal.classList.add('hidden');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        currentBookId = null;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setHeaderVisible(true);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `toggleCalendar` 函数，封装页面交互、请求或状态更新逻辑。
    function toggleCalendar(type) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (type === 'start') return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const calEnd = document.getElementById('calendarEnd');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (calEnd && !calEnd.classList.contains('hidden')) {
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            calEnd.classList.add('hidden');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        renderCalendar('end');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (calEnd) calEnd.classList.remove('hidden');
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `selectDate` 函数，封装页面交互、请求或状态更新逻辑。
    function selectDate(type, dateStr) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (type === 'start') {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            selectedStartDate = dateStr;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const display = document.getElementById('borrowStartDateDisplay');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const hidden = document.getElementById('borrowStartDate');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (display) display.value = dateStr;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (hidden) hidden.value = dateStr;
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            selectedEndDate = dateStr;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const display = document.getElementById('borrowEndDateDisplay');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const hidden = document.getElementById('borrowEndDate');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (display) display.value = dateStr;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (hidden) hidden.value = dateStr;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        hideCalendar(type);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        updateDuration();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `confirmBorrow` 函数，封装页面交互、请求或状态更新逻辑。
    async function confirmBorrow() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!currentBookId) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const errorEl = document.getElementById('borrowDateError');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const endDate = selectedEndDate || document.getElementById('borrowEndDate')?.value;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!endDate) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '请选择归还日期';
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const btn = document.getElementById('confirmBorrowBtn');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (btn) { btn.disabled = true; btn.textContent = '预约中...'; }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const body = { return_date: endDate };
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (selectedStartDate) body.start_date = selectedStartDate;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const { ok, data } = await postJson(`/book/borrow/${currentBookId}`, body);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const borrowedBookId = currentBookId;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                close();
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const successMessage = data.message || '预约成功，等待管理员审核后即可领取图书。';
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (typeof showNotice === 'function') {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showNotice('预约已提交', successMessage, 'success', [
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        { label: '查看借阅记录', href: (window.borrowModalConfig || {}).recordsUrl || '/borrow_records', primary: true },
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        { label: '继续浏览' }
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ]);
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else if (typeof showToast === 'function') {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message || '预约成功', 'success');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.stock !== undefined) {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    window.dispatchEvent(new CustomEvent('library:book-stock-changed', {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        detail: {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            book_id: data.book_id || borrowedBookId,
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            stock: data.stock,
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            total: data.total,
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            available: data.available
                        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                        }
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    }));
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (errorEl) {
                    // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                    errorEl.textContent = data.message || '预约失败';
                    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                    errorEl.classList.remove('hidden');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (errorEl) {
                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                errorEl.textContent = '网络错误，请稍后重试';
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                errorEl.classList.remove('hidden');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } finally {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (btn) { btn.disabled = false; btn.textContent = '确认预约'; }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `showFromData` 函数，封装页面交互、请求或状态更新逻辑。
    function showFromData(btn) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const bookId = btn.dataset.bookId;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const title = btn.dataset.bookTitle || '';
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const stock = btn.dataset.bookStock || '0';
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (bookId) open(bookId, title, stock);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `applyStockChange` 函数，封装页面交互、请求或状态更新逻辑。
    function applyStockChange(info) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info || String(info.book_id) !== String(currentBookId)) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const stockEl = document.getElementById('modalBookStock');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockEl) stockEl.textContent = String(info.stock);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-stock-changed', function(event) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        applyStockChange(event.detail);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ==================== 导出公开 API ====================
    // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
    return { open, close, toggleCalendar, selectDate, confirmBorrow, showFromData };
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// ==================== 全局 facade（兼容 HTML onclick 调用）====================
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.openBorrowModal = BorrowModal.open;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.closeBorrowModal = BorrowModal.close;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.toggleCalendar = BorrowModal.toggleCalendar;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.selectDate = BorrowModal.selectDate;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.confirmBorrow = BorrowModal.confirmBorrow;
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
window.showBorrowModalFromData = BorrowModal.showFromData;
