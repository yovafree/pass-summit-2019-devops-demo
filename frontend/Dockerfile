FROM node:alpine AS builder
COPY . ./frontend
WORKDIR /frontend
ARG API_URL
ENV SERVER=$API_URL
RUN npm i
RUN $(npm bin)/ng build --prod --build-optimizer=false --aot=false

FROM nginx:alpine
COPY --from=builder /frontend/dist/frontend/ /usr/share/nginx/html/