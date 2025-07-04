import { Test, TestingModule } from '@nestjs/testing';
import { TareaEstadoController } from './tarea-estado.controller';
import { TareaEstadoService } from './tarea-estado.service';

describe('TareaEstadoController', () => {
  let controller: TareaEstadoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TareaEstadoController],
      providers: [TareaEstadoService],
    }).compile();

    controller = module.get<TareaEstadoController>(TareaEstadoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
