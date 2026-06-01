// 定义 `adjustNumber` 函数，封装页面交互、请求或状态更新逻辑。
function adjustNumber(inputId, delta) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const input = document.getElementById(inputId);
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!input) return;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const current = parseInt(input.value, 10) || 0;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const min = parseInt(input.min, 10);
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const next = isNaN(min) ? current + delta : Math.max(min, current + delta);
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    input.value = next;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `previewImage` 函数，封装页面交互、请求或状态更新逻辑。
function previewImage(input, previewId) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const container = document.getElementById(previewId);
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!input.files || !input.files[0]) return;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const reader = new FileReader();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    reader.onload = function (e) {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        container.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = 'none');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const oldImg = container.querySelector('img');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (oldImg) oldImg.remove();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const img = document.createElement('img');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.src = e.target.result;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.className = 'w-full h-full object-cover rounded-2xl pointer-events-none';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        container.appendChild(img);
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    reader.readAsDataURL(input.files[0]);
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `openAddBookModal` 函数，封装页面交互、请求或状态更新逻辑。
function openAddBookModal() {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const form = document.getElementById('addBookForm');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    form.reset();
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const preview = document.getElementById('addImagePreview');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const oldImg = preview.querySelector('img');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (oldImg) oldImg.remove();
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = '');
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    openModal(document.getElementById('addBookModal'));
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `closeAddBookModal` 函数，封装页面交互、请求或状态更新逻辑。
function closeAddBookModal() {
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    closeModal(document.getElementById('addBookModal'));
// 结束前面打开的代码块、函数调用或对象结构。
}

// 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
let currentEditBookId = null;

// 定义 `openEditBookModalFromData` 函数，封装页面交互、请求或状态更新逻辑。
function openEditBookModalFromData(button) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const dataset = button.dataset;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    openEditBookModal(
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        parseInt(dataset.bookId),
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dataset.bookTitle,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dataset.bookAuthor,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dataset.bookIsbn,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dataset.bookPublisher,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dataset.bookLocation,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dataset.bookCategory,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        parseInt(dataset.bookStock),
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        parseInt(dataset.bookTotal),
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dataset.bookImage
    // 结束前面打开的代码块、函数调用或对象结构。
    );
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `openEditBookModal` 函数，封装页面交互、请求或状态更新逻辑。
function openEditBookModal(id, title, author, isbn, publisher, location, category, stock, total, image) {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    currentEditBookId = id;
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editBookId').value = id;
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editTitle').value = title;
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editAuthor').value = author;
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editIsbn').value = isbn || '';
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editPublisher').value = publisher || '';
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editLocation').value = location || '';
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editCategory').value = category || '';
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editStock').value = stock;
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editTotal').value = total;
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.getElementById('editBookImage').value = '';

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const preview = document.getElementById('editImagePreview');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const oldImg = preview.querySelector('img');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (oldImg) oldImg.remove();
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = '');

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (image) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const img = document.createElement('img');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.src = '/static/images/' + image;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        img.className = 'w-full h-full object-cover rounded-2xl pointer-events-none';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        preview.appendChild(img);
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        preview.querySelectorAll('.preview-placeholder').forEach(el => el.style.display = 'none');
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    openModal(document.getElementById('editBookModal'));
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `closeEditBookModal` 函数，封装页面交互、请求或状态更新逻辑。
function closeEditBookModal() {
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    closeModal(document.getElementById('editBookModal'));
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    currentEditBookId = null;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `deleteCurrentBook` 函数，封装页面交互、请求或状态更新逻辑。
function deleteCurrentBook() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!currentEditBookId) return;
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    showConfirm('删除图书', '确定要删除这本图书吗？此操作无法撤销。', () => {
        // 发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(`/book/delete/${currentEditBookId}`, adminPostInit())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(res => res.json())
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .then(data => {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    closeEditBookModal();
                    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                    setTimeout(() => location.reload(), 800);
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            .catch(() => showToast('删除失败，请稍后重试', 'error'));
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 'danger');
// 结束前面打开的代码块、函数调用或对象结构。
}


// 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('DOMContentLoaded', function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const addBookForm = document.getElementById('addBookForm');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (addBookForm) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        addBookForm.addEventListener('submit', function (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const form = this;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const btn = form.querySelector('button[type="submit"]');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.disabled = true;
            // 写入页面内容，让界面展示最新数据或提示文案。
            btn.textContent = '提交中...';

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const formData = new FormData(form);
            // 发起 HTTP 请求，与后端接口交换最新业务数据。
            fetch('/book/add', adminPostInit({ body: formData }))
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                .then(res => res.json())
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                .then(data => {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    btn.disabled = false;
                    // 写入页面内容，让界面展示最新数据或提示文案。
                    btn.textContent = '确认入库馆藏集';
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'success');
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        closeAddBookModal();
                        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                        setTimeout(() => location.reload(), 800);
                    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'error');
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                })
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                .catch(() => {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    btn.disabled = false;
                    // 写入页面内容，让界面展示最新数据或提示文案。
                    btn.textContent = '确认入库馆藏集';
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast('添加失败，请稍后重试', 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                });
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const editBookForm = document.getElementById('editBookForm');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (editBookForm) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        editBookForm.addEventListener('submit', function (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!currentEditBookId) return;

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const form = this;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const btn = form.querySelector('button[type="submit"]');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            btn.disabled = true;
            // 写入页面内容，让界面展示最新数据或提示文案。
            btn.textContent = '保存中...';

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const formData = new FormData(form);
            // 发起 HTTP 请求，与后端接口交换最新业务数据。
            fetch(`/book/edit/${currentEditBookId}`, adminPostInit({ body: formData }))
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                .then(res => res.json())
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                .then(data => {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    btn.disabled = false;
                    // 写入页面内容，让界面展示最新数据或提示文案。
                    btn.textContent = '保存修改';
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'success');
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        closeEditBookModal();
                        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                        setTimeout(() => location.reload(), 800);
                    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'error');
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                })
                // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                .catch(() => {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    btn.disabled = false;
                    // 写入页面内容，让界面展示最新数据或提示文案。
                    btn.textContent = '保存修改';
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast('更新失败，请稍后重试', 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                });
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const searchInput = document.querySelector('input[name="search"]');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (searchInput) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        searchInput.addEventListener('focus', function () {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            this.parentElement.classList.add('scale-[1.02]');
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        searchInput.addEventListener('blur', function () {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            this.parentElement.classList.remove('scale-[1.02]');
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.querySelectorAll('[data-width]').forEach(function (el) {
        // 更新元素样式或状态类，驱动页面视觉状态变化。
        el.style.width = el.getAttribute('data-width') + '%';
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const addBookModal  = document.getElementById('addBookModal');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const editBookModal = document.getElementById('editBookModal');

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (addBookModal) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        addBookModal.addEventListener('click', function (e) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.target === this) closeAddBookModal();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (editBookModal) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        editBookModal.addEventListener('click', function (e) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.target === this) closeEditBookModal();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
});

// 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
document.addEventListener('keydown', function (e) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const addBookModal  = document.getElementById('addBookModal');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const editBookModal = document.getElementById('editBookModal');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (e.key === 'Escape') {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        closeAddBookModal();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        closeEditBookModal();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    trapModalFocus(e, addBookModal);
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    trapModalFocus(e, editBookModal);
// 结束前面打开的代码块、函数调用或对象结构。
});
