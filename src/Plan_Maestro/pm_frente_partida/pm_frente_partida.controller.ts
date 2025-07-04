import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PmFrentePartidaService } from './pm_frente_partida.service';
import { CreatePmFrentePartidaDto } from './dto/create_pm_frente_partida.dto';
import { UpdatePmFrentePartidaDto } from './dto/update_pm_frente_partida.dto';

@Controller('pm-frente-partida')
export class PmFrentePartidaController {
  constructor(private readonly pmFrentePartidaService: PmFrentePartidaService) {}

  @Post()
  create(@Body() createPmFrentePartidaDto: CreatePmFrentePartidaDto) {
    return this.pmFrentePartidaService.create(createPmFrentePartidaDto);
  }

  @Get()
  findAll() {
    return this.pmFrentePartidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pmFrentePartidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePmFrentePartidaDto: UpdatePmFrentePartidaDto) {
    return this.pmFrentePartidaService.update(+id, updatePmFrentePartidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pmFrentePartidaService.remove(+id);
  }
}
