import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreatePlanSemanalPartidaDto {

    @IsNotEmpty()
    @IsNumber()
    partidaId: number;

    
    @IsNotEmpty()
    @IsNumber()
    viviendaId: number;
    
    @IsNotEmpty()
    @IsBoolean()
    revisionOk: boolean;
    
    @IsNotEmpty()
    @IsNumber()
    id_UsuarioRevision: number;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaRevision: Date;

    @IsNumber()
    causaNoCumplimientoId: number;

    @IsString()
    observacion: string;

    @IsNotEmpty()
    @IsNumber()
    responsableId: number;

    
    @IsNumber()
    cantidadProgramada: number;

    @IsNumber()
    cantidadEjecutada: number;

    @IsNumber()
    id_Cuadrilla: number;





}
