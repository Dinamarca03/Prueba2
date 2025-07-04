import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePmEquipoDto {

    @IsNotEmpty()
    @IsNumber()
    usuarioId: number;

    @IsNotEmpty()
    @IsNumber()
    equipoTrabajoId: number;
    
    @IsNotEmpty()
    @IsNumber()
    equipoCargoId: number;
}
