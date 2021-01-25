import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from '../product';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  selectSocksSize: string = '';
  constructor(private storage: StorageService) { }

  @Output() showNotification = new EventEmitter();
  ngOnInit(): void {
  }

  clickInBasket(): void {
    if (this.selectSocksSize != '') {
      this.storage.addPurchase(this.product, this.selectSocksSize);
    } else {
      this.showNotification.emit();
    }

  }
}
