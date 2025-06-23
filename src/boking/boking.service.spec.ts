import { Test, TestingModule } from '@nestjs/testing';
import { BokingService } from './boking.service';

describe('BokingService', () => {
  let service: BokingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BokingService],
    }).compile();

    service = module.get<BokingService>(BokingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
