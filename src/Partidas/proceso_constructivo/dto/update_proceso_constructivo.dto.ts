import { PartialType } from '@nestjs/mapped-types';
import { CreateProcesoConstructivoDto } from './create_proceso_constructivo.dto';

export class UpdateProcesoConstructivoDto extends PartialType(CreateProcesoConstructivoDto) {}
