import { PartialType } from '@nestjs/mapped-types';
import { CreatePaqueteTrabajoDto } from './create_paquete_trabajo.dto';

export class UpdatePaqueteTrabajoDto extends PartialType(CreatePaqueteTrabajoDto) {}
