/* se requiere importar class-validator y class-transformer para validacion de datos */
/* npm i --save class-validator class-transformer */

import { IsNotEmpty, IsOptional, IsBoolean, IsDate, IsInt, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreatePlanMaestroDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    /*   @IsOptional()
      @IsString()
      descripcion?: string; */

    @IsString()
    descripcion: string;  // Quita el ? y el @IsOptional()

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaInicio: Date;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaFin: Date;

    @IsNotEmpty()
    @IsInt()
    id_Usuario: number;

    @IsNotEmpty()
    @IsInt()
    id_Proyecto: number;

    @IsOptional()
    @IsBoolean()
    esActivo?: boolean;
}
