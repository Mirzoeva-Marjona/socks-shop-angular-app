import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'rub'})
export class RubPipe implements PipeTransform {
  public transform(price: number): string {
    return price.toString() + ' руб.';
  }
}
