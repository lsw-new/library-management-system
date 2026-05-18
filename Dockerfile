# 多阶段构建 - 构建阶段
FROM python:3.11-slim as builder

# 设置构建时环境变量
ENV PIP_NO_CACHE_DIR=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1

# 安装构建依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    default-libmysqlclient-dev \
    pkg-config \
    && rm -rf /var/lib/apt/lists/*

# 设置工作目录
WORKDIR /app

# 复制并安装Python依赖
COPY requirements.txt .
RUN pip install --user --no-cache-dir -r requirements.txt

# 生产阶段
FROM python:3.11-slim as production

# 创建非root用户
RUN groupadd -r appuser && useradd -r -g appuser appuser

# 设置环境变量
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PATH="/home/appuser/.local/bin:$PATH" \
    FLASK_APP=app.py \
    FLASK_ENV=production

# 安装运行时依赖
RUN apt-get update && apt-get install -y --no-install-recommends \
    default-libmysqlclient-dev \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

# 从构建阶段复制Python包
COPY --from=builder /root/.local /home/appuser/.local

# 设置工作目录
WORKDIR /app

# 复制项目文件
COPY --chown=appuser:appuser . .

# 创建必要的目录并设置权限
RUN mkdir -p static/images static/logs docker/logs \
    && chown -R appuser:appuser /app \
    && chmod -R 755 /app

# 切换到非root用户
USER appuser

# 暴露端口
EXPOSE 5000

# 健康检查
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:5000/health || exit 1

# 启动命令
CMD ["python", "app.py"]