import { Test, TestingModule } from '@nestjs/testing';
import { PlanOfBillsController } from './plan-of-bills.controller';

describe('PlanOfBillsController', () => {
  let controller: PlanOfBillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanOfBillsController],
    }).compile();

    controller = module.get<PlanOfBillsController>(PlanOfBillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
