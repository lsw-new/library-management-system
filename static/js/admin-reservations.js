function approveReservation(recordId) {
    showConfirm('同意领取', '确认同意该用户领取图书吗？', () => {
        fetch(`/admin/approve_reservation/${recordId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    setTimeout(() => location.reload(), 1500);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    }, 'info');
}

function rejectReservation(recordId) {
    showConfirm('拒绝领取', '确认拒绝该用户领取图书吗？库存将自动恢复。', () => {
        fetch(`/admin/reject_reservation/${recordId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    setTimeout(() => location.reload(), 1500);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    }, 'danger');
}

function adminReturnBook(recordId) {
    showConfirm('确认归还', '确认该图书已归还入库吗？', () => {
        fetch(`/admin/return_book/${recordId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    setTimeout(() => location.reload(), 1500);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('操作失败，请稍后重试', 'error'));
    }, 'warning');
}
