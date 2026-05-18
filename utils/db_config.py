import os
from urllib.parse import urlparse

from flask import current_app

from extensions import db


def _get_db_config() -> dict:
    uri = current_app.config['SQLALCHEMY_DATABASE_URI']
    parsed = urlparse(uri)
    return {
        'host': parsed.hostname or '127.0.0.1',
        'port': parsed.port or 3306,
        'user': parsed.username or 'root',
        'password': parsed.password or '',
        'database': parsed.path.lstrip('/').split('?')[0] if parsed.path else 'library_db',
        'charset': 'utf8mb4',
    }


def refresh_sqlalchemy_engines() -> None:
    extension = current_app.extensions.get('sqlalchemy')
    if not extension:
        return

    app_obj = current_app._get_current_object()
    basic_uri = current_app.config.get('SQLALCHEMY_DATABASE_URI')
    engine_options = extension._engine_options.copy()
    engine_options.update(current_app.config.get('SQLALCHEMY_ENGINE_OPTIONS', {}))
    engine_options['url'] = basic_uri

    engines = extension._app_engines.setdefault(app_obj, {})
    for engine in engines.values():
        engine.dispose()
    engines.clear()

    echo = current_app.config.get('SQLALCHEMY_ECHO', False)
    engine_options.setdefault('echo', echo)
    engine_options.setdefault('echo_pool', echo)
    extension._apply_driver_defaults(engine_options, app_obj)
    extension._make_metadata(None)
    engines[None] = extension._make_engine(None, engine_options, app_obj)


def update_config_file(new_uri: str) -> bool:
    env_path = os.path.join(current_app.root_path, '.env')
    try:
        lines = []
        found = False
        if os.path.exists(env_path):
            with open(env_path, 'r', encoding='utf-8') as f:
                lines = f.read().splitlines()

        updated_lines = []
        for line in lines:
            if line.strip().startswith('DATABASE_URL='):
                updated_lines.append(f'DATABASE_URL={new_uri}')
                found = True
            else:
                updated_lines.append(line)

        if not found:
            if updated_lines and updated_lines[-1].strip():
                updated_lines.append('')
            updated_lines.append(f'DATABASE_URL={new_uri}')

        with open(env_path, 'w', encoding='utf-8') as f:
            f.write('\n'.join(updated_lines) + '\n')

        os.environ['DATABASE_URL'] = new_uri
        current_app.config['SQLALCHEMY_DATABASE_URI'] = new_uri
        db.session.remove()
        refresh_sqlalchemy_engines()
        return True
    except Exception:
        current_app.logger.exception('更新数据库配置失败')
        return False
