import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sexe } from '../../enums/sexe.enum';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-add-patient-form',
  templateUrl: './add-patient-form.component.html',
  styleUrls: ['./add-patient-form.component.css']
})
export class AddPatientFormComponent {
  // Make Sexe available in the template
  sexes = Sexe; 

  addPatientForm = this.fb.group({
    nom: ['', Validators.required],
    prenom: ['', Validators.required],
    cin: ['', Validators.required],
    numTel: ['', Validators.required],
    sexe: ['', Validators.required],
    adresse: ['', Validators.required],
    dateNaissance: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.addPatientForm.valid) {
      const formValue = this.addPatientForm.value;
  
      // Ensure values are defined and fallback to empty strings if they are not.
      const nom = formValue.nom || '';
      const prenom = formValue.prenom || '';
      const cin = formValue.cin || '';
      const numTel = formValue.numTel || '';
      const adresse = formValue.adresse || '';
      const sexe = Sexe[formValue.sexe as keyof typeof Sexe] || Sexe.Homme; // Fallback to a default enum value if undefined
      const dateNaissance = formValue.dateNaissance ? new Date(formValue.dateNaissance) : new Date();
  
      // Now create a new Patient with the assured values
      const newPatient = new Patient(
        nom,
        prenom,
        cin,
        numTel,
        dateNaissance,
        sexe,
        adresse
      );
  
      console.log('New Patient:', newPatient);
      // Additional logic to handle the new patient (e.g., sending to a backend)
    }
  }
}
