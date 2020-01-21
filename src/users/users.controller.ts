import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './users.dto';

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post("/create")
  createUser(@Body() createUserDto: CreateUserDto) {
    this.usersService.createUser(createUserDto);
  }
}
