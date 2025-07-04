import { IsNumber, IsString } from "class-validator";


export class CreatePartidaDto {
    @IsString()
    nombre: string;
    @IsString()
    medida: string;
    @IsString()
    ritmo: string;
    @IsNumber()
    cuadrillasSugeridas: number;
    @IsNumber()
    hitoId: number;
    @IsNumber()
    procesoConstrutivoId: number;
    @IsNumber()
    paqueteTrabajoId: number;
}
