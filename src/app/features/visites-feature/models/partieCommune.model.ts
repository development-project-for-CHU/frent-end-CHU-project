export class PartieCommune {
    private allergies: number[];
    private diagnostiqueConnus: number[];
    private medicamentEnCours: number[];
    private specificite: number[];
  
    constructor(
      allergiesList: number[],
      diagnostiqueConnueList: number[],
      medicamentEnCoursList: number[],
      specificiteList: number[]
    ) {
      this.allergies = allergiesList;
      this.diagnostiqueConnus = diagnostiqueConnueList;
      this.medicamentEnCours = medicamentEnCoursList;
      this.specificite = specificiteList;
    }
  
    // Getters
    getAllergies(): number[] {
      return this.allergies;
    }
  
    getDiagnostiqueConnus(): number[] {
      return this.diagnostiqueConnus;
    }
  
    getMedicamentEnCours(): number[] {
      return this.medicamentEnCours;
    }
  
    getSpecificite(): number[] {
      return this.specificite;
    }
  
    // Setters
    setAllergies(allergiesList: number[]): void {
      this.allergies = allergiesList;
    }
  
    setDiagnostiqueConnus(diagnostiqueConnusList: number[]): void {
      this.diagnostiqueConnus = diagnostiqueConnusList;
    }
  
    setMedicamentEnCours(medicamentEnCoursList: number[]): void {
      this.medicamentEnCours = medicamentEnCoursList;
    }
  
    setSpecificite(specificiteList: number[]): void {
      this.specificite = specificiteList;
    }
  }
  