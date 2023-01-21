import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'user-data-single-slot',
  templateUrl: './user-data-single-slot.component.html',
  styleUrls: ['./user-data-single-slot.component.css']
})
export class UserDataSingleSlotComponent implements OnInit {

  @Input()
  fieldNumber: number;
  @Input()
  fieldLabel: string;

  constructor() { }

  ngOnInit(): void {
  }

}
