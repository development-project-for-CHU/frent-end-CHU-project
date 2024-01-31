import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientFeatureModule } from './patient-feature/patient-feature.module';
import { UserFeatureModule } from './user-feature/user-feature.module';
import { CategoriesFeatureModule } from './categories-feature/categories-feature.module';
import { VisiteFeatureModule } from './visites-feature/visite-feature.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PatientFeatureModule,
    UserFeatureModule,
    CategoriesFeatureModule,
    VisiteFeatureModule,
    
  ]
})
export class FeaturesModule {}
