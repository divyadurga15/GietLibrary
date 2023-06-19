import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece1Component } from './ece1.component';

describe('Ece1Component', () => {
  let component: Ece1Component;
  let fixture: ComponentFixture<Ece1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece1Component]
    });
    fixture = TestBed.createComponent(Ece1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
