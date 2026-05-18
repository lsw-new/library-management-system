import logging

from flask import Blueprint, jsonify
from extensions import db

health_bp = Blueprint('health', __name__)
logger = logging.getLogger(__name__)


@health_bp.route('/health')
def health_check():
    try:
        db.session.execute(db.text('SELECT 1'))
    except Exception as e:
        logger.error("健康检查数据库连接失败: %s", e)
        return jsonify({'status': 'unhealthy', 'database': 'unavailable'}), 503

    return jsonify({'status': 'healthy', 'database': 'healthy'}), 200
