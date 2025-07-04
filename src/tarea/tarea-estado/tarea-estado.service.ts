import { Injectable } from '@nestjs/common';
import { CreateTareaEstadoDto } from './dto/create-tarea-estado.dto';
import { UpdateTareaEstadoDto } from './dto/update-tarea-estado.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TareaEstadoService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createTareaEstadoDto: CreateTareaEstadoDto) {
    return this.prismaService.tareaEstado.create({
      data: createTareaEstadoDto,
    });
  }

  findAll() {
    return this.prismaService.tareaEstado.findMany();
  }

  findOne(id: number) {
    return this.prismaService.tareaEstado.findUnique({ where: { id_TareaEstado: id } });
  }

  update(id: number, updateTareaEstadoDto: UpdateTareaEstadoDto) {
    return this.prismaService.tareaEstado.update({
      where: { id_TareaEstado: id },
      data: updateTareaEstadoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.tareaEstado.delete({ where: { id_TareaEstado: id } });
  }
}
