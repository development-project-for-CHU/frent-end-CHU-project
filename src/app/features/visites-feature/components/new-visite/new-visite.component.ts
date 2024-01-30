import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VisiteService } from '../../services/visite.service';
import { Visite } from '../../models/visite.model';
import { PartieCommune } from '../../models/partieCommune.model';
import { PartieSpecialise } from '../../models/partieSpecialise.model';
import { interval } from 'rxjs';
import { categoriesPartieCommune } from 'src/app/features/categories-feature/utils/categorie-partie-commune.data';
import { categoriesPartieSpecialise } from 'src/app/features/categories-feature/utils/categorie-partie-specialise.data';

@Component({
  selector: 'app-new-visite',
  templateUrl: './new-visite.component.html',
  styleUrls: ['./new-visite.component.css']
})
export class NewVisiteComponent {
  status = false;
  showCategorieItems = false;
  showCategories = true;
  categorieUrl !: string;
  categorieName !: string;

  listCategories: any = categoriesPartieCommune;

  idPatient !: number;

  constructor(private route: ActivatedRoute, private visiteService: VisiteService) {
    const newVisite: Visite = new Visite(
      null,
      new Date(),
      new PartieCommune([], [], [], []),
      new PartieSpecialise([], [], [], [], [], [])
    );
    this.visiteService.setNewVisite(newVisite);
  }

  ngOnInit() {
    this.idPatient = this.route.snapshot.params['id']
  }

  


  addToggle() {
    this.status = !this.status;
  }
  activeLink: string = 'partieCommune';

  handleClick(link: string): void {
    this.showCategories = true;
    this.activeLink = link;
    if (link == "PC") {
      this.activeLink = 'partieCommune';
      this.listCategories = categoriesPartieCommune;
    }
    else if (link == "PS") {
      this.activeLink = 'partieSpecialise';
      this.listCategories = categoriesPartieSpecialise;
    }
  }

  handleSelectCategorie(categorieUrl: string, categorieName: string) {
    this.showCategorieItems = true;
    this.showCategories = false;
    this.categorieUrl = categorieUrl;
    this.categorieName = categorieName;
  }

}
