import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi1Component } from './civi1.component';

describe('Civi1Component', () => {
  let component: Civi1Component;
  let fixture: ComponentFixture<Civi1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi1Component]
    });
    fixture = TestBed.createComponent(Civi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
