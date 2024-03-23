import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

// Load env variables
config();

export const DB_CONFIG: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'db-user',
  password: process.env.DB_PASS || 'db-pass',
  database: process.env.DB_NAME || 'db-name',
  logging: process.env.ENV !== 'prod',
  entities: [__dirname + '/**/*.entity{.js,.ts}'],
  // Migrations
  synchronize: false,
  migrationsTableName: 'anypost-migrations',
  migrationsRun: false,
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
};
