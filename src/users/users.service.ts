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
  ) {}

  createUser(createUserDto: CreateUserDto): void {
    console.log(createUserDto);
    this.usersRepository.save(createUserDto);
  }
}
