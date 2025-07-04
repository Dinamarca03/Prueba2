import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreatePlanMaestroDto {

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaInicio: Date;

    @IsNotEmpty()
    @IsNumber()
    proyectoId: number;
}
