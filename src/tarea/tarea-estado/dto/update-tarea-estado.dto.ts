import { PartialType } from '@nestjs/mapped-types';
import { CreateTareaEstadoDto } from './create-tarea-estado.dto';

export class UpdateTareaEstadoDto extends PartialType(CreateTareaEstadoDto) {}
