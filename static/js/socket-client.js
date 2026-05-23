(function() {
    if (typeof io === 'undefined') return;

    var socket = io({
        transports: ['websocket'],
        reconnectionDelay: 1000,
        reconnectionDelayMax: 30000,
        timeout: 20000
    });

    socket.on('force_logout', function(data) {
        var msg = data.reason || '您已被管理员下线';
        if (typeof window.showKickoutModal === 'function') {
            window.showKickoutModal(msg);
        } else {
            alert(msg);
            window.location.href = '/login';
        }
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

    window._socket = socket;
})();
