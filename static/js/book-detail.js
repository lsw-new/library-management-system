// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var state = document.getElementById('bookDetailPageState');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!state) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var bar = document.getElementById('detailStockBar');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var stockNow = document.getElementById('detailStockNow');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var borrowCount = document.getElementById('detailBorrowCount');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var badge = document.getElementById('bookDetailAvailabilityBadge');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var badgeText = document.getElementById('bookDetailAvailabilityText');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var badgeIconPath = document.getElementById('bookDetailAvailabilityIconPath');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var inventoryText = document.getElementById('bookDetailInventoryText');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var borrowButtonSlot = document.getElementById('bookDetailBorrowButtonSlot');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var sync = function () {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var stock = parseInt(state.dataset.bookStock, 10) || 0;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var total = parseInt(state.dataset.bookTotal, 10) || 0;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockNow) stockNow.textContent = String(stock);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (stockNow && stockNow.nextElementSibling) {
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            stockNow.nextElementSibling.textContent = '/' + total;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (bar) bar.style.width = (total > 0 ? Math.round((stock * 100) / total) : 0) + '%';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    new MutationObserver(sync).observe(state, {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        attributes: true,
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        attributeFilter: ['data-book-stock', 'data-book-total']
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `setAvailability` 函数，封装页面交互、请求或状态更新逻辑。
    function setAvailability(info) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var available = !!info.available;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badge) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            badge.className = available
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                ? 'flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium'
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                : 'flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badgeText) badgeText.textContent = available ? '可借阅' : '已借出';
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (badgeIconPath) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            badgeIconPath.setAttribute(
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                'd',
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                available
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    : 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            );
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (inventoryText) {
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            inventoryText.textContent = available
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                ? '可借阅 (剩余 ' + info.stock + '/' + info.total + ' 本)'
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                : '已借出';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `setBorrowButton` 函数，封装页面交互、请求或状态更新逻辑。
    function setBorrowButton(info) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!borrowButtonSlot || state.dataset.canBorrow !== 'true') return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var button = document.getElementById('bookDetailBorrowButton');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info.available) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (button) button.remove();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!button) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button = document.createElement('button');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button.type = 'button';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button.id = 'bookDetailBorrowButton';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            button.className = 'detail-action-primary';
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            button.textContent = '预约借阅';
            // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
            button.addEventListener('click', function () {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                window.showBorrowModalFromData?.(button);
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            borrowButtonSlot.appendChild(button);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookId = String(info.book_id);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookTitle = state.dataset.bookTitle || info.title || '';
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        button.dataset.bookStock = String(info.stock);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `applyStockChange` 函数，封装页面交互、请求或状态更新逻辑。
    function applyStockChange(info) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!info || String(info.book_id) !== String(state.dataset.bookId)) return;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        state.dataset.bookStock = String(info.stock);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        state.dataset.bookTotal = String(info.total);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (borrowCount && info.borrow_count !== undefined) {
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            borrowCount.textContent = String(info.borrow_count);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        sync();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setAvailability(info);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        setBorrowButton(info);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `pollStock` 函数，封装页面交互、请求或状态更新逻辑。
    function pollStock() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var stockUrl = window.borrowModalConfig && window.borrowModalConfig.booksStockUrl;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!stockUrl) return;
        // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
        fetch(stockUrl + '?ids=' + encodeURIComponent(state.dataset.bookId), {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        })
            // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
            .then(function(resp) { return resp.json(); })
            // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
            .then(function(data) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                var info = data && data[state.dataset.bookId];
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (!info) return;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                info.book_id = state.dataset.bookId;
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                applyStockChange(info);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            .catch(function() {});
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-stock-changed', function(event) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        applyStockChange(event.detail);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('visibilitychange', function() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!document.hidden) pollStock();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    sync();
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setInterval(pollStock, 3000);
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
