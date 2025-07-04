import { Injectable } from '@nestjs/common';
import { CreatePlanSemanalPartidaDto } from './dto/create_plan_semanal_partida.dto';
import { UpdatePlanSemanalPartidaDto } from './dto/update_plan_semanal_partida.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanSemanalPartidaService {
    constructor(private prisma: PrismaService) {}

    create(createPlanSemanalPartidaDto: CreatePlanSemanalPartidaDto) {
    return this.prisma.planSemanalPartida.create({
      data: createPlanSemanalPartidaDto,
    });
  }

  findAll() {
    return this.prisma.planSemanalPartida.findMany();
  }

  findOne(id: number) {
    return this.prisma.planSemanalPartida.findUnique({
      where: {
        id_PlanSemanalPartida: id,
      },
    });
  }

  update(id: number, updatePlanSemanalPartidaDto: UpdatePlanSemanalPartidaDto) {
    return this.prisma.planSemanalPartida.update({
      where: {
        id_PlanSemanalPartida: id,
      },
      data: updatePlanSemanalPartidaDto,
    });
  }

  remove(id: number) {
    return this.prisma.planSemanalPartida.delete({
      where: {
        id_PlanSemanalPartida: id,
      },
    });
  }
}
