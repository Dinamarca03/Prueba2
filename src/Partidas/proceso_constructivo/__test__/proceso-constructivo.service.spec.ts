import { Test, TestingModule } from '@nestjs/testing';
import { ProcesoConstructivoService } from './proceso-constructivo.service';

describe('ProcesoConstructivoService', () => {
  let service: ProcesoConstructivoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProcesoConstructivoService],
    }).compile();

    service = module.get<ProcesoConstructivoService>(ProcesoConstructivoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
