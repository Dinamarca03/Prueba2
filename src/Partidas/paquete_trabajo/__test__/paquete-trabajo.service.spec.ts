import { Test, TestingModule } from '@nestjs/testing';
import { PaqueteTrabajoService } from './paquete-trabajo.service';

describe('PaqueteTrabajoService', () => {
  let service: PaqueteTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaqueteTrabajoService],
    }).compile();

    service = module.get<PaqueteTrabajoService>(PaqueteTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
