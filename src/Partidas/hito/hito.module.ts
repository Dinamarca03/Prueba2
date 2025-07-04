import { Module } from '@nestjs/common';
import { HitoService } from './hito.service';
import { HitoController } from './hito.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HitoController],
  providers: [HitoService],
})
export class HitoModule {}
