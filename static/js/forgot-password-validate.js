// 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var form = document.querySelector('form');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!form) return;

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    form.addEventListener('submit', function (e) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var studentId = document.getElementById('student_id').value.trim();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var realName = document.getElementById('real_name').value.trim();

        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!studentId) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入学号', 'warning');
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('student_id').focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!/^\d{13}$/.test(studentId)) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('学号必须为 13 位纯数字', 'warning');
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('student_id').focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!realName) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入姓名', 'warning');
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('real_name').focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// 结束前面打开的代码块、函数调用或对象结构。
});
