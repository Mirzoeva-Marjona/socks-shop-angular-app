import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {products} from '../mocks/mock';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  public getProducts(): Product[] {
    return products;
  }

  public getProduct(id: number): Product[] {
    return products.filter(item => item.id === Number(id));
  }
}
