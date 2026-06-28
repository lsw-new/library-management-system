# 景艺大图书馆管理系统

一个基于 Flask 的图书馆管理系统，覆盖图书检索、预约借阅、归还审核、用户管理、邮箱验证码、在线会话管理和 Docker 部署。项目适合课程设计、校园图书馆原型、后台管理系统练习，以及 Flask + MySQL + Socket.IO 的完整 Web 项目参考。

应用镜像已发布到 Docker Hub（多架构 `amd64` + `arm64`）：

```text
lsw3435255848/library_web:latest
```

`docker-compose.yml` 默认直接拉取该镜像，无需本地构建即可一键启动。

## 项目特点

- 用户端支持首页推荐、图书列表、分类筛选、详情查看、热门排行榜、图书预约、取消预约和借阅记录查询。
- 管理端支持图书增删改、预约审核、拒绝预约、确认归还、用户封禁/解封、强制下线、重置密码、修改邮箱、在线用户查看和操作日志查看。
- 账号体系支持普通登录、邮箱验证码登录、注册分步完善、忘记密码、个人资料修改、头像上传和密码修改。
- 移动端与平板端自适应：基于 User-Agent 的服务端设备识别（`is_mobile`），提供独立的移动端底部导航与页面适配；移动端/平板端不暴露管理员入口，也无法进入管理后台。
- 实时能力基于 Flask-SocketIO，支持在线人数、预约状态、库存变更、图书目录变更、操作日志和强制下线等事件推送；多副本/多进程部署时通过 Redis 消息队列跨进程广播。
- 数据层使用 Flask-SQLAlchemy + PyMySQL，默认面向 MySQL 8.0，并带有运行时表结构补齐和初始化页面。
- Docker 编排包含 MySQL、Redis、Flask 应用和可选 Nginx，适合本地演示和生产部署起步。
- 安全方面包含 CSRF 校验、登录/验证码限流、Session Cookie 安全配置、CSP/安全响应头、敏感运行文件忽略和基础健康检查。

## 技术栈

| 分类 | 技术 |
| --- | --- |
| 后端框架 | Flask 3.0 |
| ORM | Flask-SQLAlchemy 3.1 |
| 登录会话 | Flask-Login |
| 实时通信 | Flask-SocketIO、python-socketio、gevent |
| 数据库 | MySQL 8.0、PyMySQL |
| 缓存/限流 | Redis，可回退到进程内存 |
| 部署 | Docker、Docker Compose、Gunicorn、可选 Nginx |
| 测试 | pytest、unittest、Node.js JS 语法检查 |

## 功能模块

### 用户端

- 浏览首页最近图书和图书列表。
- 按关键词、分类、作者、书名、ISBN 等信息检索图书。
- 查看图书详情、库存、馆藏位置和借阅次数。
- 预约图书并选择预计归还日期。
- 借阅时长最多 12 天。
- 同一用户最多同时有 2 本未完成借阅。
- 未领取状态下可以取消预约。
- 查看借阅记录，并按待领取、已领取、已归还、已拒绝、已逾期等状态区分。
- 查看热门借阅排行榜。
- 修改个人资料、上传头像、通过邮箱验证码修改密码。

### 管理端

- 登录独立的管理员后台。
- 添加、编辑、删除图书，支持封面图片上传。
- 处理用户预约：同意领取、拒绝领取、确认归还。
- 查看待处理预约、当前借阅、历史记录和统计数据。
- 管理普通用户：封禁、解封、强制下线、重置密码、修改邮箱。
- 查看当前在线用户、IP/地理位置、登录历史和操作日志。
- 管理端关键 POST 操作带 CSRF 校验。

### 认证与通知

- 普通用户支持用户名/邮箱 + 密码登录。
- 支持邮箱验证码登录。
- 支持注册时先填写身份信息，再通过邮箱验证码完成账号创建。
- 支持忘记密码：学号和姓名校验后，通过邮箱验证码重置密码。
- 邮件发送默认使用 QQ 邮箱 SMTP：`smtp.qq.com:587`。
- HTML 邮件被 SMTP 拒收时，验证码邮件可降级为纯文本发送。

