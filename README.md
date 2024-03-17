# Anypost-backend

Server side application for Anypost project

## Goals

What needs to be covered:

- TypeORM
- Authorization & Authentication
- DB Migrations
- Nested routes
- Applications interaction
- Form validations
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

- Start the server (available commands can be found in `package.json`):

```shell
npm run start:dev
```
