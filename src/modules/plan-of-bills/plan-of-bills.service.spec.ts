import { Test, TestingModule } from '@nestjs/testing';
import { PlanOfBillsService } from './plan-of-bills.service';

describe('PlanOfBillsService', () => {
  let service: PlanOfBillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanOfBillsService],
    }).compile();

    service = module.get<PlanOfBillsService>(PlanOfBillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