### 实时事件

项目通过 Socket.IO 推送以下类型的事件：

- 在线用户变化。
- 预约数量和最新预约变化。
- 用户借阅状态变化。
- 图书库存变化。
- 图书目录新增、修改、删除。
- 管理端新操作日志。
- 管理员强制用户下线。

> 多副本 / 多进程部署下，以上事件依赖 Redis 消息队列（`REDIS_URL` 或 `SOCKETIO_MESSAGE_QUEUE`）在各进程间广播；未配置时事件只能在单进程内送达，会出现「踢人无弹窗」「在线人数不刷新」等问题。后台在线用户列表除实时事件外，还带有约 10 秒的兜底轮询，保证最终一致。

## 项目结构

```text
PythonProject/
├── app.py                    # Flask 应用工厂、全局错误处理、会话追踪、安全响应头、设备识别注入、Socket.IO 消息队列/CORS 配置
├── config.py                 # 环境变量、数据库连接、Session Cookie 配置
├── extensions.py             # db、login_manager、socketio 和北京时间工具
├── models.py                 # User、Admin、Book、BorrowRecord、OnlineSession 等模型
├── email_utils.py            # 邮箱验证码生成、存储、校验和 SMTP 发送
├── email_templates.py        # 验证码、预约、归还等邮件模板
├── socketio_events.py        # Socket.IO 连接、心跳、房间加入/离开
├── socketio_emitters.py      # 业务事件推送封装
├── blueprints/
│   ├── auth.py               # 注册、登录、邮箱验证码、忘记密码、退出登录
│   ├── setup.py              # 数据库初始化、连接测试、演示数据、重置数据库
│   ├── health.py             # 健康检查
│   ├── user/                 # 用户端图书、借阅、个人资料路由
│   └── admin/                # 管理端首页、图书、借阅、用户管理路由
├── utils/                    # 日志、限流、会话、CSRF、图片校验、缓存、IP 归属、设备识别、静态资源哈希等工具
│   └── static_hash.py        # versioned_url：为静态资源注入内容哈希做缓存失效
├── data/test_books.py        # 演示图书数据和演示借阅次数生成
├── static/
│   ├── html/                 # Jinja2 模板
│   ├── css/                  # 页面样式（含 responsive.css 移动端/平板端适配与底部导航）
│   ├── js/                   # 前端交互脚本
│   ├── images/               # 默认封面和上传图片目录
│   └── fonts/                # 本地字体资源
├── docker/
│   ├── mysql/                # MySQL 初始化和索引脚本
│   ├── nginx/                # Nginx 配置
│   └── docker_ios/           # 离线/预置数据部署脚本
├── tests/                    # 项目完整性测试
├── Dockerfile
├── docker-compose.yml
└── requirements.txt
```

## 架构概览

```mermaid
flowchart LR
    Browser["浏览器 / 用户端 / 管理端"] --> Flask["Flask 应用"]
    Browser <--> SocketIO["Socket.IO 实时通道"]
    SocketIO <--> Flask
    Flask --> Blueprints["Auth / User / Admin / Setup Blueprints"]
    Blueprints --> SQLAlchemy["Flask-SQLAlchemy"]
    SQLAlchemy --> MySQL["MySQL 8.0"]
    Flask --> Redis["Redis 缓存和限流"]
    Flask --> SMTP["QQ SMTP 邮件服务"]
    Flask --> Static["static 静态资源和上传图片"]
    Nginx["可选 Nginx 反向代理"] --> Flask
```

## 快速开始：Docker 方式

推荐首次运行使用 Docker Compose。它会同时启动 MySQL、Redis 和 Flask 应用。

### 1. 准备环境变量

复制 Docker 环境变量模板：

```bash
cp docker/.env.example .env
```

Windows PowerShell 可以使用：

```powershell
Copy-Item docker\.env.example .env
```

至少建议修改 `.env` 中的：

