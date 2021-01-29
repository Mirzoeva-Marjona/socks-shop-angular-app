import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  public products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit(): void {
  }
}
