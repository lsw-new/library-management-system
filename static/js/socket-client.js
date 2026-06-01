// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
(function() {
    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
    if (typeof io === 'undefined') return;

    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
    var socket = io({
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        transports: ['websocket', 'polling'],
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reconnectionDelay: 1000,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        reconnectionDelayMax: 30000,
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        timeout: 20000
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    window._socket = socket;
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    window.getLibrarySocket = function() { return socket; };

    // 定义 `dispatch` 函数，封装页面交互、请求或状态更新逻辑。
    function dispatch(name, detail) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        window.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
    // 结束前面打开的代码块、函数调用或对象结构。
    }

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('connect', function() {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:socket-ready', { socket: socket });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('disconnect', function(reason) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:socket-disconnected', { reason: reason });
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('force_logout', function(data) {
        // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
        var msg = data.reason || '您已被管理员下线';
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (typeof window.showKickoutModal === 'function') {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.showKickoutModal(msg);
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else if (typeof window.showNotice === 'function') {
            // 调用统一提示或弹窗能力，向用户反馈操作结果。
            window.showNotice('登录已失效', msg, 'danger', [
                // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                { label: '重新登录', href: '/login', primary: true }
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            ]);
        // 条件判断的备用分支，处理前面条件没有命中的交互场景。
        } else {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            window.location.href = '/login';
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('book_stock_changed', function(data) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:book-stock-changed', data);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('book_catalog_changed', function(data) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:book-catalog-changed', data);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('borrow_status_changed', function(data) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:borrow-status-changed', data);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('reservation_changed', function(data) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:reservation-changed', data);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('online_users_changed', function(data) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:online-users-changed', data);
    // 结束前面打开的代码块、函数调用或对象结构。
    });
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    socket.on('new_log', function(data) {
        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
        dispatch('library:new-log', data);
    // 结束前面打开的代码块、函数调用或对象结构。
    });

    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    setInterval(function() {
        // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
        if (socket.connected) {
            // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
            socket.emit('heartbeat', {}, function(resp) {
                // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                if (resp && !resp.ok) {
                    // 声明前端变量或常量，保存 DOM、配置、状态或计算结果。
                    var msg = '会话已失效，请重新登录';
                    // 条件判断，根据界面状态、接口返回或用户输入决定后续动作。
                    if (typeof window.showKickoutModal === 'function') {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        window.showKickoutModal(msg);
                    // 条件判断的备用分支，处理前面条件没有命中的交互场景。
                    } else {
                        // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
                        window.location.href = '/login';
                    // 结束前面打开的代码块、函数调用或对象结构。
                    }
                // 结束前面打开的代码块、函数调用或对象结构。
                }
            // 结束前面打开的代码块、函数调用或对象结构。
            });
        // 结束前面打开的代码块、函数调用或对象结构。
        }
    // JavaScript 语句，参与页面状态管理、交互控制或接口联动。
    }, 30000);
// JavaScript 语句，参与页面状态管理、交互控制或接口联动。
})();
