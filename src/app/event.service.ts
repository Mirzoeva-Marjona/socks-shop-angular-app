import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private showNotification = new Subject();
  private addToBasketEvent = new Subject();

  notificationShowed$ = this.showNotification.asObservable();
  addedToBasket$ = this.addToBasketEvent.asObservable();

  constructor() {
  }

  announceShowNotification(): void {
    this.showNotification.next();
  }

  announceAddToBasketEvent(): void {
    this.addToBasketEvent.next();
  }
}
