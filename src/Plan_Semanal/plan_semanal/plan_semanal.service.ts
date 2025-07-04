import { Injectable } from '@nestjs/common';
import { CreatePlanSemanalDto } from './dto/create_plan_semanal.dto';
import { UpdatePlanSemanalDto } from './dto/update_plan_semanal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlanSemanalService {
  constructor(private prisma: PrismaService) {}

  create(createPlanSemanalDto: CreatePlanSemanalDto) {
    return this.prisma.planSemanal.create({
      data: createPlanSemanalDto,
    });
  }

  findAll() {
    return this.prisma.planSemanal.findMany();
  }

  findOne(id: number) {
    return this.prisma.planSemanal.findUnique({
      where: {
        id_PlanSemanal: id,
      },
    });
  }

  update(id: number, updatePlanSemanalDto: UpdatePlanSemanalDto) {
    return this.prisma.planSemanal.update({
      where: {
        id_PlanSemanal: id,
      },
      data: updatePlanSemanalDto,
    });
  }

  remove(id: number) {
    return this.prisma.planSemanal.delete({
      where: {
        id_PlanSemanal: id,
      },
    });
  }
}
