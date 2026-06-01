(function () {
    var state = document.getElementById('bookDetailPageState');
    if (!state) return;

    var bar = document.getElementById('detailStockBar');
    var stockNow = document.getElementById('detailStockNow');
    var borrowCount = document.getElementById('detailBorrowCount');
    var badge = document.getElementById('bookDetailAvailabilityBadge');
    var badgeText = document.getElementById('bookDetailAvailabilityText');
    var badgeIconPath = document.getElementById('bookDetailAvailabilityIconPath');
    var inventoryText = document.getElementById('bookDetailInventoryText');
    var borrowButtonSlot = document.getElementById('bookDetailBorrowButtonSlot');

    var sync = function () {
        var stock = parseInt(state.dataset.bookStock, 10) || 0;
        var total = parseInt(state.dataset.bookTotal, 10) || 0;
        if (stockNow) stockNow.textContent = String(stock);
        if (stockNow && stockNow.nextElementSibling) {
            stockNow.nextElementSibling.textContent = '/' + total;
        }
        if (bar) bar.style.width = (total > 0 ? Math.round((stock * 100) / total) : 0) + '%';
    };

    new MutationObserver(sync).observe(state, {
        attributes: true,
        attributeFilter: ['data-book-stock', 'data-book-total']
    });

    function setAvailability(info) {
        var available = !!info.available;
        if (badge) {
            badge.className = available
                ? 'flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium'
                : 'flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium';
        }
        if (badgeText) badgeText.textContent = available ? '可借阅' : '已借出';
        if (badgeIconPath) {
            badgeIconPath.setAttribute(
                'd',
                available
                    ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    : 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            );
        }
        if (inventoryText) {
            inventoryText.textContent = available
                ? '可借阅 (剩余 ' + info.stock + '/' + info.total + ' 本)'
                : '已借出';
        }
    }

    function setBorrowButton(info) {
        if (!borrowButtonSlot || state.dataset.canBorrow !== 'true') return;
        var button = document.getElementById('bookDetailBorrowButton');
        if (!info.available) {
            if (button) button.remove();
            return;
        }
        if (!button) {
            button = document.createElement('button');
            button.type = 'button';
            button.id = 'bookDetailBorrowButton';
            button.className = 'detail-action-primary';
            button.textContent = '预约借阅';
            button.addEventListener('click', function () {
                window.showBorrowModalFromData?.(button);
            });
            borrowButtonSlot.appendChild(button);
        }
        button.dataset.bookId = String(info.book_id);
        button.dataset.bookTitle = state.dataset.bookTitle || info.title || '';
        button.dataset.bookStock = String(info.stock);
    }

    function applyStockChange(info) {
        if (!info || String(info.book_id) !== String(state.dataset.bookId)) return;
        state.dataset.bookStock = String(info.stock);
        state.dataset.bookTotal = String(info.total);
        if (borrowCount && info.borrow_count !== undefined) {
            borrowCount.textContent = String(info.borrow_count);
        }
        sync();
        setAvailability(info);
        setBorrowButton(info);
    }

    function pollStock() {
        if (document.hidden) return;
        var stockUrl = window.borrowModalConfig && window.borrowModalConfig.booksStockUrl;
        if (!stockUrl) return;
        fetch(stockUrl + '?ids=' + encodeURIComponent(state.dataset.bookId), {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
            .then(function(resp) { return resp.json(); })
            .then(function(data) {
                var info = data && data[state.dataset.bookId];
                if (!info) return;
                info.book_id = state.dataset.bookId;
                applyStockChange(info);
            })
            .catch(function() {});
    }

    window.addEventListener('library:book-stock-changed', function(event) {
        applyStockChange(event.detail);
    });
    document.addEventListener('visibilitychange', function() {
        if (!document.hidden) pollStock();
    });

    sync();
    setInterval(pollStock, 3000);
})();
