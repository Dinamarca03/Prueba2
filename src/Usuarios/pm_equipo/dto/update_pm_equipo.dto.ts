import { PartialType } from '@nestjs/mapped-types';
import { CreatePmEquipoDto } from './create_pm_equipo.dto';

export class UpdatePmEquipoDto extends PartialType(CreatePmEquipoDto) {}
