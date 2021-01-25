import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() count = 0;
  @Output() clickOpenBasket = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  openBasketClick(): void {
    this.clickOpenBasket.emit();
  }
}
