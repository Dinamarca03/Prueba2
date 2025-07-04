import { Test, TestingModule } from '@nestjs/testing';
import { HitoService } from '../hito.service';

describe('HitoService', () => {
  let service: HitoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HitoService],
    }).compile();

    service = module.get<HitoService>(HitoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
