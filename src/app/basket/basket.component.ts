import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Purchase} from '../purchase';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {

  @Output() clickCloseBasket = new EventEmitter();
  @Output() basketUpdated = new EventEmitter();
  purchase: Purchase[] = [];
  totalPrice = 0;

  constructor(private storage: StorageService) {
    this.purchase = this.storage.loadPurchase();
  }

  ngOnInit(): void {
    this.update();
  }

  closeBasketClick(): void {
    this.clickCloseBasket.emit();
  }

  deleteBasketRow(purchase: Purchase): void {
    this.storage.deleteBasketRow(purchase.id.toString() + '_' + purchase.socksSize);
    this.purchase = this.storage.loadPurchase();
    this.update();
  }

  productRowChanged(purchase: Purchase): void {
    this.storage.updatePurchase(purchase);
    this.update();
  }

  update(): void {
    this.totalPrice = 0;
    this.purchase.forEach((value) => {
      this.totalPrice += value.price * value.count;
    });
    this.basketUpdated.emit();
  }
}
