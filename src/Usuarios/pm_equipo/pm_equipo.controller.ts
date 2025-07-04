import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmEquipoService } from './pm_equipo.service';
import { CreatePmEquipoDto } from './dto/create_pm_equipo.dto';
import { UpdatePmEquipoDto } from './dto/update_pm_equipo.dto';

@Controller('pm-equipo')
export class PmEquipoController {
  constructor(private readonly pmEquipoService: PmEquipoService) {}

  @Post()
  create(@Body() createPmEquipoDto: CreatePmEquipoDto) {
    return this.pmEquipoService.create(createPmEquipoDto);
  }

  @Get()
  findAll() {
    return this.pmEquipoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmEquipoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmEquipoDto: UpdatePmEquipoDto) {
    return this.pmEquipoService.update(+id, updatePmEquipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmEquipoService.remove(+id);
  }
}
