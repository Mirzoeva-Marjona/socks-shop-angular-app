import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  products: Product[] = [];
  constructor(private storageService: StorageService) {
    this.products = storageService.loadProducts();
  }

  ngOnInit(): void {
  }

}
