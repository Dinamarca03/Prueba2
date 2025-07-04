import { Module } from '@nestjs/common';
import { TareaPrioridadService } from './tarea-prioridad.service';
import { TareaPrioridadController } from './tarea-prioridad.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TareaPrioridadController],
  providers: [TareaPrioridadService],
})
export class TareaPrioridadModule {}
