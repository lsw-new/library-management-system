function loadSystemLogs() {
    const logsContainer = document.getElementById('sidebarLogs');
    if (!logsContainer) return;

    const readCachedLogs  = window.readAdminSidebarLogsCache;
    const writeCachedLogs = window.writeAdminSidebarLogsCache;
    const clearCachedLogs = window.clearAdminSidebarLogsCache;
    const cached = typeof readCachedLogs === 'function' ? readCachedLogs() : null;

    if (cached && Array.isArray(cached.logs) && Date.now() - cached.timestamp < 10000) {
        renderLogs(cached.logs, logsContainer);
    }

    fetch('/admin/logs?limit=15')
        .then(res => res.json())
        .then(data => {
            if (data.success && data.logs.length > 0) {
                if (typeof writeCachedLogs === 'function') {
                    writeCachedLogs(data.logs);
                }
                renderLogs(data.logs, logsContainer);
            } else {
                if (typeof clearCachedLogs === 'function') {
                    clearCachedLogs();
                }
                logsContainer.innerHTML = '<div class="text-center text-purple-300 py-4 text-[10px]">暂无日志</div>';
            }
        })
        .catch(() => {
            if (!cached || !Array.isArray(cached.logs) || cached.logs.length === 0) {
                logsContainer.innerHTML = '<div class="text-center text-red-400 py-4 text-[10px]">加载失败</div>';
            }
        });
}

function renderLogs(logs, container) {
    if (typeof window.renderAdminSidebarLogs === 'function') {
        window.renderAdminSidebarLogs(logs, container);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('sidebarLogs')) return;
    loadSystemLogs();

    var socket = window._socket;
    if (socket) {
        socket.on('new_log', function () {
            loadSystemLogs();
        });
    }
});

document.addEventListener('visibilitychange', function () {
    if (!document.getElementById('sidebarLogs')) return;
    if (!document.hidden) {
        loadSystemLogs();
    }
});
