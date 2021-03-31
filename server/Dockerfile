FROM node:14-alpine

WORKDIR /server

COPY ./package*.json /server/

RUN npm install

COPY . /server

RUN apk update && apk add python

RUN npm run build

EXPOSE 3456

CMD npm run start:prod
