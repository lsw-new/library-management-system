(function() {
    if (typeof io === 'undefined') return;

    var socket = io({
        transports: ['websocket', 'polling'],
        reconnectionDelay: 1000,
        reconnectionDelayMax: 30000,
        timeout: 20000
    });
    window._socket = socket;
    window.getLibrarySocket = function() { return socket; };

    function dispatch(name, detail) {
        window.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
    }

    socket.on('connect', function() {
        dispatch('library:socket-ready', { socket: socket });
    });

    socket.on('disconnect', function(reason) {
        dispatch('library:socket-disconnected', { reason: reason });
    });

    socket.on('force_logout', function(data) {
        var msg = data.reason || '您已被管理员下线';
        if (typeof window.showKickoutModal === 'function') {
            window.showKickoutModal(msg);
        } else if (typeof window.showNotice === 'function') {
            window.showNotice('登录已失效', msg, 'danger', [
                { label: '重新登录', href: '/login', primary: true }
            ]);
        } else {
            window.location.href = '/login';
        }
    });
    socket.on('book_stock_changed', function(data) {
        dispatch('library:book-stock-changed', data);
    });
    socket.on('book_catalog_changed', function(data) {
        dispatch('library:book-catalog-changed', data);
    });
    socket.on('borrow_status_changed', function(data) {
        dispatch('library:borrow-status-changed', data);
    });
    socket.on('reservation_changed', function(data) {
        dispatch('library:reservation-changed', data);
    });
    socket.on('online_users_changed', function(data) {
        dispatch('library:online-users-changed', data);
    });
    socket.on('new_log', function(data) {
        dispatch('library:new-log', data);
    });

    setInterval(function() {
        if (socket.connected) {
            socket.emit('heartbeat', {}, function(resp) {
                if (resp && !resp.ok) {
                    var msg = '会话已失效，请重新登录';
                    if (typeof window.showKickoutModal === 'function') {
                        window.showKickoutModal(msg);
                    } else {
                        window.location.href = '/login';
                    }
                }
            });
        }
    }, 30000);
})();
