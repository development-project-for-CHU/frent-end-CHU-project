import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  ListCategoriesCommune : any[] = [
    {
      name : "Allergie" , 
      url : "allergies",
      count : 20,
      iconName : "bx bxs-calendar-check"
    },
    {
      name : "Diagnostics connus" , 
      url : "diagnostics",
      count : 23,
      iconName : "bx bxs-group"
    },
    {
      name : "Médication en cours" , 
      url : "medication", 
      count : 22, 
      iconName : "bx bx-pyramid"
    },
    {
      name : "Grossesse pour les femmes" , 
      url : "medication", 
      count : 212, 
      iconName : "bx bx-pyramid"
    },
    {
      name : "Spécificité" , 
      url : "specificite", 
      count : 212, 
      iconName : "bx bx-select-multiple"
    }
  ]




}
