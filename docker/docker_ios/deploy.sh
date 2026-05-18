#!/bin/bash
# 图书管理系统 - Ubuntu 服务器一键部署脚本

echo "========================================"
echo "  图书管理系统 - 服务器部署"
echo "========================================"
echo ""

# 检查是否为 root 用户
if [ "$EUID" -ne 0 ]; then
    echo "请使用 root 权限运行此脚本"
    echo "使用命令: sudo bash deploy.sh"
    exit 1
fi

# 1. 检查 Docker 是否安装
echo "[1/5] 检查 Docker..."
if ! command -v docker &> /dev/null; then
    echo "✗ Docker 未安装，正在安装..."
    apt-get update
    apt-get install -y docker.io
    systemctl start docker
    systemctl enable docker
    echo "✓ Docker 安装完成"
else
    echo "✓ Docker 已安装"
fi

echo ""

# 2. 安装 Docker Compose
echo "[2/5] 检查 Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    echo "正在安装 Docker Compose..."
    apt-get install -y docker-compose
    echo "✓ Docker Compose 安装完成"
else
    echo "✓ Docker Compose 已安装"
fi

echo ""

# 3. 加载镜像
echo "[3/5] 加载 Docker 镜像..."
if [ -f "library_web.tar" ]; then
    echo "  → 加载 library_web.tar..."
    docker load -i library_web.tar
    echo "  ✓ library_web:latest 加载成功"
else
    echo "  ✗ 找不到 library_web.tar"
    exit 1
fi

if [ -f "mysql_8.0.tar" ]; then
    echo "  → 加载 mysql_8.0.tar..."
    docker load -i mysql_8.0.tar
    echo "  ✓ mysql:8.0 加载成功"
else
    echo "  ✗ 找不到 mysql_8.0.tar"
    exit 1
fi

if [ -f "nginx_alpine.tar" ]; then
    echo "  → 加载 nginx_alpine.tar..."
    docker load -i nginx_alpine.tar
    echo "  ✓ nginx:alpine 加载成功"
else
    echo "  ✗ 找不到 nginx_alpine.tar"
    exit 1
fi

echo ""

# 4. 配置环境变量
echo "[4/5] 配置环境..."
if [ ! -f ".env" ]; then
    echo "  创建环境变量文件..."
    cp .env.example .env
    echo "  ✓ .env 文件已创建"
fi

echo ""

# 5. 启动服务
echo "[5/5] 启动服务..."
docker-compose up -d

echo ""
echo "等待服务启动..."
sleep 15

# 检查服务状态
echo ""
echo "========================================"
echo "  服务状态"
echo "========================================"
docker-compose ps

echo ""
echo "========================================"
echo "  🎉 部署完成！"
echo "========================================"
echo ""
echo "访问地址："
echo "  主页:         http://$(curl -s ifconfig.me)"
echo "  用户登录:     http://$(curl -s ifconfig.me)/login"
echo "  管理员登录:   http://$(curl -s ifconfig.me)/admin/login"
echo ""
echo "默认管理员账号："
echo "  用户名: admin"
echo "  密码:   admin123"
echo ""
echo "常用命令："
echo "  查看日志:   docker-compose logs -f"
echo "  停止服务:   docker-compose down"
echo "  重启服务:   docker-compose restart"
echo ""
echo "⚠️  安全提示："
echo "  1. 请立即修改默认管理员密码"
echo "  2. 建议修改 .env 文件中的数据库密码"
echo "  3. 配置防火墙规则，仅开放必要端口"
echo ""
