import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataSingleSlotComponent } from './user-data-single-slot.component';

describe('UserDataSingleSlotComponent', () => {
  let component: UserDataSingleSlotComponent;
  let fixture: ComponentFixture<UserDataSingleSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataSingleSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataSingleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
