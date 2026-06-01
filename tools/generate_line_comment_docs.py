from __future__ import annotations

import html
import re
import shutil
import subprocess
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
OUTPUT_ROOT = PROJECT_ROOT / 'docs' / 'line-comments'
TARGET_SUFFIXES = {'.py', '.js', '.css', '.html'}
EXCLUDED_PARTS = {'.git', '.venv', '__pycache__', 'docs', 'outputs'}


def tracked_source_files() -> list[Path]:
    result = subprocess.run(
        ['git', 'ls-files'],
        cwd=PROJECT_ROOT,
        text=True,
        capture_output=True,
        check=True,
    )
    files: list[Path] = []
    for raw in result.stdout.splitlines():
        path = PROJECT_ROOT / raw
        if path.suffix.lower() not in TARGET_SUFFIXES:
            continue
        if EXCLUDED_PARTS.intersection(path.relative_to(PROJECT_ROOT).parts):
            continue
        files.append(path)
    if Path(__file__) not in files:
        files.append(Path(__file__))
    return sorted(files, key=lambda item: item.as_posix())


def normalize_code(line: str) -> str:
    return line.strip()


def generic_blank(language: str) -> str:
    return f'空行，用于分隔 {language} 代码块，提升阅读层次。'


def describe_python(code: str) -> str:
    if not code:
        return generic_blank('Python')
    if code.startswith('#'):
        return '已有 Python 注释，说明附近代码的目的或约束。'
    if code.startswith('@'):
        return '装饰器行，为下面的函数或类附加路由、权限、限流或其他行为。'
    if code.startswith('import '):
        return '导入外部模块，供当前 Python 文件后续逻辑调用。'
    if code.startswith('from '):
        return '从指定模块导入函数、类或变量，减少后续引用前缀。'
    if code.startswith('class '):
        name = code.split('class ', 1)[1].split('(', 1)[0].split(':', 1)[0].strip()
        return f'声明 `{name}` 类，用于封装一组相关的数据结构或业务行为。'
    if code.startswith('def ') or code.startswith('async def '):
        name = code.split('def ', 1)[1].split('(', 1)[0].strip()
        return f'定义 `{name}` 函数，承载当前模块中的一段可复用处理流程。'
    if code.startswith('return '):
        return '返回当前函数的计算结果或响应对象，结束这一条执行路径。'
    if code in {'return', 'pass'}:
        return '显式结束当前分支或占位，保持语法结构完整。'
    if code.startswith(('if ', 'elif ')):
        return '条件判断，根据运行时数据选择不同业务分支。'
    if code.startswith('else'):
        return '条件判断的兜底分支，处理前面条件未命中的情况。'
    if code.startswith(('for ', 'while ')):
        return '循环控制语句，用于遍历集合或重复执行某段逻辑。'
    if code.startswith('try'):
        return '异常保护入口，下面的代码可能触发需要捕获的运行时错误。'
    if code.startswith(('except ', 'except:')):
        return '异常处理分支，将失败场景转换为可控响应或日志记录。'
    if code.startswith('finally'):
        return '异常处理的收尾分支，无论是否报错都会执行。'
    if code.startswith('with '):
        return '上下文管理语句，自动管理资源打开、提交、释放或回滚。'
    if code.startswith('raise '):
        return '主动抛出异常，把错误交给上层流程处理。'
    if code.startswith(('assert ', 'self.assert')):
        return '测试或运行期断言，用来验证关键条件是否成立。'
    if ' = ' in code or code.endswith('='):
        return '变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。'
    if re.search(r'\w+\(.*\)', code):
        return '函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。'
    if code in {')', '}', ']', '),', '},', '],'}:
        return '复合表达式的结束行，关闭前面打开的结构。'
    return 'Python 语句，参与当前模块的配置、数据处理或控制流程。'


