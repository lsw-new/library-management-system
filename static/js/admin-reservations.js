// 逐行注释：定义 `refreshReservationsView` 函数，封装页面交互、请求或状态更新逻辑。
function refreshReservationsView() {
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
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `approveReservation` 函数，封装页面交互、请求或状态更新逻辑。
function approveReservation(recordId) {
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    showConfirm('同意领取', '确认同意该用户领取图书吗？', () => {
        // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`/admin/approve_reservation/${recordId}`, adminPostInit())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(res => res.json())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    refreshReservationsView();
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'error');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 'info');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `rejectReservation` 函数，封装页面交互、请求或状态更新逻辑。
function rejectReservation(recordId) {
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    showConfirm('拒绝领取', '确认拒绝该用户领取图书吗？库存将自动恢复。', () => {
        // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`/admin/reject_reservation/${recordId}`, adminPostInit())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(res => res.json())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    refreshReservationsView();
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'error');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 'danger');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `adminReturnBook` 函数，封装页面交互、请求或状态更新逻辑。
function adminReturnBook(recordId) {
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    showConfirm('确认归还', '确认该图书已归还入库吗？', () => {
        // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`/admin/return_book/${recordId}`, adminPostInit())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(res => res.json())
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    refreshReservationsView();
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'error');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 'warning');
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
