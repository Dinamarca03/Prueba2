import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanMaestroService } from './plan-maestro.service';
import { CreatePlanMaestroDto } from './dto/create-plan-maestro.dto';
import { UpdatePlanMaestroDto } from './dto/update-plan-maestro.dto';

@Controller('plan-maestro')
export class PlanMaestroController {
  constructor(private readonly planMaestroService: PlanMaestroService) {}

  @Post()
  create(@Body() createPlanMaestroDto: CreatePlanMaestroDto) {
    return this.planMaestroService.create(createPlanMaestroDto);
  }

  @Get()
  findAll() {
    return this.planMaestroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planMaestroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanMaestroDto: UpdatePlanMaestroDto) {
    return this.planMaestroService.update(+id, updatePlanMaestroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planMaestroService.remove(+id);
  }
}
