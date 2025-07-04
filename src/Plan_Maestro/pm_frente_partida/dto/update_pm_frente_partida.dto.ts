import { PartialType } from '@nestjs/mapped-types';
import { CreatePmFrentePartidaDto } from './create_pm_frente_partida.dto';

export class UpdatePmFrentePartidaDto extends PartialType(CreatePmFrentePartidaDto) {}
