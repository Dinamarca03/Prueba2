import { PartialType } from '@nestjs/mapped-types';
import { CreatePartidaDto } from './create_partida.dto';

export class UpdatePartidaDto extends PartialType(CreatePartidaDto) {}
