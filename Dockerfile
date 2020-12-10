# Build stage

FROM node:14.13-alpine as builder
WORKDIR /usr/bizone-frontend

COPY . .

RUN npm install
RUN npm run build

# Run stage

FROM nginx:1.15.2-alpine

COPY --from=builder /usr/bizone-frontend/dist /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./robots.txt /var/www/
COPY ./timeout.conf /etc/nginx/conf.d/timeout.conf
