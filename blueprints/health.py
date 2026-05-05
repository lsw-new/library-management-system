"""
健康检查端点
用于 Docker 容器健康检查和负载均衡器探测
"""
from flask import Blueprint, jsonify
from extensions import db

health_bp = Blueprint('health', __name__)

@health_bp.route('/health')
def health_check():
    """
    健康检查端点
    返回应用和数据库的健康状态
    """
    try:
        # 检查数据库连接
        db.session.execute(db.text('SELECT 1'))
        db_status = 'healthy'
    except Exception as e:
        db_status = f'unhealthy: {str(e)}'
        return jsonify({
            'status': 'unhealthy',
            'database': db_status
        }), 503

    return jsonify({
        'status': 'healthy',
        'database': db_status
    }), 200
