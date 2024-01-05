import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { PatientFeatureModule } from './patient-feature/patient-feature.module';
import { UserFeatureModule } from './user-feature/user-feature.module';
import { CategoriesFeatureModule } from './categories-feature/categories-feature.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PatientFeatureModule,
    UserFeatureModule,
    CategoriesFeatureModule
  ]
})
export class FeaturesModule { }
