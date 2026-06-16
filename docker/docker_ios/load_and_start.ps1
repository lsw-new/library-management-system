# 景艺大图书馆 - Docker 快速启动 (Windows)

$ErrorActionPreference = "Stop"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  景艺大图书馆 - Docker 快速启动" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. 检查 Docker
Write-Host "[1/4] 检查 Docker..." -ForegroundColor Yellow
try {
    docker version | Out-Null
    Write-Host "  ✓ Docker 正常运行" -ForegroundColor Green
} catch {
    Write-Host "  ✗ Docker 未运行，请先启动 Docker Desktop" -ForegroundColor Red
    Read-Host "按回车键退出"; exit 1
}
Write-Host ""

# 2. 加载镜像
Write-Host "[2/4] 加载镜像..." -ForegroundColor Yellow
$images = @("library_web.tar", "mysql_8.0.tar")

foreach ($tar in $images) {
    if (Test-Path $tar) {
        Write-Host "  → 加载 $tar..." -ForegroundColor Gray
        docker load -i $tar | Out-Null
        Write-Host "  ✓ 加载成功" -ForegroundColor Green
    } else {
        Write-Host "  ✗ 找不到 $tar" -ForegroundColor Red
        Read-Host "按回车键退出"; exit 1
    }
}
Write-Host ""

# 3. 环境变量
Write-Host "[3/4] 配置环境..." -ForegroundColor Yellow
Set-Location "$PSScriptRoot\.."
if (-not (Test-Path "..\.env")) {
    Copy-Item ".env.example" "..\.env"
    Write-Host "  ✓ 根目录 .env 已创建" -ForegroundColor Green
} else {
    Write-Host "  ✓ 根目录 .env 已存在" -ForegroundColor Green
}
Write-Host ""

# 4. 启动
Write-Host "[4/4] 启动服务..." -ForegroundColor Yellow
Set-Location "$PSScriptRoot\..\.."
docker-compose up -d

Write-Host "  等待服务就绪..." -ForegroundColor Gray
Start-Sleep -Seconds 15

Write-Host ""
docker-compose ps

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "  部署完成！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "访问地址:  http://localhost:5000" -ForegroundColor White
Write-Host ""
Write-Host "首次使用请访问初始化页面完成数据库配置" -ForegroundColor Cyan
Write-Host "  管理员默认账号: admin / admin123" -ForegroundColor White
Write-Host ""
Write-Host "常用命令:" -ForegroundColor Cyan
Write-Host "  查看日志:  docker-compose logs -f app" -ForegroundColor White
Write-Host "  停止服务:  docker-compose down" -ForegroundColor White
Write-Host "  重启服务:  docker-compose restart" -ForegroundColor White
Write-Host ""

Read-Host "按回车键退出"
