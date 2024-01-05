import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Genre } from '../../enums/genre.enum';
import { Patient } from '../../models/patient.model';
import { PatientService } from '../../services/patient.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient-form',
  templateUrl: './add-patient-form.component.html',
  styleUrls: ['./add-patient-form.component.css']
})
export class AddPatientFormComponent {
  // Make Sexe available in the template
  sexes = Genre; 

  addPatientForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    cin: ['', Validators.required],
    numTel: ['', Validators.required],
    sexe: [0 , Validators.required],
    adresse: ['', Validators.required],
    dateNaissance: ['', Validators.required],
    ville: ['', Validators.required],
    codePostal: ['', Validators.required],
    
  });

  constructor(private fb: FormBuilder , 
    private patientService : PatientService , 
    public dialogRef: MatDialogRef<AddPatientFormComponent>
    ) {}

  onSubmit() {
    if (this.addPatientForm.valid) {
      const formValue = this.addPatientForm.value;
  
      // Ensure values are defined and fallback to empty strings if they are not.
      const nom = formValue.nom || '';
      const prenom = formValue.prenom || '';
      const cin = formValue.cin || '';
      const numTel = formValue.numTel || '';
      const adresse = formValue.adresse || '';
      const gender = formValue.sexe || 0 ; 
      const dateNaissance = formValue.dateNaissance ? new Date(formValue.dateNaissance) : new Date();
      const ville = formValue.ville || '';
      const codePostal = formValue.codePostal || '';

  
      // Now create a new Patient with the assured values
      const newPatient = new Patient(
        null,
        nom,
        prenom,
        cin,
        numTel,
        dateNaissance,
        gender,
        adresse,
        ville , 
        codePostal
      );
  
      console.log('New Patient:', newPatient);

      this.patientService.addPatient(newPatient).subscribe(
        (data)=> {
            console.log("AddPatientFormComponent : ",data)
            this.dialogRef.close();
        },
        (error)=> {
          console.log("Error : " , error)
        }
      )


    }
  }
  closeDialog() {this.dialogRef.close();}
}
