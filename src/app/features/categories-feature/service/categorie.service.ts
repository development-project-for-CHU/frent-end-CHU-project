import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  // /api/v1/categories/partieCommune/allergies

  private apiUrl!: string;


  constructor(private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/categories/partieCommune`;
  }

  // Obtenir toutes les catégories
  getCategories(categorieName : string): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiUrl}/${categorieName}`);
  }

  // Obtenir une seule catégorie par ID
  getCategorieById(id: string): Observable<Categorie> {
    return this.http.get<Categorie>(`${this.apiUrl}/${id}`);
  }

  // Ajouter une nouvelle catégorie
  addCategorieItems(categorieName : string , listItems : any[]): Observable<any> {
    return this.http.post<Categorie>(`${this.apiUrl}/${categorieName}`, listItems);
  }

  // Mettre à jour une catégorie existante
  // updateCategorie(id: string, categorie: Categorie): Observable<Categorie> {
  //   return this.http.put<Categorie>(`${this.apiUrl}/${id}`, categorie);
  // }

  //Supprimer une catégorie
  deleteCategorie(categorieName : string ,id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${categorieName}/${id}`);
  }

}
