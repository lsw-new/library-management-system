# 图书馆管理系统 Docker 部署指南

## 📋 概述

本项目提供了完整的 Docker 部署方环境的一键部署。

## 🏗️ 架构组件

### 生产环境
- **Flask 应用**: 主要的 Web 应用服务
- **MySQL 8.0**: 数据库服务
- **Redis**: 缓存服务（可选）
- **Nginx**: 反向代理和静态文件服务

### 开发环境
- **Flask 应用**: 开发模式，支持热重载
- **MySQL 8.0**: 数据库服务

## 🚀 快速开始

### 1. 环境准备

确保已安装以下软件：
- Docker Desktop
- Docker Compose

### 2. 配置环境变量

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑环境变量文件
# 重要：修改生产环境的密钥和密码
```

### 3. 部署命令

#### Linux/macOS
```bash
# 开发环境
./deploy.sh dev

# 生产环境
./deploy.sh prod

# 停止服务
./deploy.sh stop

# 清理所有资源
./deploy.sh clean
```

#### Windows
```cmd
# 开发环境
deploy.bat dev

# 生产环境
deploy.bat prod

# 停止服务
deploy.bat stop

# 清理所有资源
deploy.bat clean
```

## 🔧 配置说明

### 环境变量配置

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `SECRET_KEY` | Flask 密钥 | 必须修改 |
| `MYSQL_ROOT_PASSWORD` | MySQL root 密码 | 必须修改 |
| `MYSQL_PASSWORD` | 应用数据库密码 | 必须修改 |
| `MAIL_USERNAME` | 邮件服务用户名 | 可选 |
| `MAIL_PASSWORD` | 邮件服务密码 | 可选 |

### 端口配置

#### 开发环境
- 应用: `http://localhost:5001`
- 数据库: `localhost:3307`

#### 生产环境
- 应用: `http://localhost:5000`
- Nginx: `http://localhost:80`
- 数据库: `localhost:3306`

## 📁 文件结构

```
docker/
├── mysql/
│   ├── init/           # 数据库初始化脚本
│   │   └── 01-init.sql
│   └── conf/           # MySQL 配置
│       └── my.cnf
└── nginx/
    ├── nginx.conf      # Nginx 主配置
    └── conf.d/         # 站点配置
        └── default.conf
```

## 🔍 常用操作

### 查看日志
```bash
# 开发环境
docker-compose -f docker-compose.dev.yml logs -f

# 生产环境
docker-compose logs -f

# 查看特定服务日志
docker-compose logs -f app
docker-compose logs -f mysql
```

### 进入容器
```bash
# 进入应用容器
docker exec -it library_app bash

# 进入数据库容器
docker exec -it library_mysql mysql -u root -p
```

### 数据备份
```bash
# 备份数据库
docker exec library_mysql mysqldump -u root -p library_db > backup.sql

# 恢复数据库
docker exec -i library_mysql mysql -u root -p library_db < backup.sql
```

## 🛠️ 故障排除

### 常见问题

1. **端口冲突**
   - 检查本地是否有服务占用相同端口
   - 修改 `.env` 文件中的端口配置

2. **数据库连接失败**
   - 检查 MySQL 容器是否正常启动
   - 验证数据库连接字符串配置

3. **权限问题**
   - 确保 Docker 有足够权限
   - 检查文件夹权限设置

### 日志查看
```bash
# 查看所有服务状态
docker-compose ps

# 查看详细日志
docker-compose logs --tail=100 -f
```

## 🔒 安全建议

1. **生产环境必须修改的配置**：
   - `SECRET_KEY`: 使用强随机密钥
   - `MYSQL_ROOT_PASSWORD`: 使用复杂密码
   - `MYSQL_PASSWORD`: 使用复杂密码

2. **网络安全**：
   - 生产环境建议使用 HTTPS
   - 配置防火墙规则
   - 定期更新镜像版本

3. **数据安全**：
   - 定期备份数据库
   - 配置数据卷持久化
   - 监控磁盘空间使用

## 📊 监控和维护

### 健康检查
所有服务都配置了健康检查，可以通过以下命令查看：
```bash
docker-compose ps
```

### 资源监控
```bash
# 查看容器资源使用情况
docker stats

# 查看磁盘使用情况
docker system df
```# 定期维护
```bash
# 清理未使用的镜像和容器
docker system prune -f

# 清理未使用的数据卷
docker volume prune -f
```

## 🆙 升级指南

1. **备份数据**
2. **停止服务**: `./deploy.sh stop`
3. **拉取最新代码**
4. **重新构建**: `./deploy.sh prod`
5. **验证服务**

## 📞 技术支持

如遇到问题，请检查：
1. Docker 和 Docker Compose 版本
2. 系统资源使用情况
3. 网络连接状态
4. 日志文件内容