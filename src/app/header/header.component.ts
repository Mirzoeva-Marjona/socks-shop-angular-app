import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Output() clickOpenBasket = new EventEmitter();

  constructor(storage: StorageService) {
    this.count = storage.getCount();
  }
  count = 0;

  ngOnInit(): void {
  }

  openBasketClick(): void {
    this.clickOpenBasket.emit();
  }
}
