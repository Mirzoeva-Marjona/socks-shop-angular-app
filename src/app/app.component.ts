import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isBasketVisible = false;
  isNotificationVisible = false;
  isLoaderVisible = false;
  public showBasket(): void {
    (async () => {
      this.isLoaderVisible = true;
      await this.delay(2000);
      this.isLoaderVisible = false;
      this.isBasketVisible = true;
    })();
  }
  private delay(ms: number): any {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}

