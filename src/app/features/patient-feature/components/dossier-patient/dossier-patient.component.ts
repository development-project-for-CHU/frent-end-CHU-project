import { Component } from '@angular/core';

@Component({
  selector: 'app-dossier-patient',
  templateUrl: './dossier-patient.component.html',
  styleUrls: ['./dossier-patient.component.css']
})
export class DossierPatientComponent {
  status = false;
  showCategorieItems =false ; 
  showCategories = true ; 
  categorieName !: string;

  listCategories: any = [
    {
      name : "Allergie" , 
      count : 20,
      iconName : "bx bxs-calendar-check"
    },
    {
      name : "Diagnostics connus" , 
      count : 23,
      iconName : "bx bxs-group"
    },
    {
      name : "Médication en cours" , 
      count : 22, 
      iconName : "bx bx-pyramid"
    },
    {
      name : "Grossesse pour les femmes" , 
      count : 212, 
      iconName : "bx bx-pyramid"
    },
    {
      name : "Spécificité" , 
      count : 212, 
      iconName : "bx bx-select-multiple"
    }
  ];


addToggle()
{
  this.status = !this.status;       
}
activeLink: string = 'PartieCommune';

  handleClick(link: string): void {
    this.activeLink = link;
    if(link == "PC"){
      this.activeLink = 'PartieCommune';
      this.listCategories = [
        {
          name : "Allergie" , 
          count : 20,
          iconName : "bx bxs-calendar-check"
        },
        {
          name : "Diagnostics connus" , 
          count : 23,
          iconName : "bx bxs-group"
        },
        {
          name : "Médication en cours" , 
          count : 22, 
          iconName : "bx bx-pyramid"
        },
        {
          name : "Grossesse pour les femmes" , 
          count : 212, 
          iconName : "bx bx-pyramid"
        },
        {
          name : "Spécificité" , 
          count : 212, 
          iconName : "bx bx-select-multiple"
        }
      ]
    }
    else if(link == "PS"){
      this.activeLink = 'PartieSpécialisée';
      this.listCategories = [
        {
          name: 'Anamnese',
          count: 12,
          iconName : "bx bxs-calendar-check"
        },
        {
          name: 'Examen clinique',
          count: 12,
          iconName : "bx bxs-group"
        },
        {
          name: 'Prescription diagnostic',
          count: 33,
          iconName : "bx bx-pyramid"
        },
        {
          name: 'Diagnostic niveau supérieur',
          count: 12,
          iconName : "bx bx-pyramid"
        },
        {
          name: 'Prescription thérapeutique',
          count: 34,
          iconName : "bx bx-select-multiple"
        },
        {
          name: 'Surveillance',
          count: 34,
          iconName : "bx bx-select-multiple"
        },

      ]
    }
  }


  handleSelectCategorie(categorieName : string) {
      this.showCategorieItems = true ; 
      this.showCategories = false ;
      this.categorieName = categorieName;
  }
}
