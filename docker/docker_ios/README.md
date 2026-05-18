# 图书管理系统 - Docker 镜像快速部署指南

## 📦 镜像文件说明

本目录包含已构建好的 Docker 镜像，无需重新构建即可快速部署。

### 镜像列表

| 文件名 | 大小 | 说明 |
|--------|------|------|
| library_web.tar | 146.22 MB | Flask Web 应用镜像 |
| mysql_8.0.tar | 235.86 MB | MySQL 8.0 数据库镜像 |
| nginx_alpine.tar | 25.69 MB | Nginx 反向代理镜像 |

**总大小**: 约 408 MB

## 🚀 快速启动步骤

### 方法一：使用启动脚本（推荐）

#### Windows 系统
```powershell
# 双击运行
.\load_and_start.ps1
```

#### Linux/Mac 系统
```bash
# 添加执行权限
chmod +x load_and_start.sh

# 运行脚本
./load_and_start.sh
```

### 方法二：手动加载镜像

#### 1. 加载镜像到 Docker

```powershell
# Windows PowerShell
cd C:\Users\34352\PycharmProjects\PythonProject\docker\docker_ios

docker load -i library_web.tar
docker load -i mysql_8.0.tar
docker load -i nginx_alpine.tar
```

```bash
# Linux/Mac
cd /path/to/docker/docker_ios

docker load -i library_web.tar
docker load -i mysql_8.0.tar
docker load -i nginx_alpine.tar
```

#### 2. 验证镜像加载

```bash
docker images | grep -E "library_web|mysql|nginx"
```

应该看到：
```
library_web    latest    ...    146MB
mysql          8.0       ...    236MB
nginx          alpine    ...    25.7MB
```

#### 3. 启动服务

```bash
# 返回上级目录
cd ..

# 启动所有服务
docker-compose up -d
```

#### 4. 检查服务状态

```bash
docker-compose ps
```

## 🌐 访问应用

启动成功后，通过以下地址访问：

- **主页**: http://localhost
- **用户登录**: http://localhost/login
- **管理员登录**: http://localhost/admin/login
- **直接访问 Flask**: http://localhost:5000
- **健康检查**: http://localhost:5000/health

## 🔑 默认账号

**管理员账号**：
- 用户名: `admin`
- 密码: `admin123`

⚠️ **首次登录后请立即修改密码！**

## 📋 常用命令

### 查看服务状态
```bash
docker-compose ps
```

### 查看日志
```bash
# 查看所有服务日志
docker-compose logs -f

# 查看特定服务日志
docker-compose logs -f web
docker-compose logs -f mysql
```

### 重启服务
```bash
docker-compose restart
```

### 停止服务
```bash
docker-compose down
```

### 停止并删除数据
```bash
docker-compose down -v
```

## 🔄 镜像更新

如果应用有更新，需要重新保存镜像：

```bash
# 1. 重新构建镜像
cd ..
docker-compose build --no-cache

# 2. 保存新镜像
cd docker_ios
docker save -o library_web.tar library_web:latest
docker save -o mysql_8.0.tar mysql:8.0
docker save -o nginx_alpine.tar nginx:alpine
```

## 📤 镜像分发

### 打包所有镜像
```bash
# Windows
Compress-Archive -Path *.tar -DestinationPath library_system_images.zip

# Linux/Mac
tar -czf library_system_images.tar.gz *.tar
```

### 在新机器上部署
1. 解压镜像包
2. 运行 `load_and_start.ps1` 或 `load_and_start.sh`
3. 访问 http://localhost

## 🐛 故障排查

### 镜像加载失败
```bash
# 检查文件完整性
ls -lh *.tar

# 重新加载
docker load -i library_web.tar
```

### 端口被占用
```bash
# 检查端口占用
netstat -tuln | grep -E '3306|5000|80'

# 修改 docker-compose.yml 中的端口映射
```

### 服务无法启动
```bash
# 查看详细日志
docker-compose logs -f

# 重新创建容器
docker-compose up -d --force-recreate
```

## 📞 技术支持

- **联系邮箱**: 3435255848@qq.com
- **联系电话**: 15079378671

## 📄 许可证

© 2026 景德镇艺术职业大学 版权所有
