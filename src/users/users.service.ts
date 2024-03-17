import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  getById(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async createUsers() {
    const newUsers: User[] = [];
    const users = await this.getAll();

    for (let i = users.length; i < users.length + 1; i++) {
      newUsers.push(
        this.usersRepository.create({
          username: `test${i + 1}`,
          email: `test${i + 1}@test.com`,
        }),
      );
    }

    return await this.usersRepository.save(newUsers);
  }
}
