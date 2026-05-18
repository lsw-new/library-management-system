# 图书管理系统 - Docker 镜像快速启动脚本 (Windows)
# 自动加载镜像并启动服务

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  图书管理系统 - Docker 快速启动" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 设置错误处理
$ErrorActionPreference = "Stop"

# 检查 Docker 是否运行
Write-Host "[1/4] 检查 Docker 服务..." -ForegroundColor Yellow
try {
    docker version | Out-Null
    Write-Host "✓ Docker 服务正常运行" -ForegroundColor Green
} catch {
    Write-Host "✗ Docker 服务未运行，请先启动 Docker Desktop" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit 1
}

Write-Host ""

# 加载镜像
Write-Host "[2/4] 加载 Docker 镜像..." -ForegroundColor Yellow

$images = @(
    @{Name="library_web.tar"; Tag="library_web:latest"},
    @{Name="mysql_8.0.tar"; Tag="mysql:8.0"},
    @{Name="nginx_alpine.tar"; Tag="nginx:alpine"}
)

foreach ($img in $images) {
    if (Test-Path $img.Name) {
        Write-Host "  → 加载 $($img.Name)..." -ForegroundColor Gray
        docker load -i $img.Name | Out-Null
        Write-Host "  ✓ $($img.Tag) 加载成功" -ForegroundColor Green
    } else {
        Write-Host "  ✗ 文件不存在: $($img.Name)" -ForegroundColor Red
        Read-Host "按回车键退出"
        exit 1
    }
}

Write-Host ""

# 验证镜像
Write-Host "[3/4] 验证镜像..." -ForegroundColor Yellow
$loadedImages = docker images --format "{{.Repository}}:{{.Tag}}" | Select-String -Pattern "library_web|mysql:8.0|nginx:alpine"
if ($loadedImages.Count -ge 3) {
    Write-Host "✓ 所有镜像加载成功" -ForegroundColor Green
} else {
    Write-Host "✗ 镜像加载不完整" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit 1
}

Write-Host ""

# 启动服务
Write-Host "[4/4] 启动服务..." -ForegroundColor Yellow

# 检查配置文件
if (-not (Test-Path "docker-compose.yml")) {
    Write-Host "✗ 找不到 docker-compose.yml 文件" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit 1
}

# 创建 .env 文件（如果不存在）
if (-not (Test-Path ".env")) {
    Write-Host "  创建环境变量文件..." -ForegroundColor Gray
    Copy-Item ".env.example" ".env"
}

# 检查是否已有运行的容器
$runningContainers = docker-compose ps -q
if ($runningContainers) {
    Write-Host "  检测到已运行的容器，正在重启..." -ForegroundColor Gray
    docker-compose restart | Out-Null
} else {
    Write-Host "  正在启动所有服务..." -ForegroundColor Gray
    docker-compose up -d | Out-Null
}

# 等待服务启动
Write-Host "  等待服务启动..." -ForegroundColor Gray
Start-Sleep -Seconds 10

# 检查服务状态
$services = docker-compose ps --format json | ConvertFrom-Json
$allHealthy = $true

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  服务状态" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan

foreach ($service in $services) {
    $status = $service.State
    $name = $service.Service

    if ($status -eq "running") {
        Write-Host "✓ $name : 运行中" -ForegroundColor Green
    } else {
        Write-Host "✗ $name : $status" -ForegroundColor Red
        $allHealthy = $false
    }
}

Write-Host ""

if ($allHealthy) {
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  🎉 部署成功！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "访问地址：" -ForegroundColor Cyan
    Write-Host "  主页:         http://localhost" -ForegroundColor White
    Write-Host "  用户登录:     http://localhost/login" -ForegroundColor White
    Write-Host "  管理员登录:   http://localhost/admin/login" -ForegroundColor White
    Write-Host "  健康检查:     http://localhost:5000/health" -ForegroundColor White
    Write-Host ""
    Write-Host "默认管理员账号：" -ForegroundColor Cyan
    Write-Host "  用户名: admin" -ForegroundColor White
    Write-Host "  密码:   admin123" -ForegroundColor White
    Write-Host ""
    Write-Host "常用命令：" -ForegroundColor Cyan
    Write-Host "  查看日志:   docker-compose logs -f" -ForegroundColor White
    Write-Host "  停止服务:   docker-compose down" -ForegroundColor White
    Write-Host "  重启服务:   docker-compose restart" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  ⚠ 部分服务启动失败" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "请运行以下命令查看详细日志：" -ForegroundColor Yellow
    Write-Host "  docker-compose logs -f" -ForegroundColor White
    Write-Host ""
}

Read-Host "按回车键退出"
