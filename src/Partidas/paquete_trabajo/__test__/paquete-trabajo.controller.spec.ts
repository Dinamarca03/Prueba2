import { Test, TestingModule } from '@nestjs/testing';
import { PaqueteTrabajoController } from './paquete-trabajo.controller';
import { PaqueteTrabajoService } from './paquete-trabajo.service';

describe('PaqueteTrabajoController', () => {
  let controller: PaqueteTrabajoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaqueteTrabajoController],
      providers: [PaqueteTrabajoService],
    }).compile();

    controller = module.get<PaqueteTrabajoController>(PaqueteTrabajoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
