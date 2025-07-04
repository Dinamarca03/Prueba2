import { Module } from '@nestjs/common';
import { PmEquipoService } from './pm_equipo.service';
import { PmEquipoController } from './pm_equipo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PmEquipoController],
  providers: [PmEquipoService],
})
export class PmEquipoModule {}
