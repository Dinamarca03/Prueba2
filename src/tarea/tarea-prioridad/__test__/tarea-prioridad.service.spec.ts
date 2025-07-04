import { Test, TestingModule } from '@nestjs/testing';
import { TareaPrioridadService } from './tarea-prioridad.service';

describe('TareaPrioridadService', () => {
  let service: TareaPrioridadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TareaPrioridadService],
    }).compile();

    service = module.get<TareaPrioridadService>(TareaPrioridadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
