import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateCausaNoCumplimientoDto {

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsBoolean()
    @IsNotEmpty()
    esActivo: boolean;
}
