@echo off
REM 图书馆管理系统 Docker 部署脚本 (Windows版本)
REM 使用方法: deploy.bat [dev|prod|stop|clean]

setlocal enabledelayedexpansion

REM 设置颜色
set "RED=[91m"
set "GREEN=[92m"
set "YELLOW=[93m"
set "BLUE=[94m"
set "NC=[0m"

REM 检查参数
if "%1"=="" goto :show_help
if "%1"=="help" goto :show_help

REM 检查 Docker 和 Docker Compose
call :check_requirements
if errorlevel 1 exit /b 1

REM 根据参数执行相应操作
if "%1"=="dev" goto :deploy_dev
if "%1"=="prod" goto :deploy_prod
if "%1"=="stop" goto :stop_services
if "%1"=="clean" goto :clean_all
goto :show_help

:check_requirements
echo %BLUE%[INFO]%NC% 检查系统要求...
docker --version >nul 2>&1
if errorlevel 1 (
    echo %RED%[ERROR]%NC% Docker 未安装，请先安装 Docker Desktop
    exit /b 1
)

docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo %RED%[ERROR]%NC% Docker Compose 未安装，请先安装 Docker Compose
    exit /b 1
)

echo %GREEN%[SUCCESS]%NC% 系统要求检查通过
exit /b 0

:setup_env
if not exist .env (
    echo %BLUE%[INFO]%NC% 创建环境变量文件...
    copy .env.example .env >nul
    echo %YELLOW%[WARNING]%NC% 请编辑 .env 文件，配置生产环境的密钥和密码
    echo %YELLOW%[WARNING]%NC% 特别注意修改以下配置：
    echo   - SECRET_KEY
    echo   - MYSQL_ROOT_PASSWORD
    echo   - MYSQL_PASSWORD
    echo   - MAIL_USERNAME 和 MAIL_PASSWORD
)
exit /b 0

:deploy_dev
echo %BLUE%[INFO]%NC% 启动开发环境...

REM 构建并启动服务
docker-compose -f docker-compose.dev.yml up --build -d

REM 等待服务启动
echo %BLUE%[INFO]%NC% 等待服务启动...
timeout /t 10 /nobreak >nul

REM 检查服务状态
docker-compose -f docker-compose.dev.yml ps | findstr "Up" >nul
if errorlevel 1 (
    echo %RED%[ERROR]%NC% 开发环境启动失败，请检查日志
    docker-compose -f docker-compose.dev.yml logs
    exit /b 1
) else (
    echo %GREEN%[SUCCESS]%NC% 开发环境启动成功！
    echo.
    echo 访问地址：
    echo   应用: http://localhost:5001
    echo   数据库: localhost:3307
    echo.
    echo 查看日志: docker-compose -f docker-compose.dev.yml logs -f
)
exit /b 0

:deploy_prod
echo %BLUE%[INFO]%NC% 启动生产环境...

REM 检查环境变量文件
call :setup_env

REM 构建并启动服务
docker-compose up --build -d

REM 等待服务启动
echo %BLUE%[INFO]%NC% 等待服务启动...
timeout /t 15 /nobreak >nul

REM 检查服务状态
docker-compose ps | findstr "Up" >nul
if errorlevel 1 (
    echo %RED%[ERROR]%NC% 生产环境启动失败，请检查日志
    docker-compose logs//localhost
    echo.
    echo 查看日志: docker-compose logs -f
)
exit /b 0

:stop_services
echo %BLUE%[INFO]%NC% 停止所有服务...

REM 停止开发环境
if exist docker-compose.dev.yml (
    docker-compose -f docker-compose.dev.yml down >nul 2>&1
)

REM 停止生产环境
if exist docker-compose.yml (
    docker-compose down >nul 2>&1
)

echo %GREEN%[SUCCESS]%NC% 所有服务已停止
exit /b 0

:clean_all
echo %YELLOW%[WARNING]%NC% 这将删除所有容器、镜像和数据卷，确定要继续吗？(y/N)
set /p response=
if /i not "%response%"=="y" (
    echo %BLUE%[INFO]%NC% 取消清理操作
    exit /b 0
)

echo %BLUE%[INFO]%NC% 清理所有资源...

REM 停止并删除容器
docker-compose -f docker-compose.dev.yml down -v --remove-hans >nul 2>&1
docker-compose down -v --remove-orphans >nul 2>&1

REM 删除镜像
for /f "tokens=*" %%i in ('docker

:show_help
echo 图书馆管理系统 Docker 部署脚本
echo.
echo 使用方法：
echo   %0 dev     - 启动开发环境
echo   %0 prod    - 启动生产环境
echo   %0 stop    - 停止所有服务
echo   %0 clean   - 清理所有资源
echo   %0 help    - 显示帮助信息
echo.
echo 开发环境端口：
echo   应用: 5001
echo   数据库: 3307
echo.
echo 生产环境端口：
echo   应用: 5000
echo   Nginx: 80, 443
echo   数据库: 3306
exit /b 0