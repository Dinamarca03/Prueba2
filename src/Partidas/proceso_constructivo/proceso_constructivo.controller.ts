import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProcesoConstructivoService } from './proceso-constructivo.service';
import { CreateProcesoConstructivoDto } from './dto/create_proceso_constructivo.dto';
import { UpdateProcesoConstructivoDto } from './dto/update_proceso_constructivo.dto';

@Controller('proceso-constructivo')
export class ProcesoConstructivoController {
  constructor(private readonly procesoConstructivoService: ProcesoConstructivoService) {}

  @Post()
  create(@Body() createProcesoConstructivoDto: CreateProcesoConstructivoDto) {
    return this.procesoConstructivoService.create(createProcesoConstructivoDto);
  }

  @Get()
  findAll() {
    return this.procesoConstructivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.procesoConstructivoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProcesoConstructivoDto: UpdateProcesoConstructivoDto) {
    return this.procesoConstructivoService.update(+id, updateProcesoConstructivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.procesoConstructivoService.remove(+id);
  }
}
