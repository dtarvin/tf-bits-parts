import { Component } from '@angular/core';
import { ITEMS_FOR_SALE } from 'src/tf-data';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  items = ITEMS_FOR_SALE;

  onItemSelected(item: Item) {
    console.log("The item you bought is ", item.title);
  }

}
