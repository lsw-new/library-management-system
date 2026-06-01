# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import ast
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import os
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import re
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import shutil
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import subprocess
# 逐行注释：导入标准库或第三方模块，供当前文件后续业务逻辑调用。
import unittest
# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from pathlib import Path
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
PROJECT_ROOT = Path(__file__).resolve().parents[1]
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
os.environ.setdefault('SECRET_KEY', 'test-secret-key')
# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
os.environ['DATABASE_URL'] = 'sqlite:///:memory:'
# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
os.environ.setdefault('SOCKETIO_ASYNC_MODE', 'threading')
# 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
os.environ.pop('REDIS_URL', None)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `SyntaxIntegrityTests` 类，用于封装相关数据结构、模型能力或业务行为。
class SyntaxIntegrityTests(unittest.TestCase):
    # 逐行注释：定义 `test_python_files_parse` 函数，封装一段可复用的后端处理流程。
    def test_python_files_parse(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        errors = []
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        ignored_parts = {'.git', '.venv', '.codegraph', '__pycache__'}
        # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for path in PROJECT_ROOT.rglob('*.py'):
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if ignored_parts.intersection(path.parts):
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                continue
            # 逐行注释：异常保护入口，下面的逻辑可能失败，需要捕获并转成可控结果。
            try:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                ast.parse(path.read_text(encoding='utf-8'), filename=str(path))
            # 逐行注释：异常处理分支，用于回滚、记录日志或返回错误响应。
            except SyntaxError as exc:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                errors.append(f'{path.relative_to(PROJECT_ROOT)}: {exc}')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertEqual(errors, [])
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_javascript_files_parse` 函数，封装一段可复用的后端处理流程。
    def test_javascript_files_parse(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        node = shutil.which('node')
        # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
        if not node:
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            self.skipTest('Node.js is not installed')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        errors = []
        # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for path in (PROJECT_ROOT / 'static' / 'js').glob('*.js'):
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            result = subprocess.run(
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                [node, '--check', str(path)],
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                cwd=PROJECT_ROOT,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                text=True,
                # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                capture_output=True,
            # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
            )
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if result.returncode != 0:
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                errors.append(f'{path.relative_to(PROJECT_ROOT)}:\n{result.stderr}')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertEqual(errors, [])
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `RouteContractTests` 类，用于封装相关数据结构、模型能力或业务行为。
class RouteContractTests(unittest.TestCase):
    # 逐行注释：装饰器行，为下面的函数或类附加路由、权限、限流或其他框架行为。
    @classmethod
    # 逐行注释：定义 `setUpClass` 函数，封装一段可复用的后端处理流程。
    def setUpClass(cls):
        # 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
        from app import app
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cls.app = app
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        cls.endpoints = {rule.endpoint for rule in app.url_map.iter_rules()}
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_expected_frontend_endpoints_exist` 函数，封装一段可复用的后端处理流程。
    def test_expected_frontend_endpoints_exist(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        expected = {
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'admin.change_email',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'update_location',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user.books_stock',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'user.books_categories',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'auth.login_email',
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            'auth.login_email_send_code',
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        }
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertTrue(expected.issubset(self.endpoints), expected - self.endpoints)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_admin_change_email_route_matches_frontend` 函数，封装一段可复用的后端处理流程。
    def test_admin_change_email_route_matches_frontend(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        js = (PROJECT_ROOT / 'static' / 'js' / 'admin-users.js').read_text(encoding='utf-8')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('/admin/change_email/${userId}', js)
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        routes = {rule.rule for rule in self.app.url_map.iter_rules()}
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('/admin/change_email/<int:user_id>', routes)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_location_template_has_backing_route` 函数，封装一段可复用的后端处理流程。
    def test_location_template_has_backing_route(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        base_html = (PROJECT_ROOT / 'static' / 'html' / 'base.html').read_text(encoding='utf-8')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn("url_for('update_location')", base_html)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('update_location', self.endpoints)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `FrontendExperienceTests` 类，用于封装相关数据结构、模型能力或业务行为。
class FrontendExperienceTests(unittest.TestCase):
    # 逐行注释：定义 `test_mobile_shell_replaces_old_mobile_block` 函数，封装一段可复用的后端处理流程。
    def test_mobile_shell_replaces_old_mobile_block(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        base_html = (PROJECT_ROOT / 'static' / 'html' / 'base.html').read_text(encoding='utf-8')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertNotIn('mobile-block', base_html)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('mobile-menu', base_html)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('mobile-bottom-nav', base_html)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn("url_for('admin.admin_index', tab='books')", base_html)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn("url_for('auth.register')", base_html)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_dialog_helpers_are_available` 函数，封装一段可复用的后端处理流程。
    def test_dialog_helpers_are_available(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        base_js = (PROJECT_ROOT / 'static' / 'js' / 'base.js').read_text(encoding='utf-8')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('function appShowConfirm', base_js)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('function showNotice', base_js)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('function initLogoutConfirm', base_js)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('window.showNotice = showNotice', base_js)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_borrow_success_uses_notice_dialog` 函数，封装一段可复用的后端处理流程。
    def test_borrow_success_uses_notice_dialog(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        borrow_js = (PROJECT_ROOT / 'static' / 'js' / 'borrow-modal.js').read_text(encoding='utf-8')
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        borrow_template = (PROJECT_ROOT / 'static' / 'html' / '_borrow_modal.html').read_text(encoding='utf-8')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn("showNotice('预约已提交'", borrow_js)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('查看借阅记录', borrow_js)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('recordsUrl', borrow_template)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_admin_login_allows_mobile_and_tablet` 函数，封装一段可复用的后端处理流程。
    def test_admin_login_allows_mobile_and_tablet(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        auth_py = (PROJECT_ROOT / 'blueprints' / 'auth.py').read_text(encoding='utf-8')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertNotIn('is_mobile_device', auth_py)
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertNotIn('手机端不能进入管理员页面', auth_py)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_static_scripts_do_not_use_native_alerts` 函数，封装一段可复用的后端处理流程。
    def test_static_scripts_do_not_use_native_alerts(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        offenders = []
        # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for path in (PROJECT_ROOT / 'static' / 'js').glob('*.js'):
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            content = path.read_text(encoding='utf-8')
            # 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
            if re.search(r'\balert\s*\(', content):
                # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
                offenders.append(str(path.relative_to(PROJECT_ROOT)))
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertEqual(offenders, [])
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_page_stylesheets_are_versioned` 函数，封装一段可复用的后端处理流程。
    def test_page_stylesheets_are_versioned(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        expected = {
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'books.html': "versioned_url('css/books.css')",
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'guest_books.html': "versioned_url('css/books.css')",
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'book_detail.html': "versioned_url('css/book-detail.css')",
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'borrow_records.html': "versioned_url('css/borrow-records.css')",
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'profile.html': "versioned_url('css/profile.css')",
            # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
            'admin.html': "versioned_url('css/admin.css')",
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        }
        # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for template, marker in expected.items():
            # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
            content = (PROJECT_ROOT / 'static' / 'html' / template).read_text(encoding='utf-8')
            # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
            self.assertIn(marker, content)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：声明 `GitSafetyTests` 类，用于封装相关数据结构、模型能力或业务行为。
class GitSafetyTests(unittest.TestCase):
    # 逐行注释：定义 `test_sensitive_runtime_files_are_not_tracked` 函数，封装一段可复用的后端处理流程。
    def test_sensitive_runtime_files_are_not_tracked(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        result = subprocess.run(
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            ['git', 'ls-files', '.env', 'ruvector.db', 'deploy_latest.tar.gz', 'data/stream_store'],
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            cwd=PROJECT_ROOT,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            text=True,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            capture_output=True,
            # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
            check=True,
        # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
        )
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertEqual(result.stdout.strip(), '')
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：定义 `test_gitignore_keeps_env_files_out` 函数，封装一段可复用的后端处理流程。
    def test_gitignore_keeps_env_files_out(self):
        # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
        gitignore = (PROJECT_ROOT / '.gitignore').read_text(encoding='utf-8')
        # 逐行注释：断言关键条件，用于测试或运行期校验预期是否成立。
        self.assertIn('.env', gitignore)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：条件判断，根据当前变量、请求参数或运行状态选择不同处理分支。
if __name__ == '__main__':
    # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
    unittest.main()
