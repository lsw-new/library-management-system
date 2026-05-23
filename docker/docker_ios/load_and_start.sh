#!/bin/bash
# 景艺大图书馆 - Docker 快速启动 (Linux/Mac)

set -e

echo "========================================"
echo "  景艺大图书馆 - Docker 快速启动"
echo "========================================"
echo ""

# 1. 检查 Docker
echo "[1/4] 检查 Docker..."
if ! docker version &> /dev/null; then
    echo "  ✗ Docker 未运行，请先启动 Docker"
    exit 1
fi
echo "  ✓ Docker 正常运行"
echo ""

# 2. 加载镜像
echo "[2/4] 加载镜像..."
for tar in library_app.tar mysql_8.0.tar; do
    if [ -f "$tar" ]; then
        echo "  → 加载 $tar..."
        docker load -i "$tar" > /dev/null
        echo "  ✓ 加载成功"
    else
        echo "  ✗ 找不到 $tar"
        exit 1
    fi
done
echo ""

# 3. 环境变量
echo "[3/4] 配置环境..."
cd "$(dirname "$0")/.."
if [ ! -f "../.env" ]; then
    cp .env.example ../.env
    echo "  ✓ 根目录 .env 已创建"
else
    echo "  ✓ 根目录 .env 已存在"
fi
echo ""

# 4. 启动
echo "[4/4] 启动服务..."
cd "$(dirname "$0")/../.."
docker-compose up -d

echo "  等待服务就绪..."
sleep 15

echo ""
docker-compose ps

echo ""
echo "========================================"
echo "  部署完成！"
echo "========================================"
echo ""
echo "访问地址:  http://localhost:5000"
echo ""
echo "首次使用请访问初始化页面完成数据库配置"
echo "  管理员默认账号: admin / admin123"
echo ""
echo "常用命令:"
echo "  查看日志:  docker-compose logs -f app"
echo "  停止服务:  docker-compose down"
echo "  重启服务:  docker-compose restart"
echo ""
