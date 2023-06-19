import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech1Component } from './mech1.component';

describe('Mech1Component', () => {
  let component: Mech1Component;
  let fixture: ComponentFixture<Mech1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech1Component]
    });
    fixture = TestBed.createComponent(Mech1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
