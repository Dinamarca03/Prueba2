import { IsNotEmpty, IsString } from "class-validator";

export class CreateUsuarioDto {

    @IsNotEmpty() //IsNotEmpty es para que no sea nulo
    @IsString() //IsString es para que sea string
    nombre: string;
}
