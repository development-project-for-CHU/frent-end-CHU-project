import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Visite } from '../models/visite.model';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  private visitsStateSubject = new BehaviorSubject<Visite[]>([]);
  visitsState$ = this.visitsStateSubject.asObservable();

  private newVisiteSubject = new BehaviorSubject<Visite | null>(null);
  newVisite$ = this.newVisiteSubject.asObservable();

  constructor() {}

  setVisitsState(visits: Visite[]): void {
    this.visitsStateSubject.next(visits);
  }

  getVisitsState(): Visite[] {
    return this.visitsStateSubject.value;
  }

  setNewVisite(newVisite: Visite): void {
    this.newVisiteSubject.next(newVisite);
  }

  getNewVisite(): Visite | null {
    return this.newVisiteSubject.value;
  }

  clearNewVisite(): void {
    this.newVisiteSubject.next(null);
  }
}
