#!/usr/bin/env bash
set -Eeuo pipefail

export LANG="${LANG:-C.UTF-8}"
cd "$(dirname "${BASH_SOURCE[0]}")"

PROJECT_NAME="library_seeded"
COMPOSE_FILE="docker-compose.seeded.yml"
ENV_FILE=".env.seeded"
APP_CONTAINER="library_seeded_app"

fail() {
    echo "错误: $*" >&2
    exit 1
}

if ! command -v docker >/dev/null 2>&1; then
    fail "未安装 Docker，请先安装 Docker Engine。"
fi

if ! docker info >/dev/null 2>&1; then
    fail "Docker 未运行，请先启动 Docker 服务。"
fi

if docker compose version >/dev/null 2>&1; then
    COMPOSE=(docker compose)
elif command -v docker-compose >/dev/null 2>&1; then
    COMPOSE=(docker-compose)
else
    fail "未检测到 Docker Compose，请安装 docker compose 插件。"
fi

ARCH="$(uname -m)"
echo "检测到系统架构: $ARCH"

APP_IMAGE="library_app_seeded.tar"
MYSQL_IMAGE="library_mysql_seeded.tar"
if [[ "$ARCH" == "aarch64" || "$ARCH" == "arm64" ]]; then
    APP_IMAGE="library_app_seeded_arm64.tar"
    MYSQL_IMAGE="library_mysql_seeded_arm64.tar"
fi

for image in "$APP_IMAGE" "$MYSQL_IMAGE"; do
    if [[ ! -f "$image" ]]; then
        fail "缺少镜像文件: $image"
    fi

    echo "加载镜像: $image"
    docker load -i "$image" >/dev/null
    echo "已加载: $image"
done

if [ ! -f "$ENV_FILE" ]; then
    cp .env.seeded.example "$ENV_FILE"
    echo "已创建 $ENV_FILE，请按需修改端口和密钥。"
fi

APP_PORT="${APP_PORT:-}"
if [ -z "$APP_PORT" ]; then
    APP_PORT="$(grep -E '^APP_PORT=' "$ENV_FILE" 2>/dev/null | tail -n 1 | cut -d '=' -f 2- | tr -d '\r\"' || true)"
fi
APP_PORT="${APP_PORT:-5000}"

echo "启动服务..."
"${COMPOSE[@]}" --env-file "$ENV_FILE" -f "$COMPOSE_FILE" -p "$PROJECT_NAME" up -d

echo "等待应用健康..."
for _ in $(seq 1 45); do
    STATUS="$(docker inspect -f '{{.State.Health.Status}}' "$APP_CONTAINER" 2>/dev/null || true)"
    if [ "$STATUS" = "healthy" ]; then
        break
    fi
    if [ "$STATUS" = "unhealthy" ]; then
        "${COMPOSE[@]}" --env-file "$ENV_FILE" -f "$COMPOSE_FILE" -p "$PROJECT_NAME" ps
        fail "应用健康检查失败，请查看日志: docker logs $APP_CONTAINER"
    fi
    sleep 2
done

if [ "${STATUS:-}" != "healthy" ]; then
    "${COMPOSE[@]}" --env-file "$ENV_FILE" -f "$COMPOSE_FILE" -p "$PROJECT_NAME" ps
    fail "应用等待超时，请查看日志: docker logs $APP_CONTAINER"
fi

"${COMPOSE[@]}" --env-file "$ENV_FILE" -f "$COMPOSE_FILE" -p "$PROJECT_NAME" ps

echo ""
echo "启动完成"
echo "访问地址: http://127.0.0.1:${APP_PORT}"
echo "管理员: admin / admin123"
echo "用户: user1 / user123"
echo ""
echo "重新初始化为镜像内置数据:"
echo "${COMPOSE[*]} --env-file $ENV_FILE -f $COMPOSE_FILE -p $PROJECT_NAME down -v"
echo "${COMPOSE[*]} --env-file $ENV_FILE -f $COMPOSE_FILE -p $PROJECT_NAME up -d"
