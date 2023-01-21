import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-data-single-standard',
  templateUrl: './user-data-single-standard.component.html',
  styleUrls: ['./user-data-single-standard.component.css']
})
export class UserDataSingleStandardComponent implements OnInit {

  firstName: string;
  lastName: string;
  yearOfBirth: number;

  constructor() { }

  ngOnInit(): void {
  }

  getInput() {
    const firstName = this.firstName;
    const lastName = this.lastName;
    const yearOfBirth = this.yearOfBirth;
    console.log('User is ' + firstName + ' ' + lastName + ', born in ' + yearOfBirth);
  }

}
