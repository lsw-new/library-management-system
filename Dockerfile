FROM python:3.12-slim AS builder

WORKDIR /build
COPY requirements.txt .
RUN pip install --no-cache-dir --prefix=/install -r requirements.txt "gunicorn==22.0.0"

FROM python:3.12-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    TZ=Asia/Shanghai \
    HOME=/home/appuser

WORKDIR /app

COPY --from=builder /install /usr/local

COPY . .

RUN mkdir -p static/images static/images/avatars static/logs /app/default-assets \
    && cp static/images/default-book.jpg /app/default-assets/default-book.jpg \
    && cp -r static/js /app/default-assets/js \
    && cp -r static/css /app/default-assets/css \
    && cp -r static/fonts /app/default-assets/fonts \
    && chmod +x docker-entrypoint.sh \
    && useradd -r -m -d /home/appuser -s /sbin/nologin appuser \
    && chown -R appuser:appuser /app /home/appuser

USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD python -c "import urllib.request;urllib.request.urlopen('http://localhost:5000/health')" || exit 1

ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["gunicorn", "-w", "1", "-k", "eventlet", "-b", "0.0.0.0:5000", "--timeout", "120", "--worker-connections", "1000", "--access-logfile", "-", "app:app"]
