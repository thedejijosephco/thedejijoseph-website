# Build stage for frontend
FROM node:20-alpine AS build-frontend
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG VITE_SUPABASE_PROJECT_ID
ARG VITE_SUPABASE_PUBLISHABLE_KEY
ARG VITE_SUPABASE_URL
ARG VITE_API_BASE_URL
ENV VITE_SUPABASE_PROJECT_ID=$VITE_SUPABASE_PROJECT_ID
ENV VITE_SUPABASE_PUBLISHABLE_KEY=$VITE_SUPABASE_PUBLISHABLE_KEY
ENV VITE_SUPABASE_URL=$VITE_SUPABASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
RUN npm run build

# Build stage for backend (preparing node_modules)
FROM node:20-alpine AS build-backend
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY server/ ./server/
COPY tsconfig.json ./

# Final stage
FROM node:20-alpine
RUN apk add --no-cache caddy

WORKDIR /app

# Copy frontend build
COPY --from=build-frontend /app/dist /usr/share/caddy

# Copy backend and dependencies
COPY --from=build-backend /app/node_modules ./node_modules
COPY --from=build-backend /app/package.json ./package.json
COPY server/ ./server/
COPY Caddyfile /etc/caddy/Caddyfile
COPY start.sh /start.sh

RUN chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]
