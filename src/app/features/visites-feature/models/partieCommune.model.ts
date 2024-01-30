import { Categorie } from "../../categories-feature/model/categorie.model";

export class PartieCommune {
    private allergies: Categorie[];
    private diagnostiqueConnus: Categorie[];
    private medicamentEnCours: Categorie[];
    private specificite: Categorie[];
  
    constructor(
      allergiesList: Categorie[],
      diagnostiqueConnueList: Categorie[],
      medicamentEnCoursList: Categorie[],
      specificiteList: Categorie[]
    ) {
      this.allergies = allergiesList;
      this.diagnostiqueConnus = diagnostiqueConnueList;
      this.medicamentEnCours = medicamentEnCoursList;
      this.specificite = specificiteList;
    }
  
    // Getters
    getAllergies(): Categorie[] {
      return this.allergies;
    }
  
    getDiagnostiqueConnus(): Categorie[] {
      return this.diagnostiqueConnus;
    }
  
    getMedicamentEnCours(): Categorie[] {
      return this.medicamentEnCours;
    }
  
    getSpecificite(): Categorie[] {
      return this.specificite;
    }
  
    // Setters
    setAllergies(allergiesList: Categorie[]): void {
      this.allergies = allergiesList;
    }
  
    setDiagnostiqueConnus(diagnostiqueConnusList: Categorie[]): void {
      this.diagnostiqueConnus = diagnostiqueConnusList;
    }
  
    setMedicamentEnCours(medicamentEnCoursList: Categorie[]): void {
      this.medicamentEnCours = medicamentEnCoursList;
    }
  
    setSpecificite(specificiteList: Categorie[]): void {
      this.specificite = specificiteList;
    }
  }
  