FROM node:21-alpine3.18

COPY  package*.json ./

RUN npm install

COPY . .

RUN npm run prisma:generate

RUN npm run build 

CMD sleep 15 && node dist/main.js