import { Module } from '@nestjs/common';
import { ViviendaService } from './vivienda.service';
import { ViviendaController } from './vivienda.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ViviendaController],
  providers: [ViviendaService],
})
export class ViviendaModule {}
