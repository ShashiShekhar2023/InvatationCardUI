import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrorComponent } from './customerror.component';

describe('CustomerrorComponent', () => {
  let component: CustomerrorComponent;
  let fixture: ComponentFixture<CustomerrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerrorComponent]
    });
    fixture = TestBed.createComponent(CustomerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
