import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './analytics/components/dashboard/dashboard.component';
import { ListPatientComponent } from './patient-feature/components/list-patient/list-patient.component';
import { AddPatientFormComponent } from './patient-feature/components/add-patient-form/add-patient-form.component';

const routes: Routes = [
    {
        path : 'dashboard' , 
        component : DashboardComponent
    },
    {
        path : 'patients' , 
        component : ListPatientComponent ,
        children : [
            {
              path : 'add',
              component : AddPatientFormComponent
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }