FROM node:20-alpine as BASE

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm run dist

EXPOSE 3000

CMD [ "npm","start" ]