import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csm2Component } from './csm2.component';

describe('Csm2Component', () => {
  let component: Csm2Component;
  let fixture: ComponentFixture<Csm2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csm2Component]
    });
    fixture = TestBed.createComponent(Csm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
