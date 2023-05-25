import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountUiComponent } from './user-account-ui.component';

describe('UserAccountUiComponent', () => {
  let component: UserAccountUiComponent;
  let fixture: ComponentFixture<UserAccountUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAccountUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
