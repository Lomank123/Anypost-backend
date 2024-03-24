# Anypost-backend

Server side application for Anypost project

## Goals

What needs to be covered:

- TypeORM
- Authorization & Authentication
- DB Migrations (done)
- Nested routes
- Applications interaction
- Form validations (DTOs) (done)
- Cookies & JWT
- Task scheduling
- Server side rendering
- Connection between backend & frontend


## Installation

- Create `.env` file and copy the content of `.env.example` to it (don't forget to change env variables):

```shell
touch .env
cp .env.example .env
```

- Install packages:

```shell
npm install
```

- Start Docker containers (for now it is required only for DB):

```shell
docker compose up -d --build
```

- Run migrations

```shell
npm run migration:run
```

- Start the server:

```shell
npm run start:dev
```


## Migrations

- To generate migration:

```shell
npm run migration:generate ./src/migrations/<migration-name>
```