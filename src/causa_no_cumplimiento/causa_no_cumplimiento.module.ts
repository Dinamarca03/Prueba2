import { Module } from '@nestjs/common';
import { CausaNoCumplimientoService } from './causa_no_cumplimiento.service';
import { CausaNoCumplimientoController } from './causa_no_cumplimiento.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CausaNoCumplimientoController],
  providers: [CausaNoCumplimientoService],
})
export class CausaNoCumplimientoModule {}
