import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoTrabajoDto } from './create_equipo_trabajo.dto';

export class UpdateEquipoTrabajoDto extends PartialType(CreateEquipoTrabajoDto) {}
