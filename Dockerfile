
FROM node:12.7-alpine AS node

WORKDIR /app

COPY package.json /app/

RUN npm i npm@latest -g

RUN npm install

COPY ./ /app/

ARG env=prod



RUN npm run build

FROM nginx:1.13

COPY --from=node /app/dist/acal-app-v2.1 /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf