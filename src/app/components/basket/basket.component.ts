import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Purchase} from '../../models/purchase';
import {PurchaseService} from '../../services/purchase.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {

  @Output() public clickCloseBasket = new EventEmitter<void>();
  @Output() public basketUpdated = new EventEmitter<void>();
  public purchase: Purchase[] = [];
  public totalPrice = 0;

  constructor(private purchaseService: PurchaseService) {
    this.purchase = this.purchaseService.loadPurchase();
  }

  ngOnInit(): void {
    this.update();
  }

  public closeBasketClick(): void {
    this.clickCloseBasket.emit();
  }

  public deleteBasketRow(purchase: Purchase): void {
    this.purchaseService.deleteBasketRow(purchase.id.toString() + '_' + purchase.socksSize);
    this.purchase = this.purchaseService.loadPurchase();
    this.update();
  }

  private productRowChanged(purchase: Purchase): void {
    this.purchaseService.updatePurchase(purchase);
    this.update();
  }

  private update(): void {
    this.totalPrice = 0;
    this.purchase.forEach((value) => {
      this.totalPrice += value.price * value.count;
    });
    this.basketUpdated.emit();
  }
}
