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


ALLOWED_MIMES = {'image/png', 'image/jpeg', 'image/gif', 'image/webp'}

_IMAGE_SIGNATURES: dict[bytes, str] = {
    b'\x89PNG':      'image/png',
    b'\xff\xd8\xff': 'image/jpeg',
    b'GIF87a':       'image/gif',
    b'GIF89a':       'image/gif',
    b'RIFF':         'image/webp',
}


def validate_image_content(file_storage) -> bool:
    """通过检查文件头的 magic bytes 验证文件是否为合法图片。

    读取前 16 字节后会自动将文件指针 seek 回起始位置，
    以便后续代码可以正常读取文件内容。
    """
    header = file_storage.read(16)
    file_storage.seek(0)
    for sig in _IMAGE_SIGNATURES:
        if header.startswith(sig):
            return True
    return False
