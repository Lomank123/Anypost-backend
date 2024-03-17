import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from './app.settings';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // ENV variables
    ConfigModule.forRoot(),
    // DB connection
    TypeOrmModule.forRoot(DB_CONFIG),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
