// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var input = document.getElementById('rkSearch');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var list = document.getElementById('rkList');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var noMatch = document.getElementById('rkNoMatch');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!list) return;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var rows = [].slice.call(list.querySelectorAll('.rk-row'));
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var pods = [].slice.call(document.querySelectorAll('.rk-pod'));
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var podium = document.querySelector('.rk-podium');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cats = [].slice.call(document.querySelectorAll('.rk-cat'));
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var curCat = 'all';
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var curQ = '';

    // 定义 `applyFilter` 函数，封装页面交互、请求或状态更新逻辑。
    function applyFilter() {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var n = 0;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        rows.forEach(function (r) {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var mc = curCat === 'all' || r.dataset.cat === curCat;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var mq = !curQ || r.dataset.t.indexOf(curQ) > -1 || r.dataset.a.indexOf(curQ) > -1;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            r.hidden = !(mc && mq);
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!r.hidden) n++;
        // 结束前面打开的代码块、函数调用或对象结构。
        });
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (podium) podium.hidden = false;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        pods.forEach(function (p) { p.hidden = false; });
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (noMatch) noMatch.hidden = n > 0;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (input) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        input.addEventListener('input', function () {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            curQ = this.value.trim().toLowerCase();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyFilter();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    cats.forEach(function (b) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        b.addEventListener('click', function () {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (b._dragMoved) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cats.forEach(function (c) {
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                c.classList.remove('is-active');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                c.setAttribute('aria-selected', 'false');
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            b.classList.add('is-active');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            b.setAttribute('aria-selected', 'true');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            curCat = b.dataset.cat;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyFilter();
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var catsWrap = document.querySelector('.rk-cats');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (catsWrap) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var isDragging = false;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var startX = 0;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var scrollLeft = 0;

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        catsWrap.addEventListener('mousedown', function (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            isDragging = true;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            startX = e.pageX - catsWrap.offsetLeft;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            scrollLeft = catsWrap.scrollLeft;
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.cursor = 'grabbing';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.userSelect = 'none';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cats.forEach(function (b) { b._dragMoved = false; });
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        catsWrap.addEventListener('mousemove', function (e) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!isDragging) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var dx = e.pageX - catsWrap.offsetLeft - startX;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (Math.abs(dx) > 3) cats.forEach(function (b) { b._dragMoved = true; });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            catsWrap.scrollLeft = scrollLeft - dx;
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        document.addEventListener('mouseup', function () {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!isDragging) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            isDragging = false;
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.cursor = 'grab';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.userSelect = '';
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 更新元素样式或状态类，驱动页面视觉状态变化。
        catsWrap.style.cursor = 'grab';
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-catalog-changed', function () {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        location.reload();
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
