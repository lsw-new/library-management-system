document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        var studentId = document.getElementById('student_id').value.trim();
        var realName = document.getElementById('real_name').value.trim();

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
