import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ece2Component } from './ece2.component';

describe('Ece2Component', () => {
  let component: Ece2Component;
  let fixture: ComponentFixture<Ece2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ece2Component]
    });
    fixture = TestBed.createComponent(Ece2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
