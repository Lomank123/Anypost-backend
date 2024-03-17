# Anypost-backend

Server side application for Anypost project


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
