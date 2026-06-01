# static/js/socket-client.js

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>(function() {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 2 | <code>    if (typeof io === &#x27;undefined&#x27;) return;</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 3 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 4 | <code>    var socket = io({</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 5 | <code>        transports: [&#x27;websocket&#x27;, &#x27;polling&#x27;],</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 6 | <code>        reconnectionDelay: 1000,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 7 | <code>        reconnectionDelayMax: 30000,</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 8 | <code>        timeout: 20000</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 9 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 10 | <code>    window._socket = socket;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 11 | <code>    window.getLibrarySocket = function() { return socket; };</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 12 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 13 | <code>    function dispatch(name, detail) {</code> | 定义 `dispatch` 函数，封装页面交互或请求处理逻辑。 |
| 14 | <code>        window.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 15 | <code>    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 16 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 17 | <code>    socket.on(&#x27;connect&#x27;, function() {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 18 | <code>        dispatch(&#x27;library:socket-ready&#x27;, { socket: socket });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 19 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 20 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 21 | <code>    socket.on(&#x27;disconnect&#x27;, function(reason) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 22 | <code>        dispatch(&#x27;library:socket-disconnected&#x27;, { reason: reason });</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 23 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 24 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 25 | <code>    socket.on(&#x27;force_logout&#x27;, function(data) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 26 | <code>        var msg = data.reason || &#x27;您已被管理员下线&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 27 | <code>        if (typeof window.showKickoutModal === &#x27;function&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 28 | <code>            window.showKickoutModal(msg);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 29 | <code>        } else if (typeof window.showNotice === &#x27;function&#x27;) {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 30 | <code>            window.showNotice(&#x27;登录已失效&#x27;, msg, &#x27;danger&#x27;, [</code> | 调用统一弹窗或提示组件，反馈操作结果。 |
| 31 | <code>                { label: &#x27;重新登录&#x27;, href: &#x27;/login&#x27;, primary: true }</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 32 | <code>            ]);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 33 | <code>        } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 34 | <code>            window.location.href = &#x27;/login&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 35 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 36 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 37 | <code>    socket.on(&#x27;book_stock_changed&#x27;, function(data) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 38 | <code>        dispatch(&#x27;library:book-stock-changed&#x27;, data);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 39 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 40 | <code>    socket.on(&#x27;book_catalog_changed&#x27;, function(data) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 41 | <code>        dispatch(&#x27;library:book-catalog-changed&#x27;, data);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 42 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 43 | <code>    socket.on(&#x27;borrow_status_changed&#x27;, function(data) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 44 | <code>        dispatch(&#x27;library:borrow-status-changed&#x27;, data);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 45 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 46 | <code>    socket.on(&#x27;reservation_changed&#x27;, function(data) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 47 | <code>        dispatch(&#x27;library:reservation-changed&#x27;, data);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 48 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 49 | <code>    socket.on(&#x27;online_users_changed&#x27;, function(data) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 50 | <code>        dispatch(&#x27;library:online-users-changed&#x27;, data);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 51 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 52 | <code>    socket.on(&#x27;new_log&#x27;, function(data) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 53 | <code>        dispatch(&#x27;library:new-log&#x27;, data);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 54 | <code>    });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 55 | <code> </code> | 空行，用于分隔 JavaScript 代码块，提升阅读层次。 |
| 56 | <code>    setInterval(function() {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 57 | <code>        if (socket.connected) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 58 | <code>            socket.emit(&#x27;heartbeat&#x27;, {}, function(resp) {</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 59 | <code>                if (resp &amp;&amp; !resp.ok) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 60 | <code>                    var msg = &#x27;会话已失效，请重新登录&#x27;;</code> | 声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。 |
| 61 | <code>                    if (typeof window.showKickoutModal === &#x27;function&#x27;) {</code> | 条件判断，根据页面状态、接口结果或用户操作决定后续动作。 |
| 62 | <code>                        window.showKickoutModal(msg);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 63 | <code>                    } else {</code> | 条件判断的备用分支，处理未命中的交互场景。 |
| 64 | <code>                        window.location.href = &#x27;/login&#x27;;</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 65 | <code>                    }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 66 | <code>                }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 67 | <code>            });</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 68 | <code>        }</code> | 结束前面打开的代码块、函数调用或对象结构。 |
| 69 | <code>    }, 30000);</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
| 70 | <code>})();</code> | JavaScript 语句，参与页面状态管理、交互控制或接口联动。 |
