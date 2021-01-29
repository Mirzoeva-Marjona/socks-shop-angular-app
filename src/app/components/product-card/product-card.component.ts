import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {EventService} from '../../services/event.service';
import {PurchaseService} from '../../services/purchase.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input() public product: Product = new Product(0, '', '', 0);

  public selectSocksSize: string = '';

  constructor(private purchaseService: PurchaseService, private eventService: EventService) {
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
