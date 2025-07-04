import { Injectable, PipeTransform ,BadRequestException  } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform <string, number> {
  transform(value: string): number  {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException(`El valor '${value}' no es un número válido`);
    }
    return val;
  }
}
