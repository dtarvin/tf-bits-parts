import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataContainerComponent } from './user-data-container.component';

describe('UserDataContainerComponent', () => {
  let component: UserDataContainerComponent;
  let fixture: ComponentFixture<UserDataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDataContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
