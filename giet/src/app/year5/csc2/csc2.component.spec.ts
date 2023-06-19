import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Csc2Component } from './csc2.component';

describe('Csc2Component', () => {
  let component: Csc2Component;
  let fixture: ComponentFixture<Csc2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Csc2Component]
    });
    fixture = TestBed.createComponent(Csc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
