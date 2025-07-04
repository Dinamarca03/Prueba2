import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaqueteTrabajoService } from './paquete_trabajo.service';
import { CreatePaqueteTrabajoDto } from './dto/create_paquete_trabajo.dto';
import { UpdatePaqueteTrabajoDto } from './dto/update_paquete_trabajo.dto';

@Controller('paquete-trabajo')
export class PaqueteTrabajoController {
  constructor(private readonly paqueteTrabajoService: PaqueteTrabajoService) {}

  @Post()
  create(@Body() createPaqueteTrabajoDto: CreatePaqueteTrabajoDto) {
    return this.paqueteTrabajoService.create(createPaqueteTrabajoDto);
  }

  @Get()
  findAll() {
    return this.paqueteTrabajoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paqueteTrabajoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaqueteTrabajoDto: UpdatePaqueteTrabajoDto) {
    return this.paqueteTrabajoService.update(+id, updatePaqueteTrabajoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paqueteTrabajoService.remove(+id);
  }
}
