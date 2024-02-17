FROM node:21-alpine3.18

RUN npm i -g prisma

COPY . .

CMD sleep 10 && prisma migrate deploy --schema analytics/schema.prisma && \
    prisma migrate deploy --schema static/schema.prisma && \
    prisma migrate deploy --schema main/schema.prisma 

