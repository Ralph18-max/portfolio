import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProjet} from '../models/IProjet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://your-backend-url.onrender.com/api';

  getProjets(): Observable<IProjet[]> {
    return this.http.get<IProjet[]>(`${this.apiUrl}/projets/`);
  }

  getProjetsByUser(userId: number): Observable<IProjet[]> {
    return this.http.get<IProjet[]>(`${this.apiUrl}/projets/?user=${userId}`);
  }
}
