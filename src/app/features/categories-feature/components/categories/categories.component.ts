import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  activeLink: string = 'PC';


  listCategories : any[] = [
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





  handleClick(link: string): void {
    this.activeLink = link;
    if(link == "PC"){
      this.activeLink = 'PC';
      this.listCategories = [
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
    else if(link == "PS"){
      this.activeLink = 'PS';
      this.listCategories = [
        {
          name: 'Anamnese',
          url : 'anamnese',
          count: 12,
          iconName : "bx bxs-calendar-check"
        },
        {
          name: 'Examen clinique',
          url : 'exemanClinique',
          count: 12,
          iconName : "bx bxs-group"
        },
        {
          name: 'Prescription diagnostic',
          url : 'PrescriptionDiagnostique',
          count: 33,
          iconName : "bx bx-pyramid"
        },
        {
          name: 'Diagnostic niveau supérieur',
          url : 'diagnostiqueNiveauSuperieur',
          count: 12,
          iconName : "bx bx-pyramid"
        },
        {
          name: 'Prescription thérapeutique',
          url : 'prescriptionTherapeutique',
          count: 34,
          iconName : "bx bx-select-multiple"
        },
        {
          name: 'Surveillance',
          url : 'surveillance',
          count: 34,
          iconName : "bx bx-select-multiple"
        },
      ]
    }
  }
}
