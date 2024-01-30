import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatientFormComponent } from './components/add-patient-form/add-patient-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { PatientService } from './services/patient.service';
import { ListPatientComponent } from './components/list-patient/list-patient.component';
import { HttpClientModule } from '@angular/common/http';
import { DossierPatientComponent } from './components/dossier-patient/dossier-patient.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AddPatientFormComponent,
    ListPatientComponent,
    DossierPatientComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    RouterModule
  ],
  providers : [PatientService]
})
export class PatientFeatureModule { }
