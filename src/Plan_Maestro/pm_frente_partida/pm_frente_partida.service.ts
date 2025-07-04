import { Injectable } from '@nestjs/common';
import { CreatePmFrentePartidaDto } from './dto/create_pm_frente_partida.dto';
import { UpdatePmFrentePartidaDto } from './dto/update_pm_frente_partida.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PmFrentePartidaService {
  constructor(private prisma: PrismaService) {}

  create(createPmFrentePartidaDto: CreatePmFrentePartidaDto) {
    return this.prisma.pmFrentePartida.create({
      data: createPmFrentePartidaDto,
    });
  }

  findAll() {
    return this.prisma.pmFrentePartida.findMany();
  }

  findOne(id: number) {
    return this.prisma.pmFrentePartida.findUnique({
      where: {
        id_PmFrentePartida: id,
      },
    });
  }

  update(id: number, updatePmFrentePartidaDto: UpdatePmFrentePartidaDto) {
    return this.prisma.pmFrentePartida.update({
      where: {
        id_PmFrentePartida: id,
      },
      data: updatePmFrentePartidaDto,
    });
  }

  remove(id: number) {
    return this.prisma.pmFrentePartida.delete({
      where: {
        id_PmFrentePartida: id,
      },
    });
  }
}
