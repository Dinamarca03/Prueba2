import { Injectable } from '@nestjs/common';
import { CreatePartidaDto } from './dto/create_partida.dto';
import { UpdatePartidaDto } from './dto/update_partida.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartidaService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPartidaDto: CreatePartidaDto) {
    return this.prisma.partida.create({
      data: createPartidaDto,
    });
  }

  findAll() {
    return this.prisma.partida.findMany();
  }

  findOne(id: number) {
    return this.prisma.partida.findUnique({ where: { id_Partida: id } });
  }

  update(id: number, updatePartidaDto: UpdatePartidaDto) {
    return this.prisma.partida.update({
      where: { id_Partida: id },
      data: updatePartidaDto,
    });
  }

  remove(id: number) {
    return this.prisma.partida.delete({ where: { id_Partida: id } });
  }
}