```env
MYSQL_ROOT_PASSWORD=please-change-root-password
MYSQL_DATABASE=library_db
MYSQL_USER=library_user
MYSQL_PASSWORD=please-change-db-password
SECRET_KEY=please-change-to-a-long-random-secret
FLASK_ENV=production
APP_PORT=5000
MYSQL_PORT=3306
NGINX_PORT=80
```

需要邮箱验证码时再补充：

```env
SMTP_SENDER_EMAIL=your_qq_email@qq.com
SMTP_SENDER_PASSWORD=your_qq_mail_authorization_code
```

### 2. 启动服务

默认从 Docker Hub 拉取已发布的多架构应用镜像并启动：

```bash
docker compose up -d
```

如果你的 Docker 版本仍使用旧命令，也可以执行：

```bash
docker-compose up -d
```

如需基于本地源码构建镜像（而不是拉取 Docker Hub 版本），先构建并通过 `APP_IMAGE` 指定：

```bash
docker build -t library_web:local .
APP_IMAGE=library_web:local docker compose up -d
```

### 3. 访问系统

打开：

```text
http://localhost:5000
```

首次启动时，如果数据库未准备好，系统会引导到初始化页面：

```text
http://localhost:5000/init_db
```

在初始化页面中依次执行：

1. 测试数据库连接。
2. 创建数据库表。
3. 导入演示数据。
4. 返回首页或进入管理端。

### 4. 演示账号

导入演示数据后可使用：

| 角色 | 账号 | 密码 | 入口 |
| --- | --- | --- | --- |
| 管理员 | `admin` | `admin123` | `/admin/login` |
| 普通用户 | `user1` | `user123` | `/login` |

首次正式使用时请立即修改默认密码。

## 零基础完整部署教程（小白版）

这一节面向「第一次部署、没接触过 Docker」的同学，照着从上到下复制命令即可。推荐用一台 **Ubuntu 22.04/24.04 服务器**（云服务器或虚拟机都行），全程约 10 分钟。Windows 用户见每步的「Windows 说明」。

> 整套系统由三个容器组成：`mysql`（数据库）、`redis`（缓存/实时）、`app`（网站本体）。Docker Compose 会帮你一次性把它们装好、连好，你基本只需要复制命令。

### 第 0 步：你需要准备什么

- 一台能联网的服务器或电脑（Linux 推荐 Ubuntu；Windows 也可以）。
- 如果是云服务器：在控制台「安全组/防火墙」放行 **80 端口**（用 Nginx 时）和 **5000 端口**（直接访问应用时）。
- 一个能用的 QQ 邮箱（可选，用于发验证码，不配也能登录管理后台）。

### 第 1 步：安装 Docker

**Ubuntu / Debian**（一条官方脚本搞定）：

```bash
curl -fsSL https://get.docker.com | sudo sh
sudo systemctl enable --now docker
```

验证安装成功（能打印版本号即可）：

```bash
sudo docker --version
sudo docker compose version
```

> **Windows 说明**：到 https://www.docker.com/products/docker-desktop 下载并安装 Docker Desktop，安装后启动它，等右下角图标变成「运行中」即可。之后的命令在 PowerShell 里去掉前面的 `sudo`。

### 第 2 步：获取项目代码

```bash
git clone https://github.com/lsw-new/library-management-system.git
cd library-management-system
```

> 没装 git 可以先 `sudo apt install -y git`；或在 GitHub 页面点「Code → Download ZIP」下载后解压，再 `cd` 进入目录。

### 第 3 步：生成并修改配置文件 `.env`

复制模板：

```bash
cp docker/.env.example .env
```

Windows PowerShell：

```powershell
Copy-Item docker\.env.example .env
```

用编辑器打开 `.env`（命令行可用 `nano .env`，改完按 `Ctrl+O` 回车保存、`Ctrl+X` 退出），**至少修改这几项**（密码自己改成别人猜不到的）：

```env
MYSQL_ROOT_PASSWORD=改成一个强密码
MYSQL_DATABASE=library_db
MYSQL_USER=library_user
MYSQL_PASSWORD=改成另一个强密码
SECRET_KEY=改成一长串随机字符
FLASK_ENV=production
APP_PORT=5000
```

