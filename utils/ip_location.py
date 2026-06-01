# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import json
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging
# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import threading
# 从指定模块导入类、函数或变量，简化后续代码引用。
from urllib.error import URLError
# 从指定模块导入类、函数或变量，简化后续代码引用。
from urllib.request import Request, urlopen

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
logger = logging.getLogger(__name__)

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_PRIVATE_PREFIXES = (
    # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
    '127.', '10.', '192.168.', '0.', '::1', 'fe80:', 'fd',
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    *(f'172.{i}.' for i in range(16, 32)),
# 关闭前面打开的复合表达式、集合字面量或函数调用结构。
)

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_location_cache: dict[str, str] = {}
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_pending_lookups: set[str] = set()


# 定义 `_is_private` 函数，封装一段可复用的后端处理流程。
def _is_private(ip: str) -> bool:
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return any(ip.startswith(p) for p in _PRIVATE_PREFIXES)


# 定义 `_lookup_ip_cn` 函数，封装一段可复用的后端处理流程。
def _lookup_ip_cn(ip: str) -> str:
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        req = Request(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            f'https://www.ip.cn/api/index?ip={ip}&type=0',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'},
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with urlopen(req, timeout=3) as resp:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            data = json.loads(resp.read())
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if data.get('rs') != 1:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return ''
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        address = data.get('address', '')
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        parts = address.split()
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if len(parts) >= 2:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            province = parts[0]
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            city = parts[1] if parts[1] != province else ''
            # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if province and city:
                # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
                return f'{province}{city}'
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return province
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return address.strip() or ''
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except (URLError, OSError, json.JSONDecodeError, KeyError, IndexError):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return ''


# 定义 `_lookup_ip_api` 函数，封装一段可复用的后端处理流程。
def _lookup_ip_api(ip: str) -> str:
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        req = Request(
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            f'http://ip-api.com/json/{ip}?lang=zh-CN&fields=status,regionName,city',
            # Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            headers={'User-Agent': 'LibraryAdmin/1.0'},
        # 关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 上下文管理语句，自动管理资源生命周期或事务边界。
        with urlopen(req, timeout=2) as resp:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            data = json.loads(resp.read())
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if data.get('status') != 'success':
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return '未知'
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        region = data.get('regionName', '')
        # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        city = data.get('city', '')
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if city and city.isascii():
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            city = ''
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if region and region.isascii():
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            region = ''
        # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if region and city and region != city:
            # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
            return f'{region}{city}'
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return region or city or '未知'
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except (URLError, OSError, json.JSONDecodeError, KeyError):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return '未知'


# 定义 `get_ip_location` 函数，封装一段可复用的后端处理流程。
def get_ip_location(ip: str) -> str:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not ip or _is_private(ip):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return '本机'
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    cached = _location_cache.get(ip)
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if cached:
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return cached
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    location = _lookup_ip_cn(ip) or _lookup_ip_api(ip)
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    _location_cache[ip] = location
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return location


# 定义 `get_ip_location_cached` 函数，封装一段可复用的后端处理流程。
def get_ip_location_cached(ip: str) -> str | None:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not ip or _is_private(ip):
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return '本机'
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return _location_cache.get(ip)


# 定义 `schedule_ip_lookup` 函数，封装一段可复用的后端处理流程。
def schedule_ip_lookup(ip: str) -> None:
    # 条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
    if not ip or _is_private(ip) or ip in _location_cache or ip in _pending_lookups:
        # 显式结束当前分支或作为占位语句，保持代码结构完整。
        return
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    _pending_lookups.add(ip)

    # 定义 `_do_lookup` 函数，封装一段可复用的后端处理流程。
    def _do_lookup():
        # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
        try:
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            location = _lookup_ip_cn(ip) or _lookup_ip_api(ip)
            # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            _location_cache[ip] = location
        # 异常处理收尾分支，无论是否发生异常都会执行。
        finally:
            # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            _pending_lookups.discard(ip)

    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    t = threading.Thread(target=_do_lookup, daemon=True)
    # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    t.start()


# 定义 `build_ip_location_map` 函数，封装一段可复用的后端处理流程。
def build_ip_location_map(sessions) -> dict[str, str]:
    # 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    ips = {s.ip_address for s in sessions if s.ip_address}
    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return {ip: get_ip_location(ip) for ip in ips}
