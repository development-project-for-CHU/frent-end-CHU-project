import { Sexe } from "../enums/sexe.enum";

export class Patient {
  nom: string;
  prenom: string;
  cin: string;
  numTel: string;
  dateNaissance: Date;
  sexe: Sexe;
  adresse: string;

  constructor(
    nom: string,
    prenom: string,
    cin: string,
    numTel: string,
    dateNaissance: Date,
    sexe: Sexe,
    adresse: string
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.cin = cin;
    this.numTel = numTel;
    this.dateNaissance = dateNaissance;
    this.sexe = sexe;
    this.adresse = adresse;
  }
}
