import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { TareaController } from './tarea.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TareaEstadoModule } from './tarea-estado/tarea-estado.module';
import { TareaPrioridadModule } from './tarea-prioridad/tarea-prioridad.module';

@Module({
  imports: [TareaEstadoModule, TareaPrioridadModule, PrismaModule],
  controllers: [TareaController],
  providers: [TareaService],
})
export class TareaModule {}
