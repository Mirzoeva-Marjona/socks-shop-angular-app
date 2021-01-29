import {Component} from '@angular/core';
import {EventService} from './services/event.service';
import {PurchaseService} from './services/purchase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  public isBasketVisible = false;
  public isNotificationVisible = false;
  public isLoaderVisible = false;
  public count = 0;

  constructor(private purchaseService: PurchaseService, private eventService: EventService) {
    this.count = this.purchaseService.getCount();
    // @ts-ignore
    eventService.notificationShowed$._subscribe(() => {
        this.isNotificationVisible = true;
      }
    );
    // @ts-ignore
    eventService.addedToBasket$._subscribe(() => {
        this.basketUpdated();
      }
    );
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
}

