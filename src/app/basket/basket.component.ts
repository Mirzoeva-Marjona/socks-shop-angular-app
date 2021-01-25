import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Purchase} from '../purchase';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {

  @Output() clickCloseBasket = new EventEmitter();
  private purchase: Purchase[] = [];
  constructor(private storage: StorageService) {
    this.purchase = this.storage.loadPurchase();
  }

  ngOnInit(): void {
  }

  closeBasketClick(): void {
    this.clickCloseBasket.emit();
  }

  deleteBasketRow(purchase: Purchase): void {
    this.storage.deleteBasketRow(purchase.id.toString() + '_' + purchase.socksSize);
    this.purchase = this.storage.loadPurchase();
  }

  productRowChanged(purchase: Purchase): void {
    this.storage.updatePurchase(purchase);
  }
}
