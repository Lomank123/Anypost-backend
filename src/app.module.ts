import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from './app.settings';
import { PostsModule } from './posts/modules/posts.module';

@Module({
  imports: [
    // ENV variables
    ConfigModule.forRoot(),
    // DB connection
    TypeOrmModule.forRoot(DB_CONFIG),
    // Custom modules
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
