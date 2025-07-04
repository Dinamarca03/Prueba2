import { Test, TestingModule } from '@nestjs/testing';
import { PlanMaestroController } from '../plan-maestro.controller';
import { PlanMaestroService } from '../plan-maestro.service';

describe('PlanMaestroController', () => {
  let controller: PlanMaestroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlanMaestroController],
      providers: [PlanMaestroService],
    }).compile();

    controller = module.get<PlanMaestroController>(PlanMaestroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
