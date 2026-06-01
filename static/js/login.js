// 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var btn = document.getElementById('togglePassword');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var pwd = document.getElementById('password');

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (btn && pwd) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        btn.addEventListener('click', function () {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var isPassword = pwd.type === 'password';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            pwd.type = isPassword ? 'text' : 'password';
            // 写入页面内容，让界面展示最新数据或提示文案。
            btn.textContent = isPassword ? '隐藏' : '显示';
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var identityInput = document.getElementById('identity');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var iconWrap = document.getElementById('identity-icon');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var userSvg = '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var emailSvg = '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>';
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (identityInput && iconWrap) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        identityInput.addEventListener('input', function () {
            // 写入页面内容，让界面展示最新数据或提示文案。
            iconWrap.innerHTML = identityInput.value.indexOf('@') !== -1 ? emailSvg : userSvg;
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone', 'opera mini', 'iemobile'];
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (mobileKeywords.some(function (k) { return navigator.userAgent.toLowerCase().includes(k); })) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var adminLink = document.getElementById('admin-login-link');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (adminLink) adminLink.style.display = 'none';
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
});
