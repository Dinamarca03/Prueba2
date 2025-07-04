import { Injectable } from '@nestjs/common';
import { CreateModeloViviendaDto } from './dto/create_modelo_vivienda.dto';
import { UpdateModeloViviendaDto } from './dto/update_modelo_vivienda.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModeloViviendaService {
  constructor(private prisma: PrismaService) {}

  create(createModeloViviendaDto: CreateModeloViviendaDto) {
    return this.prisma.modeloVivienda.create({
      data: createModeloViviendaDto,
    });
  }

  findAll() {
    return this.prisma.modeloVivienda.findMany();
  }

  findOne(id: number) {
    return this.prisma.modeloVivienda.findUnique({
      where: {
        id_ModeloVivienda: id,
      },
    });
  }

  update(id: number, updateModeloViviendaDto: UpdateModeloViviendaDto) {
    return this.prisma.modeloVivienda.update({
      where: {
        id_ModeloVivienda: id,
      },
      data: updateModeloViviendaDto,
    });
  }

  remove(id: number) {
    return this.prisma.modeloVivienda.delete({
      where: {
        id_ModeloVivienda: id,
      },
    });
  }
}
