import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit, OnDestroy {
  public products$: Subject<Product[]> = new Subject<Product[]>();
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getProducts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(products => this.products$.next(products));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }
}
