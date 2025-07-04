import { PartialType } from '@nestjs/mapped-types';
import { CreateViviendaDto } from './create_vivienda.dto';

export class UpdateViviendaDto extends PartialType(CreateViviendaDto) {}
