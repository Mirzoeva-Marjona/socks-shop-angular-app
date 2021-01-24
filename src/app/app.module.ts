import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FooterComponent } from './footer/footer.component';
import { CardListComponent } from './card-list/card-list.component';
import { BasketComponent } from './basket/basket.component';
import { BasketRowComponent } from './basket-row/basket-row.component';
import { CounterComponent } from './counter/counter.component';
import { LoaderComponent } from './loader/loader.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MenuComponent,
    ProductCardComponent,
    FooterComponent,
    CardListComponent,
    BasketComponent,
    BasketRowComponent,
    CounterComponent,
    LoaderComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
