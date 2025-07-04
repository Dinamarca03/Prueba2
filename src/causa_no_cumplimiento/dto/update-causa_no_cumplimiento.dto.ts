import { PartialType } from '@nestjs/mapped-types';
import { CreateCausaNoCumplimientoDto } from './create-causa_no_cumplimiento.dto';

export class UpdateCausaNoCumplimientoDto extends PartialType(CreateCausaNoCumplimientoDto) {}
