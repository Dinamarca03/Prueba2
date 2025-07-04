import { Injectable } from '@nestjs/common';
import { CreateHitoDto } from './dto/create_hito.dto';
import { UpdateHitoDto } from './dto/update_hito.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HitoService {
  constructor(private readonly prisma: PrismaService) {}

  create(createHitoDto: CreateHitoDto) {
    return this.prisma.hito.create({
      data: createHitoDto,
    });
  }

  findAll() {
    return this.prisma.hito.findMany();
  }

  findOne(id: number) {
    return this.prisma.hito.findUnique({ where: { id_Hito: id } });
  }

  update(id: number, updateHitoDto: UpdateHitoDto) {
    return this.prisma.hito.update({
      where: { id_Hito: id },
      data: updateHitoDto,
    });
  }

  remove(id: number) {
    return this.prisma.hito.delete({ where: { id_Hito: id } });
  }
}
