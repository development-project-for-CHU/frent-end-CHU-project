import { Component } from '@angular/core';
import { Visite } from '../../models/visite.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dossier-patient',
  templateUrl: './dossier-patient.component.html',
  styleUrls: ['./dossier-patient.component.css']
})
export class DossierPatientComponent {
  visites: Visite[] = [];

 idPatient !: number ; 
  constructor(private route : ActivatedRoute){}

  ngOnInit(){
      this.idPatient = this.route.snapshot.params['id']

  }


 openFormDialog() {
   // Implement your logic to open the form dialog for adding a visite
 }

 editVisite(visite: Visite) {
   // Implement your logic to edit a visite
 }

 deleteVisite(id: string | null | undefined) {
   // Implement your logic to delete a visite
 }

}
