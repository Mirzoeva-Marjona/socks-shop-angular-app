import {Injectable} from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private storage: StorageService) {
    this.logOut();
  }

  public logIn(): void {
    this.storage.setItem('isAuthenticated', 'true');
  }

  public logOut(): void {
    this.storage.setItem('isAuthenticated', 'false');
  }

  public isAuthenticated(): boolean {
    const value = this.storage.getItem('isAuthenticated');
    return value === 'true';
  }
}
