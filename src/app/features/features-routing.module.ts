import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './analytics/components/dashboard/dashboard.component';
import { ListPatientComponent } from './patient-feature/components/list-patient/list-patient.component';
import { AddPatientFormComponent } from './patient-feature/components/add-patient-form/add-patient-form.component';
import { DossierPatientComponent } from './patient-feature/components/dossier-patient/dossier-patient.component';
import { UserAddFormComponent } from './user-feature/components/user-add-form/user-add-form.component';
import { ListUserComponent } from './user-feature/components/list-user/list-user.component';
import { CategoriesComponent } from './categories-feature/components/categories/categories.component';
import { CategorieDetailComponent } from './categories-feature/components/categorie-detail/categorie-detail.component';

const routes: Routes = [
    {
        path : 'dashboard' , 
        component : DashboardComponent
    },
    {
      path : 'dossier' , 
      component : DossierPatientComponent
    },
    {
      path : 'users' , 
      component : ListUserComponent
    },
    {
      path : 'categories' , 
      component : CategoriesComponent
    },
    {
      path : 'categories-detail',
      component : CategorieDetailComponent
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