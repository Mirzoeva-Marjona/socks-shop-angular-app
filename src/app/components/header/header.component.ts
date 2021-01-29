import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() public count = '0';
  @Output() public clickOpenBasket = new EventEmitter<void>();

  public isAuthenticated = false;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

  public logInLogOut(): void {
    if (this.authenticationService.isAuthenticated()) {
      this.authenticationService.logOut();
      this.router.navigate(['/']);
    } else {
      this.authenticationService.logIn();
    }
    this.isAuthenticated = this.authenticationService.isAuthenticated();
  }

  ngOnInit(): void {
  }

  public openBasketClick(): void {
    this.clickOpenBasket.emit();
  }
}
