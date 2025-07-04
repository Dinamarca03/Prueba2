import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateProyectoDto {

    
    @IsString()
    nombre: string;
    
    @IsBoolean()
    @IsNotEmpty()
    activo: boolean;
}
