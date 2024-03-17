import { config } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// Load env variables
config();

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER || 'db-user',
  password: process.env.DB_PASS || 'db-pass',
  database: process.env.DB_NAME || 'db-name',
  synchronize: process.env.ENV !== 'prod',
  entities: [__dirname + '/../**/*.entity.js'],
};
