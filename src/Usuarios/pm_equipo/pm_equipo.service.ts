import { Injectable } from '@nestjs/common';
import { CreatePmEquipoDto } from './dto/create_pm_equipo.dto';
import { UpdatePmEquipoDto } from './dto/update_pm_equipo.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PmEquipoService {
  constructor(private prisma: PrismaService) { }

  create(createPmEquipoDto: CreatePmEquipoDto) {
    return this.prisma.pmEquipo.create({ data: createPmEquipoDto });
  }

  findAll() {
    return this.prisma.pmEquipo.findMany();
  }

  findOne(id: number) {
    return this.prisma.pmEquipo.findUnique({ where: { id_PmEquipo: id } });
  }

  update(id: number, updatePmEquipoDto: UpdatePmEquipoDto) {
    return this.prisma.pmEquipo.update({ where: { id_PmEquipo: id }, data: updatePmEquipoDto });
  }

  remove(id: number) {
    return this.prisma.pmEquipo.delete({ where: { id_PmEquipo: id } });
  }
}
