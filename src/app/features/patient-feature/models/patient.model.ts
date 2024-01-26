import { Genre } from "../enums/genre.enum";

export class Patient {
  ipp : string;
  nom: string;
  prenom: string;
  cin: string;
  numTel: string;
  dateNaissance: Date;
  genre : Genre;
  adresse: string;
  ville : String ; 
  codePostal : String ;

  constructor(
    ipp :string, 
    nom: string,
    prenom: string,
    cin: string,
    numTel: string,
    dateNaissance: Date,
    genre: Genre,
    adresse: string , 
    ville : String , 
    codePostal : String
  ) {
    this.ipp = ipp;
    this.nom = nom;
    this.prenom = prenom;
    this.cin = cin;
    this.numTel = numTel;
    this.dateNaissance = dateNaissance;
    this.genre = genre;
    this.adresse = adresse;
    this.ville = ville ;
    this.codePostal=codePostal
  }
}