生成随机 `SECRET_KEY` 的小技巧（Linux）：

```bash
openssl rand -hex 32
```

想用邮箱验证码再补上（不需要可留空）：

```env
SMTP_SENDER_EMAIL=你的QQ邮箱@qq.com
SMTP_SENDER_PASSWORD=QQ邮箱的SMTP授权码
```

### 第 4 步：一键启动

```bash
sudo docker compose up -d
```

第一次会自动从 Docker Hub 拉取镜像，等几分钟。完成后看看三个容器是否都在运行：

```bash
sudo docker compose ps
```

`mysql`、`redis`、`app` 三个都显示 `running/healthy` 就对了。

### 第 5 步：初始化数据库（只做一次）

浏览器打开（把 `服务器IP` 换成你的公网 IP，本机部署就用 `localhost`）：

```text
http://服务器IP:5000
```

如果数据库还是空的，会自动跳到初始化页面 `http://服务器IP:5000/init_db`。在页面上**按顺序点**：

1. 测试数据库连接 → 显示成功。
2. 创建数据库表。
3. 导入演示数据。
4. 返回首页 / 进入管理端。

### 第 6 步：登录验证

| 角色 | 账号 | 密码 | 入口 |
| --- | --- | --- | --- |
| 管理员 | `admin` | `admin123` | `http://服务器IP:5000/admin/login` |
| 普通用户 | `user1` | `user123` | `http://服务器IP:5000/login` |

**登录后请立刻修改默认密码。**

### 第 7 步（可选）：配置域名 + Nginx + HTTPS

如果你有域名并希望用 80/443 端口访问，把域名解析到服务器 IP 后，用 `production` profile 启动自带的 Nginx：

```bash
sudo docker compose --profile production up -d
```

HTTPS 建议在 Nginx 外层用 Caddy 或 `certbot` 申请免费证书；如果用了反向代理且通过域名访问，记得在 `.env` 里加一行放行 Socket.IO 跨域来源，否则实时功能（踢人弹窗、在线人数）会失效：

```env
SOCKETIO_CORS_ORIGINS=https://你的域名
```

改完重启：`sudo docker compose up -d`。

### 日常运维速查

升级到最新版本（拉新镜像并重启，数据不丢）：

```bash
sudo docker compose pull app
sudo docker compose up -d
```

查看应用日志（排错首选）：

```bash
sudo docker compose logs -f app
```

停止但保留数据：

```bash
sudo docker compose down
```

备份数据库：

```bash
sudo docker compose exec mysql mysqldump -u root -p library_db > backup.sql
```

## 本地开发方式

本地开发需要先准备 MySQL。Redis 是可选项；未配置 `REDIS_URL` 时，限流和缓存会回退到进程内存，适合单进程开发调试。

### 1. 创建虚拟环境

Windows PowerShell：

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
pip install -r requirements.txt
```

macOS / Linux：

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install -r requirements.txt
```

### 2. 创建本地 `.env`

项目启动时会自动读取根目录下的 `.env`。示例：

```env
SECRET_KEY=dev-local-secret-change-me
DATABASE_URL=mysql+pymysql://library_user:library_pass@127.0.0.1:3306/library_db?charset=utf8mb4
FLASK_ENV=development
FLASK_DEBUG=true

# 可选：启用邮箱验证码
SMTP_SENDER_EMAIL=
SMTP_SENDER_PASSWORD=

# 可选：启用 Redis 缓存和跨进程限流
REDIS_URL=redis://127.0.0.1:6379/0

# 可选：高德地图定位
AMAP_JS_KEY=
AMAP_SECURITY_KEY=
AMAP_REST_KEY=

# 可选：开发测试中强制 Socket.IO 使用 threading
SOCKETIO_ASYNC_MODE=threading

# 可选：反向代理 / 多域名部署时放行 Socket.IO 跨域来源（单进程本地开发通常无需设置）
# SOCKETIO_CORS_ORIGINS=https://your-domain.example
# 可选：独立指定 Socket.IO 消息队列（默认复用 REDIS_URL）
# SOCKETIO_MESSAGE_QUEUE=redis://127.0.0.1:6379/0
```

