import { Injectable } from '@nestjs/common';
import { CreatePaqueteTrabajoDto } from './dto/create_paquete_trabajo.dto';
import { UpdatePaqueteTrabajoDto } from './dto/update_paquete_trabajo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PaqueteTrabajoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPaqueteTrabajoDto: CreatePaqueteTrabajoDto) {
    return this.prisma.paqueteTrabajo.create({
      data: createPaqueteTrabajoDto,
    });
  }

  findAll() {
    return this.prisma.paqueteTrabajo.findMany();
  }

  findOne(id: number) {
    return this.prisma.paqueteTrabajo.findUnique({ where: { id_PaqueteTrabajo: id } });
  }

  update(id: number, updatePaqueteTrabajoDto: UpdatePaqueteTrabajoDto) {
    return this.prisma.paqueteTrabajo.update({
      where: { id_PaqueteTrabajo: id },
      data: updatePaqueteTrabajoDto,
    });
  }

  remove(id: number) {
    return this.prisma.paqueteTrabajo.delete({ where: { id_PaqueteTrabajo: id } });
  }
}
