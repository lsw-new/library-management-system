import logging
import threading
from datetime import timedelta

from extensions import db, naive_cst_now
from .logging import log_action

logger = logging.getLogger(__name__)


def process_expired_reservations(book_ids=None) -> int:
    from models import BorrowRecord
    three_minutes_ago = naive_cst_now() - timedelta(minutes=3)
    query = BorrowRecord.query.filter(
        BorrowRecord.status == 'pending',
        BorrowRecord.borrow_date < three_minutes_ago
    )
    if book_ids:
        query = query.filter(BorrowRecord.book_id.in_(book_ids))
    expired_records = query.all()

    if not expired_records:
        return 0

    count = 0
    for record in expired_records:
        try:
            book = record.book
            user = record.user
            borrow_date = record.borrow_date
            reject_date = naive_cst_now()
            updated_rows = BorrowRecord.query.filter(
                BorrowRecord.id == record.id,
                BorrowRecord.status == 'pending',
            ).update({
                BorrowRecord.status: 'expired',
                BorrowRecord.reject_date: reject_date,
            }, synchronize_session=False)
            if not updated_rows:
                db.session.rollback()
                continue
            book.restore_stock()
            db.session.commit()
            count += 1
            log_action('自动拒绝逾期预约', f'用户 {user.username} 预约图书 {book.title} 超过3分钟未处理，已自动标记为逾期')
            try:
                from email_utils import send_expiry_email
                threading.Thread(
                    target=send_expiry_email,
                    args=(
                        user.email,
                        user.username,
                        book.title,
                        borrow_date.strftime('%Y-%m-%d %H:%M'),
                    ),
                    daemon=True,
                ).start()
            except Exception:
                logger.warning("逾期预约邮件任务启动失败 record_id=%s", record.id, exc_info=True)
        except Exception:
            logger.exception(
                "处理逾期预约失败 record_id=%s book_id=%s user_id=%s",
                getattr(record, 'id', None),
                getattr(record, 'book_id', None),
                getattr(record, 'user_id', None),
            )
            db.session.rollback()
            continue

    return count
