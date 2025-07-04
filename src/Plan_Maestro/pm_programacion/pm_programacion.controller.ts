import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmProgramacionService } from './pm_programacion.service';
import { CreatePmProgramacionDto } from './dto/create_pm_programacion.dto';
import { UpdatePmProgramacionDto } from './dto/update_pm_programacion.dto';

@Controller('pm-programacion')
export class PmProgramacionController {
  constructor(private readonly pmProgramacionService: PmProgramacionService) {}

  @Post()
  create(@Body() createPmProgramacionDto: CreatePmProgramacionDto) {
    return this.pmProgramacionService.create(createPmProgramacionDto);
  }

  @Get()
  findAll() {
    return this.pmProgramacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmProgramacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmProgramacionDto: UpdatePmProgramacionDto) {
    return this.pmProgramacionService.update(+id, updatePmProgramacionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmProgramacionService.remove(+id);
  }
}
