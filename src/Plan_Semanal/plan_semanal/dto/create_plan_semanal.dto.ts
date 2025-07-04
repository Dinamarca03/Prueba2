import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Type } from 'class-transformer';

export class CreatePlanSemanalDto {

    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaInicio: Date;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    fechaTermino: Date;

    @IsNumber()
    pmFrenteId: number;
}
