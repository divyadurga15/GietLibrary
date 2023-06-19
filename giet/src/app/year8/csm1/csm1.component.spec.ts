import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm1Component } from './csm1.component';

describe('Csm1Component', () => {
  let component: Csm1Component;
  let fixture: ComponentFixture<Csm1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm1Component]
    });
    fixture = TestBed.createComponent(Csm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
