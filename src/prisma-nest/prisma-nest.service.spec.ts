import { Test, TestingModule } from '@nestjs/testing';
import { PrismaNestService } from './prisma-nest.service';

describe('PrismaNestService', () => {
  let service: PrismaNestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaNestService],
    }).compile();

    service = module.get<PrismaNestService>(PrismaNestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
