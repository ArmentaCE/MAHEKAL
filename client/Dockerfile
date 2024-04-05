FROM node:17.9.1

WORKDIR /usr/src/app

COPY package*.json ./

COPY build ./build

RUN npm install

RUN npm install -g serve

ENV REACT_APP_BACKEND_URL=http://backend:4000/api

EXPOSE 3000

CMD ["serve", "-s", "build"]