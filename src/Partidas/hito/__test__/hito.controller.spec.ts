import { Test, TestingModule } from '@nestjs/testing';
import { HitoController } from '../hito.controller';
import { HitoService } from '../hito.service';

describe('HitoController', () => {
  let controller: HitoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HitoController],
      providers: [HitoService],
    }).compile();

    controller = module.get<HitoController>(HitoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
