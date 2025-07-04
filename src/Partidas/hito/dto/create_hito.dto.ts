import { IsBoolean, IsNotEmpty, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreateHitoDto {
    @IsNotEmpty() //con @IsNotEmpty() se valida que el campo no sea nulo o undefined
    @IsString() //con @IsString() se valida que el campo sea una cadena de texto
    nombre: string;

    @IsNotEmpty() //con @IsNotEmpty() se valida que el campo no sea nulo o undefined
    @IsString() //con @IsString() se valida que el campo sea una cadena de texto
    descripcion: string;

    @Type(() => Boolean) //con @Type(() => Boolean) se valida que el campo sea un booleano
    @IsBoolean() //con @IsBoolean() se valida que el campo sea un booleano
    esActivo: boolean;
}
