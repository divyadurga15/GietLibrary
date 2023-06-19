import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnoComponent } from './inno.component';

describe('InnoComponent', () => {
  let component: InnoComponent;
  let fixture: ComponentFixture<InnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InnoComponent]
    });
    fixture = TestBed.createComponent(InnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
