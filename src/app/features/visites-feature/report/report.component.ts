import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {

  constructor(
    // private fb: FormBuilder,
    // private userService: UserService,
    private dialogRef: MatDialogRef<ReportComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: { user: User }

  ) {}



  closeDialog(): void {
    this.dialogRef.close();
 }

}
