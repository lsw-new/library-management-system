# 景艺大图书馆 - 使用已导入数据的镜像直接启动

$ErrorActionPreference = "Stop"
[Console]::OutputEncoding = [Text.Encoding]::UTF8

$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  景艺大图书馆 - 已导入数据镜像启动" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

try {
    docker version | Out-Null
} catch {
    Write-Host "Docker 未运行，请先启动 Docker Desktop。" -ForegroundColor Red
    Read-Host "按回车键退出"
    exit 1
}

$images = @(
    @{ File = "library_app_seeded.tar"; Name = "library_app:latest" },
    @{ File = "library_mysql_seeded.tar"; Name = "library_mysql_seeded:latest" }
)

foreach ($image in $images) {
    if (-not (Test-Path $image.File)) {
        Write-Host "缺少镜像文件: $($image.File)" -ForegroundColor Red
        Read-Host "按回车键退出"
        exit 1
    }

    Write-Host "加载镜像: $($image.File)" -ForegroundColor Yellow
    docker load -i $image.File | Out-Null
    Write-Host "已加载: $($image.Name)" -ForegroundColor Green
}

if (-not (Test-Path ".env.seeded")) {
    Copy-Item ".env.seeded.example" ".env.seeded"
    Write-Host "已创建 .env.seeded，请按需修改端口和密钥。" -ForegroundColor Yellow
}

Write-Host "启动服务..." -ForegroundColor Yellow
docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded up -d

Write-Host "等待服务就绪..." -ForegroundColor Yellow
Start-Sleep -Seconds 20

docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded ps

Write-Host ""
Write-Host "启动完成" -ForegroundColor Green
Write-Host "访问地址: http://127.0.0.1:5000" -ForegroundColor Cyan
Write-Host "管理员: admin / admin123" -ForegroundColor Cyan
Write-Host "用户: user1 / user123" -ForegroundColor Cyan
Write-Host ""
Write-Host "如需重新初始化为镜像内置数据，请先执行:" -ForegroundColor Yellow
Write-Host "docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded down -v" -ForegroundColor White
Write-Host ""

Read-Host "按回车键退出"
