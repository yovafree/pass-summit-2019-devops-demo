FROM node:alpine AS builder
COPY . ./frontend
WORKDIR /frontend
RUN npm i
RUN $(npm bin)/ng build

FROM nginx:alpine
COPY --from=builder /frontend/dist/frontend/ /usr/share/nginx/html/