import { IsDate, IsNotEmpty, IsNumber } from "class-validator";
import { Type } from "class-transformer";

export class CreatePmProgramacionDto {

    @IsNotEmpty()
    @IsNumber()
    viviendaId: number;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaInicio: Date;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaFin: Date;

    @IsNotEmpty()
    @IsNumber()
    cantidad: number;

    @IsNotEmpty()
    @IsNumber()
    pmFrentePartidaId: number;
}
