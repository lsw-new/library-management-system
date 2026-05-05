# MySQL 数据库初始化脚本
# 此脚本在 MySQL 容器首次启动时自动执行

-- 设置字符集和排序规则
SET NAMES utf8mb4;
SET character_set_client = utf8mb4;

-- 创建数据库（如果不存在）
CREATE DATABASE IF NOT EXISTS library_db
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE library_db;

-- 创建用户并授权（如果不存在）
CREATE USER IF NOT EXISTS 'library_user'@'%' IDENTIFIED BY 'library_pass';
GRANT ALL PRIVILEGES ON library_db.* TO 'library_user'@'%';
FLUSH PRIVILEGES;

-- 设置时区
SET time_zone = '+08:00';

-- 输出初始化完成信息
SELECT 'Database initialization completed!' as message;