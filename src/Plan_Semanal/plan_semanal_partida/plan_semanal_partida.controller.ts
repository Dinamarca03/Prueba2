import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanSemanalPartidaService } from './plan_semanal_partida.service';
import { CreatePlanSemanalPartidaDto } from './dto/create_plan_semanal_partida.dto';
import { UpdatePlanSemanalPartidaDto } from './dto/update_plan_semanal_partida.dto';

@Controller('plan-semanal-partida')
export class PlanSemanalPartidaController {
  constructor(private readonly planSemanalPartidaService: PlanSemanalPartidaService) {}

  @Post()
  create(@Body() createPlanSemanalPartidaDto: CreatePlanSemanalPartidaDto) {
    return this.planSemanalPartidaService.create(createPlanSemanalPartidaDto);
  }

  @Get()
  findAll() {
    return this.planSemanalPartidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planSemanalPartidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanSemanalPartidaDto: UpdatePlanSemanalPartidaDto) {
    return this.planSemanalPartidaService.update(+id, updatePlanSemanalPartidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planSemanalPartidaService.remove(+id);
  }
}
