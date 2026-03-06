import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ILocalisation } from '../models/ILocalisation';

@Injectable({
  providedIn: 'root'
})
export class LocalisationService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://your-backend-url.onrender.com/api';

  getLocalisations(): Observable<ILocalisation[]> {
    return this.http.get<ILocalisation[]>(`${this.apiUrl}/localisations/`);
  }

  getLocalisationById(id: number): Observable<ILocalisation> {
    return this.http.get<ILocalisation>(`${this.apiUrl}/localisations/${id}/`);
  }

  getLocalisationByUser(userId: number): Observable<ILocalisation[]> {
    return this.http.get<ILocalisation[]>(`${this.apiUrl}/localisations/?user=${userId}`);
  }

  createLocalisation(localisation: ILocalisation): Observable<ILocalisation> {
    return this.http.post<ILocalisation>(`${this.apiUrl}/localisations/`, localisation);
  }

  updateLocalisation(id: number, localisation: ILocalisation): Observable<ILocalisation> {
    return this.http.put<ILocalisation>(`${this.apiUrl}/localisations/${id}/`, localisation);
  }

  deleteLocalisation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/localisations/${id}/`);
  }
}