import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    async getAllUsers(): Promise<User[]>{
        return await this.userService.getAllUsers()
    }

    @Get(':id')
    async getUserById(@Param('id') id): Promise<User>{
        return this.userService.getUserById(id)
    }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
      this.userService.create(createUserDto);
    }
}
