import { PartialType } from '@nestjs/mapped-types';
import { CreateModeloViviendaDto } from './create_modelo_vivienda.dto';

export class UpdateModeloViviendaDto extends PartialType(CreateModeloViviendaDto) {}
