import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreatePlanOfBillsDto } from './dto';
import { PlanOfBillsService } from './plan-of-bills.service';

@Controller('api/plan-of-bills')
export class PlanOfBillsController {
    constructor(private readonly planOfBillsService: PlanOfBillsService){}

    @Get()
    async getClassifications(){
        return this.planOfBillsService.getPlanOfBills()
    }

    @Post()
    async create(@Body() createPlanOfBillsDto: CreatePlanOfBillsDto){
       return this.planOfBillsService.create(createPlanOfBillsDto)
    }

}
