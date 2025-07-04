import { Module } from '@nestjs/common';
import { EquipoCargoService } from './equipo_cargo.service';
import { EquipoCargoController } from './equipo_cargo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EquipoCargoController],
  providers: [EquipoCargoService],
})
export class EquipoCargoModule {}
