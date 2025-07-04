import { Module } from '@nestjs/common';
import { PartidaService } from './partida.service';
import { PartidaController } from './partida.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PartidaController],
  providers: [PartidaService],
})
export class PartidaModule {}
