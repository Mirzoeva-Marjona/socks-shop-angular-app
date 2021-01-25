import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'rub'})
export class RubPipe implements PipeTransform {
  transform(price: number): string {
    return price.toString() + ' руб.';
  }
}
