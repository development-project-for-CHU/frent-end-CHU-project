import { Categorie } from "../../categories-feature/model/categorie.model";

export class PartieSpecialise {
    private listAnamnese: Categorie[];
    private listExamenClinique: Categorie[];
    private listPrescriptionDiagnostique: Categorie[];
    private listDiagnostiqueNiveauSuperieur: Categorie[];
    private listPrescriptionTherapeutique: Categorie[];
    private listSurveillance: Categorie[];
  
    constructor(
      listAnamnese: Categorie[],
      listExamenClinique: Categorie[],
      listPrescriptionDiagnostique: Categorie[],
      listDiagnostiqueNiveauSuperieur: Categorie[],
      listPrescriptionTherapeutique: Categorie[],
      listSurveillance: Categorie[]
    ) {
      this.listAnamnese = listAnamnese;
      this.listExamenClinique = listExamenClinique;
      this.listPrescriptionDiagnostique = listPrescriptionDiagnostique;
      this.listDiagnostiqueNiveauSuperieur = listDiagnostiqueNiveauSuperieur;
      this.listPrescriptionTherapeutique = listPrescriptionTherapeutique;
      this.listSurveillance = listSurveillance;
    }
  
    // Getters
    getListAnamnese(): Categorie[] {
      return this.listAnamnese;
    }
  
    getListExamenClinique(): Categorie[] {
      return this.listExamenClinique;
    }
  
    getListPrescriptionDiagnostique(): Categorie[] {
      return this.listPrescriptionDiagnostique;
    }
  
    getListDiagnostiqueNiveauSuperieur(): Categorie[] {
      return this.listDiagnostiqueNiveauSuperieur;
    }
  
    getListPrescriptionTherapeutique(): Categorie[] {
      return this.listPrescriptionTherapeutique;
    }
  
    getListSurveillance(): Categorie[] {
      return this.listSurveillance;
    }
  
    // Setters
    setListAnamnese(listAnamnese: Categorie[]): void {
      this.listAnamnese = listAnamnese;
    }
  
    setListExamenClinique(listExamenClinique: Categorie[]): void {
      this.listExamenClinique = listExamenClinique;
    }
  
    setListPrescriptionDiagnostique(listPrescriptionDiagnostique: Categorie[]): void {
      this.listPrescriptionDiagnostique = listPrescriptionDiagnostique;
    }
  
    setListDiagnostiqueNiveauSuperieur(listDiagnostiqueNiveauSuperieur: Categorie[]): void {
      this.listDiagnostiqueNiveauSuperieur = listDiagnostiqueNiveauSuperieur;
    }
  
    setListPrescriptionTherapeutique(listPrescriptionTherapeutique: Categorie[]): void {
      this.listPrescriptionTherapeutique = listPrescriptionTherapeutique;
    }
  
    setListSurveillance(listSurveillance: Categorie[]): void {
      this.listSurveillance = listSurveillance;
    }
  }
  