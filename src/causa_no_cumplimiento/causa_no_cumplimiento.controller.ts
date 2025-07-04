import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CausaNoCumplimientoService } from './causa_no_cumplimiento.service';
import { CreateCausaNoCumplimientoDto } from './dto/create-causa_no_cumplimiento.dto';
import { UpdateCausaNoCumplimientoDto } from './dto/update-causa_no_cumplimiento.dto';

@Controller('causa-no-cumplimiento')
export class CausaNoCumplimientoController {
  constructor(private readonly causaNoCumplimientoService: CausaNoCumplimientoService) {}

  @Post()
  create(@Body() createCausaNoCumplimientoDto: CreateCausaNoCumplimientoDto) {
    return this.causaNoCumplimientoService.create(createCausaNoCumplimientoDto);
  }

  @Get()
  findAll() {
    return this.causaNoCumplimientoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.causaNoCumplimientoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCausaNoCumplimientoDto: UpdateCausaNoCumplimientoDto) {
    return this.causaNoCumplimientoService.update(+id, updateCausaNoCumplimientoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.causaNoCumplimientoService.remove(+id);
  }
}
