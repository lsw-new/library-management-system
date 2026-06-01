# 导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import logging

# 从指定模块导入类、函数或变量，简化后续代码引用。
from flask import Blueprint, jsonify
# 从指定模块导入类、函数或变量，简化后续代码引用。
from extensions import db

# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
health_bp = Blueprint('health', __name__)
# 执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
logger = logging.getLogger(__name__)


# 装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
@health_bp.route('/health')
# 定义 `health_check` 函数，封装一段可复用的后端处理流程。
def health_check():
    # 异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
    try:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        db.session.execute(db.text('SELECT 1'))
    # 异常处理分支，用于回滚、记录日志或返回错误响应。
    except Exception as e:
        # 调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        logger.error("健康检查数据库连接失败: %s", e)
        # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
        return jsonify({'status': 'unhealthy', 'database': 'unavailable'}), 503

    # 返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return jsonify({'status': 'healthy', 'database': 'healthy'}), 200
