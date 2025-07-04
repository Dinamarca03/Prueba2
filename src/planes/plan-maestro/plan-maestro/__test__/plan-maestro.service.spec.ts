import { Test, TestingModule } from '@nestjs/testing';
import { PlanMaestroService } from '../plan-maestro.service';

describe('PlanMaestroService', () => {
  let service: PlanMaestroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlanMaestroService],
    }).compile();

    service = module.get<PlanMaestroService>(PlanMaestroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
