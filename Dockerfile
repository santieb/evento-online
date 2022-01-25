FROM node:16.1.0-alpine3.13

WORKDIR /usr/src/app

COPY ./app/package*.json ./

RUN npm install 

RUN npm install -g nodemon

# COPY ./app . 

EXPOSE 3000

CMD ["nodemon", "index.js"]
