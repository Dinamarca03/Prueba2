// src/rym/rym.module.ts
import { Module } from '@nestjs/common';
import { RyMService } from './RyM.service';
import { RyMController } from './RyM.controller';

@Module({
  controllers: [RyMController],
  providers: [RyMService],
})
export class RyMModule {}