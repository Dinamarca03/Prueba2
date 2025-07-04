import { PartialType } from '@nestjs/mapped-types';
import { CreateEquipoCargoDto } from './create_equipo_cargo.dto';

export class UpdateEquipoCargoDto extends PartialType(CreateEquipoCargoDto) {}
