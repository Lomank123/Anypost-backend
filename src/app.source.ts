import { DataSource } from 'typeorm';
import { DB_CONFIG } from './app.settings';

export const dataSource = new DataSource(DB_CONFIG);
