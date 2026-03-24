#!/bin/sh

# Start the backend in the background
echo "Starting Hono backend..."
npm run start:backend &

# Start Caddy in the foreground
echo "Starting Caddy server..."
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile
