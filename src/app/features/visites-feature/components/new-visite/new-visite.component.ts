import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisiteService } from '../../services/visite.service';
import { Visite } from '../../models/visite.model';
import { PartieCommune } from '../../models/partieCommune.model';
import { PartieSpecialise } from '../../models/partieSpecialise.model';

@Component({
  selector: 'app-new-visite',
  templateUrl: './new-visite.component.html',
  styleUrls: ['./new-visite.component.css']
})
export class NewVisiteComponent {
  status = false;
  showCategorieItems =false ; 
  showCategories = true ; 
  categorieName !: string;

  listCategories: any = [
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
  ];

  idPatient !: number ; 
  constructor(private route : ActivatedRoute , private visiteService : VisiteService){
     const newVisite : Visite = new Visite(
      null , 
      new Date(),
      new PartieCommune([],[],[],[]),
      new PartieSpecialise([],[],[],[],[],[])
     ) ;
     this.visiteService.setNewVisite(newVisite);
  }

  ngOnInit(){
      this.idPatient = this.route.snapshot.params['id']
  }

 

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
