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
  public product: Product = new Product(0, '', '', '', 0);
  public selectSocksSize = '';

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService,
              private router: Router, private eventService: EventService, private purchaseService: PurchaseService) {
  }

  async ngOnInit(): Promise<void> {
    const id = this.activateRoute.snapshot.params.id;
    await this.productService.getProduct(id)
      .then(value => this.product = value)
      .catch(() => this.router.navigate(['page-not-found']));
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
