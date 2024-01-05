import { Roles } from "../enums/role.enum";

export class User {
  id?: number; 
  nom : String ;
  prenom : String ;
  username: string;
  email: string;
  password: string;
  numTel: string;
  roles: Roles;
  service : String 

  constructor(
    username: string,
    email: string,
    password: string,
    numTel: string,
    roles: Roles,
    service : String ,
    nom : String ,
    prenom : String ,
    id?: number
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.numTel = numTel;
    this.roles = roles;
    this.service = service;
    this.nom = nom;
    this.prenom = prenom;
    if (id) {
      this.id = id;
    }
  }
}
