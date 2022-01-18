FROM node:14-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install react@17.0.2
RUN npm install react-scripts@5.0.0 -g
RUN npm install

COPY . .

CMD ["npm", "start"]

