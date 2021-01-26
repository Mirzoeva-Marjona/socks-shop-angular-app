import {Component} from '@angular/core';
import {StorageService} from './storage.service';
import {EventService} from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isBasketVisible = false;
  isNotificationVisible = false;
  isLoaderVisible = false;
  count = 0;

  constructor(private storage: StorageService, private eventService: EventService) {
    this.count = storage.getCount();
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
    this.count = this.storage.getCount();
  }

  private delay(ms: number): any {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

