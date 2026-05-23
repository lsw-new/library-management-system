import hashlib
import os

_hash_cache: dict[str, str] = {}


def get_file_hash(filepath: str, length: int = 8) -> str:
    if filepath in _hash_cache:
        return _hash_cache[filepath]

    full_path = os.path.join('static', filepath)
    if not os.path.exists(full_path):
        return ''

    with open(full_path, 'rb') as f:
        file_hash = hashlib.md5(f.read()).hexdigest()[:length]

    _hash_cache[filepath] = file_hash
    return file_hash


def versioned_url(filename: str) -> str:
    file_hash = get_file_hash(filename)
    base_url = f'/static/{filename}'
    return f'{base_url}?v={file_hash}' if file_hash else base_url
