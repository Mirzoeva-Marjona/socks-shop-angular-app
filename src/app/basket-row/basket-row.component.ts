import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Purchase} from '../purchase';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-basket-row',
  templateUrl: './basket-row.component.html',
  styleUrls: ['./basket-row.component.less']
})
export class BasketRowComponent implements OnInit {
  @Input() public purchase: Purchase = {};
  constructor() { }

  @Output() public deleteRow = new EventEmitter<Purchase>();
  @Output() public productRowChanged = new EventEmitter<Purchase>();
  ngOnInit(): void {
  }

  deleteBasketRow(): void {
    this.deleteRow.emit(this.purchase);
  }

  public updateBasketRow(count: number): void {
    this.purchase.count = count;
    if (count === 0) {
      this.deleteBasketRow();
    } else {
      this.productRowChanged.emit(this.purchase);
    }
  }
}
