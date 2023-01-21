import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsForSaleComponent } from './items-for-sale/items-for-sale.component';
import { UserDataContainerComponent } from './user-data-container/user-data-container.component';
import { UserDataSingleStandardComponent } from './user-data-single-standard/user-data-single-standard.component';
import { UserDataSingleSlotComponent } from './user-data-single-slot/user-data-single-slot.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsForSaleComponent,
    UserDataContainerComponent,
    UserDataSingleStandardComponent,
    UserDataSingleSlotComponent
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
