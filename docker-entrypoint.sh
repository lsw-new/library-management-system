#!/bin/sh
set -e

mkdir -p /app/static/images/avatars /app/logs

if [ -f /app/default-assets/default-book.jpg ] && [ ! -f /app/static/images/default-book.jpg ]; then
    cp /app/default-assets/default-book.jpg /app/static/images/default-book.jpg
fi

cp -r /app/default-assets/js/* /app/static/js/ 2>/dev/null || true
cp -r /app/default-assets/css/* /app/static/css/ 2>/dev/null || true
cp -r /app/default-assets/fonts/* /app/static/fonts/ 2>/dev/null || true

exec "$@"
