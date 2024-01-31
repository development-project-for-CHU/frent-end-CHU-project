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
  patients: Patient[] = [];
  ///====================>  for search logic : 
  searchText: string = '';
  searchBy: string = 'iip'; // default search by ID

  filteredPatient = this.patients;
  gendersData: { genderName: string, count: number }[] = [];


  constructor(private patientService: PatientService , private dialog : MatDialog) {}

  ngOnInit(): void {
    this.getPatients();
    console.log("filteredPatient" , this.filteredPatient)
    this.getInfosAboutCounts();
  }


  getInfosAboutCounts(){
    this.patientService.getCountGenders().subscribe(data => {
      this.gendersData = Object.keys(data)
        .map(genderName => ({ genderName: genderName.toLowerCase(), count: data[genderName] }));

      console.log(this.gendersData);
    });
  }

  getPatients(): void {
    this.patientService.getPatients().subscribe(
      (data) => {
        console.log("list patient ",data)
        this.patients = data;
        this.filteredPatient = this.patients;
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

  consulterPatient(patient : Patient): void{

  }



  
  onSearch() {
    if (this.searchBy === 'iip') {
      this.filteredPatient = this.patients.filter(item => item.ipp.toString() === this.searchText);
      console.log(this.filteredPatient)
    }
    else {
      this.filteredPatient = this.patients.filter(item => item.cin.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  }

  onSearchChange() {
    if (!this.searchText) {
      this.filteredPatient = this.patients; // Reset if search text is cleared
    }
  }

  onSearchByChange(searchByValue: string) {
    this.searchBy = searchByValue;
    this.searchText = ''; // Clear search text when changing search type
    this.filteredPatient = this.patients;
  }
  
}
