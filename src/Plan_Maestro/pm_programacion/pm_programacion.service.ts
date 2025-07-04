import { Injectable } from '@nestjs/common';
import { CreatePmProgramacionDto } from './dto/create_pm_programacion.dto';
import { UpdatePmProgramacionDto } from './dto/update_pm_programacion.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PmProgramacionService {
  constructor(private prisma: PrismaService) {}

  create(createPmProgramacionDto: CreatePmProgramacionDto) {
    return this.prisma.pmProgramacion.create({
      data: createPmProgramacionDto,
    });
  }

  findAll() {
    return this.prisma.pmProgramacion.findMany();
  }

  findOne(id: number) {
    return this.prisma.pmProgramacion.findUnique({
      where: {
        id_PmProgramacion: id,
      },
    });
  }

  update(id: number, updatePmProgramacionDto: UpdatePmProgramacionDto) {
    return this.prisma.pmProgramacion.update({
      where: {
        id_PmProgramacion: id,
      },
      data: updatePmProgramacionDto,
    });
  }

  remove(id: number) {
    return this.prisma.pmProgramacion.delete({
      where: {
        id_PmProgramacion: id,
      },
    });
  }
}
