import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class CapitalizePipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== 'string') return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}