import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HitoService } from './hito.service';
import { CreateHitoDto } from './dto/create_hito.dto';
import { UpdateHitoDto } from './dto/update_hito.dto';

@Controller('hito')
export class HitoController {
  constructor(private readonly hitoService: HitoService) {}

  @Post()
  create(@Body() createHitoDto: CreateHitoDto) {
    return this.hitoService.create(createHitoDto);
  }

  @Get()
  findAll() {
    return this.hitoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hitoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHitoDto: UpdateHitoDto) {
    return this.hitoService.update(+id, updateHitoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hitoService.remove(+id);
  }
}
