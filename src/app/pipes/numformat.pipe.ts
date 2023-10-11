import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numformat'
})
export class NumformatPipe implements PipeTransform {

  transform(value: string): string {
    // Assuming the input value is a 10-digit number
    const part1 = value.slice(0, 3);
    const part2 = value.slice(3, 6);
    const part3 = value.slice(6, 10);

    return `(${part1})-(${part2})-${part3}`;
  }
}
