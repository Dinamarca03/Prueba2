import { IsNotEmpty, IsString } from "class-validator";

export class CreateObjetivoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;
}
