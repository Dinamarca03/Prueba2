import { Module } from '@nestjs/common';
import { PaqueteTrabajoService } from './paquete_trabajo.service';
import { PaqueteTrabajoController } from './paquete_trabajo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PaqueteTrabajoController],
  providers: [PaqueteTrabajoService],
})
export class PaqueteTrabajoModule {}
