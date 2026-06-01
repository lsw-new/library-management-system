// 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('click', (e) => {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const btn = e.target.closest('.kick-btn');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!btn) return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const userId = btn.dataset.userId;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const username = btn.dataset.username || '该用户';
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
    showConfirm(
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        '强制下线',
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        `确定要将 ${username} 强制下线吗？该用户的当前会话将立即失效。`,
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        async () => {
            // 逐行注释：处理异步流程，等待接口、动画或浏览器任务完成。
            await performKickUser(btn, userId);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        },
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        'danger'
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    );
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `performKickUser` 函数，封装页面交互、请求或状态更新逻辑。
async function performKickUser(btn, userId) {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    let success = false;
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    await withLoadingBtn(btn, '处理中…', async () => {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        try {
            // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
            const { data } = await postJson(`/admin/kick_user/${userId}`);
            // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
            if (data.success) {
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message, 'success');
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                success = true;
            // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
            } else {
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast(data.message || '操作失败', 'error');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        } catch (err) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('网络错误，请稍后重试', 'error');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (success) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const card = btn.closest('article');
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (card) {
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.opacity = '0';
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            card.style.transform = 'scale(0.95)';
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            setTimeout(() => card.remove(), 420);
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `openBanModal` 函数，封装页面交互、请求或状态更新逻辑。
function openBanModal(userId, username) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.querySelector('.ban-modal-overlay')) return;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const overlay = document.createElement('div');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    overlay.className = 'ban-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    overlay.style.background = 'linear-gradient(135deg, rgba(225,29,72,0.25), rgba(236,72,153,0.18))';
    // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
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
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            <button type="button" data-mins="${m}" class="ban-quick min-h-[44px] px-3 py-2 text-xs font-bold rounded-xl border border-rose-100 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-colors">
                                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                                ${m < 60 ? m + ' 分钟' : (m % 1440 === 0 ? (m/1440) + ' 天' : (m/60) + ' 小时')}
                            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                            </button>
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
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
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    document.body.appendChild(overlay);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const input = overlay.querySelector('#ban-minutes-input');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const onBanKeydown = e => {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (e.key === 'Escape') {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            closeBanModal();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        trapModalFocus(e, overlay);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const closeBanModal = () => {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        closeModal(overlay);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        overlay.remove();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        document.removeEventListener('keydown', onBanKeydown);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    openModal(overlay);
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('keydown', onBanKeydown);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.querySelectorAll('.ban-quick').forEach(b => {
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        b.addEventListener('click', () => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.value = b.dataset.mins;
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            overlay.querySelectorAll('.ban-quick').forEach(x => x.classList.remove('bg-rose-600', 'text-white', 'border-rose-600'));
            // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
            b.classList.add('bg-rose-600', 'text-white', 'border-rose-600');
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    overlay.querySelector('.ban-cancel').addEventListener('click', closeBanModal);
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.addEventListener('click', e => { if (e.target === overlay) closeBanModal(); });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.querySelector('.ban-confirm').addEventListener('click', () => {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const minutes = parseInt(input.value, 10);
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!minutes || minutes <= 0) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入大于 0 的封禁时长', 'warning');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const confirmBtn = overlay.querySelector('.ban-confirm');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const fd = new FormData();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        fd.append('minutes', String(minutes));
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        withLoadingBtn(confirmBtn, '处理中…', async () => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            try {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const { data } = await postJson(`/admin/ban_user/${userId}`, fd);
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    closeBanModal();
                    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                    setTimeout(() => window.location.reload(), 600);
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message || '封禁失败', 'error');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            } catch (err) {
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast('网络错误，请稍后重试', 'error');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    input.focus();
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
document.addEventListener('click', (e) => {
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const banBtn = e.target.closest('.ban-btn');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (banBtn) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        openBanModal(banBtn.dataset.userId, banBtn.dataset.username || '该用户');
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const unbanBtn = e.target.closest('.unban-btn');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (unbanBtn) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const userId = unbanBtn.dataset.userId;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const username = unbanBtn.dataset.username || '该用户';
        // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
        showConfirm(
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            '解除封禁',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            `确定要解除 ${username} 的封禁吗？解除后该账号可立即登录。`,
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            () => withLoadingBtn(unbanBtn, '处理中…', async () => {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                try {
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const { data } = await postJson(`/admin/unban_user/${userId}`);
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'success');
                        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                        setTimeout(() => window.location.reload(), 600);
                    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message || '操作失败', 'error');
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    }
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                } catch (err) {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast('网络错误，请稍后重试', 'error');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            }),
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            'info'
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        );
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const changeEmailBtn = e.target.closest('.change-email-btn');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (changeEmailBtn) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        openChangeEmailModal(
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            changeEmailBtn.dataset.userId,
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            changeEmailBtn.dataset.username || '该用户',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            changeEmailBtn.dataset.email || ''
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        );
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const resetPwdBtn = e.target.closest('.reset-pwd-btn');
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (resetPwdBtn) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const userId = resetPwdBtn.dataset.userId;
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const username = resetPwdBtn.dataset.username || '该用户';
        // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
        showConfirm(
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            '初始化密码',
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            `确定要将 ${username} 的密码重置为学号吗？此操作不可撤销。`,
            // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
            () => withLoadingBtn(resetPwdBtn, '处理中…', async () => {
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                try {
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    const { data } = await postJson(`/admin/reset_password/${userId}`);
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (data.success) {
                        // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message, 'success');
                    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                        showToast(data.message || '操作失败', 'error');
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    }
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                } catch (err) {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast('网络错误，请稍后重试', 'error');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            }),
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            'warning'
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        );
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
});
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

// 逐行注释：定义 `openChangeEmailModal` 函数，封装页面交互、请求或状态更新逻辑。
function openChangeEmailModal(userId, username, currentEmail) {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (document.querySelector('.email-modal-overlay')) return;
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const overlay = document.createElement('div');
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    overlay.className = 'email-modal-overlay fixed inset-0 z-[2000] flex items-center justify-center p-4 animate-in fade-in duration-300';
    // 逐行注释：更新元素样式或状态类，驱动页面视觉状态变化。
    overlay.style.background = 'linear-gradient(135deg, rgba(37,99,235,0.22), rgba(99,102,241,0.18))';
    // 逐行注释：写入页面内容，让界面展示最新数据或提示文案。
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
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    document.body.appendChild(overlay);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const input = overlay.querySelector('#new-email-input');
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const onKeydown = e => {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (e.key === 'Escape') {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            closeEmailModal();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (e.key === 'Enter' && document.activeElement === input) {
            // 逐行注释：查找页面 DOM 元素，为读取状态或更新界面做准备。
            overlay.querySelector('.email-confirm').click();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        trapModalFocus(e, overlay);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const closeEmailModal = () => {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        closeModal(overlay);
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        overlay.remove();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        document.removeEventListener('keydown', onKeydown);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    openModal(overlay);
    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    document.addEventListener('keydown', onKeydown);
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：绑定浏览器事件监听，使用户操作能够触发对应逻辑。
    overlay.querySelector('.email-cancel').addEventListener('click', closeEmailModal);
    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.addEventListener('click', e => { if (e.target === overlay) closeEmailModal(); });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    overlay.querySelector('.email-confirm').addEventListener('click', () => {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const newEmail = input.value.trim();
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!newEmail) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('请输入新邮箱地址', 'warning');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('邮箱格式不正确', 'warning');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (newEmail === currentEmail) {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            showToast('新邮箱与当前邮箱相同', 'warning');
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            input.focus();
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            return;
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const confirmBtn = overlay.querySelector('.email-confirm');
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        const fd = new FormData();
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        fd.append('email', newEmail);
        // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
        withLoadingBtn(confirmBtn, '提交中…', async () => {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            try {
                // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                const { data } = await postJson(`/admin/change_email/${userId}`, fd);
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (data.success) {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message, 'success');
                    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                    closeEmailModal();
                    // 逐行注释：箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
                    setTimeout(() => window.location.reload(), 600);
                // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                } else {
                    // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                    showToast(data.message || '修改失败', 'error');
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            } catch (err) {
                // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
                showToast('网络错误，请稍后重试', 'error');
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            }
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    input.focus();
// 逐行注释：结束前面打开的代码块、函数调用或对象结构。
}
