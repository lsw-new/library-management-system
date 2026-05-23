document.addEventListener('click', (e) => {
    const btn = e.target.closest('.kick-btn');
    if (!btn) return;

    const userId = btn.dataset.userId;
    const username = btn.dataset.username || '该用户';

    showConfirm(
        '强制下线',
        `确定要将 ${username} 强制下线吗？该用户的当前会话将立即失效。`,
        async () => {
            await performKickUser(btn, userId);
        },
        'danger'
    );
});

async function performKickUser(btn, userId) {
    let success = false;
    await withLoadingBtn(btn, '处理中…', async () => {
        try {
            const { data } = await postJson(`/admin/kick_user/${userId}`);
            if (data.success) {
                showToast(data.message, 'success');
                success = true;
            } else {
                showToast(data.message || '操作失败', 'error');
            }
        } catch (err) {
            showToast('网络错误，请稍后重试', 'error');
        }
    });
    if (success) {
        const card = btn.closest('article');
        if (card) {
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => card.remove(), 420);
        }
    }
}

function openBanModal(userId, username) {
    if (document.querySelector('.ban-modal-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'ban-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    overlay.style.background = 'linear-gradient(135deg, rgba(225,29,72,0.25), rgba(236,72,153,0.18))';
    overlay.innerHTML = `
        <div class="bg-white w-full max-w-md rounded-[2.5rem] p-7 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300" role="dialog" aria-modal="true" aria-labelledby="banModalTitle">
            <div class="flex flex-col items-center text-center">
                <div class="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-rose-50 text-rose-600">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                </div>
                <h3 id="banModalTitle" class="mb-2 text-2xl font-heading font-bold text-brand-deep">封禁账号</h3>
                <p class="mb-6 text-sm font-medium text-brand-deep/55">即将封禁用户 <span class="font-bold text-rose-600">${escapeHtml(username)}</span>，封禁期间该账号无法登录。</p>

                <div class="w-full mb-4">
                    <p class="text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left">快捷选择</p>
                    <div class="grid grid-cols-3 gap-2">
                        ${[5, 30, 60, 180, 720, 1440].map(m => `
                            <button type="button" data-mins="${m}" class="ban-quick min-h-[44px] px-3 py-2 text-xs font-bold rounded-xl border border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-colors">
                                ${m < 60 ? m + ' 分钟' : (m % 1440 === 0 ? (m/1440) + ' 天' : (m/60) + ' 小时')}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <div class="w-full mb-6">
                    <label for="ban-minutes-input" class="block text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left">自定义时长（分钟）</label>
                    <input type="number" min="1" max="525600" id="ban-minutes-input" placeholder="例如：60"
                           class="w-full px-4 py-3 bg-white border border-pink-100 hover:border-rose-300 focus:border-rose-500 rounded-2xl text-sm font-medium transition-all outline-none shadow-sm focus:shadow-[0_0_0_3px_rgba(244,63,94,0.12)]">
                </div>

                <div class="flex w-full gap-3">
                    <button class="ban-cancel flex-1 rounded-2xl py-3.5 text-sm font-bold text-brand-deep/55 border border-pink-100 hover:bg-white/50 transition-colors">取消</button>
                    <button class="ban-confirm flex-1 rounded-2xl py-3.5 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 transition-colors">确认封禁</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('#ban-minutes-input');
    const onBanKeydown = e => {
        if (e.key === 'Escape') {
            closeBanModal();
            return;
        }
        trapModalFocus(e, overlay);
    };
    const closeBanModal = () => {
        closeModal(overlay);
        overlay.remove();
        document.removeEventListener('keydown', onBanKeydown);
    };

    openModal(overlay);
    document.addEventListener('keydown', onBanKeydown);

    overlay.querySelectorAll('.ban-quick').forEach(b => {
        b.addEventListener('click', () => {
            input.value = b.dataset.mins;
            overlay.querySelectorAll('.ban-quick').forEach(x => x.classList.remove('bg-rose-600', 'text-white', 'border-rose-600'));
            b.classList.add('bg-rose-600', 'text-white', 'border-rose-600');
        });
    });

    overlay.querySelector('.ban-cancel').addEventListener('click', closeBanModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeBanModal(); });

    overlay.querySelector('.ban-confirm').addEventListener('click', () => {
        const minutes = parseInt(input.value, 10);
        if (!minutes || minutes <= 0) {
            showToast('请输入大于 0 的封禁时长', 'warning');
            input.focus();
            return;
        }
        const confirmBtn = overlay.querySelector('.ban-confirm');
        const fd = new FormData();
        fd.append('minutes', String(minutes));
        withLoadingBtn(confirmBtn, '处理中…', async () => {
            try {
                const { data } = await postJson(`/admin/ban_user/${userId}`, fd);
                if (data.success) {
                    showToast(data.message, 'success');
                    closeBanModal();
                    setTimeout(() => window.location.reload(), 600);
                } else {
                    showToast(data.message || '封禁失败', 'error');
                }
            } catch (err) {
                showToast('网络错误，请稍后重试', 'error');
            }
        });
    });

    input.focus();
}

document.addEventListener('click', (e) => {
    const banBtn = e.target.closest('.ban-btn');
    if (banBtn) {
        openBanModal(banBtn.dataset.userId, banBtn.dataset.username || '该用户');
        return;
    }

    const unbanBtn = e.target.closest('.unban-btn');
    if (unbanBtn) {
        const userId = unbanBtn.dataset.userId;
        const username = unbanBtn.dataset.username || '该用户';
        showConfirm(
            '解除封禁',
            `确定要解除 ${username} 的封禁吗？解除后该账号可立即登录。`,
            () => withLoadingBtn(unbanBtn, '处理中…', async () => {
                try {
                    const { data } = await postJson(`/admin/unban_user/${userId}`);
                    if (data.success) {
                        showToast(data.message, 'success');
                        setTimeout(() => window.location.reload(), 600);
                    } else {
                        showToast(data.message || '操作失败', 'error');
                    }
                } catch (err) {
                    showToast('网络错误，请稍后重试', 'error');
                }
            }),
            'info'
        );
        return;
    }

    const changeEmailBtn = e.target.closest('.change-email-btn');
    if (changeEmailBtn) {
        openChangeEmailModal(
            changeEmailBtn.dataset.userId,
            changeEmailBtn.dataset.username || '该用户',
            changeEmailBtn.dataset.email || ''
        );
        return;
    }

    const resetPwdBtn = e.target.closest('.reset-pwd-btn');
    if (resetPwdBtn) {
        const userId = resetPwdBtn.dataset.userId;
        const username = resetPwdBtn.dataset.username || '该用户';
        showConfirm(
            '初始化密码',
            `确定要将 ${username} 的密码重置为学号吗？此操作不可撤销。`,
            () => withLoadingBtn(resetPwdBtn, '处理中…', async () => {
                try {
                    const { data } = await postJson(`/admin/reset_password/${userId}`);
                    if (data.success) {
                        showToast(data.message, 'success');
                    } else {
                        showToast(data.message || '操作失败', 'error');
                    }
                } catch (err) {
                    showToast('网络错误，请稍后重试', 'error');
                }
            }),
            'warning'
        );
    }
});

function openChangeEmailModal(userId, username, currentEmail) {
    if (document.querySelector('.email-modal-overlay')) return;
    const overlay = document.createElement('div');
    overlay.className = 'email-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    overlay.style.background = 'linear-gradient(135deg, rgba(37,99,235,0.22), rgba(99,102,241,0.18))';
    overlay.innerHTML = `
        <div class="bg-white w-full max-w-md rounded-[2.5rem] p-7 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300" role="dialog" aria-modal="true" aria-labelledby="emailModalTitle">
            <div class="flex flex-col items-center text-center">
                <div class="mb-5 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-blue-50 text-blue-600">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <h3 id="emailModalTitle" class="mb-2 text-2xl font-heading font-bold text-brand-deep">修改邮箱</h3>
                <p class="mb-6 text-sm font-medium text-brand-deep/55">修改用户 <span class="font-bold text-blue-600">${escapeHtml(username)}</span> 的绑定邮箱</p>

                <div class="w-full mb-3">
                    <label class="block text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left">当前邮箱</label>
                    <p class="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl text-sm font-mono text-brand-deep/50 text-left truncate">${escapeHtml(currentEmail)}</p>
                </div>

                <div class="w-full mb-6">
                    <label for="new-email-input" class="block text-[10px] font-bold text-brand-deep/45 uppercase tracking-widest mb-2 text-left">新邮箱</label>
                    <input type="email" id="new-email-input" placeholder="请输入新邮箱地址"
                           class="w-full px-4 py-3 bg-white border border-pink-100 hover:border-blue-300 focus:border-blue-500 rounded-2xl text-sm font-medium transition-all outline-none shadow-sm focus:shadow-[0_0_0_3px_rgba(59,130,246,0.12)]">
                </div>

                <div class="flex w-full gap-3">
                    <button class="email-cancel flex-1 rounded-2xl py-3.5 text-sm font-bold text-brand-deep/55 border border-pink-100 hover:bg-white/50 transition-colors">取消</button>
                    <button class="email-confirm flex-1 rounded-2xl py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors">确认修改</button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector('#new-email-input');
    const onKeydown = e => {
        if (e.key === 'Escape') {
            closeEmailModal();
            return;
        }
        if (e.key === 'Enter' && document.activeElement === input) {
            overlay.querySelector('.email-confirm').click();
            return;
        }
        trapModalFocus(e, overlay);
    };
    const closeEmailModal = () => {
        closeModal(overlay);
        overlay.remove();
        document.removeEventListener('keydown', onKeydown);
    };

    openModal(overlay);
    document.addEventListener('keydown', onKeydown);

    overlay.querySelector('.email-cancel').addEventListener('click', closeEmailModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeEmailModal(); });

    overlay.querySelector('.email-confirm').addEventListener('click', () => {
        const newEmail = input.value.trim();
        if (!newEmail) {
            showToast('请输入新邮箱地址', 'warning');
            input.focus();
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            showToast('邮箱格式不正确', 'warning');
            input.focus();
            return;
        }
        if (newEmail === currentEmail) {
            showToast('新邮箱与当前邮箱相同', 'warning');
            input.focus();
            return;
        }
        const confirmBtn = overlay.querySelector('.email-confirm');
        const fd = new FormData();
        fd.append('email', newEmail);
        withLoadingBtn(confirmBtn, '提交中…', async () => {
            try {
                const { data } = await postJson(`/admin/change_email/${userId}`, fd);
                if (data.success) {
                    showToast(data.message, 'success');
                    closeEmailModal();
                    setTimeout(() => window.location.reload(), 600);
                } else {
                    showToast(data.message || '修改失败', 'error');
                }
            } catch (err) {
                showToast('网络错误，请稍后重试', 'error');
            }
        });
    });

    input.focus();
}
