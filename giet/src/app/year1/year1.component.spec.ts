import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year1Component } from './year1.component';

describe('Year1Component', () => {
  let component: Year1Component;
  let fixture: ComponentFixture<Year1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Year1Component]
    });
    fixture = TestBed.createComponent(Year1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
