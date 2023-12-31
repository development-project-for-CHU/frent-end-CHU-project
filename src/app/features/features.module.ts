import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { PatientFeatureModule } from './patient-feature/patient-feature.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    PatientFeatureModule
  ]
})
export class FeaturesModule { }
