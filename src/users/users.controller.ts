import { Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  @Post()
  async createUsers() {
    await this.usersService.createUsers();
  }

  @Get('/:id')
  async getUserById(@Param() params: any): Promise<User | null> {
    const user = await this.usersService.getById(params.id);

    Logger.warn(JSON.stringify(user));

    return user;
  }
}
