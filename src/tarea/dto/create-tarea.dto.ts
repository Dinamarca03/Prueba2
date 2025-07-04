import { IsNotEmpty , IsString, IsNumber} from "class-validator";

export class CreateTareaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  tareaEstadoId: number;

  @IsNotEmpty()
  @IsNumber()
  tareaPrioridadId: number;
}
