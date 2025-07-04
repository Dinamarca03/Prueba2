import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TareaService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTareaDto: CreateTareaDto) {
    return this.prisma.tarea.create({ data: createTareaDto });
  }

  findAll() {
    return this.prisma.tarea.findMany();
  }

  findOne(id: number) {
    return this.prisma.tarea.findUnique({ where: { id_Tarea: id } });
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return this.prisma.tarea.update({ where: { id_Tarea: id }, data: updateTareaDto });
  }

  remove(id: number) {
    return this.prisma.tarea.delete({ where: { id_Tarea: id } });
  }
}

