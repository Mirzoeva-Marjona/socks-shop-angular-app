import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() showNotification = new EventEmitter();
  @Output() addToBasketEvent = new EventEmitter();

  selectSocksSize: string = '';

  constructor(private storage: StorageService) {
  }

  ngOnInit(): void {
  }

  clickInBasket(): void {
    if (this.selectSocksSize != '') {
      this.storage.addPurchase(this.product, this.selectSocksSize);
      this.addToBasketEvent.emit();
    } else {
      this.showNotification.emit();
    }
  }
}
