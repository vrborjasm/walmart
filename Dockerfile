FROM node:14-alpine3.14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

CMD ["npm", "start"]
