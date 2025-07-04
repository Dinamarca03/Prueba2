import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TareaEstadoService } from './tarea-estado.service';
import { CreateTareaEstadoDto } from './dto/create-tarea-estado.dto';
import { UpdateTareaEstadoDto } from './dto/update-tarea-estado.dto';

@Controller('tarea-estado')
export class TareaEstadoController {
  constructor(private readonly tareaEstadoService: TareaEstadoService) {}

  @Post()
  create(@Body() createTareaEstadoDto: CreateTareaEstadoDto) {
    return this.tareaEstadoService.create(createTareaEstadoDto);
  }

  @Get()
  findAll() {
    return this.tareaEstadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareaEstadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTareaEstadoDto: UpdateTareaEstadoDto) {
    return this.tareaEstadoService.update(+id, updateTareaEstadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareaEstadoService.remove(+id);
  }
}
