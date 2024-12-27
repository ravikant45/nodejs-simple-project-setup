FROM node:20-alpine as BASE

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm","run","dev" ]