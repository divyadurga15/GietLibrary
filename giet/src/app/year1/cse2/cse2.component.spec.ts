import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cse2Component } from './cse2.component';

describe('Cse2Component', () => {
  let component: Cse2Component;
  let fixture: ComponentFixture<Cse2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cse2Component]
    });
    fixture = TestBed.createComponent(Cse2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
