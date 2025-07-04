import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipoCargoService } from './equipo_cargo.service';
import { CreateEquipoCargoDto } from './dto/create_equipo_cargo.dto';
import { UpdateEquipoCargoDto } from './dto/update_equipo_cargo.dto';

@Controller('equipo-cargo')
export class EquipoCargoController {
  constructor(private readonly equipoCargoService: EquipoCargoService) {}

  @Post()
  create(@Body() createEquipoCargoDto: CreateEquipoCargoDto) {
    return this.equipoCargoService.create(createEquipoCargoDto);
  }

  @Get()
  findAll() {
    return this.equipoCargoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipoCargoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEquipoCargoDto: UpdateEquipoCargoDto) {
    return this.equipoCargoService.update(+id, updateEquipoCargoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipoCargoService.remove(+id);
  }
}
