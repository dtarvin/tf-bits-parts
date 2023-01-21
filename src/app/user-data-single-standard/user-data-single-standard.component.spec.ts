import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataSingleStandardComponent } from './user-data-single-standard.component';

describe('UserDataSingleStandardComponent', () => {
  let component: UserDataSingleStandardComponent;
  let fixture: ComponentFixture<UserDataSingleStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataSingleStandardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataSingleStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
