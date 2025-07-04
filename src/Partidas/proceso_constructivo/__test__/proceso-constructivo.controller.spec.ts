import { Test, TestingModule } from '@nestjs/testing';
import { ProcesoConstructivoController } from './proceso-constructivo.controller';
import { ProcesoConstructivoService } from './proceso-constructivo.service';

describe('ProcesoConstructivoController', () => {
  let controller: ProcesoConstructivoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProcesoConstructivoController],
      providers: [ProcesoConstructivoService],
    }).compile();

    controller = module.get<ProcesoConstructivoController>(ProcesoConstructivoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
