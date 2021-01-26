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
import {FormsModule} from '@angular/forms';
import {RowPricePipe} from './basket-row/row-price.pipe';
import {RubPipe} from './basket/rub.pipe';

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
    NotificationComponent,
    RowPricePipe,
    RubPipe,
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
