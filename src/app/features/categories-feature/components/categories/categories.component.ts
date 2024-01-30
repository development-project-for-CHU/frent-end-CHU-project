import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  activeLink: string = 'PC';
  partieSelectionne : string = "Partie Commune";

  listCategories : any[] = [
    {
      name : "Allergie" , 
      url : "partieCommune/allergies",
      count : 20,
      iconName : "bx bxs-calendar-check"
    },
    {
      name : "Diagnostics connus" , 
      url : "partieCommune/diagnostics",
      count : 23,
      iconName : "bx bxs-group"
    },
    {
      name : "Médication en cours" , 
      url : "partieCommune/medication", 
      count : 22, 
      iconName : "bx bx-pyramid"
    },
    {
      name : "Grossesse pour les femmes" , 
      url : "partieCommune/medication", 
      count : 212, 
      iconName : "bx bx-pyramid"
    },
    {
      name : "Spécificité" , 
      url : "partieCommune/specificite", 
      count : 212, 
      iconName : "bx bx-select-multiple"
    }
  ]




  handleClick(link: string): void {
    this.activeLink = link;
    
    if(link == "PC"){
      this.activeLink = 'PC';
      this.partieSelectionne = "Partie Commune"
      this.listCategories = [
        {
          name : "Allergie" , 
          url : "partieCommune/allergies",
          count : 20,
          iconName : "bx bxs-calendar-check"
        },
        {
          name : "Diagnostics connus" , 
          url : "partieCommune/diagnostics",
          count : 23,
          iconName : "bx bxs-group"
        },
        {
          name : "Médication en cours" , 
          url : "partieCommune/medication", 
          count : 22, 
          iconName : "bx bx-pyramid"
        },
        {
          name : "Grossesse pour les femmes" , 
          url : "partieCommune/medication", 
          count : 212, 
          iconName : "bx bx-pyramid"
        },
        {
          name : "Spécificité" , 
          url : "partieCommune/specificite", 
          count : 212, 
          iconName : "bx bx-select-multiple"
        }
      ]
    }
    else if(link == "PS"){
      this.activeLink = 'PS';
      this.partieSelectionne = "Partie Spécialisée"
      this.listCategories = [
        {
          name: 'Anamnese',
          url : 'partieSpecialise\/anamnese',
          count: 12,
          iconName : "bx bxs-calendar-check"
        },
        {
          name: 'Examen clinique',
          url : 'partieSpecialise\/exemanClinique',
          count: 12,
          iconName : "bx bxs-group"
        },
        {
          name: 'Prescription diagnostic',
          url : 'partieSpecialise\/PrescriptionDiagnostique',
          count: 33,
          iconName : "bx bx-pyramid"
        },
        {
          name: 'Diagnostic niveau supérieur',
          url : 'partieSpecialise\/diagnostiqueNiveauSuperieur',
          count: 12,
          iconName : "bx bx-pyramid"
        },
        {
          name: 'Prescription thérapeutique',
          url : 'partieSpecialise\/prescriptionTherapeutique',
          count: 34,
          iconName : "bx bx-select-multiple"
        },
        {
          name: 'Surveillance',
          url : 'partieSpecialise\/surveillance',
          count: 34,
          iconName : "bx bx-select-multiple"
        },
      ]
    }
  }
}
