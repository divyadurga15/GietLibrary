import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eee2Component } from './eee2.component';

describe('Eee2Component', () => {
  let component: Eee2Component;
  let fixture: ComponentFixture<Eee2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Eee2Component]
    });
    fixture = TestBed.createComponent(Eee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
