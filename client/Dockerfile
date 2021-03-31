FROM node:14-alpine

WORKDIR /client

COPY ./package*.json /client/

RUN npm install

COPY . /client

#EXPOSE 3000

#CMD npm run start
CMD npm run build

FROM nginx:stable-alpine

#COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

#COPY nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ['nginx','-g','deamon off;']