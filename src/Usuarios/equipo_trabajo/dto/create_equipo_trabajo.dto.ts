import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateEquipoTrabajoDto {
    
    @IsNotEmpty()
    @IsNumber()
    planMaestroId: number;
    
}
