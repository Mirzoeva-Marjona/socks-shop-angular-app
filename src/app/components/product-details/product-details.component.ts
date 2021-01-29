import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../services/event.service';
import {ProductService} from '../../services/product.service';
import {PurchaseService} from '../../services/purchase.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  public product = new Product(0, '', '', 0);
  public selectSocksSize = '';

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService,
              private router: Router, private eventService: EventService, private purchaseService: PurchaseService) {
    const id = activateRoute.snapshot.params.id;
    const products = this.productService.getProduct(id);
    console.log(id, products);
    if (products.length !== 0) {
      this.product = products[0];
    } else {
      this.router.navigate(['page-not-fount']);
    }
  }

  ngOnInit(): void {
  }

  public clickInBasket(): void {
    if (this.selectSocksSize !== '') {
      this.purchaseService.addPurchase(this.product, this.selectSocksSize);
      this.eventService.announceAddToBasketEvent();
    } else {
      this.eventService.announceShowNotification();
    }
  }
}
