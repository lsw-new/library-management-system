#!/bin/bash
# 景艺大图书馆 - Ubuntu 服务器一键部署脚本

set -e

echo "========================================"
echo "  景艺大图书馆 - 服务器部署"
echo "========================================"
echo ""

if [ "$EUID" -ne 0 ]; then
    echo "请使用 root 权限运行: sudo bash deploy.sh"
    exit 1
fi

# 1. Docker
echo "[1/5] 检查 Docker..."
if ! command -v docker &> /dev/null; then
    echo "  正在安装 Docker..."
    apt-get update && apt-get install -y docker.io docker-compose
    systemctl start docker && systemctl enable docker
    echo "  ✓ Docker 安装完成"
else
    echo "  ✓ Docker 已安装"
fi

echo ""

# 2. 加载镜像
echo "[2/5] 加载 Docker 镜像..."
for tar in library_app.tar mysql_8.0.tar; do
    if [ -f "$tar" ]; then
        echo "  → 加载 $tar..."
        docker load -i "$tar"
        echo "  ✓ 加载成功"
    else
        echo "  ✗ 找不到 $tar"
        exit 1
    fi
done

echo ""

# 3. 环境变量
echo "[3/5] 配置环境..."
cd "$(dirname "$0")/.."
if [ ! -f "../.env" ]; then
    cp .env.example ../.env
    echo "  ✓ 根目录 .env 已创建（请编辑修改密码和密钥）"
else
    echo "  ✓ 根目录 .env 已存在"
fi

echo ""

# 4. 启动
echo "[4/5] 启动服务..."
cd "$(dirname "$0")/../.."
docker-compose up -d

echo ""
echo "  等待服务就绪..."
sleep 15

# 5. 状态
echo "[5/5] 检查服务状态..."
echo ""
docker-compose ps

echo ""
echo "========================================"
echo "  部署完成！"
echo "========================================"
echo ""
echo "访问地址:  http://$(hostname -I | awk '{print $1}'):5000"
echo ""
echo "首次使用请访问初始化页面完成数据库配置"
echo "  管理员默认账号: admin / admin123"
echo ""
echo "常用命令："
echo "  查看日志:  docker-compose logs -f app"
echo "  停止服务:  docker-compose down"
echo "  重启服务:  docker-compose restart"
echo ""
