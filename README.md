# Restaurant Order

### Created by: [iamendor](https://github.com/iamendor/iamendor)

A software to make your workflow more efficient as an owner.

# Stack

**Database:** MySQL
<br />
**Api:** Nest.js and Prisma

# Services

## Api

This is a GRAPHQL API built with Nest.js, see the SpectQL docs at [here](./server/docs/index.html).

## Important things for the deployment

In the **_init/db/init.sql_** file change the password of the users and match it with the enviroment variables

### Enviroment variables

#### Database

- _MYSQL_USER_ - The first user created
- _MYSQL_PASSWORD_ - The first user's password
- _MYSQL_ROOT_PASSWORD_ - The root password of MYSQL
- _MAIN_DATABASE_URL_ - The main database
- _MAIN_SHADOW_DATABASE_URL_ - The main shadow database
- _ANALYTICS_DATABASE_URL_ - The analytics database
- _ANALYTICS_SHADOW_DATABASE_URL_ - The analytics shadow database
- _STATIC_DATABASE_URL_ - The static database
- _STATIC_SHADOW_DATABASE_URL_ - The static shadow database

#### Cache

- _REDIS_URL_ - The url of the redis server

#### Api

- _JWT_SECRET_ - The JWT secret for the authorization
- _API_PORT_ - The port that where the api will be running
