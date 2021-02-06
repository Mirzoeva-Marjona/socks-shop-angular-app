import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit, OnDestroy {
  public products$: Subject<Product[]> = new Subject<Product[]>();
  private subscription$: Subscription = new Subscription();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.subscription$ = this.productService.getProducts().subscribe(products => this.products$.next(products));
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
