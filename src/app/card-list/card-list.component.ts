import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../product';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  private products: Product[] = [];
  @Output() showNotification = new EventEmitter();
  @Output() addToBasketEvent = new EventEmitter();
  constructor(private storageService: StorageService) {
    this.products = storageService.loadProducts();
  }

  ngOnInit(): void {
  }

}
