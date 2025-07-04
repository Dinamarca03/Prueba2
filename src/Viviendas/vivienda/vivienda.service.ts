import { Injectable } from '@nestjs/common';
import { CreateViviendaDto } from './dto/create_vivienda.dto';
import { UpdateViviendaDto } from './dto/update_vivienda.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ViviendaService {
  constructor(private prisma: PrismaService) {}

  create(createViviendaDto: CreateViviendaDto) {
    return this.prisma.vivienda.create({
      data: createViviendaDto,
    });
  }

  findAll() {
    return this.prisma.vivienda.findMany();
  }

  findOne(id: number) {
    return this.prisma.vivienda.findUnique({
      where: {
        id_Vivienda: id,
      },
    });
  }

  update(id: number, updateViviendaDto: UpdateViviendaDto) {
    return this.prisma.vivienda.update({
      where: {
        id_Vivienda: id,
      },
      data: updateViviendaDto,
    });
  }

  remove(id: number) {
    return this.prisma.vivienda.delete({
      where: {
        id_Vivienda: id,
      },
    });
  }
}
