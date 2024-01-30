import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DossierPatientComponent } from './components/dossier-patient/dossier-patient.component';
import { RouterModule } from '@angular/router';
import { NewVisiteComponent } from './components/new-visite/new-visite.component';
import { CategorieSelectionFormComponent } from './components/categorie-selection-form/categorie-selection-form.component';
import {MatChipsModule}  from '@angular/material/chips';
import { ReportComponent } from './report/report.component'

@NgModule({
  declarations: [
    DossierPatientComponent,
    NewVisiteComponent,
    CategorieSelectionFormComponent,
    ReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatChipsModule
  ],
  providers : []
})
export class VisiteFeatureModule { }
