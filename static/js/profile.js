// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var toast = function (msg, type) {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (window.showToast) return window.showToast(msg, type);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        console.warn(msg);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 标签页切换 ======
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.querySelectorAll('.pf-tab').forEach(function (tab) {
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        tab.addEventListener('click', function () {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var target = tab.dataset.tab;
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.querySelectorAll('.pf-tab').forEach(function (t) {
                // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
                t.classList.remove('is-active', 'tone-purple');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.add('is-active');
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (target === 'security') tab.classList.add('tone-purple');
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('panel-profile').style.display  = target === 'profile'  ? '' : 'none';
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('panel-security').style.display = target === 'security' ? '' : 'none';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 头像裁剪上传 ======
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var avatarInput   = document.getElementById('avatar-input');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var avatarWrapper = document.getElementById('avatar-wrapper');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropModal     = document.getElementById('crop-modal');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropViewport  = document.getElementById('crop-viewport');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropCanvas    = document.getElementById('crop-canvas');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropRing      = cropViewport ? cropViewport.querySelector('.crop-ring') : null;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropZoom      = document.getElementById('crop-zoom');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropCancel    = document.getElementById('crop-cancel');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropConfirm   = document.getElementById('crop-confirm');
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (avatarInput && cropModal && cropRing) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var ctx    = cropCanvas.getContext('2d');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var srcImg = new Image();
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var state  = { imgX: 0, imgY: 0, scale: 1, ringX: 0, ringY: 0, ringR: 0, dragging: false, sx: 0, sy: 0, startRX: 0, startRY: 0 };
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var vpSize = 0;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var CROP_OUT = 400;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：定义 `ringRadius` 函数，封装页面交互、请求或状态更新逻辑。
        function ringRadius(v) {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var dw = srcImg.naturalWidth * state.scale;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var dh = srcImg.naturalHeight * state.scale;
            // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
            return Math.min(dw, dh) * (0.15 + (v - 100) / 200 * 0.35);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：定义 `positionRing` 函数，封装页面交互、请求或状态更新逻辑。
        function positionRing() {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var d = state.ringR * 2;
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.width  = d + 'px';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.height = d + 'px';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.left   = (state.ringX - state.ringR) + 'px';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.top    = (state.ringY - state.ringR) + 'px';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：定义 `clampRing` 函数，封装页面交互、请求或状态更新逻辑。
        function clampRing() {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var l = state.imgX;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var t = state.imgY;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var r = l + srcImg.naturalWidth  * state.scale;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var b = t + srcImg.naturalHeight * state.scale;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = Math.max(l + state.ringR, Math.min(r - state.ringR, state.ringX));
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = Math.max(t + state.ringR, Math.min(b - state.ringR, state.ringY));
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：定义 `draw` 函数，封装页面交互、请求或状态更新逻辑。
        function draw() {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ctx.clearRect(0, 0, vpSize, vpSize);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ctx.drawImage(srcImg, state.imgX, state.imgY, srcImg.naturalWidth * state.scale, srcImg.naturalHeight * state.scale);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：定义 `openCrop` 函数，封装页面交互、请求或状态更新逻辑。
        function openCrop() {
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            cropModal.classList.add('is-open');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropModal.setAttribute('aria-hidden', 'false');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            vpSize = cropViewport.offsetWidth;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropCanvas.width  = vpSize;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropCanvas.height = vpSize;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var sx = vpSize / srcImg.naturalWidth;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var sy = vpSize / srcImg.naturalHeight;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.scale = Math.min(sx, sy);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.imgX  = (vpSize - srcImg.naturalWidth  * state.scale) / 2;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.imgY  = (vpSize - srcImg.naturalHeight * state.scale) / 2;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropZoom.value = 200;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringR = ringRadius(200);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = vpSize / 2;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = vpSize / 2;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            draw();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：定义 `closeCrop` 函数，封装页面交互、请求或状态更新逻辑。
        function closeCrop() {
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            cropModal.classList.remove('is-open');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropModal.setAttribute('aria-hidden', 'true');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            avatarInput.value = '';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        avatarInput.addEventListener('change', function () {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var file = avatarInput.files[0];
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!file) return;
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (file.size > 3 * 1024 * 1024) {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                toast('图片大小不能超过 3MB', 'warning');
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                avatarInput.value = '';
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var url = URL.createObjectURL(file);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            srcImg.onload = function () { URL.revokeObjectURL(url); openCrop(); };
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            srcImg.src = url;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('mousedown', function (e) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.dragging = true;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sx = e.clientX;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sy = e.clientY;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRX = state.ringX;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRY = state.ringY;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        window.addEventListener('mousemove', function (e) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!state.dragging) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = state.startRX + (e.clientX - state.sx);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = state.startRY + (e.clientY - state.sy);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        window.addEventListener('mouseup', function () { state.dragging = false; });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('touchstart', function (e) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.touches.length !== 1) return;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var t = e.touches[0];
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.dragging = true;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sx = t.clientX;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sy = t.clientY;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRX = state.ringX;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRY = state.ringY;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, { passive: true });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('touchmove', function (e) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!state.dragging || e.touches.length !== 1) return;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var t = e.touches[0];
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = state.startRX + (t.clientX - state.sx);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = state.startRY + (t.clientY - state.sy);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, { passive: false });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('touchend', function () { state.dragging = false; });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('wheel', function (e) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var v = Math.max(100, Math.min(300, parseFloat(cropZoom.value) + (e.deltaY > 0 ? -8 : 8)));
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropZoom.value = v;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringR = ringRadius(v);
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, { passive: false });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropZoom.addEventListener('input', function () {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringR = ringRadius(parseFloat(cropZoom.value));
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropCancel.addEventListener('click', closeCrop);
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropModal.addEventListener('click', function (e) { if (e.target === cropModal) closeCrop(); });
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        document.addEventListener('keydown', function (e) {
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.key === 'Escape' && cropModal.classList.contains('is-open')) closeCrop();
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropConfirm.addEventListener('click', function () {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropConfirm.disabled = true;
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            cropConfirm.textContent = '上传中…';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var out  = document.createElement('canvas');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            out.width  = CROP_OUT;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            out.height = CROP_OUT;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var octx = out.getContext('2d');
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var srcX = (state.ringX - state.ringR - state.imgX) / state.scale;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var srcY = (state.ringY - state.ringR - state.imgY) / state.scale;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var srcD = (state.ringR * 2) / state.scale;
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            octx.drawImage(srcImg, srcX, srcY, srcD, srcD, 0, 0, CROP_OUT, CROP_OUT);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            out.toBlob(function (blob) {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                var fd = new FormData();
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                fd.append('avatar', blob, 'avatar.jpg');
                // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
                fetch('/profile/avatar', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-Token': (window.borrowModalConfig || {}).csrfToken || '' }, body: fd })
                    // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (r) { return r.json(); })
                    // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (data) {
                        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (data.success) {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(data.message, 'success');
                            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var existing = document.getElementById('avatar-img');
                            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var letter   = document.getElementById('avatar-letter');
                            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (existing) {
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                existing.src = data.avatar_url + '?t=' + Date.now();
                            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                            } else {
                                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                                if (letter) letter.remove();
                                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                                var img = document.createElement('img');
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.className = 'pf-avatar-img';
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.id  = 'avatar-img';
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.alt = '头像';
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.src = data.avatar_url + '?t=' + Date.now();
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                avatarWrapper.insertBefore(img, avatarWrapper.firstChild);
                            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                            }
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            closeCrop();
                        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                        } else {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(data.message || '上传失败', 'error');
                        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                        }
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    })
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); })
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .finally(function () {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        cropConfirm.disabled = false;
                        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                        cropConfirm.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>确认裁剪';
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    });
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            }, 'image/jpeg', 0.9);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 密码可见切换 ======
    // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.querySelectorAll('.pf-toggle-pw').forEach(function (btn) {
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        btn.addEventListener('click', function () {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var input = document.getElementById(btn.dataset.target);
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!input) return;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var show = input.type === 'password';
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.type = show ? 'text' : 'password';
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            btn.querySelector('.eye-open').classList.toggle('hidden', !show);
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            btn.querySelector('.eye-closed').classList.toggle('hidden', show);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 修改资料 ======
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var profileForm = document.getElementById('profile-form');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var profileBtn  = document.getElementById('profile-save-btn');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (profileForm) {
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        profileForm.addEventListener('submit', function (e) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var username  = document.getElementById('profile-username').value.trim();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var realName  = document.getElementById('profile-realname').value.trim();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var className = document.getElementById('profile-classname').value.trim();
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!username) { toast('请填写用户名', 'warning'); return; }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!realName) { toast('请填写姓名', 'warning'); return; }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            withLoadingBtn(profileBtn, '保存中…', function () {
                // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
                return postJson('/profile/update', { username: username, real_name: realName, class_name: className })
                    // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (res) {
                        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (res.data.success) {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message, 'success');
                            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var d = res.data;
                            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (d.username) {
                                // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
                                document.querySelectorAll('[data-bind="username"]').forEach(function (el) {
                                    // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                                    el.textContent = d.username;
                                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                                });
                                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                                var avatarEl = document.querySelector('[data-bind="avatar-letter"]');
                                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                                if (avatarEl) avatarEl.textContent = d.username.charAt(0).toUpperCase();
                            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                            }
                            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var rnEl = document.querySelector('[data-bind="real-name"]');
                            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (rnEl) rnEl.textContent = d.real_name || '';
                            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var cnEl = document.querySelector('[data-bind="class-name"]');
                            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (cnEl) cnEl.textContent = d.class_name || '';
                        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                        } else {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message || '更新失败', 'error');
                        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                        }
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    })
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); });
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 发送验证码 ======
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var sendCodeBtn   = document.getElementById('send-code-btn');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var profileConfig = window.__PROFILE_CONFIG__ || {};
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (sendCodeBtn) {
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        sendCodeBtn.addEventListener('click', function () {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            sendCodeBtn.disabled = true;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var orig = sendCodeBtn.textContent;
            // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
            sendCodeBtn.textContent = '发送中…';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：发起 HTTP 请求，与后端接口交换最新业务数据。
            fetch('/send-verification-code', {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'Content-Type': 'application/json',
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-Requested-With': 'XMLHttpRequest',
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-CSRF-Token': profileConfig.authCsrfToken || ''
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                },
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({ email: profileConfig.userEmail || '' })
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
                // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
                .then(function (r) { return r.json(); })
                // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
                .then(function (data) {
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        toast(data.message || '验证码已发送', 'success');
                        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                        var cd = 60;
                        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                        sendCodeBtn.textContent = cd + 's';
                        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                        var t = setInterval(function () {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            cd--;
                            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (cd <= 0) {
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                clearInterval(t);
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                sendCodeBtn.disabled = false;
                                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                                sendCodeBtn.textContent = orig;
                            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                            } else {
                                // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                                sendCodeBtn.textContent = cd + 's';
                            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                            }
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        }, 1000);
                    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        toast(data.message || '发送失败', 'error');
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        sendCodeBtn.disabled = false;
                        // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                        sendCodeBtn.textContent = orig;
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    }
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                })
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                .catch(function () {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    toast('网络错误', 'error');
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    sendCodeBtn.disabled = false;
                    // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
                    sendCodeBtn.textContent = orig;
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 修改密码 ======
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var passwordForm = document.getElementById('password-form');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var passwordBtn  = document.getElementById('password-save-btn');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (passwordForm) {
        // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        passwordForm.addEventListener('submit', function (e) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var oldPw     = document.getElementById('old-password').value;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var newPw     = document.getElementById('new-password').value;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var confirmPw = document.getElementById('confirm-password').value;
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var verCode   = document.getElementById('verification-code').value.trim();
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!oldPw || !newPw || !confirmPw) { toast('请填写所有密码字段', 'warning'); return; }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (newPw.length < 6) { toast('新密码至少 6 位字符', 'warning'); return; }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (newPw !== confirmPw) { toast('两次输入的新密码不一致', 'warning'); return; }
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!verCode) { toast('请输入邮箱验证码', 'warning'); return; }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (typeof showConfirm === 'function' && passwordForm.dataset.confirmed !== '1') {
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showConfirm('更新密码', '确认提交新的登录密码吗？完成后请使用新密码登录。', function () {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    passwordForm.dataset.confirmed = '1';
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    passwordForm.requestSubmit();
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                }, 'warning', { confirmText: '确认更新', cancelText: '再检查一下' });
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            delete passwordForm.dataset.confirmed;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            withLoadingBtn(passwordBtn, '更新中…', function () {
                // 逐行注释：返回当前函数的处理结果，或提前结束前端执行流程。
                return postJson('/profile/password', {
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    old_password: oldPw,
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    new_password: newPw,
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    confirm_password: confirmPw,
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    verification_code: verCode
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                })
                    // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (res) {
                        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (res.data.success) {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message, 'success');
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            passwordForm.reset();
                        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                        } else {
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message || '修改失败', 'error');
                        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                        }
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    })
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); });
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:borrow-status-changed', function () {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.activeElement && document.activeElement.closest && document.activeElement.closest('form')) return;
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (cropModal && !cropModal.classList.contains('hidden')) return;
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        location.reload();
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