### 3. 准备数据库

使用 MySQL 创建数据库和账号，例如：

```sql
CREATE DATABASE IF NOT EXISTS library_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'library_user'@'%' IDENTIFIED BY 'library_pass';
GRANT ALL PRIVILEGES ON library_db.* TO 'library_user'@'%';
FLUSH PRIVILEGES;
```

也可以直接启动 Docker Compose 中的 MySQL：

```bash
docker compose up -d mysql redis
```

### 4. 启动开发服务

```bash
python app.py
```

默认监听：

```text
http://127.0.0.1:5000
```

应用启动时会调用 `ensure_runtime_schema()` 尝试创建或补齐表结构。首次使用仍建议访问 `/init_db` 页面完成连接检查和演示数据导入。

## Docker 服务说明

`docker-compose.yml` 默认包含以下服务：

| 服务 | 镜像/构建 | 默认端口 | 说明 |
| --- | --- | --- | --- |
| `mysql` | `mysql:8.0` | `3306` | 主数据库，使用 `mysql_data` 卷持久化 |
| `redis` | `redis:7-alpine` | 内部端口 | 缓存和限流后端，使用 `redis_data` 卷持久化 |
| `app` | `lsw3435255848/library_web:latest`（多架构，可用 `APP_IMAGE` 覆盖） | `5000` | Gunicorn + gevent 运行 Flask 应用 |
| `nginx` | `nginx:alpine` | `80` | 可选反向代理，需要启用 `production` profile |

启动应用和数据库：

```bash
docker compose up -d
```

查看日志：

```bash
docker compose logs -f app
```

拉取最新应用镜像并重启：

```bash
docker compose pull app
docker compose up -d
```

停止容器但保留数据：

```bash
docker compose down
```

停止容器并删除所有卷数据：

```bash
docker compose down -v
```

启用 Nginx：

```bash
docker compose --profile production up -d
```

## 离线 / 内网部署

无法访问 Docker Hub 的服务器，可在有网络的机器上导出镜像后离线加载。

在有网络的机器上拉取并导出：

```bash
docker pull lsw3435255848/library_web:latest
docker save lsw3435255848/library_web:latest -o docker/docker_ios/library_web.tar
docker save mysql:8.0 -o docker/docker_ios/mysql_8.0.tar
```

将 `docker/docker_ios/` 目录连同 `docker-compose.yml`、`docker/` 配置复制到目标机器，再使用脚本一键加载并启动：

```bash
# Linux 服务器
sudo bash docker/docker_ios/deploy.sh

# Linux / macOS
bash docker/docker_ios/load_and_start.sh

# Windows PowerShell
.\docker\docker_ios\load_and_start.ps1
```

脚本会加载 `library_web.tar` 和 `mysql_8.0.tar`，从模板生成 `.env`，再执行 `docker compose up -d` 启动。由于 `app` 服务的 `pull_policy` 为 `missing`，已离线加载的镜像不会再次联网拉取。更多细节见 `docker/docker_ios/README.md`。

## 环境变量

