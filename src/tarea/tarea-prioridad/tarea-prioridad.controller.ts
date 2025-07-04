import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TareaPrioridadService } from './tarea-prioridad.service';
import { CreateTareaPrioridadDto } from './dto/create-tarea-prioridad.dto';
import { UpdateTareaPrioridadDto } from './dto/update-tarea-prioridad.dto';

@Controller('tarea-prioridad')
export class TareaPrioridadController {
  constructor(private readonly tareaPrioridadService: TareaPrioridadService) {}

  @Post()
  create(@Body() createTareaPrioridadDto: CreateTareaPrioridadDto) {
    return this.tareaPrioridadService.create(createTareaPrioridadDto);
  }

  @Get()
  findAll() {
    return this.tareaPrioridadService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareaPrioridadService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTareaPrioridadDto: UpdateTareaPrioridadDto) {
    return this.tareaPrioridadService.update(+id, updateTareaPrioridadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareaPrioridadService.remove(+id);
  }
}
