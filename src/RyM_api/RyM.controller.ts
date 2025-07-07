// src/rym/rym.controller.ts
import { Controller, Get, Param, Query } from '@nestjs/common';
import { RyMService } from './RyM.service';

@Controller('RyM')
export class RyMController {
  constructor(private readonly ryMService: RyMService) {}

  @Get('characters')
  async getCharacters(@Query('page') page?: number) {
    return this.ryMService.getCharacters(page);
  }

  @Get('character/:id')
  async getCharacterById(@Param('id') id: number) {
    return this.ryMService.getCharacterById(id);
  }

  @Get('filter')
  async filterCharacters(
    @Query('status') status?: string,
    @Query('species') species?: string,
    @Query('name') name?: string,
  ) {
    return this.ryMService.filterCharacters({ status, species, name });
  }

  @Get('locations')
  async getLocations() {
    return this.ryMService.getLocations();
  }
}