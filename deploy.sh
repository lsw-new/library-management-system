#!/bin/bash

# 图书馆管理系统 Docker 部署脚本
# 使用方法: ./deploy.sh [dev|prod|stop|clean]

set -e

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 日志函数
log_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 检查 Docker 和 Docker Compose
check_requirements() {
    log_info "检查系统要求..."

    if ! command -v docker &> /dev/null; then
        log_error "Docker 未安装，请先安装 Docker"
        exit 1
    fi

    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose 未安装，请先安装 Docker Compose"
        exit 1
    fi

    log_success "系统要求检查通过"
}

# 创建环境变量文件
setup_env() {
    if [ ! -f .env ]; then
        log_info "创建环境变量文件..."
        cp .env.example .env
        log_warning "请编辑 .env 文件，配置生产环境的密钥和密码"
        log_warning "特别注意修改以下配置："
        echo "  - SECRET_KEY"
        echo "  - MYSQL_ROOT_PASSWORD"
        echo "  - MYSQL_PASSWORD"
        echo "  - MAIL_USERNAME 和 MAIL_PASSWORD"
    fi
}

# 开发环境部署
deploy_dev() {
    log_info "启动开发环境..."

    # 构建并启动服务
    docker-compose -f docker-compose.dev.yml up --build -d

    # 等待服务启动
    log_info "等待服务启动..."
    sleep 10

    # 检查服务状态
    if docker-compose -f docker-compose.dev.yml ps | grep -q "Up"; then
        log_success "开发环境启动成功！"
        echo ""
        echo "访问地址："
        echo "  应用: http://localhost:5001"
        echo "  数据库: localhost:3307"
        echo ""
        echo "查看日志: docker-compose -f docker-compose.dev.yml logs -f"
    else
        log_error "开发环境启动失败，请检查日志"
        docker-compose -f docker-compose.dev.yml logs
        exit 1
    fi
}

# 生产环境部署
deploy_prod() {
    log_info "启动生产环境..."

    # 检查环境变量文件
    setup_env

    # 构建并启动服务
    docker-compose up --build -d

    # 等待服务启动
    log_info "等待服务启动..."
    sleep 15

    # 检查服务状态
    if docker-compose ps | grep -q "Up"; then
        log_success "生产环境启动成功！"
        echo ""
        echo "访问地址："
        echo "  应用: http://localhost"
        echo "  如果配置了 Nginx: http://localhost:80"
        echo ""
        echo "查看日志: docker-compose logs -f"
    else
        log_error "生产环境启动失败，请检查日志"
        docker-compose logs
        exit 1
    fi
}

# 停止服务
stop_services() {
    log_info "停止所有服务..."

    # 停止开发环境
    if [ -f docker-compose.dev.yml ]; then
        docker-compose -f docker-compose.dev.yml down
    fi

    # 停止生产环境
    if [ -f docker-compose.yml ]; then
        docker-compose down
    fi

    log_success "所有服务已停止"
}

# 清理资源
clean_all() {
    log_warning "这将删除所有容器、镜像和数据卷，确定要继续吗？(y/N)"
    read -r response

    if [[ "$response" =~ ^[Yy]$ ]]; then
        log_info "清理所有资源..."

        # 停止并删除容器
        docker-compose -f docker-compose.dev.yml down -v --remove-orphans 2>/dev/null || true
        docker-compose down -v --remove-orphans 2>/dev/null || true

        # 删除镜像
        docker rmi $(docker io "使用方法:"
    echo "  $0 dev     - 启动开发环境"
    echo "  $0 prod    - 启动生产环境"
    echo "  $0 stop    - 停止所有服务"
    echo "  $0 clean   - 清理所有资源"
    echo "  $0 help    - 显示帮助信息"
    echo ""
    echo "开发环境端口:"
    echo "  应用: 5001"
    echo "  数据库: 3307"
    echo ""
    echo "生产环境端口:"
    echo "  应用: 5000"
    echo "  Nginx: 80, 443"
    echo "  数据库: 3306"
}

# 主函数
main() {
    case "${1:-help}" in
        "dev")
            check_requirements
            deploy_dev
            ;;
        "prod")
            check_requirements
            deploy_        stop_services
            ;;
        "clean")
            clean_all
            ;;
        "help"|*)
            show_help
            ;;
    esac
}

# 执行主函数
main "$@"