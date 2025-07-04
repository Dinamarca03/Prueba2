import { IsBoolean, IsString } from "class-validator";

export class CreateModeloViviendaDto {

    @IsString()
    nombre: string;

    @IsBoolean()
    activo: boolean;
}
