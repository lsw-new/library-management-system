#!/bin/bash
# 图书管理系统 - Docker 镜像快速启动脚本 (Linux/Mac)
# 自动加载镜像并启动服务

echo "========================================"
echo "  图书管理系统 - Docker 快速启动"
echo "========================================"
echo ""

# 设置错误处理
set -e

# 检查 Docker 是否运行
echo "[1/4] 检查 Docker 服务..."
if ! docker version &> /dev/null; then
    echo "✗ Docker 服务未运行，请先启动 Docker"
    exit 1
fi
echo "✓ Docker 服务正常运行"
echo ""

# 加载镜像
echo "[2/4] 加载 Docker 镜像..."

images=(
    "library_web.tar:library_web:latest"
    "mysql_8.0.tar:mysql:8.0"
    "nginx_alpine.tar:nginx:alpine"
)

for img in "${images[@]}"; do
    IFS=':' read -r file tag <<< "$img"
    if [ -f "$file" ]; then
        echo "  → 加载 $file..."
        docker load -i "$file" > /dev/null
        echo "  ✓ $tag 加载成功"
    else
        echo "  ✗ 文件不存在: $file"
        exit 1
    fi
done

echo ""

# 验证镜像
echo "[3/4] 验证镜像..."
loaded_count=$(docker images | grep -E "library_web|mysql.*8.0|nginx.*alpine" | wc -l)
if [ "$loaded_count" -ge 3 ]; then
    echo "✓ 所有镜像加载成功"
else
    echo "✗ 镜像加载不完整"
    exit 1
fi

echo ""

# 启动服务
echo "[4/4] 启动服务..."
cd ..

# 检查是否已有运行的容器
if docker-compose ps -q | grep -q .; then
    echo "  检测到已运行的容器，正在重启..."
    docker-compose restart > /dev/null
else
    echo "  正在启动所有服务..."
    docker-compose up -d > /dev/null
fi

# 等待服务启动
echo "  等待服务启动..."
sleep 10

# 检查服务状态
echo ""
echo "========================================"
echo "  服务状态"
echo "========================================"

all_healthy=true
while IFS= read -r line; do
    if echo "$line" | grep -q "Up"; then
        service=$(echo "$line" | awk '{print $1}')
        echo "✓ $service : 运行中"
    else
        service=$(echo "$line" | awk '{print $1}')
        status=$(echo "$line" | awk '{print $2}')
        echo "✗ $service : $status"
        all_healthy=false
    fi
done < <(docker-compose ps --format "table {{.Name}}\t{{.Status}}" | tail -n +2)

echo ""

if [ "$all_healthy" = true ]; then
    echo "========================================"
    echo "  🎉 部署成功！"
    echo "========================================"
    echo ""
    echo "访问地址："
    echo "  主页:         http://localhost"
    echo "  用户登录:     http://localhost/login"
    echo "  管理员登录:   http://localhost/admin/login"
    echo "  健康检查:     http://localhost:5000/health"
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
else
    echo "========================================"
    echo "  ⚠ 部分服务启动失败"
    echo "========================================"
    echo ""
    echo "请运行以下命令查看详细日志："
    echo "  docker-compose logs -f"
    echo ""
fi
