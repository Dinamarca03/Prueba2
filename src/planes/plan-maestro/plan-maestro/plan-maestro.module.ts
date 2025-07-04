import { Module } from '@nestjs/common';
import { PlanMaestroService } from './plan-maestro.service';
import { PlanMaestroController } from './plan-maestro.controller';
import { PrismaModule } from '../../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlanMaestroController],
  providers: [PlanMaestroService],
})
export class PlanMaestroModule {}
