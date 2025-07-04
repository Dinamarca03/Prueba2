import { Injectable } from '@nestjs/common';
import { CreatePlanMaestroDto } from './dto/create_plan_maestro.dto';
import { UpdatePlanMaestroDto } from './dto/update_plan_maestro.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanMaestroService {
  constructor(private prisma: PrismaService) {}

  create(createPlanMaestroDto: CreatePlanMaestroDto) {
    return this.prisma.planMaestro.create({
      data: createPlanMaestroDto,
    });
  }

  findAll() {
    return this.prisma.planMaestro.findMany();
  }

  findOne(id: number) {
    return this.prisma.planMaestro.findUnique({
      where: {
        id_PlanMaestro: id,
      },
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
      },
    });
  }
}
