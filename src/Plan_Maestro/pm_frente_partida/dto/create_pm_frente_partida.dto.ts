import { IsNumber } from "class-validator";

export class CreatePmFrentePartidaDto {

    @IsNumber()
    partidaId: number;

    @IsNumber()
    cuadrilla: number;

    @IsNumber()
    frenteId: number;

    @IsNumber()
    orden: number;
}
