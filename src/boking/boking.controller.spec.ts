import { Test, TestingModule } from '@nestjs/testing';
import { BokingController } from './boking.controller';

describe('BokingController', () => {
  let controller: BokingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BokingController],
    }).compile();

    controller = module.get<BokingController>(BokingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
