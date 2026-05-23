document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('togglePassword');
    var pwd = document.getElementById('password');

    if (btn && pwd) {
        btn.addEventListener('click', function () {
            var isPassword = pwd.type === 'password';
            pwd.type = isPassword ? 'text' : 'password';
            btn.textContent = isPassword ? '隐藏' : '显示';
        });
    }

    var mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone', 'opera mini', 'iemobile'];
    if (mobileKeywords.some(function (k) { return navigator.userAgent.toLowerCase().includes(k); })) {
        var adminLink = document.getElementById('admin-login-link');
        if (adminLink) adminLink.style.display = 'none';
    }
});
