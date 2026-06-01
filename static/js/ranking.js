// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var input = document.getElementById('rkSearch');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var list = document.getElementById('rkList');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var noMatch = document.getElementById('rkNoMatch');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!list) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var rows = [].slice.call(list.querySelectorAll('.rk-row'));
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var pods = [].slice.call(document.querySelectorAll('.rk-pod'));
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var podium = document.querySelector('.rk-podium');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cats = [].slice.call(document.querySelectorAll('.rk-cat'));
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var curCat = 'all';
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var curQ = '';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `applyFilter` 函数，封装页面交互、请求或状态更新逻辑。
    function applyFilter() {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var n = 0;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        rows.forEach(function (r) {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var mc = curCat === 'all' || r.dataset.cat === curCat;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var mq = !curQ || r.dataset.t.indexOf(curQ) > -1 || r.dataset.a.indexOf(curQ) > -1;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            r.hidden = !(mc && mq);
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!r.hidden) n++;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (podium) podium.hidden = false;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        pods.forEach(function (p) { p.hidden = false; });
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (noMatch) noMatch.hidden = n > 0;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (input) {
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        input.addEventListener('input', function () {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            curQ = this.value.trim().toLowerCase();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyFilter();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    cats.forEach(function (b) {
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        b.addEventListener('click', function () {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (b._dragMoved) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cats.forEach(function (c) {
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                c.classList.remove('is-active');
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                c.setAttribute('aria-selected', 'false');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            b.classList.add('is-active');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            b.setAttribute('aria-selected', 'true');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            curCat = b.dataset.cat;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            applyFilter();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var catsWrap = document.querySelector('.rk-cats');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (catsWrap) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var isDragging = false;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var startX = 0;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var scrollLeft = 0;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        catsWrap.addEventListener('mousedown', function (e) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            isDragging = true;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            startX = e.pageX - catsWrap.offsetLeft;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            scrollLeft = catsWrap.scrollLeft;
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.cursor = 'grabbing';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.userSelect = 'none';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cats.forEach(function (b) { b._dragMoved = false; });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        catsWrap.addEventListener('mousemove', function (e) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!isDragging) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var dx = e.pageX - catsWrap.offsetLeft - startX;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (Math.abs(dx) > 3) cats.forEach(function (b) { b._dragMoved = true; });
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            catsWrap.scrollLeft = scrollLeft - dx;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        document.addEventListener('mouseup', function () {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!isDragging) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            isDragging = false;
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.cursor = 'grab';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            catsWrap.style.userSelect = '';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
        catsWrap.style.cursor = 'grab';
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:book-catalog-changed', function () {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        location.reload();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