def describe_javascript(code: str) -> str:
    if not code:
        return generic_blank('JavaScript')
    if code.startswith('//'):
        return '已有 JavaScript 注释，说明附近交互逻辑或实现原因。'
    if code.startswith(('/*', '*', '*/')):
        return '块注释内容，用于解释一组前端逻辑。'
    if code.startswith(('const ', 'let ', 'var ')):
        return '声明前端变量或常量，保存 DOM 节点、状态、配置或计算结果。'
    if code.startswith(('function ', 'async function ')):
        name = code.split('function ', 1)[1].split('(', 1)[0].strip()
        return f'定义 `{name}` 函数，封装页面交互或请求处理逻辑。'
    if '=>' in code:
        return '箭头函数表达式，通常用于回调、事件处理或数组处理。'
    if code.startswith(('if ', 'if(')):
        return '条件判断，根据页面状态、接口结果或用户操作决定后续动作。'
    if code.startswith(('else', '} else')):
        return '条件判断的备用分支，处理未命中的交互场景。'
    if code.startswith(('for ', 'for(', 'while ', 'while(')):
        return '循环语句，用于遍历 DOM 集合、数据列表或重试逻辑。'
    if code.startswith('return '):
        return '返回函数结果，或提前结束当前前端处理流程。'
    if 'addEventListener' in code:
        return '绑定浏览器事件监听，使用户操作能够触发对应逻辑。'
    if 'querySelector' in code or 'getElementById' in code:
        return '查找页面 DOM 元素，为后续读取或更新界面做准备。'
    if 'fetch(' in code:
        return '发起 HTTP 请求，与后端接口交换数据。'
    if '.then(' in code or 'await ' in code:
        return '处理异步流程，等待接口、动画或浏览器操作完成。'
    if 'classList' in code or '.style.' in code:
        return '更新元素样式或状态类，驱动页面视觉变化。'
    if 'innerHTML' in code or 'textContent' in code:
        return '写入页面内容，让界面展示最新状态或提示。'
    if 'showToast' in code or 'showNotice' in code or 'showConfirm' in code:
        return '调用统一弹窗或提示组件，反馈操作结果。'
    if code in {'}', '});', '};', ');', '],', '],'}:
        return '结束前面打开的代码块、函数调用或对象结构。'
    return 'JavaScript 语句，参与页面状态管理、交互控制或接口联动。'


def describe_css(code: str) -> str:
    if not code:
        return generic_blank('CSS')
    if code.startswith('/*') or code.startswith('*') or code.endswith('*/'):
        return 'CSS 注释，标记样式分区或解释设计目的。'
    if code.startswith('@media'):
        return '响应式媒体查询，根据屏幕宽度应用不同布局规则。'
    if code.startswith('@'):
        return 'CSS at-rule，用于声明字体、动画、媒体条件或其他全局规则。'
    if code.endswith('{'):
        selector = code[:-1].strip()
        return f'选择器 `{selector}` 的样式块开始，下面定义这类元素的视觉表现。'
    if code == '}':
        return '结束当前 CSS 规则块。'
    if ':' in code:
        prop = code.split(':', 1)[0].strip()
        return f'设置 `{prop}` 样式属性，影响元素的布局、尺寸、颜色或交互效果。'
    return 'CSS 语句，参与页面视觉样式或响应式布局定义。'


