FROM node:12.18.2-alpine3.9

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build
EXPOSE 8081

CMD ["npm", "run", "eb:prod"]
