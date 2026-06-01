# utils/ip_location.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>import json</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 2 | <code>import logging</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 3 | <code>import threading</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 4 | <code>from urllib.error import URLError</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 5 | <code>from urllib.request import Request, urlopen</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 6 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 7 | <code>logger = logging.getLogger(__name__)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 8 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 9 | <code>_PRIVATE_PREFIXES = (</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 10 | <code>    &#x27;127.&#x27;, &#x27;10.&#x27;, &#x27;192.168.&#x27;, &#x27;0.&#x27;, &#x27;::1&#x27;, &#x27;fe80:&#x27;, &#x27;fd&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 11 | <code>    *(f&#x27;172.{i}.&#x27; for i in range(16, 32)),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 12 | <code>)</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 13 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 14 | <code>_location_cache: dict[str, str] = {}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 15 | <code>_pending_lookups: set[str] = set()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 16 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 17 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 18 | <code>def _is_private(ip: str) -&gt; bool:</code> | 定义 `_is_private` 函数，承载当前模块中的一段可复用处理流程。 |
| 19 | <code>    return any(ip.startswith(p) for p in _PRIVATE_PREFIXES)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 20 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 21 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 22 | <code>def _lookup_ip_cn(ip: str) -&gt; str:</code> | 定义 `_lookup_ip_cn` 函数，承载当前模块中的一段可复用处理流程。 |
| 23 | <code>    try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 24 | <code>        req = Request(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 25 | <code>            f&#x27;https://www.ip.cn/api/index?ip={ip}&amp;type=0&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 26 | <code>            headers={&#x27;User-Agent&#x27;: &#x27;Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36&#x27;},</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 27 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 28 | <code>        with urlopen(req, timeout=3) as resp:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 29 | <code>            data = json.loads(resp.read())</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 30 | <code>        if data.get(&#x27;rs&#x27;) != 1:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 31 | <code>            return &#x27;&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 32 | <code>        address = data.get(&#x27;address&#x27;, &#x27;&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 33 | <code>        parts = address.split()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 34 | <code>        if len(parts) &gt;= 2:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 35 | <code>            province = parts[0]</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 36 | <code>            city = parts[1] if parts[1] != province else &#x27;&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 37 | <code>            if province and city:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 38 | <code>                return f&#x27;{province}{city}&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 39 | <code>            return province</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 40 | <code>        return address.strip() or &#x27;&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 41 | <code>    except (URLError, OSError, json.JSONDecodeError, KeyError, IndexError):</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 42 | <code>        return &#x27;&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 43 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 44 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 45 | <code>def _lookup_ip_api(ip: str) -&gt; str:</code> | 定义 `_lookup_ip_api` 函数，承载当前模块中的一段可复用处理流程。 |
| 46 | <code>    try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 47 | <code>        req = Request(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 48 | <code>            f&#x27;http://ip-api.com/json/{ip}?lang=zh-CN&amp;fields=status,regionName,city&#x27;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 49 | <code>            headers={&#x27;User-Agent&#x27;: &#x27;LibraryAdmin/1.0&#x27;},</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 50 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 51 | <code>        with urlopen(req, timeout=2) as resp:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 52 | <code>            data = json.loads(resp.read())</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 53 | <code>        if data.get(&#x27;status&#x27;) != &#x27;success&#x27;:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 54 | <code>            return &#x27;未知&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 55 | <code>        region = data.get(&#x27;regionName&#x27;, &#x27;&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 56 | <code>        city = data.get(&#x27;city&#x27;, &#x27;&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 57 | <code>        if city and city.isascii():</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 58 | <code>            city = &#x27;&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 59 | <code>        if region and region.isascii():</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 60 | <code>            region = &#x27;&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 61 | <code>        if region and city and region != city:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 62 | <code>            return f&#x27;{region}{city}&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 63 | <code>        return region or city or &#x27;未知&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 64 | <code>    except (URLError, OSError, json.JSONDecodeError, KeyError):</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 65 | <code>        return &#x27;未知&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 66 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 67 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 68 | <code>def get_ip_location(ip: str) -&gt; str:</code> | 定义 `get_ip_location` 函数，承载当前模块中的一段可复用处理流程。 |
| 69 | <code>    if not ip or _is_private(ip):</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 70 | <code>        return &#x27;本机&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 71 | <code>    cached = _location_cache.get(ip)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 72 | <code>    if cached:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 73 | <code>        return cached</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 74 | <code>    location = _lookup_ip_cn(ip) or _lookup_ip_api(ip)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 75 | <code>    _location_cache[ip] = location</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 76 | <code>    return location</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 77 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 78 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 79 | <code>def get_ip_location_cached(ip: str) -&gt; str | None:</code> | 定义 `get_ip_location_cached` 函数，承载当前模块中的一段可复用处理流程。 |
| 80 | <code>    if not ip or _is_private(ip):</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 81 | <code>        return &#x27;本机&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 82 | <code>    return _location_cache.get(ip)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 83 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 84 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 85 | <code>def schedule_ip_lookup(ip: str) -&gt; None:</code> | 定义 `schedule_ip_lookup` 函数，承载当前模块中的一段可复用处理流程。 |
| 86 | <code>    if not ip or _is_private(ip) or ip in _location_cache or ip in _pending_lookups:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 87 | <code>        return</code> | 显式结束当前分支或占位，保持语法结构完整。 |
| 88 | <code>    _pending_lookups.add(ip)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 89 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 90 | <code>    def _do_lookup():</code> | 定义 `_do_lookup` 函数，承载当前模块中的一段可复用处理流程。 |
| 91 | <code>        try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 92 | <code>            location = _lookup_ip_cn(ip) or _lookup_ip_api(ip)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 93 | <code>            _location_cache[ip] = location</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 94 | <code>        finally:</code> | 异常处理的收尾分支，无论是否报错都会执行。 |
| 95 | <code>            _pending_lookups.discard(ip)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 96 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 97 | <code>    t = threading.Thread(target=_do_lookup, daemon=True)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 98 | <code>    t.start()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 99 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 100 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 101 | <code>def build_ip_location_map(sessions) -&gt; dict[str, str]:</code> | 定义 `build_ip_location_map` 函数，承载当前模块中的一段可复用处理流程。 |
| 102 | <code>    ips = {s.ip_address for s in sessions if s.ip_address}</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 103 | <code>    return {ip: get_ip_location(ip) for ip in ips}</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
