import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) { }

  async getAllUser(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async getUser(id: string): Promise<User> {
    return await this.usersRepository.findOne(id);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.usersRepository.save(createUserDto);
  }

  async deleteUser(id: string): Promise<User> {
    const user = await this.usersRepository.findOne(id);
    return this.usersRepository.remove(user);
  }
}
