import { PartialType } from '@nestjs/mapped-types';
import { CreateProyectoDto } from './create_proyecto.dto';

export class UpdateProyectoDto extends PartialType(CreateProyectoDto) {}
