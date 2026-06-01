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

    var identityInput = document.getElementById('identity');
    var iconWrap = document.getElementById('identity-icon');
    var userSvg = '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>';
    var emailSvg = '<svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>';
    if (identityInput && iconWrap) {
        identityInput.addEventListener('input', function () {
            iconWrap.innerHTML = identityInput.value.indexOf('@') !== -1 ? emailSvg : userSvg;
        });
    }

    var mobileKeywords = ['mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone', 'opera mini', 'iemobile'];
    if (mobileKeywords.some(function (k) { return navigator.userAgent.toLowerCase().includes(k); })) {
        var adminLink = document.getElementById('admin-login-link');
        if (adminLink) adminLink.style.display = 'none';
    }
});
