import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlanOfBillsDto } from './dto';
import { PlanOfBillsService } from './plan-of-bills.service';

@Controller('plan-of-bills')
export class PlanOfBillsController {
    constructor(private readonly planOfBillsService: PlanOfBillsService){}

    @Post()
    async create(@Body() createPlanOfBillsDto: CreatePlanOfBillsDto){
        this.planOfBillsService.create(createPlanOfBillsDto)
    }

}
