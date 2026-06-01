// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function () {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var toast = function (msg, type) {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (window.showToast) return window.showToast(msg, type);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        console.warn(msg);
    // 结束前面打开的代码块、函数调用或对象结构。
    };


    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 标签页切换 ======
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.querySelectorAll('.pf-tab').forEach(function (tab) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        tab.addEventListener('click', function () {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var target = tab.dataset.tab;
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.querySelectorAll('.pf-tab').forEach(function (t) {
                // 更新元素样式或状态类，驱动页面视觉状态变化。
                t.classList.remove('is-active', 'tone-purple');
            // 结束前面打开的代码块、函数调用或对象结构。
            });
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            tab.classList.add('is-active');
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (target === 'security') tab.classList.add('tone-purple');
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('panel-profile').style.display  = target === 'profile'  ? '' : 'none';
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            document.getElementById('panel-security').style.display = target === 'security' ? '' : 'none';
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });


    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 头像裁剪上传 ======
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var avatarInput   = document.getElementById('avatar-input');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var avatarWrapper = document.getElementById('avatar-wrapper');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropModal     = document.getElementById('crop-modal');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropViewport  = document.getElementById('crop-viewport');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropCanvas    = document.getElementById('crop-canvas');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropRing      = cropViewport ? cropViewport.querySelector('.crop-ring') : null;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropZoom      = document.getElementById('crop-zoom');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropCancel    = document.getElementById('crop-cancel');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var cropConfirm   = document.getElementById('crop-confirm');

    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (avatarInput && cropModal && cropRing) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var ctx    = cropCanvas.getContext('2d');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var srcImg = new Image();
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var state  = { imgX: 0, imgY: 0, scale: 1, ringX: 0, ringY: 0, ringR: 0, dragging: false, sx: 0, sy: 0, startRX: 0, startRY: 0 };
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var vpSize = 0;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var CROP_OUT = 400;

        // 定义 `ringRadius` 函数，封装页面交互、请求或状态更新逻辑。
        function ringRadius(v) {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var dw = srcImg.naturalWidth * state.scale;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var dh = srcImg.naturalHeight * state.scale;
            // 返回当前函数的处理结果，或提前结束前端执行流程。
            return Math.min(dw, dh) * (0.15 + (v - 100) / 200 * 0.35);
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 定义 `positionRing` 函数，封装页面交互、请求或状态更新逻辑。
        function positionRing() {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var d = state.ringR * 2;
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.width  = d + 'px';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.height = d + 'px';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.left   = (state.ringX - state.ringR) + 'px';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            cropRing.style.top    = (state.ringY - state.ringR) + 'px';
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 定义 `clampRing` 函数，封装页面交互、请求或状态更新逻辑。
        function clampRing() {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var l = state.imgX;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var t = state.imgY;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var r = l + srcImg.naturalWidth  * state.scale;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var b = t + srcImg.naturalHeight * state.scale;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = Math.max(l + state.ringR, Math.min(r - state.ringR, state.ringX));
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = Math.max(t + state.ringR, Math.min(b - state.ringR, state.ringY));
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 定义 `draw` 函数，封装页面交互、请求或状态更新逻辑。
        function draw() {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ctx.clearRect(0, 0, vpSize, vpSize);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ctx.drawImage(srcImg, state.imgX, state.imgY, srcImg.naturalWidth * state.scale, srcImg.naturalHeight * state.scale);
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 定义 `openCrop` 函数，封装页面交互、请求或状态更新逻辑。
        function openCrop() {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            cropModal.classList.add('is-open');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropModal.setAttribute('aria-hidden', 'false');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            vpSize = cropViewport.offsetWidth;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropCanvas.width  = vpSize;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropCanvas.height = vpSize;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var sx = vpSize / srcImg.naturalWidth;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var sy = vpSize / srcImg.naturalHeight;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.scale = Math.min(sx, sy);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.imgX  = (vpSize - srcImg.naturalWidth  * state.scale) / 2;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.imgY  = (vpSize - srcImg.naturalHeight * state.scale) / 2;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropZoom.value = 200;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringR = ringRadius(200);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = vpSize / 2;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = vpSize / 2;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            draw();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 定义 `closeCrop` 函数，封装页面交互、请求或状态更新逻辑。
        function closeCrop() {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            cropModal.classList.remove('is-open');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropModal.setAttribute('aria-hidden', 'true');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            avatarInput.value = '';
        // 结束前面打开的代码块、函数调用或对象结构。
        }

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        avatarInput.addEventListener('change', function () {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var file = avatarInput.files[0];
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!file) return;
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (file.size > 3 * 1024 * 1024) {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                toast('图片大小不能超过 3MB', 'warning');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                avatarInput.value = '';
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var url = URL.createObjectURL(file);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            srcImg.onload = function () { URL.revokeObjectURL(url); openCrop(); };
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            srcImg.src = url;
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('mousedown', function (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.dragging = true;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sx = e.clientX;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sy = e.clientY;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRX = state.ringX;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRY = state.ringY;
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        window.addEventListener('mousemove', function (e) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!state.dragging) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = state.startRX + (e.clientX - state.sx);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = state.startRY + (e.clientY - state.sy);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        window.addEventListener('mouseup', function () { state.dragging = false; });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('touchstart', function (e) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.touches.length !== 1) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var t = e.touches[0];
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.dragging = true;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sx = t.clientX;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.sy = t.clientY;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRX = state.ringX;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.startRY = state.ringY;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, { passive: true });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('touchmove', function (e) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!state.dragging || e.touches.length !== 1) return;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var t = e.touches[0];
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringX = state.startRX + (t.clientX - state.sx);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringY = state.startRY + (t.clientY - state.sy);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, { passive: false });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('touchend', function () { state.dragging = false; });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropViewport.addEventListener('wheel', function (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var v = Math.max(100, Math.min(300, parseFloat(cropZoom.value) + (e.deltaY > 0 ? -8 : 8)));
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropZoom.value = v;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringR = ringRadius(v);
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        }, { passive: false });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropZoom.addEventListener('input', function () {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            state.ringR = ringRadius(parseFloat(cropZoom.value));
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            clampRing();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            positionRing();
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropCancel.addEventListener('click', closeCrop);
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropModal.addEventListener('click', function (e) { if (e.target === cropModal) closeCrop(); });
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        document.addEventListener('keydown', function (e) {
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (e.key === 'Escape' && cropModal.classList.contains('is-open')) closeCrop();
        // 结束前面打开的代码块、函数调用或对象结构。
        });

        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        cropConfirm.addEventListener('click', function () {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            cropConfirm.disabled = true;
            // 写入页面内容，让界面展示最新数据或提示文案。
            cropConfirm.textContent = '上传中…';

            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var out  = document.createElement('canvas');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            out.width  = CROP_OUT;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            out.height = CROP_OUT;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var octx = out.getContext('2d');
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var srcX = (state.ringX - state.ringR - state.imgX) / state.scale;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var srcY = (state.ringY - state.ringR - state.imgY) / state.scale;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var srcD = (state.ringR * 2) / state.scale;
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            octx.drawImage(srcImg, srcX, srcY, srcD, srcD, 0, 0, CROP_OUT, CROP_OUT);

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            out.toBlob(function (blob) {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                var fd = new FormData();
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                fd.append('avatar', blob, 'avatar.jpg');
                // 发起 HTTP 请求，与后端接口交换最新业务数据。
                fetch('/profile/avatar', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-Token': (window.borrowModalConfig || {}).csrfToken || '' }, body: fd })
                    // 处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (r) { return r.json(); })
                    // 处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (data) {
                        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (data.success) {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(data.message, 'success');
                            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var existing = document.getElementById('avatar-img');
                            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var letter   = document.getElementById('avatar-letter');
                            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (existing) {
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                existing.src = data.avatar_url + '?t=' + Date.now();
                            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                            } else {
                                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                                if (letter) letter.remove();
                                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                                var img = document.createElement('img');
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.className = 'pf-avatar-img';
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.id  = 'avatar-img';
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.alt = '头像';
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                img.src = data.avatar_url + '?t=' + Date.now();
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                avatarWrapper.insertBefore(img, avatarWrapper.firstChild);
                            // 结束前面打开的代码块、函数调用或对象结构。
                            }
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            closeCrop();
                        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                        } else {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(data.message || '上传失败', 'error');
                        // 结束前面打开的代码块、函数调用或对象结构。
                        }
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    })
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); })
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .finally(function () {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        cropConfirm.disabled = false;
                        // 写入页面内容，让界面展示最新数据或提示文案。
                        cropConfirm.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>确认裁剪';
                    // 结束前面打开的代码块、函数调用或对象结构。
                    });
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            }, 'image/jpeg', 0.9);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }


    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 密码可见切换 ======
    // 查找页面 DOM 元素，为读取状态或更新界面做准备。
    document.querySelectorAll('.pf-toggle-pw').forEach(function (btn) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        btn.addEventListener('click', function () {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var input = document.getElementById(btn.dataset.target);
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!input) return;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var show = input.type === 'password';
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.type = show ? 'text' : 'password';
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            btn.querySelector('.eye-open').classList.toggle('hidden', !show);
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            btn.querySelector('.eye-closed').classList.toggle('hidden', show);
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });


    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 修改资料 ======
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var profileForm = document.getElementById('profile-form');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var profileBtn  = document.getElementById('profile-save-btn');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (profileForm) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        profileForm.addEventListener('submit', function (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var username  = document.getElementById('profile-username').value.trim();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var realName  = document.getElementById('profile-realname').value.trim();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var className = document.getElementById('profile-classname').value.trim();
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!username) { toast('请填写用户名', 'warning'); return; }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!realName) { toast('请填写姓名', 'warning'); return; }

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            withLoadingBtn(profileBtn, '保存中…', function () {
                // 返回当前函数的处理结果，或提前结束前端执行流程。
                return postJson('/profile/update', { username: username, real_name: realName, class_name: className })
                    // 处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (res) {
                        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (res.data.success) {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message, 'success');
                            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var d = res.data;
                            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (d.username) {
                                // 查找页面 DOM 元素，为读取状态或更新界面做准备。
                                document.querySelectorAll('[data-bind="username"]').forEach(function (el) {
                                    // 写入页面内容，让界面展示最新数据或提示文案。
                                    el.textContent = d.username;
                                // 结束前面打开的代码块、函数调用或对象结构。
                                });
                                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                                var avatarEl = document.querySelector('[data-bind="avatar-letter"]');
                                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                                if (avatarEl) avatarEl.textContent = d.username.charAt(0).toUpperCase();
                            // 结束前面打开的代码块、函数调用或对象结构。
                            }
                            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var rnEl = document.querySelector('[data-bind="real-name"]');
                            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (rnEl) rnEl.textContent = d.real_name || '';
                            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                            var cnEl = document.querySelector('[data-bind="class-name"]');
                            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (cnEl) cnEl.textContent = d.class_name || '';
                        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                        } else {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message || '更新失败', 'error');
                        // 结束前面打开的代码块、函数调用或对象结构。
                        }
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    })
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); });
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }


    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 发送验证码 ======
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var sendCodeBtn   = document.getElementById('send-code-btn');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var profileConfig = window.__PROFILE_CONFIG__ || {};
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (sendCodeBtn) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        sendCodeBtn.addEventListener('click', function () {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            sendCodeBtn.disabled = true;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var orig = sendCodeBtn.textContent;
            // 写入页面内容，让界面展示最新数据或提示文案。
            sendCodeBtn.textContent = '发送中…';

            // 发起 HTTP 请求，与后端接口交换最新业务数据。
            fetch('/send-verification-code', {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                method: 'POST',
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                headers: {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'Content-Type': 'application/json',
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-Requested-With': 'XMLHttpRequest',
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    'X-CSRF-Token': profileConfig.authCsrfToken || ''
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                },
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                body: JSON.stringify({ email: profileConfig.userEmail || '' })
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            })
                // 处理异步流程，等待接口、动画或浏览器任务完成。
                .then(function (r) { return r.json(); })
                // 处理异步流程，等待接口、动画或浏览器任务完成。
                .then(function (data) {
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        toast(data.message || '验证码已发送', 'success');
                        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                        var cd = 60;
                        // 写入页面内容，让界面展示最新数据或提示文案。
                        sendCodeBtn.textContent = cd + 's';
                        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                        var t = setInterval(function () {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            cd--;
                            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                            if (cd <= 0) {
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                clearInterval(t);
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                sendCodeBtn.disabled = false;
                                // 写入页面内容，让界面展示最新数据或提示文案。
                                sendCodeBtn.textContent = orig;
                            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                            } else {
                                // 写入页面内容，让界面展示最新数据或提示文案。
                                sendCodeBtn.textContent = cd + 's';
                            // 结束前面打开的代码块、函数调用或对象结构。
                            }
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        }, 1000);
                    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        toast(data.message || '发送失败', 'error');
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        sendCodeBtn.disabled = false;
                        // 写入页面内容，让界面展示最新数据或提示文案。
                        sendCodeBtn.textContent = orig;
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                })
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                .catch(function () {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    toast('网络错误', 'error');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    sendCodeBtn.disabled = false;
                    // 写入页面内容，让界面展示最新数据或提示文案。
                    sendCodeBtn.textContent = orig;
                // 结束前面打开的代码块、函数调用或对象结构。
                });
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }


    // 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
    // ====== 修改密码 ======
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var passwordForm = document.getElementById('password-form');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var passwordBtn  = document.getElementById('password-save-btn');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (passwordForm) {
        // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
        passwordForm.addEventListener('submit', function (e) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            e.preventDefault();
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var oldPw     = document.getElementById('old-password').value;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var newPw     = document.getElementById('new-password').value;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var confirmPw = document.getElementById('confirm-password').value;
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            var verCode   = document.getElementById('verification-code').value.trim();

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!oldPw || !newPw || !confirmPw) { toast('请填写所有密码字段', 'warning'); return; }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (newPw.length < 6) { toast('新密码至少 6 位字符', 'warning'); return; }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (newPw !== confirmPw) { toast('两次输入的新密码不一致', 'warning'); return; }
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (!verCode) { toast('请输入邮箱验证码', 'warning'); return; }

            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (typeof showConfirm === 'function' && passwordForm.dataset.confirmed !== '1') {
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showConfirm('更新密码', '确认提交新的登录密码吗？完成后请使用新密码登录。', function () {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    passwordForm.dataset.confirmed = '1';
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    passwordForm.requestSubmit();
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                }, 'warning', { confirmText: '确认更新', cancelText: '再检查一下' });
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                return;
            // 结束前面打开的代码块、函数调用或对象结构。
            }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            delete passwordForm.dataset.confirmed;

            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            withLoadingBtn(passwordBtn, '更新中…', function () {
                // 返回当前函数的处理结果，或提前结束前端执行流程。
                return postJson('/profile/password', {
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    old_password: oldPw,
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    new_password: newPw,
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    confirm_password: confirmPw,
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    verification_code: verCode
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                })
                    // 处理异步流程，等待接口、动画或浏览器任务完成。
                    .then(function (res) {
                        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                        if (res.data.success) {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message, 'success');
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            passwordForm.reset();
                        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                        } else {
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            toast(res.data.message || '修改失败', 'error');
                        // 结束前面打开的代码块、函数调用或对象结构。
                        }
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    })
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); });
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    window.addEventListener('library:borrow-status-changed', function () {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.hidden) return;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (document.activeElement && document.activeElement.closest && document.activeElement.closest('form')) return;
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (cropModal && !cropModal.classList.contains('hidden')) return;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        location.reload();
    // 结束前面打开的代码块、函数调用或对象结构。
    });
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
