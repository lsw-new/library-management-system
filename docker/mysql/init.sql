-- 景艺大图书馆 - MySQL 初始化脚本
-- 数据库、用户和权限由 MySQL 官方镜像根据环境变量自动创建

SET NAMES utf8mb4;

-- 性能索引（表由 Flask create_all 创建后，可通过 ALTER TABLE 添加）
-- 以下索引在首次部署时需手动执行，或通过迁移脚本执行：

-- FULLTEXT 全文搜索索引（中文 ngram）
-- ALTER TABLE books ADD FULLTEXT INDEX ft_books_search (title, author, isbn, category) WITH PARSER ngram;

-- 复合索引
-- CREATE INDEX IF NOT EXISTS idx_books_category_stock ON books(category, stock);
-- CREATE INDEX IF NOT EXISTS idx_books_borrow_count ON books(borrow_count DESC);
-- CREATE INDEX IF NOT EXISTS idx_borrow_user_status ON borrow_records(user_id, status);
-- CREATE INDEX IF NOT EXISTS idx_borrow_pending_date ON borrow_records(status, borrow_date);
-- CREATE INDEX IF NOT EXISTS idx_vcode_expires ON verification_codes(expires_at);
