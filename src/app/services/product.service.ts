import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  public getProduct(id: number): Promise<Product> {
    return this.http.get<Product>('/api/products/' + id)
      .toPromise();
  }

  public addProduct(product: Product): Observable<any> {
    const body = {
      name: product.name,
      img: product.img,
      sex: product.sex,
      price: product.price
    };
    return this.http.post('/api/products/', body);
  }
}
