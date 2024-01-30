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

  listItems: Categorie[] = [];
  selectedItem: Categorie[] = [];

  constructor(private categorieService: CategorieService, private visiteService: VisiteService) {
    console.log(visiteService.getNewVisite())
  }

  ngOnInit() {
    console.log(this.categorieName);
    this.categorieService.getCategories(this.categorieName).subscribe(
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
  ngOnDestroy(): void {
    this.toggleSelection();
  }




  toggleSelection(): void {


    console.log("toggleSelection", this.selectedItem)


    const newVisite = this.visiteService.getNewVisite();
    if (newVisite) {
      const partieCommune = newVisite.getPartieCommune();

      switch (this.categorieName) {
        case "allergies":
          partieCommune.setAllergies(this.selectedItem)
          break;
        case "diagnostics":
          partieCommune.setDiagnostiqueConnus(this.selectedItem)
          break;
        case "medication":
          partieCommune.setMedicamentEnCours(this.selectedItem)
          break;
        case "specificite":
          partieCommune.setSpecificite(this.selectedItem)
          break;
      }

      console.log('newVisite', newVisite)
      this.visiteService.setNewVisite(newVisite);
      console.log("toggleSelection", this.selectedItem)


    }
  }

  AddToSelectedItem(elSelectionneDuPartieCommune : PartieCommune , elSelectionneDuPartieSpecialise : PartieSpecialise ){
    if(elSelectionneDuPartieCommune){
      switch (this.categorieName) {
        case "allergies":
          this.selectedItem = elSelectionneDuPartieCommune.getAllergies();
          break;
        case "diagnostics":
          this.selectedItem = elSelectionneDuPartieCommune.getDiagnostiqueConnus();
          break;
        case "medication":
          this.selectedItem = elSelectionneDuPartieCommune.getMedicamentEnCours();
          break;
        case "specificite":
          this.selectedItem = elSelectionneDuPartieCommune.getSpecificite();
          break;
      }
    }
    // partie spécialisé :
    if (elSelectionneDuPartieSpecialise) {
      switch (this.categorieName) {
        case "anamnese":
          this.selectedItem = elSelectionneDuPartieSpecialise.getListAnamnese();
          break;
        case "exemanClinique":
          this.selectedItem = elSelectionneDuPartieSpecialise.getListExamenClinique();
          break;
        case "PrescriptionDiagnostique":
          this.selectedItem = elSelectionneDuPartieSpecialise.getListPrescriptionDiagnostique();
          break;
        case "diagnostiqueNiveauSuperieur":
          this.selectedItem = elSelectionneDuPartieSpecialise.getListDiagnostiqueNiveauSuperieur();
          break;
        case "prescriptionTherapeutique":
          this.selectedItem = elSelectionneDuPartieSpecialise.getListPrescriptionTherapeutique();
          break;
        case "surveillance":
          this.selectedItem = elSelectionneDuPartieSpecialise.getListSurveillance();
          break;
      }
    }
    
  }





}
