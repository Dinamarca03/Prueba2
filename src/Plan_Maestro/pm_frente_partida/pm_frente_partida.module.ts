import { Module } from '@nestjs/common';
import { PmFrentePartidaService } from './pm_frente_partida.service';
import { PmFrentePartidaController } from './pm_frente_partida.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PmFrentePartidaController],
  providers: [PmFrentePartidaService],
})
export class PmFrentePartidaModule {}
