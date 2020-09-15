import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classification } from './classification.entity';
import { CreateClassificationDto } from './dto';

@Injectable()
export class ClassificationService {
    constructor(@InjectRepository(Classification)private readonly classificationRepo: Repository<Classification>){}

    async create(classification: CreateClassificationDto): Promise<Classification>{
        return await this.classificationRepo.save(this.classificationRepo.create(classification))
    }

}
