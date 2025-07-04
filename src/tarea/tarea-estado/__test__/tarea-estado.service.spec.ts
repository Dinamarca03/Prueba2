import { Test, TestingModule } from '@nestjs/testing';
import { TareaEstadoService } from './tarea-estado.service';

describe('TareaEstadoService', () => {
  let service: TareaEstadoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TareaEstadoService],
    }).compile();

    service = module.get<TareaEstadoService>(TareaEstadoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
