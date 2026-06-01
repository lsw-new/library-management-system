// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// 共享工具：消息控制台、状态徽章、按钮 loading、HTML 转义、延时辅助
// 已有 JavaScript 注释，说明附近交互逻辑或实现意图。
// 由 init-db.js（页面1：连接配置）和 init-db-actions.js（页面2：初始化操作）共用

// 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const messageVariants = {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    info: {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        title: '系统提示',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        wrapper: 'border-sky-100 bg-sky-50/80 text-sky-800',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        icon: 'bg-sky-500/10 text-sky-600',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        svg: '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    },
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    success: {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        title: '操作成功',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        wrapper: 'border-emerald-100 bg-emerald-50/80 text-emerald-800',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        icon: 'bg-emerald-500/10 text-emerald-600',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        svg: '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" /></svg>'
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    },
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    error: {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        title: '操作失败',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        wrapper: 'border-rose-100 bg-rose-50/80 text-rose-800',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        icon: 'bg-rose-500/10 text-rose-600',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        svg: '<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z" /></svg>'
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
};

// 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
const pageStatusToneMap = {
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    pending: {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        badge: 'bg-amber-50 text-amber-700',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dot: 'relative inline-flex h-2 w-2 rounded-full bg-amber-500'
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    },
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    ready: {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        badge: 'bg-sky-50 text-sky-700',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dot: 'relative inline-flex h-2 w-2 rounded-full bg-sky-500'
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    },
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    success: {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        badge: 'bg-emerald-50 text-emerald-700',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        ping: 'absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75',
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dot: 'relative inline-flex h-2 w-2 rounded-full bg-emerald-500'
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
};

// 定义 `showMessage` 函数，封装页面交互、请求或状态更新逻辑。
function showMessage(consoleEls, message, type = 'info', customTitle = '') {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const variant = messageVariants[type] || messageVariants.info;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    consoleEls.root.className = `rounded-2xl border p-4 mb-5 ${variant.wrapper}`;
    // 更新元素样式或状态类，驱动页面视觉状态变化。
    consoleEls.root.classList.remove('hidden');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    consoleEls.root.setAttribute('role', type === 'error' ? 'alert' : 'status');
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    consoleEls.icon.className = `mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${variant.icon}`;
    // 写入页面内容，让界面展示最新数据或提示文案。
    consoleEls.icon.innerHTML = variant.svg;
    // 写入页面内容，让界面展示最新数据或提示文案。
    consoleEls.title.textContent = customTitle || variant.title;
    // 写入页面内容，让界面展示最新数据或提示文案。
    consoleEls.text.textContent = message;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `setPageStatus` 函数，封装页面交互、请求或状态更新逻辑。
function setPageStatus(statusEls, text, tone = 'pending') {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const currentTone = pageStatusToneMap[tone] || pageStatusToneMap.pending;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    statusEls.badge.className = `inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-black ${currentTone.badge}`;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    statusEls.ping.className = currentTone.ping;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    statusEls.dot.className = currentTone.dot;
    // 写入页面内容，让界面展示最新数据或提示文案。
    statusEls.text.textContent = text;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `setButtonLoading` 函数，封装页面交互、请求或状态更新逻辑。
function setButtonLoading(button, isLoading, loadingText) {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!button) return;
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (!button.dataset.defaultHtml) {
        // 写入页面内容，让界面展示最新数据或提示文案。
        button.dataset.defaultHtml = button.innerHTML;
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    button.disabled = isLoading;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    button.setAttribute('aria-disabled', String(isLoading));
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (isLoading) {
        // 写入页面内容，让界面展示最新数据或提示文案。
        button.innerHTML = `<span class="inline-flex items-center gap-2"><svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg><span>${loadingText}</span></span>`;
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        return;
    // 结束前面打开的代码块、函数调用或对象结构。
    }
    // 写入页面内容，让界面展示最新数据或提示文案。
    button.innerHTML = button.dataset.defaultHtml;
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `wait` 函数，封装页面交互、请求或状态更新逻辑。
function wait(ms) {
    // 箭头函数表达式，通常作为回调、事件处理器或数据转换逻辑。
    return new Promise((resolve) => window.setTimeout(resolve, ms));
// 结束前面打开的代码块、函数调用或对象结构。
}

// 定义 `keepLoadingVisible` 函数，封装页面交互、请求或状态更新逻辑。
async function keepLoadingVisible(startedAt, minimumDuration = 600) {
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const elapsed = Date.now() - startedAt;
    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    const remaining = minimumDuration - elapsed;
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (remaining > 0) {
        // 处理异步流程，等待接口、动画或浏览器任务完成。
        await wait(remaining);
    // 结束前面打开的代码块、函数调用或对象结构。
    }
// 结束前面打开的代码块、函数调用或对象结构。
}
