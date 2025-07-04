import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanSemanalDto } from './create_plan_semanal.dto';

export class UpdatePlanSemanalDto extends PartialType(CreatePlanSemanalDto) {}
