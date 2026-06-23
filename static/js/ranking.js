(function () {
    var input = document.getElementById('rkSearch');
    var list = document.getElementById('rkList');
    var noMatch = document.getElementById('rkNoMatch');
    if (!list) return;

    var rows = [].slice.call(list.querySelectorAll('.rk-row'));
    var podium = document.querySelector('.rk-podium');
    var cats = [].slice.call(document.querySelectorAll('.rk-cat'));
    var curCat = 'all';
    var curQ = '';

    function applyFilter() {
        var filtering = curCat !== 'all' || !!curQ;
        var n = 0;
        rows.forEach(function (r) {
            var mc = curCat === 'all' || r.dataset.cat === curCat;
            var mq = !curQ || r.dataset.t.indexOf(curQ) > -1 || r.dataset.a.indexOf(curQ) > -1;
            r.hidden = !(mc && mq);
            if (!r.hidden) n++;
        });
        // 过滤时隐藏“热门前三”领奖台：它展示的是全局前三，过滤后会产生误导
        if (podium) podium.hidden = filtering;
        if (noMatch) noMatch.hidden = n > 0;
    }

    if (input) {
        input.addEventListener('input', function () {
            curQ = this.value.trim().toLowerCase();
            applyFilter();
        });
    }

    cats.forEach(function (b) {
        b.addEventListener('click', function () {
            if (b._dragMoved) return;
            cats.forEach(function (c) {
                c.classList.remove('is-active');
                c.setAttribute('aria-selected', 'false');
            });
            b.classList.add('is-active');
            b.setAttribute('aria-selected', 'true');
            curCat = b.dataset.cat;
            applyFilter();
        });
    });

    var catsWrap = document.querySelector('.rk-cats');
    if (catsWrap) {
        var isDragging = false;
        var startX = 0;
        var scrollLeft = 0;

        catsWrap.addEventListener('mousedown', function (e) {
            isDragging = true;
            startX = e.pageX - catsWrap.offsetLeft;
            scrollLeft = catsWrap.scrollLeft;
            catsWrap.style.cursor = 'grabbing';
            catsWrap.style.userSelect = 'none';
            cats.forEach(function (b) { b._dragMoved = false; });
        });

        catsWrap.addEventListener('mousemove', function (e) {
            if (!isDragging) return;
            e.preventDefault();
            var dx = e.pageX - catsWrap.offsetLeft - startX;
            if (Math.abs(dx) > 3) cats.forEach(function (b) { b._dragMoved = true; });
            catsWrap.scrollLeft = scrollLeft - dx;
        });

        document.addEventListener('mouseup', function () {
            if (!isDragging) return;
            isDragging = false;
            catsWrap.style.cursor = 'grab';
            catsWrap.style.userSelect = '';
        });

        catsWrap.style.cursor = 'grab';
    }

    window.addEventListener('library:book-catalog-changed', function () {
        if (document.hidden) return;
        location.reload();
    });
})();
