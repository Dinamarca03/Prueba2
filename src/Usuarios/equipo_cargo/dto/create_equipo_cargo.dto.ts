import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateEquipoCargoDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsBoolean()
    esActivo: boolean;
}
