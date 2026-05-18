# 图书管理系统 - Docker 部署指南

## 📋 目录结构

```
PythonProject/
├── docker/
│   ├── docker-compose.yml      # Docker Compose 配置文件
│   ├── .env.example            # 环境变量示例文件
│   ├── nginx/
│   │   └── nginx.conf          # Nginx 配置文件
│   └── mysql/
│       └── init.sql            # MySQL 初始化脚本
├── Dockerfile                  # Docker 镜像构建文件
├── requirements.txt            # Python 依赖
└── app.py                      # Flask 应用入口
```

## 🚀 快速开始

### 1. 环境准备

确保已安装以下软件：
- Docker (>= 20.10)
- Docker Compose (>= 2.0)

### 2. 配置环境变量

```bash
cd docker
cp .env.example .env
# 编辑 .env 文件，修改敏感信息（特别是 SECRET_KEY 和数据库密码）
```

### 3. 启动服务

```bash
# 在 docker 目录下执行
docker-compose up -d
```

### 4. 查看服务状态

```bash
docker-compose ps
docker-compose logs -f web
```

### 5. 访问应用

- **Web 应用**: http://localhost:5000
- **Nginx 代理**: http://localhost:80
- **MySQL 数据库**: localhost:3306

### 6. 默认账号

**管理员账号**：
- 用户名: `admin`
- 密码: `admin123`

**注意**: 首次登录后请立即修改密码！

## 🛠️ 常用命令

### 启动服务
```bash
docker-compose up -d
```

### 停止服务
```bash
docker-compose down
```

### 重启服务
```bash
docker-compose restart
```

### 查看日志
```bash
# 查看所有服务日志
docker-compose logs -f

# 查看特定服务日志
docker-compose logs -f web
docker-compose logs -f mysql
docker-compose logs -f nginx
```

### 进入容器
```bash
# 进入 Web 容器
docker-compose exec web bash

# 进入 MySQL 容器
docker-compose exec mysql bash
```

### 数据库操作
```bash
# 连接 MySQL
docker-compose exec mysql mysql -uroot -proot123456 library_db

# 备份数据库
docker-compose exec mysql mysqldump -uroot -proot123456 library_db > backup.sql

# 恢复数据库
docker-compose exec -T mysql mysql -uroot -proot123456 library_db < backup.sql
```

### 清理数据
```bash
# 停止并删除容器、网络
docker-compose down

# 同时删除数据卷（⚠️ 会删除所有数据）
docker-compose down -v
```

## 📦 服务说明

### MySQL 服务
- **镜像**: mysql:8.0
- **端口**: 3306
- **数据持久化**: mysql_data 卷
- **初始化脚本**: docker/mysql/init.sql
- **字符集**: utf8mb4

### Web 服务
- **镜像**: library_web:latest (自动构建)
- **端口**: 5000
- **依赖**: MySQL 服务健康检查通过后启动
- **数据持久化**: 
  - web_logs 卷 (日志)
  - web_images 卷 (图片)

### Nginx 服务（可选）
- **镜像**: nginx:alpine
- **端口**: 80 (HTTP), 443 (HTTPS)
- **功能**: 反向代理、静态文件缓存、Gzip 压缩
- **配置**: docker/nginx/nginx.conf

## 🔧 配置说明

### 环境变量

在 `docker/.env` 文件中配置：

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| MYSQL_ROOT_PASSWORD | MySQL root 密码 | root123456 |
| MYSQL_DATABASE | 数据库名称 | library_db |
| MYSQL_USER | 数据库用户 | library_user |
| MYSQL_PASSWORD | 数据库密码 | library_pass |
| SECRET_KEY | Flask 密钥 | 需修改 |
| MAIL_SERVER | 邮件服务器 | smtp.gmail.com |
| MAIL_USERNAME | 邮箱账号 | - |
| MAIL_PASSWORD | 邮箱密码 | - |

### 端口映射

| 服务 | 容器端口 | 主机端口 | 说明 |
|------|---------|---------|------|
| MySQL | 3306 | 3306 | 数据库 |
| Web | 5000 | 5000 | Flask 应用 |
| Nginx | 80 | 80 | HTTP |
| Nginx | 443 | 443 | HTTPS |

### 数据持久化

| 卷名 | 挂载路径 | 说明 |
|------|---------|------|
| mysql_data | /var/lib/mysql | MySQL 数据 |
| web_logs | /app/static/logs | 应用日志 |
| web_images | /app/static/images | 上传图片 |

## 🔒 安全建议

### 生产环境部署

1. **修改默认密码**
   ```bash
   # 修改 .env 文件中的所有密码
   MYSQL_ROOT_PASSWORD=<strong-password>
   MYSQL_PASSWORD=<strong-password>
   SECRET_KEY=$(openssl rand -hex 32)
   ```

2. **启用 HTTPS**
   - 获取 SSL 证书（Let's Encrypt 推荐）
   - 将证书放入 `docker/nginx/ssl/` 目录
   - 取消注释 `nginx.conf` 中的 HTTPS 配置

3. **限制端口暴露**
   ```yaml
   # docker-compose.yml 中修改 MySQL 端口映射
   ports:
     - "127.0.0.1:3306:3306"  # 仅本地访问
   ```

4. **配置防火墙**
   ```bash
   # 仅开放必要端口
   ufw allow 80/tcp
   ufw allow 443/tcp
   ufw enable
   ```

5. **定期备份数据**
   ```bash
   # 添加到 crontab
   0 2 * * * cd /path/to/docker && docker-compose exec mysql mysqldump -uroot -p$MYSQL_ROOT_PASSWORD library_db > backup_$(date +\%Y\%m\%d).sql
   ```

## 🐛 故障排查

### 服务无法启动

```bash
# 查看详细日志
docker-compose logs -f

# 检查容器状态
docker-compose ps

# 检查端口占用
netstat -tuln | grep -E '3306|5000|80'
```

### 数据库连接失败

```bash
# 检查 MySQL 健康状态
docker-compose exec mysql mysqladmin ping -h localhost -uroot -proot123456

# 检查网络连接
docker-compose exec web ping mysql
```

### 权限问题

```bash
# 修复文件权限
sudo chown -R 1000:1000 docker/logs docker/images
```

### 重建服务

```bash
# 重新构建镜像
docker-compose build --no-cache

# 重新创建容器
docker-compose up -d --force-recreate
```

## 📊 性能优化

### MySQL 优化

在 `docker-compose.yml` 中调整 MySQL 参数：
```yaml
command: >
  --max_connections=1000
  --innodb_buffer_pool_size=512M
  --innodb_log_file_size=256M
```

### Nginx 缓存

已配置静态文件缓存和 Gzip 压缩，可根据需要调整 `nginx.conf`。

### 应用监控

```bash
# 查看资源使用
docker stats

# 查看容器详情
docker-compose top
```

## 📝 更新部署

### 更新应用代码

```bash
# 拉取最新代码
git pull

# 重新构建并启动
docker-compose up -d --build
```

### 更新数据库结构

```bash
# 进入容器执行迁移
docker-compose exec web python -c "from app import create_app, db; app = create_app(); app.app_context().push(); db.create_all()"
```

## 🆘 技术支持

- **项目地址**: https://github.com/your-repo/library-system
- **问题反馈**: https://github.com/your-repo/library-system/issues
- **联系邮箱**: 3435255848@qq.com
- **联系电话**: 15079378671

## 📄 许可证

© 2026 景德镇艺术职业大学 版权所有
