// se manejan las rutas HTTP dinámicas

import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';
import { ApiMalpoService } from './api-malpo.service';

@Controller('api-malpo')
export class ApiMalpoController {
  constructor(private readonly apiMalpoService: ApiMalpoService) {}

  @Get('*') // captura cualquier ruta que comience con /api-malpo/
  async proxyRequest(@Req() req: Request) {
    // Obtiene todo lo que venga después de /api-malpo/
    const path = req.url.split('api-malpo/')[1] || '';
    return await this.apiMalpoService.getDataFromEndpoint(path);
  }
}
