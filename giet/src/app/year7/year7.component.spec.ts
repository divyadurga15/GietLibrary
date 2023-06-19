import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Year7Component } from './year7.component';

describe('Year7Component', () => {
  let component: Year7Component;
  let fixture: ComponentFixture<Year7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Year7Component]
    });
    fixture = TestBed.createComponent(Year7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
