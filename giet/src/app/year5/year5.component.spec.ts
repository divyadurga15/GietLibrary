import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year5Component } from './year5.component';

describe('Year5Component', () => {
  let component: Year5Component;
  let fixture: ComponentFixture<Year5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Year5Component]
    });
    fixture = TestBed.createComponent(Year5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
