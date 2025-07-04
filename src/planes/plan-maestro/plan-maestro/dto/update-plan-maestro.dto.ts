import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanMaestroDto } from './create-plan-maestro.dto';

export class UpdatePlanMaestroDto extends PartialType(CreatePlanMaestroDto) {}
