import { Component } from '@angular/core';

@Component({
  selector: 'app-dossier-patient',
  templateUrl: './dossier-patient.component.html',
  styleUrls: ['./dossier-patient.component.css']
})
export class DossierPatientComponent {
  status = false;
addToggle()
{
  this.status = !this.status;       
}
activeLink: string = 'news';

  handleClick(link: string): void {
    this.activeLink = link;
  }
}
