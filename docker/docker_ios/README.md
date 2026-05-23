# 景艺大图书馆 - Docker 离线部署指南

本目录用于在无网络或弱网络环境中快速部署项目。

## 镜像文件

| 文件名 | 说明 |
|--------|------|
| `library_app.tar` | Flask 应用镜像 |
| `mysql_8.0.tar` | MySQL 8.0 数据库镜像 |

> 默认离线启动只运行 `app + mysql`。如需 Nginx 反向代理，可另外准备 `nginx:alpine` 镜像并使用 production profile。

## 在有网络的机器上导出镜像

在项目根目录执行：

```bash
docker-compose build
docker save library_app:latest -o docker/docker_ios/library_app.tar
docker save mysql:8.0 -o docker/docker_ios/mysql_8.0.tar
```

## Windows 快速启动

```powershell
cd C:\path\to\PythonProject\docker\docker_ios
.\load_and_start.ps1
```

脚本会自动：
1. 检查 Docker Desktop
2. 加载 `library_app.tar` 和 `mysql_8.0.tar`
3. 从 `docker/.env.example` 创建根目录 `.env`
4. 执行 `docker-compose up -d`

## Linux / Mac 快速启动

```bash
cd /path/to/PythonProject/docker/docker_ios
chmod +x load_and_start.sh
./load_and_start.sh
```

## Ubuntu 服务器部署

```bash
sudo bash docker/docker_ios/deploy.sh
```

## 手动部署

```bash
cd docker/docker_ios
docker load -i library_app.tar
docker load -i mysql_8.0.tar

cd ../..
cp docker/.env.example .env
# 编辑 .env 后启动
docker-compose up -d
```

## 访问地址

- 应用首页：http://localhost:5000
- 管理员登录：http://localhost:5000/admin/login
- 健康检查：http://localhost:5000/health

首次进入系统后，根据初始化向导同步表结构并导入演示数据。

## 默认账号

| 角色 | 用户名 | 密码 |
|------|--------|------|
| 管理员 | admin | admin123 |
| 普通用户 | user1 | 2021000000001 |

## 常用命令

```bash
# 状态
docker-compose ps

# 日志
docker-compose logs -f app

# 重启
docker-compose restart

# 停止
docker-compose down

# 删除所有数据（慎用）
docker-compose down -v
```

## 更新镜像

```bash
# 在有网络/源码的机器上重建
docker-compose build --no-cache

# 重新导出
docker save library_app:latest -o docker/docker_ios/library_app.tar
docker save mysql:8.0 -o docker/docker_ios/mysql_8.0.tar
```

## 常见问题

### 端口被占用

修改根目录 `.env`：

```env
APP_PORT=5001
MYSQL_PORT=3307
```

然后重启：

```bash
docker-compose up -d
```

### 数据库连接失败

```bash
docker-compose logs -f mysql
docker-compose logs -f app
```

确认 `.env` 中的 `MYSQL_USER`、`MYSQL_PASSWORD` 未被改错。
