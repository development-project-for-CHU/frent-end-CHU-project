import { Component, Input } from '@angular/core';
import { Categorie } from 'src/app/features/categories-feature/model/categorie.model';
import { CategorieService } from 'src/app/features/categories-feature/service/categorie.service';
import { VisiteService } from '../../services/visite.service';

@Component({
  selector: 'app-categorie-selection-form',
  templateUrl: './categorie-selection-form.component.html',
  styleUrls: ['./categorie-selection-form.component.css']
})
export class CategorieSelectionFormComponent {
  @Input() categorieName !: string ; 

  listItems : Categorie[] = [];
  selectedItem: Categorie[] = [];

  constructor(private categorieService : CategorieService , private visiteService : VisiteService){
     console.log(visiteService.getNewVisite())
  }

  ngOnInit(){
    console.log(this.categorieName);
    this.categorieService.getCategories(this.categorieName).subscribe(
      (data)=> {
        console.log(data);
          this.listItems = data ; 
      },
      (error)=>{
          console.error("error of loading categories item" , error);
      }
    )
  }

  


  toggleSelection(): void {
    console.log("toggleSelection" , this.selectedItem)
  
    const newVisite = this.visiteService.getNewVisite();
    if (newVisite) {
      const partieCommune = newVisite.getPartieCommune();
  
      switch (this.categorieName) {
        case "allergies":
          partieCommune.setAllergies(this.selectedItem.map(el=>el.id))
          break;
        case "diagnostics":
          partieCommune.setDiagnostiqueConnus(this.selectedItem.map(el=>el.id))
          break;
        case "medication":
          partieCommune.setMedicamentEnCours(this.selectedItem.map(el=>el.id))
          break;
        case "specificite":
          partieCommune.setSpecificite(this.selectedItem.map(el=>el.id))
          break;
      }

       console.log('newVisite' , newVisite)
      this.visiteService.setNewVisite(newVisite);
    }
  }
  
  


}
