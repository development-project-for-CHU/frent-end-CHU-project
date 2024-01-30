import { Component } from '@angular/core';
import { Visite } from '../../models/visite.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; 
import { ReportComponent } from '../../report/report.component';

@Component({
  selector: 'app-dossier-patient',
  templateUrl: './dossier-patient.component.html',
  styleUrls: ['./dossier-patient.component.css']
})
export class DossierPatientComponent {
  visites: Visite[] = [];

 idPatient !: number ; 
  constructor(private route : ActivatedRoute, private dialog: MatDialog){}



  ngOnInit(){
      this.idPatient = this.route.snapshot.params['id']

  }


  openFormDialog(): void {
    const dialogRef = this.dialog.open(ReportComponent, {
      // you can pass data to your dialog here
      data: { /* some data for creating or updating a user */ },
      width : "60%",
      height: "90%",
      panelClass: 'custom-dialog-container' 
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.getUsers(); // Refresh the list whether there's a result or not
    });
 }

 editVisite(visite: Visite) {
   // Implement your logic to edit a visite
 }

 deleteVisite(id: string | null | undefined) {
   // Implement your logic to delete a visite
 }

}
