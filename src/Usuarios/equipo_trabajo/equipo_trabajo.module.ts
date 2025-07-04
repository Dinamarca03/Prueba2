import { Module } from '@nestjs/common';
import { EquipoTrabajoService } from './equipo_trabajo.service';
import { EquipoTrabajoController } from './equipo_trabajo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EquipoTrabajoController],
  providers: [EquipoTrabajoService],
})
export class EquipoTrabajoModule {}
