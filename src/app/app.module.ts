import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BannerComponent} from './banner/banner.component';
import {MenuComponent} from './menu/menu.component';
import {ProductCardComponent} from './product-card/product-card.component';
import {FooterComponent} from './footer/footer.component';
import {CardListComponent} from './card-list/card-list.component';
import {BasketComponent} from './basket/basket.component';
import {BasketRowComponent} from './basket-row/basket-row.component';
import {CounterComponent} from './counter/counter.component';
import {LoaderComponent} from './loader/loader.component';
import {NotificationComponent} from './notification/notification.component';
import {FormsModule} from '@angular/forms';
import {RowPricePipe} from './basket-row/row-price.pipe';
import {RubPipe} from './basket/rub.pipe';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserGuard} from './user.guard';

const appRoutes: Routes = [
  {path: '', component: CardListComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'profile', component: UserProfileComponent, canActivate: [UserGuard]},
  {path: '**', component: PageNotFoundComponent},
];

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
    PageNotFoundComponent,
    ProductDetailsComponent,
    UserProfileComponent,
  ],
    imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
