export class PartieSpecialise {
    private listAnamnese: number[];
    private listExamenClinique: number[];
    private listPrescriptionDiagnostique: number[];
    private listDiagnostiqueNiveauSuperieur: number[];
    private listPrescriptionTherapeutique: number[];
    private listSurveillance: number[];
  
    constructor(
      listAnamnese: number[],
      listExamenClinique: number[],
      listPrescriptionDiagnostique: number[],
      listDiagnostiqueNiveauSuperieur: number[],
      listPrescriptionTherapeutique: number[],
      listSurveillance: number[]
    ) {
      this.listAnamnese = listAnamnese;
      this.listExamenClinique = listExamenClinique;
      this.listPrescriptionDiagnostique = listPrescriptionDiagnostique;
      this.listDiagnostiqueNiveauSuperieur = listDiagnostiqueNiveauSuperieur;
      this.listPrescriptionTherapeutique = listPrescriptionTherapeutique;
      this.listSurveillance = listSurveillance;
    }
  
    // Getters
    getListAnamnese(): number[] {
      return this.listAnamnese;
    }
  
    getListExamenClinique(): number[] {
      return this.listExamenClinique;
    }
  
    getListPrescriptionDiagnostique(): number[] {
      return this.listPrescriptionDiagnostique;
    }
  
    getListDiagnostiqueNiveauSuperieur(): number[] {
      return this.listDiagnostiqueNiveauSuperieur;
    }
  
    getListPrescriptionTherapeutique(): number[] {
      return this.listPrescriptionTherapeutique;
    }
  
    getListSurveillance(): number[] {
      return this.listSurveillance;
    }
  
    // Setters
    setListAnamnese(listAnamnese: number[]): void {
      this.listAnamnese = listAnamnese;
    }
  
    setListExamenClinique(listExamenClinique: number[]): void {
      this.listExamenClinique = listExamenClinique;
    }
  
    setListPrescriptionDiagnostique(listPrescriptionDiagnostique: number[]): void {
      this.listPrescriptionDiagnostique = listPrescriptionDiagnostique;
    }
  
    setListDiagnostiqueNiveauSuperieur(listDiagnostiqueNiveauSuperieur: number[]): void {
      this.listDiagnostiqueNiveauSuperieur = listDiagnostiqueNiveauSuperieur;
    }
  
    setListPrescriptionTherapeutique(listPrescriptionTherapeutique: number[]): void {
      this.listPrescriptionTherapeutique = listPrescriptionTherapeutique;
    }
  
    setListSurveillance(listSurveillance: number[]): void {
      this.listSurveillance = listSurveillance;
    }
  }
  