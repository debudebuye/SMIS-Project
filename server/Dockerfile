FROM node:20

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run seed 

EXPOSE 3003

CMD [ "nodemon", "server" ]

