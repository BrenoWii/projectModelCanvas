import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    getAllUsers(): string []{
        return this.userService.getAllUsers()
    }

    @Get(':id')
    getUserById(@Param('id') id): string{
        return this.userService.getUserById(id)
    }
}
