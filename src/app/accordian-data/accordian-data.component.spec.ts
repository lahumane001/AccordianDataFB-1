import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordianDataComponent } from './accordian-data.component';

describe('AccordianDataComponent', () => {
  let component: AccordianDataComponent;
  let fixture: ComponentFixture<AccordianDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordianDataComponent]
    });
    fixture = TestBed.createComponent(AccordianDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
