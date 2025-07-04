import { Injectable } from '@nestjs/common';
import { CreateEquipoCargoDto } from './dto/create_equipo_cargo.dto';
import { UpdateEquipoCargoDto } from './dto/update_equipo_cargo.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipoCargoService {
  constructor(private prisma: PrismaService) { }

  create(createEquipoCargoDto: CreateEquipoCargoDto) {
    return this.prisma.equipoCargo.create({
      data: createEquipoCargoDto,
    });
  }

  findAll() {
    return this.prisma.equipoCargo.findMany();
  }

  findOne(id: number) {
    return this.prisma.equipoCargo.findUnique({
      where: {
        id_EquipoCargo: id,
      }
    });
  }

  update(id: number, updateEquipoCargoDto: UpdateEquipoCargoDto) {
    return this.prisma.equipoCargo.update({
      where: {
        id_EquipoCargo: id,
      },
      data: updateEquipoCargoDto,
    });
  }

  remove(id: number) {
    return this.prisma.equipoCargo.delete({
      where: {
        id_EquipoCargo: id,
      }
    });
  }
}
