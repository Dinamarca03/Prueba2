import { Test, TestingModule } from '@nestjs/testing';
import { TareaPrioridadController } from './tarea-prioridad.controller';
import { TareaPrioridadService } from './tarea-prioridad.service';

describe('TareaPrioridadController', () => {
  let controller: TareaPrioridadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TareaPrioridadController],
      providers: [TareaPrioridadService],
    }).compile();

    controller = module.get<TareaPrioridadController>(TareaPrioridadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
