import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { Roles } from '../../enums/role.enum';
import { Genre } from 'src/app/features/patient-feature/enums/genre.enum';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-add-form',
  templateUrl: './user-add-form.component.html',
  styleUrls: ['./user-add-form.component.css']
})
export class UserAddFormComponent {
  userForm: FormGroup;
  isEdit: boolean = false;

  roles = Roles;
  genre = Genre;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private dialogRef: MatDialogRef<UserAddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { user: User }

  ) {

    this.userForm = this.fb.group({
      id: [''],
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      numTel: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],
      genre: [0, [Validators.required]],
      adresse: ['', [Validators.required]],
      ville: ['', [Validators.required]],
      codePostal: ['', [Validators.required]],
      roles: ['', [Validators.required]],
      service: ['', [Validators.required]],
    });
    
    if (data.user) {
      this.isEdit = true;
      this.userForm.patchValue(data.user);
    }
  }
  


  onSubmit() {
    if (this.userForm.valid) {
      if (this.isEdit) {
        console.log(this.userForm.value)
        this.userService.updateUser( this.userForm.value.id ,this.userForm.value).subscribe(
          (data) => {
            console.log('data after update : ' , data)
            this.closeDialog();
          },
          (error) =>{
            console.log(error)
          }
        );
      } else {
        this.userService.addUser(this.userForm.value).subscribe(
          (data) => {
              console.log("data : " , data);
              this.closeDialog();
          },
          (error)=> {
               console.log(error)
          }
        );
      }
    }

    if (this.userForm.valid) {
      console.log(this.userForm.value)
      
      this.userService.addUser(this.userForm.value)
      
    }
  }

  closeDialog(): void {
     this.dialogRef.close();
  }
}
