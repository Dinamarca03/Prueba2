import { PartialType } from '@nestjs/mapped-types';
import { CreateHitoDto } from './create_hito.dto';

export class UpdateHitoDto extends PartialType(CreateHitoDto) {}
