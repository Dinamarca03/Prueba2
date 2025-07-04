import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanSemanalPartidaDto } from './create_plan_semanal_partida.dto';

export class UpdatePlanSemanalPartidaDto extends PartialType(CreatePlanSemanalPartidaDto) {}
