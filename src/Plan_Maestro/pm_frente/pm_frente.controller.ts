import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmFrenteService } from './pm_frente.service';
import { CreatePmFrenteDto } from './dto/create_pm_frente.dto';
import { UpdatePmFrenteDto } from './dto/update_pm_frente.dto';

@Controller('pm-frente')
export class PmFrenteController {
  constructor(private readonly pmFrenteService: PmFrenteService) {}

  @Post()
  create(@Body() createPmFrenteDto: CreatePmFrenteDto) {
    return this.pmFrenteService.create(createPmFrenteDto);
  }

  @Get()
  findAll() {
    return this.pmFrenteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmFrenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmFrenteDto: UpdatePmFrenteDto) {
    return this.pmFrenteService.update(+id, updatePmFrenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmFrenteService.remove(+id);
  }
}
