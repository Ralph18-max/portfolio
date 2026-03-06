import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPointContact} from '../models/IPointContact';

export interface CreatePointContactPayload {
  user: number;
  nom_complet: string;
  objet: string;
  message: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class PointContactService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://your-backend-url.onrender.com/api';

  createPointContact(payload: CreatePointContactPayload): Observable<IPointContact> {
    return this.http.post<IPointContact>(`${this.apiUrl}/points-contact/`, payload);
  }
}
