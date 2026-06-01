# 逐行注释：从指定模块导入类、函数或变量，简化后续代码引用。
from html import escape
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_CODE_TTL_MINUTES = 10
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_html_text` 函数，封装一段可复用的后端处理流程。
def _html_text(value: object) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return escape(str(value), quote=True)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_MAIL_OUTER_OPEN = """\
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  @media only screen and (max-width: 480px) {
    .m-wrap { padding: 16px 6px !important; }
    .m-card { border-radius: 18px !important; }
    .m-hpad { padding-left: 24px !important; padding-right: 24px !important; }
    .m-bpad { padding-left: 20px !important; padding-right: 20px !important; }
    .m-title { font-size: 22px !important; }
    .m-digit { width: 36px !important; height: 44px !important; font-size: 22px !important; border-radius: 10px !important; }
    .m-dgap { width: 4px !important; }
    .m-code-box { padding: 24px 12px !important; }
    .m-date-col { display: block !important; width: 100% !important; border-left: none !important; border-top: 1px solid rgba(216,180,254,0.12) !important; padding: 14px 20px !important; }
    .m-date-first { border-top: none !important; }
    .m-cpad { padding-left: 20px !important; padding-right: 20px !important; }
    .m-fpad { padding-left: 20px !important; padding-right: 20px !important; }
    .m-divpad { padding-left: 20px !important; padding-right: 20px !important; }
    .m-tippad { padding: 16px 18px !important; }
    .m-btitle { font-size: 17px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:linear-gradient(135deg,#FFE4F1 0%,#FFF0F5 35%,#F3E5F5 70%,#FCE4EC 100%);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Microsoft YaHei',sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" class="m-wrap" style="background:linear-gradient(135deg,#FFE4F1 0%,#FFF0F5 35%,#F3E5F5 70%,#FCE4EC 100%);padding:48px 16px;">
<tr><td align="center">

<table width="620" cellpadding="0" cellspacing="0" class="m-card" style="max-width:620px;width:100%;background:rgba(255,255,255,0.92);border-radius:24px;overflow:hidden;border:1px solid rgba(216,180,254,0.3);box-shadow:0 30px 60px -28px rgba(192,132,252,0.15),0 2px 4px rgba(216,180,254,0.06);">"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_MAIL_OUTER_CLOSE = """\

</table>
</td></tr>
</table>

</body>
</html>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
_MAIL_FOOTER = """\

  <tr>
    <td class="m-fpad" style="padding:0 48px;">
      <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(216,180,254,0.2),transparent);"></div>
    </td>
  </tr>

  <tr>
    <td class="m-fpad" style="padding:28px 48px 32px;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <p style="margin:0 0 4px;font-size:13px;font-weight:700;color:#9d4e7a;">
              景艺大图书馆
            </p>
            <p style="margin:0;font-size:12px;color:rgba(157,78,122,0.45);line-height:1.7;">
              景德镇艺术职业大学图书馆<br>
              此邮件由系统自动发送，请勿直接回复
            </p>
          </td>
          <td style="text-align:right;vertical-align:top;">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="width:6px;height:6px;border-radius:50%;background:#f9a8d4;"></td>
                <td style="width:6px;"></td>
                <td style="width:6px;height:6px;border-radius:50%;background:#d8b4fe;"></td>
              </tr>
            </table>
            <p style="margin:6px 0 0;font-size:10px;color:rgba(157,78,122,0.35);letter-spacing:3px;text-transform:uppercase;font-weight:700;">
              Jingyi Grand<br>Library
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

  <tr>
    <td style="height:4px;background:linear-gradient(90deg,#f9a8d4,#d8b4fe,#f9a8d4);"></td>
  </tr>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_mail_header` 函数，封装一段可复用的后端处理流程。
