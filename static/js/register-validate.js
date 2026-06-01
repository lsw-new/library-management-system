document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        var username = document.getElementById('username').value.trim();
        var studentId = document.getElementById('student_id').value.trim();
        var realName = document.getElementById('real_name').value.trim();

        if (!username) {
            e.preventDefault();
            showToast('请输入用户名', 'warning');
            document.getElementById('username').focus();
            return;
        }
        if (username.length < 3 || username.length > 20) {
            e.preventDefault();
            showToast('用户名长度必须在 3-20 个字符之间', 'warning');
            document.getElementById('username').focus();
            return;
        }
        if (!studentId) {
            e.preventDefault();
            showToast('请输入学号', 'warning');
            document.getElementById('student_id').focus();
            return;
        }
        if (!/^\d{13}$/.test(studentId)) {
            e.preventDefault();
            showToast('学号必须为 13 位纯数字', 'warning');
            document.getElementById('student_id').focus();
            return;
        }
        if (!realName) {
            e.preventDefault();
            showToast('请输入姓名', 'warning');
            document.getElementById('real_name').focus();
            return;
        }
    });
});
