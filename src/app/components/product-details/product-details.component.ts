import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {ProductService} from '../../services/product.service';
import {PurchaseService} from '../../services/purchase.service';
import {BehaviorSubject, Subscription} from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  public product$: BehaviorSubject<Product> = new BehaviorSubject<Product>(new Product(0, '', '', '', 0));
  private subscription$: Subscription = new Subscription();
  public selectSocksSize = '';

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService,
              private router: Router, private eventService: EventService, private purchaseService: PurchaseService) {
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;
    this.subscription$ = this.productService.getProduct(id)
      .subscribe(product => this.product$.next(product),
        error => this.router.navigate(['page-not-found']));
  }

  public clickInBasket(): void {
    if (this.selectSocksSize !== '') {
      this.purchaseService.addPurchase(this.product$.getValue(), this.selectSocksSize);
      this.eventService.announceAddToBasketEvent();
    } else {
      this.eventService.announceShowNotification();
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
