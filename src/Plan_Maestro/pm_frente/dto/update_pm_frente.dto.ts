import { PartialType } from '@nestjs/mapped-types';
import { CreatePmFrenteDto } from './create_pm_frente.dto';

export class UpdatePmFrenteDto extends PartialType(CreatePmFrenteDto) {}
