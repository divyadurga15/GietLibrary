import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Civi2Component } from './civi2.component';

describe('Civi2Component', () => {
  let component: Civi2Component;
  let fixture: ComponentFixture<Civi2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Civi2Component]
    });
    fixture = TestBed.createComponent(Civi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
