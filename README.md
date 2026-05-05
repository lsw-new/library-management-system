# 📚 图书馆管理系统

一个基于 Flask 的现代化图书馆管理系统，支持用户管理、图书借阅、在线会话管理等功能。

## ✨ 主要特性

- 🔐 **用户认证系统** - 支持普通用户和管理员双重身份
- 📖 **图书管理** - 完整的图书增删改查功能
- 👥 **用户管理** - 用户注册、封禁、在线状态追踪
- 📧 **邮件通知** - 集成邮件发送功能
- 🔒 **安全特性** - 会话管理、IP追踪、并发控制
- 🐳 **Docker支持** - 完整的容器化部署方案

## 🛠️ 技术栈

- **后端**: Flask 3.0 + SQLAlchemy + MySQL
- **认证**: Flask-Login + 密码哈希
- **数据库**: MySQL 8.0 + 连接池优化
- **部署**: Docker + Docker Compose + Nginx
- **开发**: PyCharm + 虚拟环境

## 🚀 快速开始

### 使用 Docker（推荐）

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd PythonProject
   ```

2. **配置环境变量**
   ```bash
   cp .env.example .env
   # 编辑 .env 文件，修改密钥和密码
   ```

3. **启动开发环境**
   ```bash
   # Linux/macOS
   ./deploy.sh dev
   
   # Windows
   deploy.bat dev
   ```

4. **访问应用**
   - 应用地址: http://localhost:5001
   - 数据库: localhost:3307

### 传统部署

1. **安装依赖**
   ```bash
   python -m venv .venv
   source .venv/bin/activate  # Linux/macOS
   # 或 .venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   ```

2. **配置数据库**
   - 安装 MySQL 8.0
   - 创建数据库 `library_db`
   - 修改 `config.py` 中的数据库连接

3. **运行应用**
   ```bash
   python app.py
   ```

## 📁 项目结构

```
PythonProject/
├── app.py              # Flask应用入口
├── config.py           # 配置文件
├── models.py           # 数据模型
├── utils.py            # 工具函数
├── email_utils.py      # 邮件工具
├── blueprints/         # Flask蓝图
│   ├── auth.py         # 认证模块
│   ├── user.py         # 用户功能
│   ├── admin.py        # 管理员功能
│   ├── setup.py        # 系统初始化
│   └── health.py       # 健康检查
├── static/             # 静态文件
├── docker/             # Docker配置
│   ├── mysql/          # MySQL配置
│   └── nginx/          # Nginx配置
├── docker-compose.yml  # 生产环境
├── docker-compose.dev.yml # 开发环境
└── requirements.txt    # Python依赖
```

## 🔧 配置说明
环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `SECRET_KEY` | Flask密钥 | 必须修改 |
| `DATABASE_URL` | 数据库连接 | MySQL连接字符串 |
| `MAIL_SERVER` | 邮件服务器 | smtp.gmail.com |
| `MAIL_USERNAME` | 邮件用户名 | 可选 |
| `MAIL_PASSWORD` | 邮件密码 | 可选 |

### 数据库配置

- **引擎**: MySQL 8.0
- **字符集**: utf8mb4
- **连接池**: 10个活跃连接
- **超时**: 30秒获取连接超时

## 🐳 Docker 部署

### 开发环境
```bash
docker-compose -f docker-compose.dev.yml up -d
```

### 生产环境
```bash
docker-compose up -d
```

详细部署说明请参考 [DOCKER_DEPLOY.md](DOCKER_DEPLOY.md)

## 🔒 安全特性

- ✅ 密码哈希存储
- ✅ 会话管理和超时
- ✅ IP地址追踪
- ✅ 防止并发登录
- ✅ 用户封禁系统
- ✅ SQL注入防护
- ✅ CSRF保护

## 📊 功能模块

### 用户管理
- 用户注册/登录
- 学号验证（13位数字）
- 邮箱验证
- 用户封禁管理

### 图书管理
- 图书增删改查
- 分类管理
- 库存管理
- 借阅记录

### 系统管理
- 管理员面板
- 在线用户监控
- 系统日志
- 数据库管理

## 🛡️ 安全建议

1. **生产环境必须修改**:
   - `SECRET_KEY`
   - `MYSQL_ROOT_PASSWORD`
   - `MYSQL_PASSWORD`

2. **网络安全**:
   - 使用HTTPS
   - 配置防火墙
   - 定期更新依赖

3. **数据安全**:
   - 定期备份数据库
   - 监控磁盘空间
   - 设置日志轮转

## 📝 开发指南

### 添加新功能
1. 在 `blueprints/` 目录创建新模块
2. 在 `models.py` 添加数据模型
3. 在 `app.py` 注册蓝图
4. 编写测试用例

### 数据库迁移
```bash
# 进入应用容器
docker exec -it library_app bash

# 运行迁移脚本
python -c "from app import create_app; from extensions import db; app = create_app(); app.app_context().push(); db.create_all()"
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 📞 支持

如果你遇到问题或有建议，请：

1. 查看 [DOCKER_DEPLOY.md](DOCKER_DEPLOY.md) 部署文档
2. 检查 [Issues](../../issues) 中的已知问题
3. 创建新的 Issue 描述问题

## 🎯 路线图

- [ ] 添加图书推荐系统
- [ ] 集成二维码扫描
- [ ] 移动端适配
- [ ] API文档生成
- [ ] 性能监控面板
- [ ] 多语言支持

---

**开发者**: 何夕2077  
**最后更新**: 2026年5月