import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { AddPatientFormComponent } from '../add-patient-form/add-patient-form.component';
import { MatDialog } from '@angular/material/dialog';
import { Genre } from '../../enums/genre.enum';


@Component({
  selector: 'app-patient-list',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css']
})
export class ListPatientComponent implements OnInit {
  patients: Patient[] = [
     new Patient(
      '12345',                  // iip: A unique identifier or null
      'John',                   // nom: First name
      'Doe',                    // prenom: Last name
      'AB123456',               // cin: National ID number or similar
      '+1234567890',            // numTel: Phone number
      new Date(1980, 1, 1),     // dateNaissance: Date of birth (Year, Month, Day) - Month is 0-indexed
      Genre.HOMME,                // sexe: Enum value for gender
      '123 Main St, Anytown' ,   // adresse: Address
      '123 Main St, Anytown' ,   // adresse: Address
      "123456"
    )
  ];

  constructor(private patientService: PatientService , private dialog : MatDialog) {}

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (data) => {
        console.log(data)
        this.patients = data;
      },
      (error) => {
        console.error('There was an error retrieving patients!', error);
      }
    );
  }
  editPatient(patient : Patient): void {
    const dialogRef = this.dialog.open(AddPatientFormComponent, {
      data: { patient } 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'update') {
        this.getPatients(); // Refresh the list if there was an update
      }
    });
  }
  deletePatient(patientId: any): void {
    if(confirm("Are you sure you want to delete this patient?")) {
      this.patientService.deletePatient(patientId).subscribe(
        () => {
          console.log(`Patient with id=${patientId} deleted.`);
          this.getPatients(); // Refresh the list after deletion
        },
        (error) => {
          console.error('There was an error deleting the patient!', error);
        }
      );
    }
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(AddPatientFormComponent, {
      // you can pass data to your dialog here
      data: { /* some data */ }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // handle the result from the dialog if any
    });
  }
  
}
