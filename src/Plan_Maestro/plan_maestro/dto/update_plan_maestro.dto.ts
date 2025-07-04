import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanMaestroDto } from './create_plan_maestro.dto';

export class UpdatePlanMaestroDto extends PartialType(CreatePlanMaestroDto) {}
