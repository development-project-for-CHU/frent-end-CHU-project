import { Component, Input, OnDestroy } from '@angular/core';
import { Categorie } from 'src/app/features/categories-feature/model/categorie.model';
import { CategorieService } from 'src/app/features/categories-feature/service/categorie.service';
import { VisiteService } from '../../services/visite.service';
import { PartieCommune } from '../../models/partieCommune.model';
import { PartieSpecialise } from '../../models/partieSpecialise.model';

@Component({
  selector: 'app-categorie-selection-form',
  templateUrl: './categorie-selection-form.component.html',
  styleUrls: ['./categorie-selection-form.component.css']
})
export class CategorieSelectionFormComponent implements OnDestroy {
  @Input() categorieName !: string;
  @Input() categorieUrl !:string;
  @Input() listCategories !: any[];

  listItems: Categorie[] = [];
  selectedItem: Categorie[] = [];
  categorieActiveLink !: string;

  constructor(private categorieService: CategorieService, private visiteService: VisiteService) {
    console.log(visiteService.getNewVisite())
  }

  ngOnInit() {
    console.log(this.categorieName);
    this.handleGetCategorieItem();
    this.categorieActiveLink = this.categorieName;
  }

  handleGetCategorieItem(){
    this.categorieService.getCategories(this.categorieUrl).subscribe(
      (data) => {
        console.log(data);
        this.listItems = data;
      },
      (error) => {
        console.error("error of loading categories item", error);
      }
    )


    // Ajouter dans selectedItem les élements qui sont deja séléctionnée 
    const newVisite = this.visiteService.getNewVisite();
    if(newVisite){
       this.AddToSelectedItem(newVisite.getPartieCommune() , newVisite.getPartieSpecialise());
    }
  }

  handleClickCategorie(categorieName : string , categorieUrl : string ){
    this.categorieActiveLink = categorieName;
    this.toggleSelection();
    this.categorieName = categorieName;
    this.categorieUrl = categorieUrl;
    this.selectedItem = []
    this.handleGetCategorieItem();

    console.log("SélectedItem after handleGetCategorieItem",this.selectedItem)

   
}

  ngOnDestroy(): void {
    this.toggleSelection();
  }




  toggleSelection(): void {

    console.log("toggleSelection", this.selectedItem)
    const newVisite = this.visiteService.getNewVisite();
    if (newVisite) {
      const partieCommune = newVisite.getPartieCommune();
      const partieSpecialise = newVisite.getPartieSpecialise();

      switch (this.categorieName) {
        case "Allergie":
          partieCommune.setAllergies(this.selectedItem)
          break;
        case "Diagnostics connus":
          partieCommune.setDiagnostiqueConnus(this.selectedItem)
          break;
        case "Médication en cours":
          partieCommune.setMedicamentEnCours(this.selectedItem)
          break;
        case "Spécificité":
          partieCommune.setSpecificite(this.selectedItem)
          break;



        case 'Anamnèse':
          partieSpecialise.setListAnamnese(this.selectedItem)
          break;
        case 'Examen clinique':
          partieSpecialise.setListExamenClinique(this.selectedItem)
          break;
        case 'Prescription diagnostic':
          partieSpecialise.setListPrescriptionDiagnostique(this.selectedItem)
          break;
        case 'Diagnostic niveau supérieur':
          partieSpecialise.setListDiagnostiqueNiveauSuperieur(this.selectedItem)
           break;
        case 'Prescription thérapeutique':
          partieSpecialise.setListPrescriptionTherapeutique(this.selectedItem)
           break;
        case 'Surveillance':
          partieSpecialise.setListSurveillance(this.selectedItem) 
           break;
      }

      console.log("newVisite" , newVisite)

      this.visiteService.setNewVisite(newVisite);


    }
  }

  AddToSelectedItem(elSelectionneDuPartieCommune : PartieCommune , elSelectionneDuPartieSpecialise : PartieSpecialise ){

    if(elSelectionneDuPartieCommune){
      switch (this.categorieName) {
        case "Allergie":
          console.log("case Allergie")
          this.selectedItem = elSelectionneDuPartieCommune.getAllergies();
          break;
        case "Diagnostics connus":
          console.log("case Diagnostics connus")
          this.selectedItem = elSelectionneDuPartieCommune.getDiagnostiqueConnus();
          console.log(" after case Diagnostics connus" , this.selectedItem)

          break;
        case "Médication en cours":
          console.log("case Médication en cours")
          this.selectedItem = elSelectionneDuPartieCommune.getMedicamentEnCours();
          break;
        case "Spécificité":
          console.log("case Spécificité")
          this.selectedItem = elSelectionneDuPartieCommune.getSpecificite();
          break;
        
        
      }
    }
    // partie spécialisé :
    if (elSelectionneDuPartieSpecialise) {
      switch (this.categorieName) {
        case 'Anamnèse':
          this.selectedItem = elSelectionneDuPartieSpecialise.getListAnamnese();
          break;
        case 'Examen clinique':
          this.selectedItem = elSelectionneDuPartieSpecialise.getListExamenClinique();
          break;
        case 'Prescription diagnostic':
          this.selectedItem = elSelectionneDuPartieSpecialise.getListPrescriptionDiagnostique();
          break;
        case  'Diagnostic niveau supérieur':
          this.selectedItem = elSelectionneDuPartieSpecialise.getListDiagnostiqueNiveauSuperieur();
          break;
        case 'Prescription thérapeutique':
          this.selectedItem = elSelectionneDuPartieSpecialise.getListPrescriptionTherapeutique();
          break;
        case 'Surveillance':
          this.selectedItem = elSelectionneDuPartieSpecialise.getListSurveillance();
          break;
      }
    }
    
  }

  isSelected(item: Categorie): boolean {
    const foundItem = this.selectedItem.map(el=>el.id).find(el => el === item.id);
    return foundItem !== undefined;
  }




}
