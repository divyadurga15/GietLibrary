import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee1Component } from './eee1.component';

describe('Eee1Component', () => {
  let component: Eee1Component;
  let fixture: ComponentFixture<Eee1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee1Component]
    });
    fixture = TestBed.createComponent(Eee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
