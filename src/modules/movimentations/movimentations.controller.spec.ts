import { Test, TestingModule } from '@nestjs/testing';
import { MovimentationsController } from './movimentations.controller';

describe('MovimentationsController', () => {
  let controller: MovimentationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovimentationsController],
    }).compile();

    controller = module.get<MovimentationsController>(MovimentationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
