import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientFormComponent } from './add-patient-form.component';

describe('AddPatientFormComponent', () => {
  let component: AddPatientFormComponent;
  let fixture: ComponentFixture<AddPatientFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPatientFormComponent]
    });
    fixture = TestBed.createComponent(AddPatientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
