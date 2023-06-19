import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc1Component } from './csc1.component';

describe('Csc1Component', () => {
  let component: Csc1Component;
  let fixture: ComponentFixture<Csc1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc1Component]
    });
    fixture = TestBed.createComponent(Csc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
