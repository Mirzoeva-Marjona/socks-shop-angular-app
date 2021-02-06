import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {BannerComponent} from './components/banner/banner.component';
import {MenuComponent} from './components/menu/menu.component';
import {ProductCardComponent} from './components/product-card/product-card.component';
import {FooterComponent} from './components/footer/footer.component';
import {CardListComponent} from './components/card-list/card-list.component';
import {BasketComponent} from './components/basket/basket.component';
import {BasketRowComponent} from './components/basket-row/basket-row.component';
import {CounterComponent} from './components/counter/counter.component';
import {LoaderComponent} from './components/loader/loader.component';
import {NotificationComponent} from './components/notification/notification.component';
import {FormsModule} from '@angular/forms';
import {RowPricePipe} from './pipes/row-price.pipe';
import {RubPipe} from './pipes/rub.pipe';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ProductDetailsComponent} from './components/product-details/product-details.component';
import {UserProfileComponent} from './components/user-profile/user-profile.component';
import {UserGuard} from './guards/user.guard';
import {HttpClientModule} from '@angular/common/http';

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
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
