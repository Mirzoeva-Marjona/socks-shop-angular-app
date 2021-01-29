import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'price'})
export class RowPricePipe implements PipeTransform {
  public transform(price: number, count: number): number {
    return price * count;
  }
}
