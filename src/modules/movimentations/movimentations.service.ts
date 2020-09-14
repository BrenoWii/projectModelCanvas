import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovimentationDto } from './dto';
import { Movimentation } from './movimentation.entitiy';
@Injectable()
export class MovimentationsService {
    constructor(@InjectRepository(Movimentation)private readonly movimentationRepo: Repository<Movimentation>){}
    async getAllMovimentations(): Promise<Movimentation[]>{
        return this.movimentationRepo.find()
    }
    async getMovimentationById(id: number): Promise<Movimentation>{
        return this.movimentationRepo.findOne(id)
    }
    async create(movimentation: CreateMovimentationDto): Promise<Movimentation>{
        return await this.movimentationRepo.save(this.movimentationRepo.create(movimentation))
    }
}
