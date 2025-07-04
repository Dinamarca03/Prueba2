import { Module } from '@nestjs/common';
import { ModeloViviendaService } from './modelo_vivienda.service';
import { ModeloViviendaController } from './modelo_vivienda.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ModeloViviendaController],
  providers: [ModeloViviendaService],
})
export class ModeloViviendaModule {}
