import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlanOfBillsDto } from './dto';
import { PlanOfBills } from './plan-of-bills.entity';

@Injectable()
export class PlanOfBillsService {
    constructor(@InjectRepository(PlanOfBills)private readonly planOfBillsRepo: Repository<PlanOfBills>){}

    async create(planOfBills: CreatePlanOfBillsDto): Promise<PlanOfBills>{
        return await this.planOfBillsRepo.save(this.planOfBillsRepo.create(planOfBills))
    }
    
    async getPlanOfBills(){
        return await this.planOfBillsRepo.find()
    }
}
