import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanSemanalService } from './plan_semanal.service';
import { CreatePlanSemanalDto } from './dto/create_plan_semanal.dto';
import { UpdatePlanSemanalDto } from './dto/update_plan_semanal.dto';

@Controller('plan-semanal')
export class PlanSemanalController {
  constructor(private readonly planSemanalService: PlanSemanalService) {}

  @Post()
  create(@Body() createPlanSemanalDto: CreatePlanSemanalDto) {
    return this.planSemanalService.create(createPlanSemanalDto);
  }

  @Get()
  findAll() {
    return this.planSemanalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planSemanalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanSemanalDto: UpdatePlanSemanalDto) {
    return this.planSemanalService.update(+id, updatePlanSemanalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planSemanalService.remove(+id);
  }
}
