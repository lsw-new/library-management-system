# static/js/profile.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>(function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 2 | <code>    var toast = function (msg, type) {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 3 | <code>        if (window.showToast) return window.showToast(msg, type);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 4 | <code>        console.warn(msg);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 5 | <code>    };</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 6 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 7 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 8 | <code>    // ====== 标签页切换 ======</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 9 | <code>    document.querySelectorAll(&#x27;.pf-tab&#x27;).forEach(function (tab) {</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 10 | <code>        tab.addEventListener(&#x27;click&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 11 | <code>            var target = tab.dataset.tab;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 12 | <code>            document.querySelectorAll(&#x27;.pf-tab&#x27;).forEach(function (t) {</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 13 | <code>                t.classList.remove(&#x27;is-active&#x27;, &#x27;tone-purple&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 14 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 15 | <code>            tab.classList.add(&#x27;is-active&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 16 | <code>            if (target === &#x27;security&#x27;) tab.classList.add(&#x27;tone-purple&#x27;);</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 17 | <code>            document.getElementById(&#x27;panel-profile&#x27;).style.display  = target === &#x27;profile&#x27;  ? &#x27;&#x27; : &#x27;none&#x27;;</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 18 | <code>            document.getElementById(&#x27;panel-security&#x27;).style.display = target === &#x27;security&#x27; ? &#x27;&#x27; : &#x27;none&#x27;;</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 19 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 20 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 21 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 22 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 23 | <code>    // ====== 头像裁剪上传 ======</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 24 | <code>    var avatarInput   = document.getElementById(&#x27;avatar-input&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 25 | <code>    var avatarWrapper = document.getElementById(&#x27;avatar-wrapper&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 26 | <code>    var cropModal     = document.getElementById(&#x27;crop-modal&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 27 | <code>    var cropViewport  = document.getElementById(&#x27;crop-viewport&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 28 | <code>    var cropCanvas    = document.getElementById(&#x27;crop-canvas&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 29 | <code>    var cropRing      = cropViewport ? cropViewport.querySelector(&#x27;.crop-ring&#x27;) : null;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 30 | <code>    var cropZoom      = document.getElementById(&#x27;crop-zoom&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 31 | <code>    var cropCancel    = document.getElementById(&#x27;crop-cancel&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 32 | <code>    var cropConfirm   = document.getElementById(&#x27;crop-confirm&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 33 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 34 | <code>    if (avatarInput &amp;&amp; cropModal &amp;&amp; cropRing) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 35 | <code>        var ctx    = cropCanvas.getContext(&#x27;2d&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 36 | <code>        var srcImg = new Image();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 37 | <code>        var state  = { imgX: 0, imgY: 0, scale: 1, ringX: 0, ringY: 0, ringR: 0, dragging: false, sx: 0, sy: 0, startRX: 0, startRY: 0 };</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 38 | <code>        var vpSize = 0;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 39 | <code>        var CROP_OUT = 400;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 40 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 41 | <code>        function ringRadius(v) {</code> | 定义 `ringRadius` 函数，封装页面交互或请求处理逻辑。 |
| 42 | <code>            var dw = srcImg.naturalWidth * state.scale;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 43 | <code>            var dh = srcImg.naturalHeight * state.scale;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 44 | <code>            return Math.min(dw, dh) * (0.15 + (v - 100) / 200 * 0.35);</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 45 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 46 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 47 | <code>        function positionRing() {</code> | 定义 `positionRing` 函数，封装页面交互或请求处理逻辑。 |
| 48 | <code>            var d = state.ringR * 2;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 49 | <code>            cropRing.style.width  = d + &#x27;px&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 50 | <code>            cropRing.style.height = d + &#x27;px&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 51 | <code>            cropRing.style.left   = (state.ringX - state.ringR) + &#x27;px&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 52 | <code>            cropRing.style.top    = (state.ringY - state.ringR) + &#x27;px&#x27;;</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 53 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 54 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 55 | <code>        function clampRing() {</code> | 定义 `clampRing` 函数，封装页面交互或请求处理逻辑。 |
| 56 | <code>            var l = state.imgX;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 57 | <code>            var t = state.imgY;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 58 | <code>            var r = l + srcImg.naturalWidth  * state.scale;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 59 | <code>            var b = t + srcImg.naturalHeight * state.scale;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 60 | <code>            state.ringX = Math.max(l + state.ringR, Math.min(r - state.ringR, state.ringX));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 61 | <code>            state.ringY = Math.max(t + state.ringR, Math.min(b - state.ringR, state.ringY));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 62 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 63 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 64 | <code>        function draw() {</code> | 定义 `draw` 函数，封装页面交互或请求处理逻辑。 |
| 65 | <code>            ctx.clearRect(0, 0, vpSize, vpSize);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 66 | <code>            ctx.drawImage(srcImg, state.imgX, state.imgY, srcImg.naturalWidth * state.scale, srcImg.naturalHeight * state.scale);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 67 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 68 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 69 | <code>        function openCrop() {</code> | 定义 `openCrop` 函数，封装页面交互或请求处理逻辑。 |
| 70 | <code>            cropModal.classList.add(&#x27;is-open&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 71 | <code>            cropModal.setAttribute(&#x27;aria-hidden&#x27;, &#x27;false&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 72 | <code>            vpSize = cropViewport.offsetWidth;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 73 | <code>            cropCanvas.width  = vpSize;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 74 | <code>            cropCanvas.height = vpSize;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 75 | <code>            var sx = vpSize / srcImg.naturalWidth;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 76 | <code>            var sy = vpSize / srcImg.naturalHeight;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 77 | <code>            state.scale = Math.min(sx, sy);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 78 | <code>            state.imgX  = (vpSize - srcImg.naturalWidth  * state.scale) / 2;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 79 | <code>            state.imgY  = (vpSize - srcImg.naturalHeight * state.scale) / 2;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 80 | <code>            cropZoom.value = 200;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 81 | <code>            state.ringR = ringRadius(200);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 82 | <code>            state.ringX = vpSize / 2;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 83 | <code>            state.ringY = vpSize / 2;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 84 | <code>            draw();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 85 | <code>            positionRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 86 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 87 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 88 | <code>        function closeCrop() {</code> | 定义 `closeCrop` 函数，封装页面交互或请求处理逻辑。 |
| 89 | <code>            cropModal.classList.remove(&#x27;is-open&#x27;);</code> | 更新元素样式或状态类，驱动页面视觉变化。 |
| 90 | <code>            cropModal.setAttribute(&#x27;aria-hidden&#x27;, &#x27;true&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 91 | <code>            avatarInput.value = &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 92 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 93 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 94 | <code>        avatarInput.addEventListener(&#x27;change&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 95 | <code>            var file = avatarInput.files[0];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 96 | <code>            if (!file) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 97 | <code>            if (file.size &gt; 3 * 1024 * 1024) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 98 | <code>                toast(&#x27;图片大小不能超过 3MB&#x27;, &#x27;warning&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 99 | <code>                avatarInput.value = &#x27;&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 100 | <code>                return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 101 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 102 | <code>            var url = URL.createObjectURL(file);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 103 | <code>            srcImg.onload = function () { URL.revokeObjectURL(url); openCrop(); };</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 104 | <code>            srcImg.src = url;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 105 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 106 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 107 | <code>        cropViewport.addEventListener(&#x27;mousedown&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 108 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 109 | <code>            state.dragging = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 110 | <code>            state.sx = e.clientX;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 111 | <code>            state.sy = e.clientY;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 112 | <code>            state.startRX = state.ringX;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 113 | <code>            state.startRY = state.ringY;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 114 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 115 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 116 | <code>        window.addEventListener(&#x27;mousemove&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 117 | <code>            if (!state.dragging) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 118 | <code>            state.ringX = state.startRX + (e.clientX - state.sx);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 119 | <code>            state.ringY = state.startRY + (e.clientY - state.sy);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 120 | <code>            clampRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 121 | <code>            positionRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 122 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 123 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 124 | <code>        window.addEventListener(&#x27;mouseup&#x27;, function () { state.dragging = false; });</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 125 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 126 | <code>        cropViewport.addEventListener(&#x27;touchstart&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 127 | <code>            if (e.touches.length !== 1) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 128 | <code>            var t = e.touches[0];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 129 | <code>            state.dragging = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 130 | <code>            state.sx = t.clientX;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 131 | <code>            state.sy = t.clientY;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 132 | <code>            state.startRX = state.ringX;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 133 | <code>            state.startRY = state.ringY;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 134 | <code>        }, { passive: true });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 135 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 136 | <code>        cropViewport.addEventListener(&#x27;touchmove&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 137 | <code>            if (!state.dragging || e.touches.length !== 1) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 138 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 139 | <code>            var t = e.touches[0];</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 140 | <code>            state.ringX = state.startRX + (t.clientX - state.sx);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 141 | <code>            state.ringY = state.startRY + (t.clientY - state.sy);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 142 | <code>            clampRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 143 | <code>            positionRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 144 | <code>        }, { passive: false });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 145 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 146 | <code>        cropViewport.addEventListener(&#x27;touchend&#x27;, function () { state.dragging = false; });</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 147 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 148 | <code>        cropViewport.addEventListener(&#x27;wheel&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 149 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 150 | <code>            var v = Math.max(100, Math.min(300, parseFloat(cropZoom.value) + (e.deltaY &gt; 0 ? -8 : 8)));</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 151 | <code>            cropZoom.value = v;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 152 | <code>            state.ringR = ringRadius(v);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 153 | <code>            clampRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 154 | <code>            positionRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 155 | <code>        }, { passive: false });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 156 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 157 | <code>        cropZoom.addEventListener(&#x27;input&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 158 | <code>            state.ringR = ringRadius(parseFloat(cropZoom.value));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 159 | <code>            clampRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 160 | <code>            positionRing();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 161 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 162 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 163 | <code>        cropCancel.addEventListener(&#x27;click&#x27;, closeCrop);</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 164 | <code>        cropModal.addEventListener(&#x27;click&#x27;, function (e) { if (e.target === cropModal) closeCrop(); });</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 165 | <code>        document.addEventListener(&#x27;keydown&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 166 | <code>            if (e.key === &#x27;Escape&#x27; &amp;&amp; cropModal.classList.contains(&#x27;is-open&#x27;)) closeCrop();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 167 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 168 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 169 | <code>        cropConfirm.addEventListener(&#x27;click&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 170 | <code>            cropConfirm.disabled = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 171 | <code>            cropConfirm.textContent = &#x27;上传中…&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 172 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 173 | <code>            var out  = document.createElement(&#x27;canvas&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 174 | <code>            out.width  = CROP_OUT;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 175 | <code>            out.height = CROP_OUT;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 176 | <code>            var octx = out.getContext(&#x27;2d&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 177 | <code>            var srcX = (state.ringX - state.ringR - state.imgX) / state.scale;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 178 | <code>            var srcY = (state.ringY - state.ringR - state.imgY) / state.scale;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 179 | <code>            var srcD = (state.ringR * 2) / state.scale;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 180 | <code>            octx.drawImage(srcImg, srcX, srcY, srcD, srcD, 0, 0, CROP_OUT, CROP_OUT);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 181 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 182 | <code>            out.toBlob(function (blob) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 183 | <code>                var fd = new FormData();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 184 | <code>                fd.append(&#x27;avatar&#x27;, blob, &#x27;avatar.jpg&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 185 | <code>                fetch(&#x27;/profile/avatar&#x27;, { method: &#x27;POST&#x27;, headers: { &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27;, &#x27;X-CSRF-Token&#x27;: (window.borrowModalConfig || {}).csrfToken || &#x27;&#x27; }, body: fd })</code> | 发起 HTTP 请求，与后端接口交换数据。 |
| 186 | <code>                    .then(function (r) { return r.json(); })</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 187 | <code>                    .then(function (data) {</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 188 | <code>                        if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 189 | <code>                            toast(data.message, &#x27;success&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 190 | <code>                            var existing = document.getElementById(&#x27;avatar-img&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 191 | <code>                            var letter   = document.getElementById(&#x27;avatar-letter&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 192 | <code>                            if (existing) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 193 | <code>                                existing.src = data.avatar_url + &#x27;?t=&#x27; + Date.now();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 194 | <code>                            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 195 | <code>                                if (letter) letter.remove();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 196 | <code>                                var img = document.createElement(&#x27;img&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 197 | <code>                                img.className = &#x27;pf-avatar-img&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 198 | <code>                                img.id  = &#x27;avatar-img&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 199 | <code>                                img.alt = &#x27;头像&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 200 | <code>                                img.src = data.avatar_url + &#x27;?t=&#x27; + Date.now();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 201 | <code>                                avatarWrapper.insertBefore(img, avatarWrapper.firstChild);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 202 | <code>                            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 203 | <code>                            closeCrop();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 204 | <code>                        } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 205 | <code>                            toast(data.message || &#x27;上传失败&#x27;, &#x27;error&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 206 | <code>                        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 207 | <code>                    })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 208 | <code>                    .catch(function () { toast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;); })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 209 | <code>                    .finally(function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 210 | <code>                        cropConfirm.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 211 | <code>                        cropConfirm.innerHTML = &#x27;&lt;svg class=&quot;w-4 h-4&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M5 13l4 4L19 7&quot;/&gt;&lt;/svg&gt;确认裁剪&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 212 | <code>                    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 213 | <code>            }, &#x27;image/jpeg&#x27;, 0.9);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 214 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 215 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 216 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 217 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 218 | <code>    // ====== 密码可见切换 ======</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 219 | <code>    document.querySelectorAll(&#x27;.pf-toggle-pw&#x27;).forEach(function (btn) {</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 220 | <code>        btn.addEventListener(&#x27;click&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 221 | <code>            var input = document.getElementById(btn.dataset.target);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 222 | <code>            if (!input) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 223 | <code>            var show = input.type === &#x27;password&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 224 | <code>            input.type = show ? &#x27;text&#x27; : &#x27;password&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 225 | <code>            btn.querySelector(&#x27;.eye-open&#x27;).classList.toggle(&#x27;hidden&#x27;, !show);</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 226 | <code>            btn.querySelector(&#x27;.eye-closed&#x27;).classList.toggle(&#x27;hidden&#x27;, show);</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 227 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 228 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 229 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 230 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 231 | <code>    // ====== 修改资料 ======</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 232 | <code>    var profileForm = document.getElementById(&#x27;profile-form&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 233 | <code>    var profileBtn  = document.getElementById(&#x27;profile-save-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 234 | <code>    if (profileForm) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 235 | <code>        profileForm.addEventListener(&#x27;submit&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 236 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 237 | <code>            var username  = document.getElementById(&#x27;profile-username&#x27;).value.trim();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 238 | <code>            var realName  = document.getElementById(&#x27;profile-realname&#x27;).value.trim();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 239 | <code>            var className = document.getElementById(&#x27;profile-classname&#x27;).value.trim();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 240 | <code>            if (!username) { toast(&#x27;请填写用户名&#x27;, &#x27;warning&#x27;); return; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 241 | <code>            if (!realName) { toast(&#x27;请填写姓名&#x27;, &#x27;warning&#x27;); return; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 242 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 243 | <code>            withLoadingBtn(profileBtn, &#x27;保存中…&#x27;, function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 244 | <code>                return postJson(&#x27;/profile/update&#x27;, { username: username, real_name: realName, class_name: className })</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 245 | <code>                    .then(function (res) {</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 246 | <code>                        if (res.data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 247 | <code>                            toast(res.data.message, &#x27;success&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 248 | <code>                            var d = res.data;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 249 | <code>                            if (d.username) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 250 | <code>                                document.querySelectorAll(&#x27;[data-bind=&quot;username&quot;]&#x27;).forEach(function (el) {</code> | 查找页面 DOM 元素，为后续读取或更新界面做准备。 |
| 251 | <code>                                    el.textContent = d.username;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 252 | <code>                                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 253 | <code>                                var avatarEl = document.querySelector(&#x27;[data-bind=&quot;avatar-letter&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 254 | <code>                                if (avatarEl) avatarEl.textContent = d.username.charAt(0).toUpperCase();</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 255 | <code>                            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 256 | <code>                            var rnEl = document.querySelector(&#x27;[data-bind=&quot;real-name&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 257 | <code>                            if (rnEl) rnEl.textContent = d.real_name || &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 258 | <code>                            var cnEl = document.querySelector(&#x27;[data-bind=&quot;class-name&quot;]&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 259 | <code>                            if (cnEl) cnEl.textContent = d.class_name || &#x27;&#x27;;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 260 | <code>                        } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 261 | <code>                            toast(res.data.message || &#x27;更新失败&#x27;, &#x27;error&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 262 | <code>                        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 263 | <code>                    })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 264 | <code>                    .catch(function () { toast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;); });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 265 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 266 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 267 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 268 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 269 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 270 | <code>    // ====== 发送验证码 ======</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 271 | <code>    var sendCodeBtn   = document.getElementById(&#x27;send-code-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 272 | <code>    var profileConfig = window.__PROFILE_CONFIG__ || {};</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 273 | <code>    if (sendCodeBtn) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 274 | <code>        sendCodeBtn.addEventListener(&#x27;click&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 275 | <code>            sendCodeBtn.disabled = true;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 276 | <code>            var orig = sendCodeBtn.textContent;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 277 | <code>            sendCodeBtn.textContent = &#x27;发送中…&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 278 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 279 | <code>            fetch(&#x27;/send-verification-code&#x27;, {</code> | 发起 HTTP 请求，与后端接口交换数据。 |
| 280 | <code>                method: &#x27;POST&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 281 | <code>                headers: {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 282 | <code>                    &#x27;Content-Type&#x27;: &#x27;application/json&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 283 | <code>                    &#x27;X-Requested-With&#x27;: &#x27;XMLHttpRequest&#x27;,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 284 | <code>                    &#x27;X-CSRF-Token&#x27;: profileConfig.authCsrfToken || &#x27;&#x27;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 285 | <code>                },</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 286 | <code>                body: JSON.stringify({ email: profileConfig.userEmail || &#x27;&#x27; })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 287 | <code>            })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 288 | <code>                .then(function (r) { return r.json(); })</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 289 | <code>                .then(function (data) {</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 290 | <code>                    if (data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 291 | <code>                        toast(data.message || &#x27;验证码已发送&#x27;, &#x27;success&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 292 | <code>                        var cd = 60;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 293 | <code>                        sendCodeBtn.textContent = cd + &#x27;s&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 294 | <code>                        var t = setInterval(function () {</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 295 | <code>                            cd--;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 296 | <code>                            if (cd &lt;= 0) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 297 | <code>                                clearInterval(t);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 298 | <code>                                sendCodeBtn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 299 | <code>                                sendCodeBtn.textContent = orig;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 300 | <code>                            } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 301 | <code>                                sendCodeBtn.textContent = cd + &#x27;s&#x27;;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 302 | <code>                            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 303 | <code>                        }, 1000);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 304 | <code>                    } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 305 | <code>                        toast(data.message || &#x27;发送失败&#x27;, &#x27;error&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 306 | <code>                        sendCodeBtn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 307 | <code>                        sendCodeBtn.textContent = orig;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 308 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 309 | <code>                })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 310 | <code>                .catch(function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 311 | <code>                    toast(&#x27;网络错误&#x27;, &#x27;error&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 312 | <code>                    sendCodeBtn.disabled = false;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 313 | <code>                    sendCodeBtn.textContent = orig;</code> | 写入页面内容，让界面展示最新状态或提示。 |
| 314 | <code>                });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 315 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 316 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 317 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 318 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 319 | <code>    // ====== 修改密码 ======</code> | 已有 JavaScript 注释，说明附近交互逻辑或实现原因。 |
| 320 | <code>    var passwordForm = document.getElementById(&#x27;password-form&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 321 | <code>    var passwordBtn  = document.getElementById(&#x27;password-save-btn&#x27;);</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 322 | <code>    if (passwordForm) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 323 | <code>        passwordForm.addEventListener(&#x27;submit&#x27;, function (e) {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 324 | <code>            e.preventDefault();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 325 | <code>            var oldPw     = document.getElementById(&#x27;old-password&#x27;).value;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 326 | <code>            var newPw     = document.getElementById(&#x27;new-password&#x27;).value;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 327 | <code>            var confirmPw = document.getElementById(&#x27;confirm-password&#x27;).value;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 328 | <code>            var verCode   = document.getElementById(&#x27;verification-code&#x27;).value.trim();</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 329 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 330 | <code>            if (!oldPw || !newPw || !confirmPw) { toast(&#x27;请填写所有密码字段&#x27;, &#x27;warning&#x27;); return; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 331 | <code>            if (newPw.length &lt; 6) { toast(&#x27;新密码至少 6 位字符&#x27;, &#x27;warning&#x27;); return; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 332 | <code>            if (newPw !== confirmPw) { toast(&#x27;两次输入的新密码不一致&#x27;, &#x27;warning&#x27;); return; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 333 | <code>            if (!verCode) { toast(&#x27;请输入邮箱验证码&#x27;, &#x27;warning&#x27;); return; }</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 334 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 335 | <code>            if (typeof showConfirm === &#x27;function&#x27; &amp;&amp; passwordForm.dataset.confirmed !== &#x27;1&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 336 | <code>                showConfirm(&#x27;更新密码&#x27;, &#x27;确认提交新的登录密码吗？完成后请使用新密码登录。&#x27;, function () {</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 337 | <code>                    passwordForm.dataset.confirmed = &#x27;1&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 338 | <code>                    passwordForm.requestSubmit();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 339 | <code>                }, &#x27;warning&#x27;, { confirmText: &#x27;确认更新&#x27;, cancelText: &#x27;再检查一下&#x27; });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 340 | <code>                return;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 341 | <code>            }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 342 | <code>            delete passwordForm.dataset.confirmed;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 343 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 344 | <code>            withLoadingBtn(passwordBtn, &#x27;更新中…&#x27;, function () {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 345 | <code>                return postJson(&#x27;/profile/password&#x27;, {</code> | 返回函数结果，或提前结束当前前端处理流程。 |
| 346 | <code>                    old_password: oldPw,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 347 | <code>                    new_password: newPw,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 348 | <code>                    confirm_password: confirmPw,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 349 | <code>                    verification_code: verCode</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 350 | <code>                })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 351 | <code>                    .then(function (res) {</code> | 处理异步流程，等待接口、动画或浏览器操作完成。 |
| 352 | <code>                        if (res.data.success) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 353 | <code>                            toast(res.data.message, &#x27;success&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 354 | <code>                            passwordForm.reset();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 355 | <code>                        } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 356 | <code>                            toast(res.data.message || &#x27;修改失败&#x27;, &#x27;error&#x27;);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 357 | <code>                        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 358 | <code>                    })</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 359 | <code>                    .catch(function () { toast(&#x27;网络错误，请稍后重试&#x27;, &#x27;error&#x27;); });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 360 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 361 | <code>        });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 362 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 363 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 364 | <code>    window.addEventListener(&#x27;library:borrow-status-changed&#x27;, function () {</code> | 绑定浏览器事件监听，使用户操作能够触发对应逻辑。 |
| 365 | <code>        if (document.hidden) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 366 | <code>        if (document.activeElement &amp;&amp; document.activeElement.closest &amp;&amp; document.activeElement.closest(&#x27;form&#x27;)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 367 | <code>        if (cropModal &amp;&amp; !cropModal.classList.contains(&#x27;hidden&#x27;)) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 368 | <code>        location.reload();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 369 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 370 | <code>})();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
