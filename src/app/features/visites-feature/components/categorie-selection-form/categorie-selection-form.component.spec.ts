import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieSelectionFormComponent } from './categorie-selection-form.component';

describe('CategorieSelectionFormComponent', () => {
  let component: CategorieSelectionFormComponent;
  let fixture: ComponentFixture<CategorieSelectionFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieSelectionFormComponent]
    });
    fixture = TestBed.createComponent(CategorieSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
