(function () {
    var toast = function (msg, type) { return window.showToast ? window.showToast(msg, type) : alert(msg); };


    // ====== 标签页切换 ======
    document.querySelectorAll('.pf-tab').forEach(function (tab) {
        tab.addEventListener('click', function () {
            var target = tab.dataset.tab;
            document.querySelectorAll('.pf-tab').forEach(function (t) {
                t.classList.remove('is-active', 'tone-purple');
            });
            tab.classList.add('is-active');
            if (target === 'security') tab.classList.add('tone-purple');
            document.getElementById('panel-profile').style.display  = target === 'profile'  ? '' : 'none';
            document.getElementById('panel-security').style.display = target === 'security' ? '' : 'none';
        });
    });


    // ====== 头像裁剪上传 ======
    var avatarInput   = document.getElementById('avatar-input');
    var avatarWrapper = document.getElementById('avatar-wrapper');
    var cropModal     = document.getElementById('crop-modal');
    var cropViewport  = document.getElementById('crop-viewport');
    var cropCanvas    = document.getElementById('crop-canvas');
    var cropRing      = cropViewport ? cropViewport.querySelector('.crop-ring') : null;
    var cropZoom      = document.getElementById('crop-zoom');
    var cropCancel    = document.getElementById('crop-cancel');
    var cropConfirm   = document.getElementById('crop-confirm');

    if (avatarInput && cropModal && cropRing) {
        var ctx    = cropCanvas.getContext('2d');
        var srcImg = new Image();
        var state  = { imgX: 0, imgY: 0, scale: 1, ringX: 0, ringY: 0, ringR: 0, dragging: false, sx: 0, sy: 0, startRX: 0, startRY: 0 };
        var vpSize = 0;
        var CROP_OUT = 400;

        function ringRadius(v) {
            var dw = srcImg.naturalWidth * state.scale;
            var dh = srcImg.naturalHeight * state.scale;
            return Math.min(dw, dh) * (0.15 + (v - 100) / 200 * 0.35);
        }

        function positionRing() {
            var d = state.ringR * 2;
            cropRing.style.width  = d + 'px';
            cropRing.style.height = d + 'px';
            cropRing.style.left   = (state.ringX - state.ringR) + 'px';
            cropRing.style.top    = (state.ringY - state.ringR) + 'px';
        }

        function clampRing() {
            var l = state.imgX;
            var t = state.imgY;
            var r = l + srcImg.naturalWidth  * state.scale;
            var b = t + srcImg.naturalHeight * state.scale;
            state.ringX = Math.max(l + state.ringR, Math.min(r - state.ringR, state.ringX));
            state.ringY = Math.max(t + state.ringR, Math.min(b - state.ringR, state.ringY));
        }

        function draw() {
            ctx.clearRect(0, 0, vpSize, vpSize);
            ctx.drawImage(srcImg, state.imgX, state.imgY, srcImg.naturalWidth * state.scale, srcImg.naturalHeight * state.scale);
        }

        function openCrop() {
            cropModal.classList.add('is-open');
            cropModal.setAttribute('aria-hidden', 'false');
            vpSize = cropViewport.offsetWidth;
            cropCanvas.width  = vpSize;
            cropCanvas.height = vpSize;
            var sx = vpSize / srcImg.naturalWidth;
            var sy = vpSize / srcImg.naturalHeight;
            state.scale = Math.min(sx, sy);
            state.imgX  = (vpSize - srcImg.naturalWidth  * state.scale) / 2;
            state.imgY  = (vpSize - srcImg.naturalHeight * state.scale) / 2;
            cropZoom.value = 200;
            state.ringR = ringRadius(200);
            state.ringX = vpSize / 2;
            state.ringY = vpSize / 2;
            draw();
            positionRing();
        }

        function closeCrop() {
            cropModal.classList.remove('is-open');
            cropModal.setAttribute('aria-hidden', 'true');
            avatarInput.value = '';
        }

        avatarInput.addEventListener('change', function () {
            var file = avatarInput.files[0];
            if (!file) return;
            if (file.size > 3 * 1024 * 1024) {
                toast('图片大小不能超过 3MB', 'warning');
                avatarInput.value = '';
                return;
            }
            var url = URL.createObjectURL(file);
            srcImg.onload = function () { URL.revokeObjectURL(url); openCrop(); };
            srcImg.src = url;
        });

        cropViewport.addEventListener('mousedown', function (e) {
            e.preventDefault();
            state.dragging = true;
            state.sx = e.clientX;
            state.sy = e.clientY;
            state.startRX = state.ringX;
            state.startRY = state.ringY;
        });

        window.addEventListener('mousemove', function (e) {
            if (!state.dragging) return;
            state.ringX = state.startRX + (e.clientX - state.sx);
            state.ringY = state.startRY + (e.clientY - state.sy);
            clampRing();
            positionRing();
        });

        window.addEventListener('mouseup', function () { state.dragging = false; });

        cropViewport.addEventListener('touchstart', function (e) {
            if (e.touches.length !== 1) return;
            var t = e.touches[0];
            state.dragging = true;
            state.sx = t.clientX;
            state.sy = t.clientY;
            state.startRX = state.ringX;
            state.startRY = state.ringY;
        }, { passive: true });

        cropViewport.addEventListener('touchmove', function (e) {
            if (!state.dragging || e.touches.length !== 1) return;
            e.preventDefault();
            var t = e.touches[0];
            state.ringX = state.startRX + (t.clientX - state.sx);
            state.ringY = state.startRY + (t.clientY - state.sy);
            clampRing();
            positionRing();
        }, { passive: false });

        cropViewport.addEventListener('touchend', function () { state.dragging = false; });

        cropViewport.addEventListener('wheel', function (e) {
            e.preventDefault();
            var v = Math.max(100, Math.min(300, parseFloat(cropZoom.value) + (e.deltaY > 0 ? -8 : 8)));
            cropZoom.value = v;
            state.ringR = ringRadius(v);
            clampRing();
            positionRing();
        }, { passive: false });

        cropZoom.addEventListener('input', function () {
            state.ringR = ringRadius(parseFloat(cropZoom.value));
            clampRing();
            positionRing();
        });

        cropCancel.addEventListener('click', closeCrop);
        cropModal.addEventListener('click', function (e) { if (e.target === cropModal) closeCrop(); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && cropModal.classList.contains('is-open')) closeCrop();
        });

        cropConfirm.addEventListener('click', function () {
            cropConfirm.disabled = true;
            cropConfirm.textContent = '上传中…';

            var out  = document.createElement('canvas');
            out.width  = CROP_OUT;
            out.height = CROP_OUT;
            var octx = out.getContext('2d');
            var srcX = (state.ringX - state.ringR - state.imgX) / state.scale;
            var srcY = (state.ringY - state.ringR - state.imgY) / state.scale;
            var srcD = (state.ringR * 2) / state.scale;
            octx.drawImage(srcImg, srcX, srcY, srcD, srcD, 0, 0, CROP_OUT, CROP_OUT);

            out.toBlob(function (blob) {
                var fd = new FormData();
                fd.append('avatar', blob, 'avatar.jpg');
                fetch('/profile/avatar', { method: 'POST', headers: { 'X-Requested-With': 'XMLHttpRequest', 'X-CSRF-Token': (window.borrowModalConfig || {}).csrfToken || '' }, body: fd })
                    .then(function (r) { return r.json(); })
                    .then(function (data) {
                        if (data.success) {
                            toast(data.message, 'success');
                            var existing = document.getElementById('avatar-img');
                            var letter   = document.getElementById('avatar-letter');
                            if (existing) {
                                existing.src = data.avatar_url + '?t=' + Date.now();
                            } else {
                                if (letter) letter.remove();
                                var img = document.createElement('img');
                                img.className = 'pf-avatar-img';
                                img.id  = 'avatar-img';
                                img.alt = '头像';
                                img.src = data.avatar_url + '?t=' + Date.now();
                                avatarWrapper.insertBefore(img, avatarWrapper.firstChild);
                            }
                            closeCrop();
                        } else {
                            toast(data.message || '上传失败', 'error');
                        }
                    })
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); })
                    .finally(function () {
                        cropConfirm.disabled = false;
                        cropConfirm.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>确认裁剪';
                    });
            }, 'image/jpeg', 0.9);
        });
    }


    // ====== 密码可见切换 ======
    document.querySelectorAll('.pf-toggle-pw').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var input = document.getElementById(btn.dataset.target);
            if (!input) return;
            var show = input.type === 'password';
            input.type = show ? 'text' : 'password';
            btn.querySelector('.eye-open').classList.toggle('hidden', !show);
            btn.querySelector('.eye-closed').classList.toggle('hidden', show);
        });
    });


    // ====== 修改资料 ======
    var profileForm = document.getElementById('profile-form');
    var profileBtn  = document.getElementById('profile-save-btn');
    if (profileForm) {
        profileForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var username  = document.getElementById('profile-username').value.trim();
            var realName  = document.getElementById('profile-realname').value.trim();
            var className = document.getElementById('profile-classname').value.trim();
            if (!username) { toast('请填写用户名', 'warning'); return; }
            if (!realName) { toast('请填写姓名', 'warning'); return; }

            withLoadingBtn(profileBtn, '保存中…', function () {
                return postJson('/profile/update', { username: username, real_name: realName, class_name: className })
                    .then(function (res) {
                        if (res.data.success) {
                            toast(res.data.message, 'success');
                            var d = res.data;
                            if (d.username) {
                                document.querySelectorAll('[data-bind="username"]').forEach(function (el) {
                                    el.textContent = d.username;
                                });
                                var avatarEl = document.querySelector('[data-bind="avatar-letter"]');
                                if (avatarEl) avatarEl.textContent = d.username.charAt(0).toUpperCase();
                            }
                            var rnEl = document.querySelector('[data-bind="real-name"]');
                            if (rnEl) rnEl.textContent = d.real_name || '';
                            var cnEl = document.querySelector('[data-bind="class-name"]');
                            if (cnEl) cnEl.textContent = d.class_name || '';
                        } else {
                            toast(res.data.message || '更新失败', 'error');
                        }
                    })
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); });
            });
        });
    }


    // ====== 发送验证码 ======
    var sendCodeBtn   = document.getElementById('send-code-btn');
    var profileConfig = window.__PROFILE_CONFIG__ || {};
    if (sendCodeBtn) {
        sendCodeBtn.addEventListener('click', function () {
            sendCodeBtn.disabled = true;
            var orig = sendCodeBtn.textContent;
            sendCodeBtn.textContent = '发送中…';

            fetch('/send-verification-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    'X-CSRF-Token': profileConfig.authCsrfToken || ''
                },
                body: JSON.stringify({ email: profileConfig.userEmail || '' })
            })
                .then(function (r) { return r.json(); })
                .then(function (data) {
                    if (data.success) {
                        toast(data.message || '验证码已发送', 'success');
                        var cd = 60;
                        sendCodeBtn.textContent = cd + 's';
                        var t = setInterval(function () {
                            cd--;
                            if (cd <= 0) {
                                clearInterval(t);
                                sendCodeBtn.disabled = false;
                                sendCodeBtn.textContent = orig;
                            } else {
                                sendCodeBtn.textContent = cd + 's';
                            }
                        }, 1000);
                    } else {
                        toast(data.message || '发送失败', 'error');
                        sendCodeBtn.disabled = false;
                        sendCodeBtn.textContent = orig;
                    }
                })
                .catch(function () {
                    toast('网络错误', 'error');
                    sendCodeBtn.disabled = false;
                    sendCodeBtn.textContent = orig;
                });
        });
    }


    // ====== 修改密码 ======
    var passwordForm = document.getElementById('password-form');
    var passwordBtn  = document.getElementById('password-save-btn');
    if (passwordForm) {
        passwordForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var oldPw     = document.getElementById('old-password').value;
            var newPw     = document.getElementById('new-password').value;
            var confirmPw = document.getElementById('confirm-password').value;
            var verCode   = document.getElementById('verification-code').value.trim();

            if (!oldPw || !newPw || !confirmPw) { toast('请填写所有密码字段', 'warning'); return; }
            if (newPw.length < 6) { toast('新密码至少 6 位字符', 'warning'); return; }
            if (newPw !== confirmPw) { toast('两次输入的新密码不一致', 'warning'); return; }
            if (!verCode) { toast('请输入邮箱验证码', 'warning'); return; }

            withLoadingBtn(passwordBtn, '更新中…', function () {
                return postJson('/profile/password', {
                    old_password: oldPw,
                    new_password: newPw,
                    confirm_password: confirmPw,
                    verification_code: verCode
                })
                    .then(function (res) {
                        if (res.data.success) {
                            toast(res.data.message, 'success');
                            passwordForm.reset();
                        } else {
                            toast(res.data.message || '修改失败', 'error');
                        }
                    })
                    .catch(function () { toast('网络错误，请稍后重试', 'error'); });
            });
        });
    }

    window.addEventListener('library:borrow-status-changed', function () {
        if (document.hidden) return;
        if (document.activeElement && document.activeElement.closest && document.activeElement.closest('form')) return;
        if (cropModal && !cropModal.classList.contains('hidden')) return;
        location.reload();
    });
})();
