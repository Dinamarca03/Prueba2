import { Module } from '@nestjs/common';
import { PlanSemanalService } from './plan_semanal.service';
import { PlanSemanalController } from './plan_semanal.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PlanSemanalController],
  providers: [PlanSemanalService],
})
export class PlanSemanalModule {}