| 变量 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `SECRET_KEY` | 生产必填 | 开发环境自动生成 | Flask Session 密钥，生产环境必须设置为随机长字符串 |
| `DATABASE_URL` | 生产必填 | 开发默认指向 `mysql` 容器 | SQLAlchemy 数据库连接串 |
| `APP_ENV` | 否 | 空 | 设置为 `production` 时启用生产判定 |
| `FLASK_ENV` | 否 | `production` | 设置为 `production` 时要求安全的 `SECRET_KEY` 和 `DATABASE_URL` |
| `FLASK_DEBUG` | 否 | `false` | `python app.py` 时是否开启 Flask debug |
| `SOCKETIO_ASYNC_MODE` | 否 | 自动选择 | 可设置为 `threading` 方便测试；容器镜像默认使用 `gevent` |
| `SOCKETIO_MESSAGE_QUEUE` | 否 | 回退到 `REDIS_URL` | 显式指定 Socket.IO 消息队列地址；未设置时复用 `REDIS_URL` |
| `SOCKETIO_CORS_ORIGINS` | 反代部署建议 | 空（仅同源） | Socket.IO 允许的跨域来源，反向代理下需填对外域名（`*` 放行全部，或逗号分隔的来源列表），否则握手会被拒、实时连接建立不起来 |
| `REDIS_URL` | 否 | 空 | Redis 连接地址，用于缓存、限流；多副本/多进程部署时同时作为 Socket.IO 消息队列实现跨进程事件广播 |
| `SMTP_SENDER_EMAIL` | 邮件功能必填 | 空 | QQ 邮箱发件地址 |
| `SMTP_SENDER_PASSWORD` | 邮件功能必填 | 空 | QQ 邮箱 SMTP 授权码，不是邮箱登录密码 |
| `AMAP_JS_KEY` | 否 | 空 | 高德地图 JS Key，用于前端定位能力 |
| `AMAP_SECURITY_KEY` | 否 | 空 | 高德地图安全密钥 |
| `AMAP_REST_KEY` | 否 | 空 | 高德 REST API Key |
| `MYSQL_ROOT_PASSWORD` | Docker 必填 | `root123456` | MySQL root 密码 |
| `MYSQL_DATABASE` | Docker 必填 | `library_db` | MySQL 数据库名 |
| `MYSQL_USER` | Docker 必填 | `library_user` | MySQL 业务账号 |
| `MYSQL_PASSWORD` | Docker 必填 | `library_pass` | MySQL 业务账号密码 |
| `APP_PORT` | Docker 可选 | `5000` | 应用映射到宿主机的端口 |
| `MYSQL_PORT` | Docker 可选 | `3306` | MySQL 映射到宿主机的端口 |
| `NGINX_PORT` | Docker 可选 | `80` | Nginx 映射到宿主机的端口 |
| `APP_IMAGE` | Docker 可选 | `lsw3435255848/library_web:latest` | 应用镜像，可改 tag 指定版本或指向本地构建镜像 |

## 常用路由

| 路径 | 说明 |
| --- | --- |
| `/` | 首页 |
| `/books` | 图书列表 |
| `/guest/books` | 游客图书浏览 |
| `/book/<book_id>` | 图书详情 |
| `/ranking` | 热门排行榜 |
| `/borrow_records` | 我的借阅记录 |
| `/profile` | 个人中心 |
| `/login` | 用户密码登录 |
| `/login/email` | 邮箱验证码登录 |
| `/register` | 注册入口 |
| `/forgot-password` | 忘记密码入口 |
| `/admin/login` | 管理员登录 |
| `/admin` | 管理员后台 |
| `/init_db` | 数据库初始化页面 |
| `/init_db/actions` | 初始化操作页面 |
| `/health` | 健康检查 |

## 数据模型概览

核心模型位于 `models.py`：

| 模型 | 表名 | 说明 |
| --- | --- | --- |
| `User` | `users` | 普通用户，包含用户名、邮箱、学号、真实姓名、班级、头像、封禁时间等 |
| `Admin` | `admins` | 管理员账号 |
| `Book` | `books` | 图书基础信息、ISBN、分类、库存、馆藏位置、封面、借阅次数 |
| `BorrowRecord` | `borrow_records` | 预约、领取、归还、拒绝、逾期状态流转记录 |
| `LoginHistory` | `login_history` | 登录和操作历史 |
| `OnlineSession` | `online_sessions` | 当前在线会话、单点登录、强制下线、地理位置 |
| `VerificationCode` | `verification_codes` | 邮箱验证码及过期时间 |

`BorrowRecord.status` 使用字符串保存状态：

| 状态 | 含义 |
| --- | --- |
| `pending` | 用户已预约，等待管理员处理 |
| `picked_up` | 管理员已同意领取，用户处于借阅中 |
| `returned` | 图书已归还，流程结束 |
| `rejected` | 管理员拒绝预约 |
| `expired` | 预约超时自动失效 |

## 测试

