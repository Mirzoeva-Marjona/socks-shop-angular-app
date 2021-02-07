import {Component, OnInit} from '@angular/core';
import {Product} from '../../models/product';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.less']
})
export class AddProductComponent implements OnInit {
  private product: Product = new Product(0, '', '', '', 0);
  public productForm = new FormGroup({
    name: new FormControl(this.product.name, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(200)
    ]),
    img: new FormControl(this.product.img, [
      Validators.required
    ]),
    sex: new FormControl(this.product.sex, [
      Validators.required,
      Validators.min(3),
      Validators.max(5)
    ]),
    price: new FormControl(this.product.price, [
      Validators.required,
      Validators.min(150),
      Validators.max(999)
    ])
  });

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    this.productService.addProduct(this.productForm.value).subscribe(() => {
    });
    this.router.navigate(['/']).then();
  }
}
