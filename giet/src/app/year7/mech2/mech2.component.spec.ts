import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mech2Component } from './mech2.component';

describe('Mech2Component', () => {
  let component: Mech2Component;
  let fixture: ComponentFixture<Mech2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Mech2Component]
    });
    fixture = TestBed.createComponent(Mech2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