运行全部测试：

```bash
python -m pytest
```

本项目测试会检查：

- Python 文件语法是否可解析。
- `static/js` 下的 JavaScript 是否能通过 `node --check`。
- 前后端依赖的关键路由是否存在。
- `.env`、本地数据库、运行时数据等敏感文件没有被 Git 跟踪。
- `.gitignore` 是否继续忽略环境变量文件。

如果系统默认 Python 没有安装 `pytest`，请先激活项目虚拟环境：

```powershell
.\.venv\Scripts\Activate.ps1
python -m pytest
```

## 部署建议

- 生产环境必须设置强随机 `SECRET_KEY`，不要使用示例值。
- 生产环境必须显式设置 `DATABASE_URL`，并使用独立数据库账号。
- 修改所有默认数据库密码、管理员密码和演示用户密码。
- 不要提交 `.env`、数据库文件、日志、上传图片和私钥证书。
- 如果开放公网访问，建议启用 Nginx，并在外层配置 HTTPS。
- MySQL 端口不建议直接暴露到公网；必要时绑定到内网或 `127.0.0.1`。
- 定期备份 `mysql_data` 和上传图片卷 `app_images`。
- 配置 `SMTP_SENDER_EMAIL` 和 `SMTP_SENDER_PASSWORD` 后，注册、邮箱登录、忘记密码和修改密码中的验证码功能才能正常使用。
- 多进程 / 多副本（如 Gunicorn 多 worker、Kubernetes 多 Pod）部署时**必须**配置 `REDIS_URL` 作为 Socket.IO 消息队列，否则强制下线、在线人数等跨进程事件无法送达；同时按需配置 `SOCKETIO_CORS_ORIGINS` 放行反向代理的对外域名。
- 静态资源由 `versioned_url` 注入内容哈希做缓存失效（配合 `immutable` 长缓存）；新增前端文件后引用处使用 `versioned_url`，避免浏览器长期命中旧缓存。

## 备份和恢复

备份数据库：

```bash
docker compose exec mysql mysqldump -u root -p library_db > backup.sql
```

恢复数据库：

```bash
docker compose exec -T mysql mysql -u root -p library_db < backup.sql
```

查看应用日志：

```bash
docker compose logs -f app
```

查看 MySQL 日志：

```bash
docker compose logs -f mysql
```

## 故障排查

### 打开首页跳转到初始化页面

通常表示数据库连接失败、数据库不存在或表未创建。先访问 `/init_db`，执行连接测试和创建表。

### 邮箱验证码发送失败

检查：

- `SMTP_SENDER_EMAIL` 是否为 QQ 邮箱地址。
- `SMTP_SENDER_PASSWORD` 是否为 QQ 邮箱 SMTP 授权码。
- QQ 邮箱是否已开启 SMTP 服务。
- 容器或服务器是否允许访问 `smtp.qq.com:587`。

### Docker 启动后静态资源缺失

应用镜像会在入口脚本中把默认静态资源复制到挂载卷。可以尝试重新拉取镜像并重启：

```bash
docker compose pull app
docker compose up -d
```

### 数据库连接失败

检查 `.env` 中的数据库账号和 `DATABASE_URL`，并确认 MySQL 容器健康：

```bash
docker compose ps
docker compose logs mysql
```

### 测试提示没有 pytest

说明当前 Python 环境没有安装测试依赖。激活项目虚拟环境，或执行：

```bash
pip install pytest
python -m pytest
```

## 版本控制说明

仓库已通过 `.gitignore` 排除以下运行时和敏感文件：

- `.env`、`.env.local` 等环境变量文件。
- `.venv`、`__pycache__`、`.pytest_cache`。
- `logs/` 和 `static/logs/`。
- 上传图片目录中的运行时图片，保留 `static/images/default-book.jpg`。
- 本地数据库文件、证书、私钥和构建产物。

提交前建议执行：

```bash
git status --short
python -m pytest
```

## 许可证

当前仓库未声明开源许可证。若计划公开复用或分发，请补充 `LICENSE` 文件并在此处说明授权方式。
