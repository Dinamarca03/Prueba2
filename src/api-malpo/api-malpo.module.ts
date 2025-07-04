import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ApiMalpoService } from './api-malpo.service';
import { ApiMalpoController } from './api-malpo.controller';

@Module({
  imports: [HttpModule],
  controllers: [ApiMalpoController],
  providers: [ApiMalpoService],
  exports: [ApiMalpoService],
})
export class ApiMalpoModule {}
