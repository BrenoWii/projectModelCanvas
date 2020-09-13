import { Test, TestingModule } from '@nestjs/testing';
import { MovimentationsService } from './movimentations.service';

describe('MovimentationsService', () => {
  let service: MovimentationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovimentationsService],
    }).compile();

    service = module.get<MovimentationsService>(MovimentationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