def _mail_header(title: str, subtitle: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""\

  <tr>
    <td style="height:3px;background:linear-gradient(90deg,#fbcfe8,#e9d5ff,#fbcfe8);"></td>
  </tr>

  <tr>
    <td style="background:linear-gradient(160deg,#f9a8d4 0%,#d8b4fe 50%,#c4b5fd 100%);text-align:center;padding:0;">

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td class="m-hpad" style="padding:36px 48px 0;text-align:center;">
            <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
              <tr>
                <td style="width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.45);"></td>
                <td style="padding:0 10px;font-size:10px;font-weight:800;letter-spacing:4px;text-transform:uppercase;color:rgba(255,255,255,0.6);">
                  Jingyi Grand Library
                </td>
                <td style="width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,0.45);"></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td class="m-hpad" style="padding:24px 48px 40px;text-align:center;">
            <h1 class="m-title" style="margin:0 0 10px;font-size:28px;font-weight:700;color:#FFFFFF;letter-spacing:-0.01em;line-height:1.2;">
              {title}
            </h1>
            <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.55);line-height:1.6;">
              {subtitle}
            </p>
          </td>
        </tr>
      </table>

    </td>
  </tr>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_tip_box` 函数，封装一段可复用的后端处理流程。
def _tip_box(icon: str, title: str, items: list[str],
             # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
             icon_gradient: str = 'linear-gradient(135deg,#fbcfe8,#f9a8d4)') -> str:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    rows = '\n'.join(
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        f'              <tr>\n'
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        f'                <td style="padding:3px 0;font-size:13px;color:rgba(157,78,122,0.6);line-height:1.7;">\n'
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        f'                  <span style="color:#f9a8d4;font-weight:600;">&bull;</span>&nbsp;&nbsp;{item}\n'
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        f'                </td>\n'
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        f'              </tr>'
        # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for item in items
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    )
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""\
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td class="m-tippad" style="background:linear-gradient(135deg,rgba(252,231,243,0.4),rgba(255,255,255,0.8));border-radius:16px;border:1px solid rgba(233,213,255,0.2);padding:20px 24px;">
            <table cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
              <tr>
                <td style="width:28px;height:28px;border-radius:10px;background:{icon_gradient};text-align:center;vertical-align:middle;">
                  <span style="font-size:13px;color:#fff;line-height:28px;">{icon}</span>
                </td>
                <td style="padding-left:10px;font-size:13px;font-weight:700;color:#9d4e7a;">
                  {title}
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" width="100%">
{rows}
            </table>
          </td>
        </tr>
      </table>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_status_card_header` 函数，封装一段可复用的后端处理流程。
