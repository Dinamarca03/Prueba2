import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from './dto/create_proyecto.dto';
import { UpdateProyectoDto } from './dto/update_proyecto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProyectoService {
  constructor(private prisma: PrismaService) {}

  create(createProyectoDto: CreateProyectoDto) {
    return this.prisma.proyecto.create({
      data: createProyectoDto,
    });
  }

  findAll() {
    return this.prisma.proyecto.findMany();
  }

  findOne(id: number) {
    return this.prisma.proyecto.findUnique({
      where: {
        id_Proyecto: id,
      },
    });
  }

  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return this.prisma.proyecto.update({
      where: {
        id_Proyecto: id,
      },
      data: updateProyectoDto,
    });
  }

  remove(id: number) {
    return this.prisma.proyecto.delete({
      where: {
        id_Proyecto: id,
      },
    });
  }
}
