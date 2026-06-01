import ast
import os
import shutil
import subprocess
import unittest
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]

os.environ.setdefault('SECRET_KEY', 'test-secret-key')
os.environ['DATABASE_URL'] = 'sqlite:///:memory:'
os.environ.setdefault('SOCKETIO_ASYNC_MODE', 'threading')
os.environ.pop('REDIS_URL', None)


class SyntaxIntegrityTests(unittest.TestCase):
    def test_python_files_parse(self):
        errors = []
        ignored_parts = {'.git', '.venv', '.codegraph', '__pycache__'}
        for path in PROJECT_ROOT.rglob('*.py'):
            if ignored_parts.intersection(path.parts):
                continue
            try:
                ast.parse(path.read_text(encoding='utf-8'), filename=str(path))
            except SyntaxError as exc:
                errors.append(f'{path.relative_to(PROJECT_ROOT)}: {exc}')
        self.assertEqual(errors, [])

    def test_javascript_files_parse(self):
        node = shutil.which('node')
        if not node:
            self.skipTest('Node.js is not installed')

        errors = []
        for path in (PROJECT_ROOT / 'static' / 'js').glob('*.js'):
            result = subprocess.run(
                [node, '--check', str(path)],
                cwd=PROJECT_ROOT,
                text=True,
                capture_output=True,
            )
            if result.returncode != 0:
                errors.append(f'{path.relative_to(PROJECT_ROOT)}:\n{result.stderr}')
        self.assertEqual(errors, [])


class RouteContractTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        from app import app
        cls.app = app
        cls.endpoints = {rule.endpoint for rule in app.url_map.iter_rules()}

    def test_expected_frontend_endpoints_exist(self):
        expected = {
            'admin.change_email',
            'update_location',
            'user.books_stock',
            'user.books_categories',
            'auth.login_email',
            'auth.login_email_send_code',
        }
        self.assertTrue(expected.issubset(self.endpoints), expected - self.endpoints)

    def test_admin_change_email_route_matches_frontend(self):
        js = (PROJECT_ROOT / 'static' / 'js' / 'admin-users.js').read_text(encoding='utf-8')
        self.assertIn('/admin/change_email/${userId}', js)
        routes = {rule.rule for rule in self.app.url_map.iter_rules()}
        self.assertIn('/admin/change_email/<int:user_id>', routes)

    def test_location_template_has_backing_route(self):
        base_html = (PROJECT_ROOT / 'static' / 'html' / 'base.html').read_text(encoding='utf-8')
        self.assertIn("url_for('update_location')", base_html)
        self.assertIn('update_location', self.endpoints)


class GitSafetyTests(unittest.TestCase):
    def test_sensitive_runtime_files_are_not_tracked(self):
        result = subprocess.run(
            ['git', 'ls-files', '.env', 'ruvector.db', 'deploy_latest.tar.gz', 'data/stream_store'],
            cwd=PROJECT_ROOT,
            text=True,
            capture_output=True,
            check=True,
        )
        self.assertEqual(result.stdout.strip(), '')

    def test_gitignore_keeps_env_files_out(self):
        gitignore = (PROJECT_ROOT / '.gitignore').read_text(encoding='utf-8')
        self.assertIn('.env', gitignore)


if __name__ == '__main__':
    unittest.main()
