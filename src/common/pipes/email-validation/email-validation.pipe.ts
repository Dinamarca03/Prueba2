import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class EmailValidationPipe implements PipeTransform {
  transform(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new BadRequestException('El email no tiene un formato válido');
    }
    return value;
  }
}