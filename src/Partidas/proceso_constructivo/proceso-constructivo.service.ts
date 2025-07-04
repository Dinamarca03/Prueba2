import { Injectable } from '@nestjs/common';
import { CreateProcesoConstructivoDto } from './dto/create_proceso_constructivo.dto';
import { UpdateProcesoConstructivoDto } from './dto/update_proceso_constructivo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProcesoConstructivoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createProcesoConstructivoDto: CreateProcesoConstructivoDto) {
    return this.prisma.procesoConstrutivo.create({
      data: createProcesoConstructivoDto,
    });
  }

  findAll() {
    return this.prisma.procesoConstrutivo.findMany();
  }

  findOne(id: number) {
    return this.prisma.procesoConstrutivo.findUnique({ where: { id_ProcesoConstrutivo: id } });
  }

  update(id: number, updateProcesoConstructivoDto: UpdateProcesoConstructivoDto) {
    return this.prisma.procesoConstrutivo.update({
      where: { id_ProcesoConstrutivo: id },
      data: updateProcesoConstructivoDto,
    });
  }

  remove(id: number) {
    return this.prisma.procesoConstrutivo.delete({ where: { id_ProcesoConstrutivo: id } });
  }
}
