import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModeloViviendaService } from './modelo_vivienda.service';
import { CreateModeloViviendaDto } from './dto/create_modelo_vivienda.dto';
import { UpdateModeloViviendaDto } from './dto/update_modelo_vivienda.dto';

@Controller('modelo-vivienda')
export class ModeloViviendaController {
  constructor(private readonly modeloViviendaService: ModeloViviendaService) {}

  @Post()
  create(@Body() createModeloViviendaDto: CreateModeloViviendaDto) {
    return this.modeloViviendaService.create(createModeloViviendaDto);
  }

  @Get()
  findAll() {
    return this.modeloViviendaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modeloViviendaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeloViviendaDto: UpdateModeloViviendaDto) {
    return this.modeloViviendaService.update(+id, updateModeloViviendaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeloViviendaService.remove(+id);
  }
}
