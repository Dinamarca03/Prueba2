import { IsNumber, IsString } from "class-validator";

export class CreatePmFrenteDto {

    @IsNumber()
    planMaestroId: number;  
    
    @IsString()
    nombre: string;
}
