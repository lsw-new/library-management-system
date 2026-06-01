# email_utils.py

此文件为自动生成的逐行注释文档，不参与项目运行。

| 行号 | 原代码 | 逐行注释 |
| ---: | --- | --- |
| 1 | <code>import logging</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 2 | <code>import os</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 3 | <code>import random</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 4 | <code>import smtplib</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 5 | <code>import string</code> | 导入外部模块，供当前 Python 文件后续逻辑调用。 |
| 6 | <code>from hmac import compare_digest</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 7 | <code>from datetime import timedelta</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 8 | <code>from email.mime.multipart import MIMEMultipart</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 9 | <code>from email.mime.text import MIMEText</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 10 | <code>from email.utils import formataddr</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 11 | <code>from extensions import db</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 12 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 13 | <code>from email_templates import (</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 14 | <code>    build_verification_email,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 15 | <code>    build_borrow_notification_email,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 16 | <code>    build_rejection_email,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 17 | <code>    build_expiry_email,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 18 | <code>    build_password_reset_email,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 19 | <code>    _CODE_TTL_MINUTES,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 20 | <code>    _html_text,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 21 | <code>)</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 22 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 23 | <code>logger = logging.getLogger(__name__)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 24 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 25 | <code>_SMTP_SERVER = &quot;smtp.qq.com&quot;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 26 | <code>_SMTP_PORT = 587</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 27 | <code>_SENDER_EMAIL = os.environ.get(&quot;SMTP_SENDER_EMAIL&quot;, &quot;&quot;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 28 | <code>_SENDER_PASSWORD = os.environ.get(&quot;SMTP_SENDER_PASSWORD&quot;, &quot;&quot;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 29 | <code>_SUBJECT_MAX_LENGTH = 120</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 30 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 31 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 32 | <code>def _sanitize_header(value: object, max_length: int | None = None) -&gt; str:</code> | 定义 `_sanitize_header` 函数，承载当前模块中的一段可复用处理流程。 |
| 33 | <code>    sanitized = &#x27; &#x27;.join(str(value).split())</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 34 | <code>    return sanitized[:max_length] if max_length else sanitized</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 35 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 36 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 37 | <code>def _mask_email(email: str) -&gt; str:</code> | 定义 `_mask_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 38 | <code>    local, sep, domain = email.partition(&#x27;@&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 39 | <code>    if not sep:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 40 | <code>        return &#x27;&lt;invalid-email&gt;&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 41 | <code>    visible = local[:2] if len(local) &gt; 2 else local[:1]</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 42 | <code>    return f&#x27;{visible}***@{domain}&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 43 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 44 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 45 | <code>def generate_code(length: int = 6) -&gt; str:</code> | 定义 `generate_code` 函数，承载当前模块中的一段可复用处理流程。 |
| 46 | <code>    return &#x27;&#x27;.join(random.choices(string.digits, k=length))</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 47 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 48 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 49 | <code>def _send_email(to_email: str, subject: str, html_content: str) -&gt; bool:</code> | 定义 `_send_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 50 | <code>    if not _SENDER_EMAIL or not _SENDER_PASSWORD:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 51 | <code>        logger.error(&quot;邮件发送失败：SMTP 未配置&quot;)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 52 | <code>        return False</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 53 | <code>    safe_to_email = _sanitize_header(to_email)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 54 | <code>    try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 55 | <code>        msg = MIMEMultipart(&#x27;alternative&#x27;)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 56 | <code>        msg[&#x27;Subject&#x27;] = _sanitize_header(subject, _SUBJECT_MAX_LENGTH)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 57 | <code>        msg[&#x27;From&#x27;] = formataddr((&#x27;景艺大图书馆&#x27;, _SENDER_EMAIL))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 58 | <code>        msg[&#x27;To&#x27;] = safe_to_email</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 59 | <code>        msg.attach(MIMEText(html_content, &#x27;html&#x27;, &#x27;utf-8&#x27;))</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 60 | <code>        with smtplib.SMTP(_SMTP_SERVER, _SMTP_PORT) as server:</code> | 上下文管理语句，自动管理资源打开、提交、释放或回滚。 |
| 61 | <code>            server.starttls()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 62 | <code>            server.login(_SENDER_EMAIL, _SENDER_PASSWORD)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 63 | <code>            server.send_message(msg)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 64 | <code>        return True</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 65 | <code>    except smtplib.SMTPException as exc:</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 66 | <code>        logger.error(</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 67 | <code>            &quot;邮件发送失败 recipient=%s error=%s&quot;,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 68 | <code>            _mask_email(safe_to_email),</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 69 | <code>            exc.__class__.__name__,</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 70 | <code>        )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 71 | <code>        return False</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 72 | <code>    except Exception:</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 73 | <code>        logger.error(&quot;邮件发送失败 recipient=%s&quot;, _mask_email(safe_to_email), exc_info=True)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 74 | <code>        return False</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 75 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 76 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 77 | <code>def send_verification_email(to_email: str, code: str) -&gt; bool:</code> | 定义 `send_verification_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 78 | <code>    html_content = build_verification_email(code)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 79 | <code>    return _send_email(to_email, &#x27;景艺大图书馆 — 邮箱验证码&#x27;, html_content)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 80 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 81 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 82 | <code>def store_verification_code(email: str, code: str) -&gt; bool:</code> | 定义 `store_verification_code` 函数，承载当前模块中的一段可复用处理流程。 |
| 83 | <code>    from models import VerificationCode</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 84 | <code>    from extensions import naive_cst_now</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 85 | <code>    now = naive_cst_now()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 86 | <code>    expires_at = now + timedelta(minutes=_CODE_TTL_MINUTES)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 87 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 88 | <code>    try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 89 | <code>        record = VerificationCode.query.filter_by(email=email).first()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 90 | <code>        if record:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 91 | <code>            record.code = code</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 92 | <code>            record.expires_at = expires_at</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 93 | <code>            record.created_at = now</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 94 | <code>        else:</code> | 条件判断的兜底分支，处理前面条件未命中的情况。 |
| 95 | <code>            db.session.add(VerificationCode(email=email, code=code, expires_at=expires_at))</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 96 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 97 | <code>        VerificationCode.query.filter(VerificationCode.expires_at &lt; now).delete()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 98 | <code>        db.session.commit()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 99 | <code>        return True</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 100 | <code>    except Exception:</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 101 | <code>        db.session.rollback()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 102 | <code>        logger.error(&quot;验证码存储失败 email=%s&quot;, _mask_email(email), exc_info=True)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 103 | <code>        return False</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 104 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 105 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 106 | <code>def delete_verification_code(email: str) -&gt; None:</code> | 定义 `delete_verification_code` 函数，承载当前模块中的一段可复用处理流程。 |
| 107 | <code>    from models import VerificationCode</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 108 | <code>    try:</code> | 异常保护入口，下面的代码可能触发需要捕获的运行时错误。 |
| 109 | <code>        VerificationCode.query.filter_by(email=email).delete()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 110 | <code>        db.session.commit()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 111 | <code>    except Exception:</code> | 异常处理分支，将失败场景转换为可控响应或日志记录。 |
| 112 | <code>        db.session.rollback()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 113 | <code>        logger.error(&quot;验证码清理失败 email=%s&quot;, _mask_email(email), exc_info=True)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 114 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 115 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 116 | <code>def verify_code(email: str, code: str) -&gt; tuple[bool, str]:</code> | 定义 `verify_code` 函数，承载当前模块中的一段可复用处理流程。 |
| 117 | <code>    from models import VerificationCode</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 118 | <code>    from extensions import naive_cst_now</code> | 从指定模块导入函数、类或变量，减少后续引用前缀。 |
| 119 | <code>    now = naive_cst_now()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 120 | <code>    record = VerificationCode.query.filter_by(email=email).first()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 121 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 122 | <code>    if not record:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 123 | <code>        return False, &quot;验证码不存在或已过期&quot;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 124 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 125 | <code>    if now &gt; record.expires_at:</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 126 | <code>        db.session.delete(record)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 127 | <code>        db.session.commit()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 128 | <code>        return False, &quot;验证码已过期&quot;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 129 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 130 | <code>    if compare_digest(record.code, code):</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 131 | <code>        db.session.delete(record)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 132 | <code>        db.session.commit()</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 133 | <code>        return True, &quot;验证成功&quot;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 134 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 135 | <code>    return False, &quot;验证码错误&quot;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 136 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 137 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 138 | <code>def send_code_to_email(email: str) -&gt; tuple[bool, str]:</code> | 定义 `send_code_to_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 139 | <code>    code = generate_code()</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 140 | <code>    # 先存库再发邮件，确保验证码不会丢失</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 141 | <code>    if not store_verification_code(email, code):</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 142 | <code>        return False, &quot;验证码存储失败，请稍后重试&quot;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 143 | <code>    if send_verification_email(email, code):</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 144 | <code>        return True, &quot;验证码已发送，请查收邮件&quot;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 145 | <code>    # 发送失败，清理已存储的验证码</code> | 已有 Python 注释，说明附近代码的目的或约束。 |
| 146 | <code>    delete_verification_code(email)</code> | 函数或方法调用，触发当前行所需的业务处理、查询、渲染或副作用。 |
| 147 | <code>    return False, &quot;验证码发送失败，请稍后重试&quot;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 148 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 149 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 150 | <code>def send_temp_password_email(to_email: str, username: str, new_password: str) -&gt; tuple[bool, str]:</code> | 定义 `send_temp_password_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 151 | <code>    html_content = build_password_reset_email(_html_text(username), _html_text(new_password))</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 152 | <code>    if _send_email(to_email, &#x27;景艺大图书馆 — 密码重置通知&#x27;, html_content):</code> | 条件判断，根据运行时数据选择不同业务分支。 |
| 153 | <code>        return True, &#x27;邮件已发送&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 154 | <code>    return False, &#x27;邮件发送失败&#x27;</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 155 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 156 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 157 | <code>def send_borrow_notification_email(to_email: str, username: str, book_title: str,</code> | 定义 `send_borrow_notification_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 158 | <code>                                   borrow_date: str, return_date: str | None) -&gt; bool:</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 159 | <code>    return_display = return_date if return_date else &#x27;未设置&#x27;</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 160 | <code>    safe_username = _html_text(username)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 161 | <code>    safe_book_title = _html_text(book_title)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 162 | <code>    safe_borrow_date = _html_text(borrow_date)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 163 | <code>    safe_return_display = _html_text(return_display)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 164 | <code>    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 165 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 166 | <code>    html_content = build_borrow_notification_email(</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 167 | <code>        safe_username, safe_book_title, safe_borrow_date, safe_return_display</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 168 | <code>    )</code> | 复合表达式的结束行，关闭前面打开的结构。 |
| 169 | <code>    return _send_email(to_email, f&#x27;景艺大图书馆 — 图书预约成功《{subject_book_title}》&#x27;, html_content)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 170 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 171 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 172 | <code>def send_rejection_email(to_email: str, username: str, book_title: str,</code> | 定义 `send_rejection_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 173 | <code>                         reject_date: str) -&gt; bool:</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 174 | <code>    safe_username = _html_text(username)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 175 | <code>    safe_book_title = _html_text(book_title)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 176 | <code>    safe_reject_date = _html_text(reject_date)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 177 | <code>    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 178 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 179 | <code>    html_content = build_rejection_email(safe_username, safe_book_title, safe_reject_date)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 180 | <code>    return _send_email(to_email, f&#x27;景艺大图书馆 — 预约被拒绝《{subject_book_title}》&#x27;, html_content)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
| 181 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 182 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 183 | <code>def send_expiry_email(to_email: str, username: str, book_title: str,</code> | 定义 `send_expiry_email` 函数，承载当前模块中的一段可复用处理流程。 |
| 184 | <code>                      borrow_date: str) -&gt; bool:</code> | Python 语句，参与当前模块的配置、数据处理或控制流程。 |
| 185 | <code>    safe_username = _html_text(username)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 186 | <code>    safe_book_title = _html_text(book_title)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 187 | <code>    safe_borrow_date = _html_text(borrow_date)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 188 | <code>    subject_book_title = _sanitize_header(book_title, _SUBJECT_MAX_LENGTH)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 189 | <code> </code> | 空行，用于分隔 Python 代码块，提升阅读层次。 |
| 190 | <code>    html_content = build_expiry_email(safe_username, safe_book_title, safe_borrow_date)</code> | 变量赋值或对象属性赋值，保存后续业务逻辑需要使用的数据。 |
| 191 | <code>    return _send_email(to_email, f&#x27;景艺大图书馆 — 预约已过期《{subject_book_title}》&#x27;, html_content)</code> | 返回当前函数的计算结果或响应对象，结束这一条执行路径。 |