def describe_html(code: str) -> str:
    if not code:
        return generic_blank('HTML/Jinja')
    if code.startswith('<!--'):
        return 'HTML 注释，标记页面结构分区或模板意图。'
    if code.startswith('{% extends'):
        return 'Jinja 模板继承声明，复用基础页面骨架。'
    if code.startswith('{% block'):
        return 'Jinja block 开始，向基础模板填充指定区域内容。'
    if code.startswith('{% endblock'):
        return 'Jinja block 结束，关闭当前模板填充区域。'
    if code.startswith('{% include'):
        return '引入其他模板片段，复用公共页面结构。'
    if code.startswith('{% macro'):
        return '定义 Jinja 宏，用于复用一段可参数化的模板结构。'
    if code.startswith('{% endmacro'):
        return '结束当前 Jinja 宏定义。'
    if code.startswith('{% set'):
        return '设置 Jinja 模板变量，供后续渲染条件或内容使用。'
    if code.startswith(('{% if', '{% elif')):
        return 'Jinja 条件判断，根据后端传入数据决定渲染内容。'
    if code.startswith('{% else'):
        return 'Jinja 条件的兜底分支，渲染未命中条件时的内容。'
    if code.startswith('{% endif'):
        return '结束当前 Jinja 条件块。'
    if code.startswith('{% for'):
        return 'Jinja 循环开始，遍历后端传入的数据列表生成重复结构。'
    if code.startswith('{% endfor'):
        return '结束当前 Jinja 循环块。'
    if code.startswith('{{') or '{{' in code:
        return '输出 Jinja 表达式，把后端数据或路由结果渲染到页面。'
    if code.startswith('<link'):
        return '加载外部样式资源，影响当前页面的视觉表现。'
    if code.startswith('<script'):
        return '加载或开始脚本逻辑，为页面提供交互能力。'
    if code.startswith('</script'):
        return '结束当前脚本块。'
    if code.startswith('<form'):
        return '表单结构开始，用于收集并提交用户输入。'
    if code.startswith('</form'):
        return '表单结构结束。'
    if code.startswith('<input'):
        return '输入控件，接收用户填写或隐藏提交的数据。'
    if code.startswith('<button'):
        return '按钮控件，触发提交、弹窗、切换或其他页面动作。'
    if code.startswith('<a '):
        return '链接元素，提供页面跳转或功能入口。'
    if code.startswith('<img'):
        return '图片元素，展示封面、头像或页面视觉素材。'
    if code.startswith('</'):
        return 'HTML 闭合标签，结束前面打开的页面结构。'
    if code.startswith('<'):
        tag = code[1:].split()[0].split('>', 1)[0].strip('/').lower()
        return f'HTML `{tag}` 元素，构成当前页面的结构、内容或交互区域。'
    return '页面文本或模板内容，会作为界面文案、属性值或脚本片段参与渲染。'


def describe_line(path: Path, line: str) -> str:
    code = normalize_code(line)
    suffix = path.suffix.lower()
    if suffix == '.py':
        return describe_python(code)
    if suffix == '.js':
        return describe_javascript(code)
    if suffix == '.css':
        return describe_css(code)
    if suffix == '.html':
        return describe_html(code)
    return '源码行，参与项目运行或页面渲染。'


def output_path_for(source_path: Path) -> Path:
    relative = source_path.relative_to(PROJECT_ROOT)
    return OUTPUT_ROOT / relative.with_suffix(relative.suffix + '.md')


def render_file_doc(path: Path) -> str:
    relative = path.relative_to(PROJECT_ROOT).as_posix()
    lines = path.read_text(encoding='utf-8').splitlines()
    rows = [
        f'# {relative}',
        '',
        '此文件为自动生成的逐行注释文档，不参与项目运行。',
        '',
        '| 行号 | 原代码 | 逐行注释 |',
        '| ---: | --- | --- |',
    ]
    for index, line in enumerate(lines, start=1):
        code = html.escape(line if line else ' ')
        note = html.escape(describe_line(path, line))
        rows.append(f'| {index} | <code>{code}</code> | {note} |')
    rows.append('')
    return '\n'.join(rows)


def render_index(files: list[Path]) -> str:
    total_lines = 0
    rows = [
        '# 项目逐行注释索引',
        '',
        '此目录由 `tools/generate_line_comment_docs.py` 自动生成，覆盖 Git 已跟踪的 Python、JavaScript、CSS、HTML/Jinja 文件。',
        '',
        '| 文件 | 行数 | 注释文档 |',
        '| --- | ---: | --- |',
    ]
    for path in files:
        relative = path.relative_to(PROJECT_ROOT).as_posix()
        line_count = len(path.read_text(encoding='utf-8').splitlines())
        total_lines += line_count
        doc_relative = output_path_for(path).relative_to(OUTPUT_ROOT).as_posix()
        rows.append(f'| `{relative}` | {line_count} | [{doc_relative}]({doc_relative}) |')
    rows.extend([
        '',
        f'覆盖文件数：{len(files)}',
        f'覆盖源码行数：{total_lines}',
        '',
    ])
    return '\n'.join(rows)


def main() -> None:
    files = tracked_source_files()
    if OUTPUT_ROOT.exists():
        shutil.rmtree(OUTPUT_ROOT)
    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)

    for path in files:
        doc_path = output_path_for(path)
        doc_path.parent.mkdir(parents=True, exist_ok=True)
        doc_path.write_text(render_file_doc(path), encoding='utf-8')

    (OUTPUT_ROOT / 'README.md').write_text(render_index(files), encoding='utf-8')
    print(f'generated {len(files)} files under {OUTPUT_ROOT}')


if __name__ == '__main__':
    main()
