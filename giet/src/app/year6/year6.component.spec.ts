import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year6Component } from './year6.component';

describe('Year6Component', () => {
  let component: Year6Component;
  let fixture: ComponentFixture<Year6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Year6Component]
    });
    fixture = TestBed.createComponent(Year6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
