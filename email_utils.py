import logging
import random
import smtplib
import string
from datetime import timedelta
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import formataddr

from datetime import datetime

from extensions import db

logger = logging.getLogger(__name__)

_SMTP_SERVER = "smtp.qq.com"
_SMTP_PORT = 587
_SENDER_EMAIL = "xianyu20046@qq.com"
_SENDER_PASSWORD = "pifvqcyzpeacffee"
_CODE_TTL_MINUTES = 10


def generate_code(length=6):
    return ''.join(random.choices(string.digits, k=length))


def send_verification_email(to_email, code):
    html_content = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>景艺大图书馆 · 验证码</title>
</head>
<body style="margin:0;padding:0;background:#FDE8F0;font-family:'Segoe UI',Arial,sans-serif;">

<!-- 外层背景 -->
<table width="100%" cellpadding="0" cellspacing="0" style="background:#FDE8F0;padding:32px 16px;">
<tr><td align="center">

<!-- 主卡片 -->
<table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 8px 40px rgba(220,60,120,0.18);">

  <!-- ═══ HEADER ═══ -->
  <tr>
    <td style="background:linear-gradient(135deg,#C2185B 0%,#E91E8C 45%,#CE93D8 100%);padding:0;position:relative;">

      <!-- 顶部装饰波点行 -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:18px 30px 0;text-align:right;font-size:18px;letter-spacing:4px;color:rgba(255,255,255,0.35);">
            ✦ &nbsp; ✦ &nbsp; ✦
          </td>
        </tr>
      </table>

      <!-- 徽章 + 标题 -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:10px 36px 32px;text-align:center;">
            <!-- 圆形图标 -->
            <div style="display:inline-block;width:68px;height:68px;border-radius:50%;background:rgba(255,255,255,0.18);border:2px solid rgba(255,255,255,0.5);line-height:68px;font-size:30px;margin-bottom:14px;">
              📖
            </div>
            <div style="color:rgba(255,255,255,0.6);font-size:11px;letter-spacing:4px;text-transform:uppercase;margin-bottom:6px;">
              ✦ &nbsp;Jingyi Grand Library&nbsp; ✦
            </div>
            <h1 style="margin:0;color:#ffffff;font-size:26px;font-weight:700;letter-spacing:1px;text-shadow:0 2px 12px rgba(0,0,0,0.15);">
              景艺大图书馆
            </h1>
          </td>
        </tr>
      </table>

      <!-- 波浪底边 (SVG) -->
      <div style="line-height:0;font-size:0;">
        <svg viewBox="0 0 600 48" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;">
          <path d="M0,48 C150,0 450,0 600,48 L600,48 L0,48 Z" fill="#ffffff"/>
        </svg>
      </div>
    </td>
  </tr>

  <!-- ═══ BODY ═══ -->
  <tr>
    <td style="padding:8px 44px 36px;">

      <!-- 问候语 -->
      <p style="margin:0 0 6px;font-size:22px;font-weight:700;color:#B5004A;letter-spacing:0.5px;">
        你好呀，新朋友 &nbsp;♡
      </p>
      <p style="margin:0 0 28px;font-size:14px;color:#9E7A88;line-height:1.8;">
        欢迎来到景艺大图书馆的奇妙世界～<br>
        请使用下面这枚专属验证码完成注册，它只为你而存在哦 ✨
      </p>

      <!-- 验证码卡片 -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        <tr>
          <td style="background:linear-gradient(135deg,#FFF0F7,#FDF0FF);border-radius:20px;border:1.5px solid #F48FB1;padding:28px 20px;text-align:center;">

            <div style="font-size:11px;letter-spacing:3px;color:#D46B94;text-transform:uppercase;margin-bottom:14px;">
              ✦ &nbsp; Your Verification Code &nbsp; ✦
            </div>

            <!-- 验证码数字 -->
            <div style="display:inline-block;">
              <span style="font-size:46px;font-weight:900;letter-spacing:14px;color:#C2185B;font-family:'Courier New',monospace;text-shadow:0 2px 16px rgba(194,24,91,0.25);padding-right:4px;">
                {code}
              </span>
            </div>

            <div style="margin-top:14px;font-size:12px;color:#C48FA0;letter-spacing:1px;">
              ♡ &nbsp; 有效期 <strong style="color:#E91E8C;">{_CODE_TTL_MINUTES} 分钟</strong> &nbsp; ♡
            </div>
          </td>
        </tr>
      </table>

      <!-- 注意事项 -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td style="background:#FFF5F9;border-radius:14px;border-left:4px solid #F06292;padding:18px 20px;">
            <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#C2185B;">温馨小提示 ♡</p>
            <p style="margin:0;font-size:13px;color:#9E7A88;line-height:2;">
              🌸 &nbsp;请勿将验证码告知任何人，包括图书馆工作人员<br>
              🌸 &nbsp;验证码仅用于本次注册，使用后即刻失效<br>
              🌸 &nbsp;如非本人操作，请忽略此邮件，账号依然安全
            </p>
          </td>
        </tr>
      </table>

      <!-- 签名 -->
      <p style="margin:0;font-size:13px;color:#C9A0B0;line-height:2;text-align:right;">
        愿你在书页与灵感之间，收获一段美好的阅读时光。<br>
        <span style="font-size:15px;font-weight:700;color:#E91E8C;">景艺大图书馆</span>
        <span style="font-size:12px;color:#D4A0B8;">· 自动邮件中心</span><br>
        <span style="font-size:18px;letter-spacing:3px;">♡ ✦ ♡</span>
      </p>

    </td>
  </tr>

  <!-- ═══ FOOTER ═══ -->
  <tr>
    <td style="background:linear-gradient(135deg,#FCE4EC,#F3E5F5);padding:20px 36px;border-top:1px solid #F8BBD0;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="text-align:center;">
            <p style="margin:0 0 4px;font-size:11px;color:#C48FA0;letter-spacing:2px;text-transform:uppercase;">
              ✦ &nbsp; Jingyi Grand Library &nbsp; ✦
            </p>
            <p style="margin:0;font-size:11px;color:#D4A0B8;">
              景德镇艺术职业大学图书馆 &nbsp;·&nbsp; 此邮件由系统自动发送，请勿回复
            </p>
          </td>
        </tr>
      </table>
    </td>
  </tr>

