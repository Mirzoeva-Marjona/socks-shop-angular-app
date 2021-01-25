import {Component, Input, OnInit, Output} from '@angular/core';
import {Purchase} from '../purchase';

@Component({
  selector: 'app-basket-row',
  templateUrl: './basket-row.component.html',
  styleUrls: ['./basket-row.component.less']
})
export class BasketRowComponent implements OnInit {
  @Input() purchase: Purchase;
  constructor() { }

  ngOnInit(): void {
  }
  

}
