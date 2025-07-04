import { Module } from '@nestjs/common';
import { PmFrenteService } from './pm_frente.service';
import { PmFrenteController } from './pm_frente.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PmFrenteController],
  providers: [PmFrenteService],
})
export class PmFrenteModule {}
