import { Module } from '@nestjs/common';
import { PlanOfBillsController } from './plan-of-bills.controller';
import { PlanOfBillsService } from './plan-of-bills.service';

@Module({
  controllers: [PlanOfBillsController],
  providers: [PlanOfBillsService]
})
export class PlanOfBillsModule {}
