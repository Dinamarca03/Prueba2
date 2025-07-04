import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipoTrabajoService } from './equipo_trabajo.service';
import { CreateEquipoTrabajoDto } from './dto/create_equipo_trabajo.dto';
import { UpdateEquipoTrabajoDto } from './dto/update_equipo_trabajo.dto';

@Controller('equipo-trabajo')
export class EquipoTrabajoController {
  constructor(private readonly equipoTrabajoService: EquipoTrabajoService) {}

  @Post()
  create(@Body() createEquipoTrabajoDto: CreateEquipoTrabajoDto) {
    return this.equipoTrabajoService.create(createEquipoTrabajoDto);
  }

  @Get()
  findAll() {
    return this.equipoTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipoTrabajoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipoTrabajoDto: UpdateEquipoTrabajoDto) {
    return this.equipoTrabajoService.update(+id, updateEquipoTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipoTrabajoService.remove(+id);
  }
}