def _status_card_header(label: str, status_text: str, gradient: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""\
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td class="m-cpad" style="background:{gradient};padding:16px 28px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin:0;font-size:10px;color:rgba(255,255,255,0.75);letter-spacing:3px;text-transform:uppercase;font-weight:800;">
                          {label}
                        </p>
                      </td>
                      <td style="text-align:right;">
                        <span style="display:inline-block;padding:3px 14px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.25);color:#FFFFFF;font-size:10px;font-weight:700;border-radius:999px;letter-spacing:1px;">
                          &#9679;&nbsp;{status_text}
                        </span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_book_title_section` 函数，封装一段可复用的后端处理流程。
def _book_title_section(safe_title: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""\
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td class="m-cpad" style="padding:24px 28px 20px;background:rgba(255,255,255,0.95);">
                  <p style="margin:0 0 6px;font-size:10px;color:rgba(157,78,122,0.4);letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                    书名 / Title
                  </p>
                  <p class="m-btitle" style="margin:0;font-size:20px;font-weight:700;color:#9d4e7a;line-height:1.4;">
                    {safe_title}
                  </p>
                </td>
              </tr>
            </table>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_divider` 函数，封装一段可复用的后端处理流程。
def _divider() -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return """\
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td class="m-divpad" style="padding:0 28px;background:rgba(255,255,255,0.95);">
                  <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(216,180,254,0.2),transparent);"></div>
                </td>
              </tr>
            </table>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `_single_date_row` 函数，封装一段可复用的后端处理流程。
def _single_date_row(label: str, value: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""\
            <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.95);">
              <tr>
                <td class="m-cpad" style="padding:18px 28px 22px;vertical-align:top;">
                  <p style="margin:0 0 6px;font-size:10px;color:rgba(157,78,122,0.4);letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                    {label}
                  </p>
                  <p style="margin:0;font-size:15px;font-weight:600;color:#9d4e7a;">
                    {value}
                  </p>
                </td>
              </tr>
            </table>"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `build_verification_email` 函数，封装一段可复用的后端处理流程。
def build_verification_email(code: str) -> str:
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    digit_gap = '<td class="m-dgap" style="width:8px;"></td>'
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    digit_cells = [
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        f'<td class="m-digit" style="width:48px;height:56px;background:linear-gradient(180deg,#FFF0F5,#FCE4EC);'
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        f'border:1.5px solid rgba(216,180,254,0.35);'
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        f'border-radius:14px;text-align:center;vertical-align:middle;'
        # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
        f'font-size:28px;font-weight:800;color:#c084fc;font-family:\'Courier New\',monospace;'
        # 逐行注释：调用函数或方法，触发查询、渲染、校验、提交或其他业务动作。
        f'letter-spacing:0;box-shadow:0 4px 12px -4px rgba(192,132,252,0.2);">{_html_text(d)}</td>'
        # 逐行注释：循环控制语句，用于遍历数据集合或重复执行指定逻辑。
        for d in code
    # 逐行注释：关闭前面打开的复合表达式、集合字面量或函数调用结构。
    ]
    # 逐行注释：执行变量、配置或对象属性赋值，保存后续逻辑需要的数据。
    digits = digit_gap.join(digit_cells)
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""{_MAIL_OUTER_OPEN}

{_mail_header("邮箱验证", "请使用以下验证码完成身份验证")}

  <tr>
    <td class="m-bpad" style="padding:8px 48px 44px;">

      <p style="margin:0 0 28px;font-size:15px;color:#9d4e7a;line-height:1.8;">
        你好！感谢你注册景艺大图书馆。<br>
        请在 <strong style="color:#c084fc;">{_CODE_TTL_MINUTES} 分钟</strong>内输入以下验证码以完成验证：
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td class="m-code-box" style="background:linear-gradient(135deg,rgba(252,231,243,0.6),rgba(243,232,255,0.4));border:1px solid rgba(233,213,255,0.25);border-radius:20px;padding:32px 20px;text-align:center;">
            <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
              <tr>
                <td style="padding:4px 12px;background:linear-gradient(135deg,rgba(233,213,255,0.15),rgba(216,180,254,0.15));border-radius:999px;">
                  <p style="margin:0;font-size:10px;color:#c084fc;letter-spacing:3px;text-transform:uppercase;font-weight:800;">
                    Verification Code
                  </p>
                </td>
              </tr>
            </table>
            <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
              <tr>
                {digits}
              </tr>
            </table>
            <p style="margin:20px 0 0;font-size:12px;color:rgba(157,78,122,0.45);">
              有效期 {_CODE_TTL_MINUTES} 分钟 &middot; 仅限本次使用
            </p>
          </td>
        </tr>
      </table>

      {_tip_box('&#x1F512;', '安全提示', [
          '请勿将此验证码分享给任何人',
          '景艺大图书馆工作人员不会向你索取验证码',
          '如非本人操作，请忽略此邮件',
      ])}

    </td>
  </tr>

{_MAIL_FOOTER}

{_MAIL_OUTER_CLOSE}"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `build_borrow_notification_email` 函数，封装一段可复用的后端处理流程。
def build_borrow_notification_email(safe_username: str, safe_book_title: str,
                                    # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                                    safe_borrow_date: str, safe_return_display: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""{_MAIL_OUTER_OPEN}

{_mail_header("图书预约成功", f"{safe_username}，你的预约已确认")}

  <tr>
    <td class="m-bpad" style="padding:8px 48px 44px;">

      <p style="margin:0 0 28px;font-size:15px;color:#9d4e7a;line-height:1.8;">
        你已成功预约图书，请尽快前往图书馆领取。<br>
        以下是你的预约详情：
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td style="border:1px solid rgba(233,213,255,0.25);border-radius:20px;padding:0;overflow:hidden;">

{_status_card_header('Reservation Details', '待领取', 'linear-gradient(135deg,#f472b6,#c084fc)')}
{_book_title_section(safe_book_title)}
{_divider()}

            <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(255,255,255,0.95);">
              <tr>
                <td class="m-date-col m-date-first" width="50%" style="padding:18px 28px 22px;vertical-align:top;">
                  <p style="margin:0 0 6px;font-size:10px;color:rgba(157,78,122,0.4);letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                    预约时间
                  </p>
                  <p style="margin:0;font-size:15px;font-weight:600;color:#9d4e7a;">
                    {safe_borrow_date}
                  </p>
                </td>
                <td class="m-date-col" width="50%" style="padding:18px 28px 22px;vertical-align:top;border-left:1px solid rgba(216,180,254,0.1);">
                  <p style="margin:0 0 6px;font-size:10px;color:rgba(157,78,122,0.4);letter-spacing:2px;text-transform:uppercase;font-weight:700;">
                    预计归还
                  </p>
                  <p style="margin:0;font-size:15px;font-weight:600;color:#9d4e7a;">
                    {safe_return_display}
                  </p>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>

      {_tip_box('&#x26A1;', '注意事项', [
          '请尽快前往图书馆前台出示预约信息并领取图书',
          '超时未领取的预约将自动取消，库存将被释放',
          '请在归还日期前完成归还，逾期可能影响后续借阅权限',
      ], 'linear-gradient(135deg,#e9d5ff,#d8b4fe)')}

    </td>
  </tr>

{_MAIL_FOOTER}

{_MAIL_OUTER_CLOSE}"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `build_rejection_email` 函数，封装一段可复用的后端处理流程。
def build_rejection_email(safe_username: str, safe_book_title: str,
                          # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                          safe_reject_date: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""{_MAIL_OUTER_OPEN}

{_mail_header("预约已被拒绝", f"{safe_username}，你的预约未通过审核")}

  <tr>
    <td class="m-bpad" style="padding:8px 48px 44px;">

      <p style="margin:0 0 28px;font-size:15px;color:#9d4e7a;line-height:1.8;">
        很抱歉，你的图书预约已被管理员拒绝。<br>
        库存已释放，你可以重新预约其他图书。
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td style="border:1px solid rgba(233,213,255,0.25);border-radius:20px;padding:0;overflow:hidden;">

{_status_card_header('Reservation Rejected', '已拒绝', 'linear-gradient(135deg,#fca5a5,#f9a8d4)')}
{_book_title_section(safe_book_title)}
{_divider()}
{_single_date_row('拒绝时间', safe_reject_date)}

          </td>
        </tr>
      </table>

      {_tip_box('&#x1F4AC;', '温馨提示', [
          '如有疑问，请前往图书馆前台咨询工作人员',
          '你可以随时浏览馆藏并预约其他感兴趣的图书',
      ])}

    </td>
  </tr>

{_MAIL_FOOTER}

{_MAIL_OUTER_CLOSE}"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `build_password_reset_email` 函数，封装一段可复用的后端处理流程。
def build_password_reset_email(safe_username: str, safe_new_password: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""{_MAIL_OUTER_OPEN}

{_mail_header("密码已重置", f"{safe_username}，你的账号密码已被管理员重置")}

  <tr>
    <td class="m-bpad" style="padding:8px 48px 44px;">

      <p style="margin:0 0 28px;font-size:15px;color:#9d4e7a;line-height:1.8;">
        你好，<strong>{safe_username}</strong>！<br>
        管理员已将你的登录密码重置为以下内容，请尽快登录并修改密码：
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td class="m-code-box" style="background:linear-gradient(135deg,rgba(252,231,243,0.6),rgba(243,232,255,0.4));border:1px solid rgba(233,213,255,0.25);border-radius:20px;padding:32px 20px;text-align:center;">
            <table cellpadding="0" cellspacing="0" style="margin:0 auto 16px;">
              <tr>
                <td style="padding:4px 12px;background:linear-gradient(135deg,rgba(233,213,255,0.15),rgba(216,180,254,0.15));border-radius:999px;">
                  <p style="margin:0;font-size:10px;color:#c084fc;letter-spacing:3px;text-transform:uppercase;font-weight:800;">
                    New Password
                  </p>
                </td>
              </tr>
            </table>
            <p style="margin:0;font-size:28px;font-weight:800;color:#c084fc;font-family:'Courier New',monospace;letter-spacing:4px;">
              {safe_new_password}
            </p>
            <p style="margin:20px 0 0;font-size:12px;color:rgba(157,78,122,0.45);">
              即你的学号 &middot; 请登录后尽快修改
            </p>
          </td>
        </tr>
      </table>

      {_tip_box('&#x1F512;', '安全提示', [
          '请尽快登录并在个人设置中修改为你自己的密码',
          '请勿将密码分享给任何人',
          '如非本人操作，请立即联系管理员',
      ])}

    </td>
  </tr>

{_MAIL_FOOTER}

{_MAIL_OUTER_CLOSE}"""
# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：空行，用于分隔 Python 代码块，提升代码阅读层次。

# 逐行注释：定义 `build_expiry_email` 函数，封装一段可复用的后端处理流程。
def build_expiry_email(safe_username: str, safe_book_title: str,
                       # 逐行注释：Python 语句，参与当前后端模块的配置、数据处理或控制流程。
                       safe_borrow_date: str) -> str:
    # 逐行注释：返回当前函数的结果或 HTTP 响应，并结束这一条执行路径。
    return f"""{_MAIL_OUTER_OPEN}

{_mail_header("预约已过期", f"{safe_username}，你的预约因超时未领取已自动取消")}

  <tr>
    <td class="m-bpad" style="padding:8px 48px 44px;">

      <p style="margin:0 0 28px;font-size:15px;color:#9d4e7a;line-height:1.8;">
        你的图书预约因超时未领取已自动过期。<br>
        库存已释放，欢迎重新预约。
      </p>

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
        <tr>
          <td style="border:1px solid rgba(233,213,255,0.25);border-radius:20px;padding:0;overflow:hidden;">

{_status_card_header('Reservation Expired', '已逾期', 'linear-gradient(135deg,#fdba74,#f9a8d4)')}
{_book_title_section(safe_book_title)}
{_divider()}
{_single_date_row('原预约时间', safe_borrow_date)}

          </td>
        </tr>
      </table>

      {_tip_box('&#x1F4A1;', '温馨提示', [
          '预约后请在规定时间内前往图书馆领取',
          '你可以重新预约该图书或选择其他馆藏',
      ], 'linear-gradient(135deg,#e9d5ff,#d8b4fe)')}

    </td>
  </tr>

{_MAIL_FOOTER}

{_MAIL_OUTER_CLOSE}"""
