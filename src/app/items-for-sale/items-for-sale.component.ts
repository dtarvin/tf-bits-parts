import { Component, Input, OnInit, Output } from '@angular/core';
import { ITEMS_FOR_SALE } from 'src/tf-data';
import { EventEmitter } from '@angular/core';
import { Item } from '../models/item';

@Component({
  selector: 'items-for-sale',
  templateUrl: './items-for-sale.component.html',
  styleUrls: ['./items-for-sale.component.css']
})
export class ItemsForSaleComponent implements OnInit {

  @Input()
  item: Item;

  @Input()
  cardIndex: number;

  @Output()
  itemSelected = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  buyNow() {
    console.log("You bought the item for ", this.item.price);
    this.itemSelected.emit(this.item);
  }

}
