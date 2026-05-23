(function () {
    var state = document.getElementById('bookDetailPageState');
    if (!state) return;

    var bar = document.getElementById('detailStockBar');
    var stockNow = document.getElementById('detailStockNow');
    if (!bar && !stockNow) return;

    var sync = function () {
        var stock = parseInt(state.dataset.bookStock, 10) || 0;
        var total = parseInt(state.dataset.bookTotal, 10) || 0;
        if (stockNow) stockNow.textContent = String(stock);
        if (bar) bar.style.width = (total > 0 ? Math.round((stock * 100) / total) : 0) + '%';
    };

    new MutationObserver(sync).observe(state, {
        attributes: true,
        attributeFilter: ['data-book-stock', 'data-book-total']
    });
})();
