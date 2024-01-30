import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { PatientFeatureModule } from './patient-feature/patient-feature.module';
import { UserFeatureModule } from './user-feature/user-feature.module';
import { CategoriesFeatureModule } from './categories-feature/categories-feature.module';
import { VisiteFeatureModule } from './visites-feature/visite-feature.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PatientFeatureModule,
    UserFeatureModule,
    CategoriesFeatureModule,
    VisiteFeatureModule,
    CoreModule
  ]
})
export class FeaturesModule {}
