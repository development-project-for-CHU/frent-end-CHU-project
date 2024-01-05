import { Component } from '@angular/core';
import { UserAddFormComponent } from '../user-add-form/user-add-form.component';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  users: User[] = []; // Initialize to an empty array

  constructor(
    private userService: UserService, 
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.error('There was an error retrieving users!', error);
      }
    );
  }

  editUser(user: User): void {
    const dialogRef = this.dialog.open(UserAddFormComponent, {
      data: { user }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'update') {
        this.getUsers(); // Refresh the list if there was an update
      }
    });
  }

  deleteUser(userId: any): void {
    if(confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(userId).subscribe(
        () => {
          console.log(`User with id=${userId} deleted.`);
          this.getUsers(); // Refresh the list after deletion
        },
        (error) => {
          console.error('There was an error deleting the user!', error);
        }
      );
    }
  }

  openFormDialog(): void {
    const dialogRef = this.dialog.open(UserAddFormComponent, {
      // you can pass data to your dialog here
      data: { /* some data for creating or updating a user */ },
      width : "40%"
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.getUsers(); // Refresh the list whether there's a result or not
    });
  }
}
