-- 景艺大图书馆 - 性能索引迁移脚本
-- 在应用首次启动且表已创建后执行
-- 用法: docker exec -i library_mysql mysql -u library_user -p library_db < add_indexes.sql

SET NAMES utf8mb4;

-- FULLTEXT 全文搜索索引（需要 ngram_token_size=2 已在 MySQL 启动参数中配置）
ALTER TABLE books ADD FULLTEXT INDEX ft_books_search (title, author, isbn, category) WITH PARSER ngram;

-- 图书表复合索引
CREATE INDEX idx_books_category_stock ON books(category, stock);

-- 借阅记录复合索引
CREATE INDEX idx_borrow_user_status ON borrow_records(user_id, status);
CREATE INDEX idx_borrow_pending_date ON borrow_records(status, borrow_date);

-- 验证码过期清理索引
CREATE INDEX idx_vcode_expires ON verification_codes(expires_at);
