import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create_usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
