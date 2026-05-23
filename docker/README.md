# 景艺大图书馆 - Docker 部署指南

## 目录结构

```
PythonProject/
├── Dockerfile                  # 镜像构建
├── docker-compose.yml          # 服务编排
├── .dockerignore               # 构建排除
├── docker/
│   ├── .env.example            # 环境变量模板
│   ├── mysql/
│   │   └── init.sql            # 数据库字符集初始化
│   ├── nginx/
│   │   └── nginx.conf          # Nginx 反向代理（可选）
│   └── docker_ios/
│       ├── deploy.sh           # Linux 服务器一键部署
│       ├── load_and_start.sh   # Linux/Mac 离线启动
│       └── load_and_start.ps1  # Windows 离线启动
├── requirements.txt
└── app.py
```

## 快速开始

### 1. 配置环境变量

```bash
cp docker/.env.example .env
# 编辑项目根目录的 .env，修改数据库密码和 SECRET_KEY
```

### 2. 启动服务

```bash
docker-compose up -d
```

### 3. 初始化数据库

首次启动后访问 **http://localhost:5000**，系统会自动跳转到初始化向导：
1. 点击「同步表结构」创建数据表
2. 点击「导入演示数据」创建默认账号和示例图书
3. 点击「进入主页面」开始使用

### 4. 默认账号

| 角色 | 用户名 | 密码 |
|------|--------|------|
| 管理员 | admin | admin123 |
| 普通用户 | user1 | 2021000000001 |

> 首次登录后请立即修改密码

## 服务架构

| 服务 | 镜像 | 端口 | 说明 |
|------|------|------|------|
| mysql | mysql:8.0 | 3306 | 数据库 |
| app | library_app:latest | 5000 | Flask 应用 (gunicorn) |
| nginx | nginx:alpine | 80 | 反向代理（可选，需 `--profile production`） |

## 环境变量

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `MYSQL_ROOT_PASSWORD` | MySQL root 密码 | root123456 |
| `MYSQL_DATABASE` | 数据库名 | library_db |
| `MYSQL_USER` | 数据库用户 | library_user |
| `MYSQL_PASSWORD` | 数据库密码 | library_pass |
| `SECRET_KEY` | Flask 会话密钥 | change-me-in-production |
| `SMTP_SENDER_EMAIL` | 发件邮箱（可选） | - |
| `SMTP_SENDER_PASSWORD` | 邮箱授权码（可选） | - |
| `APP_PORT` | 应用端口 | 5000 |

## 常用命令

```bash
# 启动
docker-compose up -d

# 停止
docker-compose down

# 查看日志
docker-compose logs -f app

# 重建镜像
docker-compose up -d --build

# 启用 Nginx 反向代理
docker-compose --profile production up -d

# 备份数据库
docker-compose exec mysql mysqldump -u root -p library_db > backup.sql

# 清除所有数据（慎用）
docker-compose down -v
```

## 离线部署

在有网络的机器上构建并导出镜像：

```bash
# 构建应用镜像
docker-compose build

# 导出镜像
docker save library_app:latest -o docker/docker_ios/library_app.tar
docker save mysql:8.0 -o docker/docker_ios/mysql_8.0.tar
```

将 `docker_ios/` 目录和项目文件复制到目标服务器，运行：

```bash
# Linux
sudo bash docker/docker_ios/deploy.sh

# Windows
.\docker\docker_ios\load_and_start.ps1
```

## 数据持久化

| 卷 | 容器路径 | 说明 |
|----|----------|------|
| mysql_data | /var/lib/mysql | 数据库文件 |
| app_images | /app/static/images | 上传的图片 |
| app_logs | /app/static/logs | 应用日志 |

## 生产部署建议

1. **修改所有默认密码**（数据库、SECRET_KEY）
2. **启用 Nginx**：`docker-compose --profile production up -d`
3. **限制 MySQL 端口**：将 `3306:3306` 改为 `127.0.0.1:3306:3306`
4. **配置防火墙**：仅开放 80/443
5. **定期备份数据库**
6. **配置邮件**：设置 `SMTP_SENDER_EMAIL` 和 `SMTP_SENDER_PASSWORD` 以启用验证码功能
