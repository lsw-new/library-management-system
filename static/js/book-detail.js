// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var state = document.getElementById('bookDetailPageState');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!state) return;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var bar = document.getElementById('detailStockBar');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var stockNow = document.getElementById('detailStockNow');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var borrowCount = document.getElementById('detailBorrowCount');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var badge = document.getElementById('bookDetailAvailabilityBadge');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var badgeText = document.getElementById('bookDetailAvailabilityText');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var badgeIconPath = document.getElementById('bookDetailAvailabilityIconPath');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var inventoryText = document.getElementById('bookDetailInventoryText');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var borrowButtonSlot = document.getElementById('bookDetailBorrowButtonSlot');

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var sync = function () {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var stock = parseInt(state.dataset.bookStock, 10) || 0;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var total = parseInt(state.dataset.bookTotal, 10) || 0;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockNow) stockNow.textContent = String(stock);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockNow && stockNow.nextElementSibling) {
            // 写入页面内容，让界面展示最新数据或提示文案。
            stockNow.nextElementSibling.textContent = '/' + total;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (bar) bar.style.width = (total > 0 ? Math.round((stock * 100) / total) : 0) + '%';
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    new MutationObserver(sync).observe(state, {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        attributes: true,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        attributeFilter: ['data-book-stock', 'data-book-total']
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 定义 `setAvailability` 函数，封装页面交互、请求或状态更新逻辑。
    function setAvailability(info) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var available = !!info.available;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badge) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            badge.className = available
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                ? 'flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium'
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                : 'flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium';
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badgeText) badgeText.textContent = available ? '可借阅' : '已借出';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badgeIconPath) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            badgeIconPath.setAttribute(
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                'd',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                available
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    : 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            // 结束前面打开的代码块、函数调用或对象结构。
            );
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (inventoryText) {
            // 写入页面内容，让界面展示最新数据或提示文案。
            inventoryText.textContent = available
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                ? '可借阅 (剩余 ' + info.stock + '/' + info.total + ' 本)'
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                : '已借出';
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `setBorrowButton` 函数，封装页面交互、请求或状态更新逻辑。
    function setBorrowButton(info) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!borrowButtonSlot || state.dataset.canBorrow !== 'true') return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var button = document.getElementById('bookDetailBorrowButton');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info.available) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (button) button.remove();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!button) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button = document.createElement('button');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button.type = 'button';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button.id = 'bookDetailBorrowButton';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button.className = 'detail-action-primary';
            // 写入页面内容，让界面展示最新数据或提示文案。
            button.textContent = '预约借阅';
            // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
            button.addEventListener('click', function () {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.showBorrowModalFromData?.(button);
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            borrowButtonSlot.appendChild(button);
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookId = String(info.book_id);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookTitle = state.dataset.bookTitle || info.title || '';
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookStock = String(info.stock);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `applyStockChange` 函数，封装页面交互、请求或状态更新逻辑。
    function applyStockChange(info) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info || String(info.book_id) !== String(state.dataset.bookId)) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        state.dataset.bookStock = String(info.stock);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        state.dataset.bookTotal = String(info.total);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (borrowCount && info.borrow_count !== undefined) {
            // 写入页面内容，让界面展示最新数据或提示文案。
            borrowCount.textContent = String(info.borrow_count);
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        sync();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setAvailability(info);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setBorrowButton(info);
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 定义 `pollStock` 函数，封装页面交互、请求或状态更新逻辑。
    function pollStock() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var stockUrl = window.borrowModalConfig && window.borrowModalConfig.booksStockUrl;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!stockUrl) return;
        // 发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(stockUrl + '?ids=' + encodeURIComponent(state.dataset.bookId), {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        })
            // 处理异步流程，等待接口、动画或浏览器任务完成。
            .then(function(resp) { return resp.json(); })
            // 处理异步流程，等待接口、动画或浏览器任务完成。
            .then(function(data) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                var info = data && data[state.dataset.bookId];
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (!info) return;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                info.book_id = state.dataset.bookId;
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                applyStockChange(info);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            .catch(function() {});
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-stock-changed', function(event) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        applyStockChange(event.detail);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('visibilitychange', function() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!document.hidden) pollStock();
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    sync();
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setInterval(pollStock, 3000);
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
