import { Injectable } from '@nestjs/common';
import { CreateEquipoTrabajoDto } from './dto/create_equipo_trabajo.dto';
import { UpdateEquipoTrabajoDto } from './dto/update_equipo_trabajo.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EquipoTrabajoService {
  constructor(private prisma: PrismaService) { }

  create(createEquipoTrabajoDto: CreateEquipoTrabajoDto) {
    return this.prisma.equipoTrabajo.create({ data: createEquipoTrabajoDto });
  }

  findAll() {
    return this.prisma.equipoTrabajo.findMany();
  }

  findOne(id: number) {
    return this.prisma.equipoTrabajo.findUnique({ where: { id_EquipoTrabajo: id } });
  }

  update(id: number, updateEquipoTrabajoDto: UpdateEquipoTrabajoDto) {
    return this.prisma.equipoTrabajo.update({ where: { id_EquipoTrabajo: id }, data: updateEquipoTrabajoDto });
  }

  remove(id: number) {
    return this.prisma.equipoTrabajo.delete({ where: { id_EquipoTrabajo: id } });
  }
}
