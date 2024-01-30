import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './analytics/components/dashboard/dashboard.component';
import { ListPatientComponent } from './patient-feature/components/list-patient/list-patient.component';
import { AddPatientFormComponent } from './patient-feature/components/add-patient-form/add-patient-form.component';
import { DossierPatientComponent } from './visites-feature/components/dossier-patient/dossier-patient.component';
import { ListUserComponent } from './user-feature/components/list-user/list-user.component';
import { CategoriesComponent } from './categories-feature/components/categories/categories.component';
import { CategorieDetailComponent } from './categories-feature/components/categorie-detail/categorie-detail.component';
import { NewVisiteComponent } from './visites-feature/components/new-visite/new-visite.component';
import { LoginComponent } from '../core/components/login/login.component';
const routes: Routes = [
  
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'users',
    component: ListUserComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  
  {
    path: 'categories-detail/:name',
    component: CategorieDetailComponent
  },


  {
    path: 'patients',
    component: ListPatientComponent,
  },
  {
    path: 'patients/dossier/:id',
    component: DossierPatientComponent,
  },
  {
    path: 'patients/dossier/add-new-visite/:id',
    component: NewVisiteComponent
  },
  {
    path: '*/**',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }