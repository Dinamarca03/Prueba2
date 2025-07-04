import { Module } from '@nestjs/common';
import { PlanSemanalPartidaService } from './plan_semanal_partida.service';
import { PlanSemanalPartidaController } from './plan_semanal_partida.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlanSemanalPartidaController],
  providers: [PlanSemanalPartidaService],
})
export class PlanSemanalPartidaModule {}
