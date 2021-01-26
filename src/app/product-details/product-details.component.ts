import {Component, OnInit} from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute, Router} from '@angular/router';
import {StorageService} from '../storage.service';
import {EventService} from '../event.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less']
})
export class ProductDetailsComponent implements OnInit {
  product = new Product(0, '', '', 0);
  selectSocksSize = '';

  constructor(private activateRoute: ActivatedRoute, private storage: StorageService,
              private router: Router, private eventService: EventService) {
    const id = activateRoute.snapshot.params.id;
    const products = this.storage.loadProduct(id);
    console.log(id, products);
    if (products.length !== 0) {
      this.product = products[0];
    } else {
      this.router.navigate(['page-not-fount']);
    }
  }

  ngOnInit(): void {
  }

  clickInBasket(): void {
    if (this.selectSocksSize !== '') {
      this.storage.addPurchase(this.product, this.selectSocksSize);
      this.eventService.announceAddToBasketEvent();
    } else {
      this.eventService.announceShowNotification();
    }
  }
}
