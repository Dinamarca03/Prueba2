import { Injectable } from '@nestjs/common';
import { CreatePlanMaestroDto } from './dto/create-plan-maestro.dto';
import { UpdatePlanMaestroDto } from './dto/update-plan-maestro.dto';

import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PlanMaestroService {
  constructor(private prisma: PrismaService) { }

  create(createPlanMaestroDto: CreatePlanMaestroDto) {
    return this.prisma.planMaestro.create({
      data: createPlanMaestroDto,
    });
  }
  async findAll() {
    return this.prisma.planMaestro.findMany();
  }

  findOne(id: number) {
    return this.prisma.planMaestro.findUnique({
      where: {
        id_PlanMaestro: id,
      }
    });
  }

  update(id: number, updatePlanMaestroDto: UpdatePlanMaestroDto) {
    return this.prisma.planMaestro.update({
      where: {
        id_PlanMaestro: id,
      },
      data: updatePlanMaestroDto,
    });
  }

  remove(id: number) {
    return this.prisma.planMaestro.delete({
      where: {
        id_PlanMaestro: id,
      }
    });
  }
}
