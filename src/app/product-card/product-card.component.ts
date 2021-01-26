import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product';
import {StorageService} from '../storage.service';
import {EventService} from '../event.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = new Product(0, '', '', 0);

  selectSocksSize: string = '';

  constructor(private storage: StorageService, private eventService: EventService) {
  }

  ngOnInit(): void {
  }

  clickInBasket(): void {
    if (this.selectSocksSize !== '') {
      this.storage.addPurchase(this.product, this.selectSocksSize);
      this.eventService.announceAddToBasketEvent();
    } else {
      this.eventService.announceShowNotification();
    }
  }
}
