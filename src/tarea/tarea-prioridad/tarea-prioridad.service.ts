import { Injectable } from '@nestjs/common';
import { CreateTareaPrioridadDto } from './dto/create-tarea-prioridad.dto';
import { UpdateTareaPrioridadDto } from './dto/update-tarea-prioridad.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TareaPrioridadService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createTareaPrioridadDto: CreateTareaPrioridadDto) {
    return this.prismaService.tareaPrioridad.create({
      data: createTareaPrioridadDto,
    });
  }

  findAll() {
    return this.prismaService.tareaPrioridad.findMany();
  }

  findOne(id: number) {
    return this.prismaService.tareaPrioridad.findUnique({ where: { id_TareaPrioridad: id } });
  }

  update(id: number, updateTareaPrioridadDto: UpdateTareaPrioridadDto) {
    return this.prismaService.tareaPrioridad.update({
      where: { id_TareaPrioridad: id },
      data: updateTareaPrioridadDto,
    });
  }

  remove(id: number) {
    return this.prismaService.tareaPrioridad.delete({ where: { id_TareaPrioridad: id } });
  }
}
