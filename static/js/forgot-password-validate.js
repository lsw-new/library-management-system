// 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function () {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var form = document.querySelector('form');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!form) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    form.addEventListener('submit', function (e) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var studentId = document.getElementById('student_id').value.trim();
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var realName = document.getElementById('real_name').value.trim();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!studentId) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入学号', 'warning');
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('student_id').focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!/^\d{13}$/.test(studentId)) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('学号必须为 13 位纯数字', 'warning');
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('student_id').focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!realName) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入姓名', 'warning');
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('real_name').focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
