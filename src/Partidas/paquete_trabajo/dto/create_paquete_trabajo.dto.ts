import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreatePaqueteTrabajoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @Type(() => Boolean)
    @IsBoolean()
    esActivo: boolean;
}
