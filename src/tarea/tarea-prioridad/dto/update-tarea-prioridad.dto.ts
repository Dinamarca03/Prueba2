import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaPrioridadDto } from './create-tarea-prioridad.dto';

export class UpdateTareaPrioridadDto extends PartialType(CreateTareaPrioridadDto) {}
