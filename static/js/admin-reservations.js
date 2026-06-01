// 定义 `refreshReservationsView` 函数，封装页面交互、请求或状态更新逻辑。
function refreshReservationsView() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (typeof window.refreshAdminPanel === 'function') {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        window.refreshAdminPanel(null, { updateHistory: false });
    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
    } else {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        location.reload();
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `approveReservation` 函数，封装页面交互、请求或状态更新逻辑。
function approveReservation(recordId) {
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    showConfirm('同意领取', '确认同意该用户领取图书吗？', () => {
        // 发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`/admin/approve_reservation/${recordId}`, adminPostInit())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(res => res.json())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    refreshReservationsView();
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 'info');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `rejectReservation` 函数，封装页面交互、请求或状态更新逻辑。
function rejectReservation(recordId) {
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    showConfirm('拒绝领取', '确认拒绝该用户领取图书吗？库存将自动恢复。', () => {
        // 发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`/admin/reject_reservation/${recordId}`, adminPostInit())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(res => res.json())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    refreshReservationsView();
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 'danger');
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `adminReturnBook` 函数，封装页面交互、请求或状态更新逻辑。
function adminReturnBook(recordId) {
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    showConfirm('确认归还', '确认该图书已归还入库吗？', () => {
        // 发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`/admin/return_book/${recordId}`, adminPostInit())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(res => res.json())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    refreshReservationsView();
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 'warning');
// 结束前面打开的代码块、函数调用或对象结构。
}
