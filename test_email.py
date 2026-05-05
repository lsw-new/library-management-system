"""测试邮件发送功能"""
from email_utils import send_code_to_email

# 测试发送验证码
email = "test@example.com"
print(f"正在向 {email} 发送验证码...")
success, message = send_code_to_email(email)
print(f"结果: success={success}, message={message}")
