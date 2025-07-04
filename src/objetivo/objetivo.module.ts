import { Module } from '@nestjs/common';
import { ObjetivoService } from './objetivo.service';
import { ObjetivoController } from './objetivo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ObjetivoController],
  providers: [ObjetivoService],
})
export class ObjetivoModule {}
