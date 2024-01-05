import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategorieDetailComponent } from './components/categorie-detail/categorie-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CategoriesComponent,
    CategorieDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CategoriesFeatureModule { }
