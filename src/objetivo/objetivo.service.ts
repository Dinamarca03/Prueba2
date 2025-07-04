import { Injectable } from '@nestjs/common';
import { CreateObjetivoDto } from './dto/create-objetivo.dto';
import { UpdateObjetivoDto } from './dto/update-objetivo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ObjetivoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createObjetivoDto: CreateObjetivoDto) {
    return this.prismaService.objetivo.create({
      data: createObjetivoDto,
    });
  }

  findAll() {
    return this.prismaService.objetivo.findMany();
  }

  findOne(id: number) {
    return this.prismaService.objetivo.findUnique({
      where: {
        id_Objetivo: id,
      },
    });
  }

  update(id: number, updateObjetivoDto: UpdateObjetivoDto) {
    return this.prismaService.objetivo.update({
      where: {
        id_Objetivo: id,
      },
      data: updateObjetivoDto,
    });
  }

  remove(id: number) {
    return this.prismaService.objetivo.delete({
      where: {
        id_Objetivo: id,
      },
    });
  }
}
