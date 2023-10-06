import { Test, TestingModule } from '@nestjs/testing';
import { BruxosService } from './bruxos.service';

describe('BruxosService', () => {
  let service: BruxosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BruxosService],
    }).compile();

    service = module.get<BruxosService>(BruxosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
