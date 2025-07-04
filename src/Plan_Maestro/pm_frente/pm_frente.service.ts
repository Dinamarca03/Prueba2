import { Injectable } from '@nestjs/common';
import { CreatePmFrenteDto } from './dto/create_pm_frente.dto';
import { UpdatePmFrenteDto } from './dto/update_pm_frente.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PmFrenteService {
  constructor(private prisma: PrismaService) {}

  create(createPmFrenteDto: CreatePmFrenteDto) {
    return this.prisma.pmFrente.create({
      data: createPmFrenteDto,
    });
  }

  findAll() {
    return this.prisma.pmFrente.findMany();
  }

  findOne(id: number) {
    return this.prisma.pmFrente.findUnique({
      where: {
        id_PmFrente: id,
      },
    });
  }

  update(id: number, updatePmFrenteDto: UpdatePmFrenteDto) {
    return this.prisma.pmFrente.update({
      where: {
        id_PmFrente: id,
      },
      data: updatePmFrenteDto,
    });
  }

  remove(id: number) {
    return this.prisma.pmFrente.delete({
      where: {
        id_PmFrente: id,
      },
    });
  }
}
