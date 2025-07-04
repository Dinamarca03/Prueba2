import { Module } from '@nestjs/common';
import { PmProgramacionService } from './pm_programacion.service';
import { PmProgramacionController } from './pm_programacion.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PmProgramacionController],
  providers: [PmProgramacionService],
})
export class PmProgramacionModule {}
