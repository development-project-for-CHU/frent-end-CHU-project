import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { VisiteComponent } from './components/Visite/visite.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
    VisiteComponent,
   
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    
  ],
  providers : []
})
export class VisiteFeatureModule { }
