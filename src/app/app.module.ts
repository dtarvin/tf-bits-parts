import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsForSaleComponent } from './items-for-sale/items-for-sale.component';
import { UserDataContainerComponent } from './user-data-container/user-data-container.component';
import { UserDataSingleStandardComponent } from './user-data-single-standard/user-data-single-standard.component';
import { UserDataSingleSlotComponent } from './user-data-single-slot/user-data-single-slot.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { SellerAccountComponent } from './seller-account/seller-account.component';
import { ReviewComponent } from './review/review.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FilteringComponent } from './filtering/filtering.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsForSaleComponent,
    UserDataContainerComponent,
    UserDataSingleStandardComponent,
    UserDataSingleSlotComponent,
    HeaderComponent,
    NavigationComponent,
    ProductListingComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    UserAccountComponent,
    SellerAccountComponent,
    ReviewComponent,
    PaginationComponent,
    FilteringComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
