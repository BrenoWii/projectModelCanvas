import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanOfBillsController } from './plan-of-bills.controller';
import { PlanOfBills } from './plan-of-bills.entity';
import { PlanOfBillsService } from './plan-of-bills.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([PlanOfBills])
  ],
  controllers: [PlanOfBillsController],
  providers: [PlanOfBillsService]
})
export class PlanOfBillsModule {}