</table>
<!-- /主卡片 -->

</td></tr>
</table>
<!-- /外层背景 -->

</body>
</html>"""
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = '♡ 景艺大图书馆 · 你的专属验证码来啦'
        msg['From'] = formataddr(('景艺大图书馆', _SENDER_EMAIL))
        msg['To'] = to_email
        msg.attach(MIMEText(html_content, 'html', 'utf-8'))

        with smtplib.SMTP(_SMTP_SERVER, _SMTP_PORT) as server:
            server.starttls()
            server.login(_SENDER_EMAIL, _SENDER_PASSWORD)
            server.send_message(msg)
        return True
    except Exception:
        logger.error("邮件发送失败 to=%s", to_email, exc_info=True)
        return False


def store_verification_code(email, code):
    from models import VerificationCode
    now = datetime.now()
    expires_at = now + timedelta(minutes=_CODE_TTL_MINUTES)

    record = VerificationCode.query.filter_by(email=email).first()
    if record:
        record.code = code
        record.expires_at = expires_at
        record.created_at = now
    else:
        db.session.add(VerificationCode(email=email, code=code, expires_at=expires_at))

    VerificationCode.query.filter(VerificationCode.expires_at < now).delete()
    db.session.commit()


def verify_code(email, code):
    from models import VerificationCode
    record = VerificationCode.query.filter_by(email=email).first()

    if not record:
        return False, "验证码不存在或已过期"

    if datetime.now() > record.expires_at:
        db.session.delete(record)
        db.session.commit()
        return False, "验证码已过期"

    if record.code == code:
        db.session.delete(record)
        db.session.commit()
        return True, "验证成功"

    return False, "验证码错误"


def send_code_to_email(email):
    code = generate_code()
    if send_verification_email(email, code):
        store_verification_code(email, code)
        return True, "验证码已发送，请查收邮件"
    return False, "验证码发送失败，请稍后重试"
