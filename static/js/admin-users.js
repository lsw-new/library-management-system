// 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('click', (e) => {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = e.target.closest('.kick-btn');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn) return;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const userId = btn.dataset.userId;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const username = btn.dataset.username || '该用户';

    // 调用统一提示或弹窗能力，向用户反馈操作结果。
    showConfirm(
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        '强制下线',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        `确定要将 ${username} 强制下线吗？该用户的当前会话将立即失效。`,
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        async () => {
            // 处理异步流程，等待接口、动画或浏览器任务完成。
            await performKickUser(btn, userId);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        },
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        'danger'
    // 结束前面打开的代码块、函数调用或对象结构。
    );
// 结束前面打开的代码块、函数调用或对象结构。
});

// 定义 `performKickUser` 函数，封装页面交互、请求或状态更新逻辑。
async function performKickUser(btn, userId) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let success = false;
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    await withLoadingBtn(btn, '处理中…', async () => {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const { data } = await postJson(`/admin/kick_user/${userId}`);
            // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message, 'success');
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                success = true;
            // 条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message || '操作失败', 'error');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (err) {
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('网络错误，请稍后重试', 'error');
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (success) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const card = btn.closest('article');
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (card) {
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.opacity = '0';
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.transform = 'scale(0.95)';
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            setTimeout(() => card.remove(), 420);
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `openBanModal` 函数，封装页面交互、请求或状态更新逻辑。
function openBanModal(userId, username) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.querySelector('.ban-modal-overlay')) return;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const overlay = document.createElement('div');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    overlay.className = 'ban-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    overlay.style.background = 'linear-gradient(135deg, rgba(225,29,72,0.25), rgba(236,72,153,0.18))';
    // 写入页面内容，让界面展示最新数据或提示文案。
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
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            <button type="button" data-mins="${m}" class="ban-quick min-h-[44px] px-3 py-2 text-xs font-bold rounded-xl border border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-colors">
                                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                ${m < 60 ? m + ' 分钟' : (m % 1440 === 0 ? (m/1440) + ' 天' : (m/60) + ' 小时')}
                            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            </button>
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
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
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    document.body.appendChild(overlay);

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const input = overlay.querySelector('#ban-minutes-input');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const onBanKeydown = e => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (e.key === 'Escape') {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            closeBanModal();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        trapModalFocus(e, overlay);
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const closeBanModal = () => {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        closeModal(overlay);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        overlay.remove();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        document.removeEventListener('keydown', onBanKeydown);
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    openModal(overlay);
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('keydown', onBanKeydown);

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.querySelectorAll('.ban-quick').forEach(b => {
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        b.addEventListener('click', () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.value = b.dataset.mins;
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            overlay.querySelectorAll('.ban-quick').forEach(x => x.classList.remove('bg-rose-600', 'text-white', 'border-rose-600'));
            // 更新元素样式或状态类，驱动页面视觉状态变化。
            b.classList.add('bg-rose-600', 'text-white', 'border-rose-600');
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    overlay.querySelector('.ban-cancel').addEventListener('click', closeBanModal);
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.addEventListener('click', e => { if (e.target === overlay) closeBanModal(); });

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.querySelector('.ban-confirm').addEventListener('click', () => {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const minutes = parseInt(input.value, 10);
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!minutes || minutes <= 0) {
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入大于 0 的封禁时长', 'warning');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const confirmBtn = overlay.querySelector('.ban-confirm');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const fd = new FormData();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        fd.append('minutes', String(minutes));
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        withLoadingBtn(confirmBtn, '处理中…', async () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            try {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const { data } = await postJson(`/admin/ban_user/${userId}`, fd);
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    closeBanModal();
                    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                    setTimeout(() => window.location.reload(), 600);
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message || '封禁失败', 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            } catch (err) {
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast('网络错误，请稍后重试', 'error');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    input.focus();
// 结束前面打开的代码块、函数调用或对象结构。
}

// 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('click', (e) => {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const banBtn = e.target.closest('.ban-btn');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (banBtn) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        openBanModal(banBtn.dataset.userId, banBtn.dataset.username || '该用户');
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const unbanBtn = e.target.closest('.unban-btn');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (unbanBtn) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const userId = unbanBtn.dataset.userId;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const username = unbanBtn.dataset.username || '该用户';
        // 调用统一提示或弹窗能力，向用户反馈操作结果。
        showConfirm(
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            '解除封禁',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            `确定要解除 ${username} 的封禁吗？解除后该账号可立即登录。`,
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            () => withLoadingBtn(unbanBtn, '处理中…', async () => {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                try {
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const { data } = await postJson(`/admin/unban_user/${userId}`);
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'success');
                        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                        setTimeout(() => window.location.reload(), 600);
                    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message || '操作失败', 'error');
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                } catch (err) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast('网络错误，请稍后重试', 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            }),
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            'info'
        // 结束前面打开的代码块、函数调用或对象结构。
        );
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const changeEmailBtn = e.target.closest('.change-email-btn');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (changeEmailBtn) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        openChangeEmailModal(
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            changeEmailBtn.dataset.userId,
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            changeEmailBtn.dataset.username || '该用户',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            changeEmailBtn.dataset.email || ''
        // 结束前面打开的代码块、函数调用或对象结构。
        );
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const resetPwdBtn = e.target.closest('.reset-pwd-btn');
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (resetPwdBtn) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const userId = resetPwdBtn.dataset.userId;
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const username = resetPwdBtn.dataset.username || '该用户';
        // 调用统一提示或弹窗能力，向用户反馈操作结果。
        showConfirm(
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            '初始化密码',
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            `确定要将 ${username} 的密码重置为学号吗？此操作不可撤销。`,
            // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            () => withLoadingBtn(resetPwdBtn, '处理中…', async () => {
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                try {
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const { data } = await postJson(`/admin/reset_password/${userId}`);
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'success');
                    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message || '操作失败', 'error');
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                } catch (err) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast('网络错误，请稍后重试', 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            }),
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            'warning'
        // 结束前面打开的代码块、函数调用或对象结构。
        );
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
});

// 定义 `openChangeEmailModal` 函数，封装页面交互、请求或状态更新逻辑。
function openChangeEmailModal(userId, username, currentEmail) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.querySelector('.email-modal-overlay')) return;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const overlay = document.createElement('div');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    overlay.className = 'email-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    overlay.style.background = 'linear-gradient(135deg, rgba(37,99,235,0.22), rgba(99,102,241,0.18))';
    // 写入页面内容，让界面展示最新数据或提示文案。
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
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    document.body.appendChild(overlay);

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const input = overlay.querySelector('#new-email-input');
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const onKeydown = e => {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (e.key === 'Escape') {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            closeEmailModal();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (e.key === 'Enter' && document.activeElement === input) {
            // 查找页面 DOM 元素，为读取状态或更新界面做准备。
            overlay.querySelector('.email-confirm').click();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        trapModalFocus(e, overlay);
    // 结束前面打开的代码块、函数调用或对象结构。
    };
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const closeEmailModal = () => {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        closeModal(overlay);
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        overlay.remove();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        document.removeEventListener('keydown', onKeydown);
    // 结束前面打开的代码块、函数调用或对象结构。
    };

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    openModal(overlay);
    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('keydown', onKeydown);

    // 绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    overlay.querySelector('.email-cancel').addEventListener('click', closeEmailModal);
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.addEventListener('click', e => { if (e.target === overlay) closeEmailModal(); });

    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.querySelector('.email-confirm').addEventListener('click', () => {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const newEmail = input.value.trim();
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!newEmail) {
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入新邮箱地址', 'warning');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('邮箱格式不正确', 'warning');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (newEmail === currentEmail) {
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('新邮箱与当前邮箱相同', 'warning');
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 结束前面打开的代码块、函数调用或对象结构。
        }
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const confirmBtn = overlay.querySelector('.email-confirm');
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const fd = new FormData();
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        fd.append('email', newEmail);
        // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        withLoadingBtn(confirmBtn, '提交中…', async () => {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            try {
                // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const { data } = await postJson(`/admin/change_email/${userId}`, fd);
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    closeEmailModal();
                    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                    setTimeout(() => window.location.reload(), 600);
                // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message || '修改失败', 'error');
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            } catch (err) {
                // 调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast('网络错误，请稍后重试', 'error');
            // 结束前面打开的代码块、函数调用或对象结构。
            }
        // 结束前面打开的代码块、函数调用或对象结构。
        });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    input.focus();
// 结束前面打开的代码块、函数调用或对象结构。
}
