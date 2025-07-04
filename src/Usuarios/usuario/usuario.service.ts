import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create_usuario.dto';
import { UpdateUsuarioDto } from './dto/update_usuario.dto';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.prisma.usuario.create({ data: createUsuarioDto });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  findOne(id: number) {
    return this.prisma.usuario.findUnique({ where: { id_Usuario: id } });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.usuario.update({ where: { id_Usuario: id }, data: updateUsuarioDto });
  }

  remove(id: number) {
    return this.prisma.usuario.delete({ where: { id_Usuario: id } });
  }
}
