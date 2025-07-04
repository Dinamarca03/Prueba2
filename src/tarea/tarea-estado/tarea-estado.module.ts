import { Module } from '@nestjs/common';
import { TareaEstadoService } from './tarea-estado.service';
import { TareaEstadoController } from './tarea-estado.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TareaEstadoController],
  providers: [TareaEstadoService],
})
export class TareaEstadoModule {}
