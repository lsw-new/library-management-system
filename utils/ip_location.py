import json
import logging
import threading
from urllib.error import URLError
from urllib.request import Request, urlopen

logger = logging.getLogger(__name__)

_PRIVATE_PREFIXES = (
    '127.', '10.', '192.168.', '0.', '::1', 'fe80:', 'fd',
    *(f'172.{i}.' for i in range(16, 32)),
)

_location_cache: dict[str, str] = {}
_pending_lookups: set[str] = set()


def _is_private(ip: str) -> bool:
    return any(ip.startswith(p) for p in _PRIVATE_PREFIXES)


def _lookup_ip_cn(ip: str) -> str:
    try:
        req = Request(
            f'https://www.ip.cn/api/index?ip={ip}&type=0',
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'},
        )
        with urlopen(req, timeout=3) as resp:
            data = json.loads(resp.read())
        if data.get('rs') != 1:
            return ''
        address = data.get('address', '')
        parts = address.split()
        if len(parts) >= 2:
            province = parts[0]
            city = parts[1] if parts[1] != province else ''
            if province and city:
                return f'{province}{city}'
            return province
        return address.strip() or ''
    except (URLError, OSError, json.JSONDecodeError, KeyError, IndexError):
        return ''


def _lookup_ip_api(ip: str) -> str:
    try:
        req = Request(
            f'http://ip-api.com/json/{ip}?lang=zh-CN&fields=status,regionName,city',
            headers={'User-Agent': 'LibraryAdmin/1.0'},
        )
        with urlopen(req, timeout=2) as resp:
            data = json.loads(resp.read())
        if data.get('status') != 'success':
            return '未知'
        region = data.get('regionName', '')
        city = data.get('city', '')
        if city and city.isascii():
            city = ''
        if region and region.isascii():
            region = ''
        if region and city and region != city:
            return f'{region}{city}'
        return region or city or '未知'
    except (URLError, OSError, json.JSONDecodeError, KeyError):
        return '未知'


def get_ip_location(ip: str) -> str:
    if not ip or _is_private(ip):
        return '本机'
    cached = _location_cache.get(ip)
    if cached:
        return cached
    location = _lookup_ip_cn(ip) or _lookup_ip_api(ip)
    _location_cache[ip] = location
    return location


def get_ip_location_cached(ip: str) -> str | None:
    if not ip or _is_private(ip):
        return '本机'
    return _location_cache.get(ip)


def schedule_ip_lookup(ip: str) -> None:
    if not ip or _is_private(ip) or ip in _location_cache or ip in _pending_lookups:
        return
    _pending_lookups.add(ip)

    def _do_lookup():
        try:
            location = _lookup_ip_cn(ip) or _lookup_ip_api(ip)
            _location_cache[ip] = location
        finally:
            _pending_lookups.discard(ip)

    t = threading.Thread(target=_do_lookup, daemon=True)
    t.start()


def build_ip_location_map(sessions) -> dict[str, str]:
    ips = {s.ip_address for s in sessions if s.ip_address}
    return {ip: get_ip_location(ip) for ip in ips}
