import {Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() clickOpenBasket = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  openBasketClick(): void {
    this.clickOpenBasket.emit();
  }
}
