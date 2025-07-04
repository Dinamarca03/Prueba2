import { PartialType } from '@nestjs/mapped-types';
import { CreatePmProgramacionDto } from './create_pm_programacion.dto';

export class UpdatePmProgramacionDto extends PartialType(CreatePmProgramacionDto) {}
