#!/bin/sh
set -e

cd "$(dirname "$0")"

echo "========================================"
echo "  景艺大图书馆 - 已导入数据镜像启动"
echo "========================================"
echo ""

if ! docker version >/dev/null 2>&1; then
    echo "Docker 未运行，请先启动 Docker。"
    exit 1
fi

for image in library_app_seeded.tar library_mysql_seeded.tar; do
    if [ ! -f "$image" ]; then
        echo "缺少镜像文件: $image"
        exit 1
    fi
    echo "加载镜像: $image"
    docker load -i "$image" >/dev/null
    echo "已加载: $image"
done

if [ ! -f ".env.seeded" ]; then
    cp .env.seeded.example .env.seeded
    echo "已创建 .env.seeded，请按需修改端口和密钥。"
fi

echo "启动服务..."
docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded up -d

echo "等待服务就绪..."
sleep 20

docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded ps

echo ""
echo "启动完成"
echo "访问地址: http://127.0.0.1:5000"
echo "管理员: admin / admin123"
echo "用户: user1 / user123"
echo ""
echo "如需重新初始化为镜像内置数据，请先执行:"
echo "docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded down -v"
echo ""
