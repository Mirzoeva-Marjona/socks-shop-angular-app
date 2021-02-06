import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private showNotification$ = new Subject<void>();
  private addToBasketEvent$ = new Subject<void>();

  constructor() {
  }

  public getNotification(): Observable<void> {
    return this.showNotification$.asObservable();
  }

  public getAddedToBasket(): Observable<void> {
    return this.addToBasketEvent$.asObservable();
  }

  public announceShowNotification(): void {
    this.showNotification$.next();
  }

  public announceAddToBasketEvent(): void {
    this.addToBasketEvent$.next();
  }
}
