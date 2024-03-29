/* eslint-disable @typescript-eslint/no-empty-function */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { of } from 'rxjs';
import { LoginService } from './services/login.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  class LoginServiceStub {
    login() {
      return of({});
    }
  }

  class RouterStub {
    navigate() {}
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: LoginService,
          useClass: LoginServiceStub
        },
        {
          provide: Router,
          useClass: RouterStub
        }
      ],
      declarations: [LoginComponent]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onLogin should call loginService login method', () => {
    spyOn((component as any).loginService, 'login').and.callThrough();
    component.onLogin();
    expect((component as any).loginService.login).toHaveBeenCalled();
  });
});
