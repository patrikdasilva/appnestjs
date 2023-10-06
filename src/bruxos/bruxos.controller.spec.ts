import { Test, TestingModule } from '@nestjs/testing';
import { BruxosController } from './bruxos.controller';
import { BruxosService } from './bruxos.service';

describe('BruxosController', () => {
  let controller: BruxosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BruxosController],
      providers: [BruxosService],
    }).compile();

    controller = module.get<BruxosController>(BruxosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
