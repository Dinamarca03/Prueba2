import { Injectable } from '@nestjs/common';
import { CreateCausaNoCumplimientoDto } from './dto/create-causa_no_cumplimiento.dto';
import { UpdateCausaNoCumplimientoDto } from './dto/update-causa_no_cumplimiento.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CausaNoCumplimientoService {
  constructor(private prisma: PrismaService) {}

  create(createCausaNoCumplimientoDto: CreateCausaNoCumplimientoDto) {
    return this.prisma.causaNoCumplimiento.create({
      data: createCausaNoCumplimientoDto,
    });
  }

  findAll() {
    return this.prisma.causaNoCumplimiento.findMany();
  }

  findOne(id: number) {
    return this.prisma.causaNoCumplimiento.findUnique({
      where: {
        id_CausaNoCumplimiento: id,
      },
    });
  }

  update(id: number, updateCausaNoCumplimientoDto: UpdateCausaNoCumplimientoDto) {
    return this.prisma.causaNoCumplimiento.update({
      where: {
        id_CausaNoCumplimiento: id,
      },
      data: updateCausaNoCumplimientoDto,
    });
  }

  remove(id: number) {
    return this.prisma.causaNoCumplimiento.delete({
      where: {
        id_CausaNoCumplimiento: id,
      },
    });
  }
}
