import { Module } from '@nestjs/common';
import { ProcesoConstructivoService } from './proceso-constructivo.service';
import { ProcesoConstructivoController } from './proceso_constructivo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProcesoConstructivoController],
  providers: [ProcesoConstructivoService],
})
export class ProcesoConstructivoModule {}
