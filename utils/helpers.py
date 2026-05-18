from flask import request


def get_client_ip() -> str:
    forwarded_for = request.headers.get('X-Forwarded-For', '')
    if forwarded_for:
        return forwarded_for.split(',')[0].strip()
    return request.remote_addr or '未知'


def is_mobile_device() -> bool:
    user_agent = request.headers.get('User-Agent', '').lower()
    mobile_keywords = [
        'mobile', 'android', 'iphone', 'ipad', 'ipod', 'blackberry',
        'windows phone', 'opera mini', 'iemobile', 'webos', 'palm'
    ]
    return any(keyword in user_agent for keyword in mobile_keywords)


def allowed_file(filename: str, allowed_extensions: set[str]) -> bool:
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in allowed_extensions
