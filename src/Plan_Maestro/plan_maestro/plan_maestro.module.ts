import { Module } from '@nestjs/common';
import { PlanMaestroService } from './plan_maestro.service';
import { PlanMaestroController } from './plan_maestro.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlanMaestroController],
  providers: [PlanMaestroService],
})
export class PlanMaestroModule {}
