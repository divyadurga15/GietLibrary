import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet2Component } from './pet2.component';

describe('Pet2Component', () => {
  let component: Pet2Component;
  let fixture: ComponentFixture<Pet2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Pet2Component]
    });
    fixture = TestBed.createComponent(Pet2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
