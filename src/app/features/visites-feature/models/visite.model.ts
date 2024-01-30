import { PartieCommune } from "./partieCommune.model";
import { PartieSpecialise } from "./partieSpecialise.model";

export class Visite {
  private id: string | null | undefined;
  private dateVisite: Date;
  private partieCommune: PartieCommune;
  private partieSpecialise: PartieSpecialise;

  constructor(
    id: string | null | undefined,
    dateVisite: Date,
    partieCommune: PartieCommune,
    partieSpecialise: PartieSpecialise
  ) {
    this.id = id;
    this.dateVisite = dateVisite;
    this.partieCommune = partieCommune;
    this.partieSpecialise = partieSpecialise;
  }

  // Getters
  getId(): string | null | undefined {
    return this.id;
  }

  getDateVisite(): Date {
    return this.dateVisite;
  }

  getPartieCommune(): PartieCommune {
    return this.partieCommune;
  }

  getPartieSpecialise(): PartieSpecialise {
    return this.partieSpecialise;
  }

  // Setters
  setId(id: string | null | undefined): void {
    this.id = id;
  }

  setDateVisite(dateVisite: Date): void {
    this.dateVisite = dateVisite;
  }

  setPartieCommune(partieCommune: PartieCommune): void {
    this.partieCommune = partieCommune;
  }

  setPartieSpecialise(partieSpecialise: PartieSpecialise): void {
    this.partieSpecialise = partieSpecialise;
  }
}
