import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.less']
})
export class BasketComponent implements OnInit {

  @Output() clickCloseBasket = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeBasketClick(): void {
    this.clickCloseBasket.emit();
  }
}
