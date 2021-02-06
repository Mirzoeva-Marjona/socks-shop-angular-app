import {Component, OnDestroy, OnInit} from '@angular/core';
import {EventService} from './services/event.service';
import {PurchaseService} from './services/purchase.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  public isBasketVisible = false;
  public isNotificationVisible = false;
  public isLoaderVisible = false;
  public count = 0;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private purchaseService: PurchaseService, private eventService: EventService) {
  }

  public showBasket(): void {
    (async () => {
      this.isLoaderVisible = true;
      await this.delay(2000);
      this.isLoaderVisible = false;
      this.isBasketVisible = true;
    })();
  }

  public basketUpdated(): void {
    this.count = this.purchaseService.getCount();
  }

  private delay(ms: number): any {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
  }

  ngOnInit(): void {
    this.count = this.purchaseService.getCount();
    this.eventService.getNotification()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
          this.isNotificationVisible = true;
        }
      );
    this.eventService.getAddedToBasket()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
          this.basketUpdated();
        }
      );
  }
}

