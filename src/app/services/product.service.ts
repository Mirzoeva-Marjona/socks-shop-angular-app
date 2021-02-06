import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/products');
  }

  public getProduct(id: number): Observable<Product> {
    return this.http.get<Product>('/api/products/' + id)
      .pipe(take(1),
        // for example
        filter(product => true));
  }
}
