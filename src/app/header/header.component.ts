import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StorageService} from '../storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() count = '0';
  @Output() clickOpenBasket = new EventEmitter();

  isAuthenticated = false;

  constructor(private storage: StorageService, private router: Router) {
    this.isAuthenticated = storage.isAuthenticated();
  }

  logInLogOut(): void {
    if (this.storage.isAuthenticated()) {
      this.storage.logOut();
      this.router.navigate(['/']);
    } else {
      this.storage.logIn();
    }
    this.isAuthenticated = this.storage.isAuthenticated();
  }

  ngOnInit(): void {
  }

  openBasketClick(): void {
    this.clickOpenBasket.emit();
  }
}
