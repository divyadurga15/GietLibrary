import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year8Component } from './year8.component';

describe('Year8Component', () => {
  let component: Year8Component;
  let fixture: ComponentFixture<Year8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Year8Component]
    });
    fixture = TestBed.createComponent(Year8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
