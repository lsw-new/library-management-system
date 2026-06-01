// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function() {
    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (typeof io === 'undefined') return;
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var socket = io({
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        transports: ['websocket', 'polling'],
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reconnectionDelay: 1000,
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reconnectionDelayMax: 30000,
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        timeout: 20000
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    window._socket = socket;
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    window.getLibrarySocket = function() { return socket; };
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：定义 `dispatch` 函数，封装页面交互、请求或状态更新逻辑。
    function dispatch(name, detail) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        window.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    }
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('connect', function() {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:socket-ready', { socket: socket });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('disconnect', function(reason) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:socket-disconnected', { reason: reason });
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('force_logout', function(data) {
        // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var msg = data.reason || '您已被管理员下线';
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (typeof window.showKickoutModal === 'function') {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.showKickoutModal(msg);
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else if (typeof window.showNotice === 'function') {
            // 逐行注释：调用统一提示或弹窗能力，向用户反馈操作结果。
            window.showNotice('登录已失效', msg, 'danger', [
                // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                { label: '重新登录', href: '/login', primary: true }
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ]);
        // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.location.href = '/login';
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('book_stock_changed', function(data) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:book-stock-changed', data);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('book_catalog_changed', function(data) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:book-catalog-changed', data);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('borrow_status_changed', function(data) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:borrow-status-changed', data);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('reservation_changed', function(data) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:reservation-changed', data);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('online_users_changed', function(data) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:online-users-changed', data);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('new_log', function(data) {
        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:new-log', data);
    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
    });
// 逐行注释：空行，用于分隔 JavaScript 代码块，提升代码阅读层次。

    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setInterval(function() {
        // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (socket.connected) {
            // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            socket.emit('heartbeat', {}, function(resp) {
                // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (resp && !resp.ok) {
                    // 逐行注释：声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    var msg = '会话已失效，请重新登录';
                    // 逐行注释：条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (typeof window.showKickoutModal === 'function') {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        window.showKickoutModal(msg);
                    // 逐行注释：条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        window.location.href = '/login';
                    // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                    }
                // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
                }
            // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
            });
        // 逐行注释：结束前面打开的代码块、函数调用或对象结构。
        }
    // 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 30000);
// 逐行注释：JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
