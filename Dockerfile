FROM node:18.1

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

ENV PORT=4000

ENV DB=mongodb://mongo:27017/mahekal

ENV FRONTEND_URL=http://frontend:3000

EXPOSE 4000

CMD [ "npm", "start" ]