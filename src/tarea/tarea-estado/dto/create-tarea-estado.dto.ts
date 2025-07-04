import { IsNotEmpty, IsString } from "class-validator";

export class CreateTareaEstadoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;
}
