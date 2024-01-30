import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVisiteComponent } from './new-visite.component';

describe('NewVisiteComponent', () => {
  let component: NewVisiteComponent;
  let fixture: ComponentFixture<NewVisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewVisiteComponent]
    });
    fixture = TestBed.createComponent(NewVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
