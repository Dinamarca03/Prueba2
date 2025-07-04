import { IsNumber, IsString } from "class-validator";

export class CreateViviendaDto {

    @IsString()
    numero: string;
    
    @IsString()
    id_Frente: string;

    @IsNumber()
    modeloViviendaId: number;
}
