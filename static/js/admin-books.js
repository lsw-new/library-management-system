function adjustNumber(inputId, delta) {
    const input = document.getElementById(inputId);
    if (!input) return;
    const current = parseInt(input.value, 10) || 0;
    const min = parseInt(input.min, 10);
    const next = isNaN(min) ? current + delta : Math.max(min, current + delta);
    input.value = next;
}

function previewImage(input, previewId) {
    const container = document.getElementById(previewId);
    if (!input.files || !input.files[0]) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        container.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = 'none');
        const oldImg = container.querySelector('img');
        if (oldImg) oldImg.remove();
        const img = document.createElement('img');
        img.src = e.target.result;
        img.className = 'w-full h-full object-cover rounded-2xl';
        container.appendChild(img);
    };
    reader.readAsDataURL(input.files[0]);
}

function openAddBookModal() {
    const form = document.getElementById('addBookForm');
    form.reset();
    const preview = document.getElementById('addImagePreview');
    const oldImg = preview.querySelector('img');
    if (oldImg) oldImg.remove();
    preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = '');
    openModal(document.getElementById('addBookModal'));
}

function closeAddBookModal() {
    closeModal(document.getElementById('addBookModal'));
}

let currentEditBookId = null;

function openEditBookModalFromData(button) {
    const dataset = button.dataset;
    openEditBookModal(
        parseInt(dataset.bookId),
        dataset.bookTitle,
        dataset.bookAuthor,
        dataset.bookIsbn,
        dataset.bookPublisher,
        dataset.bookLocation,
        dataset.bookCategory,
        parseInt(dataset.bookStock),
        parseInt(dataset.bookTotal),
        dataset.bookImage
    );
}

function openEditBookModal(id, title, author, isbn, publisher, location, category, stock, total, image) {
    currentEditBookId = id;
    document.getElementById('editBookId').value = id;
    document.getElementById('editTitle').value = title;
    document.getElementById('editAuthor').value = author;
    document.getElementById('editIsbn').value = isbn || '';
    document.getElementById('editPublisher').value = publisher || '';
    document.getElementById('editLocation').value = location || '';
    document.getElementById('editCategory').value = category || '';
    document.getElementById('editStock').value = stock;
    document.getElementById('editTotal').value = total;
    document.getElementById('editBookImage').value = '';

    const preview = document.getElementById('editImagePreview');
    const oldImg = preview.querySelector('img');
    if (oldImg) oldImg.remove();
    preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = '');

    if (image) {
        const img = document.createElement('img');
        img.src = '/static/images/' + image;
        img.className = 'w-full h-full object-cover rounded-2xl';
        preview.appendChild(img);
        preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = 'none');
    }

    openModal(document.getElementById('editBookModal'));
}

function closeEditBookModal() {
    closeModal(document.getElementById('editBookModal'));
    currentEditBookId = null;
}

function deleteCurrentBook() {
    if (!currentEditBookId) return;
    showConfirm('删除图书', '确定要删除这本图书吗？此操作无法撤销。', () => {
        fetch(`/book/delete/${currentEditBookId}`, adminPostInit())
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    showToast(data.message, 'success');
                    closeEditBookModal();
                    setTimeout(() => location.reload(), 800);
                } else {
                    showToast(data.message, 'error');
                }
            })
            .catch(() => showToast('删除失败，请稍后重试', 'error'));
    }, 'danger');
}


document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('addBookForm');
    if (addBookForm) {
        addBookForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const form = this;
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = '提交中...';

            const formData = new FormData(form);
            fetch('/book/add', adminPostInit({ body: formData }))
                .then(res => res.json())
                .then(data => {
                    btn.disabled = false;
                    btn.textContent = '确认入库馆藏集';
                    if (data.success) {
                        showToast(data.message, 'success');
                        closeAddBookModal();
                        setTimeout(() => location.reload(), 800);
                    } else {
                        showToast(data.message, 'error');
                    }
                })
                .catch(() => {
                    btn.disabled = false;
                    btn.textContent = '确认入库馆藏集';
                    showToast('添加失败，请稍后重试', 'error');
                });
        });
    }

    const editBookForm = document.getElementById('editBookForm');
    if (editBookForm) {
        editBookForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (!currentEditBookId) return;

            const form = this;
            const btn = form.querySelector('button[type="submit"]');
            btn.disabled = true;
            btn.textContent = '保存中...';

            const formData = new FormData(form);
            fetch(`/book/edit/${currentEditBookId}`, adminPostInit({ body: formData }))
                .then(res => res.json())
                .then(data => {
                    btn.disabled = false;
                    btn.textContent = '保存修改';
                    if (data.success) {
                        showToast(data.message, 'success');
                        closeEditBookModal();
                        setTimeout(() => location.reload(), 800);
                    } else {
                        showToast(data.message, 'error');
                    }
                })
                .catch(() => {
                    btn.disabled = false;
                    btn.textContent = '保存修改';
                    showToast('更新失败，请稍后重试', 'error');
                });
        });
    }

    const searchInput = document.querySelector('input[name="search"]');
    if (searchInput) {
        searchInput.addEventListener('focus', function () {
            this.parentElement.classList.add('scale-[1.02]');
        });
        searchInput.addEventListener('blur', function () {
            this.parentElement.classList.remove('scale-[1.02]');
        });
    }

    document.querySelectorAll('[data-width]').forEach(function (el) {
        el.style.width = el.getAttribute('data-width') + '%';
    });

    const addBookModal  = document.getElementById('addBookModal');
    const editBookModal = document.getElementById('editBookModal');

    if (addBookModal) {
        addBookModal.addEventListener('click', function (e) {
            if (e.target === this) closeAddBookModal();
        });
    }
    if (editBookModal) {
        editBookModal.addEventListener('click', function (e) {
            if (e.target === this) closeEditBookModal();
        });
    }
});

document.addEventListener('keydown', function (e) {
    const addBookModal  = document.getElementById('addBookModal');
    const editBookModal = document.getElementById('editBookModal');
    if (e.key === 'Escape') {
        closeAddBookModal();
        closeEditBookModal();
        return;
    }
    trapModalFocus(e, addBookModal);
    trapModalFocus(e, editBookModal);
});
