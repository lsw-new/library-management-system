import os

from werkzeug.utils import secure_filename

from extensions import cst_now
from .helpers import allowed_file

BOOK_LOCATION_MAX_LENGTH = 100


def save_book_image(file_storage, upload_folder: str, allowed_extensions: set,
                    old_filename: str | None = None) -> str | None:
    if not file_storage or not file_storage.filename:
        return None
    if not allowed_file(file_storage.filename, allowed_extensions):
        return None
    filename = secure_filename(file_storage.filename) or 'book.jpg'
    timestamp = cst_now().strftime('%Y%m%d%H%M%S')
    image_filename = f'{timestamp}_{filename}'
    file_storage.save(os.path.join(upload_folder, image_filename))
    if old_filename:
        old_path = os.path.join(upload_folder, old_filename)
        if os.path.exists(old_path):
            try:
                os.remove(old_path)
            except OSError:
                pass
    return image_filename


def validate_book_form(form, defaults=None) -> tuple[dict | None, str | None]:
    title = (form.get('title') or '').strip()
    author = (form.get('author') or '').strip()
    if not title or not author:
        return None, '书名和作者为必填字段'

    location = (form.get('location') or '').strip() or None
    if location and len(location) > BOOK_LOCATION_MAX_LENGTH:
        return None, f'书籍位置不能超过{BOOK_LOCATION_MAX_LENGTH}个字符'

    defaults = defaults or {}
    try:
        stock = int(form.get('stock', defaults.get('stock', 0)))
        total = int(form.get('total', defaults.get('total', stock)))
    except (TypeError, ValueError):
        return None, '库存必须是数字'

    if stock < 0 or total < 0:
        return None, '库存不能为负数'
    if total < stock:
        if defaults:
            return None, '总库存不能小于当前库存'
        total = stock

    return {
        'title': title,
        'author': author,
        'isbn': (form.get('isbn') or '').strip() or None,
        'publisher': (form.get('publisher') or '').strip(),
        'location': location,
        'category': (form.get('category') or '').strip(),
        'stock': stock,
        'total': total,
    }, None
