import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User)private readonly userRepo: Repository<User>){}


    async getAllUsers(): Promise<User[]>{
        return await this.userRepo.find()
    }
    async getUserById(userId: number): Promise<User>{
        return await this.userRepo.findOne(userId)
    }

    async create(userCreation: CreateUserDto): Promise<User>{
        console.log(userCreation)
        return await this.userRepo.save(this.userRepo.create(userCreation))
    }
}
