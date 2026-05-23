# 使用已导入数据的 Docker 镜像直接启动

本目录已经包含可直接分发的镜像包和启动方案：

| 文件 | 说明 |
|------|------|
| `library_app_seeded.tar` | 应用镜像，标签为 `library_app:latest` |
| `library_mysql_seeded.tar` | 已内置测试数据 SQL 的 MySQL 镜像，标签为 `library_mysql_seeded:latest` |
| `library_app_seeded_arm64.tar` | ARM64 / aarch64 Linux 服务器应用镜像，标签为 `library_app:latest` |
| `library_mysql_seeded_arm64.tar` | ARM64 / aarch64 Linux 服务器 MySQL 种子镜像，标签为 `library_mysql_seeded:latest` |
| `docker-compose.seeded.yml` | 直接使用镜像启动的 Compose 配置 |
| `.env.seeded` | 本机实际启动配置，包含 SMTP 配置 |
| `.env.seeded.example` | 可分发的配置模板 |
| `start_seeded.ps1` | Windows 一键启动脚本 |
| `start_seeded.sh` | Linux / macOS 通用一键启动脚本 |
| `start_seeded_linux.sh` | Linux 服务器专用启动脚本，包含 Compose 检查和健康等待 |

## Windows 启动

```powershell
cd C:\Users\34352\PycharmProjects\PythonProject\docker\docker_ios
.\start_seeded.ps1
```

## Linux 服务器启动

脚本会自动检测 `x86_64` / `aarch64` 架构；ARM64 服务器会优先加载 `*_arm64.tar` 镜像包。

```bash
cd /path/to/PythonProject/docker/docker_ios
chmod +x start_seeded_linux.sh
./start_seeded_linux.sh
```

## Linux / macOS 通用启动

```bash
cd /path/to/PythonProject/docker/docker_ios
chmod +x start_seeded.sh
./start_seeded.sh
```

## 手动启动

```bash
docker load -i library_app_seeded.tar
docker load -i library_mysql_seeded.tar
docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded up -d
```

## 访问地址

```text
http://127.0.0.1:5000
```

## 镜像内置数据

当前数据库快照包含：

| 数据 | 数量 |
|------|------|
| 管理员 | 1 |
| 普通用户 | 1 |
| 图书 | 326 |
| 借阅记录 | 1 |

默认账号：

| 角色 | 用户名 | 密码 |
|------|--------|------|
| 管理员 | `admin` | `admin123` |
| 普通用户 | `user1` | `user123` |

## 重新恢复到镜像内置数据

MySQL 官方镜像只会在数据卷为空时执行内置初始化 SQL。如果已经启动过，再次启动会复用旧数据卷。

如需恢复到镜像内置的测试数据，执行：

```bash
docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded down -v
docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded up -d
```

## 修改端口

编辑 `.env.seeded`：

```env
APP_PORT=5001
MYSQL_PORT=3307
```

然后重启：

```bash
docker compose --env-file .env.seeded -f docker-compose.seeded.yml -p library_seeded up -d
```
