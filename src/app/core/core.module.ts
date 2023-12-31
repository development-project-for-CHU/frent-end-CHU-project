import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AnalyticsModule } from '../features/analytics/analytics.module';


@NgModule({
  declarations: [
    NavbarComponent,
    SidenavComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule ,
    AnalyticsModule
  ],
  exports : [
    MainComponent
  ]
})
export class CoreModule { }
