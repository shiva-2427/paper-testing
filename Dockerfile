# Stage 1: Build the Vite production assets
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependency manifests
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the SPA (Outputs to /dist)
RUN npm run build

# Stage 2: Serve using NGINX
FROM nginx:alpine

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy compiled React UI from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the Cloud Run required port (8080)
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
