import { Component, OnInit } from '@angular/core';
import { Visite } from '../../models/visite.model';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'list-visite',
  templateUrl:'./visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent implements OnInit {
  visites: Visite[] = [
     new Visite(
      '12345',                  
      new Date(1980, 1, 1) ,              
    )
  ];

 
 
  constructor() { }

  ngOnInit(): void {
    // Initialize data or fetch it from a service
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
