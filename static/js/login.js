/**
 * 登录页面JavaScript - 图书管理系统
 * 处理移动端设备检测和管理员登录按钮显示
 */

// ==================== 移动端设备检测 ====================
function isMobileDevice() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = [
        'mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry',
        'windows phone', 'opera mini', 'iemobile', 'webos', 'palm'
    ];
    return mobileKeywords.some(keyword => userAgent.includes(keyword));
}

// ==================== 页面加载时执行 ====================
document.addEventListener('DOMContentLoaded', function() {
    // 如果是移动端，隐藏管理员登录按钮
    if (isMobileDevice()) {
        const adminBtn = document.getElementById('admin-login-btn');
        if (adminBtn) {
            adminBtn.style.display = 'none';
        }
    }
});
