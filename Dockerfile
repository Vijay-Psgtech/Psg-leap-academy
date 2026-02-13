# ---- Stage 1: Build ----
FROM node:20-alpine AS build
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy full project
COPY . .

# Build Vite app
RUN npm run build

# ---- Stage 2: Serve with Nginx ----
FROM nginx:alpine

# Copy built output into the subfolder
COPY --from=build /app/dist /usr/share/nginx/html/Psg-leap-academy

EXPOSE 8082
CMD ["nginx", "-g", "daemon off;"]
