import * as crypto from 'crypto';
import { Injectable, NotAcceptableException  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { PasswordTransformer } from './password.transformer';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }


    async getAllUsers(): Promise<User[]> {
        return await this.userRepo.find()
    }
    async getUserById(userId: number): Promise<User> {
        return await this.userRepo.findOne(userId)
    }
    async getByEmail(email: string) {
        return await this.userRepo
          .createQueryBuilder('users')
          .where('users.email = :email')
          .setParameter('email', email)
          .getOne();
    }
      
  async getByEmailAndPass(email: string, password: string) {
      
    const passHash = crypto.createHmac('sha256', password).digest('hex');
    return await this.userRepo
      .createQueryBuilder('users')
      .where('users.email = :email and users.password = :password')
      .setParameter('email', email)
      .setParameter('password', passHash)
      .getOne();
    }

    async create(userCreation: CreateUserDto): Promise<User> {
        const user = await this.getByEmail(userCreation.email);

        if (user) {
            throw new NotAcceptableException(
              'Já existe um usuário com esse email',
            );
          }
      
        return await this.userRepo.save(this.userRepo.create(userCreation))
    }
}
